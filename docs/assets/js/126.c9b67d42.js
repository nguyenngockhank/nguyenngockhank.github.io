(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{699:function(t,n,a){"use strict";a.r(n);var i=a(7),r=Object(i.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"scalable-database-architectures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scalable-database-architectures"}},[t._v("#")]),t._v(" Scalable Database Architectures")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#replication"}},[t._v("Replication")])]),a("li",[a("a",{attrs:{href:"#partitioning"}},[t._v("Partitioning")]),a("ul",[a("li",[a("a",{attrs:{href:"#horizontal-partitioning"}},[t._v("Horizontal partitioning")])]),a("li",[a("a",{attrs:{href:"#vertical-partitioning"}},[t._v("Vertical Partitioning")])])])]),a("li",[a("a",{attrs:{href:"#partitioning-criteria"}},[t._v("Partitioning criteria")])]),a("li",[a("a",{attrs:{href:"#sharding"}},[t._v("Sharding")])]),a("li",[a("a",{attrs:{href:"#clustering"}},[t._v("Clustering")])]),a("li",[a("a",{attrs:{href:"#references"}},[t._v("References")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"replication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replication"}},[t._v("#")]),t._v(" Replication")]),t._v(" "),a("p",[t._v("Hiểu nôm na thì đây là kiến trúc nhân bản.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[t._v("Chúng ta có 1 server Master và 1 hoặc nhiều server Slave\n"),a("ul",[a("li",[t._v("Master dùng chủ yếu để ghi dữ liệu (có thể dùng để đọc trong trường hợp cần thiết)")]),t._v(" "),a("li",[t._v("Slave dùng để dọc dữ liệu và ko thể ghi dữ liệu.")])])])])]),t._v(" "),a("p",[t._v("Vấn đề lớn nhất của phương pháp này là khi ứng dung được cấu hình ghi trên master , đọc trên slave. Nhưng sau khi dư liệu trên master thì mất một khoảng thời gian nhất định gọi là lag dư liệu mới được đồng bộ lên slave.")]),t._v(" "),a("p",[t._v("Ví dụ khi mua hàng, chúng ta mua thì số lượng sản phẩm phải bị giảm đi, Nhưng câu lệnh giảm số lượng sản phẩm đã thưc hiện xong thì trên slave vẫn chưa được cập nhật nên có thể dẫn đến sai logic. Trong trường hợp này chúng ta phải thực hiện dọc trực tiếp trên master thay vì đọc trên slave.")]),t._v(" "),a("h2",{attrs:{id:"partitioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#partitioning"}},[t._v("#")]),t._v(" Partitioning")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Partitioning is a database design technique which is used to improves performance, manageability, simplifies maintenance and reduce the cost of storing large amounts of data.")])]),t._v(" "),a("p",[t._v("Để dễ hình dung thì 1 bảng dữ liệu gióng như một chiếc hộp nhiều ngăn.")]),t._v(" "),a("ul",[a("li",[t._v("Mỗi partition là một ngăn, mỗi một ngăn sẽ chưa một số lượng bản ghi theo một quy luật nào đó.")]),t._v(" "),a("li",[t._v("Các cách chia thường theo id của bản ghi, hoặc theo thời gian tạo bản ghi theo ngày tháng")])]),t._v(" "),a("h3",{attrs:{id:"horizontal-partitioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#horizontal-partitioning"}},[t._v("#")]),t._v(" Horizontal partitioning")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Horizontal partitioning divides a table into multiple tables. Each table then contains the same number of columns, but fewer rows.")])]),t._v(" "),a("p",[t._v("Ví dụ theo tháng chẳng hạn, thì bảng sẽ chia thành 12 partition, dữ liệu của mỗi tháng của các năm sẽ được đấy vào cùng partition, nôm na có thể hiểu truy vẫn dữ liệu trong một tháng tốc độ sẽ tăng lên 12 lần.")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" testing_user\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PARTITION")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HASH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("YEAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("created"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nPARTITIONS "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"vertical-partitioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vertical-partitioning"}},[t._v("#")]),t._v(" Vertical Partitioning")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Vertical partitioning involves creating tables with fewer columns and using additional tables to store the remaining columns. Normalization also involves this splitting of columns across tables, but vertical partitioning goes beyond that and partitions columns even when already normalized.")])]),t._v(" "),a("h2",{attrs:{id:"partitioning-criteria"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#partitioning-criteria"}},[t._v("#")]),t._v(" Partitioning criteria")]),t._v(" "),a("ul",[a("li",[t._v("Range partitioning")]),t._v(" "),a("li",[t._v("List partitioning")]),t._v(" "),a("li",[t._v("Composite partitioning")]),t._v(" "),a("li",[t._v("Round-robin partitioning")]),t._v(" "),a("li",[t._v("Hash partitioning")])]),t._v(" "),a("h2",{attrs:{id:"sharding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sharding"}},[t._v("#")]),t._v(" Sharding")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Partitioning is more a generic term for dividing data across tables or databases.\nSharding is one specific type of partitioning, namely horizontal partitioning.")])]),t._v(" "),a("p",[t._v("Thường dùng trong ứng dụng dữ liệu người dùng ko liên quan đến dữ liệu cảu người dùng khác. Hoặc nhóm người dùng, các user trong một công ty sẽ lưu vào một sharding node chẳng hạn")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"clustering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clustering"}},[t._v("#")]),t._v(" Clustering")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Clustering là một kiến trúc nhằm đảm bảo nâng cao khả năng sẵn sàng cho các hệ thống mạng. Clustering bao gồm nhiều server riêng lẻ được liên kết và hoạt động cùng với nhau trong một hệ thống.")])]),t._v(" "),a("p",[t._v("Các server này giao tiếp với nhau để trao đổi thông tin và giao tiếp với mạng bên ngoài để thực hiện các yêu cầu. Khi có lỗi xảy ra các dịch vụ trong cluster hoạt động tương tác với nhau để duy trì tính ổn định và độ sẵn sàng cao cho hệ thống.")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Cluster")]),t._v(" : một hệ thống song song và được phân phối bởi một nhóm các server dành riêng để chạy những ứng dụng đặc biệt nào đó và kết nối với nhau để cung cấp khả năng chịu lỗi ("),a("code",[t._v("faul tolerance")]),t._v(") và "),a("code",[t._v("load balance")]),t._v(". Cluster dùng để cung cấp tính luôn sẵn sàng cho việc truy cập")]),t._v(" "),a("li",[a("strong",[t._v("Node")]),t._v(" : Là một server thuộc một Cluster nào đó mà trên đó các ứng dụng và Cluster service được cài đặt")]),t._v(" "),a("li",[a("strong",[t._v("Failover")]),t._v(" :  Quá trình failover có thể xảy ra một cách tự động. Khi một node trong Cluster bị hỏng, các resource group của nó sẽ được chuyển tới một hay nhiều node trong Cluster mà còn hoạt động được. Quá trình tự động failover tương tự như lập kế hoạch cho việc tái chỉ định quyền sở hữu các resource.")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://kipalog.kaopiz.com/posts/Cac-mo-hinh-database-nen-biet",target:"_blank",rel:"noopener noreferrer"}},[t._v("Các mô hình database nên biết"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://kipalog.com/posts/Cau-hinh-Galera-server-cho-MariaDB",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cấu hình Galera server cho MariaDB"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://acmeextension.com/mysql-table-partitioning/",target:"_blank",rel:"noopener noreferrer"}},[t._v("A Step-by-Step Guide to Create Partitions on MySQL table"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.quora.com/Whats-the-difference-between-sharding-DB-tables-and-partitioning-them",target:"_blank",rel:"noopener noreferrer"}},[t._v("What's the difference between sharding DB tables and partitioning them?"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://topdev.vn/blog/cluster-la-gi/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cluster là gì? Tổng quan về Server Clustering"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=r.exports}}]);