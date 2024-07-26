# Single Page Application

[[toc]]

Single Page Applications, hay mình thường gọi là Single Page App – SPA giờ đã trở nên quá đỗi quen thuộc và là một xu hướng của web. Vậy bạn đã thực sự hiểu rõ nó chưa? Bài viết này với mục đích cung cấp một cái nhìn “nông dân” hết sức có thể để chỉ với kiến thức về HTML, CSS, JQuery là đã có thể nắm bắt được. Đây không phải là một bài dịch từ một nguồn nào đó hoặc là kể ra lịch sử hình thành phát triển và các công nghệ hiện tại áp dụng cho SPA, chỉ đơn thuần là kể lại quá trình một lập trình viên frontend như mình tiếp cận nó và làm việc cho tới bây giờ mà thôi. Nào bắt đầu. Nếu bạn không thích đọc nhiều, có thể kéo xuống và đọc tới phần “Cốt lõi của một SPA” luôn 🙂


## Yêu từ cái nhìn đầu tiên

Tôi bắt đầu học lập trình web khá muộn, khi đó đang là sinh viên năm ba và đang theo học một ngành chẳng liên quan gì tới web. Ấy vậy mà sau một tuần bắt đầu làm việc với HTML, CSS và JQuery, tôi đã yêu cái hướng đi này. Ban đầu, cũng như ai khác, tôi tập tành mò mẫm từng file .PSD, chăm chút từng pixel để CSS chuẩn, sau đó đến sử dụng JQuery. Cho tới giờ, khỏi phải bàn cãi JQuery vẫn là thư viện phổ biến nhất thế giới, dù bạn có là fan của Angular, React hay Vue gì gì đi chăng nữa. Sau một thời gian dùng JQuery, vào một ngày đẹp trời tôi tự hỏi cái trang gmail mình hay dùng nó viết sao mà không cần phải load lại trang mà vẫn làm được hàng tá thứ như vậy nhỉ? Nếu mình dùng JQuery mà gọi ajax như vậy thì phải dùng bao nhiêu hàm `html()`, `append()`, `prepend()`… cho đủ nhỉ?  
Gmail là sự khởi đầu của tôi với SPA, cũng là một trong những lý do tôi thích Google.

## Bắt đầu với SPA

Câu hỏi trên tôi đặt ra nhưng chẳng chịu giải quyết, vì hồi đó còn cố gắng học để lấy cái bằng, mà bây giờ mới thấy là tôi còn chẳng nhớ để nó ở xó nào. Đi làm rồi, chả ai hỏi bằng gì, chẳng một chỗ nào, sự thật 100%. Nếu mà hồi đó chịu khó tìm hiểu thì giờ chắc trình cũng kha khá rồi 😀
Dù hơi lâu, nhưng cuối cùng cũng tới, tôi được tiếp cận với Angular 1.5 và từ đó mình mới ngộ ra cái thực sự làm nên những điều kì diệu như Gmail vẫn làm là như thế nào. Lúc đó mới vỡ lẽ ra mình không phải trả lời cho câu hỏi cần gọi bao nhiêu hàm `$.ajax()` hay `html()` của JQuery nữa 😀

Nãy giờ là nói dông dài thôi =)) giờ mới bắt đầu.

## Sự ra đời

Chúng ta bắt đầu từ kiến trúc của công nghệ web, phổ biến hiện tại là Server-Client. Về phía Server, dù là ngôn ngữ nào, tóm lại cũng chỉ là database, một hệ thống backend để lấy dữ liệu từ database, một hệ thống làm việc với các giao thức (ví dụ HTTP) để gửi và nhận request, xử lý request và trả lại response cho phía client.  
Về phía client, cuối cùng những cái mà một lập trình viên cần giải quyết không gì hơn là HTML, CSS và Javascript.

Quay trở về thời gian trước khi những ứng dụng SPA còn chưa phổ biến, sự tách biệt giữa client và server còn thực sự chưa rõ ràng, khi đó chỉ cần 1 framework như Laravel của PHP là đủ xử hết mọi thứ. Ứng dụng web lúc đó là **Server Side Rendering**, nghĩa là server hoàn toàn render ra mã HTML, CSS và cả Javascript để trả về hết cho client một lần, mình nói một lần chứ không phải là một request nhé. Bạn có thể thấy dễ dàng các trang web lúc trước trả về hẳn một trang HTML với CSS và Jascript đầy đủ ở request đầu tiên khi bật chrome devtool lên xem.  

