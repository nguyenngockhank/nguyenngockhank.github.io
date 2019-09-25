# .env

Chắc chả còn gì xa lạ nữa rồi, ai cân qua Laravel chắc cũng chả ngỡ ngàng gì nữa roài :v 

Thế còn bên node thì sao?


## Link 16' 
[Link docs](https://www.npmjs.com/package/dotenv)


**Cài đặt**
```
npm install dotenv --save
```

**Sử dụng nhanh gọn** 

- tạo file `.env` với content như sau
```
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
```

- trên cùng app entry file
```javascript
require('dotenv').config()
```

- Sau đó điều kì diệu đã xảy ra :v các biến đã được nhét vào `process.env`

```javascript
const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
});
```


## Đọc link 16' trên kia để biết thêm chi tiết =))