---
heroText: Springfield Dim Sum
actionText: See our Menu →
actionLink: ./menu.md
features:
- title: Parking
  details: Plenty of free parking at night and free validation during the busin
---


# MochaJS

::: tip  
Mocha - simple, flexible, fun
:::

## Cài đặt 

### Cài đặt package

```git
npm i -D mocha
```

- `npm i` viết tắt của `npm install`
- `-D` viết tắt của `--save-dev`
- `--save-dev` sẽ lưu vào `devDependencies`


* Cài xong thì các bạn đã chạy vi vu được rồi:


```git
mocha 'src/**/*.test.js'
```

Chạy tất cả các file có đuôi là `.test.js` nằm trong thư mục `src`

### Cài đặt script vào `package.json`

```js
"script": {
    "test:unit": "mocha 'src/**/*.test.js'"
}
```

## Babel 

Nếu code có sử dụng ES6... nhất là chức năng `import` hoặc vài chức năng mà version node bạn chưa support 

* Xài rồi thì cài thêm 2 packages này của babel 

```git
npm install --save-dev @babel/polyfill @babel/register
```

* Update lại script

```git
mocha 'src/**/*.test.js' --require @babel/polyfill --require @babel/register
```

* Kiểm tra lại file `.babelrc` (nói chung chỗ config babel, có thể là chỗ khác)

Nếu thấy dòng `{"modules": false}` thì xóa đi (hay comment lại) để nó biết đường nó transpile cái đó về `require`. Node nó ko hiểu cái `import` đâu

```js
 "presets": [
    [
        "@babel/env" 
        // {"modules": false}
    ]
],
```

## Webpack 

Số là vầy, webpack nó có cái trò `alias` resolver j đó ngầu lắm =)) nhìn lại câu lệnh của ta thì chả có dính dáng gì tới `Webpack` hết ... cay 

**Cách giải quyết**: đem hết mấy cái alias xuống Babel luôn =))

* Cài thêm toy 

```
npm i -D module-resolver
```

* Sửa lại `.babelrc`

```js
"plugins": [
    [
        "module-resolver", 
        {
            
            "root": [ "./src" ],
            "alias": {
                // thêm alias tại đây 
                "$template": "./src/modules/template",
            }
        }
    ]
]
```

- **`root`** : khi ko có prefix sau khi kiếm ko thấy trong `node_modules`, thì đến root này
- **`alias`**: Thêm các alias trong webpack của bạn vào đó


## Code chưng bày 

Code lụm trên trang chủ =)) 

```js
var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
```

Kết quả cũng trên trang chủ =))

```
$ ./node_modules/mocha/bin/mocha
  Array
    #indexOf()
      ✓ should return -1 when the value is not present

  1 passing (9ms)
```