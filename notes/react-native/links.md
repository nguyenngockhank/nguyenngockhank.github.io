# Links 


In React Native, **deep links** and **universal links** are both methods for navigating users to specific content within an app, but they function differently and are implemented in distinct ways.


## Types 

- **Standard Deep Links**: These are the most basic type, using a custom URL scheme. Their main limitation is that they only work if the user already has the app installed. If the app isn't on the device, the link will simply fail to open.
- **Deferred Deep Links**: This is a more advanced type that provides a better user experience. If a user clicks a deferred deep link and doesn't have the app installed, they are first redirected to the App Store or Google Play Store to download the app. After the app is installed and opened for the first time, it will automatically navigate the user to the intended content.
- **Universal Links (iOS) and App Links (Android)**: These are the modern, preferred method of deep linking. They use standard web URLs (e.g., `https://my-app.com/profile/john-doe`) that work for both the web and the app.


### Deep links 

Deep links use a custom URL scheme (e.g., `myapp://product/123`) to open your application and direct the user to a specific screen. This type of linking is platform-agnostic, meaning it can work on both Android and iOS. 

#### Drawbacks:
- **App not installed**: If the user doesn't have the app installed, the link will simply fail to open, resulting in a poor user experience.
- **Prompt**: On many devices, clicking a deep link will show a dialog asking the user which app they want to use to open the link, which can also be disruptive.
- **Custom scheme**: It requires you to define and register a unique URL scheme for your app.

### Universal Links 

**Universal Links (iOS) and App Links (Android)** are the more modern and preferred approach. They use a standard web URL (e.g., `https://myapp.com/product/123`) to provide a more seamless experience. Here's how they differ from traditional deep links:
- **Seamless experience**: If the app is installed, the link opens the app directly to the specified content without showing a prompt. If the app is not installed, the link simply opens the corresponding page in a web browser.
- **Security**: This method is more secure because it requires a two-way association. You need to host a configuration file on your web server that links your website domain to your app, and your app's code needs to verify this association. This prevents other apps from claiming your domain's links.
- **Shared codebase**: Since they use standard web URLs, the same link can be used across web, email, or social media, simplifying your marketing efforts.

## Deferred deep links

