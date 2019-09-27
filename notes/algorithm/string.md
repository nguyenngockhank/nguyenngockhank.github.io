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

**Tìm vị trí** 
```javascript
// vị trí chuỗi / ký tự
'abcdef'.indexOf('a')  // 0
'abcdef'.indexOf('bc')  // 1
'abcdef'.indexOf('z')  // -1
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
- Bước 2: Nếu ko còn tìm thấy vị trí lặp -> chuỗi đã tối giản -> return
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

## Bài 3: Độ mạnh password 

[hackerrank link](https://www.hackerrank.com/challenges/strong-password/problem?h_r=next-challenge&h_v=legacy)

Đề hơi lắt léo 1 xí, Output expect là số lượng ký tự cần nhập vào để Password đủ mạnh 

Mạnh được định nghĩa như sau 
- Độ dài ít nhất 6 ký tự. 
- Chứa số 
- Chứa ký tự viết thường, 
- Chứa ký tự viết hoa
- Chứa ký tự đặc biệt 


```
Input: 'Ab1' 
Expect: 3

Input: '#HackerRank'
Expect: 1
```



```javascript
// n là length của password

// Complete the minimumNumber function below.
function minimumNumber(n, password) {
   
    // Return the minimum number of characters to make the password strong
    let err = 0
  
    const lower_case = "abcdefghijklmnopqrstuvwxyz"
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const special_characters = "!@#$%^&*()-+"
    const numbers = "0123456789"

    let hasLower = false, hasUpper = false, hasSpecial = false, hasNumber = false;

    for(let i = 0; i < n; ++i) {
        let ch = password.charAt(i);
        if (!hasLower && lower_case.indexOf(ch) >= 0) {
            hasLower = true
        }
        if (!hasUpper && upper_case.indexOf(ch) >= 0) {
            hasUpper = true
        }
        if (!hasSpecial && special_characters.indexOf(ch) >= 0) {
            hasSpecial = true
        }
        if (!hasNumber && numbers.indexOf(ch) >= 0) {
            hasNumber = true
        }

        if (hasLower && hasUpper && hasSpecial && hasNumber) break;
    }

    if (!hasLower) {
        ++err 
    }

    if (!hasUpper) {
        ++err 
    }

    if (!hasSpecial) {
        ++err 
    }

    if (!hasNumber) {
        ++err 
    }

    // dont need to add more chars 
    if (n > 6) {
        return err
    }

    let numLackChar = 6 - n;
    return numLackChar >= err ? numLackChar : err
}

```