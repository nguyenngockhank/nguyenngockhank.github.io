# Javascript kỳ dị

---

## 'éo' == 'éo' (false) 
Gì đây, vâng nó đấy 

```javascript 
console.log('éo' == 'éo'); /// false
console.log('éo'.length); // 3
console.log('éo'.length); // 2
```

Nhìn các ký tự có vẻ giống nhau nhưng phía sau nó là cả 1 câu chuyện =)) Ngắn gọn là do cách `encode` khác nhau. 

### Solution 
```javascript
'éo'.normalize() == 'éo'.normalize(); /// true
```

Nhớ Babel / polyfill nếu browser ko support 

---

## a == a (false)
Chính `a` so sánh với nó mà vẫn `false`. Đây là case giá trị của a là `NaN`

```javascript
var a = NaN;
console.log( a == a ); // false
```

Nên cẩn trọng khi làm việc tính toán, nên nhớ có case NaN này.

---

## [] == true (false) và ![] == true (false)

```js
[] == true // false
![] == true  // false -> ???  

/// thử so sánh với false
[] == false // true
![] == false // false -> hợp lý hơn rồi 
```

### [] == true (false)

Khi so sánh `==` thì đây là dạng so sánh giữa Object (A) và Boolean (B)

**Bước 1**: 
- **A** sẽ lần lượt gọi hàm `valueOf`, `toString` để trở thành primitive value `ToPrimitive(A)`
- **B** sẽ trở thành số `ToNumber(B)` (tương đương với **`+B`**) 

**Bước 2**:
Hiện tại **A** đã là string (''), **B** đã là Number (0)
- Tại đây, A sẽ ép thành số là có thể so sánh được `ToNumber(A)`

Xem thêm [JS Data type](/javascript/data_type.md#type-coertion)

```js
// xem thêm 1 vài ví dụ khác về việc ẩn ý ép kiểu 
[1, 2] == '1,2' // true
['1', '2'] == '1,2' // true
```

### ![] == true (false)

Ở trường hợp này, vì `![]` sẽ ưu tiên chạy trước `==` nên sự ép kiểu giữa Object và Boolean không còn. 

Mà thay vào đó: `[]` không phải là kiểu `Falsy` nên khi phủ định lại là `false`, `false` so sánh với `true` thì ra `false`

--- 

## ["1", "2", "3"].map(parseInt); 

```javascript 
["1", "2", "3"].map(parseInt); 

/// expect :  [1, 2, 3]
/// thực tế :  [1, NaN, NaN] 
```

### Nguyên nhân 

Cú pháp của `array.map` 

```javascript
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])
```

Cú pháp của `parseInt`

```javascript
parseInt(string, radix);
```

=> cho nên 2 params đầu của callback, sẽ truyền xuống tham số của parseInt nên sai tè le 

### Phòng tránh 
- Viết rõ ràng ra, đừng viết tắt, giả bộ nguy hiểm làm gì =)) 

```javascript
["1", "2", "3"].map((v) => parseInt(v)); 
```

---

## Mất attribute khi "JSON.stringify"

+ Server Node: Dùng `express` truyền dữ liệu JSON xuống client

```javascript
obj.total = 2000;
res.json(obj); 
```

+ Client nhận response nhưng không thấy attribute `total` của `obj`

### Nguyên nhân 
- `obj` thuộc 1 instance của 1 (`class`) đã implement function  `toJSON`. Dẫn đến `res.json` gọi `JSON.stringify`, rồi trong  `JSON.stringify` gọi hàm `toJSON` override và lỗi :v 

### Phòng tránh 
- Cẩn trọng khi sử dụng các object không rõ nguồn gốc =)) 
- Sử dụng DTO / request. 
- Nghỉ code 


## Want More
Here: [wtfjs](https://wtfjs.com/)


