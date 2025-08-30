# Over the air (OTA) with Expo updates

AI generated

Updating a React Native app “over the air” (OTA) means you ship JavaScript/asset updates directly to users’ devices without requiring them to download a new version from the App Store or Google Play. This is super useful for fixing bugs, updating UI, or tweaking business logic — but you can’t update anything in **native code** (new permissions, SDKs, native modules, etc.) this way.


## Utils commands 

**Install**
```sh
npx expo install expo-updates
```

**Publish an update**
```sh
npx expo publish
```


## Config
`app.config.js`

```js

export default {
  expo: {
    name: 'Your app',
    slug: 'your-app',
    version: '1.0.2',
    updates: {
        url: process.env.EXPO_UPDATE_URL || '',
        assetPatternsToBeBundled: ['assets/**/**'],
        checkAutomatically: 'NEVER',
        enabled: true,
        fallbackToCacheTimeout: 0,
        requestHeaders: {
            'x-api-key': process.env.EXPO_UPDATE_SECRET,
        },
        codeSigningMetadata: {
            keyid: 'main',
            alg: 'rsa-v1_5-sha256',
        },
    }
    //...
  }
}
```

**assetPatternsToBeBundled**
- Glob pattern of files that should be bundled with the app binary.
- Example: `['assets/**/**']` → means include all files inside `assets/` (e.g., images, fonts, icons).
- Ensures users have these assets even before the app fetches OTA updates.

**checkAutomatically**
- Controls when the app checks for updates.
- Possible values:
    - "**ON_LOAD**" → check immediately on app launch.
    - "**ON_ERROR_RECOVERY**" → check only after recovering from an error.
    - "**NEVER**" → don’t check automatically (you must call update functions manually).
- Here it’s set to "**NEVER**", meaning you’ll have to trigger OTA update checks in your code (using `Updates.fetchUpdateAsync()`).

**fallbackToCacheTimeout**
- How long (in ms) the app waits for a new update before falling back to the cached bundle.
- `0` means **use the cached version immediately** and load updates in the background (safer for UX because the app launches instantly).

**requestHeaders**
- Custom headers sent with OTA update requests
- This is often used when your OTA server is **private/protected** and needs authentication (like an API key).

**codeSigningMetadata**
- Metadata for update code signing (security feature).
- Ensures OTA updates are cryptographically verified before being applied (prevents tampering).
- Fields:
    - keyid: `'main'` → identifies which signing key to use.
    - alg: `'rsa-v1_5-sha256'` → specifies the signing algorithm.

  

## Self-hosted OTA system

### High-level architecture

- **Clients (iOS/Android)**: your RN app using expo-updates with:
    - updates.url → your Update API base URL
    - requestHeaders → API key, etc.
    - codeSigningMetadata → key id + algorithm
- **Update API (Node/Express or similar)**:
    - Authenticates requests
    - Selects the right update by runtimeVersion + platform
    - Returns a signed manifest (and 304 when nothing new)
- **Asset storage (S3/GCS/Azure Blob + CDN)**:
    - Stores index.bundle (launch asset) + images/fonts/maps
    - Served over HTTPS with immutable caching
- **CI/CD pipeline**:
    - Builds production JS bundles + assets
    - Generates an Expo manifest (JSON)
    - Signs the manifest with your private key
    - Uploads assets to storage/CDN
    - Publishes a record to your Update DB
- **Database (Postgres/SQLite)**:
    - Tracks updates: id, createdAt, runtimeVersion, platform, manifest URL, assets



### Data model (minimal)
**updates**
- id (uuid)
- platform (ios | android)
- runtime_version (string; must match app’s runtimeVersion)
- channel (e.g., production, staging) — optional but useful
- commit_time (timestamp)
- manifest_url (string) — or store the JSON inline
- launch_asset_url (string)
- assets (jsonb): array of {fileName, url, contentType}
- rollout (int 0–100) — optional for phased releases
- is_disabled (bool) — for fast rollback


### Expo manifest shape
Expo manifest shape is what your API returns. 

`expo-updates` expects a **manifest** describing the launch asset + other assets. A typical response for `GET /update`:

```json
{
  "id": "2b1f9c0a-0a4e-4bda-a2bc-3bd5d7a6f0b8",
  "createdAt": "2025-08-30T06:40:00.000Z",
  "runtimeVersion": "1.0.0", 
  "launchAsset": {
    "key": "bundle-ios-2b1f9c0a",
    "contentType": "application/javascript",
    "url": "https://cdn.example.com/updates/2b1f9c0a/index.ios.bundle"
  },
  "assets": [
    {
      "key": "asset_82f6a.png",
      "contentType": "image/png",
      "url": "https://cdn.example.com/updates/2b1f9c0a/assets/asset_82f6a.png"
    },
    {
      "key": "fonts_inter_regular",
      "contentType": "font/ttf",
      "url": "https://cdn.example.com/updates/2b1f9c0a/assets/Inter-Regular.ttf"
    }
  ],
  "metadata": {},
  "extra": {
    "channel": "production",
    "branchName": "main",
    "commit": "cafe123"
  }
}
```

**Required headers your server should set**

- `expo-protocol-version: 1`
- `expo-server-defined-headers: {}` (optional)
- `expo-manifest-signature: <base64 signature>` (if you enable code signing)
- `cache-control: no-cache` (for the manifest route)

> The `expo-manifest-signature` is the RSA signature of the manifest body (string). The client validates it using the **public key** embedded during build (via expo-updates Code Signing).



