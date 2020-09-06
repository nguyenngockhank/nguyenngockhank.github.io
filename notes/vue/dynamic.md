# Dynamic

[[toc]]

## Pass dynamic props

### Vue 

```html
<input v-bind="attrObj" :maxlength="maxlength" />
```

```js
computed: {
    attrObj() {
        return {
            color: 'red',
            // ...
        }
    }
}
```

### React 

```html
<input {...dynamicProps} />
```

### Dynamic Classes

```html
<div v-bind:class="classObject"></div>
```

```js
data: {
  isActive: true,
  error: null
},
computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```


## Dynamic Component  

```html
<component :is="componentDisplay" v-bind="$props" />
```

```js
import AComponent from './AComponent';
import BComponent from './BComponent';

const displayMapping = {
    'A': AComponent,
    'B': BComponent,
}

export default {
    data() {
        return {
            display: 'A'
        }
    },
    computed: {
        componentDisplay() {
            return displayMapping[this.display];
        }
    }
}
```

[Read docs 4 more Detail](https://vuejs.org/v2/api/#component)

## [VueX] Dynamic Module 

### Register 

```js
store.registerModule( moduleName, {
    namespaced: true,
    state: {
        //...
    },
    getters: {
        //...
    },
    actions: {
        //...
    },
    mutations: {
        //...
    }
});
```

### Unregister 

```js
store.unregisterModule(moduleName);
```

[Read docs 4 more Detail](https://vuex.vuejs.org/api/#registermodule)