(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{209:function(n,t,i){n.exports=i.p+"assets/img/oauth.a174415e.png"},275:function(n,t,i){"use strict";i.r(t);var e=i(2),v=Object(e.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"authenication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authenication","aria-hidden":"true"}},[n._v("#")]),n._v(" Authenication")]),n._v(" "),e("p",[n._v("Theo Wiki =))")]),n._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[n._v("Xác thực là một hành động nhằm thiết lập hoặc chứng thực một cái gì đó đáng tin cậy, có nghĩa là, những lời khai báo do người đó đưa ra hoặc về vật đó là sự thật. Xác thực một đối tượng còn có nghĩa là công nhận nguồn gốc của đối tượng, trong khi, xác thực một người thường bao gồm việc thẩm tra nhận dạng của họ.")])]),n._v(" "),e("h2",{attrs:{id:"dau-hieu-chung"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dau-hieu-chung","aria-hidden":"true"}},[n._v("#")]),n._v(" Dấu hiệu chung")]),n._v(" "),e("p",[n._v("Xác thực một HTTP request bằng một dấu hiệu nào đó trên request:")]),n._v(" "),e("ul",[e("li",[n._v("URL: "),e("code",[n._v("/post/create?api_key=my_key")])]),n._v(" "),e("li",[n._v("Cookie: SESSION_ID=CLIENT_TOKEN")]),n._v(" "),e("li",[n._v("Authorization Header: "),e("code",[n._v("Authorization: my_token")])]),n._v(" "),e("li",[n._v("Custom Header: "),e("code",[n._v("Authorization: my_token")])]),n._v(" "),e("li",[n._v("Body: "),e("code",[n._v("content=...&token=my_token")])])]),n._v(" "),e("h2",{attrs:{id:"basic-authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-authentication","aria-hidden":"true"}},[n._v("#")]),n._v(" Basic Authentication")]),n._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[n._v("Cách hoạt động của Basic Auth là gửi chính "),e("code",[n._v("username")]),n._v(" + "),e("code",[n._v("password")]),n._v(" của người dùng theo "),e("code",[n._v("mỗi request")]),n._v(".")])]),n._v(" "),e("p",[e("strong",[n._v("Ưu điểm")])]),n._v(" "),e("ul",[e("li",[n._v("Đơn giản, đa số browsers & server đều support")]),n._v(" "),e("li",[n._v("Dễ dàng kết hợp với các phương pháp khác.")])]),n._v(" "),e("p",[e("strong",[n._v("Nhược điểm")])]),n._v(" "),e("ul",[e("li",[n._v("Username/password dễ bị lộ vì mỗi request đều phải truyền username và password")]),n._v(" "),e("li",[n._v("Không thể logout. Ngoại trừ việc tự xóa lịch sử duyệt web hoặc hết thời gian lưu của trình duyệt.")]),n._v(" "),e("li",[n._v("Không thân thiện với người dùng. UI xấu")])]),n._v(" "),e("h2",{attrs:{id:"session-based-authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#session-based-authentication","aria-hidden":"true"}},[n._v("#")]),n._v(" Session-based Authentication")]),n._v(" "),e("p",[n._v("Thi thoảng được gọi là cookie-based authentication.")]),n._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[n._v("Session-based authentication là cơ chế đăng nhập người dùng dựa trên việc tạo ra "),e("code",[n._v("session")]),n._v(" của người dùng ở "),e("code",[n._v("phía server")]),n._v(".")])]),n._v(" "),e("p",[n._v("Thường được dùng trong các website và những ứng dụng web làm việc "),e("code",[n._v("chủ yếu với browser")]),n._v(", những "),e("code",[n._v("hệ thống monolithic")]),n._v(" do cần sự tập trung trong việc lưu session data và sự hạn chế về domain.")]),n._v(" "),e("p",[e("strong",[n._v("Ưu điểm")])]),n._v(" "),e("ul",[e("li",[n._v("Thông tin được giấu kín. Session ID thường random không mang thông tin user")]),n._v(" "),e("li",[n._v("Dung lượng truyền tải nhỏ")]),n._v(" "),e("li",[n._v("Không cần tác động client nhiều. 2 động tác hay làm đó là set Cookie cho mỗi request, hoặc nhét thêm hidden field trong Form.")]),n._v(" "),e("li",[n._v("Fully-controlled session. VD: thời gian login, force logout, ...")])]),n._v(" "),e("p",[e("strong",[n._v("Nhược điểm")])]),n._v(" "),e("ul",[e("li",[n._v("Chiếm nhiều bộ nhớ trên server")]),n._v(" "),e("li",[n._v("Khó scale: vì phải "),e("code",[n._v("dùng chung chỗ lưu session")]),n._v(" hoặc "),e("code",[n._v("ghi nhớ user đã kết nối tới server nào")]),n._v(" phục vụ cho việc "),e("strong",[n._v("Load Balancer")]),n._v(" có đẩy request server khác vẫn hiểu được đã authenication.")]),n._v(" "),e("li",[n._v("Phụ thuộc domain. Thường sử dụng cookie để lưu "),e("code",[n._v("Session ID")]),n._v(", mà cookie lại phụ thuộc vào domain")]),n._v(" "),e("li",[e("code",[n._v("CSRF")]),n._v(" - một cách thức để tấn công, ăn cắp quyền")])]),n._v(" "),e("h2",{attrs:{id:"token-based-authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#token-based-authentication","aria-hidden":"true"}},[n._v("#")]),n._v(" Token-based Authentication")]),n._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[e("code",[n._v("Token-based Authentication")]),n._v(" là cơ chế đăng nhập người dùng dựa trên việc tạo ra "),e("code",[n._v("token")]),n._v(" - một chuỗi ký tự (thường được mã hóa) "),e("code",[n._v("mang thông tin xác định người dùng")]),n._v(" được server tạo ra và "),e("code",[n._v("lưu ở client")]),n._v(". Server sau đó [có thể] không lưu lại token này.")])]),n._v(" "),e("p",[n._v("Thường được sử dụng trong các hệ thống "),e("code",[n._v("Web API")]),n._v(", "),e("code",[n._v("các hệ thống phân tán")]),n._v(", "),e("code",[n._v("micro-services")]),n._v(", các hệ thống có sự tham gia của các nền tảng khác như "),e("code",[n._v("mobile")]),n._v(", "),e("code",[n._v("IoT")]),n._v(", "),e("code",[n._v("server")]),n._v(",..., hoặc các "),e("code",[n._v("website kiểu mới")]),n._v(" (phân tách rõ UI app và API).")]),n._v(" "),e("p",[e("strong",[n._v("Ưu điểm")])]),n._v(" "),e("ul",[e("li",[n._v("Stateless: "),e("code",[n._v("token")]),n._v(" thường có tính chất "),e("code",[n._v("self-contained")]),n._v(" => tính chất quan trọng nhất cho việc scale ngang - không cần quan tâm "),e("code",[n._v("sinh token ở đâu")]),n._v(" và "),e("code",[n._v("verify token ở đâu")])]),n._v(" "),e("li",[n._v("Phù hợp với nhiều loại client: không chỉ "),e("code",[n._v("browser")]),n._v(" mà cả")]),n._v(" "),e("li",[n._v("Chống CSRF")]),n._v(" "),e("li",[n._v("Không bị giới hạn bởi domain nhưng cũng có khả năng sẽ bị Cross Domain - "),e("router-link",{attrs:{to:"/common/cross_domain.html"}},[n._v("Đọc thêm bài này để tham khảo thêm vấn đề này")])],1)]),n._v(" "),e("p",[e("strong",[n._v("Nhược điểm")])]),n._v(" "),e("ul",[e("li",[n._v("Khó quản lý đăng xuất")]),n._v(" "),e("li",[n._v("Phức tạp phần client")]),n._v(" "),e("li",[n._v("Thông tin dễ lộ => thông thường chỉ lưu 1 số thông tin thiết yếu như "),e("code",[n._v("user_id")]),n._v(", "),e("code",[n._v("username")]),n._v(" mà không lưu thông tin nhạy cảm như "),e("code",[n._v("password")]),n._v(" vào token")]),n._v(" "),e("li",[n._v("Dung lượng truyền tải lớn")])]),n._v(" "),e("h2",{attrs:{id:"oauth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oauth","aria-hidden":"true"}},[n._v("#")]),n._v(" OAuth")]),n._v(" "),e("p",[e("strong",[n._v("Viết tắt")]),n._v(": "),e("code",[n._v("Open Authentication")])]),n._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",[e("code",[n._v("OAuth")]),n._v(" ra đời nhằm giải quyết vấn đề trên và xa hơn nữa, đây là một phương thức chứng thực giúp các ứng dụng có thể chia sẻ tài nguyên với nhau mà không cần chia sẻ thông tin username và password.")])]),n._v(" "),e("ul",[e("li",[e("strong",[n._v("Ứng dụng")]),n._v("  (website hoặc mobile app)yêu cầu ủy quyền để truy cập vào "),e("strong",[n._v("Resource Server")]),n._v(" (Gmail,Facebook, Twitter hay Github…) thông qua User")]),n._v(" "),e("li",[n._v("Nếu "),e("strong",[n._v("User")]),n._v(" ủy quyền cho yêu cầu trên, "),e("strong",[n._v("Ứng dụng")]),n._v(" sẽ nhận được "),e("em",[e("code",[n._v("ủy quyền từ phía User")])]),n._v(" (dưới dạng một token string)")]),n._v(" "),e("li",[e("strong",[n._v("Ứng dụng")]),n._v(" gửi thông tin "),e("em",[e("code",[n._v("định danh")])]),n._v(" (ID) của mình kèm theo "),e("em",[e("code",[n._v("ủy quyền của User")])]),n._v(" tới "),e("strong",[n._v("Authorization Server")])]),n._v(" "),e("li",[n._v("Nếu "),e("em",[e("code",[n._v("thông tin định danh")])]),n._v(" được xác thực và ủy quyền hợp lệ, "),e("strong",[n._v("Authorization Server")]),n._v(" sẽ trả về cho "),e("strong",[n._v("Ứng dụng")]),n._v(" "),e("em",[e("code",[n._v("access_token")])]),n._v(". Đến đây quá trình ủy quyền hoàn tất.")]),n._v(" "),e("li",[n._v("Nếu "),e("em",[e("code",[n._v("access_token")])]),n._v(" hợp lệ, "),e("strong",[n._v("Resource Server")]),n._v(" sẽ trả về dữ liệu của tài nguyên đã được yêu cầu cho "),e("strong",[n._v("Ứng dụng")]),n._v(".")])]),n._v(" "),e("p",[e("img",{attrs:{src:i(209),alt:"Mô hình OAuth2"}})]),n._v(" "),e("p",[n._v("Tóm tắt "),e("a",{attrs:{href:"https://viblo.asia/p/authentication-story-part-1-authentication-la-lam-gi-63vKj2YMK2R",target:"_blank",rel:"noopener noreferrer"}},[n._v("bài viết gốc"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=v.exports}}]);