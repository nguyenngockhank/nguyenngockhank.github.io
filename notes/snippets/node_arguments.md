# Lấy tham số từ CLI 

```javascript
process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});
```

**Chạy câu lệnh trên CLI**

>  node test.js one two=three four --five


**Output:**
```
0: /usr/local/bin/node
1: /Applications/AMPPS/www/tech-docs/test.js
2: one
3: two=three
4: four
5: --five
```

Vậy muốn lấy thông tin gì thì cứ lấy từ index 2 và nhớ xử lý chuỗi 


## Sử dụng thư viện 

[minimist](https://github.com/substack/minimist)

```javascript
var argv = require('minimist')(process.argv.slice(2));
console.dir(argv);
```

**Example 1**: 
```
node example/parse.js -a beep -b boop
```

```
{ _: [], a: 'beep', b: 'boop' }
```

**Example 2**: 
```
node example/parse.js -x 3 -y 4 -n5 -abc --beep=boop foo bar baz
```

```
{ _: [ 'foo', 'bar', 'baz' ],
  x: 3,
  y: 4,
  n: 5,
  a: true,
  b: true,
  c: true,
  beep: 'boop' }
```







