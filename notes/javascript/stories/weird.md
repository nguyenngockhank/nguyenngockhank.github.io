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







