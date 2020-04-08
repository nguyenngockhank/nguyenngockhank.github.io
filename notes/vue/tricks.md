# VueJS - có thể bạn chưa biết 

[[toc]]

## Watchers triggered khi khởi tạo

```js
export default {
    // ... 
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

Thêm vào thuộc tính `immediate`.

## File Structure (Atomic)

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