Khi mà SPA ra đời, mọi thứ được nghĩ theo một hướng hoàn toàn khác, khi server không phải làm công việc nặng nhọc đó là render ra toàn bộ mã HTML, CSS, JS nữa vì ứng dụng web ngày càng trở nên phức tạp, và quan trọng hơn hết là lượng người dùng truy cập càng ngày càng đông, việc giảm tải cho server là cực kỳ cần thiết. Bởi vậy, người ta mới nghĩ ra cách, cái gì thuộc về client thì để cho client làm, ý tưởng về SPA ra đời, kèm theo một cụm từ là **Client Side Rendering**.  
Tôi sẽ không so sánh giữa Server Side Rendering và Client Side Rendering vì nó có quá nhiều trên mạng. Và đó cũng là một cuộc chiến, giống như giữa PHP và NodeJS, giữa Angular – React – VueJS bây giờ vậy.

## Cốt lõi của một SPA

Xin lỗi vì tôi đã nói quá dài =))  
Như đã nói ở trên, dù là SPA hay không thì client và server cũng đều làm nhiệm vụ của nó, chỉ là với SPA hay Client Side Rendering, client làm nhiều việc hơn và sự tách biệt giữa client và server rõ ràng hơn bao giờ hết. Ngày trước, bạn hầu như chỉ có thể dùng JQuery và một số thư viện, plugin cho frontend, chứ không thể hoàn toàn tách biệt giữa backend và frontend khi làm việc với một framework, ví dụ Laravel. Nhưng với SPA, thì frontend và backend có thể tách biệt hoàn toàn và làm việc thông qua cái gọi là API. API là bản lề để nối giữa phần backend (xử lý data và logic) với frontend (xử lý giao diện, hiệu ứng). API là một trong những cái lõi của ứng dụng SPA, thường gặp là có RESTful API, và một cái tên mới nổi là GraphQL (lại một cuộc chiến khác, nhưng tôi nghĩ phần thắng chắc chắn sẽ thuộc về GraphQL).  
Như vậy về phía server, những thứ cần có là:

*   Database.
*   Một hạ tầng thao tác với database, tiêu biểu là ORM, hiểu nôm na là một công cụ giúp lập trình viên không phải trực tiếp thao tác với database, ví dụ viết SQL.
*   Một tập hợp những controller (xử lý logic) để lấy dữ liệu từ database (có thể thông qua ORM hoặc không) để trả về dạng API, thường là JSON.
*   Dĩ nhiên không thể thiếu là hệ thống lắng nghe request, gửi trả response.

Về phía client, cần phải có:

*   Một bộ phận gửi request và nhận response qua API. Điển hình là `$.ajax()` trong JQuery, `$http` trong Angular…
*   Routing. Đây là sự khác biệt lớn nhất giữa SPA và multipage app khi SPA sử dụng routing ở client.
*   Model: hãy hiểu đơn giản như khái niệm model mà bạn biết trong mô hình MVC.
*   View: không cần phải nói thêm, là cái bạn nhìn thấy, là mã HTML, CSS…
*   Controller/ViewModel tùy vào framework: ví dụ như Angular dùng Controller, VueJS hay React dùng ViewModel, thực chất là khối xử lý logic.
*   Cơ chế render giữa Model – View – Controller / ViewModel, có thể kể tới One-way binding và Two-way binding.

Hãy nghĩ lại về câu hỏi của tôi khi muốn viết một trang web như gmail mà dùng JQuery thì cần dùng bao nhiêu lần gọi ajax?  

Nếu bạn đã có câu trả lời thì thật mừng vì hồi trước tôi còn không hiểu cơ 😀 câu hỏi đó quả là khập khiễng vì bản thân JQuery không phải sinh ra để làm việc đó, nó chỉ support một phần rất nhỏ trong những thứ ở trên thôi, cụ thể là một hàm gọi ajax thuận tiện hơn, và vài hàm xử lý DOM. JQuery không có khái niệm Controller hay Model hay View, vì tư duy của JQuery là làm việc với DOM, là thao tác bằng tay, chuyển đoạn HTML này qua chỗ kia, sửa text, thay đổi CSS, chỉ vậy thôi.  

Tiếp theo, nếu dùng JQuery gọi ajax, mục đích của bạn là gì? Để khỏi load lại trang, thì SPA đáp ứng được nhu cầu đó vì nó có cái gọi là cơ chế hoạt động giữa Model – View – Controller/ViewModel, nghĩa là khi View thay đổi (ví dụ người dùng click một button), kéo theo model thay đổi (vì Model và View luôn liên kết chặt chẽ với nhau) thì bản thân framework sẽ kiểm tra cho mình sự thay đổi đó và xử lý logic trong Controller/ViewModel và phản ứng lại sự thay đổi đó ngược lại vào view. Cái bạn cần làm là gì? Là báo cho framework biết, khi nào View thay đổi, View đang gắn với Model nào, và khi View thay đổi, Controller/ViewModel cần phải làm gì chứ không phải tự mình đi làm việc đó. Không giống JQuery, bạn sẽ phải xử lý sự kiện click, tự mình gán lại một biến nào đó trong javascript, rồi tự mình thay đổi DOM bằng những hàm JQuery cung cấp, thì trong một SPA framework, bạn chỉ cần chỉ cho nó bạn muốn làm gì.  