![Deferred deep link works](https://i.pinimg.com/736x/e9/6f/72/e96f7228d58778f9a460a9ca82b048f2.jpg)

Achieving deferred deep linking is a complex process that goes beyond a simple, one-size-fits-all solution. It typically requires the use of a specialized third-party service or Mobile Measurement Partner (MMP) because it involves matching a user who clicked a link with the same user who later installed and opened the app for the first time. This process is often referred to as **attribution**.

You can't achieve this functionality with only native or standard React Native code because the app isn't installed when the user clicks the link, so **there's no way for the app itself to "remember" the link data**.


## Code implementation

### At react native

React Native's **Linking** API is the primary tool for handling both types of links. 

**Case 1**: check if the app was opened from a link

```ts
Linking.getInitialURL()
```

**Case 2**: Handle links while the app is already running. 

```ts
Linking.addEventListener('url', callback)
```

### For Universal Links 

Both iOS and Android require a specific file to be hosted on your domain to establish the trust relationship between your app and your website. This file must be served over **HTTPS** with **no redirects**.
- **iOS (Apple App Site Association file)**: You need to create a file named `apple-app-site-association` (with no file extension) and place it in the `.well-known` directory of your web server. The file contains a JSON object that specifies your app's Team ID, bundle identifier, and the paths on your website that should be handled by the app.
- **Android (Digital Asset Links file)**: Similar to iOS, you need to create a file named `assetlinks.json` and place it in the `.well-known` directory. This JSON file establishes a link between your website and your app using your app's package name and a SHA256 fingerprint of your app's signing certificate. You can use the App Links Assistant in Android Studio to help generate this file.


Example structure on Nextjs

```
app/
public/ 
  .well-known/
     apple-app-site-association
     assetlinks.json
```

:::: tabs

::: tab apple-app-site-association
```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "yourapp.id.ios",
        "paths": [
          "/",
          "/post/*",
          "/store/*"
        ]
      }
    ]
  },
  "activitycontinuation": {
    "apps": [
      "yourapp.id.ios"
    ]
  },
  "webcredentials": {
    "apps": [
      "yourapp.id.ios"
    ]
  }
}
```
:::


::: tab assetlinks.json
```json
[
  {
    "relation": [
      "delegate_permission/common.handle_all_urls"
    ],
    "target": {
      "namespace": "android_app",
      "package_name": "yourapp.id.android",
      "sha256_cert_fingerprints": [
        "5d:e3:26:ca:fd:...",
        "8b:73:87:b7:78:...",
        "2b:50:88:30:75:..."
      ]
    }
  }
]

```
:::
::::



### Solutions for Deferred Deep Linking

Given the complexity, most developers rely on dedicated third-party services. These services provide an SDK that you integrate into your app, which handles all the complex logic of attribution and data passing.

1. **Mobile Measurement Partners (MMPs)**: Services like *[Branch.io](https://www.branch.io/glossary/deferred-deep-linking/)*, *[AppsFlyer](https://www.appsflyer.com/products/customer-experience-deep-linking/)*, and *Singular* specialize in this. They provide robust SDKs for React Native that handle both deep linking and deferred deep linking. They also offer dashboards for marketers to create and track campaigns and to analyze user behavior.
2. **Firebase Dynamic Links**: While deprecated, Firebase Dynamic Links was a popular solution for this. Google has announced that the functionality will be replaced by other solutions in the future, so it is no longer a recommended approach.
3. **Manual Implementation (Not Recommended)**: It's technically possible to build a simplified version of this yourself by setting up your own attribution logic on a web server, but this is a fragile and complex process. It involves using server-side redirects, cookies, and device fingerprinting to "remember" the user, which is difficult to do accurately and securely and is not a scalable solution.

## Universal Links and deferred deep links 

Universal Links and deferred deep links are not mutually exclusive; in fact, they work together in a very powerful way. Universal links are a type of deep link, while deferred deep linking is a capability or feature that uses an underlying deep linking mechanism like a Universal Link.

### The Journey of a Click

A Branch Universal Link is a single, web-based URL that you use everywhere. It might look something like this:

`https://yourcompany.app.link/Jb5l`

Let's imagine a user sees this link in a Facebook ad for a specific product in your e-commerce app.

**Scenario 1: User has the app installed**
1. The user clicks on `https://yourcompany.app.link/Jb5l.`
2. Because your app is configured with Branch's SDK and your `apple-app-site-association` file is set up correctly (a task Branch handles for you), the iOS operating system recognizes this as a Universal Link associated with your app.
3. Instead of opening a web browser, the OS bypasses the browser entirely and launches your app.
4. Inside your app, the Branch SDK is initialized and receives the data associated with the link. This data is a payload of information that you defined when you created the link. For example, it might contain a key-value pair like `"product_id": "Jb5l"` and `"referrer": "facebook_ad"`.
5. Your app's code reads this data and navigates the user directly to the product page for the item with ID `Jb5l`.

**Scenario 2: User does NOT have the app installed**
1. The user clicks on the exact same link: `https://yourcompany.app.link/Jb5l`.
2. Since the app is not on their device, the iOS or Android operating system recognizes the link is not associated with an installed app and routes the user to a web browser.
3. The browser is automatically redirected to the URL you configured as the fallback. Branch's dashboard allows you to set this up easily. Common fallbacks are:
    - The App Store or Google Play Store page for your app.
    - A web page that provides more information about the product and a **call-to-action** to download the app.
4. The user downloads the app from the store.
5. When the user opens the app for the very first time, the Branch SDK performs its attribution magic. It matches the new install to the initial click that happened minutes ago (using device ID, IP address, etc.).
6. Once the match is made, the SDK passes the original link data (`"product_id": "Jb5l"`) to the app.
7. Your app's code reads this data and navigates the user to the product page, even though they just installed the app. This is the **deferred deep linking** part.


**The Key Takeaway**
Branch.io makes a single link (https://yourcompany.app.link/Jb5l) do all of the following:
- **Act as a Universal Link** for users who have the app, providing a seamless in-app experience.
- **Act as a deferred deep link** for new users, ensuring they land on the right content after installation.
- **Provide a fallback** to a web page or app store for users who don't have the app.
- **Collect analytics** on every click, install, and open, giving marketers valuable data about which campaigns are working.
