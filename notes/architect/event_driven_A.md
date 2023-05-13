---
tags: ["EventDriven"]
---

# Event-driven architecture 

<TagLinks />

Event-driven architecture (EDA) là mẫu kiến trúc phần mềm (architecture software pattern) trong đó, về cơ bản, hệ thống được xây dựng xung quanh các thao tác như tạo, khám phá, tiêu thụ và đáp trả lại các sự kiện (event). Hiểu đơn giản hơn, EDA là một dạng kiến trúc phần mềm được xây dựng trên luồng các event, sử dụng event như là phương tiện giao tiếp giữa các thành phần hệ thống.

Một event trong EDA được hiểu là một “thay đổi trạng thái đáng chú ý” của một thành phần nào đó. Event có thể được phát sinh do người dùng, do các thiết bị phần cứng hoặc do chính phần mềm phát sinh trong một điều kiện nào đó. EDA được xem như một trong những kĩ thuật thiết kế **hiệu quả nhất trong việc hạn chế đến mức nhỏ nhất quan hệ phụ thuộc giữa các thành phần hệ thống hay các module**.

---

**Một ví dụ đơn giản của EDA**: 

một module quản lý việc đăng nhập của user cần chứng thực thông tin của user vừa nhập xong nên tự phát sinh và gửi đi một event gọi là LoginEvent chứa thông tin user. Event này sau đó được một module có khả năng thao tác với dữ liệu như WebServer, Database… bắt lấy, thực hiện việc kiểm chứng và sau đó trả lời kết quả thông qua LoginResultEvent để module đăng nhập bắt lấy. Theo cách xử lý này thì module đăng nhập không cần biết module nào và sẽ làm thế nào để thực hiện việc kiểm tra, nó chỉ cần biết gửi yêu cầu và nhận kết quả sau khi kiểm tra và tất cả những gì nó quan tâm chỉ là các event được định nghĩa ở mức hệ thống. Hơn nữa, event kết quả trong trường hợp trên có thể được quan tâm bởi nhiều module khác như module đảm nhận ghi log và do đó làm cho hệ thống càng mềm dẻo hơn.

EDA là mẫu kiến trúc được ứng dụng rất rộng rãi trong các hệ thống hiện đại và đặc biệt được dùng như phương tiện giao tiếp giữa các dịch vụ trong các hệ thống Service-oriented architecture (SOA) kiểu mới. EDA còn được sử dụng rộng rãi trong các framework phổ biến như Cairngorm, PureMVC…

What/When/Why
-------------

Cũng giống như class, compoent cũng được thiết kế với tính low coupling và high cohesion. Khi các component cần phải cộng tác, giả sử một Component “A” cần kích hoạt một số logic trong Component “B”, cách tự nhiên để làm điều đó chỉ đơn giản là Componentn A sẽ gọi một method trong một object của Component B. Tuy nhiên, nếu A biết về sự tồn tại của B, chúng đang tigh coupling với nhau, A phụ thuộc vào B, làm cho hệ thống khó khăn hơn để thay đổi và duy trì. Do đó, event có thể được sử dụng ngăn chặn tình trạng “dính chặt” vào nhau giữa các components.

Event còn có tác dụng trong một số tác vụ asynchrnous. Bằng cách cài đặt các hàm callback thực thi không đồng bộ với luồng xử lý chính, luồng xử lý chính sau khi làm xong task sẽ notify cho các callback function cùng với các parameter cần thiết, callback function coi đó như là 1 event, và sẽ được thực thi ngay lúc đó. Ví dụ rõ nhất là ActionListener#actionPerformed() trong Java.

Event nghe thì có vẻ ưu việt, một số dự án, tôi toàn thấy event, listener, fireXxxChange. Tuy nhiên, có những mối nguy hiểm từ nó. Nếu chúng ta sử dụng nó một cách bừa bãi, chúng ta có nguy cơ kết thúc với các luồng logic có ý nghĩa rất cao, nhưng kết hợp với nhau bởi các event là một cơ decoupling. Nói cách khác, mã nên được với nhau sẽ được tách ra và sẽ rất khó để theo dõi luồng đi của nó (giống như câu lệnh goto), để hiểu nó và lý do về nó: Nó sẽ là mã spaghetti! Nói chung là rất là đọc hiểu được các hàm callback này sẽ được gọi khi nào, rồi callback lại lồng callback, …

Để ngăn chuyển codebase của chúng ta thành một đống lớn mã spaghetti, chúng ta nên giữ cho việc sử dụng event giới hạn trong các tình huống được xác định rõ ràng. 


## When

***Theo kinh nghiệm của tôi, có ba trường hợp để sử dụng các event:***

