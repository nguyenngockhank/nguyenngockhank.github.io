# Add custom function 

## Mục tiêu - đích đến 

```javascript
const arr = [ 11, 22 , 44 ]; 
arr.sum(); // 77
```

## Cách xây dựng

```javascript
Array.prototype.sum = function() {
    return this.reduce((total, amount) => total + amount); 
};

[ 11, 22 , 44 ].sum(); // 77
```
