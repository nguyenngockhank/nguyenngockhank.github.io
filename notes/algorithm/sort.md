# Sort 

## Swap 2 phẩn tử trong mảng

Trước hết là nên xem cái này :)) thuật toán đổi chỗ 

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
    let swapped = false, nextLen = len

    for (let  i =  0 ; i < len; ++i) {  
        swapped = false

        for (let  j = 0; j < nextLen; ++j) {  
            const nextJ = j + 1
            if  (arr [j] > arr [nextJ]) {  
                swapElements(arr, j, nextJ)
                swapped = true
            }  
        }  

        --nextLen
        if (!swapped) { 
            // mảng đã sắp xếp xong
            break
        }
    }  
    return arr
}
```

## Quick Sort 

Ý tưởng xuất phát từ châm ngôn "Chia để trị": 
- Chọn một phần tử chuẩn (pivot) (phần tử đầu, cuối, giữa, ... tuỳ)
- Dồn số lớn hơn pivot về bên phải, số bé hơn về bên trái
- Sau khi xong thì ta có: `[ ...bé hơn pivot, pivot, ...lớn hơn pivot]`
- Làm điều tương tự với 2 phần: `bé hơn pivot` và `lớn hơn pivot` :)) nghĩa là ko quan tâm tại pivot hiện tai đã được sắp xếp, và gọi đệ quy lại cho 2 phần nhỏ hơn. => **Chia để trị**

```js
function quickSort(arr, left, right) {
    if (left >= right ) {
      return
    }

    // số làm chuẩn 
    const pivot = arr[left] 

    // khởi tạo index 
    let indexLeft = left + 1, indexRight = right 

    do {
        // dừng lại khi thấy phần tử lớn hơn pivot
        while(arr[indexLeft] <= pivot && indexLeft <= right) {
            ++indexLeft
        }

        // dừng lại khi thấy phần tử bé hơn hoặc bằng  pivot 
        while(arr[indexRight] > pivot) {
            --indexRight
        }

        // đổi chỗ nếu chưa lố =))
        if (indexLeft < indexRight) {
            swapElements(arr, indexLeft, indexRight)
        }
    } while( indexLeft < indexRight)

    // đưa pivot vào giữa
    swapElements(arr, left, indexRight) 

    // sắp xếp phần lớn hơn pivot
    if ( left < indexRight - 1) {
        quickSort(arr, left, indexRight - 1)
    }

    // sắp xếp phần bé hơn pivot
    if (indexRight + 1 < right) {
        quickSort(arr,  indexRight + 1, right)
    }
}
```

[Tool js online](https://playcode.io/)