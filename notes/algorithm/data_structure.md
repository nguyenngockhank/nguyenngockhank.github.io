# String

## Đếm số lượng số lớn nhất

[Birthday Cacke](https://www.hackerrank.com/challenges/birthday-cake-candles/submissions/code/92820701)


```javascript
function birthdayCakeCandles(ar) {
    let count = 0,  highest = 0;

    for (let i = 0, len = ar.length; i < len; ++i) {
        let value = ar[i];

        /// found a new highest 
        if (highest < value) {
            highest = value;
            count = 1;
        } 
        /// increase if that the highest
        else if (highest == value) {
            ++count
        }
    }

    return count;
}
```

