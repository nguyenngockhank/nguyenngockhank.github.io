# Sequelize (ORM)
Xưa kia khi người ta cứ gán ghép Node với CSDL không cấu trúc (MongoDB) thì cty của mình vẫn trung thành với MySQL =))) 

Nay tui giới thiệu 1 thư viện mình sử dụng 4 năm trước (2k14) :alien: từ hồi Node chưa đc version 1 =)) 

## Khởi động 

### Cài đặt sơ múi vòng ngoài

[Link docs full](#http://docs.sequelizejs.com/manual/installation/getting-started.html)

Thêm thư viện 
> npm i --save sequelize

Tùy vào loại database mà install
> npm install --save mysql2

### Xem trước cấu trúc thư mục

```
|--- .env
|--- index.js
|--- database/
|           |-- index.js
|           |-- relations.js
|           |-- Post.js
|           |-- Category.js
```

- `index.js` sẽ là entry app của bạn `node index.js`
- `database/index.js` thiết lập các thư viện
- `database/Post.js` , `database/Category.js` định nghĩa các Model
- `database/ relations.js` định nghĩa các mối quan hệ giữa các Model.


### Associations
Đây chính là điều thật sự là điều thú vị của ORM, khả năng mô tả realtion của các Model ngay trên code, cũng như là giúp chúng ta :v 

Khi làm việc với ORM thì các bạn lưu ý nên đánh giá tình hình, khi nào dùng LazyLoading, khi nào dùng Eager Loading ^^

Link tham khảo khi cần
- [associations](http://docs.sequelizejs.com/manual/tutorial/associations.html)
- [eager-loading](http://docs.sequelizejs.com/manual/tutorial/models-usage.html#eager-loading)


### Luyện tập võ công
- File `.env`. Xem thêm bài [.env](env.md) để hiểu thêm chi tiết :smiling_imp:
```
DB_DIALECT=mysql
DB_HOST=localhost
DB_DATBASE=your_db
DB_USERNAME=your_user
DB_PASSWORD=your_pass
```

- File `index.js` ... set up 
```javascript
// tạo app root path
global.appRoot = path.resolve(__dirname) + '/';

// Thêm helper function vào global 
global._require = function _require(path) {
  const fullPath = appRoot + path;
  return  require(fullPath);
}

// get database instance
const sequelize = _require('database');
```

- File `database/Post.js` . Đọc [docs](http://docs.sequelizejs.com/manual/tutorial/models-definition.html) để biết thêm chi tiết 

```javascript
module.exports = sequelize.define('post', {
    id: { 
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true, 
    },
    timestamps: false,
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    content: Sequelize.TEXT,
    cat_id: Sequelize.INTEGER, 
    status: {
        type: Sequelize.ENUM(),
        values: ['active', 'inactive']
    }
  }
}, {underscored: false})
```

- File `database/Category.js`
Tự xử =))

- File `database/relations.js`
```javascript
// foreignKey là cột sẽ tìm trong Post
// targetKey là cột sẽ tìm trong Category
AppModels.Post.belongsTo(AppModels.Category, {foreignKey: 'cat_id', targetKey: 'id'})

// foreignKey là cột sẽ tìm trong Post
// sourceKey là cột lấy data trên Category
AppModels.Category.hasMany(AppModels.Post, {foreignKey: 'cat_id', sourceKey: 'id'})
```


- File `database/index.js`
```javascript
const Sequelize = require('sequelize');

const {
   DB_DIALECT, DB_HOST, DB_DATBASE, 
   DB_USERNAME, DB_PASSWORD
} = process.env;

// set up database
const sequelize = new Sequelize(DB_DATBASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
})

/// -- set up global
global.Sequelize = Sequelize;
global.sequelize = sequelize;


/// read all files in `database` dir but `index.js`, `relations.js`
const fs = require('fs');
let files = fs.readdirSync('./database');
files = files.filter((file) => {
    return !['index.js', 'relations.js'].includes(file);
})



/// set up all model files
let models = {};
files.forEach((file) => {
    let modelName = file.replace('.js', ''); // remove .js in file name
    models[modelName] = _require('database/' + file);
});

/// set up relation
_require('database/relations');

// -- set to globals
global.AppModels = models;
```


## Sử dụng nè :yum: (CRUD)

Link tham khảo: [Model Usage ](http://docs.sequelizejs.com/manual/tutorial/models-usage.html) , [Instances](http://docs.sequelizejs.com/manual/tutorial/instances.html)

AppModels được chúng ta add vào globals rồi nên có thể sử dụng anywhere

### SELECT

#### Select one
```javascript
// search by primary key
let post = await AppModels.Post.findById(123); 

// search for attributes
let post = await AppModels.Post.findOne({ where: {title: 'THIS IS THE TITLE'} }); 


```

#### Select Batch
```javascript 
let posts  = await Project.findAll({ offset: 10, limit: 2 });
```

Về thằng select này phải nói rất nhiều nhiều case nên đọc thêm khi cần :v  [Query](http://docs.sequelizejs.com/manual/tutorial/querying.html), [Eager loading](http://docs.sequelizejs.com/manual/tutorial/models-usage.html#eager-loading)

#### To JSON

```javascript
// to JSON
console.log(post.get({ plain: true }));
```

----
### INSERT

#### Insert one
```javascript
/// way 1
let post = await AppModels.Post.create({title, author, content}); 

// way 2
const post = AppModels.Post.build({
  title, author, content
});
await post.save();
```

#### Insert Batch
```javascript
  await AppModels.Post.bulkCreate([postData1, postData2]); 
```

#### Insert batch with Ignore
```javascript
   await AppModels.Post.bulkCreate(data, { ignoreDuplicates: true });
```

----

### UPDATE


#### Update one
```javascript
// through instance of Model
post.title = 'New title ne';
await post.save();
```

#### Update batch
```javascript
const dataUpdate =  {
    status: 'inactive',
};
await AppModels.Post.update(
    dataUpdate /* set attributes' value */
    { where: { title: 'khank dep zai' }} /* where criteria */
);
```

----
### DELETE

#### Delete one
```javascript
// through instance of Model
await post.destroy();
```

#### Delete batch
```javascript
AppModels.Post.destroy({
    where: {
        author: 'someone'
    }
});

/* this will ignore where and truncate the table instead */
AppModels.Post.destroy({
    truncate: true
});
```