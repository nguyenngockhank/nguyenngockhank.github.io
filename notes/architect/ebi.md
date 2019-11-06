# EBI Architecture

EBI Architecture là một kiến trúc ứng dụng hiện đại phù hợp với nhiều kiểu ứng dụng. Mục tiêu của nó là để tách business logic và presentation logic. Nó đặc biệt thích hợp cho ứng dụng web APIs, nhưng ý tưởng của EBI là có thể apply cho bất cứ dạng nào, nó không gắn liền với một nền tảng cụ thể, ứng dụng, ngôn ngữ hoặc khuôn khổ nào. Đây là một cách để thiết kế các chương trình chứ không phải là một thư viện.

Nó được biết đến rộng rãi bởi Robert C. Martin thông qua bài talk của ông về Clean Architecture. Tuy nhiên, pattern này đã được published bởi Ivar Jacobson từ năm 1992 trong một cuốn sách của ông ta với nhan đề [Object-Oriented Software Engineering: A use case driven approach](https://www.amazon.com/Object-Oriented-Software-Engineering-Driven-Approach/dp/0201403471). Vào thời điểm đó, Jacobson gọi nó là Entity-Interface-Control, nhưng đã đổi tên thành Entity-Boundary-Interactor để tránh nhầm lẫn khái niệm “Interface” với interface trong các ngôn ngữ lập trình hoặc với “User Interface” và “Control” dễ bị nhầm lẫn với Controller trong MVC.

## Sự khác nhau so với MVC

Sự khác biệt giữa EBI và MVC là business logic của EBI được thiết kế để trở thành không phụ thuộc vào platform nào.

Để diễn giải, điều này có nghĩa là các thành phần business logic, interactors và entities, không biết trong đó họ đang truy cập phương tiện nào. Nó có thể là từ một máy chủ web, một unit test, hoặc một ứng dụng GUI.

Trái ngược với MVC, nơi luôn có sự phụ thuộc vào cơ chế đầu ra (delivery mechanism). Cho dù bạn cố gắng thế nào đi chăng nữa, bạn cũng không thể rách các Rails controller khỏi thế giới web.

![fig_7_12_entity_interface_control](@/images/architecture/ebi/fig_7_12_entity_interface_control.jpg)

_Ivar Jacobson 1992, pp. 169_

## Entity

Các Entity object chứa đựng data sử dụng bởi system và tất cả các behavior hợp với data này. Mỗi Entity object đại diện cho một concept liên quan đến các vấn đề nghiệp vụ (domain) và cả việc lưu trữ persistent data. Jacobson nói rằng một Entity object chỉ nên chứa đựng logic để thay đổi data trong chính bản thân nó. Ví dụ nếu cấu trúc data của nó thay đổi thì các operation bên trong nó cũng cần phải thay đổi theo và vì vậy chúng cũng cần được đặt vào trong Entity đó.

Một điểm thú vị trong chú ý của Jacobson đã nói rằng:

Những người mới bắt đầu thường chỉ xem Entity object như nơi để contain only data structure và implement tất cả operation ở phía Controller (Interactor) object […]. Tuy nhiên, chúng ta nên tránh chuyện đó […]. Thay vào đó, phần nhiều các logic phải nên được đặt trong chính bản thân các Entity object, nơi chúng thuộc về.

> Beginners may sometime only use entity object as data carriers and place all dynamic behaviour in control objects […]. This should, however be avoided. […] Instead, quite a lot of behaviour should be placed in the entity objects.  
> Ivar Jacobson 1992, pp. 134

## Boundary (Interface)

Các đối tượng Boundary tạo nên giao diện (interface) với hệ thống.

[…] mọi thứ liên quan đến interface của system được đặt trong các interface object

> […] everything concerning the interface of the system is placed in an interface object  
> Ivar Jacobson 1992, pp. 134

Tất cả các chức năng phụ thuộc vào môi trường hệ thống (công cụ và đầu ra – tools and delivery mechanisms) thuộc về các đối tượng Boundary.

Bất kỳ tương tác nào của hệ thống với một actor sẽ đi qua một đối tượng Boundary. Như Jacobson mô tả, một actor có thể là một người sử dụng con người giống như một khách hàng hoặc một quản trị viên (nhà quản lý), nhưng nó cũng có thể là “người dùng” không phải là con người giống như một báo động, một máy in hoặc một API của bên thứ ba.

![fig_7_14_boundaries](@/images/architecture/ebi/fig_7_14_boundaries.jpg)

_Ivar Jacobson 1992, pp. 171_

Phản ánh khái niệm Boundary, xem hình 7.14 và tưởng tượng nó với 6 ranh giới thay vì 4, tôi không thể tránh kết nối nó với kiến trúc Ports & Adapters (mà tôi sẽ nói về trong một bài viết sau) xuất bản năm 2005, [13] Nhiều năm sau đó!

## Interactor (Control)

Đối tượng Interactor sẽ giữ hành vi không ràng buộc một cách tự nhiên với bất kỳ kiểu object nào. Điều này có nghĩa là tất cả các hành vi không phù hợp với Bodunary hoặc Entity sẽ được đặt trong một hoặc nhiều đối tượng Interactor.

Ví dụ như là việc thực hiện tính toán dựa trên nhiều Entity và trả lại kết quả cho một đối tượng Boundary.

> Behaviour that remains after the Interface objects and Entity objects have obtained their parts will be placed in the control objects  
> Ivar Jacobson 1992, pp. 185

Do đó, Jacobson nghĩ rằng Interactor object không chỉ là các đối tượng điều phối (orchestrate) các use-case mà còn là bất kỳ đối tượng nào có hành vi không phải là Boundary hay một Entity.

So với kinh nghiệm của tôi, tôi có thể nói rằng ông ta gọi các Interactor với cái mà tôi gọi là Application Services (điều phối các use-case) và Domain Services (chứa các behavior về nghiệp vụ nhưng không phải là Entity).

Lý do tại sao đối tượng Interactor trung gian này rất quan trọng là nếu chúng ta không sử dụng chúng, chúng ta sẽ phải đặt logic trong các Entity. Tuy nhiên, các Entity được sử dụng trong nhiều use-case khác nhau bởi nhiều Boundary khác nhau. Điều này gây cản trở trong việc tái sử dụng các Entity. Ví dụ như ta có logic trong Entity để phục vụ cho 1 Boundary, rất có thể sau đó lại phải thay đổi logic trong Entity đó để đáp ứng yêu cầu từ 1 Boundary khác, gây ra sự phức tạp và vi phạm nguyên tắc Single Responsibility.

## Tại sao lại là 3 loại?

Vào thời điểm đó, Jacobson nói, các phương pháp luận khác sẽ đưa tất cả những trách nhiệm đó vào trong bản thân các Entity, tuy nhiên, ông (và các cộng sự của ông ta) đã chọn phân chia trách nhiệm đó thành 3 loại đối tượng bởi vì nó sẽ làm cho hệ thống tăng tính thích nghi với những thay đổi.

> […] all systems will change. Therefore stability will occur in the sense that all changes will be local, that is, affect (preferably) only one object in the system.  
> Ivar Jacobson 1992, pg. 135

Do đó, mục tiêu giới hạn sự ảnh hưởng của các thay đổi trong hệ thống, bằng cách đóng gói trách nhiệm (encapsulate responsibilities). Nếu chúng ta nghĩ về điều này, Jacobson ngầm nói về [Nguyên tắc Single Responsibility](https://edwardthienhoang.wordpress.com/2013/11/09/single-responsibility-principle-srp/) được xuất bản 10 năm sau bởi Robert C. Martin trong cuốn sách tuyệt vời của ông về “[Agile Software Development, Principles, Patterns, and Practices](https://www.amazon.com/dp/0135974445/ref=wl_it_dp_o_pC_nS_ttl?_encoding=UTF8&colid=CG11VVP0H8Y8&coliid=I1P9T8D1QRUFMM)“.

## Kết luận

Cũng giống như vậy trong mô hình MVC, Model đại diện cho toàn bộ back-end bao gồm tất cả các Entity, Servive và các mối quan hệ của chúng, mô hình EBI cho thấy Boundary là một kết nối hoàn hảo với thế giới bên ngoài và không chỉ là một khung nhìn, một controller hoặc một interface (trong ngôn ngữ lập trình). Boundary đại diện cho toàn bộ presentation layer, trong MVC tương ứng với View và Controller. Entity trong EBI là thực thể nắm giữ dữ liệu và hành vi có liên quan đến domain, trong khi đối tượng Interactor tạo kết nối giữa presentation layer và các entities, cái mà tôi gọi là Application Services và Domain Services.

EBI được thiết kế cho phía back-end, còn MVC lại được thiết kế cho phía front-end. Chúng không thể thay thế cho nhau, mà có thể kết hợp lại với nhau thành cái mà tôi gọi là View-Controller-Interactor-Entity.



## References 

**Bài viết được tham khảo từ:**

[EBI Architecture](https://herbertograca.com/2017/08/24/ebi-architecture/)

[ENTITY–BOUNDARY–INTERACTOR](https://ebi.readthedocs.io/en/latest/)
