# Jest

::: tip  
Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
:::

[Document here](https://jestjs.io/docs/en/getting-started)

## Install

```sh
npm install --save-dev jest babel-jest vue-jest 
```

If using Babel 7 needs to install brigde

```sh
npm install --save-dev babel-core@bridge
```

## Command

**Run unit test**
```sh
jest
```

**Run Coverage**
```sh
jest --coverage
```

## Config file

Create `jest.config.js` at root to config jest runner. Get more detail of [Jest configuration](https://jestjs.io/docs/en/configuration)

Example:

```js
module.exports = {
    "moduleFileExtensions": [
      "js",
      "vue"
    ],
    "testEnvironment": "jsdom",
    "collectCoverageFrom": [
      "src/**/*.{js,vue}",
      "!**/node_modules/**",
      "!**/**/index.js"
    ],
    "transform": {
        ".*\\.(vue)$": "vue-jest",
        "^.+\\.js$": "babel-jest"
    },
    "transformIgnorePatterns": [
      "/node_modules/"
    ],
    // alias
    "moduleNameMapper": { 
      "^@/(.*)$": "<rootDir>/src/$1"
    },
    // files run before each test file
    "setupFilesAfterEnv": [
      './jest.setup.js'
    ],
}
```

To add few custom script into jsdom, load script at `jest.setup.js`:

```js
require('dotenv').config();
const BASE_PATH = process.env.BASE_PATH;

// alias function
global.before = global.beforeAll;

const fs = require('fs');
const path = require('path');.

// function load script in window
const loadedScripts = { };
global.loadScriptInWindow = function loadScriptInWindow(filePath) {
    const window =  global.window;
    if (!filePath.startsWith(basePath)) {
        filePath = BASE_PATH + '/' + filePath;
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
loadScriptInWindow('vendor/ui/jquery.min.js');
```