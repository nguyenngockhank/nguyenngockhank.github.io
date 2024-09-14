# Node Module Resolution

## Core modules
First, Node.js checks if your import is a core Node.js module, anything like, `os`, `node:asserts`, `fs`, etc.


```js
import { join } from 'node:path'
import { writeFile } from 'fs'
```

## Relative modules

- Secondly, Node.js checks if our imports start with `/`, `./`, or `../`. If it does, Node.js checks this path for files and directories and treats the import as a path.
- If the path starts, `/` Node.js will look for the module from the root of our file system.
- If the path begins with `./` of `../` Node.js will search for the module relative to the current file's location.

Let's say we are trying to import this module:

```js
import { bar } from './foo'
```

Node.js will run the following checks **import note** that if one of these checks passes, the Node.js will not continue to the next steps
1. if `foo` exists, execute by file extension. In this case, Node.js will throw an `ERR_UNKNOWN_FILE_EXTENSION` because foo doesn't have any file extension.
2. if `foo.js` exists, executes as a javascript module
3. if `foo.json` exists, parses json, and returns JS object
4. if `foo.node` exists, runs as a [binary add-on](https://nodejs.org/api/addons.html).
5. if `foo/package.json` Node.JS will search for the main field. If present, Node.js will run steps 1–4 and 6–8 for the given path in `main`
6. if `foo/index.js` exists, executes as a javascript module
7. if `foo/index.json` exists, parse json, and rerun object
8. if `foo/index.node` exists, runs as a binary add-on.

If everything fails, Nodejs will throw `ERR_MODULE_NOT_FOUND`

## Alias Modules

Thirdly Node.js checks if our imports start with `#`. This import is like an alias to other files in our project, like the [Webpack alias](https://webpack.js.org/configuration/resolve/) or [TypeScript path](https://www.typescriptlang.org/tsconfig/#paths). 

In general, you can define an alias that starts with # to a given path in your project

```json
{
    "name": "my-site",
    "imports": {
        "#foo": "bar.js"
    }
}
```

When Node.js resolve an import like this, it starts to go through all the parent folders of the current file and process the first package.json it finds

Given this directory tree

```
├── worspace/
    └── package.json
    ├── app-1/
    |   ├── package.json
    |   └── index.js
    └── app-2/
        └── index.js
```

- If we will run node `workspace/app-1/index.js` Node.js will process only the `package.json` in `workspace/app-1/pacakge.json`.
- But if we will run node `workspace/app-2/index.js` Node.js will check the `package.json` `workspace/package.json`

Let's say we are trying to import this module:

```js
import { bar } from '#foo'
```


Node.js will run the following checks **import note**. If one of these checks fails Node.js, it will not continue to the next steps

1. Scans for the closes `package.json`
2. Search for the `imports` field
3. Return resolved path that is configured. Throw an error that fails to resolve.

## Self Import Modules

Fourthly, Node.js checks if the imports start with the name of our current scope.

Given this `package.json`

```json
{
    "name": "my-site",
    "exports": {
        "foo": "bar.js"
    }
}
```

If we try to import `my-site/foo`. We will run `bar.js`.

```js
import { bar } from 'my-site/foo'
```

The way that Node.js resolve this config is very similar to the resolution algorithm of the imports field. We can still import `foo` form anywhere in the project, but instead of starting with `#` the import must start this with our package name.

## Node Modules

And Finally, if none of our previous checks passed, Node.js will try to resolve the import from the `node_modules` directory.

Given this workspace,

```
├── worspace/
    └── node/
        └── worspace/
            └── source.js
```

Node.js will check the flowing paths to see if they contain `node_moduels` directory before throwing an error

```
// checks order

1. /home/node/worspace/node_modules
2. /home/node/node_modules
3. /home/node_modules
4. /node_modules
```

In general, Node.js will check every parent folder in the tree until they get to the root, meaning every package installed on the roots `node_modules` will be available to all the Node.js programs in your machine.

Let's say we import this module.

```js
import { bar } from 'foo'
```

Node.js will run the following checks for each parent directory in the tree until the root. **import note** that if one of these checks passes, the Node.js will not continue to the next steps

1. if `node_modules/foo/package.json` exists and has an exports field, resolve the exports field, like in the **Self Import Modules** section but with foo module instead of our workspace
2. if `node_modules/foo` exists run the same file/directory resolving algorithm as in the **relative modules** section

If everything fails, and Nodejs fails and can't find any modules, it will throw `ERR_MODULE_NOT_FOUND`.

Given this workspace

```
/
├── worspace/
|   └── foo/
|       └── index.js
├── home/
    └── node/
        └── worspace/
            └── node_modules
            └── source.js <-- IMPORT "foo"
```

Node.js will check all of these paths when trying to find our module.

```
/home/node/workspace/node_modules/ 
/home/node/node_modules/ 
/home/node_modules/ 
/node_modules/ 
/node_modules/foo/
/node_modules/foo/index.js
```