# Closure

Note ngắn, vài ví dụ dùng closure làm những thứ hay ho, rất j và này nọ 

## Làm biến private 

ES6 ra đời `class` nhưng vẫn chưa thể thay thế được style ngày xưa

```javascript
function Person() {
    var name = 'khanh';

    this.getName = () => name;  // `name` có thể xài tại đây là nhờ Closure 
}

const p = new Person;
p.getName(); 
```

## Tạo default args for function

```javascript
function bindArgs(fn, ...defArgs) {
    return (...args) => {
        // `defArgs` có thể xài tại đây là nhờ Closure 
        return fn(...defArgs, ...args)
    }
}

// sử dụng
function sum(a, b) {
    return a + b;
}

// bind 1 arg 
const sum5 = bindArgs(sum, 5); 
sum5(2) // 7

// bind 2 args
const sum10 = bindArgs(sum, 5, 5); 
sum10() // 10
```

**Chý ý**: Nếu muốn sử dụng phức tạp hơn, thì Lodash viết phức tạp và cầu kỳ, tính năng này nọ hơn nhiều [LINK 16'](https://lodash.com/docs/4.17.15#partial)

