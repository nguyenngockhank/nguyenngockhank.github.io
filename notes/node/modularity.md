# Node modularity

[Original post](https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm)

## CommonJS (CJS) 

Early **2000s**, primarily as part of the Node.js ecosystem.

```js
//importing 
const doSomething = require('./doSomething.js'); 

//exporting
module.exports = function doSomething(n) {
  // do something
}
```

- Some of you may immediately recognize CJS syntax from node. That's because node uses [CJS module format](https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/).
- CJS imports module synchronously.
- You can import from a library `node_modules` or local dir. Either by `const myLocalModule = require('./some/local/file.js')` or `var React = require('react');` works.
- When CJS imports, it will give you a copy of the imported object.
- CJS will not work in the browser. It will have to be transpiled and bundled.

## Asynchronous Module Definition (AMD)

Around **2010**, introduced by RequireJS.

```js
define(['dep1', 'dep2'], function (dep1, dep2) {
    //Define the module value by returning a value.
    return function () {};
});
```

```js
// "simplified CommonJS wrapping" https://requirejs.org/docs/whyamd.html
define(function (require) {
    var dep1 = require('dep1'),
        dep2 = require('dep2');
    return function () {};
});
```

- AMD imports modules asynchronously (hence the name).
- AMD is [made for frontend](https://tagneto.blogspot.com/2011/04/on-inventing-js-module-formats-and.html) (when it was proposed) (while CJS backend).
- AMD syntax is less intuitive than CJS. I think of AMD as the exact opposite sibling of CJS.

## Universal Module Definition (UMD)

Around **2011**, developed to bridge the gap between CJS and AMD.

```js
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "underscore"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"), require("underscore"));
    } else {
        root.Requester = factory(root.$, root._);
    }
}(this, function ($, _) {
    // this is where I defined my module implementation

    var Requester = { // ... };

    return Requester;
}));
```

- Works on front and back end (hence the name universal).
- Unlike CJS or AMD, UMD is more like a pattern to configure several module systems. Check here for more patterns.
- UMD is usually used as a fallback module when using bundler like Rollup/ Webpack

## ES Modules (ESM)

Standardized in **ECMAScript 2015** (ES6) and gradually implemented in modern JavaScript environments.

It is Javascript's proposal to implement a [standard](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) module system. I am sure many of you have seen this:

```js
import React from 'react';

import {foo, bar} from './myLib';


export default function() {
  // your Function
};
export const function1() {...};
export const function2() {...};
```

- Works in many modern browsers
- It has the best of both worlds: CJS-like simple syntax and AMD's async
- **Tree-shakeable**, due to ES6's **static module structure**
- ESM allows bundlers like Rollup to **remove unnecessary code**, allowing sites to ship less codes to get faster load.
- Can be called in HTML, just do: