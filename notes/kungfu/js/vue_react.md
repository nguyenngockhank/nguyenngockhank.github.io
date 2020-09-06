# Vue vs. React

## Similar 
- virtual DOM
- provide reactive and composable view components
- maintain focus in the core library, with concerns such as routing and global state management handled by companion libraries

:::: tabs

::: tab React

**Styled Components**: [styled-components](https://github.com/styled-components/styled-components)

**Prop validators**: [prop-types](https://github.com/facebook/prop-types)

**Router**: [react-router](https://reactrouter.com/web/guides/quick-start)

**State Management**: [redux](https://redux.js.org/)

:::

::: tab Vue
**Styled Components**: [vue-styled-components](https://github.com/styled-components/vue-styled-components)

**Prop validators**: [vue-types](https://github.com/facebook/prop-types) (v1 + v2)

**Router**: [vue-router](https://router.vuejs.org/)

**State Management**: [vuex](https://vuex.vuejs.org/guide/getters.html)
:::
::::


## Templates vs. JSX

:::: tabs

::: tab Vue
Vue uses HTML-based templates

***Any valid HTML is also a valid Vue template***
:::

::: tab React
React uses `JSX`, a declarative XML-like syntax that works within JavaScript. 

```jsx
<label htmlFor="namedInput">Name:</label>
<input className="form-control" id="namedInput" type="text" name="name"/>
```

Things are customized: 
- `htmlFor` where original attribute is `for`
- `className` where orginal attribute is `class`

***If a tag is empty, you may close it immediately with `/>`, like XML***:

```jsx
const element = <img src={user.avatarUrl} />;
```
:::
::::

## React - Full programming language


:::: tabs

::: tab React
In React, You can ***leverage the power of a full programming language (JavaScript) to build your view***. This includes temporary variables, flow controls, and directly referencing JavaScript values in scope.


```jsx
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
```


### Functions as Children

Yeah, full language. Look this 

```jsx
// Calls the children callback numTimes to produce a repeated component
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}
```
- `props.children` in Repeat is a function
:::

::: tab Vue

But In Vue, no support! You can define something like this with Vue: 

```vue
<template>
<h1> Hello, {{ formatName }}! </h1>
</template>
<script>
export default {
    props: ['user'],
    computed: {
        formatName() {
            return this.user.firstName + ' ' + this.user.lastName;
        }
    }
}
</script>
```

Vue has few concepts which React does not. There are `mixins`, `custom directives`, `filters`, these help much in reusability.
:::

::::




---

## References 
- [(Vue) Comparison with Other Frameworks](https://vuejs.org/v2/guide/comparison.html)
- [Comparing Vuex and Redux by developing an application](https://medium.com/javascript-in-plain-english/similarities-and-differences-between-vuex-and-redux-by-developing-an-application-be3df0164b22)
- [I created the exact same app in React and Vue. Here are the differences.](https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-e9a1ae8077fd)