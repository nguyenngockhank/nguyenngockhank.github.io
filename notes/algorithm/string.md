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

Input:  'aaabcdefbcefdlsjadklsfjabcdefg'
Expect: 'abcdefg'
```


**Ý tưởng:**
- So sánh 2 ký tự gần nhau -> xác định xem có sự liên tiếp 
- Nếu có sự liên tiếp -> lưu lại ví trí bắt đầu + đếm số lượng ký tự liên tục
- Tìm sự liên tiếp có độ dài lớn nhất 
- Trả về kết quả


```javascript
function process(str) {
    // can use stack for saving memory :))
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

    // no sequence in string 
    // just return the first char 
    if (result.size === 0) {
        return str.slice(0, 1); // frist char or ''
    }

    // find the max value with index in result 
    const [index, length] = [...result.entries()].reduce((a, e ) => e[1] > a[1] ? e : a)

    return str.slice(index, index + length + 1);
}
```


## Bài 2: Xoá ký tự giống nhau

```
Input:  'abbcddde' 
Expect: 'ace'

Input:  'abbaa'
Expect: ''
Explain: 'abba' -> 'aaa' -> ''

Input:  'abbaabbb'
Expect: ''
Explain: 'abbaabbb' -> 'aaabbb' -> 'bbb' -> ''
```

**Ý tưởng:**

- Bước 1: Tìm vị trí lặp ký tự + độ dài lặp trong chuỗi
- Bước 2: Nếu chuỗi ko tìm thấy vị trí lặp -> chuỗi đã tối giản -> return
- Bước 3: Xoá vị trí lặp trong chuỗi chính -> lặp lại bước 1


```javascript
function findSeq(str) {
    var pos = -1;
    var count = 1; 

    for(var i= 0, len = str.length - 1; i < len; ++i) {
        let curChar = str.charAt(i);
        let nextChar = str.charAt(i+1);
        
        if (curChar == nextChar) {
            // set first char index to pos
            if (pos == -1) {
                pos = i; 
            }

            count++;
            
        } else if(pos != -1) {
            return [pos, count];
        }
    }

    return [pos, count];
}

function process(str) {
    var stack = [];

    let  pos, count ;
    do {
        [ pos, count ] = findSeq(str);
       
        if (pos != -1) {
            let char = str.charAt(pos);
            let chunk = String.prototype.padStart(count, char)

            /// remove the chunk 
            str = str.replace(chunk, ''); 
        }
    } while( pos != -1);

    return str;
}
```