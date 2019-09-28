# Trick độc, code lạ =))

## Nhân / chia 2 

```javascript
8 >> 1; // lùi 1 bit == chia 2 
1 << 2; // tiến 2 bit  == nhân 4
```

## Math.floor

Loại bỏ phần thập phân

```javascript
Math.floor(321.92)  /// cách bình thường 
~~321.92; // chạy nhanh hơn =)) do thao tác trực tiếp trên bit


~~(Math.random() * 100) /// case thực tế, random số từ 0 -> 100
```

## Ép kiểu 

Ép kiểu từ string sang số, `+` trước string

```javascript
+'323'  /// 323
+'123sdfdsf' /// NaN
```

Ép sang boolean -> `!!` tất cả các giá trị Falsy đều về false 

```javascript
!!undefined; // false
!!''; // false
!!NaN; // false 
```

## Điều kiện 

```javascript
/// thông thường =)) 
if ( dep_trai ) {
   gai_theo(); 
}

/// thông thái =))) 
dep_trai && gai_theo();
```

## Kiểm tra Object rỗng

```
!Object.keys({}).length; // true
```

--- 
# `Array tricks`

## Gộp mảng

```javascript
arr1.concat(arr2); /// cách bình thường
arr1.push.apply(arr1, arr2); /// nhanh hơn vì thèng này sẽ thay đổi arr1 
```

## Tìm kiếm phần tử

Nếu chỉ cần 1 phần tử, hãy sử dụng `Array.find` thay vì `filter` vì filter sẽ quét hết mảng.

## Reduce sinh ra để làm gì?

```javascript
const avengers = [
  { name: 'ironman', age: 27 },
  { name: 'hulk', age: 12 },
  { name: 'captain_america', age: 18 },
  { name: 'thor', age: 22 },
];

/// lấy tên các bạn trên 18 theo cách thông thường 
const result = avengers.filter(({ age }) => age >= 18) .map(({ name }) => name); 

/// cách thông thái
const result = avengers.reduce((avenger, { age, name }) => {
  return (age >= 18) ? [...avenger, name] : avenger;
}, []);
```


## Thêm custom function  

```javascript
Array.prototype.sum = function() {
    return this.reduce((total, amount) => total + amount); 
};

[ 11, 22 , 44 ].sum(); // 77
```


