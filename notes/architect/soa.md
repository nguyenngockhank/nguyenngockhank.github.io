
# Service Oriented Architecture (SOA)

Trong bài này chúng ta sẽ thảo luận về **Service Oriented Architecture (SOA)**. Tuy là nói về architecture, nhưng tôi tin nó sẽ rất khác so với những bài viết trước khi chúng ta bàn về [DDD](https://edwardthienhoang.wordpress.com/2017/04/08/domain-drive-development-ddd-first-thought-part-1/), [Hexagonal](https://edwardthienhoang.wordpress.com/2018/01/18/ports-adapters-architecture/) hay [Event-Drivent Architecture](https://edwardthienhoang.wordpress.com/2018/08/20/event-driven-architecture/), chúng chỉ nói về cách thức thiết kế và ghép nối các component lại, còn SOA thiên về triết lý trong việc thiết kế và TRIỂN KHAI, tái sử dụng và ghép nối các component, application (sẵn có hoặc làm mới) lại với nhau thành một hệ thống, thường là các **Enterprise Application**. Hãy xem SOA là chốt chặn cuối cùng trong hành trình về Architecture mà chúng ta đã đi từ đầu đến giờ. Tất nhiên là vẫn còn một vài topic về [Microservice](https://edwardthienhoang.wordpress.com/2018/01/10/microservices-thuc-tien-tu-thiet-ke-den-trien-khai/), Enterprise Application Integration, nhưng chúng cũng chỉ là TẬP CON của SOA mà thôi. Qua bài viết này chúng ta sẽ trả lời thêm 1 số câu hỏi liệu Web Service, Microservice hay EJB (Enterprise Java Bean) liên quan đến SOA như thế nào.

SOA Style đã được triển khai khoảng từ cuối những năm 1980 và có nguồn gốc từ những ý tưởng của CORBA, DCOM, DCE và một số cái khác. Có rất nhiều điều đã được nói về SOA và có một vài mô hình triển khai khác nhau nhưng về cơ bản thì SOA chỉ tập trung vào một vài khái niệm và không đưa ra bất công thức nào về cách triển khai của nó:

*   **Khả năng kết hợp nhiều applications với nhau;**
*   **Tái sử dụng Business Services;**
*   **Độc lập về Technology stack;**
*   **Tự trị (tiến hóa độc lập, khả năng mở rộng và khả năng triển khai).**

SOA là một tập các nguyên lý kiến trúc (architectural principles) không phụ thuộc vào bất kỳ công nghệ hay sản phẩm nào, giống như khái niệm về đa hình (polymorphism), bao đóng (encapsulation) mà chúng ta đã biết.

**Chúng ta sẽ điểm qua một số chủ đề chính sau đây:**

*   **CORBA – Common Object Request Broker Architecture**
*   **Web Services**
*   **Message Queue**
*   **Enterprise Service Bus (ESB)**
*   **Microservices**

## CORBA – Common Object Request Broker Architecture

Trong những năm 1980, bắt nguồn từ sự phát triển ngày càng tăng của các mạng doanh nghiệp và kiến trúc Client/Server, đã dẫn tới nhu cầu phổ biến về các ứng dụng được xây dựng bằng cách sử dụng các công nghệ khác nhau và đang chạy trên các máy tính khác nhau với một hệ điều hành khác nhau. CORBA đã được phát triển để đáp ứng những nhu cầu đó. Đây là một chuẩn dành cho Điện toán Phân tán (Distributed Computing), được phát triển trong những năm 1980 và đã đạt đến phiên bản chính thức đầu tiên năm 1991.

Chuẩn CORBA đã được các vendor implement nhằm mang đến:

Remote Procedure Call xuyên nền tảng;

Transactions (kể cả remote transactions!!);

*   Security;
*   Events;
*   Không phụ thuộc vào Programming language;
*   Không phụ thuộc vào OS;
*   Không phụ thuộc vào Hardware;
*   Cô lập các chi tiết truyền nhận dữ liệu và giao tiếp;
*   Kiểu dữ liệu được định nghĩa thông qua Interface Definition Language (IDL).

Hiện tại CORBA vẫn được sử dụng rất nhiều, ví dụ, nó vẫn là một phần của JAVA EE, mặc dù nó sẽ được đóng gói như một mô-đun riêng biệt từ JAVA 9 trở đi.

Tuy nhiên, điều quan trọng cần lưu ý là tôi không xem CORBA là một SOA pattern (mặc dù tôi xem xét cả hai mô hình CORBA và SOA đều nằm trong nhóm (umbrella) của distributed computing). Tôi giới thiệu nó ở đây vì tôi cảm thấy SOA đã tiến hóa từ đó mà ra.

**How it works**

Triệu gọi đối tượng Corba thông qua môi trường môi giới ORB

![25856](@/images/architecture/soa/25856.jpg?w=825)

Các đối tượng sau khi được xây dựng bằng các ngôn ngữ lập trình khác nhau muốn triệu gọi lẫn nhau phải thông qua chương trình môi giới trung gian của Corba gọi là ORB.

ORB hoàn toàn độc lập với máy ảo java. Ta có thể chạy độc lập Java với ORB tuy nhiên từ Java 1.2 đã nhúng luôn ORB nên ta có thể thử nghiệm các ứng dụng Corba ngay trên nền Java mà không cần trình ORB của các nhà cung cấp khác.

Các đối tượng dù được cài đặt bằng bất kì ngôn ngữ nào nếu như tuân theo ngôn ngữ IDL đều là đối tượng của Corba. Dựa vào các đặc tả IDL, ORB sẽ biết tên phương thức cần gọi, kiểu đối số truyền cho phương thức, trị trả về.

![25854](@/images/architecture/soa/25854.jpg?w=825)  
ORB giao tiếp thông qua các thông tin đặc tả IDL

Trước tiên, chúng ta cần có một Object Request Broker (ORB) phù hợp với đặc tả của CORBA, nó được cung cấp bởi một vendor và sử dụng language mappers để tạo các stub và skeleton. Phía Client, chúng ta tạo ra các stub của những class thực ở xa sử dụng ORB và các đặc tả interface đã được defined bằng cách sử dụng IDL (tương tự như WSDL), và ở Server, chúng ta tạo các skeleton có thể xử lý các requests đến và thực hiện call đối tượng thực.

![1980s-corba](@/images/architecture/soa/1980s-corba.png?w=825)

1.  Caller gọi đến stub đã được generate;
2.  Stub xác nhận cuộc gọi và tạo ra một request message chuyển tới ORB;
3.  ORB Client gửi message qua network đến Server và đứng đợi;
4.  ORB Server nhận được message và khởi tạo skeleton;
5.  Skeleton sẽ gọi đến đối tượng thực;
6.  Đối tượng thực thực hiện tính toán và trả về kết quả;
7.  Skeleton đóng gói kết quả trả về trong response message và chuyển nó tới ORB;
8.  ORB gửi mesage qua network tới Client;
9.  ORB Client nhận được response message, giải nén nó và đưa cho stub;
10.  Stub trả kết quả cho caller, luồng thực thi được tiếp tục.

Giao thức IIOP làm nền tảng cho tất cả các đối tượng có thể giao tiếp với nhau trên mạng Internet một cách dễ dàng.

**Ưu điểm:**

*   Độc lập về công nghệ (ngoại trừ ORB implementation);
*   Cô lập các chi tiết truyền nhận dữ liệu và giao tiếp;

**Bất lợi:**

*   **Location transparency**: Client không biết là việc thực hiện lệnh sẽ xảy ra ở local hay remote. Điều này có vẻ tốt, tuy nhiên, Tuy nhiên sẽ có sự khác nhau về latency và type of failures tùy thuộc nếu đó là một cuộc gọi địa phương hoặc từ xa. Không biết loại cuộc gọi đó là gì, làm cho các ứng dụng không chọn một chiến lược thích hợp để xử lý cuộc gọi phương thức và kết thúc việc thực hiện các cuộc gọi từ xa bên trong một vòng loop, và do đó làm chậm đáng kể toàn bộ hệ thống.
*   **Phức tạp, dư thừa và mơ hồ**: Nó được tạo ra như là một sự kết hợp của một số thứ có sẵn của vendor, do đó (vào thời điểm đó) nó mơ hồ và dư thừa, khó thực hiện.
*   **Các đường truyền bị chặn**: Sử dụng các giao thức cụ thể qua TCP / IP và các cổng cụ thể, hoặc thậm chí các cổng ngẫu nhiên. Nhưng quy tắc an ninh doanh nghiệp và tường lửa thường chỉ cho phép giao tiếp HTTP qua cổng 80, có thể ngăn chặn việc giao tiếp của CORBA.

## Web Services

Mặc dù ngày nay CORBA vẫn còn được sử dụng, chúng ta nhận thấy việc giảm các communication qua network là điều cần thiết để cải thiện performance cho hệ thống, chúng ta cần một kênh giao tiếp đáng tin cậy, và chúng ta cần một đặc tả giao tiếp đơn giản.

Vì vậy, vào cuối những năm 1990, chúng ta đã tiến hành một số cải tiến để giải quyết các vấn đề đã nêu ra như sau:

Chúng ta cần một kênh giao tiếp đáng tin cậy, do đó:

*   HTTP qua cổng 80 là đường truyền mặc định;
*   Một ngôn ngữ giao tiếp đơn giản được sử dụng (như XML hay JSON);

Chúng ta cần giảm các remote call, do đó:

*   Chúng ta khai báo các remote call một cách tường minh để biết chính xác khi nào nên thực hiện remote cal;
*   Chúng ta có coarse-grained remote calls, tức là thay vì gọi các remote objects, chúng tôi gọi remote service;

Chúng ta cần một đặc tả giao tiếp đơn giản, vì vậy:

*   **SOAP (Simple Object Access Protocol)** đã có dự thảo đầu tiên vào năm 1998 và đã đưa ra đề xuất của W3C vào năm 2003, làm cho nó trở thành một tiêu chuẩn. Sử dụng XML để định nghĩa dữ liệu dạng thuần văn bản (plain text) thông qua HTTP. SOAP là cách mà Web Service sử dụng để truyền tải dữ liệu. Vì dựa trên XML nên SOAP là một giao thức không phụ thuộc platform cũng như bất kì ngôn ngữ lập trình nào.
*   **REST (REpresentational State Transfer)** được định nghĩa vào năm 2000 bởi Roy Fielding trong luận văn tiến sĩ về “Architectural Styles and the Design of Network-based Software Architectures”. REST là một kiểu cấu trúc (architectural style) cung cấp API thông qua internet để xử lý các hoạt động CRUD trên dữ liệu. REST tập trung vào việc truy cập các tài nguyên được đặt tên thông qua một giao diện duy nhất.
*   **GraphQL** là Graph Query Language do Facebook tạo ra từ năm 2012 cung cấp giao thức chung cho phép giao tiếp giữa client và server để cập nhật và lấy dữ liệu. Client truy vấn đến máy chủ GraphQL bằng các truy vấn với đặc điểm: format của dữ liệu trả về được mô tả trong câu truy vấn và được định nghĩa ở phía client thay vì ở server. Nói đơn giản hơn, đây là truy vấn hướng client, cấu trúc dữ liệu không khô cứng 1 khuôn mẫu từ server (REST API) mà thay đổi theo từng ngữ cảnh sao cho hiệu quả nhất đối với client mà chỉ cần dùng duy nhất 1 endpoint.

![2000s-soa](@/images/architecture/soa/2000s-soa.png?w=825)

Thông qua Web services, SOA thực hiện chuyển đổi mô hình từ remote call trên object (CORBA), sang truyền thông điệp giữa các service.

Web service là một khái niệm rộng hơn so với khái niệm web thông thường. Nó là sự kết hợp các máy tính cá nhân với các thiết bị khác, các cơ sở dữ liệu và các mạng máy tính để tạo thành một cơ cấu tính toán ảo mà người sử dụng có thể làm việc thông qua các trình duyệt mạng.

Các Web Service thường cung cấp các dữ liệu thô mà nó khó hiểu đối với đa số người dùng thông thường, chúng thường được trả về dưới dạng XML hoặc JSON.  
Hiện nay, web service trở thành dịch vụ mạnh mẽ, cung cấp lợi ích cho cả doanh nghiệp, khách hàng, cá nhân, trong nhiều lĩnh vực thực tế: thông tin thương mại, dịch vụ du lịch, tỉ giá, chứng khoán…

Tuy nhiên, chúng ta cần phải hiểu rằng dưới cái ô SOA, một Web services không chỉ là một API đơn giản chỉ đơn giản là cung cấp các tính năng CRUD vào cơ sở dữ liệu thông qua HTTP. Nó có thể hữu ích trong một số trường hợp, tuy nhiên đòi hỏi người dùng phải hiểu được mô hình cơ bản và tuân theo các business logic để đảm bảo tính toàn vẹn của dữ liệu được bảo vệ. SOA ngụ ý rằng Web services được thiết kế như là các bounded contexts cho từng business sub-domains, trừu tượng hóa và bao đóng các conceptual service mà chúng cung cấp.

> SOA is not just an architecture of services seen from a technology perspective, but the policies, practices, and frameworks by which we ensure the right services are provided and consumed.  
> Microsoft 2004, [Understanding Service-Oriented Architecture](https://msdn.microsoft.com/en-us/library/aa480021.aspx)

**Ưu điểm:**

*   Web service cung cấp nền tảng rộng lớn chạy được trên các hệ điều hành khác nhau
*   Năng cao khả năng tái sử dụng
*   Tạo mối quan hệ tương tác lẫn nhau, dễ dàng cho việc phát triển các ứng dụng phân tán.
*   Thúc đẩy mạnh mẽ vào hệ thống tích hợp và giảm được sự phức tạp của hệ thống, giảm giá thành phần tương tác tốt với hệ thống doanh nghiệp.
*   Sử dụng các giao thức và chuẩn mở, giao thức và định dạng dữ liệu dựa trên văn bản giúp các lập trình viên dễ dàng hiểu được
*   Các Domain contexts được cô lập.

**Bất lợi:**

*   Khó khăn trong việc tích hợp các Web Service, do các ngôn ngữ giao tiếp khác nhau, hai Web Service sử dụng các biểu diễn JSON khác nhau của cùng một concept;
*   Có nhiều chuẩn khiến người dùng khó nắm bắt.
*   Có thể xảy ra thiệt hại lớn vào khoảng thời gian không hoạt động của web service như: có thể lỗi nếu như máy tính không nâng cấp, thiếu các giao tiếp trong việc vận hành.
*   Giao tiếp đồng bộ có thể làm quá tải hệ thống.
*   Phải quan tâm nhiều hơn đến vẫn đề bảo mật

## Message Queue:

Message queues cung cấp một giao thức giao tiếp không đồng bộ, có nghĩa là người gửi và người nhận tin nhắn không cần phải tương tác với message queue cùng một lúc. Message được đặt vào queue được lưu trữ cho đến khi người nhận nhận lại chúng, cung cấp khả năng cải thiện việc mở rộng (scalability) và phân tách (decoupling) giữa các ứng dụng vì chúng không cần biết chính xác vị trí của các ứng dụng khác, số lượng và thậm chí không cần phải biết các ứng dụng đó là gì.

Mô hình Message Queue cũng giống như publisher/subcriber pattern, và là một phần của một message-oriented middleware system. Hầu hết các messaging systems đều hỗ trợ cả publisher/subscriber and message queue models trong API của họ, ví dụ: Java Message Service (JMS).

Một Message Queue sử dụng phần broker trung gian thư (ví dụ: RabbitMQ, Beanstalkd, Kafka,…) làm cơ sở hạ tầng để thực hiện giao tiếp giữa các ứng dụng:

### Request/Reply

Client sẽ gửi một tin nhắn đến Message Queue, bao gồm cả nội dung “hội thoại”. Message được gửi đến một node cụ thể, và node đó sẽ làm nhiệm vụ reply bằng một message khác, tới sender ban đầu. Nó rất hữu ích cho các business processes trung bình và dài hạn (sagas).

### Publish/Subscribe

#### List-Based

Nó duy trì danh sách các topic sẽ được publish và các subscribers đã đăng ký lắng nghe các topic đó. Khi nhận được message cho một topic, nó sẽ thông báo tất cả các subscribers đã đăng ký với topic đó.

#### Broadcast-Based

Khi nó nhận được message, nó Broadcast cho tất cả các node đang nghe trên queue. Mỗi node lắng nghe chỉ chịu trách nhiệm lọc và xử lý các message mà nó quan tâm.  
![1995s-message-queue](@/images/architecture/soa/1995s-message-queue.jpg?w=825)  
Tất cả các pattern này có thể được thiết lập theo phương pháp pull (hay còn gọi là polling) hoặc push:

Với **pull scenario**, Client sẽ yêu cầu hàng đợi cho một tin nhắn ở mọi khoảng thời gian X. Điều này có lợi ích là Client có thể kiểm soát tải của nó nhưng cũng có thể có nhược điểm là độ trễ, tức là, khi có các tin nhắn trên hàng đợi và Client không xử lý các tin nhắn mà phải đợi đến thời điểm xác định để pull message về.

Với **push scenario**, hàng đợi sẽ push message cho Client ngay khi nhận được message. Lợi thế ở đây là không có độ trễ, nhưng Client không thể tự quản lý tải của chúng.

**Ưu điểm**

*   Độc lập về technology stack, triển khai và khả năng mở rộng của các dịch vụ;
*   Kênh truyền thông common, đơn giản và đáng tin cậy (văn bản thông qua HTTP, cổng 80);
*   Cô lập Domain contexts;
*   Dễ dàng đính kèm (attachment) và tách rời (detachment) các dịch vụ;
*   Giao tiếp không đồng bộ giúp quản lý tải của hệ thống.

**Điểm chưa được**

*   Khó khăn tích hợp các dịch vụ web khác nhau, do các ngôn ngữ giao tiếp khác nhau, tức là, hai dịch vụ web sử dụng các biểu diễn JSON khác nhau cho cùng một concept;

## Enterprise Service Bus (ESB)

Trong những năm 1990s, cùng lúc với sự phát triển của Web Services thì Enterprise Service Bus cũng đã được sử dụng.

ESB ra đời trong bối cảnh các công ty có các ứng dụng độc lập, như một ứng dụng tài chính, một ứng dụng khác cho nguồn nhân lực, một ứng dụng khác để quản lý chứng khoán, v.v. , họ cần tích hợp chúng. Nhưng những ứng dụng đó đã không được nghĩ đến với sự tích hợp trước đó, không có định dạng ngôn ngữ phổ biến cho các ứng dụng để giao tiếp (vì không có một ứng dụng nào ngày nay). Vì vậy, giải pháp hợp lý là dành cho các nhà cung cấp ứng dụng để tạo điểm endpoints để gửi và nhận dữ liệu theo một định dạng cụ thể. Các công ty khách hàng sau đó sẽ phải tích hợp các ứng dụng bằng cách thiết lập một đường truyền thông và dịch các message từ một ngôn ngữ ứng dụng này sang một ngôn ngữ khác.

Message Queue có thể góp phần giải quyết vấn đề này, nhưng nó vẫn không thể giải quyết được vấn đề của các ứng dụng có định dạng ngôn ngữ khác nhau. Tuy nhiên, đó là một bước nhỏ để thay đổi Hàng đợi Tin nhắn từ một kênh giao tiếp câm (dumb) thành một phần mềm trung gian xử lý cả việc gửi messages và chuyển đổi của chúng sang ngôn ngữ / định dạng mà receiver mong đợi. ESB là một sự tiến hóa tự nhiên của Message Queue.  
![esb-2](@/images/architecture/soa/esb-2.gif?w=825)

Trong loại kiến trúc này, chúng ta có các ứng dụng tổng hợp (composite application), thường là user-facing, liên hệ với các web services để thực hiện một số thao tác. Các web services web này, lần lượt, cũng có thể liên hệ với các web services khác và cuối cùng, chúng có thể trả lại một số dữ liệu về ứng dụng tổng hợp. Tuy nhiên, cả ứng dụng tổng hợp lẫn các dịch vụ back-end đều không có kiến thức về các chi tiết của nhau, cụ thể là vị trí của chúng hoặc các giao thức truyền thông. Những gì chúng biết là cần service nào và vị trí của Service Bus.

Vì vậy, Client application (có thể là một dịch vụ hoặc một ứng dụng tổng hợp) gửi yêu cầu của nó tới Service Bus, Service Bus biến đổi thông điệp thành định dạng được mong đợi bởi destination và định tuyến yêu cầu đến destination. Điều quan trọng cần lưu ý là tất cả các giao tiếp đều thông qua ESB, điều đó có nghĩa là nếu ESB không hoạt động, tất cả các thông tin liên lạc sẽ không hoạt động và tất cả các hệ thống đều không hoạt động. Cuối cùng, một ESB hoạt động như một phần mềm trung gian, nơi có rất nhiều thứ xảy ra, làm cho nó trở thành một nơi rất phức tạp.

![federated_esb](@/images/architecture/soa/federated_esb.jpg?w=825)  
Đây là một lời giải thích rất cơ bản về kiến trúc ESB. Hơn nữa, mặc dù ESB là tạo tác chính trong kiến trúc này, nhưng có thể có các tạo tác khác có liên quan, như Domain Brokers, Data Services, Process Orchestration Services hoặc Rules Engines. Mẫu kiến trúc tương tự này cũng có thể được thiết lập trong một thiết kế liên kết, trong đó hệ thống được tách biệt trong các business domains, mỗi hệ thống có thiết lập ESB riêng và tất cả các thiết lập được kết nối giữa chúng. Điều này giúp cải thiện hiệu suất và giảm thiểu vấn đề có một điểm thất bại duy nhất (single point of failure), tức là, nếu một ESB không thành công, chỉ có business domain của nó bị ảnh hưởng.

### Nhiệm vụ chính của ESB là:

*   Giám sát và kiểm soát việc định tuyến trao đổi message giữa các dịch vụ;
*   Dịch các message giao tiếp giữa các service;
*   Kiểm soát việc triển khai và phiên bản của services;
*   Cung cấp các dịch vụ như event handling, data transformation and mapping, message and event queuing and sequencing, security or exception handling, chuyển đổi giao thức.

> When building communication structures between different processes, we’ve seen many products and approaches that stress putting significant smarts into the communication mechanism itself. A good example of this is the Enterprise Service Bus (ESB), where ESB products often include sophisticated facilities for message routing, choreography, transformation, and applying business rules.
> 
> Martin Fowler 2014, [Microservices](https://martinfowler.com/articles/microservices.html)

**Ưu điểm**

*   Độc lập về technology stack, triển khai và khả năng mở rộng của các dịch vụ;
*   Kênh truyền thông common, đơn giản và đáng tin cậy (văn bản thông qua HTTP, cổng 80);
*   Cô lập Domain contexts;
*   Dễ dàng đính kèm (attachment) và tách rời (detachment) các dịch vụ;
*   Giao tiếp không đồng bộ giúp quản lý tải của hệ thống.
*   Điểm duy nhất để quản lý phiên bản và dịch.

**Điểm hạn chế**

Tốc độ giao tiếp chậm hơn, đặc biệt đối với những dịch vụ tương thích;

*   Logic tập trung:
*   Single point of failure có thể làm down nguyên hệ thống;
*   Cấu hình cao và bảo trì phức tạp;
*   Theo thời gian, ESB có thể có chứa các business rules;
*   Do sự phức tạp của nó, cuối cùng sẽ cần một team chỉ để manage nó;
*   Các service trở nên phụ thuộc nhiều vào ESB.

## Microservices

Microservices Architecture dựa trên những concept nền tảng của SOA và ESB: tạo ra một hệ thống enterprise application từ nhiều ứng dụng khác nhau về business domain.  
Điểm khác nhau mấu chốt là, với ESB sinh ra là để tích hợp những ứng dụng stand-alone để tạo ra 1 hệ thống gồm nhiều ứng dụng, trong khi Microservices Architecture sinh ra trong ngữ cảnh cần đáp ứng nhanh chóng trong việc tạo dựng các ứng dụng từ đầu (from scratch).

Nói một cách khác, điểm bắt đầu của cả 2 là khác nhau. Trong trường hợp của ESB, chúng ta bắt đầu với những ứng dụng đã tồn tại sẵn, những ứng dụng mà chúng ta không “sở hữu”, và do đó chúng ta không thể thay đổi chúng. Nhưng với Microservices, chúng ta có full control trên các ứng dụng (tuy nhiên không có nghĩa là không có các ứng dụng bên thứ 3 tham gia vào system).

Cái cách mà microservices được built/designed nhằm hạn chế nhu cầu trong việc tích hợp (integration). Microservices phải được xây dựng dựa trên bussiness concept, bounded context xác định và lưu giữ trạng thái của chính nó và không phụ thuộc trực tiếp vào các microservices khác, do đó, sẽ hạn chế được việc tích hợp.

> [Microservices are] Small autonomous services that work together, modelled around a business domain.  
> Sam Newman 2015, [Principles Of Microservices](https://youtu.be/PFQnNFe27kU?t=1m50s)

Bởi vì hạn chế lớn nhất của ESB Architecture là làm tăng sự phức tạp và tạo ra 1 central application để control work-flow của những ứng dụng trong hệ thống. Microservices loại bỏ central point đó nhằm giảm bớt đi sự phụ thuộc và độ phức tạp của system.

Vẫn có những yếu tố xuyên suốt (cross-cutting) trong toàn bộ hệ sinh thái microservices, nhưng chúng không chứa đựng nhiều trách nhiệm như ESB. Ví dụ, vẫn có một Message Queue được sử dụng cho giao tiếp không đồng bộ giữa các microservices, nhưng nó đơn giản là một message pipe và không mang các trách nhiệm khác. Một ví dụ khác là microservice gateway dùng để liên lạc với các system bên ngoài.

![2010-microservices](@/images/architecture/soa/2010-microservices.jpg?w=825)

**Ưu điểm**

*   Độc lập về technology stack, triển khai và khả năng mở rộng của các services;
*   Kênh truyền thông common, đơn giản và đáng tin cậy (văn bản thông qua HTTP, cổng 80);
*   Cô lập Domain contexts;
*   Dễ dàng đính kèm (attachment) và tách rời (detachment) các services;
*   Giao tiếp không đồng bộ giúp quản lý tải của hệ thống.
*   Các services tự trị và độc lập thực sự;
*   Không có business logic bên ngoài các services
*   Tiềm năng để biến đổi tổ chức thành một hệ thống thích ứng với sự phức tạp (Complex Adaptative System), bao gồm một số bộ phận / nhóm tự trị nhỏ có thể nhanh chóng thích ứng với những thay đổi kinh doanh.

**Điểm hạn chế cần lưu ý:**

*   Độ phức tạp cao.
*   Cần đầu tư cao vào nền văn hóa DevOps mạnh mẽ;
*   Sử dụng vô số các công nghệ và thư viện có thể không nằm trong sự kiểm soát của chúng ta.
*   Các thay đổi API đầu vào và đầu ra phải được quản lý cẩn thận vì sẽ có ứng dựng dựa trên các interface đó;
*   Việc sử dụng tính nhất quán cuối cùng 9eventual consistenc) có ý nghĩa quan trọng phải được giải quyết trong khi phát triển ứng dụng, tất cả các cách từ back-end đến các lớp UX;
*   Testing trở nên phức tạp hơn khi các thay đổi interface có thể có hậu quả không thể đoán trước trong các services khác.

## Anti-Pattern: Ravioli Architecture

![ravioli](@/images/architecture/soa/ravioli.png?w=825)  
Ravioli Architecture là tên thường được sử dụng để chỉ các Microservices Anti-Pattern. Điều đó xảy ra khi chúng ta tạo ra một hệ sinh thái **có quá nhiều microservices quá nhỏ và không đại diện cho các domain concepts.**

## Kết luận

SOA đã phát triển rất nhiều trong những thập kỷ qua và, bắt nguồn từ cả sự thiếu hiệu quả của các giải pháp được triển khai và những tiến bộ công nghệ, và đã đạt tới Microservices Architecture.

Ý tưởng đằng sau sự tiến hóa toàn bộ này luôn là chiến lược thông thường được sử dụng để giải quyết các vấn đề phức tạp: tách vấn đề thành những phần nhỏ hơn, có thể giải quyết được.

Việc giải quyết sự phức tạp của mã nguồn cũng có thể được thực hiện theo cách tương tự khi chúng ta có một khối nguyên khối (monolith), tách nó thành các thành phần domain riêng biệt (bounded contexts). Tuy nhiên, khi các team và codebase phát triển, thì cần thiết về nhu cầu phát triển độc lập, khả năng mở rộng và khả năng triển khai, SOA cung cấp các công cụ cho sự độc lập này, buộc các ranh giới (boundaries) chặt chẽ hơn giữa các bounded contexts.

Một lần nữa, chỉ sử dụng SOA chỉ khi chúng ta thực sự cần, bởi vì nó mang lại rất nhiều phức tạp, và nếu chúng ta thực sự cần sử dụng SOA, hãy tạo các Microservices có kích thước và số lượng thực sự phù hợp với nhu cầu, không nhiều, không ít.


## References 

[Service Oriented Architecture (SOA)](https://edwardthienhoang.wordpress.com/2018/08/20/service-oriented-architecture-soa/)
