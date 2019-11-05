# Clean Architecture

**Robert C. Martin** (hay còn gọi là Uncle Bob) cho ra đời ý tưởng của mình về Clean Architecture vào năm 2012, trong [một bài viết trên blog](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) của mình, và giảng dạy về nó tại một vài hội nghị, và gần đây nhất là cuốn sách [Clean Architecture: A Craftsman’s Guide to Software Structure and Design](https://edwardthienhoang.wordpress.com/2018/01/13/book-review-clean-architecture-by-robert-c-martin-2017/) xuất bản năm 2017.


[[toc]]

---

Clean Architecture dựa trên các khái niệm, quy tắc, và mô hình nổi tiếng, giải thích làm thế nào để kết hợp chúng với nhau, để đề xuất cách xây dựng các ứng dụng chuẩn.

Các mục tiêu cốt lõi của Clean Architecture cũng giống với đối với Ports & Adapters (Hexagonal) và Onion Architectures:

*   **Độc lập các công cụ (Frameworks/UI/Database);**
*   **Sự độc lập của các cơ chế phân phối;**
*   **Khả năng cô lập kiểm thử.**


Trong bài viết về Clean Architecture đã được xuất bản, đây là sơ đồ được sử dụng để giải thích ý tưởng tổng quát:

![Clearn Architecture](@/images/architecture/cleanarchitecture.jpg)
_Robert C. Martin 2012, The Clean Architecture_

Như ông Bob nói trong bài của mình, sơ đồ trên là một nỗ lực để tích hợp các ý tưởng kiến trúc gần đây vào một ý tưởng có thể thực hiện được.

Hãy so sánh sơ đồ Clean Architecture với các sơ đồ được sử dụng để giải thích Hexagonal Architecture và Onion Architecture, và xem chúng trùng nhau ở đâu:

![hexagonal_original](@/images/architecture/clean/hexagonal_original.gif?w=389&h=255)

![4ioq9](@/images/architecture/clean/4ioq9.png?w=825)

## Các công cụ bên ngoài và cơ chế phân phối

_(Externalisation of tools and delivery mechanisms)_

Hexagonal Architecture tập trung vào việc mở rộng các công cụ và cơ chế phân phối từ ứng dụng, sử dụng interfaces (Port) và Adapter. Đây cũng là một trong những nền tảng cốt lõi của Onion Architecture, như chúng ta có thể thấy qua biểu đồ của nó, UI, cơ sở hạ tầng và các testing đều nằm trong layer ngoài cùng của sơ đồ. Clean Architecture cũng có đặc điểm giống như vậy, có giao diện người dùng, web, DB, v.v … ở layer ngoài cùng. Trong cùng là tất cả mã lõi ứng dụng độc lập với framework / libraries.

## Chiều của sự phụ thuộc

_(Dependencies direction)_

**Sự phụ thuộc**: lớp bên trong sẽ ko phụ thuộc lớp ngoài.

**>>>> Code của các class thuộc lớp trong không được tham chiếu đến code của class thuộc lớp ngoài.**

Trong Hexagonal Architecture, chúng ta không có bất cứ điều gì rõ ràng cho chúng ta biết hướng của các phụ thuộc. Tuy nhiên, chúng ta có thể dễ dàng suy luận nó: Ứng dụng có một Port (interface) phải được implement hoặc sử dụng bởi Adapter. Vì vậy Adapter phụ thuộc vào giao diện, nó phụ thuộc vào ứng dụng nằm ở trung tâm. Bên ngoài phụ thuộc vào bên trong, hướng của các phụ thuộc là về phía trung tâm. Trong Onion Architecture, chúng ta cũng không có bất cứ điều gì rõ ràng cho chúng ta biết hướng phụ thuộc, tuy nhiên, trong bài thứ hai của mình, Jeffrey Palermo cho biết rõ ràng rằng tất cả các phụ thuộc đều hướng đến trung tâm. Clean Architecture, lần lượt, nó khá rõ ràng trong chỉ ra rằng sự phụ thuộc hướng là hướng về trung tâm. Tất cả đều đưa ra Nguyên tắc đảo ngược phụ thuộc (**Dependency Inversion Principle**) ở cấp kiến ​​trúc. Vòng tròn bên trong không hề biết gì về các vòng tròn bên ngoài. Hơn nữa, khi chúng ta truyền dữ liệu qua một ranh giới (Boundary), nó luôn ở dạng thuận tiện nhất cho vòng tròn phía trong.


## Các Layers

Sơ đồ Kiến trúc Hexagonal Architecture chỉ hiển thị cho chúng ta hai layer: Bên trong ứng dụng và bên ngoài của ứng dụng. Mặt khác, Onion Architecture mang đến sự kết hợp các layer ứng dụng được xác định bởi DDD: Entities, Value Objects, Application Services chứa các use-case logic; Domain Services đóng gói domain logic không thuộc về các Entities hoặc Value Objects… Khi so sánh với Onion Architecture, Clean Architecture sẽ duy trì Application Services layer (Use Cases) và Entities layer nhưng dường như nó quên mất Domain Services layer. Tuy nhiên, đọc bài của Bác Bob chúng ta nhận ra rằng ông coi một thực thể (Entity) không chỉ theo ý nghĩa của DDD : “Một entity có thể là một đối tượng với các phương thức, hoặc nó có thể là một tập hợp các cấu trúc dữ liệu và các hàm.“. Trong thực tế, ông đã sáp nhập hai layer bên trong để đơn giản hóa sơ đồ.

## Khả năng cô lập kiểm thử

_(Testability in isolation)_

Trong cả ba kiểu Kiến trúc, chúng đều tuân theo các nguyên tắc phân tách domain logic với các thành phần bên ngoài. Điều này có nghĩa là trong mọi trường hợp chúng ta chỉ có thể mô phỏng các công cụ bên ngoài và các cơ chế phân phối và thực hiện kiểm thử ứng dụng mà không sử dụng bất kỳ DB hay HTTP request nào.

Như chúng ta có thể thấy, Clean Architecture sẽ kết hợp các quy tắc của Hexagonal Architecture và Onion Architecture. Cho đến nay, kiến trúc sạch sẽ không thêm bất cứ điều gì mới cho phương trình. Tuy nhiên, ở góc dưới cùng bên phải của Clean Architecture diagram, chúng ta có thể thấy thêm một biểu đồ nhỏ …

## Đứng trên vai những gã khổng lồ: MVC và EBI

Biểu đồ phụ nhỏ ở góc dưới cùng bên phải của Clean Architecture diagram sẽ giải thích về sơ đồ luồng tương tác (flow of control) giữa các component. Biểu đồ nhỏ này không cung cấp cho chúng ta nhiều thông tin, nhưng lời giải thích về bài đăng trên blog và các bài giảng của hội thảo được đưa ra bởi Robert C. Martin mở rộng về đề tài này.

![cleanarchitecturedesign](@/images/architecture/clean/cleanarchitecturedesign2.png?w=825)

Trong sơ đồ ở trên, ở phía bên trái, chúng ta có View và Controller của MVC. Mọi thứ bên trong / giữa các đường kẻ đôi màu đen đại diện cho Model trong MVC. Mô hình này cũng đại diện cho kiến trúc EBI (với “Boundary”, Interactor và the Entities”), “Application” trong Hexagonal Architecture, “Application Core” trong Onion Architecture, “Entities” và “Use Cases” layer trong Clean Architecture.

Theo biểu đồ luồng tương tác, chúng ta có một yêu cầu HTTP đến các Controller. Controller sau đó sẽ:

1.  Phân tích Request;
2.  Tạo một Request Model với các dữ liệu có liên quan;
3.  Execute một method trong Interactor (đã được đưa (inject) vào Controller bằng cách sử dụng interface của Interactor là Boundary), chuyển nó cho Request Model;
4.  Interactor sẽ:
5.  1.  Sử dụng implementation của Entity Gateway (được đưa vào Interactor bằng cách sử dụng Entity Gateway Interface) để tìm các Entities liên quan;
    2.  Phối hợp các tương tác giữa các Entities;
    3.  Tạo Response Model với kết quả dữ liệu trả về;
    4.  Tạo ra Presenter chứa Response Model;
    5.  Trả lại Presenter cho Controller;
6.  Dùng Presenter để tạo ra một ViewModel;
7.  Bind ViewModel với View;
8.  Trả View về cho Client.

## Kết luận

Tôi không nói rằng Clean Architecture là cuộc cách mạng bởi vì nó không thực sự mang lại một khái niệm hoặc mô hình đột phá mới. Tuy nhiên, tôi xin nói rằng đó là một công trình có tầm quan trọng lớn, bởi vì:

*   Nó khôi phục các khái niệm, quy tắc và khuôn mẫu bị quên lãng;
*   Nó làm rõ các khái niệm và quy tắc hữu ích và quan trọng;

Nó cho chúng ta biết tất cả các khái niệm, quy tắc và mẫu này phù hợp với nhau để cung cấp cho chúng ta một cách chuẩn hóa để xây dựng các ứng dụng phức tạp với sự bảo trì trong đầu.

Khi tôi nghĩ về Bác Bob làm việc với Clean Architecture, nó làm cho tôi nghĩ về Isaac Newton. Trọng lực luôn ở đó, mọi người đều biết rằng nếu chúng ta thả quả táo cách mặt đất một mét, nó sẽ di chuyển xuống mặt đất. “Điều duy nhất” mà Newton đã làm là xuất bản một bài báo đưa ra sự thật đó *. Đó là một điều “đơn giản” phải làm, nhưng nó cho phép mọi người lý giải về nó và sử dụng ý tưởng cụ thể làm nền tảng cho những ý tưởng khác.

Nói cách khác, tôi thấy Robert C. Martin là Isaac Newton trong phát triển phần mềm!


## References 

Youtube 

<iframe width="560" height="315" src="https://www.youtube.com/embed/CnailTcJV_U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Clean Architecture: Standing on the shoulders of giants](https://herbertograca.com/2017/09/28/clean-architecture-standing-on-the-shoulders-of-giants/)

Phiên bản việt
- [Clean Architecture](https://viblo.asia/p/clean-architecture-MdZkAQpRkox)
- [Clean Architecture: Đứng trên vai những gã khổng lồ](https://edwardthienhoang.wordpress.com/2018/01/18/clean-architecture-dung-tren-vai-nhung-ga-khong-lo/)


Example Github 

[https://github.com/dev-mastery/comments-api](https://github.com/dev-mastery/comments-api)

[Thực hành implement Clean Architecture](https://edwardthienhoang.wordpress.com/2018/01/31/thuc-hanh-implement-clean-architecture/)

