# npm 

Là công cụ quản lý kho vũ khí (package) của NodeJS :v Giống composer của môn phái PHP vậy.

Và sổ sách của cái kho đó là **package.json**, nhìn cái đuôi **.json** thì hiểu nó có cấu truc JSON babe rồi ha :v 

---


## 0. package.json

```javascript
{
  "name": "Project Name",
  "version": "1.0.0",
  "description": "Description",
  "main": "index.js",
  "author": "nguyenkhank",
  "license": "ISC",

  "scripts": { 
      // ... 
  },
  "dependencies": {
      //...
  },
  "devDependencies": {
      //...
  }
}
```

- `name`: Không chứa khoảng trắng nhé :smiling_imp: Vd:  `KhankDepZai` hay `li-xi-tui-di` 
- `main`: Cái này chỉ hữu dụng khi bạn muốn pulish cái project cho mọi người sử dụng... mặc định là `index.js`, nếu mà bạn không thích mặc định thì có thể sửa lại để lúc `require('KhankDepZai')` thì nó sẽ kiếm file khác. Còn bạn thấy code mình gớm quá, không mong public lên thì có thể xóa lun cái dòng `main` đó đi và thay bằng `"private": true`
- `dependencies` & `devDependencies`:  [Ở dưới](#dependencies-và-devdependencies)
- `scripts`: nơi mà bạn có thể định nghĩa alias cho các command 

Thay vì trong console bạn phải gõ, một câu lệnh dài loằng ngoằng và đếch thể nào nhớ nổi... thì đây
```
cross-env NODE_ENV=development webpack --progress -d --watch
```


Định nghĩa lại trong file **package.json**
```javascript
{
    //.. code above
    "scripts": { 
        "dev": "cross-env NODE_ENV=development webpack --progress -d --watch"
    }
}
```

thì sau đó chỉ cần chạy, thay vì câu thần chú dài hơn cả VẠN LÝ TRƯỜNG THÀNH kia  
```
npm run dev
```

- Mấy cái còn lại tự ... dễ hiểu mà =)) 


### dependencies và devDependencies
Các trang thiết (packages) bị sẽ được ghi vào **dependencies**  hoặc  **devDependencies** tùy vào mục đích sử dụng. 

Sự khác nhau cơ bản là  **devDependencies** mục đích sử dụng cho môi trường develop: test tủng, nén file các kiểu,... còn **dependencies**  là thứ ứng dụng cần import vào sử dụng. 

Nói cách khác dễ hiểu hơn đó là trên môi trường production ko cần cài đặt các packages trong **devDependencies**.



## 1. Cài đặt các packages trong file **package.json** 

### 1.1 Cài đặt tuốt tuồn tuột

> npm install

hoặc ngắn hơn 

> npm i

Cài xong thì mấy gói đồ chơi sẽ nằm trong thư mục `node_modules` a.k.a thứ nặng nhất vũ trụ 

### 1.2 Chỉ cài các package trong **dependencies** (cho môi trường production)

> npm install --production

## 2.Cài thêm trang bị (package)

### 2.1 vào **dependencies** 
Nghĩa là sau khi tải thư viện vào folder `node_modules` thì cũng đồng thời update lại thuộc tính  **dependencies**  trong file  **package.json** 

> npm install express --save

hoặc ngắn hơn 

> npm i express -S

*i* viết tắt của *install*
*-S* viết tắt của  *--save*

### 2.2 vào **devDependencies** 
Như trên :v 

> npm install mocha --save-dev
hoặc ngắn hơn 
> npm i mocha -D


### 2.3 vào hư vô 

> npm install mocha

Nghĩa là sau khi tải thư viện vào folder `node_modules` thì ... éo làm gì nữa =)) nhiều tình huống dở khóc dở cười khi làm trong một team mà quên *--save* hay *--save-dev*

***ĐỪNG VÀ ĐỪNG BAO GIỜ THIẾU THAM SỐ NHÉ =))***


### 2.4 vào thế giới toàn mỹ (global)

> npm install expo-cli --global 

hoặc ngắn hơn 

> npm i expo-cli -g

Khi package đi được cài đặt nơi đây thì... cũng như cái cảm giác khi con tốt được phong hậu trong cờ vua vậy á =))) được hoành hành khắp nơi ...  

Sau khi chạy xong câu lệnh trên đó thì, ở bất cứ folder nào cũng có thể chạy câu lệnh dưới đây...

> expo init AwesomeProject


## CÓ GÌ MỚI THÌ UPDATE SAU ... AHIHI