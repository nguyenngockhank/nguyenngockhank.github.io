(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1080:function(e,a,t){"use strict";t.r(a);var s=t(7),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"choose-a-data-storage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#choose-a-data-storage"}},[e._v("#")]),e._v(" Choose a data storage")]),e._v(" "),s("TagLinks"),e._v(" "),s("p",[e._v("There is no super storage for all cases. Here is a few of my notes about it:")]),e._v(" "),s("h1",{attrs:{id:"database-select-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#database-select-process"}},[e._v("#")]),e._v(" Database Select process")]),e._v(" "),s("p",[s("img",{attrs:{src:t(562),alt:"choose-db-process"}})]),e._v(" "),s("p",[s("a",{attrs:{href:"https://twitter.com/alexxubyte/status/1653785124474064897/photo/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Original Tweet"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"polygot-persistence"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#polygot-persistence"}},[e._v("#")]),e._v(" Polygot Persistence")]),e._v(" "),s("p",[s("img",{attrs:{src:t(563),alt:"Polygot Database"}})]),e._v(" "),s("p",[e._v("Polyglot persistence is about using different data storage technologies to handle varying data storage needs.")]),e._v(" "),s("p",[e._v("Polyglot persistence can apply across an enterprise or within a single application.")]),e._v(" "),s("p",[e._v("Encapsulating data access into services reduces the impact of data storage choices on other parts of a system.")]),e._v(" "),s("p",[e._v("Adding more data storage technologies increases complexity in programming and operations, so the advantages of a good data storage fit need to be weighed against this complexity.")]),e._v(" "),s("h2",{attrs:{id:"mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[e._v("#")]),e._v(" MySql")]),e._v(" "),s("p",[e._v("A unique design characteristic of MySQL is the seperation of query processing and other server tasks from storage engine. This seperation of concerns let you to trade of various features without changing your data model")]),e._v(" "),s("h3",{attrs:{id:"innodb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#innodb"}},[e._v("#")]),e._v(" InnoDB")]),e._v(" "),s("ul",[s("li",[e._v("The default transactional storage engine for MySQL and the most important/widely used.")]),e._v(" "),s("li",[e._v("InnoDB uses "),s("strong",[e._v("Multiversion Concurrency Control (MVCC)")]),e._v(" to archive high concurrency.")]),e._v(" "),s("li",[e._v("The advantages of MVCC is the increased concurrency. The drawback is the additional storage and maintenance work.")])]),e._v(" "),s("h3",{attrs:{id:"myisam"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#myisam"}},[e._v("#")]),e._v(" MyISAM")]),e._v(" "),s("ul",[s("li",[e._v("This is the original, and oldest.")]),e._v(" "),s("li",[s("strong",[e._v("It doesn't support transaction")]),e._v(".")]),e._v(" "),s("li",[e._v("Its design is optimized more for speed and compact data storage.")])]),e._v(" "),s("h3",{attrs:{id:"the-archive-engine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-archive-engine"}},[e._v("#")]),e._v(" The Archive Engine")]),e._v(" "),s("ul",[s("li",[e._v("Not a transactional storage engine")]),e._v(" "),s("li",[e._v("simply optimmized for high-speed inserting and compressed storage.")]),e._v(" "),s("li",[e._v("The best for "),s("strong",[e._v("Logging")]),e._v(" and "),s("strong",[e._v("Data acquisition")]),e._v(" (e.g: crawl data)")])]),e._v(" "),s("h3",{attrs:{id:"the-csv-engine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-csv-engine"}},[e._v("#")]),e._v(" The CSV Engine")]),e._v(" "),s("ul",[s("li",[e._v("helpful as data interchange format")]),e._v(" "),s("li",[e._v("tables can be constructed from CSV files automatically")]),e._v(" "),s("li",[e._v("allow access to the files from other programs")])]),e._v(" "),s("h3",{attrs:{id:"the-memory-engine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-memory-engine"}},[e._v("#")]),e._v(" The memory engine")]),e._v(" "),s("ul",[s("li",[e._v("formerly called "),s("em",[e._v("HEAP")]),e._v(" tables stores in memory")])]),e._v(" "),s("h2",{attrs:{id:"based-on-cap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#based-on-cap"}},[e._v("#")]),e._v(" Based on CAP")]),e._v(" "),s("p",[s("img",{attrs:{src:t(564),alt:"Based on CAP"}})]),e._v(" "),s("p",[e._v("Master - Replicas => AP")]),e._v(" "),s("h2",{attrs:{id:"redis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[e._v("#")]),e._v(" Redis")]),e._v(" "),s("p",[e._v("Here are few use cases when we should use Redis:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Session cache")]),e._v(": stores as hashes. Because user sessions generally have a lot of I/O.")]),e._v(" "),s("li",[s("strong",[e._v("User Profiles, Preferences")])]),e._v(" "),s("li",[s("strong",[e._v("Shopping Cart Data")])]),e._v(" "),s("li",[s("strong",[e._v("Application cache")]),e._v(": few data applications store/access frequently or rarely change.")]),e._v(" "),s("li",[s("strong",[e._v("Distributed lists")]),e._v(": some things could be "),s("em",[e._v("top 100 newest list")]),e._v(", "),s("em",[e._v("top 100 hottest list")]),e._v(",...")]),e._v(" "),s("li",[s("strong",[e._v("Keep stats")]),e._v(": works with counters")]),e._v(" "),s("li",[s("strong",[e._v("Queues and Pub/Sub")]),e._v(": Redis queues and pub/sub channels can use to exchange massages, enabling features such as background workers.")])]),e._v(" "),s("h2",{attrs:{id:"cassandra"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cassandra"}},[e._v("#")]),e._v(" Cassandra")]),e._v(" "),s("p",[e._v("Cassandra is a distributed database designed to provide extremely "),s("strong",[e._v("high levels of availability")]),e._v(" and "),s("strong",[e._v("virtually unlimited scalability")]),e._v(".")]),e._v(" "),s("ul",[s("li",[e._v("Messaging - many companies use Cassandra for Messaging. More: "),s("a",{attrs:{href:"https://www.youtube.com/watch?v=86olupkuLlU&ab_channel=HusseinNasser",target:"_blank",rel:"noopener noreferrer"}},[e._v("Why Discord Moved from MongoDB to Apache Cassandra"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("Internet of things")]),e._v(" "),s("li",[e._v("Social Media Analytics and Recommendation Engine")])]),e._v(" "),s("h2",{attrs:{id:"neo4j"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#neo4j"}},[e._v("#")]),e._v(" Neo4j")]),e._v(" "),s("ul",[s("li",[e._v("Connected Data")]),e._v(" "),s("li",[e._v("Routing, Dispatch, and location-based services")]),e._v(" "),s("li",[e._v("Recommendation Engines\n"),s("ul",[s("li",[e._v("Collaborative Filtering based Recommendation")]),e._v(" "),s("li",[e._v("Personalized Recommendation")])])])]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("RDBMS")]),e._v(" "),s("th",[e._v("GraphDB")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("Tabular form")]),e._v(" "),s("td",[e._v("Graph form")])]),e._v(" "),s("tr",[s("td",[e._v("Stores highly structured data")]),e._v(" "),s("td",[e._v("Maintains semi structured data")])]),e._v(" "),s("tr",[s("td",[e._v("Depends on key contraints")]),e._v(" "),s("td",[e._v("Relationships are first-class citizends. Constraints can be represents using relationships")])]),e._v(" "),s("tr",[s("td",[e._v("Data is normalized, meaning lots of joins, affecting speed")]),e._v(" "),s("td",[e._v("Better performance (?)")])]),e._v(" "),s("tr",[s("td",[e._v("Expensive with join operations")]),e._v(" "),s("td",[e._v("Eliminates the need for an expensive search / match computation")])])])]),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.ucssolutions.com/blog/connecting-the-dots-with-neo4j/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Read more"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"elasticsearch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elasticsearch"}},[e._v("#")]),e._v(" Elasticsearch")]),e._v(" "),s("ul",[s("li",[e._v("Indexing & full text search.")]),e._v(" "),s("li",[e._v("Logging & Logs Analysis. Elasticsearch is a popular log and log analysis tool.")]),e._v(" "),s("li",[e._v("Search & Query. Elasticsearch's basic full-text search and analytics engine can integrate a wide range of queries, including structured, unstructured, geographical, and metric searches.")]),e._v(" "),s("li",[e._v("Metrics Analysis.")])]),e._v(" "),s("p",[e._v("https://www.guru99.com/nosql-tutorial.html")]),e._v(" "),s("p",[e._v("https://blog.bytebytego.com/p/understanding-database-types")])],1)}),[],!1,null,null,null);a.default=r.exports},562:function(e,a,t){e.exports=t.p+"assets/img/choose-db.07a9b05d.jpeg"},563:function(e,a,t){e.exports=t.p+"assets/img/polyglot.cdb5e015.png"},564:function(e,a,t){e.exports=t.p+"assets/img/db-cap.dc9d277f.png"}}]);