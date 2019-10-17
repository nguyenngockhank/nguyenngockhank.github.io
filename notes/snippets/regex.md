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

### Modifiers

| Modifier  |   Description |
|:--------- | :---------- |
| **`g`**  | Perform a global match (find all matches rather than stopping after the first match) |
| **`i`**  | Perform case-insensitive matching |
| **`m`**  | Perform multiline matching |


### Brackets

Brackets are used to find a range of characters:

| Expression  |   Description |
|:--------- | :---------- |
| [abc]	 | Find any character between the brackets |
| [^abc] | Find any character NOT between the brackets |
| [^0-9] | Find any character NOT between the brackets (any non-digit) |
| `(x|y)`  | Find any of the alternatives specified |

### Metacharacters

| Metacharacter  |   Description |
| :--------- | :---------- |
| .	| Find a single character, except newline or line terminator |
| \w |	Find a word character |
| \W |	Find a non-word character |
| \d |	Find a digit |
| \D |	Find a non-digit character |
| \s |	Find a whitespace character |
| \S |	Find a non-whitespace character |
| \b |	Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b |
| \B |	Find a match, but not at the beginning/end of a word |
| \0 |	Find a NUL character |
| \n |	Find a new line character |
| \f |	Find a form feed character |
| \r |	Find a carriage return character |
| \t |	Find a tab character |
| \v |	Find a vertical tab character |
| \xxx |	Find the character specified by an octal number xxx |
| \xdd |	Find the character specified by a hexadecimal number dd |
| \udddd |	Find the Unicode character specified by a hexadecimal number dddd |

### Quantifiers

| Expression  |   Description |
|:--------- | :---------- |
| n+ |  Matches any string that contains at least one n |
| n* |	Matches any string that contains zero or more occurrences of n |
| n? |	Matches any string that contains zero or one occurrences of n |
| n{X} |	Matches any string that contains a sequence of X n's |
| n{X,Y} |	Matches any string that contains a sequence of X to Y n's |
| n{X,} |	Matches any string that contains a sequence of at least X n's |
| n$ |	Matches any string with n at the end of it |
| ^n |	Matches any string with n at the beginning of it |
| ?=n |	Matches any string that is followed by a specific string n |
| ?!n |	Matches any string that is not followed by a specific string n |


## Tools & References
- [https://regex101.com/](https://regex101.com/)
- [JavaScript RegExp Reference](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)