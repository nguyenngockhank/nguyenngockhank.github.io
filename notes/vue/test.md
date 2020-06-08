# Testing

## Vue Test Utils

[Vue Test Utils](https://vue-test-utils.vuejs.org/) is the official library for Vue. Nothing much to say, that gives us no reason to avoid it.

And we need to choose a test runner for VueTestUtils. E.g: Jest, Mocha, Karma, ...

## with Jest

[Jest](https://jestjs.io/en/) is a delightful JavaScript Testing Framework with a focus on simplicity.

- sets up JSDOM by default
- provides built-in assertions
- great command line user experience

### Install

```sh
npm install --save-dev jest @vue/test-utils vue-jest babel-jest
```

::: warning  NOTICE
Note: If project is using Babel 7 or higher, need to add babel-bridge to devDependencies

```sh
npm install --save-dev babel-core@^7.0.0-bridge.0
```
:::

### Configuration

Create file `jest.config.js` for [configuration](https://jestjs.io/docs/en/configuration)

```js
module.exports = {
    "moduleFileExtensions": [
      "js",
      "vue"
    ],
    "transform": {
        ".*\\.(vue)$": "vue-jest",
        "^.+\\.js$": "babel-jest"
    },

    /// ... more config
}
```

**Webpack Alias**

```js
"moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
},
```

**Coverage Config**
```js
"collectCoverageFrom": [
    "src/Components/**/*.{js,vue}",
    "!**/node_modules/**",
    "!**/**/index.js"
],
"coverageThreshold": {
    "global": {
        "branches": 20,
        "functions": 20,
    },
    "src/**/*.vue": {
        "branches": 60,
        "statements": 60
    },
}
```

**List files that run before each test file**

```js
"setupFilesAfterEnv": [
    './jest.setup.js'
],
```

Content of `jest.setup.js` could be:

```js
// alias function
global.before = global.beforeAll
```

```js
// load 3rd libraries into window of jsdom
const fs = require('fs');
const path = require('path');
let basePath = path.resolve(__dirname, ASSET_PATH);

// function load script in window
const loadedScripts = { };
global.loadScriptInWindow = function loadScriptInWindow(filePath) {

    const window =  global.window;
    if (!filePath.startsWith(basePath)) {
        filePath = basePath + '/' + filePath;
    }

    if (!fs.existsSync(filePath)) {
        console.error('Not found file to load');
    }

    if (!loadedScripts[filePath]) {
        loadedScripts[filePath] = true;
    }

    let content = fs.readFileSync(filePath, { encoding: "utf-8" });

    const scriptEl = window.document.createElement("script");
    scriptEl.textContent = content;
    window.document.body.appendChild(scriptEl);
}

// default loading
loadScriptInWindow('assets/ui/moment.min.js');
loadScriptInWindow('assets/ui/jquery.min.js');
loadScriptInWindow('assets/ui/underscore.js');
```

## Run

Add few scripts options in `package.json` for shortcut

```js
"scripts": {
    // ... more scripts
    "test": "jest --verbose",
    "test:dev": "jest --verbose --watchAll",
    "coverage": "jest --coverage",
    "coverage:dev": "jest --coverage --watchAll"
}
```

Usage:

- Run once: `npm run test`
- Run with watch: `npm run test:dev`
- Run coverage once: `npm run coverage`
- Run coverage with watch: `npm run coverage:dev`

## Write test file =))

Here is the [API list](https://vue-test-utils.vuejs.org/api/#mount) that can help you 

Example:

We have `Text.vue`

```html
<template>
    <component 
        :is="inputTag" 
    />
</template>

<script>
export default {
    props: {
        isMultiRows: VueTypes.bool.def(false),
    }
    computed: {
        inputTag() {
            return this.isMultiRows ? 'textarea' : 'input';
        },
    },
}
</script>
```


```js
import { createComponent } from '@/../tests/utils'

import Text from './Text.vue'

describe('Text.vue', () => {
    let wrapper

    afterEach(() => {
        wrapper.destroy()
    })

    it('renders the correct markup', async () => {
        wrapper = createComponent(Text)
        expect(wrapper.element.tagName).toBe('INPUT')

        await wrapper.setProps({ isMultiRows: true })
        expect(wrapper.element.tagName).toBe('TEXTAREA')
    })

})
```

## Utils

Helpers to create Wrapper

```js
import { shallowMount, mount } from '@vue/test-utils'

export const createComponent = (VueComponent, props = {}, settings = {} ) => {
    let copySettings = Object.assign({}, { shallow: true, attach: false }, settings)
    let mountFn = !!copySettings.shallow ? shallowMount : mount

    delete copySettings.shallow
    delete copySettings.attach

    let mountOptions = {
        propsData: { ...props },
        ...copySettings
    }

    if (!!settings.attach) {
        mountOptions.attachTo = createContainer()
    }

    return mountFn(VueComponent, mountOptions)
}

export const createContainer = (tag = 'div') => {
    const container = document.createElement(tag)
    document.body.appendChild(container)
    return container
}
```