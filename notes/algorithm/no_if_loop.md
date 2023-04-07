# Không dùng If / Loop

[Anti-If: The missing patterns](https://code.joejag.com/2016/anti-if-the-missing-patterns.html)

## Đếm số lẻ trong mảng 

Cho 1 mảng số nguyên lớn hơn 0, đếm số lẻ trong mảng và không dùng **`if`**

```js{4}
function countOdd(arr) {
    var result = 0;
    arr.forEach((item) => {
        result += item % 2; // 1 là số lẻ
    });
    return;
}

countOdd([1, 2, 3]); // 2 
```

### Nếu chứa cả số nguyên âm
```js
result += Math.abs(item % 2); // thêm giá trị tuyệt đối voà
```

### Nếu đếm số chẳn 

```js
arr.length - countOdd(arr);
```

## `weekday` hay `weekend`

Xác định hôm nay là weekday hay weekend, không dùng  **`if`**


Dựa vào [bảng cửu chương này](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

::: tip Date.prototype.getDay()
Returns the day of the week (0-6) for the specified date according to local time.
:::

Bài giải

```js{10}
const REFERENCE_TABLE = {
    0: 'weekend', // sunday
    6: 'weekend', // saturday
    'weekday': 'weekday', 
}

function weekendOrWeekday() {
    const today = new Date;
    const day = today.getDay();
    return REFERENCE_TABLE[day] || REFERENCE_TABLE['weekday'];
}
```


## Tính tổng của mảng

Không sử dụng vòng lặp 

## Đệ quy (Recursive)
```js
function sum([ number, ...rest ]) {
    if (rest.length === 0) { 
        return number;
    }
    return number + sum(rest);
}

sum([1, 2 ,3]); // 6
```

## Nhãn (Label statement)

Cách này thì bên ngôn ngữ khác Js, PHP chẳng hạn 

```php
 function sum($numbers) {
    $index = 0; 
    $length = count($numbers);
    $result = 0;

    sum: {
        if ($index  < $length) {
            $result += $numbers[$index++];
            goto sum;
        }
    }
   
    return $result;
}

echo sum([1, 2, 3]); // 6
```