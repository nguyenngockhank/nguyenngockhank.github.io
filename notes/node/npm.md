# npm 

Là công cụ quản lý kho vũ khí (package) của NodeJS :v Giống composer của môn phái PHP vậy.

Và sổ sách của cái kho đó là **package.json**, nhìn cái đuôi **.json** thì hiểu nó có cấu truc JSON babe rồi ha :v 

## package.json

```javascript
{
  "name": "ProjectName",
  "version": "1.0.0",
  "description": "Description",
  "main": "index.js",
  "author": "nguyenkhank",
  "license": "ISC",

  "scripts": { 
      // ... 
  },
  "dependencies": {
      //...
  },
  "devDependencies": {
      //...
  }
}
```

- `name`: Không chứa khoảng trắng nhé :smiling_imp: Vd:  `KhankDepZai` hay `li-xi-tui-di` 
- `main`: Cái này chỉ hữu dụng khi bạn muốn pulish cái project cho mọi người sử dụng... mặc định là `index.js`, nếu mà bạn không thích mặc định thì có thể sửa lại để lúc `require('KhankDepZai')` thì nó sẽ kiếm file khác. Còn bạn thấy code mình gớm quá, không mong public lên thì có thể xóa lun cái dòng `main` đó đi và thay bằng `"private": true`
- `dependencies` & `devDependencies`:  [Ở dưới](#dependencies-và-devdependencies)
- `scripts`: nơi mà bạn có thể định nghĩa alias cho các command 

### Scripts

Thay vì trong console bạn phải gõ, một câu lệnh dài loằng ngoằng và đếch thể nào nhớ nổi... thì đây `cross-env NODE_ENV=development webpack --progress -d --watch`. Định nghĩa lại trong file **package.json**

```javascript
{
    //.. code above
    "scripts": { 
        "dev": "cross-env NODE_ENV=development webpack --progress -d --watch"
    }
}
```

thì sau đó chỉ cần chạy `npm run dev`, thay vì câu thần chú dài hơn cả VẠN LÝ TRƯỜNG THÀNH kia  

### dependencies và devDependencies
Các trang thiết (packages) bị sẽ được ghi vào **dependencies**  hoặc  **devDependencies** tùy vào mục đích sử dụng. 

Sự khác nhau cơ bản là  **devDependencies** mục đích sử dụng cho môi trường develop: test tủng, nén file các kiểu,... còn **dependencies**  là thứ ứng dụng cần import vào sử dụng. 

Nói cách khác dễ hiểu hơn đó là trên môi trường production ko cần cài đặt các packages trong **devDependencies**.

### Entry Points

When we require a package, Node.js looks for a node_modules folder that contains our package. By default, Node will search and run the file `index.js`. 

We can change that behavior by adding a property in our package.json called main. This property is the path to the JavaScript file we want Node.js to load instead of index.js:

:::: tabs

::: tab CommonJS 

```json
// some-module's package.json
{
  "main": "lib/index.js"
}
```

```
├── node_modules/
│   └── some-module/
│       ├── lib/
│       │   └── index.js <- This will be loaded
│       ├── index.js <- This will be ignored
│       └── package.json
|
└── source.js // require('some-module')
```

:::

::: tab ESM 

We can also support ESM (import) by using the property `module`:

```json
// some-module's package.json
{
  "module": "lib/index.mjs"
}
```

```
├── node_modules/
│   └── some-module/
│       ├── lib/
│       │   └── index.js <- This will be loaded
|       |
│       ├── index.js <- This will be ignored
│       └── package.json
|
└── source.js // require('some-module')
```
:::

::: tab Typescript 

The TypeScript compiler uses a similar algorithm to Node.js to look for locating package types. The main difference is that TC searches for files with the `.d.ts` extension. By default, TC will look `index.d.ts` is inside the module folder, but we can change this behavior by adding the property `types`:

```json
// some-module's package.json
{
  "types": "lib/index.d.ts"
}
```

```
├── node_modules/
│   └── some-module/
│       ├── lib/
│       │   └── index.d.ts <- TS will load this
|       |
│       ├── index.d.ts <- By default, TS will load this
│       └── package.json
|
└── source.js // import type { someType } from 'some-module'
```
:::

::: tab Combine 

The nice thing is these properties are not exclusive, so we can combine them all to support both CommonJS/CJS (require), ESM (import), and TypeScript simultaneously!


```json
// some-module's package.json
{
  "main": "lib/index.cjs",
  "module": "lib/index.mjs",
  "types": "lib/index.d.ts"
}
```

```
.
├── node_modules/
│   └── some-module/
│       ├── lib/
│       │   ├── index.d.ts <- TS will load this
│       │   ├── index.mjs <- CJS will load this
│       │   └── index.cjs <- EMS will load this
|       |
│       └── package.json
|
├── source.ts  // import type data from 'some-module'
├── source.mjs // import data from 'some-module'
└── source.cjs // const data = require('some-module')
```
:::
::::

### Exports & Imports

Node introduced the exports property to the `package.json` in version 12.7.0 and the imports property in version 14.6.0. These new properties enable us to control better how other developers import from our package and how we can require files and modules inside our project.

[Read more](https://www.geeksforgeeks.org/import-and-export-in-node-js/)

### Commands 

#### Install 

```sh
npm install 
npm i # short form

npm install --production # only intall dependencies

## ADD PACKAGES
npm install express --save # add more package to dependencies
npm i express -S # short form
npm i express@3.0.0 # specific version

npm install mocha --save-dev   # add more package to devDependencies
npm i mocha -D # short form

npm install expo-cli --global 
npm i expo-cli -g # short form
```

#### Upgrade Package

```sh
npm install package@next
npm install webpack@next --dev
```


## npm vs npx

Feature | npm | npx 
-------- | ---- | ----
Purpose | managing packages in Node.js projects | executing packages without installing them globally
Scope | operates on a project level | can execute packages globally or locally 

Common Npx Use Cases:
- **Trying out packages**: Use npx to quickly test a package without installing it globally.
- **Running scripts**: If a package provides a script, you can run it with npx.
- **Creating temporary projects**: Use `npx` to create a new project directory and install necessary packages for a one-time task.


## Errors


```sh
npm ERR! EACCES: permission denied, rename '/Users/nguyenkhanh/.npm/_cacache/tmp/5155ee36' -> '/Users/nguyenkhanh/.npm/_cacache/content-v2/sha512/b8/6c/e9ddd2f819f343cfe8ce6fc36293556b7ead4b1e6d331128b3ac68470021621655127e55409d6b94023959973e577cb873195bee9c6e1576ba70f020f69e'
npm ERR! File exists: /Users/nguyenkhanh/.npm/_cacache/content-v2/sha512/b8/6c/e9ddd2f819f343cfe8ce6fc36293556b7ead4b1e6d331128b3ac68470021621655127e55409d6b94023959973e577cb873195bee9c6e1576ba70f020f69e
npm ERR! Remove the existing file and try again, or run npm
npm ERR! with --force to overwrite files recklessly.
```

=> 

::: tip 
```sh
sudo chown -R $USER /usr/local/lib/node_modules
```
:::