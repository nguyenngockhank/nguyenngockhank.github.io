# React vs Vue

## Template syntax

### Mounting app

```html
<div id="app"></div>
```

:::: tabs

::: tab React
```jsx
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
const root = createRoot(document.getElementById("app"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```
:::

::: tab Vue
```js
import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
```
:::
::::

### Fragments

:::: tabs
::: tab React
```jsx
<>
  <OneChild />
  <AnotherChild />
</>
```
:::

::: tab Vue
**3.x Syntax**
 components now can have multiple root nodes

```html
<template>
  <OneChild />
  <AnotherChild />
</template>
```
:::
::::


### Raw HTML

:::: tabs
::: tab React
```jsx
const markup = { __html: '<p>some raw html</p>' };
return <div dangerouslySetInnerHTML={markup} />;
```
:::

::: tab Vue

```html
<p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```
:::
::::


::: warning
Dynamically rendering arbitrary HTML on your website can be very dangerous because it can easily lead to XSS vulnerabilities. Only use v-html on trusted content and never on user-provided content.
:::

## Computed Properties

:::: tabs
::: tab React
```jsx
import React, { useMemo, useState } from 'react'

export default function App() {
    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Doe');

    const [displayName, professionalName] = useMemo(() => {
        return [
            `${firstName} ${lastName}`,
            `${lastName} ${firstName}`
        ];
    }, [firstName, lastName])

    return (
      <div>
         <p>Display name: {displayName}</p>
         <p>Professional name: {professionalName}</p>
      </div>
    );
}
```
:::

::: tab Vue

```html
<script setup>
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

// a computed ref
const displayName = computed(() => {
  return `${firstName} ${lastName}`;
})

// a computed ref
const professionalName = computed(() => {
  return `${lastName} ${firstName}`;
})
</script>

<template>
<div>
    <p>Display name: {{ displayName }}</p>
    <p>Professional name: {{ professionalName }}</p>
</div>
</template>
```
:::
::::

## Conditional Rendering

### If, else

:::: tabs

::: tab React
```jsx
function Item({ awesome }) {
  if (awesome) {
    return <h1>React is awesome!</h1>;
  }
  return <h1>Oh no 😢</h1>;
}
```
:::

::: tab Vue
```js
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```
:::
::::

### Conditional (ternary) operator (`?` `:`)

:::: tabs

::: tab React
```jsx
return (
  <li className="item">
    {isPacked ? name + ' ✔' : name}
  </li>
);
```
:::

::: tab Vue
Just using JavaScript Expressions with [Restricted Globals Access](https://github.com/vuejs/core/blob/main/packages/shared/src/globalsWhitelist.ts#L3)
```html
<li class="item">
    {{ isPacked ? name + ' ✔' : name }}
</li>
```
:::
::::

## Implicit state sharing

https://vuejs.org/guide/components/provide-inject.html
https://react.dev/learn/passing-data-deeply-with-context


## Event Handling

https://medium.com/swlh/react-vs-vue-event-handling-cb4327242f50


## Slots

https://stackoverflow.com/questions/73416124/best-way-to-change-vue-slots-pattern-into-react

## Functional Components 


## Class & Style bindings

:::: tabs
::: tab Vue

Pass an array or an object 
```html
<div class="static"  :class="{ active: isActive, 'text-danger': hasError }" ></div>
<div :style="{ 'font-size': fontSize + 'px' }"></div>
<div :style="[baseStyles, overridingStyles]"></div>
```
::: 

::::