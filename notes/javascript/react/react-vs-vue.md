# React vs Vue

## Online tools

https://codesandbox.io/s/vue

https://play.vuejs.org/

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

Fragment allows you to return multiple elements from a component by allowing you to group a list of children without adding extra nodes to the DOM.

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

Putting too much logic in your templates can make them bloated and hard to maintain.

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

## List rendering

:::: tabs
::: tab React
```jsx
const listItems = people.map(person =>
  <li key={person.id}>{person.name}</li>
);
return <ul>{listItems}</ul>;
```
:::

::: tab Vue
```html
<ul>
  <li v-for="person in people" :key="person.id">
    {{ person.name }}
  </li>
</ul>
```
:::
::::

## Dynamic Tag

:::: tabs
::: tab React
```jsx
const Heading = ({ level, children }) => {
  const DynamicTag = `h${level}`; 
  return <DynamicTag>{children || "Whatever"}</DynamicTag>;
};
```

Usage
```jsx
<Heading level={1}>Hello</Heading>
<Heading level={2}></Heading>
```
:::
::: tab Vue
```html
<script setup>
import { computed } from 'vue'
  
const props = defineProps({
  level: Number
})

const tag = computed(() => {
  return "h" + props.level
});
</script>

<template>
  <component :is="tag">
    <slot>Whatever</slot>
  </component>
</template>
```

Usage
```html
<Heading :level=1>Hello</Heading>
<Heading :level=2></Heading>
```
:::
::::

## Implicit state sharing

[Vue - Provide inject](https://vuejs.org/guide/components/provide-inject.html)

[Passing data deeply with Context](https://react.dev/learn/passing-data-deeply-with-context)


:::: tabs

::: tab React
Step 1: Create the context at `LevelContext.js`
```js
import { createContext } from 'react';
export const LevelContext = createContext(1);
```

Step 2: Use the context at `Heading.js`
```jsx
import { useContext } from 'react';
import { LevelContext } from './LevelContext.js';

export default function Heading({ children }) {
  const level = useContext(LevelContext); 
  const DynamicTag = `h${level}`; 
  return <DynamicTag>{children}</DynamicTag>;
}
```

Step 3: Provide the context at `Section.js`
```js
import { LevelContext } from './LevelContext.js';

export default function Section({ level, children }) {
  return (
    <section className="section">
      <LevelContext.Provider value={level}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
```
:::

::: tab Vue

[Provide / Inject](https://vuejs.org/guide/components/provide-inject.html)

`Section.vue`
```html
<script setup>
import { provide } from 'vue'

provide(/* key */ 'level', /* value */ 0)
</script>
```

`Heading.vue`
```html
<script setup>
import { inject } from 'vue'
const level = inject('level')

const tag = computed(() => {
  return "h" + level
});
</script>
```
::: 
::::


## Event Handling

https://medium.com/swlh/react-vs-vue-event-handling-cb4327242f50


## Slots

[best-way-to-change-vue-slots-pattern-into-react](https://stackoverflow.com/questions/73416124/best-way-to-change-vue-slots-pattern-into-react)

:::: tabs
::: tab React
```jsx
function FancyButton({ children }) {
  return (
    <button type="submit">
      {children ? children : 'Submit'}
    </div>
  );
}
```

Parent use
```jsx
return (
  <FancyButton>
    <span style={{ color: 'red' }}>Click me!</span>
    <AwesomeIcon name="plus" />
  </FancyButton>
);
```
:::

::: tab Vue

`FancyButton.vue` template 
```html
<button type="submit">
  <slot>
    Submit <!-- fallback content -->
  </slot>
</button>
```

Parent template
```html
<FancyButton>
  <span style="color:red">Click me!</span>
  <AwesomeIcon name="plus" />
</FancyButton>
```

Besides, vue let us to have many **slots** in a component. [Read more](https://vuejs.org/guide/components/slots.html#scoped-slots)
::: 
::::

## Functional Components 
...

## Class & Style bindings

- inline styles
- global css file
- sass/scss
- css modules
- css in js

:::: tabs
::: tab React
[Full here](./react.md#style-component)
:::

::: tab Vue
Pass an array or an object 
```html
<div class="static"  :class="{ active: isActive, 'text-danger': hasError }" ></div>
<div :style="{ 'font-size': fontSize + 'px' }"></div>
<div :style="[baseStyles, overridingStyles]"></div>
```
::: 
::::