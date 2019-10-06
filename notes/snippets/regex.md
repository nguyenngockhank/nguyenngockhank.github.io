# Regular Expression

[Tham khảo thêm](https://medium.com/@j_lim_j/summary-of-javascript-regular-expressions-regex-tutorial-by-net-ninja-6cb5215dd658)

## Case: Bóc tách tên tác giả

```javascript
var input = '/tac-gia/nguyen-khank.html';
var chunks = input.match(/(tac\-gia\/)([a-z\-]+)(\.html)/);
var authorSlug = chunks[2]; // nguyen-khank
```

## Case: Đổi size của href hình 

```javascript
"9abf121069d796db82c9dcf2e5be6aa5514821b9.jpg?image_crop_resized=100x60".replace(/image_crop_resized=(\d)*x(\d)*/, 'image_crop_resized=400x240');
```

## Case: Lấy giá trị trong ngoặc

```javascript
/// get length of field type
const REGEX = /([a-z0-9]+\()(\d+)(\))/;
const r1 = "bigint2019(50)".match(REGEX); // r1[2] == 50
const r2 = "varchar(500)".match(/([a-z0-9]+\()(\d+)(\))/); // r2[2] == 500
```

## Case: Bóc tách lấy số

```javascript
'1-20^32-34.21,12*15'.split(/[-^\,\.\*]/);  // ["1", "20", "32", "34", "21", "12", "15"]
```

## Bảng phong thần

- **`g`**  mean global
- **`i`** check insensitive
- **`+`** the one or more quantifier
- **`\`** the escape character
- **`[]`** the character set
- **`[^]`** the negate symbol in a character set (exclude something)
- **`?`** expect only one character stand before ? will be an optional
- **`*`** expect one or unlimited character before * symbol
- **`.`** except one more character (car. will be card or cars or car@ as long as it be 4 characters)

## Tools
[https://regex101.com/](https://regex101.com/)