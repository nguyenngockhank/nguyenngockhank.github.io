

## Swap 2 phẩn tử trong mảng

Trước hết là nên xem cái này :)) 

```javascript
function swapElements(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = temp
}
```

## Bubble Sort

Ý tưởng thuật toán này là so sánh 2 phần tử kế tiếp nhau. Nếu phần tử trước lớn hơn thì hoán đổi vị trí. 

Nếu nhìn ở 1 góc nghệ thuật, thì nó giống những quả bong bóng nổi lên vậy đó =))) Số lớn sẽ dần bị đẩy về cuối mảng.
    

Cách bình thường 

```javascript
function bubbleSort(arr) {
    const len = arr.length - 1

    for (let  i =  0 ; i < len; ++i) {  
        for  (let  j = 0; j < len; ++j) {  
            const nextJ = j + 1;
            if  (arr [j] > arr [nextJ]) {  
                swapElements(arr, j, nextJ)
            }  
        }  
    }  
    return arr;
}
```

### Cải tiến :)) 

Nhận thấy sau mỗi lần chạy xong vòng lặp trong (inner với j)
    - thì số lớn nhất đã về cuối mảng nên ko cần so sánh nữa làm gì 
    - nếu không còn swap nào xảy ra nữa thì mảng đã sắp xếp -> done

```javascript

function bubbleSort(arr) {
    const len = arr.length - 1
    let swapped = false, nextLen = len;

    for (let  i =  0 ; i < len; ++i) {  
        swapped = false

        for (let  j = 0; j < nextLen; ++j) {  
            const nextJ = j + 1;
            if  (arr [j] > arr [nextJ]) {  
                swapElements(arr, j, nextJ)
                swapped = true
            }  
        }  

        --nextLen;
        if (!swapped) { 
            // mảng đã sắp xếp xong
            break
        }
    }  
    return arr;
}
```




[Tool js online](https://playcode.io/)