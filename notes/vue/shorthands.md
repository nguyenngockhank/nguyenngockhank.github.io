# Tổng hợp bộ thư pháp viết tắt

[[toc]]

## v-bind

```html
<!-- full syntax -->
<a v-bind:href="url"> ... </a>

<!-- shorthand -->
<a :href="url"> ... </a>

<!-- shorthand with dynamic argument (2.6.0+) -->
<a :[key]="url"> ... </a>
```

## v-on

```html
<!-- full syntax -->
<a v-on:click="doSomething"> ... </a>

<!-- shorthand -->
<a @click="doSomething"> ... </a>

<!-- shorthand with dynamic argument (2.6.0+) -->
<a @[event]="doSomething"> ... </a>
```

## v-slot

```html
<!-- full syntax -->
<template v-slot:header>
    <h1>Here might be a page title</h1>
</template>

<!-- shorthand -->
<template #header>
    <h1>Here might be a page title</h1>
</template>
```

## `.sync` Modifier

Tại component sẽ emit `TextDocument`

```javascript
this.$emit('update:title', newTitle)
```

Sử dụng component 

```html
<!-- full syntax -->
<text-document :title="doc.title" @update:title="doc.title = $event"></text-document>

<!-- shorthand -->
<text-document :title.sync="doc.title"></text-document>
```


## v-model 

```html 
<input :value="searchText" @input="searchText = $event.target.value" />

<!-- Viết ngắn hơn -->
<input v-model="searchText">
```

Trong Component

```html
<custom-input :value="searchText" @input="searchText = $event" ></custom-input>

<!-- Viết ngắn hơn -->
<custom-input v-model="searchText"></custom-input>
```
