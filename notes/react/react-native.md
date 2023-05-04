# React native Setup

## M2 

[Xcode must be fully installed before you can continue](https://github.com/expo/expo/issues/21727)

I've just set up a new M2 MacBook Pro and attempted to run npx expo start -c --ios. I get the following error (note the Xcode splash screen, indicating that it is indeed installed):


The fix for this was:
```
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
```

### Error

`

https://stackoverflow.com/questions/20939568/error-error-installing-cocoapods-error-failed-to-build-gem-native-extension

```
brew cleanup -d -v 
brew install cocoapods 
```

## Set up typescript

https://reactnative.dev/docs/typescript

```sh
npm install -D @tsconfig/react-native @types/jest @types/react @types/react-test-renderer typescript
```

Create `tsconfig.json`

```json
{
  "extends": "@tsconfig/react-native/tsconfig.json"
}
```

Rename a JavaScript file to be *.tsx

Run `yarn tsc` to type-check your new TypeScript files.

- [Using Custom Path Aliases with TypeScript](https://reactnative.dev/docs/typescript#using-custom-path-aliases-with-typescript)

## Set up eslint

https://github.com/vasilestefirta/react-native-eslint-prettier-example

```
npm install eslint --save-dev

npx eslint --init

npm install --save-dev eslint-plugin-react-native
```

`.vscode/settings.json`

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

## Setup Prettier

```
npm install --save-dev --save-exact prettier

npm install --save-dev eslint-config-prettier
```

Add more into `.eslintrc.json`

```json
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/react"
    ],
```



## Extensions

`VS Code ES7+ React/Redux/React-Native/JS snippets`

Usage

`imr` + Tab

```ts
import React from 'react' 
```

`rnf` + Tab (react native funciton)

```tsx
import { View, Text } from 'react-native'
import React from 'react'

export default function Hi() {
  return (
    <View>
      <Text>Hi</Text>
    </View>
  )
}
```

## Styles

`App.components.styles.js`
`Task.styles.js`
`colors.js`

### PixelRatio
https://reactnative.dev/docs/pixelratio

## Screens 

https://reactnative.dev/docs/navigation

```
npm install @react-navigation/native @react-navigation/native-stack

npm install react-native-screens react-native-safe-area-context
```

### Type checking with TypeScript

https://reactnavigation.org/docs/typescript/

### Darkmode


- [Dark mode](https://www.react-native-material.com/docs/components/app-bar#enable-color-on-dark)
- https://medium.com/simform-engineering/manage-dark-mode-in-react-native-application-2a04ba7e76d0#


## MUI

https://www.react-native-material.com/docs/getting-started

```
npm install @react-native-material/core
```

## Events

### Handling Touches

Button 
```tsx
<Button
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="Press Me"
/>
```

[Touchables](https://reactnative.dev/docs/handling-touches#touchables): 
- TouchableHighlight: a button or link on web.
- TouchableNativeFeedback: 
- TouchableOpacity: provide feedback by reducing the opacity of the button
- TouchableWithoutFeedback: tap gesture but you don't want any feedback to be displayed




## Realm 

## Async storage

https://react-native-async-storage.github.io/async-storage/docs/install/

## SQLite


https://docs.expo.dev/versions/latest/sdk/sqlite/

```
npx expo install expo-sqlite
```


### Import an exsiting database

```
npx expo install expo-file-system expo-asset
```


```js
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push('db');

module.exports = defaultConfig;
```


https://stackoverflow.com/questions/55622372/expo-sqlite-use-existing-database

### mysql2sqlite

https://github.com/dumblob/mysql2sqlite

```
./mysql2sqlite /Users/nguyenkhanh/Downloads/matches.sql | sqlite3 matches.db
```


## Tools
- **Android cast**: to display device screen on OS
- **mysql2sqlite**: translate mysql queries to sqlite.db


## Libs 

https://reactnative.dev/docs/navigation

https://www.react-native-material.com/docs/components/button


https://reactnavigation.org/docs/getting-started/

## Expo 

```
npm install -g eas-cli
```

Few errors came when run this
```
npx expo run:android --variant release
```

Config 
```
eas update:configure
```

build android
```
 eas build --profile development --platform android
```


Create file `eas.json`

```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {}
  }
}
```

```
eas build --profile development --platform android
```