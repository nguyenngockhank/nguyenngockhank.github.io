# Sharing

## Implementation

### **Built-in Share**
```jsx
try {
    const result = await Share.share({
        message:
            "Check out this awesome content! https://example.com/content/123",
        title: "Awesome Content", // android only
        url: "https://example.com/content/123", // iOS only
    });

    if (result.action === Share.sharedAction) {
        if (result.activityType) {
            // Shared with specific activity (iOS)
            console.log("Shared with activity: ", result.activityType);
        } else {
            // Shared generally
            console.log("Content shared successfully!");
        }
    } else if (result.action === Share.dismissedAction) {
        console.log("Share dismissed");
    }
} catch (error: any) {
    Alert.alert("Error", error.message);
}
```

### **Share messages & files with other apps**: 
use this lib [react-native-share](https://www.npmjs.com/package/react-native-share)

## Benefit from Universal links

Universal links and Android App Links provide a major benefit for sharing content on social media and messaging apps: they allow the web crawlers of these platforms to get and display a rich, well-formatted preview of the content, including a title, description, and image.

To ensure the crawler finds the right information, you need to add specific metadata to the HTML of the corresponding webpage. This is typically done using **Open Graph tags** (for platforms like Facebook) and other similar metadata standards. 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Awesome Website</title>
    
    <meta name="description" content="This is the main description of my website.">

    <meta property="og:title" content="The Title of My Shared Link" />
    <meta property="og:description" content="This is a compelling description that encourages clicks." />
    <meta property="og:image" content="https://www.example.com/images/my-image.jpg" />
    <meta property="og:url" content="https://www.example.com/my-page" />
    <meta property="og:type" content="website" />
    
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="The Title of My Shared Link" />
    <meta name="twitter:description" content="This is a compelling description that encourages clicks." />
    <meta name="twitter:image" content="https://www.example.com/images/my-image.jpg" />
    <meta name="twitter:site" content="@your_twitter_handle" />
</head>
<body>
    <h1>Welcome to My App</h1>
    <p>The content of your web page goes here...</p>
</body>
</html>
```

## Recommended setup for SEO + Branch

**1. Serve SEO-friendly pages on your domain (Vercel)**
- Example: `https://myapp.com/product/123` → returns HTML with product title, description, image, OG tags, etc.
- This is what Google indexes and what shows up nicely in Facebook/Twitter previews.

**2. Embed Branch deep link data into the page**
- You can generate a Branch link for that product (via Branch SDK/API).
- On your Vercel page, add `<meta>` tags or a small JS snippet that automatically redirects app users (mobile devices) into the Branch link.
- That way:
    - **Crawlers (Google, FB, etc.)** see a rich HTML page (good for SEO).
    - **Users on mobile** get routed through Branch for deferred deep linking.

**3. Optionally use Branch custom domain**
- You can configure `link.myapp.com` to point to Branch (CNAME).
- Then your SEO pages `(myapp.com/...)` can embed/redirect to Branch links under your brand instead of `app.link`.

**Flow looks like this**
- User clicks `https://myapp.com/product/123`.
- If a bot/crawler → stays on the SEO page.
- If a real user on iOS/Android → JS (or smart banner) triggers → opens Branch link (`link.myapp.com/xyz`).
- Branch handles **open app if installed / send to store if not / deferred deep link data**.


```jsx
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

type ProductPageProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// 🔹 Generate SEO metadata
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  // Pretend to fetch product from DB
  const product = {
    title: "Cool Sneakers",
    description: "The latest sneakers you’ll love.",
    image: "https://mycdn.com/images/sneaker.jpg",
  };

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [product.image],
      url: `https://myapp.com/product/${params.id}`,
    },
  };
}

export default async function ProductPage({ params, searchParams }: ProductPageProps) {
  const id = params.id;
  const branchDomain = "https://myapp.app.link";

  // detect UA from request headers
  const ua = headers().get("user-agent") || "";
  const isMobile = /android|iphone|ipad|ipod/i.test(ua);

  if (isMobile && !isBot(ua)) {
    // merge query params with product_id
    const query = new URLSearchParams({ product_id: id });
    for (const [key, value] of Object.entries(searchParams)) {
      if (value) query.append(key, Array.isArray(value) ? value.join(",") : value);
    }

    const redirectUrl = `${branchDomain}/?${query.toString()}`;
    redirect(redirectUrl); // 🔹 server-side redirect
  }

  // Fallback for desktop/crawlers → render SEO page
  return (
    <main>
      <h1>Cool Sneakers</h1>
      <p>The latest sneakers you’ll love.</p>
      <img src="https://mycdn.com/images/sneaker.jpg" alt="Cool Sneakers" />
      <a href={`${branchDomain}/?product_id=${id}`}>Open in App</a>
    </main>
  );
}


// 🔹 Bot detection (Googlebot, Facebook, Twitter, etc.)
function isBot(ua: string): boolean {
  const botRegex = /googlebot|bingbot|yandex|baiduspider|duckduckbot|slurp|facebookexternalhit|twitterbot|linkedinbot|embedly|quora link preview|pinterest|slackbot|vkShare|W3C_Validator/i;
  return botRegex.test(ua);
}
```
