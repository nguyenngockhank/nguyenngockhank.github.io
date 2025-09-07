# In app purchase

[Docs](https://www.openiap.dev/docs/lifecycle)

![purchase-flow](https://www.openiap.dev/purchase-flow.png)

## Apple vs Google In-App Purchase Types


::: tip Consumable (one-time use)
A product that is used once, after which it becomes depleted and must be purchased again. 

Example: fish food in a fishing app, coins, gems.
:::

::: tip Non-consumable (one-time unlock)
A product that is purchased once and does not expire or decrease with use
- Apple: explicit “Restore purchases.” 
- Google: tied to Google account.

Example: race track for a game app, remove ads, premium unlock
:::


::: tip Auto-renewable subscriptions
A product that allows users to purchase dynamic content for a set period. This type of Subscription renews automatically unless canceled by the user. 

Example: Monthly subscriptions for an app offering streaming services.
:::


::: tip Non-renewing subscriptions
A product that allows users to access content for a limited duration of time. This type of Subscription does not renew automatically.

Example: One year subscription to view live gaming content.
:::


| **Category** | **Apple App Store** | **Google Play Store** | **Restorable** | **Consumable** | **Renew** | **Notes / Differences** |
|--------------|---------------------|-----------------------|----------------|----------------|------------|--------------------------|
| **Consumable (one-time use)** | Consumable | In-app product (consumable) | ❌ No | ✅ Yes | ❌ No |  |
| **Non-Consumable (one-time unlock)** | Non-Consumable | In-app product (non-consumable) | ✅ Yes | ❌ No | ❌ No |  |
| **Subscription (auto-renew)** | Auto-Renewable Subscription | Subscription | ✅ Yes | ❌ No | ✅ Yes | |
| **Subscription (non-renew)** | Non-Renewing Subscription | ❌ Not supported | ❌ No | ❌ No | ❌ No |  |
| **Free Trial** | Supported (as intro offer) | Supported (trial/intro offer) | N/A | N/A | ✅ Yes (for subscriptions) | **Google** adds flexibility with **grace period** and **pause** options. |
| **Family Sharing** | ✅ Supported (non-consumables & subscriptions, if enabled) | ❌ Not supported | N/A | N/A | N/A | Apple lets family members share eligible purchases. Google ties only to single account. |
| **Refunds** | ✅ Handled by Apple support | ✅ Handled by Google support | N/A | N/A | N/A | Users request refunds directly from store, not from app. |
| **Promotional Offers** | Promo codes + Intro Offers | Promo codes + Custom base plans/offers | N/A | N/A | Depends | Google gives more flexibility (e.g. upgrade/downgrade offers). Apple is simpler but more restrictive. |

### Non-Renewing Subscription on Google Play

since Google Play doesn’t support Non-Renewing Subscriptions out of the box, you need to simulate it

- Define a consumable product, 3-month for example
- Every purchase gives +90 days of entitlement in **your backend**.
- Purchases aren’t “restorable” in the same way as non-consumables.
- But since access is time-limited anyway, restoration isn’t really necessary.


## FE Implementation 

### Get product info
```tsx
import { useIAP } from 'expo-iap'

interface SelectedProduct {
  sku: string
  type: 'onetime' | 'subscription'
}

export function useGetIapProduct(selectedProduct?: SelectedProduct | null) {
  const { connected, products, subscriptions, requestProducts } = useIAP()

  const queryResult = useQuery({
    enabled: !!selectedProduct && connected,
    queryKey: ['iap-product', selectedProduct?.type, selectedProduct?.sku],
    queryFn: async () => {
      if (!selectedProduct) {
        throw new Error(
          'Selected product is required to fetch IAP product details',
        )
      }
      await requestProducts({
        skus: [selectedProduct.sku],
        type: selectedProduct.type === 'subscription' ? 'subs' : 'inapp',
      })
      return null
    },
  })

  const product = useMemo(() => {
    if (!selectedProduct) {
      return null
    }
    const oneTimeProduct = products.find((p) => p.id === selectedProduct?.sku)
    const subProduct = subscriptions.find((s) => s.id === selectedProduct?.sku)
    return oneTimeProduct || subProduct || null
  }, [selectedProduct, products, subscriptions])

  return {
    ...queryResult,
    products,
    product,
  }
}
```

### Cancel subscription 

You cannot directly cancel a subscription from inside your app => provide a button link that opens the native subscription management screen.

```tsx
const ANDROID_PACKAGE_NAME = 'your.android.package.name'

function CancelSubscriptionButton({ sku }: { sku: string }) {
  function handleOpenManagement() {
    Linking.openURL(getManagementUrl())
  }

  function getManagementUrl() {
    if (isIos()) {
      return `https://apps.apple.com/account/subscriptions`
    }

    // android case
    return `https://play.google.com/store/account/subscriptions?package=${ANDROID_PACKAGE_NAME}&sku=${encodeURIComponent(sku)}`;
  }

  return (
    <Button onPresss={handleOpenManagement}>Cancel subscription</Button>
  )
}
```

### Refund  

refunds also cannot be triggered directly from your app. The best you can do is:
- Show a “Request Refund” or “Manage Purchases” button.
- Deep link users to the right page:
    - Apple: `https://reportaproblem.apple.com/`
    - Google: `https://play.google.com/store/account`

