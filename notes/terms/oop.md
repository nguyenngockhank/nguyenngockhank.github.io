# Object oriented programming (OOP)
Vietsub: Lập trình hướng đối tượng 

- OOP là một kỹ thuật lập trình cho phép lập trình viên `tạo ra các đối tượng` trong code để `trừu tượng hóa` các đối tượng thực tế trong cuộc sống.


## ✌️✌️4 tính chất 

### Encapsulation - Tính đóng gói
- Che dấu những tính chất xử lý bên trong của đối tượng giống như nội tâm của 1 con người vậy đó =))
- Thể hiện qua các `property` hoặc `method` **private**

### Inheritance - Tính kế thừa
- Cho phép kế thừa lại những tính năng mà một đối tượng khác đã có 
- Những thứ nằm ở **private** thì sẽ ko được thừa kế ^^!
- Những thứ **protected** - chỉ có những người trong dòng tộc mới có thể sử dụng được 
- Thể hiện qua keywords: **extends** hoặc **implements**


### Polymorphism - Tính đa hình
- Một tác vụ được thực hiện theo nhiều cách khác nhau được gọi là tính đa hình. Thể hiện qua `Overloading` và `Overriding`:
    - **Overloading**: các method có cùng tên nhưng khác tham số
    - **Overriding**: ghi đè lại các method của một lớp cha 
- PHP không có `Overloading`... 

### Abstraction - Tính trừu tượng
- Một tiến trình ẩn các chi tiết trình triển khai và chỉ hiển thị tính năng tới người dùng
- Được thể hiện qua **abstract class** và các **interface**`

---

## 👉👌 Mối quan hệ

Dưới đây là 1 số mối quan hệ giữa các class với nhau

### Inheritance
- Quan hệ cha con ruột thịt là đây, kế thừa lại những tính năng mà một đối tượng khác đã có

### Aggregation 
- là mối quan hệ **has-a**. 
- Class A có quan hệ `Aggregation` với class B khi class A có method dùng B như parameter

```java
class A {
    void doXXX (B b) { };
};
```

### Composition
- Đây là 1 dạng quan hệ **Aggregation** nhưng ở dạng **strong type**
- Class A có quan hệ `Compostion` với class B khi constructor của class A dùng B như parameter. Khi Instance A được khởi tạo thì instance B cũng được khởi tạo, chúng tồn tại và bị hủy đồng thời

```java
class A {
    A () {
        new B ();
    }
};
```


### Association
- Cũng thể hiện quan hệ giữa hai đối tượng. Mỗi đối tượng đểu có **life cycle riêng** và  **không có mối quan hệ kiểu owner**
- Associate giữa hai đối tượng được khởi tạo qua reference properties (class attributes)
- Class A có quan hệ **Associate** với class B tức là 1 class A có member có kiểu class B

```java
class A {
    private B b;
};
```


## 🙏🙏 Design Pattern
Design pattern mô tả một giải pháp được thiết lập cho các vấn đè thường gặp nhất trong thiết kế phần mềm

Giang hồ truyền miệng nhau có 3 loại chính: **Creational**,  **Structural**,  **Behavioral**


Dưới đây là 2 trang web mình hay dùng để tham khảo :)) Có phải thần đồng hay siêu năng lực gì đâu mà nhớ được hết 

- [Design Patterns in Java Tutorial](https://www.tutorialspoint.com/design_pattern/index.htm)
- [PHP Design Patterns](https://designpatternsphp.readthedocs.io/en/latest/README.html)

Sau khi xem qua sơ 2 web trên đó, bạn có thể nhận thấy họ vẽ các cơ số hình học, ký hiệu lạ lùng để miêu tả quan hệ cũng như phương thức của các class. Yup, đó là UML. 

---

## 🖐🖐 Unified Modeling Language (UML)
Vietsub: (Theo wiki) Ngôn ngữ mô hình hóa thống nhất =)) 

UML là một ngôn ngữ mô hình gồm các ký hiệu đồ họa mà các phương pháp hướng đối tượng sử dụng để thiết kế các hệ thống thông tin một cách nhanh chóng.

Cho tấm hình nghiền ngẫm chứ chả biết nói gì thêm :p

![UML Example with Explaination](@/images/uml-example.png)

---


## 👍👍 SOLID Principles

SOLID là viết tắt của 5 chữ cái đầu trong 5 nguyên tắc thiết kế hướng đối tượng

### Single responsibility priciple (SRP)
> Một class chỉ nên giữ 1 trách nhiệm duy nhất 
> (Chỉ có thể sửa đổi class với 1 lý do duy nhất)


### Open/Closed principle (OCP)
> Có thể thoải mái mở rộng 1 class, nhưng không được sửa đổi bên trong class đó 
> (open for extension but closed for modification).

### Liskov substitution principe (LSP)
> Trong một chương trình, các object của class con có thể thay thế class cha mà không làm thay đổi tính đúng đắn của chương trình

### Interface segregation principle (ISP)
> Thay vì dùng 1 interface lớn, ta nên tách thành nhiều interface nhỏ, với nhiều mục đích cụ thể

### Dependency inversion principle (DIP)
> 1. Các module cấp cao không nên phụ thuộc vào các modules cấp thấp. Cả 2 nên phụ thuộc vào abstraction.

> 2. Interface (abstraction) không nên phụ thuộc vào chi tiết, mà ngược lại. ( Các class giao tiếp với nhau thông qua interface, không phải thông qua implementation.)

---


## 👌👌 note nhẹ

- Trong 1 App thì có nhiều Class 
- 1 Class thì có nhiều `instance` (`đối tượng` có thể gọi là `cá thể`)
- Một instance thì có `property` (thuộc tính) và `method` (phương thức)

### Concrete class
Bên cạnh `Abstract class` là class ko thể khởi tạo trực tiếp thì ngược lại với nó là **Concrete class**


## 🤘🤘 References 

- [Design bí lục (hồi 1)](http://www.giaosucan.com/2016/10/design-bi-luc-hoi-1.html)
- [Design Bí kíp – Hồi 2: UML truyền thuyết](http://www.giaosucan.com/2016/11/design-bi-kip-hoi-2-uml-truyen-thuyet.html)
- [SOLID LÀ GÌ?](https://toidicodedao.com/2015/03/24/solid-la-gi-ap-dung-cac-nguyen-ly-solid-de-tro-thanh-lap-trinh-vien-code-cung/)
