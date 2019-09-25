# ES6 Chuyện khó ưa

## Private Attribute 
ES6 ra đời `class`! Vâng rất tuyệt vời... thế nhưng ko hỗ trợ thuộc tính `private` =)))

Dẹp cái cái vụ Symbol đi nha =)) 

Sau này Chrome nó có syntax mới 

```javascript
class IncreasingCounter {
    #count = 0;

    increment() {
        this.#count++;
    }
}
```
[Xem thêm tại đây ](https://developers.google.com/web/updates/2018/12/class-fields)

## Arrow Function 

Vâng nó đó `() => { }`. Chuyện là xưa đang học hành sử dụng `vue` mà kiểu quen tay nên gõ function arrow vào `methods`:

```javascript
new Vue({
    // ... 
    methods: {
        increase: () =>  ++this.count,
   }
})
```

Nó **éo** nhận `this` của Component các bác ạ! Mò mẫm 1 thời gian thì mới ngộ ra 

```javascript
() => { /* ... */ }

(function(){
   /* ... */
}).bind(this);
```

Ừm nó tự động bind thèng `this` của context hiện tại vào function arrow luôn, thế nên trong Vue nó nhận diện sai cmnl. Cho nên là cẩn thận khi xài nó trong thư viện hoặc framework.




