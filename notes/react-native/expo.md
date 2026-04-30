# Expo

In 2026, Expo has become the industry-standard ecosystem for building, deploying, and maintaining production-grade cross-platform apps. It acts as a powerful layer on top of React Native that handles the "messy" parts of mobile development—like native configurations and app store submissions.

**The Core Ecosystem**
- **Expo SDK**: A massive suite of libraries that provide instant access to native device features (Camera, FaceID, Sensors, Notifications, etc.) without you ever having to write Swift, Kotlin, or Java.
- **Expo Router**: A file-based routing system (similar to Next.js on the web) that makes mobile navigation intuitive and handles deep linking automatically.
- **EAS (Expo Application Services)**: A cloud-based workflow that builds your app binaries (IPA/APK) and submits them to the App Store and Google Play for you.

## Workflow 


Feature |	Managed (CNG) |	Bare Workflow
------- | ------------- | ----------
`ios` / `android` folders	| Generated & Hidden	| Committed to Git
Native Modules	| Supported via Config Plugins	| Supported via Manual Linking
Upgrading RN	| Automatic (Change version + prebuild)	| Manual (Huge effort)
EAS Build	| Fully Integrated	| Supported (but requires config)
Custom Native Code	| via Local Expo Modules	| Direct Edit in Xcode/Android Studio
Developer Experience	| High (JS-focused)	| Medium (Requires Native Knowledge)

- CNG: Continuous Native Generation

## app.config.js 

```js

export default {
  expo: {
    name: 'Sổ tay chém gió',
    slug: 'stcg',
    version: '1.0.1',
    orientation: 'portrait',
    icon: './assets/app-icon.png',
    scheme: 'stcg',
    userInterfaceStyle: 'automatic',
    platforms: ['ios', 'android'],
    newArchEnabled: true,
    runtimeVersion: '1.0.1',
    ios: {
      supportsTablet: false,
      bundleIdentifier: 'com.stcg.app',
      usesAppleSignIn: true,
      googleServicesFile: './GoogleService-Info.plist',
      config: {
        usesNonExemptEncryption: false,
      },
      infoPlist: {
        LSApplicationQueriesSchemes: ['stcg'],
        UIDesignRequiresCompatibility: true,
      },
      entitlements: {
        'aps-environment':
          process.env.APP_ENV === 'production' ? 'production' : 'development',
        'com.apple.developer.applesignin': ['Default'],
      },
      associatedDomains: [
        'applinks:link.sotaychemgio.com',
      ],
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      permissions: [
        'android.permission.INTERNET',
        'android.permission.ACCESS_NETWORK_STATE',
        'android.permission.POST_NOTIFICATIONS',
      ],
      package: 'com.stcg.app',
      googleServicesFile: './google-services.json',
      intentFilters: [
        {
          action: 'VIEW',
          autoVerify: true,
          data: [
            {
              scheme: 'https',
              host: 'link.sotaychemgio.com',
              pathPrefix: '/',
            },
            {
              scheme: 'https',
              host: 'www.link.sotaychemgio.com',
              pathPrefix: '/',
            },
          ],
          category: ['BROWSABLE', 'DEFAULT'],
        },
      ],
    },
    plugins: [
      'expo-router',
      'expo-localization',
      'expo-iap',
      '@react-native-firebase/app',
      '@react-native-firebase/messaging',
      '@react-native-firebase/crashlytics',
      [
        'expo-tracking-transparency',
        {
          userTrackingPermission:
            'This identifier will be used to deliver personalized ads to you.',
        },
      ],
      [
        'expo-image-picker',
        {
          photosPermission:
            'Photo access is needed to choose a profile picture from your library.',
          cameraPermission:
            'Camera access is needed to take a profile picture with the camera.',
        },
      ],
      [
        'expo-camera',
        {
          cameraPermission: 'Camera access is needed to scan QR code for login',
          barcodeScannerEnabled: true,
          recordAudioAndroid: false,
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    owner: 'Khanh Developer',
  },
}

```

**1. Identity & Core Setup**
- **name** & **slug**: The display name is `Sổ tay chém gió`; the internal Expo identifier is `stcg`.
- **newArchEnabled**: `true` - using the React Native New Architecture (TurboModules/Fabric), which offers better performance and smoother UI threading.
- **runtimeVersion**: Crucial for **OTA (Over-The-Air)** updates. 
- **icon** & **adaptiveIcon**: set app icon and adaptive icon. Adaptive icon is for Android 8 and above with safezone.

**2. Deep Linking & Universal Links**

This file has a very robust setup for getting users into the app from the web:

- **scheme**: `frf`: Allows opening the app via `frf://`.
- **associatedDomains** (iOS) & **intentFilters** (Android): These configure Universal Links. If a user clicks a link to `link.sotaychemgio.com`, the phone will open the app directly instead of the browser.


**3. Authentication & Firebase**
- **Social Auth**: Includes configurations for Apple Sign-In and Google Sign-In. Note the `googleServicesFile` paths, which link your Firebase project's configuration.
- **Firebase Suite**: It integrates `@react-native-firebase` for Messaging (Push Notifications) and Crashlytics (Error tracking).

**4. Native Permissions (Privacy)**
- **expo-image-picker** & **expo-camera**: Custom messages for profile pictures and QR scanning.
- **expo-tracking-transparency**: Required by Apple to track users for personalized ads.