Angular và React có cơ chế binding khác nhau nhưng dù có one-way, two-way, three-way gì đi chăng nữa, cái nó muốn làm cũng chỉ là phản ứng lại sự thay đổi của view và render lại trên trình duyệt.  

Tôi muốn nói thêm một chút về Routing. Hầu hết các ứng dụng đều có một layout chung, và khi tới một URL nào khác, chỉ có một số phần thay đổi, còn một số giữ nguyên. Bởi vậy người ta mới nảy ra ý tưởng là chỉ load những cái nào thay đổi thôi, rất đơn giản. Nếu như Server Side Rendering sử dụng ý tưởng include những phần layout vào chỗ thay đổi tương ứng, Client Side Render cũng tương tự, mỗi route sẽ load dữ liệu cần thiết cho sự thay đổi đó. Và khi làm việc với dữ liệu như vậy, bạn sẽ thấy việc tách biệt giữa xử lý logic và xử lý giao diện nó giúp người lập trình thoải mái như thế nào, và dễ dàng mở rộng cũng như sửa chữa hơn.

## Bốn tầng của các ứng dụng Single Page mà bạn cần biết

Hãy xây dựng và kiến trúc một ứng dụng React từ đầu, và khám phá domain và các dịch vụ của nó, store, application services và view.

![Bốn tầng của các ứng dụng single page – Alberto V](@/images/architecture/spa/9c897-15aa2cnrij2fvo0rztjczhq.png?w=825)


Mọi dự án thành công cần một kiến trúc rõ ràng, cái mà mọi thành viên trong team đều hiểu.

Tưởng tượng bạn là một thành viên mới. Technical leader thuyết trình về kiến trúc được đề xuất cho ứng dụng mới:

![Bốn tầng của các ứng dụng single page (chi tiết)](@/images/architecture/spa/fd219-16wpx8u_mm8z1xdzvmfj67w.png?w=825)

Anh ấy nói về các yêu cầu:

_Ứng dụng của chúng ta sẽ hiển thị một danh sách các bài viết. Người dùng có thể thêm, xóa và like các bài viết._

Và sau đó anh ấy yêu cầu bạn làm nó!

### Bắt đầu xây dựng ứng dụng

