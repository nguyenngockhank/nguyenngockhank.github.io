# Mutating vs. Non-Mutating

Most of example will be implemeted by Javascript

## Add

:::: tabs
::: tab Mutating

Add 1 item
```js
let mutatingAdd = ['a', 'b', 'c']
mutatingAdd.push('d'); // ['a', 'b', 'c', 'd']
```

Add 2 items
```js
let mutatingAdd = ['a', 'b', 'c', 'd']
mutatingAdd.push.apply(mutatingAdd, ['e', 'f']) // ['a', 'b', 'c', 'd', 'e', 'f']
```

Add at specific index
```js
let mutatingAdd = ['a', 'b', 'd']

let deleteCount = 0
let insertedIndex = 2
mutatingAdd.splice(insertedIndex, deleteCount, 'c')
// mutatingAdd: ['a', 'b', 'c', 'd']
```

:::

::: tab Non-Mutating

Add 1 item
```js
const arr1 = ['a', 'b', 'c']
const arr2 = arr1.concat('d')
// arr2 : ['a', 'b', 'c', 'd']
```

Add 2 items
```js
const arr1 = ['a', 'b', 'c', 'd']
const arr2 = arr2.concat(['e', 'f'])
// arr2 : ['a', 'b', 'c', 'd', 'e', 'f']
```

Add at specific index
```js
const arr = ['a', 'b', 'd']

let insertedIndex = 2
const arr2 = [...arr.slice(0, insertedIndex), 'c', ...arr.slice(insertedIndex)]
// arr2 : ['a', 'b', 'c', 'd']
```
:::


::::

## Remove

:::: tabs
::: tab Mutating

Use `pop`, `shift`
```js
let mutatingRemove = ['a', 'b', 'c', 'd', 'e']

let returnedItem = mutatingRemove.pop()  
// returnedItem: 'e'
// mutatingRemove: ['a', 'b', 'c', 'd']

mutatingRemove.shift()  
// returnedItem: 'a'
// mutatingRemove: ['b', 'c', 'd']
```

Use `splice` to remove items
```js
let mutatingRemove = ['a', 'b', 'c', 'd', 'e']
let returnedItems = mutatingRemove.splice(1, 3)
// mutatingRemove: ['a', 'e']
// returnedItems: ['b', 'c', 'd']
```

:::
::: tab Non-Mutating

Use `slice`

```js
// use const
const arr = ['a', 'b', 'c', 'd', 'e']
const returnedItems = arr.slice(1, 4)
// returnedItems: ['b', 'c', 'd']
```

Use `filter`
```js
const arr1 = ['a', 'b', 'c', 'd', 'e']
const arr2 = arr1.filter((item, index) => (index >= 1 || index <= 3 ))
// arr2: ["b", "c", "d"]
```
:::
::::

## Reverse 


:::: tabs
::: tab Mutating
```js
const arr = ['a', 'b', 'c']
arr.reverse()
```

:::
::: tab Non-Mutating
```js
const arr = ['a', 'b', 'c']
arr.slice().reverse()

// or in ES6
[...arr].reverse()
```
:::
::::