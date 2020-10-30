# Webpack 

## First thing first

**WEBPACK & BABEL**
:::: tabs

::: tab Webpack
```sh
npm i --save-dev webpack webpack-merge webpack-cli cross-env 
```

*package.json*
```js
"scripts": {
    "dev": "cross-env NODE_ENV=development webpack --progress -d --watch --config webpack.dev.js",
    "build": "cross-env NODE_ENV=production webpack --progress --hide-modules --config webpack.prod.js",
},
```

[full flags of webpack](https://webpack.js.org/api/cli/)
:::

::: tab Babel 

```sh
npm i --save-dev @babel/core @babel/preset-env core-js 
```

*.babelrc*
```js
{
    "presets": [
        [
            "@babel/env"
        ]
    ]
}
```

*.browserslistrc*
```
> 1%
last 2 versions
not ie <= 8
```
:::

::: tab webpack.*.js

*webpack.common.js*
```js
// ... 
```

*webpack.prod.js*

```sh
npm i terser-webpack-plugin -D
```

```js
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');

// .... 

module.exports = merge(common, {
    optimization: {
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
            }),
        ]
    },
})
```
:::

::::

## Assets

:::: tabs

::: tab Styles

```sh
npm i -D css-loader node-sass sass-loader
```

```sh
npm i -D mini-css-extract-plugin css-minimizer-webpack-plugin
```

*webpack.dev.js*
```js
module.exports = {
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use:  ['vue-style-loader', 'css-loader', 'sass-loader'] 
            },
        ]
    }
}
```

*webpack.prod.js*
```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use:  [ MiniCssExtractPlugin.loader,  'css-loader', 'sass-loader']
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "assets/css/style.css"
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`
            new CssMinimizerPlugin(),
        ],
    },
}
```
:::

::: tab Fonts

```sh
npm i -D file-loader
```

*webpack.\*.js*
```js
rules: [
    {
        test: /\.(woff(2)?|ttf|eot|svg)(\?[a-z0-9]+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'assets/fonts/', // where the fonts will go
                publicPath: '../fonts/' // override the default path
            }
        }]
    },
]
```

:::

::: tab Images
```sh
npm install image-webpack-loader --save-dev
```

*webpack.\*.js*
```js
rules: [
    {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
            'file-loader',
            {
                loader: 'image-webpack-loader',
                options: {
                    bypassOnDebug: true, // webpack@1.x
                    disable: true, // webpack@2.x and newer
                },
            },
        ],
    }
```
:::

::::




## Vue 

:::: tabs

::: tab Install
**Install Vue & libraries**
```sh
npm i vue vuex vue-router --save
```

helpers
```sh
npm i vue-types vue-fragment --save
```

framewok
```sh
npm i element-ui --save
```

**Babel Loader**

```sh
npm i --save-dev @babel/core @babel/preset-env core-js babel-loader vue-loader
```
:::

::: tab webpack.*.js

*webpack.common.js*
```js
const path = require('path')
const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    output: {
        path: BUILD_DIR,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // ... 
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            '@': APP_DIR,
        },
        extensions: ['*', '.js', '.vue', '.json'],
        modules: [ "node_modules"]
    },
    // ... 
    plugins: [
        new VueLoaderPlugin(),
    ],
    optimization: {},
}
```

:::

::::


## Typescript

:::: tabs

::: tab Install
```sh
npm install -D  typescript ts-loader
```
:::

::: tab webpack.config.js
```js
module.exports = {
    // .... 
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx']
    },
    // .... 
};
```
:::

::: tab tsconfig.json
```js
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "jsx": "react-native",
    "lib": ["dom", "esnext"],
    "moduleResolution": "node",
    "noEmit": true,
    "skipLibCheck": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```
:::
::::


```
@babel/plugin-syntax-dynamic-import @babel/plugin-transform-runtime
```


## HTML Template

[html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/)

```sh
npm i -D html-webpack-plugin
```

*webpack.\*.js*
```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

const InjectTemplates = [
    'index.html', 
].map(filename => new HtmlWebpackPlugin({
    filename,
    inject: false,
    template: path.join(__dirname, 'templates', filename),

    templateParameters: (compilation, assets, assetTags, options) => {

        return {
            compilation,
            webpackConfig: compilation.options,
            htmlWebpackPlugin: {
                tags: assetTags,
                files: assets,
                options
            },
            'name': 'khank' // variable will be passed to template
        };
    },
}))


let devOpts = merge(common, {
    plugins: [
        ...InjectTemplates
    ],
}
```

*template/index.html*
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>hello <%= name %></title>
  </head>
  <body>
    <script src="index_bundle.js"></script>
  </body>
</html>
```



## Code-splitting

To be written


## Refs
- [​​Setting Up Webpack and Typescrip](https://codesource.io/setting-up-webpack-and-typescript/)