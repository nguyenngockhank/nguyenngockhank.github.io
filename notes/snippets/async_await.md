# Setup Async / await 

## Install Packages

Package List of `package.json`

```json
{
    // ... more
    "devDependencies": {
        "@babel/core": "^7.7.5",
        "@babel/plugin-transform-runtime": "^7.7.6",
        "@babel/preset-env": "^7.7.6",
        "@babel/runtime": "^7.7.6",
        "babel-loader": "^8.0.6",
        "core-js": "^3.4.8",
        "regenerator-runtime": "^0.13.3",
        "webpack": "^4.41.2",
        "webpack-cli": "^3.3.10"
    }
}
```

## Webpack

```js
var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'to your destination');
var APP_DIR = path.resolve(__dirname, 'src');
 
var config = {
  entry: {
    app: APP_DIR + '/index.js',
  },
  output: {
    path: BUILD_DIR,
    filename: '[name]_bundle.js',
  },
  module : {
    rules : [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ]
  },
  resolve: {
    modules: [
        "node_modules",
        APP_DIR
    ],
  },
};
 
module.exports = config;
```


## Babel 

At `.babelrc` 

```js
{
  "presets": [
    [ 
        "@babel/preset-env",
        {
            "useBuiltIns": "usage",
            "corejs": 3
        }
    ]
  ],
  "plugins": [
      [ 
          "@babel/plugin-transform-runtime", 
          {
              "regenerator": true
          }
      ]
  ]
}
```

At `.browserlistrc`, set up browser compatibility

```
last 1 version
> 1%
IE 9 # sorry
```

## Test

Create `src/index.js`

```js
function hello(name = 'khank', timeout = 500) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // process hello
            console.log(`Hello ${name}`);

            // yeah, done
            resolve(name);
        }, timeout )
    })
}

async function processHello() {
    return await hello('Khank');
    return await hello('Dona');
} 
    
processHello();
```