### Update API (Node/Express)

```js
// app.ts
import express from "express";
import crypto from "crypto";

const app = express();
app.use(express.json({ limit: "2mb" }));

// Load your private key for signing manifests
const PRIVATE_KEY_PEM = process.env.MANIFEST_PRIVATE_KEY_PEM!;
const API_KEY = process.env.EXPO_UPDATE_SECRET!;

function signManifest(body: string) {
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(body);
  signer.end();
  return signer.sign(PRIVATE_KEY_PEM).toString("base64");
}

app.get("/update", async (req, res) => {
  // --- Auth
  if (req.header("x-api-key") !== API_KEY) {
    return res.status(401).send("Unauthorized");
  }

  // --- Identify client
  const platform = (req.header("expo-platform") || "").toLowerCase(); // "ios" | "android"
  const runtimeVersion = req.header("expo-runtime-version");          // must match your app
  const channel = req.header("expo-release-channel") || "production"; // optional

  if (!platform || !runtimeVersion) {
    return res.status(400).send("Missing platform/runtimeVersion");
  }

  // --- Lookup the newest enabled update for this (platform, runtimeVersion, channel)
  const update = await findLatestUpdate({ platform, runtimeVersion, channel });
  if (!update) {
    // No update — respond 204; client keeps current bundle
    return res.status(204).end();
  }

  const manifest = {
    id: update.id,
    createdAt: update.commit_time.toISOString(),
    runtimeVersion: update.runtime_version,
    launchAsset: {
      key: update.launch_key,
      contentType: "application/javascript",
      url: update.launch_asset_url
    },
    assets: update.assets,
    metadata: update.metadata || {},
    extra: { channel, commit: update.commit }
  };

  const body = JSON.stringify(manifest);
  const signature = signManifest(body);

  res.set("expo-protocol-version", "1");
  res.set("expo-manifest-signature", signature);
  res.set("cache-control", "no-cache");
  return res.type("application/json").send(body);
});

app.get("/healthz", (_, res) => res.send("ok"));

app.listen(process.env.PORT || 8080);
```


### Building & packaging updates in CI

```sh
# iOS
npx expo export --platform ios --output-dir dist/ios
# Android
npx expo export --platform android --output-dir dist/android
```

This produces:
- `dist/<platform>/index.bundle` (launch asset)
- `dist/<platform>/assets/*` (images/fonts)




### Code signing
- Generate an RSA keypair:
  - Private key (kept in CI or your Update API container)
  - Public key is embedded in the app at build time
- Your `expo-updates` app.json
- The server signs the manifest (RSA-SHA256 → base64) and returns it in `expo-manifest-signature`.
- The client verifies against the shipped public key, **rejecting tampered updates**.

### Client logic

```tsx
import * as Updates from "expo-updates";

export async function checkAndApplyOTA() {
  try {
    const update = await Updates.checkForUpdateAsync();
    if (update.isAvailable) {
      await Updates.fetchUpdateAsync();
      // You can choose to reload now or later:
      await Updates.reloadAsync();
    }
  } catch (e) {
    // log to your telemetry
  }
}
```

Good places to call this:
- On cold start after splash screen (don’t block first paint)
- On app resume if > X hours since last check
- Expose a “Check for updates” button in Settings

### Caching & CDN

- Manifest: Cache-Control: no-cache (always revalidate)
- Assets: Cache-Control: public, max-age=31536000, immutable
- Use content-addressed file names (hashes) to get perfect CDN caching:
  - e.g., asset_82f6a.png where 82f6a is a content hash

### Channels, rollouts, and targeting (nice-to-have)
- **Channels**: production, staging, QA — selected via request header or query
- **Rollout**: return the update only to X% of devices (e.g., by hashing `installationId`)
- **Targeting**: filter by `expo-app-build-id`, `expo-updates-environment`, locale, etc.

### Rollback strategy
- Add an `“Emergency disable”` flag on an update row; the API stops serving it immediately.
- Keep N previous good updates; allow quick pinning to a known stable update id.
- Log crash-free rate by update id to detect regressions.

### Observability

- Log each /update request with: ip, platform, runtimeVersion, channel, servedUpdateId
- Metrics: requests/min, 204 rate (no update), latency, signature errors
- Track **install success** client-side (postback to your API)

### Security checklist

- HTTPS everywhere
- API key (or signed JWT) in requestHeaders
- Code signing required (reject unsigned manifests)
- Lock down your object storage to **CDN origin access only**
- Rotate keys on a schedule; support multiple keyids in the app if rotating

### CI/CD example (GitHub Actions sketch)

```yml
name: OTA Publish
on:
  workflow_dispatch:
  push:
    branches: [ main ]
jobs:
  build-publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - name: Build bundles
        run: |
          npx react-native bundle --platform ios --dev false --entry-file index.js \
            --bundle-output dist/ios/index.ios.bundle --assets-dest dist/ios/assets
          npx react-native bundle --platform android --dev false --entry-file index.js \
            --bundle-output dist/android/index.android.bundle --assets-dest dist/android/assets
      - name: Upload to S3
        run: node scripts/upload-to-s3.mjs
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET }}
          S3_BUCKET: my-ota-bucket
      - name: Publish manifest record
        run: node scripts/publish-manifest.mjs
        env:
          UPDATE_API_URL: https://updates.example.com/admin/publish
          ADMIN_TOKEN: ${{ secrets.UPDATE_ADMIN_TOKEN }}
```