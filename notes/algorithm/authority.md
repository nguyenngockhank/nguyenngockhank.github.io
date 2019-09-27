# Phân quyền trên bitwise kinh điển 

## Zô 

Giả sử ta có 4 quyền View, Edit, Add, Delete tương ứng với 4 bit từ phải qua trái. Từng quyền trên hệ nhị phân và thập phân

```
View   =>  0001  =>  1 
Edit   =>  0010  =>  2  
Add    =>  0100  =>  4
Delete =>  1000  =>  8
```  

```
  Delete    Add     Edit      View
    1        1        1        1
```

## Khi ta có nhiều quyền 

```
View + Edit =  1 + 2 = 3 (0011)
Add  + Delete = 4 + 8 = 12  (1100)
View + Add + Delete = 1 + 4 + 8 = 13 (1101)
Full = 1 + 2 + 4 + 8 = 15   (1111)
```

## Kiểm tra quyền 

Ví dụ muốn kiểm tra quyền `View` ở bit thứ 1. `View` giá trị là 1. 

```
View + Edit =  1 + 2 = 3 (0011)
Kiểm tra => 3 & 1   => 1 

Add  + Delete = 4 + 8 = 12  (1100)
Kiểm tra => 12 & 1  => 0

View + Add + Delete = 1 + 4 + 8 = 13 (1101)
Kiểm tra => 13 & 1  => 1
```



