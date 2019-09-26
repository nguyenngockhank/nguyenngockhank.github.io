# Giao tiếp trong Vue

Cũng như ngoài thực tế - giao tiếp là 1 kỹ năng mềm rất ư là quan trọng 

Ừm, quan trọng như vậy nên tui có bài viết này

## Truyền sang `props` 

Cách này dùng trong quan hệ trực tiếp gia phả Cha - Con

```html
<template>
    <Con ten="khanh" :tien="tien" />
</template>
```

### Tránh truyền `Function` từ Cha xuống Con

- Why? Theo mình là thế  - Nên `emit` sự kiện từ Con lên Cha. 
- Tất nhiên là nếu mà sử dụng 3rd party Component thì có nhiu xài nhiu thôi =))

Ví dụ: 

`Parent.vue`

```html
<template>
    <Con ten="khanh" :tien="tien" onKhoc="xuLyKhiConKhoc" />
</template>
```

`Child.vue`


```javascript
if (this.tien < 10000) {
    this.onKhoc({ message: 'Tiền ít quá' )
}
```

#### Nên chuyển thành

`Child.vue`

```javascript
if (this.tien < 10000) {
    this.$emit('khoc', { message: 'Tiền ít quá' })
}
```


`Parent.vue`

```html
<template>
    <Con ten="khanh" :tien="tien" @khoc="xuLyKhiConKhoc" />
</template>
```

## Event Bus

To be continued

## Vuex

To be continued

## Others

To be continued