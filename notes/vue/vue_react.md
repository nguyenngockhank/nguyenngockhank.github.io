# Vue vs. React

[[toc]]

## Similar 
- virtual DOM
- provide reactive and composable view components
- maintain focus in the core library, with concerns such as routing and global state management handled by companion libraries

## Templates vs. JSX

- React uses `JSX`, a declarative XML-like syntax that works within JavaScript. 

- Vue uses HTML-based templates

### HTML-Based 

***Any valid HTML is also a valid Vue template***

But React, 

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


### Full programming language

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

But In Vue, no support! But you can define something like this: 

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

Yeah, full language. Look this 

### Functions as Children


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


### Specifying Attributes

Just different syntax

| React         | Vue           | 
| ------------- |:-------------:|
| `<div tabIndex="0"></div>` | `<div tabIndex="0"></div>`|
| `<img src={user.avatarUrl} />` | `<img :src="user.avatarUrl" >`|


## State Management 

State Management is using a Global State that all components can be shared. 
`Vuex` is get inspired from `Redux` so Core concepts is the same.

To more detail, have a look at [Comparing Vuex and Redux by developing an application](https://medium.com/javascript-in-plain-english/similarities-and-differences-between-vuex-and-redux-by-developing-an-application-be3df0164b22)



## To be continued

...


---

## References 
- [Comparison with Other Frameworks](https://vuejs.org/v2/guide/comparison.html)
- [Comparing Vuex and Redux by developing an application](https://medium.com/javascript-in-plain-english/similarities-and-differences-between-vuex-and-redux-by-developing-an-application-be3df0164b22)
- [I created the exact same app in React and Vue. Here are the differences.](https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-e9a1ae8077fd)