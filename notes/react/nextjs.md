---
tags: ["Framework"]
---

# [NextJs](https://nextjs.org/) overview

https://nextjs.org/docs/getting-started/react-essentials#server-components

https://www.patterns.dev/posts/islands-architecture

<TagLinks />

## Abbreviation
- CSR: Client Site Rendering
- SSR: Server Site Rendering
- SSG: Static Site Generation
- ISR: Incremental Static Regeneration
- ASO: Automatic Static Optimization

## Rendering


Name | Description 
----------- |------
Static | automatically rendered as static HTML (uses no initial props)
SSG | automatically generated as static HTML + JSON (uses `getStaticProps`)
ISR | incremental static regeneration (uses revalidate in `getStaticProps`)
SSG + CSR | pre-rendered HTML + data fetching on client side using `useEffect`
SSR | server-side renders at runtime (uses `getInitialProps` or `getServerSideProps`)

### Pre-rendering

Stage | Using NextJs | Using Plain ReactJs  
----------- |------------- |-----------
Initial Load | Pre-rendered HTML is displayed | App is not rendered
Hydration   | App becomes interactive | App becomes interactive

### SSG - Static Site Generation

The HTML is generated at **build-time** and is reused for each request.

**getStaticProps**
- Should export from a Page.
- Can't use with getServerSideProps()
- Only run on build time (server side)
- Run on every request in dev mode

```jsx
interface Post {
  id: string;
  title: string;
}
interface PageProps {
  post: Post;
}
export default function PostDetailPage({ post }: PageProps) {
  const router = useRouter();
  return (
    <div>
      <h1>Post Page</h1>
      <p>{post.id}</p>
      <p>{post.title}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return {
    props: {
      post: {
        id: "123-abc",
        title: "Learn NextJS",
      },
    },
  };
};
```


### SSR - Server Side Rendering

The HTML is generated on **each request**.

### CSR - Client Side Rendering

Static Generation without Data + Fetch Data on the Client-side 

```tsx
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/hello3"),
  { ssr: false }
);

function Home() {
  return (
    <div>
      <Header />
      <DynamicComponentWithNoSSR />
      <p>HOME PAGE is here!</p>
    </div>
  );
}
export default Home;
```