*   Để tách các thành phần
*   Để thực hiện các tác vụ async
*   Để lưu vết các thay đổi (audit log)

### 1\. Để tách các thành phần

Khi Component A thực hiện logic cần kích hoạt logic của Component B, thay vì gọi nó trực tiếp, chúng ta có thể kích hoạt một event gửi đến event dispatcher. Component B sẽ lắng nghe event cụ thể đó trong dispatcher và sẽ hành động bất cứ khi nào event xảy ra.

Điều này có nghĩa là cả A và B sẽ tùy thuộc vào event và event dispatcher, chúng không hề biết và phụ thuộc lẫn nhau nhau (decoupled).

Lý tưởng nhất là cả event và event dispatcher nên không nằm trong bất cứ Component nào.

Dispatcher phải là một thư viện hoàn toàn độc lập với ứng dụng của chúng ta và do đó được cài đặt ở vị trí chung chung sử dụng một hệ thống quản lý phụ thuộc (dependency management system). Trong PHP, đây là cái gì đó được cài đặt trong vendor folder, sử dụng Composer.

Tuy nhiên, Event là một phần của ứng dụng của chúng ta nhưng phải sống bên ngoài cả hai Component để giữ cho chúng không biết lẫn nhau. Event được chia sẻ giữa các Component và nó là một phần của application core. Các Event là một phần của những gì mà DDD gọi là Shared Kernel. Bằng cách này, cả hai Component sẽ phụ thuộc vào Shared Kernel nhưng sẽ không biết gì về nhau.  
Tuy nhiên, trong một ứng dụng Monolithic, để thuận tiện, chấp nhận được đặt nó vào Component nào kích hoạt event.

**Shared Kernel**

\[…\] Chỉ định với một ranh giới rõ ràng một số tập hợp con của domain model mà các team đồng ý chia sẻ. Giữ cho kernel này nhỏ. \[…\] Và không nên thay đổi mà không tham khảo ý kiến với team khác.  
\[…\] Designate with an explicit boundary some subset of the domain model that the teams agree to share. Keep this kernel small. \[…\] This explicitly shared stuff has special status, and shouldn’t be changed without consultation with the other team.  
Eric Evans 2014, Domain-Driven Design Reference

### 2\. Để thực hiện các tác vụ async

Đôi khi chúng ta có một số logic mà chúng ta muốn thực hiện, nhưng có thể mất một khoảng thời gian để thực hiện và chúng ta không muốn người dùng chờ nó kết thúc. Trong trường hợp này, ta sẽ để cho logic được chạy asyn và response về cho user là request của anh ta đang được execute.

*Ví dụ, việc order hàng trên webshop phải được thực hiện đồng bộ, còn việc gửi email đến user sẽ được thực hiện bất đồng bộ.*

Trong những trường hợp như vậy, những gì chúng ta có thể làm là kích hoạt một event, đưa nó vào hàng đợi, và sẽ ngồi trong hàng đợi cho đến khi một worker có thể thực hiện nó khi hệ thống có tài nguyên cho nó. Trong những trường hợp này, nó không thực sự quan trọng nếu logic kết hợp có cùng bounded context hay không, theo cách nào đó, logic được tách riêng.

### 3\. Để lưu vết các thay đổi (audit log)

Theo cách lưu trữ dữ liệu truyền thống, chúng ta có các entity lưu giữ một số dữ liệu. Khi dữ liệu trong các entity đó thay đổi, chúng ta chỉ cần cập nhật một row của table trong DB để phản ánh các giá trị mới.

Vấn đề ở đây là chúng ta không lưu trữ được cái gì thay đổi và thời điểm thay đổi.

Về vấn đề này, chúng ta sẽ tìm hiểu kỹ hơn ở phần Event Sourcing.

Patterns
--------

Martin Fowler định nghĩa ra 3 loại event patterns:

*   Event Notification
*   Event-Carried State Transfer
*   Event-Sourcing

Tất cả pattern này đề có chung key concept:

*   Event đại diện cho một cái gì đó đã xảy ra.
*   Event sẽ được phát tán (broadcasted) đến tất cả những nơi đang lắng nghe (chờ đợi) event đó.

### Event Notification

Giả sử chúng ta có một application core với các component được xác định rõ ràng. Lý tưởng nhất là các component này hoàn toàn tách rời nhau nhưng một số chức năng của chúng yêu cầu một số logic trong các component khác sẽ được thực hiện.

