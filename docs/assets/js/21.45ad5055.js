(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{273:function(t,e,a){"use strict";a.r(e);var n=a(2),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"domain-driven-design-ddd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#domain-driven-design-ddd","aria-hidden":"true"}},[t._v("#")]),t._v(" Domain Driven Design (DDD)")]),t._v(" "),a("p",[t._v("Nôm na nó là 1 "),a("code",[t._v("Design Pattern")]),t._v(", gồm 4 lớp (layer)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("User Interface   |   Application   |   Domain   |    Infrastructure\n")])])]),a("p",[a("strong",[t._v("User Interface")]),t._v(" : Giao diện / input control tạo ra những event bằng những command")]),t._v(" "),a("p",[a("strong",[t._v("Application")]),t._v(" : vai trò gần giống Controller trong MVC, nhiệm vụ match các "),a("code",[t._v("Activity")]),t._v(", không chứa "),a("code",[t._v("Bussiness Logic")]),t._v(", chỉ chứa "),a("code",[t._v("Application Task Progress")]),t._v(".")]),t._v(" "),a("p",[a("strong",[t._v("Domain")]),t._v(" : Chứa các "),a("code",[t._v("Bussiness Object")]),t._v(". Trái tim của toàn bộ doanh nghiệp, nghiệp vụ các kiểu ở đây nè.")]),t._v(" "),a("p",[a("strong",[t._v("Infrastructure")]),t._v(" : cung cấp các cơ chế giao tiếp các layer với nhau, các common library (Log, Utility, ...), và "),a("code",[t._v("Data Access")]),t._v(" lưu trữ "),a("code",[t._v("Business Object")]),t._v(" (database).")]),t._v(" "),a("h1",{attrs:{id:"mirco-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mirco-service","aria-hidden":"true"}},[t._v("#")]),t._v(" Mirco Service")]),t._v(" "),a("h2",{attrs:{id:"api-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-gateway","aria-hidden":"true"}},[t._v("#")]),t._v(" API gateway")]),t._v(" "),a("ul",[a("li",[t._v("Vai trò làm trung gian, giữa người dùng cuối và các service phía sau hệ thống")]),t._v(" "),a("li",[t._v("Phân tải, cache, đo & theo dõi lượng truy cập (API metering and monitoring)., ...")])]),t._v(" "),a("h2",{attrs:{id:"database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database","aria-hidden":"true"}},[t._v("#")]),t._v(" Database")]),t._v(" "),a("ul",[a("li",[t._v("Mỗi service sẽ có 1 database -> vấn đề dư thừa dữ liệu, ràng buộc quan hệ dữ liệu, ...")]),t._v(" "),a("li",[t._v("Vài service vẫn có thể dùng chung một CSDL khi tính toàn vẹn dữ liệu (ACID Atomicity, Consistency, Isolation, Durability) cần ưu tiên cao nhất.")])]),t._v(" "),a("h2",{attrs:{id:"message-queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#message-queue","aria-hidden":"true"}},[t._v("#")]),t._v(" Message Queue")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Message Base")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Data Pipeline")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("RabitMQ")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Kafka")])]),t._v(" "),a("tr",[a("td",[t._v("ActiveMQ")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Kinesis")])]),t._v(" "),a("tr",[a("td",[t._v("SQS")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("RocketMQ")])]),t._v(" "),a("tr",[a("td",[t._v("ZeroMQ")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",[t._v("MSMQ")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),a("tr",[a("td",[t._v("IronMQ")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Message Base")]),t._v(" "),a("th",[t._v("Data Pipeline")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Lưu state của các consumer => đảm bảo nhận được message từ topic đã subcribe")]),t._v(" "),a("td",[t._v("Không lưu state của consumer")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Sau khi tất cả consumer nhận đc message => message sẽ bị xoá")]),t._v(" "),a("td",[t._v("Message được xoá sau 1 khoảng th/gian nhất định")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Khi có 1 message mới, consumer chỉ có thể lấy duy nhất 1 message đó")]),t._v(" "),a("td",[t._v("Khi có 1 message mới, consumer có thể tuỳ ý lựa chọn lấy về 1 danh sách message. Có thể lấy message mới hoặc lấy thêm một số cũ.")])])])]),t._v(" "),a("p",[t._v("... To bi con ti niu")])])}),[],!1,null,null,null);e.default=i.exports}}]);