[Read more about Dynamic Import](https://nextjs.org/docs/advanced-features/dynamic-import)

### ISR - Incremental Static Regeneration

Static pages can be generated at runtime (**on-demand**) instead of at build-time with ISR.

[Readmore](https://www.smashingmagazine.com/2021/04/incremental-static-regeneration-nextjs/)

### ASO - Automatic Static Optimization

Next.js automatically determines that a page is static (can be prerendered) if it has no blocking data requirements. This determination is made by the absence of `getServerSideProps` and `getInitialProps` in the page.

. | ASO | Not ASO (getServerSideProps)
----------- |------------- |-----------
router.query | empty when pre-rendering, update after hydration | always available
next build   | output an HTML | output an JS file


## File-system Routing

```
└── pages/
    ├── index.tsx                 -- Index route. E.g: example.com/
    ├── about.tsx                 -- Nested route. example.com/about
    ├── posts/
    │   ├── create.tsx            -- Nested route. Pre-defined route.
    │   ├── [postId].tsx          -- Dynamic route. Single param
    │   └── [[...slug]].tsx       -- Dynamic route. Catch all
    └── categories/
        ├── [categoryId]/
        │   └── posts/
        │       └── [postId].tsx   -- Dynamic route. Multiple params.
        └── [...slug].tsx        -- Dynamic route. Optional catch all (/)
```

When a file is added to the `pages` directory it's automatically available as a route. There are **three** kind of routes: 
- Index routes: file named index
- Nested routes: nested folder in pages
- Dynamic routes: brackets in file name to match parameter dynamically

**Route match order**
- Pre-defined routes. E.g: pages/posts/create.tsx 
- Dynamic routes.  E.g: pages/posts/[postId].tsx 
- Catch all routes. E.g: pages/posts/[...slug].tsx 

**Dyanmic routes:**

Name             | File             | URL               | router.query  
----------------------|------------------| ----------------- | ---------------
Single param       | `pages/posts/[postId].tsx`   | /posts/123    | `{ postId: '123' }`
Multiple params   | `pages/categories/[categoryId]/posts/[postId].tsx`   | /categories/frontend/posts/js   | `{ categoryId: 'frontend', postId: 'js' }`
Catch all       | `pages/posts/[...slug].tsx`  | /posts/easy/frontend  | `{ slug: ['easy', 'frontend'] }`
Optional catch all  | `pages/posts/[[...slug]].tsx`  | /posts/  |`{}`

## Navigation

### Navigate between pages wit Link

```tsx
import Link from 'next/link'
function HomePage() {
  return (
    <Link href="/about">
        <a>About Us</a>
    </Link>
  )
}
```

**Link props**
[Full here](https://nextjs.org/docs/api-reference/next/link)

Name | Default | Description 
-----| ------- | -----------
href |         | 
passHref | false | Forces Link to send the `href` prop to its child
prefetch | true | Prefetch the page in background
replace | false | Replace the current history state instead of adding a new url into the stack
scroll  | true  | Scroll to the top of the page after navigation  


### Navigate programmatically using router.push()

```tsx
import { useRouter } from 'next/router'
function App() {
    const router = useRouter();

    function handleSubmit() {

        router.push('/success-page');

        // or using options object
        router.push({
        pathname: '/posts/[postId]',
            query: {
                postId: 123,
                ref: 'social',
            },
        })
    }
    return (...);
}
```

**router props & methods**
[full here](https://nextjs.org/docs/api-reference/next/router)
Name | Description 
-----| -----------
pathname | current route
query | The query string parsed to an object
basePath | The active basePath (if enabled)
locale | The active locale (if enabled)
isFallback | Whether the current page is in fallback mode
push()  | Handles client-side transitions
replace()  | prevent adding a new URL entry into the history stack
prefetch()  | Prefetch pages for faster client-side transitions
back()  | Navigate back in history
reload()  | executes `window.location.reload()`

**Shallow Routing**
Shallow routing allows you to change the URL without running data fetching methods again, that includes `getServerSideProps`, `getStaticProps`, and `getInitialProps`.

You'll receive the updated `pathname` and the `query` via the `router` object (added by `useRouter` or `withRouter`), without losing state.

```ts
 useEffect(() => {
    // Always do navigations after the first render
    router.push('/?counter=10', undefined, { shallow: true })
  }, [])
```

### How prefetching works

https://web.dev/route-prefetching-in-nextjs/

- Only prefetches links that appear in the viewport.
- It use [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to detect.
- Prefetching is **only enabled in production.**
- But it will be disabled in slow network or when users have Save-Data turned on.



## Comparation

### ReactJs vs NextJs

|                      | ReactJS                                     | NextJS                                       |
|----------------------|---------------------------------------------|----------------------------------------------|
| Type                 | Library                                     | Framework                                    |
| Bootstrap            | create-react-app                            | create-next-app                              |
| Rendering            | CSR                                         | CSR, SSR and SSG                             |
| Hosting              | Any kind of static server                   | NodeJS server                                |
| Built-in SEO support | ❌ NO                                        | ✅ YES                                        |
| When to use          | Internal / Private web app, dashboard admin | Marketing / Landing pages / Blog / eCommerce |
| Code Playground      | codesandbox.io                              | codesandbox.io                               |


### ExpressJs vs NextJs

|                       | ExpressJS             | NextJS                     |
|-----------------------|-------------------------------|-----------------------------------------|
| Data fetching         | Doesn’t let Express.js deliver a response  from server-side to an EJS template in client’s side                                          | Next.js data fetching enables you  to deliver your content in a variety of ways,  based on the use case of your application                           |
| Server use            | Can be used both on the client-side and the server-side                                                                                  | Used for building server-side rendering applications                                                                                                  |
| Plug-in and ecosystem | The Express Gateway plugin includes entities  and supports event subscription.                                                           | Next.js makes use of existing powerful tools  such as Webpack, Babel, and Uglify, and presents them to the end user in a stunningly simple interface. |
| Static generation     | Deferred static generation. Developers can choose to postpone the creation of specific pages  until the first time a user requests them. | Incremental static generation.  After you’ve built your site, you can use Next.js to create or update static pages.                                   |
| Scalability           | When developing a large-scale web application,  it handles user API calls efficiently and  requires little to no extra configuration.    | Next, js makes it simple to scale multiple pages  because it allows you to choose whether to render each page on the client, the server, or both.     |
| Speed                 | a Nodejs backend framework with minimalist and fast tools  and functions for developing scalable backend applications                    | Because of the static destinations and server-side rendering, it is extremely fast.                                                                   |
| SEO                   | It is beneficial for SEO as it offers crawlers  from search engines with a fully rendered homepage,  making their work easier.           | Next.js is a fundamental tool for achieving impressive SEO performance.                                                                               |

::: warning SHOULD NOT USE NEXTJS FOR BACKEND
Real world cases, most of the time, we keep FE & BE repo separated
Nextjs is not optimized for horizontal scale
Diff from coding styles / convention
:::


## Other

- [Next.js: Using HTTP-Only Cookies for Secure Authentication (2023)](https://maxschmitt.me/posts/next-js-http-only-cookie-auth-tokens)
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)


Helper check 

```js
function isBrowser() {
    return typeof window !== 'undefined';
}
```


https://mobisoftinfotech.com/resources/blog/next-js-framework/