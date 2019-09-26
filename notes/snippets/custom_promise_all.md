# Custom Promise All

## Vấn đề
Ta hay dùng  `Promise.all(promises)` (hàm có sẵn ES6)  để bắt được lúc mà `tất cả` các promise thực thi xong. 

Thế nhưng không thể biết được `từng` promise thực thi xong 

VD: Dùng để làm `process bar`chẳng hạn => hàm built-in vẫn không đủ siêu năng lực để support ta làm chuyện ấy =)) 

## Giải quyết 

Viết lại hàm mới =)) Made by Khank

```javascript
// all settled
export default function promiseAll(promises = [], { onItemSuccess, onItemError, onItemDone, onAllDone } = {}) {

    var result = [];
    var totalRequest = promises.length;
    var numProcessed = 0;

    return new Promise(function(resolve, reject) {
        if(promises.length === 0) {
            resolve(false);
            return;
        }

        var checkAndDoResolve = function(){
            numProcessed++;
            if(numProcessed == totalRequest) {
                // call hook
                if (onAllDone) {
                    onAllDone()
                }
                resolve(result);
            }
        }

        promises.forEach(function(promise, index) {
            promise.then(function(response){
                result[index] = response;
                // call hook
                if (onItemSuccess) {
                    onItemSuccess(index, response)
                }
            }).catch(function(err){
                result[index] = err;

                // call hook
                if (onItemError) {
                    onItemError(index)
                }
            }).finally(function() {
                // call hook
                if (onItemDone) {
                    onItemDone(index)
                }
                checkAndDoResolve();
            })
        });
    });
}
```

## Sử dụng 

```javascript
var result = await promiseAll(promises, {
    onItemDone: function(index) {
        console.log('>> ITEM INDEX - DONE: ', index)
    }, 
    onAllDone: function() {
        console.log('>> ALL ITEMS DONE')
    } 
})

console.log('>> ALL ITEMS DONE')
```



