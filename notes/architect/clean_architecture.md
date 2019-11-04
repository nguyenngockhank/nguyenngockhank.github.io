# Clean Architecture
**Robert C. Martin** (hay còn gọi là **Uncle Bob**) cho ra đời ý tưởng của mình về Clean Architecture vào năm 2012

![Clearn Architecture](@/images/architecture/cleanarchitecture.jpg)

- **Independent of Frameworks**. The architecture does not depend on the existence of some library of feature laden software. This allows you to use such frameworks as tools, rather than having to cram your system into their limited constraints.
- **Testable**. The business rules can be tested without the UI, Database, Web Server, or any other external element.
- **Independent of UI**. The UI can change easily, without changing the rest of the system. A Web UI could be replaced with a console UI, for example, without changing the business rules.
- **Independent of Database**. You can swap out Oracle or SQL Server, for Mongo, BigTable, CouchDB, or something else. Your business rules are not bound to the database.
Independent of any external agency. In fact your business rules simply don’t know anything at all about the outside world.

## The Dependency Rule

**Sự phụ thuộc**: lớp bên trong sẽ ko phụ thuộc lớp ngoài.

**>>>> Code của các class thuộc lớp trong không được tham chiếu đến code của class thuộc lớp ngoài.**


## Entities

the entities could be used by many different applications in the enterprise.

## Use Cases

The software in this layer contains application specific business rules.

## Interface Adapters

The software in this layer is a set of adapters that convert data from the format most convenient for the use cases and entities, to the format most convenient for some external agency such as the Database or the Web.

## Frameworks and Drivers.

This layer is where all the details go


## References 

Youtube 

<iframe width="560" height="315" src="https://www.youtube.com/embed/CnailTcJV_U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Clean Architecture: Standing on the shoulders of giants](https://herbertograca.com/2017/09/28/clean-architecture-standing-on-the-shoulders-of-giants/)

Phiên bản việt
- [Clean Architecture](https://viblo.asia/p/clean-architecture-MdZkAQpRkox)
- [Clean Architecture: Đứng trên vai những gã khổng lồ](https://edwardthienhoang.wordpress.com/2018/01/18/clean-architecture-dung-tren-vai-nhung-ga-khong-lo/)


Example Github 

https://github.com/dev-mastery/comments-api