Đây là trường hợp điển hình nhất, được mô tả trước đó: Khi Component A thực hiện logic cần kích hoạt logic của Component B, thay vì gọi nó trực tiếp, chúng ta có thể kích hoạt một event gửi đến event dispatcher. Component B sẽ lắng nghe event cụ thể đó trong dispatcher và sẽ hành động bất cứ khi nào event xảy ra.

Điều quan trọng cần lưu ý là, một đặc điểm của mô hình này là event chỉ nên chứa các dữ liệu tối thiểu. Nó chỉ mang đủ dữ liệu cho listener biết điều gì đã xảy ra và thực hiện logic của chúng, thường là các Entity ID và có thể ngày và giờ mà event được tạo ra.

**Ưu điểm:**

*   Khả năng phục hồi cao hơn, nếu các sự kiện được xếp hàng đợi, component gốc có thể thực hiện logic ngay cả khi logic thứ cấp không thể được thực hiện tại thời điểm đó vì một lỗi (vì chúng được xếp hàng đợi, chúng có thể được thực hiện sau đó, khi lỗi được cố định);
*   Giảm độ trễ, nếu sự kiện được xếp hàng đợi người sử dụng không cần phải chờ cho logic đó được thực hiện;
*   Các team có thể phát triển các component độc lập, làm cho công việc của họ dễ dàng hơn, nhanh hơn, ít bị vấn đề hơn và hữu cơ hơn;

### Event-Carried State Transfer

Hãy xem xét lại ví dụ trước của một core ứng dụng với các components được xác định rõ ràng. Lần này, đối với một số chức năng của chúng, chúng cần dữ liệu từ các components khác. Cách tự nhiên nhất để lấy dữ liệu là invoke các component khác, nhưng điều đó có nghĩa là các component sẽ phải coupled với nhau!

Một cách khác để chia sẻ dữ liệu là sử dụng event được kích hoạt khi data trong component có sự thay đổi. Event sẽ chứa những thông tin mới nhất của data và các component quan tâm đến dữ liệu đó sẽ được notify bằng những event này và sẽ có cách thức để handle nó. Bằng cách này, các component sẽ không cần phải ask các component khác một cách trực tiếp nữa.

**Ưu điểm:**

*   Đây là kiểu lắng nghe bị động, các component cần data vẫn có thể hoạt động được trong trường hợp component cung cấp data không hoạt động (vì có lỗi hoặc máy chủ từ xa không thể truy cập được);
*   Giảm độ trễ (latency) vì sẽ không còn các lệnh remote call (trong trường hợp liên lạc giữa các component cần thông qua network).
*   Chúng ta không phải lo lắng về việc tải trên các component cung cấp data để đáp ứng các truy vấn từ tất cả các component truy vấn (đặc biệt là nếu nó là một component từ xa);

**Bất lợi:**

*   Sẽ có rất nhiều phiên bản copy của data ở nhiều nơi, nếu bạn không lo lắng về storage thì đây cũng không phải vấn đề? lớn.
*   Các component truy vấn data cần phải có logic phức tạp để duy trì bản sao cục bộ của dữ liệu bên ngoài.

Có lẽ pattern này không cần thiết nếu cả hai component đều chạy trên cùng một process, điều này làm cho giao tiếp nhanh giữa các component, tuy nhiên thậm chí việc áp dụng nó để tách riêng và bảo trì cũng là một điều thú vị hoặc như là một sự chuẩn bị để tách các component này vào các microservices khác nhau, đôi khi trong tương lai. Tất cả phụ thuộc vào những nhu cầu hiện tại của chúng ta, những nhu cầu trong tương lai và chúng ta cần / cần phải tách rời ra sao.

### Event Sourcing

Theo cách lưu trữ trạng thái truyền thống, các entity chỉ được lưu trong DB dưới dạng các row trong 1 table, và nó chỉ phản ảnh trạng thái sau cùng của entity đó.

#### Transaction log

Cách này OK trong phần lớn các trường hợp, nhưng nếu chúng ta có nhu cầu cần biết quá trình mà 1 entity đạt được trạng thái đó từ khi bắt đầu đến thời điểm hiện tại chứ không phải chỉ là trạng thái cuối cùng của nó. Lấy ví dụ, chúng ta có một tài khoản ngân hàng, nếu theo cách lưu trữ truyền thống, chúng ta có thể xem số dư tại thời điểm hiện tại của tài khoản chúng ta. Và nếu ngân hàng không support sao kê, để xem tiền vào, tiền ra trong một khoảng thời gian nào đó, thậm chí là từ lúc mở toàn khoản đến giờ thì sẽ không có cách nào để kiểm tra liệu hệ thống tính toán, lưu trữ ở phía ngân hàng làm việc có chính xác hay không. “Sao kê” ở đây chính là một ví dụ cho Event Sourcing.

