(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{1432:function(e,t,a){"use strict";a.r(t);var r=a(7),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"database-scaling-architectures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-scaling-architectures"}},[e._v("#")]),e._v(" Database Scaling Architectures")]),e._v(" "),a("TagLinks"),e._v(" "),a("h2",{attrs:{id:"scaling-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scaling-overview"}},[e._v("#")]),e._v(" Scaling Overview")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.pinimg.com/originals/85/31/93/853193390c22d55b2a9ff1e4b9eebc0b.jpg",alt:"DB Scaling"}})]),e._v(" "),a("h2",{attrs:{id:"replication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replication"}},[e._v("#")]),e._v(" Replication")]),e._v(" "),a("h3",{attrs:{id:"replication-sync-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replication-sync-types"}},[e._v("#")]),e._v(" Replication sync types")]),e._v(" "),a("p",[e._v("2 types of replication:")]),e._v(" "),a("p",[a("strong",[e._v("Async replication")]),e._v(" "),a("img",{attrs:{src:"https://i.pinimg.com/736x/86/f0/ba/86f0ba6fbac45d3653f59c10e5c4663c.jpg",alt:"Async replication"}})]),e._v(" "),a("p",[a("strong",[e._v("Sync replication")]),e._v(" "),a("img",{attrs:{src:"https://i.pinimg.com/736x/ba/7e/e0/ba7ee0b5f9bd1d1ba0b5ad47d397bfe5.jpg",alt:"sync replication"}})]),e._v(" "),a("p",[a("strong",[e._v("Comparision")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v(".")]),e._v(" "),a("th",[e._v("Sync replication")]),e._v(" "),a("th",[e._v("Async replication")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Delay in writes")]),e._v(" "),a("td",[e._v("High")]),e._v(" "),a("td",[e._v("Low")])]),e._v(" "),a("tr",[a("td",[e._v("Wait for a laggard node")]),e._v(" "),a("td",[e._v("Casscading failure")]),e._v(" "),a("td",[e._v("No")])]),e._v(" "),a("tr",[a("td",[e._v("Data loss")]),e._v(" "),a("td",[e._v("No")]),e._v(" "),a("td",[e._v("Maybe")])]),e._v(" "),a("tr",[a("td",[e._v("Consistency")]),e._v(" "),a("td",[e._v("Yes")]),e._v(" "),a("td",[e._v("No")])])])]),e._v(" "),a("h3",{attrs:{id:"replication-architectures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replication-architectures"}},[e._v("#")]),e._v(" Replication Architectures")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.pinimg.com/736x/0c/ec/f6/0cecf6c7ee7caf4c95e528c518c43409.jpg",alt:"Replication"}})]),e._v(" "),a("h3",{attrs:{id:"replication-master-slave"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replication-master-slave"}},[e._v("#")]),e._v(" Replication - Master & Slave")]),e._v(" "),a("p",[e._v("A database architecture divided into a master database and slave databases. The slave database serves as the backup for the master database.")]),e._v(" "),a("ul",[a("li",[e._v("Master node is used for writing data or reading data if consistency required")]),e._v(" "),a("li",[e._v("Slave nodes are used for reading data, reduce load from master node.")])]),e._v(" "),a("p",[e._v("One major issue of this architecture is "),a("strong",[e._v("relication lag")]),e._v(". Possible solutions to mitigate this problem:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Latency sensitive reads")]),e._v(" are sent to the master/primary database.")]),e._v(" "),a("li",[a("strong",[e._v("Reads that immediately follow writes")]),e._v(" are routed to the master/primary database.")]),e._v(" "),a("li",[e._v("check if a replica is caught up with the master/primary")])]),e._v(" "),a("h3",{attrs:{id:"replication-leader-followers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replication-leader-followers"}},[e._v("#")]),e._v(" Replication -  Leader & Followers")]),e._v(" "),a("ul",[a("li",[e._v("One partition is leader, other are followers. Producer writes to leader, followers copy data from leader.")]),e._v(" "),a("li",[e._v("If leader fails, a follower is elected to become new leader.")])]),e._v(" "),a("p",[e._v("*Notes:")]),e._v(" "),a("ul",[a("li",[e._v("Another pair name: Primary-Replica / Primary-Secondary")]),e._v(" "),a("li",[e._v("E.g: "),a("a",{attrs:{href:"https://redis.io/docs/management/sentinel/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis Sentinel"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://www.mongodb.com/docs/manual/core/replica-set-architecture-three-members/",target:"_blank",rel:"noopener noreferrer"}},[e._v("mongodb Replica Set"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"replication-leader-leader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replication-leader-leader"}},[e._v("#")]),e._v(" Replication - Leader-Leader")]),e._v(" "),a("p",[e._v("The problem with a single leader setup is that when the leader is down, nobody will be available to take writes until a new leader is available.")]),e._v(" "),a("p",[e._v("In a leader-leader configuration, there will be multiple leader nodes to take writes.")]),e._v(" "),a("p",[e._v("The system will replicate the data to each leader to keep them up to date.")]),e._v(" "),a("p",[e._v("Each leader can still have follower replication for backup and reads.")]),e._v(" "),a("p",[e._v("The advantage of this approach is the writer will be more available since if one leader goes down, the other leader can take over. Another advantage is that if the leader is closer to a user, the latency will be faster than other leaders.")]),e._v(" "),a("p",[e._v("However, note that the performance will probably worsen because the "),a("strong",[e._v("new leader might be further away")]),e._v(".\nAlso, you have to deal with "),a("strong",[e._v("replication lag")]),e._v(" where the new leader might not have the most updated data.")]),e._v(" "),a("ul",[a("li",[e._v("complexity of conflicting data. For example, if users are writing the same key to each of the leaders, while there are multiple ways to resolve the conflict and the solution depends on the application, there is additional complexity the engineers have to worry about. Similarly, if the leader goes down, a new leader has to be selected to take write.")])]),e._v(" "),a("h3",{attrs:{id:"leaderless-replication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#leaderless-replication"}},[e._v("#")]),e._v(" Leaderless Replication")]),e._v(" "),a("p",[e._v("In a leaderless replication, a write request (also known as quorum write) is committed to some replicas, and if at least w nodes are successful, the main write query is successful.")]),e._v(" "),a("p",[e._v("A read request (also known as quorum read) reads from some of the nodes, and at least r nodes are successful before the main read query is considered successful.")]),e._v(" "),a("p",[e._v("For example, take a cluster of 3; if the user configured w to 2, 2 of the nodes need to acknowledge success before the write request is successful. If any one of the nodes is down, the write can continue to operate. The algorithm is true for read query as well as defined by r.")]),e._v(" "),a("p",[e._v("w and r are tunable numbers where the higher the w and r, the greater the probability your read request will read up-to-date data. For now, imagine n is the number of nodes in the cluster. If r = n, you’re guaranteed to find the latest data, whereas if r = 1, you are more likely to randomly hit a node that might not be up to date. Similarly, for w, if you always write the data to all the nodes with w = n, even if r is 1, you’re guaranteed to read the latest value. Since w + r > n has a stronger guarantee for up to date data than w + r <= n.")]),e._v(" "),a("p",[e._v("The advantage of doing leaderless replication is you don’t have to worry about leader selection and election when the leader is down. In addition, the cluster can continue to take writes and reads even when some nodes are down. Thus, the leaderless leads to better availability.")]),e._v(" "),a("p",[e._v("The disadvantage of doing leaderless replication is you have to deal with the complexity of data consistency. Multiple requests can write the same key to multiple nodes, similar to multi-leader replication. As the write gets propagated to different nodes during quorum write, it’s unclear which update should be the winner. In an interview, you should talk about the conflict resolution strategy of your design if you chose leaderless replication.")]),e._v(" "),a("h2",{attrs:{id:"partitioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#partitioning"}},[e._v("#")]),e._v(" Partitioning")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Partitioning is a database design technique which is used to improves performance, manageability, simplifies maintenance and reduce the cost of storing large amounts of data.")])]),e._v(" "),a("p",[e._v("Để dễ hình dung thì 1 bảng dữ liệu gióng như một chiếc hộp nhiều ngăn.")]),e._v(" "),a("ul",[a("li",[e._v("Mỗi partition là một ngăn, mỗi một ngăn sẽ chưa một số lượng bản ghi theo một quy luật nào đó.")]),e._v(" "),a("li",[e._v("Các cách chia thường theo id của bản ghi, hoặc theo thời gian tạo bản ghi theo ngày tháng")])]),e._v(" "),a("h3",{attrs:{id:"vertical-partitioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vertical-partitioning"}},[e._v("#")]),e._v(" Vertical Partitioning")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Vertical partitioning involves creating tables with fewer columns and using additional tables to store the remaining columns. Normalization also involves this splitting of columns across tables, but vertical partitioning goes beyond that and partitions columns even when already normalized.")])]),e._v(" "),a("h3",{attrs:{id:"horizontal-partitioning-sharding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#horizontal-partitioning-sharding"}},[e._v("#")]),e._v(" Horizontal partitioning (Sharding)")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.pinimg.com/736x/d2/08/a9/d208a94673bfa406a598caef87dcc798.jpg",alt:"DB Sharding"}})]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Horizontal partitioning divides a table into multiple tables. Each table then contains the same number of columns, but fewer rows.")])]),e._v(" "),a("p",[e._v("Ví dụ theo tháng chẳng hạn, thì bảng sẽ chia thành 12 partition, dữ liệu của mỗi tháng của các năm sẽ được đấy vào cùng partition, nôm na có thể hiểu truy vẫn dữ liệu trong một tháng tốc độ sẽ tăng lên 12 lần.")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ALTER")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("table")]),e._v(" testing_user\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("PARTITION")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BY")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("HASH")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("YEAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("created"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nPARTITIONS "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[a("strong",[e._v("criteria")])]),e._v(" "),a("ul",[a("li",[e._v("Range partitioning")]),e._v(" "),a("li",[e._v("List partitioning")]),e._v(" "),a("li",[e._v("Composite partitioning")]),e._v(" "),a("li",[e._v("Round-robin partitioning")]),e._v(" "),a("li",[e._v("Hash partitioning")])]),e._v(" "),a("h2",{attrs:{id:"serverless-db"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serverless-db"}},[e._v("#")]),e._v(" Serverless DB")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.pinimg.com/736x/d5/40/b6/d540b61b05bf75618728156f7c43a670.jpg",alt:"What is Serverless DB"}})]),e._v(" "),a("p",[e._v("Aurora Serverless has the ability to scale capacity automatically up or down as per business requirements. For example, an eCommerce website preparing for a major promotion can scale the load to multiple databases within a few milliseconds. In comparison to regular cloud databases, which necessitate the provision and administration of database instances, Aurora Serverless can automatically start up and shut down.")]),e._v(" "),a("p",[e._v("By decoupling the compute layer from the data storage layer, Aurora Serverless is able to charge fees in a more precise manner. Additionally, Aurora Serverless can be a combination of provisioned and serverless instances, enabling existing provisioned databases to become a part of the serverless pool.")]),e._v(" "),a("h2",{attrs:{id:"clustering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clustering"}},[e._v("#")]),e._v(" Clustering")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Clustering là một kiến trúc nhằm đảm bảo nâng cao khả năng sẵn sàng cho các hệ thống mạng. Clustering bao gồm nhiều server riêng lẻ được liên kết và hoạt động cùng với nhau trong một hệ thống.")])]),e._v(" "),a("p",[e._v("Các server này giao tiếp với nhau để trao đổi thông tin và giao tiếp với mạng bên ngoài để thực hiện các yêu cầu. Khi có lỗi xảy ra các dịch vụ trong cluster hoạt động tương tác với nhau để duy trì tính ổn định và độ sẵn sàng cao cho hệ thống.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Cluster")]),e._v(" : một hệ thống song song và được phân phối bởi một nhóm các server dành riêng để chạy những ứng dụng đặc biệt nào đó và kết nối với nhau để cung cấp khả năng chịu lỗi ("),a("code",[e._v("faul tolerance")]),e._v(") và "),a("code",[e._v("load balance")]),e._v(". Cluster dùng để cung cấp tính luôn sẵn sàng cho việc truy cập")]),e._v(" "),a("li",[a("strong",[e._v("Node")]),e._v(" : Là một server thuộc một Cluster nào đó mà trên đó các ứng dụng và Cluster service được cài đặt")]),e._v(" "),a("li",[a("strong",[e._v("Failover")]),e._v(" :  Quá trình failover có thể xảy ra một cách tự động. Khi một node trong Cluster bị hỏng, các resource group của nó sẽ được chuyển tới một hay nhiều node trong Cluster mà còn hoạt động được. Quá trình tự động failover tương tự như lập kế hoạch cho việc tái chỉ định quyền sở hữu các resource.")])]),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://kipalog.kaopiz.com/posts/Cac-mo-hinh-database-nen-biet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Các mô hình database nên biết"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://kipalog.com/posts/Cau-hinh-Galera-server-cho-MariaDB",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cấu hình Galera server cho MariaDB"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://acmeextension.com/mysql-table-partitioning/",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Step-by-Step Guide to Create Partitions on MySQL table"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.quora.com/Whats-the-difference-between-sharding-DB-tables-and-partitioning-them",target:"_blank",rel:"noopener noreferrer"}},[e._v("What's the difference between sharding DB tables and partitioning them?"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://topdev.vn/blog/cluster-la-gi/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cluster là gì? Tổng quan về Server Clustering"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://blog.andyet.com/2014/10/01/right-database/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Choosing the right database for the job"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.citusdata.com/blog/2017/08/09/principles-of-sharding-for-relational-databases/",target:"_blank",rel:"noopener noreferrer"}},[a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://news.ycombinator.com/item?id=21486494#:~:text=Maybe%20originally%2C%20but%20lack%20of,not%20use%20foreign%20keys%20either.",target:"_blank",rel:"noopener noreferrer"}},[e._v("We do not use foreign keys (2016) (github.com/github)"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=i.exports}}]);