Tôi chọn [Create React App](https://github.com/facebook/create-react-app) và [Flow](https://flow.org/) (để kiểm tra kiểu). Vì mục đích ngắn gọn, ứng dụng sẽ không có style.

Như một điều kiện tiên quyết, hãy nói về declarative của các framework hiện đại, và khái niệm state.

### Các framework hiện nay là declarative

React, Angular, Vue là [declarative](https://tylermcginnis.com/imperative-vs-declarative-programming/), nó khuyến khích chúng ta sử dụng các thành phần của lập trình chức năng (functional programming).

Bạn đã bao giờ thấy một quyển sách lật?

> Một quyển sách lật là một quyển sách với một chuỗi các hình ảnh thay đổi dần dần từ trang này đến trang khác, vì thế khi các trang chuyển động với tốc độ nhanh, hình ảnh trở lên sống động.

![](@/images/architecture/spa/4f1a6-1yc8gwzbokkbffji8crzunq.jpeg?w=825)

Bây giờ hãy kiểm tra một phần định nghĩa về React:

> Thiết kế các view đơn giản cho mỗi state trong ứng dụng của bạn, React sẽ cập nhật và hiển thị (render) chỉ những component cần thay đổi.

Và một phần của Angular:

> Xây dựng các tính năng nhanh chóng với các template declarative, đơn giản. Mở rộng ngôn ngữ template với các component của bạn.

Nghe khá quen?

Các framework giúp chúng ta xây dựng các ứng dụng gồm các view. Các view biểu diễn state. Nhưng state là gì?

### State

State là bất kỳ dữ liệu nào có thể thay đổi trong ứng dụng.

Bạn ghé thăm một URL, đó là state, tạo một request Ajax để nhận danh sách các movie, đó lại là state, các thông tin lưu trữ trong local storage là state.

State sẽ bao gồm **các đối tượng bất biến (immutable objects)**.

[Kiến trúc bất biến (Immutable architecture)](http://enterprisecraftsmanship.com/2016/05/12/immutable-architecture) có nhiều lợi thế, một trong số đó là ở mức view.

Đây là trích dẫn từ hướng dẫn của React để [tối ưu hóa hiệu năng](https://reactjs.org/docs/optimizing-performance.html).

> Tính bất biến làm cho việc theo dõi các thay đổi trở nên rẻ hơn. Một thay đổi sẽ luôn luôn có kết quả là một đối tượng mới vì thế chúng ta chỉ cần kiểm tra nếu tham chiếu tới đối tượng thay đổi.

### Tầng domain

Domain mô tả state và lưu trữ business logic. Nó đại diện cho phần lõi của ứng dụng và thể hiện ở tầng view. Angular, React, Vue không quan trọng, chúng ta có thể sử dụng domain bất kể framework được sử dụng là gì.

![Tầng domain](@/images/architecture/spa/892ff-1inmdhmwxj53tv0fyhhpmmw.png?w=825)

Bởi vì chúng ta đang sử dụng kiến trúc bất biến, tầng domain sẽ bao gồm các thực thể và domain services.

Mặc dù gây tranh cãi trong OOP, đặc biệt trong các ứng dụng lớn, nhưng [mô hình anemic domain](https://en.wikipedia.org/wiki/Anemic_domain_model) hoàn toàn chấp nhận được khi làm việc với dữ liệu bất biến.

### Tầng store

Dữ liệu là kết quả từ việc thêm và cập nhật các bài viết đại diện cho state của ứng dụng.

Chúng ta cần một nơi để lưu trữ dữ liệu, store là ứng viên hoàn hảo cho việc này.

![Tầng store](@/images/architecture/spa/87348-1h8idykexd_phcbhkyr9e0q.png?w=825)


### Tầng application services

Tầng này để làm các loại thao tác với luồng state giống như các request Ajax hoặc state tùy chỉnh.

![Tầng application services](@/images/architecture/spa/7b2e7-1zvstpn2lbfjdporafq4sew.png?w=825)


Vì một lý do nào đó, một nhà thiết kế đến và yêu cầu tên của tất cả các tác giả phải viết hoa.

Chúng ta biết yêu cầu này là ngớ ngẩn và không muốn làm ô nhiễm mô hình với nó.

### Tầng view

Tầng view bao gồm các container và presentational component.

Các presentational component liên quan tới việc mọi thứ nhìn như thế nào trong khi các container component liên quan tới việc mọi thứ hoạt động như thế nào. Để biết thêm bạn có thể đọc bài viết này của [Dan Abramov](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).


![Tầng view](@/images/architecture/spa/399e3-1r-6nkbtqru_qsdg8o7pjjg.png?w=825)

Vậy là chúng đã xây dựng một ứng dụng React hoàn chỉnh và mạnh mẽ, với kiến trúc được định nghĩa rõ ràng. Mọi người tham gia vào team có thể đọc bài viết này và cảm thấy dễ dàng để tiếp tục làm việc.

### Tóm lại

Có một ai đó đã từng nói, nếu như bạn không thể trình bày cho một đứa bé tám tuổi hiểu về một điều, có nghĩa là bạn chưa thực sự hiểu về nó. Tôi thì luôn tin vào câu nói đó, và có lẽ đó là lý do khiến tôi viết luôn dài dòng và lê thê =)) nhưng hơn hết, những bài viết của tôi không bao giờ chỉ là đơn thuần dịch lại một bài viết của ai đó hay dịch lại document gốc, mục đích của tôi là muốn chứng mình rằng mình hiểu những gì mình đang nói.  
Một lần nữa, hi vọng các bạn sẽ chọn được những gì bổ ích cho mình qua bài viết này, và hi vọng cộng đồng developer Việt Nam sẽ ngày càng lớn mạnh, và sẵn sàng chia sẻ, học hỏi cùng nhau 🙂

### Tham khảo:

* [https://kipalog.com/posts/Single-Page-Applications–Server-Side-Rendering–Client-Side-Rendering-and-so-on](https://kipalog.com/posts/Single-Page-Applications--Server-Side-Rendering--Client-Side-Rendering-and-so-on)
* [https://techmaster.vn/posts/34644/bon-tang-cua-cac-ung-dung-single-page-ma-ban-can-biet](https://techmaster.vn/posts/34644/bon-tang-cua-cac-ung-dung-single-page-ma-ban-can-biet)
* [Wiki - Single-page application](https://en.wikipedia.org/wiki/Single-page_application)