### History / Current purchases

```tsx
const { connected, getPurchaseHistories, requestProducts, getAvailablePurchases } = useIAP()

useEffect(() => {
  if (!connected) return
  initializeIAP()
}, [connected])

function initializeIAP() {
  await Promise.all([
    requestProducts({ skus: ONETIME_SKUS, type: 'inapp' }),
    requestProducts({ skus: SUBSCRIPTION_SKUS, type: 'subs' }),
    getPurchaseHistories(SUBSCRIPTION_SKUS),
    getAvailablePurchases(SUBSCRIPTION_SKUS),
  ])
}
```

- `getPurchaseHistories`: Returns **past purchases** the user has made (even if expired). Useful for:
    - Debugging what products a user has already bought.
    - Restoring transaction logs.
    - Validating against your backend (who bought what, when).
    - Showing a “Purchase History” screen to the user.
- `getAvailablePurchases`: Returns **current active entitlements** the user has (**restorable**).
    - Typically used on app launch to **restore purchases** if user reinstalls app or logs in on another device

**What if user has multiple accounts in your app, but only one Apple/Google account?**
- Apple/Google accounts are tied to the **device’s store account** (Apple ID / Google Play).
- Your app accounts (e.g. user signs up with email) are separate.
- That means:
    - Purchases are owned by the Apple/Google account.
    - If the user logs out of your app and logs in with another app account → you still see the same purchases from the store.
    - This can cause a mismatch: Example → Store account “Alice” buys subscription, but logs into app as “Bob”. Bob will still see Alice’s subscription unless you check carefully.

::: tip How do apps solve this?
🔒 Server-side validation + binding purchases to app account.

1. User makes purchase → you get transactionId (iOS) or purchaseToken (Android).
2. You **send it to your backend**.
3. Backend calls Apple/Google APIs to validate the purchase.
4. If valid, backend **links that transaction to the current logged-in app account** in your database.
5. Later, if user restores purchases:
    - You fetch from availablePurchases.
    - For each transaction, call backend → backend checks if it’s already linked to another app account.
    - If yes → you can block or warn: “This subscription is already linked to another account.”
:::

### Make payment

1. Initialize IAP
2. Load subscription products (with free trial if configured)
3. Start purchase flow
4. Handle purchase result & finish transaction
5. Verify subscription status (ideally server-side)
6. Show “Manage Subscription / Refund” links

Sample code
```tsx
import { useEffect } from 'react'
import { Alert, Platform } from 'react-native'
import { useIAP, consumePurchaseAsync } from 'expo-iap'
import type { SelectedProduct } from './useGetIapProduct'
import { useGetIapProduct } from './useGetIapProduct'

export function usePurchaseFlow(selectedProduct?: SelectedProduct | null) {
  const { currentPurchase, finishTransaction, requestPurchase, requestSubscription } = useIAP()
  const { product, ...queryResult } = useGetIapProduct(selectedProduct)

  // Request purchase
  const buy = async () => {
    if (!selectedProduct) return
    try {
      if (selectedProduct.type === 'subscription') {
        await requestSubscription({ sku: selectedProduct.sku })
      } else {
        await requestPurchase({ sku: selectedProduct.sku })
      }
    } catch (err) {
      console.warn('Purchase error:', err)
    }
  }

  // Handle purchase results
  useEffect(() => {
    const handlePurchase = async () => {
      if (!currentPurchase || !selectedProduct) return
      try {
        const { productId, purchaseToken } = currentPurchase

        // Step 1: acknowledge
        await finishTransaction({ purchase: currentPurchase })

        // Step 2: special handling for consumables
        if (selectedProduct.type === 'onetime') {
          if (Platform.OS === 'android' && purchaseToken) {
            await consumePurchaseAsync(purchaseToken)
          }
          Alert.alert('✅ Purchase Success', `You bought ${productId}`)
        } else if (selectedProduct.type === 'subscription') {
          Alert.alert('✅ Subscription Active', `Subscribed to ${productId}`)
        }

        // TODO: send receipt/token to backend for validation
      } catch (err) {
        console.warn('handlePurchase error:', err)
      }
    }
    handlePurchase()
  }, [currentPurchase, selectedProduct])

  return {
     product, buy,
  }
}
```

