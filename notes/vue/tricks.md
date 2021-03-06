# Maybe you don't know these tricks 

[[toc]]

## Cheatsheet

- [Vue cheatsheet](https://marozed.ma/vue-cheatsheet/#Global-Config)
- [VueX cheatsheet](https://vuejs-tips.github.io/vuex-cheatsheet/)


## Watchers 

### Watch nested data

Useful when data is `Arrays` or `Objects`

```js{4}
export default {
  watch: {
    test: {
      deep: true, 
      handler(newVal, oldVal){
          // your code
      }
    }
  }
}
```

### Triggered on initilization

A watcher will only fire when the prop's value changes, but we often need it to fire once on startup as well.

```js{4}
export default {
  watch: {
    test: {
      immediate: true, 
      handler(newVal, oldVal){
          // your code
      }
    }
  }
}
```

##  A Vue Template Have Multiple Root

Got error when try to do this!

```html
<template>
  <input type="text" v-model="message">
  <span>{{ message }}</span>
</template>
```

**Solution**: [Fragments In Vue](https://github.com/y-nk/vue-fragment)

- Download package: `npm i -S vue-fragment`
- Install Plugin

```js
import { Plugin } from 'vue-fragment';
Vue.use(Plugin);
```
- Component

```html
<fragment>
  <input type="text" v-model="message">
  <span>{{ message }}</span>
</fragment>
```

## VueTypes

A library that help you save time on writing code =))

```sh
npm i vue-types --save
```

:::: tabs

::: tab Before
```js
{
    props: {
        value: {
            type: [Number, String],
        },
        inputType: {
            type: String,
            default: 'number',
            validator(v) {
                return ['number', 'text'].includes(v);
            }
        },
        defaultValue: {
            type: [Number, String],
            default: 0,
        },
        step: {
            type: [ Number, String ],
            default: 1,
        },
        precision: {
            type: Number,
            default: 0,
        }
    },
}
```
:::

::: tab After

```js
import VueTypes from 'vue-types';

// ... other code
{
    props: {
        value: VueTypes.oneOfType([Number, String]),
        inputType: VueTypes.oneOf(['number', 'text']).def('number'),
        defaultValue: VueTypes.oneOfType([Number, String]).def(0),
        step: VueTypes.oneOfType([Number, String]).def(1),
        precision: VueTypes.integer.def(0),
    }
}
```
:::

::::


## Atom - File Structure

```
atoms/
  button/
    index.js
    button.vue    
    button.stories.js
    button.spec.js
    button.scss
  ...
molecules/
  product-thumb/
    product-thumb.js
    product-thumb.vue
    product-thumb.stories.js
    product-thumb.spec.js
    product-thumb.scss
  ...
organisms/
  product-featured/
    product-featured.js
    product-featured.vue
    product-featured.stories.js
    product-featured.spec.js
    product-featured.scss
    product-featured.graphql
  ...
templates/
  store/
    product/
      product.js
      produc.vue
      product.stories.js
      product.spec.js
      product.scss
  ...
pages/
  store/
    product/
      product.js
      product.vue
      product.stories.js
      product.spec.js
      product.scss
      product.graphql
  ...
```

### Atoms (nguyên tử)
- They are the smallest undividable components.
- Think generic. They have no logic for reusability.
- they can have variations.
- They have 1 folder level

### Molecules (phân tử)
- They are a combination of atoms and molecules.
- Think generic. They also have no logic.
- They have variations.
- They have slots
- They have 1 folder level

### Organisms (sinh vật)
- They are a combination of atoms and molecules and organisms.
- Specific. They start to have logic, and by logic, I mean app-related logic.
- They can pull data via GraphQL.
- They have variations.
- They have slots.
- They have 1 folder levels.

### Templates (mẫu)
- They are the final combination of atoms, molecules, and organisms nicely put together to present the final layout of a page, yet without the data.
- They have no data.
- They have logic.
- They have 2 folder levels. ( the extra level helps segment components based on their app logic)

### Pages
- They define the list of pages our app will have.
- They have data from GraphQL.
- They have little to no logic.
- They have 2 folder levels.

[Finding the perfect component file structure for our VueJS App.](https://medium.com/@vuefront/finding-the-perfect-component-file-structure-for-out-vuejs-app-b808a69dacac)

## 26 time saving tips

[Read this article](https://michaelnthiessen.com/26-time-saving-tips/)