(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{406:function(e,t,a){e.exports=a.p+"assets/img/image--033.e1a6c8eb.jpg"},407:function(e,t,a){e.exports=a.p+"assets/img/image--036.8f58626b.jpg"},408:function(e,t,a){e.exports=a.p+"assets/img/image--040.413484e3.jpg"},505:function(e,t,a){e.exports=a.p+"assets/img/nosql-data-model.85556a21.png"},506:function(e,t,a){e.exports=a.p+"assets/img/sql-nosql.8a9a364b.png"},685:function(e,t,a){"use strict";a.r(t);var s=a(7),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"nosql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nosql"}},[e._v("#")]),e._v(" NoSQL")]),e._v(" "),s("h2",{attrs:{id:"definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#definition"}},[e._v("#")]),e._v(" Definition")]),e._v(" "),s("p",[s("em",[e._v("There's no strong definition of the concept out there, no trademarks, no standard group, not even a manifesto.")])]),e._v(" "),s("p",[e._v("Some characteristics are common amongst these databases, but none are definitional.")]),e._v(" "),s("ul",[s("li",[e._v("Not using the relational model (nor the SQL language)")]),e._v(" "),s("li",[e._v("Open source")]),e._v(" "),s("li",[e._v("Designed to run on large clusters")]),e._v(" "),s("li",[e._v("Based on the needs of 21st century web properties")]),e._v(" "),s("li",[e._v("No schema, allowing fields to be added to any record without controls")])]),e._v(" "),s("h2",{attrs:{id:"why-nosql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why-nosql"}},[e._v("#")]),e._v(" Why NoSql?")]),e._v(" "),s("ul",[s("li",[e._v("Relational databases have been a successful technology for twenty years, providing persistence, concurrency control, and an integration mechanism.")]),e._v(" "),s("li",[e._v("Application developers have been frustrated with the impedance mismatch between the relational model and the in-memory data structures.")]),e._v(" "),s("li",[e._v("There is a movement away from using databases as integration points towards encapsulating databases within applications and integrating through services.")]),e._v(" "),s("li",[e._v("The vital factor for a change in data storage was the need to support large volumes of data by running on clusters. Relational databases are not designed to run efficiently on clusters.")]),e._v(" "),s("li",[e._v("NoSQL is an accidental neologism. There is no prescriptive definition—all you can make is an observation of common characteristics.")]),e._v(" "),s("li",[e._v("The most important result of the rise of NoSQL is Polyglot Persistence.")])]),e._v(" "),s("h2",{attrs:{id:"data-models"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-models"}},[e._v("#")]),e._v(" Data Models")]),e._v(" "),s("p",[s("img",{attrs:{src:a(505),alt:"Data Model"}})]),e._v(" "),s("ul",[s("li",[e._v("Document")]),e._v(" "),s("li",[e._v("Column-family")]),e._v(" "),s("li",[e._v("Key-value")]),e._v(" "),s("li",[e._v("Graph")])]),e._v(" "),s("h2",{attrs:{id:"aggregate-data-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aggregate-data-model"}},[e._v("#")]),e._v(" Aggregate Data Model")]),e._v(" "),s("p",[e._v("An aggregate is a collection of data that we interact with as a unit. Aggregates form the boundaries for ACID operations with the database.")]),e._v(" "),s("p",[e._v("Key-value, document, and column-family databases can all be seen as forms of aggregate-oriented database.")]),e._v(" "),s("p",[e._v("Aggregates make it easier for the database to manage data storage over clusters.")]),e._v(" "),s("p",[e._v("Aggregate-oriented databases "),s("strong",[e._v("work best when most data interaction is done with the same aggregate")]),e._v("; aggregate-ignorant databases are better when interactions use data organized in many different formations.")]),e._v(" "),s("h2",{attrs:{id:"distribution-models"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#distribution-models"}},[e._v("#")]),e._v(" Distribution Models")]),e._v(" "),s("p",[e._v("There are two styles of distributing data:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Sharding distributes")]),e._v(" different data across multiple servers, so each server acts as the single source for a subset of data.")]),e._v(" "),s("li",[s("strong",[e._v("Replication")]),e._v(" copies data across multiple servers, so each bit of data can be found in multiple places.")])]),e._v(" "),s("p",[e._v("A system may use either or both techniques.")]),e._v(" "),s("p",[e._v("Replication comes in two forms:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Master-slave replication")]),e._v(" makes one node the authoritative copy that handles writes while slaves synchronize with the master and may handle reads.")]),e._v(" "),s("li",[s("strong",[e._v("Peer-to-peer replication")]),e._v(" allows writes to any node; the nodes coordinate to synchronize their copies of the data.")])]),e._v(" "),s("p",[e._v("Master-slave replication reduces the chance of update conflicts but peer-to-peer replication avoids loading all writes onto a single point of failure.")]),e._v(" "),s("h2",{attrs:{id:"row-oriented-vs-column-oriented"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#row-oriented-vs-column-oriented"}},[e._v("#")]),e._v(" Row oriented vs. Column oriented")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[e._v("Row oriented DB")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Column oriented DB")])])]),e._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("stored and retrieved one row at a time and hence could read unnecessary data if some of the data in a row are required.")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("stored and retrieve in columns and hence it can only able to read only the relevant data if required.")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("Records are easy to read and write.")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Read and write operations are slower as compared to row-oriented.")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("best suited for "),s("strong",[e._v("online transaction system")]),e._v(".")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("best suited for "),s("strong",[e._v("online analytical processing")]),e._v(".")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("These are not efficient in performing operations applicable to the entire datasets and hence aggregation in row-oriented is an expensive job or operations.")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("These are efficient in performing operations applicable to the entire dataset and hence enables aggregation over many rows and columns.")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[e._v("Typical compression mechanisms which provide less efficient result than what we achieve from column-oriented data stores.")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("These type of data stores basically permits high compression rates due to little distinct or unique values in columns.")])])])]),e._v(" "),s("h2",{attrs:{id:"comparison"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comparison"}},[e._v("#")]),e._v(" Comparison")]),e._v(" "),s("h3",{attrs:{id:"sql-vs-nosql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-vs-nosql"}},[e._v("#")]),e._v(" Sql vs. NoSql")]),e._v(" "),s("p",[s("img",{attrs:{src:a(506),alt:"SQL vs NoSQL"}})]),e._v(" "),s("table",[s("thead",[s("tr",[s("th"),e._v(" "),s("th",[e._v("NoSQL")]),e._v(" "),s("th",[e._v("SQL")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[e._v("Model")])]),e._v(" "),s("td",[e._v("Non-relational")]),e._v(" "),s("td",[e._v("Relational")])]),e._v(" "),s("tr",[s("td"),e._v(" "),s("td",[e._v("Stores data in JSON documents. key/value pairs, wide column stores, or graphs")]),e._v(" "),s("td",[e._v("Stores data in a table")])]),e._v(" "),s("tr",[s("td",[s("strong",[e._v("Data")])]),e._v(" "),s("td",[e._v("Offers flexibility as not every record needs to store the same properties")]),e._v(" "),s("td",[e._v("Great for solutions where every record has the same properties")])]),e._v(" "),s("tr",[s("td"),e._v(" "),s("td",[e._v("New properties can be added on the fly")]),e._v(" "),s("td",[e._v("Adding a new property may require altering schemas or backfilling data")])]),e._v(" "),s("tr",[s("td"),e._v(" "),s("td",[e._v("Relationships are often captured by denormalizing data and presenting all data for an object in a single record")]),e._v(" "),s("td",[e._v("Relationships are often captured in normalized model using joins to resolve references across tables")])]),e._v(" "),s("tr",[s("td"),e._v(" "),s("td",[e._v("Good for semi-structured, complex or nested data")]),e._v(" "),s("td",[e._v("Good for structured data")])]),e._v(" "),s("tr",[s("td",[s("strong",[e._v("Schema")])]),e._v(" "),s("td",[e._v("Dynamic or flexible schemas")]),e._v(" "),s("td",[e._v("Strict schema")])]),e._v(" "),s("tr",[s("td"),e._v(" "),s("td",[e._v("Database is schema-agnostic and the schema is dictated by the application. This allows for agility and highly itertive development")]),e._v(" "),s("td",[e._v("Schema must be maintained and kept in sync between application and database")])]),e._v(" "),s("tr",[s("td",[s("strong",[e._v("Transactions")])]),e._v(" "),s("td",[e._v("ACID transaction support varies per solution")]),e._v(" "),s("td",[e._v("Supports ACID transactions")])]),e._v(" "),s("tr",[s("td",[s("strong",[e._v("Consistency & Availability")])]),e._v(" "),s("td",[e._v("Eventual to strong consistency supported, depending on solution")]),e._v(" "),s("td",[e._v("Strong consistency enforced")])]),e._v(" "),s("tr",[s("td"),e._v(" "),s("td",[e._v("Consistency, availability, and performance can be traded to meet the needs of the application (CAP theorem)")]),e._v(" "),s("td",[e._v("Consistency is prioritized over availability and performance")])]),e._v(" "),s("tr",[s("td",[s("strong",[e._v("Performance")])]),e._v(" "),s("td",[e._v("Performance can be maximized by reducing consistency, if needed")]),e._v(" "),s("td",[e._v("Insert and update performance is dependent upon how fast a write is committed, as strong consistency is enforced. Performance can be maximized by using scaling up available resources and using in-memory structures.")])]),e._v(" "),s("tr",[s("td"),e._v(" "),s("td",[e._v("All information about an entity is typically in a single record, so an update can happen in one operation")]),e._v(" "),s("td",[e._v("Information about an entity may be spread across many tables or rows, requiring many joins to complete an update or a query")])]),e._v(" "),s("tr",[s("td",[s("strong",[e._v("Scale")])]),e._v(" "),s("td",[e._v("Scaling is typically achieved horizontally with data partitioned to span servers")]),e._v(" "),s("td",[e._v("Scaling is typically achieved vertically with more server resources")])])])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("SQL")]),e._v(": Structured Query Language")]),e._v(" "),s("li",[s("strong",[e._v("UnQL")]),e._v(": Unstructured Query Language")]),e._v(" "),s("li",[s("strong",[e._v("ACID")]),e._v(": Atomicity, Consistency, Isolation and Durability")]),e._v(" "),s("li",[s("strong",[e._v("CAP")]),e._v(": Consistency, Availability and Partition tolerance")])]),e._v(" "),s("h3",{attrs:{id:"oracle-vs-riak-db"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oracle-vs-riak-db"}},[e._v("#")]),e._v(" Oracle vs. Riak DB")]),e._v(" "),s("p",[s("img",{attrs:{src:a(406),alt:"Oracle vs. Key-Value Database"}})]),e._v(" "),s("h3",{attrs:{id:"oracle-vs-mongodb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oracle-vs-mongodb"}},[e._v("#")]),e._v(" Oracle vs. MongoDB")]),e._v(" "),s("p",[s("img",{attrs:{src:a(407),alt:"Oracle vs. MongoDB"}})]),e._v(" "),s("h3",{attrs:{id:"rdbms-vs-cassandra"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rdbms-vs-cassandra"}},[e._v("#")]),e._v(" RDBMS vs. Cassandra")]),e._v(" "),s("p",[s("img",{attrs:{src:a(408),alt:"RDBMS vs. Cassandra"}})]),e._v(" "),s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://martinfowler.com/articles/nosqlKeyPoints.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Key Points from NoSQL Distilled"),s("OutboundLink")],1)])]),e._v(" "),s("h3",{attrs:{id:"introduction-to-nosql-martin-fowler"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-nosql-martin-fowler"}},[e._v("#")]),e._v(" Introduction to NoSQL - Martin Fowler")]),e._v(" "),s("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/qI_g07C_Q5I",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}),[],!1,null,null,null);t.default=r.exports}}]);