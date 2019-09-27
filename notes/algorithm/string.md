# String

## Hàm tiện ích

**Chuyển từ ký tự sang ASCII CODE** 

```javascript
const index = 0;
'abc'.charCodeAt(index);  // 97
```

**Cắt chuỗi** 

```javascript

// xoá ký tự đầu 
'abcdef'.slice(1);  // bcdef

// xoá ký tự cuối
'abcdef'.slice(0, -1); // abcde

// lấy 2 ký tự cuối 
'abcdef'.slick(-2); // ef
```

## Bài 1: Tìm chuỗi con liên tiếp dài nhất

```
Input:  'aabcpipipip'
Expect: 'abc'

Input:  'aaabcdefbcefdladefksjadklsfjabcdefg'
Expect: 'abcdefg'
```

```javascript
function process(str) {
    var result = new Map;
    var lastIndex = -1;


    for(var i= 0; i < str.length - 1; ++i) {
        var currentChar = str.charCodeAt( i ); 
        var nextChar =  str.charCodeAt(i + 1); 

        // check sequence 
        if ( currentChar !== (nextChar - 1)  ) {
            lastIndex = null;
            continue;
        }
    
        // start the sequence
        if (lastIndex == null) {
            lastIndex = i;
            result.set(i, 0)
        }

        var lastCount = result.get(lastIndex);
        result.set(lastIndex, lastCount + 1);
    }   

    // find the max value with index in result 
    const [index, length] = [...result.entries()].reduce((a, e ) => e[1] > a[1] ? e : a)

    return str.slice(index, index + length + 1);
}
```
