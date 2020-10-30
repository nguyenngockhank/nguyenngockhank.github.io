# NodeJS 

Ghi chép nhẹ về NodeJS... ai cũng bik là nó được sinh ra để viết JS ở backend rồi ha :v Cũng như là tạo môi trường cho dev lập trình, sử dụng công cụ bá cháy như: webpack, grunt, gulp, selenium, puppeteer, ... 

--- 

***Note nhanh***

Tất cả các giao tiếp IO đều là async **(non-blocking IO)** như là xử lý với File, Database, Socket, API, ... 

Tuy nhiên xử lý với file vẫn có những hàm built-in đồng bộ với file như `fs.mkdirSync`, `fs.readdirSync`, `fs.readFileSync`, ... kết thúc với chữ Sync thường dùng trong khởi tạo App. 

## Packages

- [Sails](https://sailsjs.com/get-started) : API-driven framework for building realtime apps, using MVC conventions (based on Express and Socket.io)
- [Sequelize](https://sequelize.org/) : Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
- [inversify](https://www.npmjs.com/package/inversify) : a lightweight inversion of control (IoC) container for TypeScript and JavaScript apps.
- [dotenv](https://github.com/motdotla/dotenv) :  loads environment variables from a `.env` file into `process.env`.
- [passport](https://www.npmjs.com/package/passport) : Passport is Express-compatible authentication middleware for Node.js.
- [http-errors](https://www.npmjs.com/package/http-errors) : Create HTTP errors
- [Not a Real DB](https://www.npmjs.com/package/notarealdb) : A "fake" database for Node.js that stores data in local JSON files, for testing and sample applications.
- [kaop](https://www.npmjs.com/package/kaop) / [to-aop](https://www.npmjs.com/package/to-aop) : help you with applying Aspect Oriented Programming to JavaScript.
- [helmetjs](https://helmetjs.github.io/) : secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
- [husky](https://typicode.github.io/husky/#/) : Git hooks made easy
- [pm2](https://www.npmjs.com/package/pm2): PM2 is a production process manager for Node.js applications with a built-in load balancer. It allows you to keep applications alive forever, to reload them without downtime and to facilitate common system admin tasks.


**Logging**
- [node-bunyan](https://github.com/trentm/node-bunyan) : Bunyan is a simple and fast JSON logging library for node.js services.
- [chalk](https://www.npmjs.com/package/chalk) : Terminal string styling done right

**Utils:**
- [flat](https://www.npmjs.com/package/flat) : Take a nested Javascript object and flatten it, or unflatten an object with delimited keys
- [date-fns](https://date-fns.org/docs/Getting-Started) : like lodash but for Date.
