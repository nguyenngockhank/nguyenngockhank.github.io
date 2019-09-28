# VueJS - có thể bạn chưa biết 

## Bind object vào props của component

Thay vì chúng ta bind từng thuộc tính như thế 

```html
<input :title="obj.title" :placeholder="obj.placeholder" ... />
```

Chúng ta có thể lười, sử dụng `v-bind` 1 phát nguyên cả cái `obj` luôn. 
Tất nhiên là có thể bind thêm các thuộc tính khác nữa 

```html
<input v-bind="obj" :maxlength="maxlength" />
```