## Backend implementation

### Setup webhook

Feature | Apple | Google 
| ---- | ---- | ------ |
Location | App Information → App Store Server Notifications |  Monetize with Play → Monetization setup → Real-time developer notifications
Transport | Direct **HTTPS POST** from Apple servers |  Google Cloud **Pub/Sub → Push to HTTPS endpoint**
Delivery format | JSON payload inside a signed JWT | JSON wrapped in Pub/Sub message (base64 encoded) 
Verification |. Verify JWT signature with **Apple public key** | Verify JWT from Pub/Sub (Google signed) + call **Play Developer API**
Event types  | `DID_RENEW`, `DID_FAIL_TO_RENEW`, `DID_CHANGE_RENEWAL_STATUS`, `REFUND`, `EXPIRED`, etc. | `SUBSCRIPTION_PURCHASED`, `SUBSCRIPTION_RENEWED`, `SUBSCRIPTION_CANCELED`, `ONE_TIME_PRODUCT_PURCHASED`, etc.
Data retrieval | Payload includes full transaction object (`transactionId`, `productId`, `originalTransactionId`) | Must call Play Developer API (`purchases.subscriptions.get`, `purchases.products.get`) to fetch details
Reliability | At-least-once delivery (Apple retries until 200 OK) | At-least-once delivery (Pub/Sub retries until ack)
Retry mechanism | Apple retries periodically if no 200 OK response | Pub/Sub retries until acknowledged by HTTPS 200 response
Multi-account issue | Transaction tied to **Apple ID** → must map to your app user | Token tied to **Google account on device** → must map to your app user

**Backend workflow (common pattern)**
1. User buys in app → App sends purchaseToken (Android) or transactionId (iOS) to backend.
2. Backend validates with App Store / Play Store APIs.
3. Backend links purchase to userId in your DB.
4. Webhook receives updates:
    - Google → via Pub/Sub push.
    - Apple → via direct POST.
5. Backend verifies event + updates DB:
    - Mark subscription as active/expired/canceled.
    - Handle refunds.
6. App queries backend (/me/membership) to show correct entitlement.

### Code Implementation

:::: tabs


::: tab config

`configuration.ts`

```ts
export default () => ({
  apple: {
    shared_secret: process.env.APPLE_SHARED_SECRET,
    team_id: process.env.APPLE_TEAM_ID,
    issuer_id: process.env.APPLE_ISSUER_ID,
    key_id: process.env.APPLE_KEY_ID,
    private_key: process.env.APPLE_PRIVATE_KEY,
    bundle_id: process.env.APPLE_BUNDLE_ID,
  },
  google: {
    serviceAccountKey: process.env.GOOGLE_SERVICE_ACCOUNT_KEY,
    packageName: process.env.GOOGLE_PACKAGE_NAME,
  },
})
```

`payment.module.ts`

```ts
import { ConfigModule } from '@nestjs/config'
import config from './configuration'

@Module({
  imports: [
    ConfigModule.forFeature(config),
    // .. others
  ],
  controllers: [
    PaymentController,
  ],
  providers: [
    GoogleIapService,
    AppleIapService,
  ],
})
export class PaymentModule { }

```
:::

::: tab controller
`payment.controller.ts`