Sử dụng Event Sourcing, thay vì lưu trữ trạng thái Thực thể, chúng ta tập trung vào việc lưu trữ thay đổi trạng thái Thực thể và tính toán trạng thái Thực thể từ những thay đổi đó. Mỗi thay đổi trạng thái là một event, được lưu trữ trong một event stream (ví dụ một bảng trong một RDBMS). Khi cần trạng thái hiện tại của một Thực thể, chúng ta tính toán nó từ tất cả sự kiện của nó trong event stream.

#### Deletions

Nếu người dùng “lỡ tay” và tạo ra một sự thay đổi trạng thái (event) không mong muốn, chúng ta không thể xóa event đó nó sẽ thay đổi lịch sử thay đổi trạng thái, và nó sẽ đi ngược lại toàn bộ ý tưởng của event sourcing. Thay vào đó, chúng ta tạo thêm 1 event để đảo ngược (reverse) trạng thái từ event không mong muốn trước đó. Quá trình này được gọi là một giao dịch đảo ngược (Reversal Transaction), và không chỉ mang thực thể trở về trạng thái mong muốn mà còn để lại một dấu vết cho thấy rằng đối tượng đã ở trạng thái đó tại một thời điểm nhất định.

#### Snapshots

Tuy nhiên, khi chúng ta có nhiều sự kiện trong một luồng sự kiện, việc tính toán trạng thái Entity sẽ tốn kém, harm performance. Để giải quyết điều này, sau một số lần sự kiện X xảy ra, chúng ta sẽ tạo một ảnh chụp nhanh trạng thái (Snapshots) Entity tại thời điểm đó. Bằng cách này, khi cần trạng thái của thực thể, chúng ta chỉ cần tính toán nó từ bản Snapshots cuối cùng. Thậm chí, chúng ta có thể giữ một bản chụp cập nhật vĩnh viễn của Thực thể tại thời điểm mới nhất để không mất công đi tính toán lại.

