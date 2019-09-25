# Hoisting


## var và let

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

- A: `Lydia` và `undefined`
- B: `Lydia` và `ReferenceError`
- C: `ReferenceError` và `21`
- D: `undefined` và `ReferenceError`

KẾT QUẢ là **D**. `var` và `let` đều được Hoisting nhưng chỉ có `var` được khởi tạo với giá trị là `undefined`. 

## var và function

```javascript
function test() {
    getName();
    getName2();

    
    var getName2 = function() {
        console.log('2nd name');
    }

    function getName() {
        console.log('Khank');
    }
}

test();
```

KẾT QUẢ là `Khank` và `TypeError: getName2 is not a function`. Vậy thì function `getName` được hoisting và có thể chạy được luôn. Còn `getName2` thì như ví dụ trên, giá trị khi hoist là `undefined` nên gây ra lỗi như vậy.

P/s: 
- `getName`  là Function Declaration
- `getName2` là Function Expression