```ts
@Post('google/iap/webhook')
async handleGoogleWebhook(@Body() payload: any) {
  this.logger.log('Google Play notification payload', JSON.stringify(payload))

  const base64Data = payload?.message?.data
  if (!base64Data) throw new BadRequestException('Invalid payload')

  const notificationPayload = JSON.parse(base64url.decode(base64Data)) as GooglePlayNotificationPayload
  return this.googleIapService.handleNotification(notificationPayload)
}


@Post('apple/iap/webhook')
async handleWebhook(
  @Body('signedPayload') signedPayload: string,
  @Headers('x-apple-notification-type') notificationType: string,
) {
  this.logger.log('Apple signedPayload', signedPayload)
  return this.appleIapService.handleNotification(notificationType, signedPayload)
}
```
:::




::: tab google-service
`google-iap.service.ts`

```ts
import { androidpublisher_v3, google } from 'googleapis'

export interface GooglePlayNotificationPayload {
  version: string
  packageName: string
  eventTimeMillis: string
  oneTimeProductNotification?: OneTimeProductNotification
  subscriptionNotification?: SubscriptionNotification
}

@Injectable()
export class GoogleIapService {
  private readonly publisher: androidpublisher_v3.Androidpublisher

  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
    private readonly logger: LoggerService,
  ) {
    // Initialize Google Play API client
    const serviceAccountKey = this.config.get('google.serviceAccountKey')
    const credentials = typeof serviceAccountKey === 'string'
      ? JSON.parse(serviceAccountKey)
      : serviceAccountKey

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/androidpublisher'],
    })

    this.publisher = google.androidpublisher({
      version: 'v3',
      auth,
    })
  }


  async handleNotification({ subscriptionNotification, oneTimeProductNotification }: GooglePlayNotificationPayload) {
    if (oneTimeProductNotification) {
      const { sku, purchaseToken } = oneTimeProductNotification;
      await this.verifyProduct(sku, purchaseToken)
      // NOTE: handle update data...
      return 
    }

    const { subscriptionId, purchaseToken } = subscriptionNotification;
    await this.verifySubscription(subscriptionId, purchaseToken)
    // handle update data
    return
  }

  async verifyProduct(productId: string, purchaseToken: string) {
    const res = await this.publisher.purchases.products.get({
      packageName: this.config.get('google.packageName'),
      productId,
      token: purchaseToken,
    });
    return res.data; // includes purchaseState, consumptionState, etc.
  }

  async verifySubscription(subscriptionId: string, purchaseToken: string) {
    const res = await this.publisher.purchases.subscriptions.get({
      packageName: this.config.get('google.packageName'),
      subscriptionId,
      token: purchaseToken,
    });
    return res.data; // includes expiryTimeMillis, purchaseState, etc.
  }
  // other code
}
```
:::

::: tab apple-service
`apple-iap.service.ts`

```ts
import * as jose from 'jose';

@Injectable()
export class AppleIapService {
  private appleJWKSUrl = 'https://api.storekit.itunes.apple.com/inApps/v1/notifications/jwsPublicKeys';
  private jwks: jose.JWTVerifyGetKey;

  constructor() {
    this.jwks = jose.createRemoteJWKSet(new URL(this.appleJWKSUrl));
  }

  async handleNotification(signedPayload: string) {
    const payload: AppleNotificationPayload = await this.verifyNotification(signedPayload)
    const { notificationType, subtype, data: innerData } = payload;

    // Decode inner signed JWS
    const transaction = await this.appleService.decodeTransaction(
      payload,
    );

    console.log('Transaction:', transaction);

    // 👉 Business logic here:
    // - Update membership/subscription in DB
    // - Handle DID_RENEW, DID_FAIL_TO_RENEW, EXPIRED, etc.
    // - transaction.productId, transaction.transactionId, transaction.originalTransactionId


    return
  }


  async verifyNotification(signedPayload: string): Promise<AppleNotificationPayload> {
    try {
      // Verify signature
      const { payload } = await jose.jwtVerify(signedPayload, this.jwks, {
        algorithms: ['ES256'],
      });

      return payload; // Contains notificationType, subtype, data
    } catch (err) {
      console.error('Apple JWS verification failed:', err);
      throw new Error('Invalid Apple notification');
    }
  }

  async decodeTransaction(payload: AppleNotificationPayload) {
    const { data: { signedTransactionInfo } } = payload;
    const { payload } = await jose.jwtVerify(signedTransactionInfo, this.jwks, {
      algorithms: ['ES256'],
    });
    return payload; // { transactionId, productId, purchaseDate, ... }
  }
}
```
:::
::::