![2006-2-event-sourcing](https://edwardthienhoang.files.wordpress.com/2018/08/2006-2-event-sourcing.png?w=825)

#### Projections

Trong event sourcing, chúng ta cũng có khái niệm về phép chiếu (Projections), đó là tính toán của các sự kiện trong luồng sự kiện, từ và đến các khoảnh khắc cụ thể. Đó là ảnh chụp nhanh (Snapshots) hoặc trạng thái hiện tại của một thực thể, phù hợp với định nghĩa của phép chiếu. Nhưng ý tưởng có giá trị nhất trong khái niệm Projections là chúng ta có thể phân tích “hành vi” của các thực thể trong các khoảng thời gian cụ thể, cho phép chúng ta dự đoán về tương lai (ví dụ, nếu trong 5 năm qua, một thực thể tăng cường hoạt động trong tháng 8, có khả năng là tháng 8 năm sau sẽ giống nhau), và đây có thể là một khả năng cực kỳ có giá trị cho doanh nghiệp.

**Ưu và nhược điểm**

*   Event sourcing có thể rất hữu ích cho cả doanh nghiệp và quá trình development:  
    chúng ta truy vấn các sự kiện này, hữu ích cho cả doanh nghiệp và development để hiểu người dùng và hành vi hệ thống (debug);
*   chúng ta cũng có thể sử dụng event log để tái tạo lại các trạng thái trong quá khứ, một lần nữa hữu ích cho cả doanh nghiệp lẫn development;
*   khám phá lịch sử thay thế bằng cách đưa vào (injecting) các sự kiện giả định khi phát lại, tuyệt vời cho doanh nghiệp.

Tuy nhiên, Event sourcing cũng có 1 số **vấn đề** như

**External updates**  
Khi các sự kiện kích hoạt các bản cập nhật trong các hệ thống bên ngoài, chúng ta không muốn và/hoặc không thể tái kích hoạt lại các sự kiện đó khi đang phát lại các sự kiện để tạo ra một phép chiếu. Tại thời điểm này, chúng ta chỉ có thể vô hiệu hóa các cập nhật bên ngoài khi chúng ta đang ở trong “chế độ phát lại”.

**External Queries**  
Khi các sự kiện sử dụng truy vấn (Queries) tới một hệ thống bên ngoài, ví dụ: nhận xếp hạng trái phiếu chứng khoán, điều gì sẽ xảy ra khi chúng ta đang phát lại các sự kiện để tạo dự phóng? Chúng ta có thể muốn có được các xếp hạng giống nhau đã được sử dụng khi các sự kiện được chạy lần đầu tiên, có thể nhiều năm trước. Vì vậy, hoặc ứng dụng từ xa có thể cung cấp cho chúng ta những giá trị đó hoặc cần lưu trữ chúng trong hệ thống của mình để có thể mô phỏng truy vấn từ xa.

**Code Changes**  
Martin Fowler xác định 3 loại thay đổi mã: các tính năng mới, sửa lỗi và logic theo thời gian. Vấn đề thực sự xảy ra khi phát lại các sự kiện với các business logic rules khác nhau tại các thời điểm khác nhau trong thời gian, tức là, các tính toán thuế năm ngoái khác với năm nay. Như thường lệ, logic có điều kiện có thể được sử dụng nhưng nó sẽ trở nên lộn xộn, vì vậy lời khuyên nó sử dụng một mô hình chiến lược để thay thế.

Vì vậy, tôi khuyên bạn nên thận trọng và tôi tuân theo các quy tắc này bất cứ khi nào có thể:

*   Keep events dumb (không biết dịch thế nào luôn), chỉ biết về sự thay đổi trạng thái và không biết sự thay đổi đó đã được quyết định như thế nào. Bằng cách đó, chúng ta có thể phát lại bất kỳ sự kiện nào và mong đợi kết quả giống nhau ngay cả khi business rules đã thay đổi trong thời gian chờ đợi (mặc dù chúng ta cần giữ nguyên business rules cũ để có thể áp dụng chúng khi phát lại các sự kiện trước đây);
*   Tương tác với các hệ thống bên ngoài không nên phụ thuộc vào các sự kiện này, theo cách này chúng ta có thể phát lại sự kiện một cách an toàn mà không có nguy cơ truyền lại logic bên ngoài và chúng tôi không cần đảm bảo response từ hệ thống bên ngoài giống như khi sự kiện được phát ban đầu.
*   Và, tất nhiên, giống như bất kỳ pattern nào khác, chúng ta không cần sử dụng nó ở khắp mọi nơi, chỉ nên sử dụng nó ở nơi có ý nghĩa, nó mang lại cho chúng ta một lợi thế và giải quyết nhiều vấn đề hơn là tạo ra thêm các vấn đề.

Kết luận
--------

Một lần nữa, chủ yếu là về encapsulation, low coupling and high cohesion.

Events có thể tận dụng những lợi ích to lớn cho khả năng bảo trì, hiệu suất và tăng trưởng của codebase, và với event sourcing sẽ làm tăng thêm độ tin cậy và thông tin mà dữ liệu hệ thống có thể cung cấp.

Tuy nhiên, nó cũng làm tăng sự phức tạp về khái niệm và kỹ thuật và việc sử dụng không đúng nơi đúng chốn sẽ không những không giải quyết được vấn đề mà còn tạo ra nhiều vấn đề hơn.

**Bài viết được tham khảo từ:**

[https://herbertograca.com/2017/10/05/event-driven-architecture/](https://herbertograca.com/2017/10/05/event-driven-architecture/)

[http://hanhtranglaptrinh.vn6.vn/event-driven-programming-voi-thong-tai-cao/](http://hanhtranglaptrinh.vn6.vn/event-driven-programming-voi-thong-tai-cao/)

[http://www.pcworld.com.vn/articles/cong-nghe/cong-nghe/2009/07/1194223/giao-tiep-trong-kien-truc-module/](http://www.pcworld.com.vn/articles/cong-nghe/cong-nghe/2009/07/1194223/giao-tiep-trong-kien-truc-module/)

**Đọc thêm:**

2005 • Martin Fowler • [Event Sourcing](https://martinfowler.com/eaaDev/EventSourcing.html)

2006 • Martin Fowler • [Focusing on Events](https://martinfowler.com/eaaDev/EventNarrative.html)

2010 • Greg Young • [CQRS Documents](https://cqrs.files.wordpress.com/2010/11/cqrs_documents.pdf)

2014 • Greg Young • [CQRS and Event Sourcing – Code on the Beach 2014](https://www.youtube.com/watch?v=JHGkaShoyNs)

2014 • Eric Evans • [Domain-Driven Design Reference](https://www.amazon.com/Domain-Driven-Design-Reference-Definitions-Summaries/dp/1457501198)

2017 • Martin Fowler • [What do you mean by “Event-Driven”?](https://martinfowler.com/articles/201701-event-driven.html)

2017 • Martin Fowler • [The Many Meanings of Event-Driven Architecture](https://www.youtube.com/watch?v=STKCRSUsyP0)


[YOUTUBE - GOTO 2017 • The Many Meanings of Event-Driven Architecture • Martin Fowler](https://www.youtube.com/watch?v=STKCRSUsyP0)