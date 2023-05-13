---
tags: ["Framework"]
---

# Giao tiếp trong Vue

Cũng như ngoài thực tế - giao tiếp là 1 kỹ năng mềm rất ư là quan trọng 

Ừm, quan trọng như vậy nên tui có bài viết này

<TagLinks />

## Từ cha xuống con bằng `props` 

Cách này dùng trong quan hệ trực tiếp gia phả Cha - Con

```html
<template>
    <Con ten="khanh" :tien="tien" />
</template>
```

## Từ con lên cha bằng `$emit`

```js
this.$emit('hi', 'chào bố');
```

Ở component cha nhận như 1 event

```html
<template>
    <Con ten="khanh" :tien="tien" @hi="handler" />
</template>
```


Cũng giống React, ta có thể từ cha truyền `Function` xuống để component con gọi - nhưng mà có `$emit` để làm gì chứ =)) 

> Everything happens for a reason

---

## Từ miền nam - ngược ra bắc bằng Event Bus

Ở đây thì không cần quan tâm là quan hệ, quan họ cái gì cả =)) Thậm chí là chung 1 component =)) 

**Khởi tạo**
```js
const EventBus = new Vue()

Vue.prototype.$eventBus = EventBus
```


**Sử dụng nhẹ**
```js
this.$eventBus.$emit('hello', 'Can you hear me?');

this.$eventBus.$on('hello', () => console.log('Yeah, I can hear you'));
```

Thật ra đây là một dạng của `Event Driven Architecture (EDA)`, sử dụng 1 `$eventBus` (instance của Vue) như là EventEmitter. 

---

## State Management - Vuex

Không lẽ xài Vue mà đi xài Redux hay MobX trời :)) Nhưng điều này là có thật... thích trải nghiệm thì cài... tui thì xin kiếu 

- [redux-vue](https://yarnpkg.com/en/package/redux-vue)
- [vue-mobx](https://yarnpkg.com/en/package/vue-mobx)

**500 đồng hình minh họa**

![Vuex Review](@/images/vuex.png)

**500 code biếm họa**

**Khởi tạo**
```js
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
```

**Sử dụng**
```js
store.commit('increment')

console.log(store.state.count) // -> 1
```

Ừ nhìn sao ko có chút Vue nào hết vậy =)))) Ừm nó có thể sống độc lập mà không cần Vue. Cũng giống Redux hay MobX vậy.

### Tại sao phải dùng State Management? 
- Đóng vai trò là 1 Global state - nên việc chia sẻ state sẽ dễ dàng hơn là truyền qua props
- Tránh implement nhiều logic cho component nếu sử dụng EventBus
- Như là một data center - nên rất dễ tạo snapshot hay traveling time 
- Hỗ trợ nhiều modules 
=> Những lý do trên khiến App dễ dàng mở rộng 

[Document chính](https://vuex.vuejs.org/guide/)
