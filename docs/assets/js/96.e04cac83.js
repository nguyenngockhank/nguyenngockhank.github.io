(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1428:function(e,t,a){"use strict";a.r(t);var r=a(7),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"nosql-overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nosql-overview"}},[e._v("#")]),e._v(" NoSQL Overview")]),e._v(" "),r("TagLinks"),e._v(" "),r("h2",{attrs:{id:"definition"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#definition"}},[e._v("#")]),e._v(" Definition")]),e._v(" "),r("p",[r("em",[e._v("There's no strong definition of the concept out there, no trademarks, no standard group, not even a manifesto.")])]),e._v(" "),r("p",[e._v("Some characteristics are common amongst these databases, but none are definitional.")]),e._v(" "),r("ul",[r("li",[e._v("Not using the relational model (nor the SQL language)")]),e._v(" "),r("li",[e._v("Open source")]),e._v(" "),r("li",[e._v("Designed to run on large clusters")]),e._v(" "),r("li",[e._v("Based on the needs of 21st century web properties")]),e._v(" "),r("li",[e._v("No schema, allowing fields to be added to any record without controls")])]),e._v(" "),r("h2",{attrs:{id:"why-nosql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#why-nosql"}},[e._v("#")]),e._v(" Why NoSql?")]),e._v(" "),r("ul",[r("li",[e._v("Relational databases have been a successful technology for twenty years, providing persistence, concurrency control, and an integration mechanism.")]),e._v(" "),r("li",[e._v("Application developers have been frustrated with the impedance mismatch between the relational model and the in-memory data structures.")]),e._v(" "),r("li",[e._v("There is a movement away from using databases as integration points towards encapsulating databases within applications and integrating through services.")]),e._v(" "),r("li",[e._v("The vital factor for a change in data storage was the need to support large volumes of data by running on clusters. Relational databases are not designed to run efficiently on clusters.")]),e._v(" "),r("li",[e._v("NoSQL is an accidental neologism. There is no prescriptive definition—all you can make is an observation of common characteristics.")]),e._v(" "),r("li",[e._v("The most important result of the rise of NoSQL is Polyglot Persistence.")])]),e._v(" "),r("h2",{attrs:{id:"data-models"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#data-models"}},[e._v("#")]),e._v(" Data Models")]),e._v(" "),r("p",[r("img",{attrs:{src:a(711),alt:"Data Model"}})]),e._v(" "),r("ul",[r("li",[e._v("Document")]),e._v(" "),r("li",[e._v("Column-family")]),e._v(" "),r("li",[e._v("Key-value")]),e._v(" "),r("li",[e._v("Graph")])]),e._v(" "),r("h2",{attrs:{id:"aggregate-data-model"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aggregate-data-model"}},[e._v("#")]),e._v(" Aggregate Data Model")]),e._v(" "),r("p",[e._v("An aggregate is a collection of data that we interact with as a unit. Aggregates form the boundaries for ACID operations with the database.")]),e._v(" "),r("p",[e._v("Key-value, document, and column-family databases can all be seen as forms of aggregate-oriented database.")]),e._v(" "),r("p",[e._v("Aggregates make it easier for the database to manage data storage over clusters.")]),e._v(" "),r("p",[e._v("Aggregate-oriented databases "),r("strong",[e._v("work best when most data interaction is done with the same aggregate")]),e._v("; aggregate-ignorant databases are better when interactions use data organized in many different formations.")]),e._v(" "),r("h2",{attrs:{id:"distribution-models"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#distribution-models"}},[e._v("#")]),e._v(" Distribution Models")]),e._v(" "),r("p",[e._v("There are two styles of distributing data:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Sharding distributes")]),e._v(" different data across multiple servers, so each server acts as the single source for a subset of data.")]),e._v(" "),r("li",[r("strong",[e._v("Replication")]),e._v(" copies data across multiple servers, so each bit of data can be found in multiple places.")])]),e._v(" "),r("p",[e._v("A system may use either or both techniques.")]),e._v(" "),r("p",[e._v("Replication comes in two forms:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Master-slave replication")]),e._v(" makes one node the authoritative copy that handles writes while slaves synchronize with the master and may handle reads.")]),e._v(" "),r("li",[r("strong",[e._v("Peer-to-peer replication")]),e._v(" allows writes to any node; the nodes coordinate to synchronize their copies of the data.")])]),e._v(" "),r("p",[e._v("Master-slave replication reduces the chance of update conflicts but peer-to-peer replication avoids loading all writes onto a single point of failure.")]),e._v(" "),r("h2",{attrs:{id:"row-oriented-vs-column-oriented"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#row-oriented-vs-column-oriented"}},[e._v("#")]),e._v(" Row oriented vs. Column oriented")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"left"}},[e._v("Row oriented DB")]),e._v(" "),r("th",{staticStyle:{"text-align":"left"}},[e._v("Column oriented DB")])])]),e._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("stored and retrieved one row at a time and hence could read unnecessary data if some of the data in a row are required.")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("stored and retrieve in columns and hence it can only able to read only the relevant data if required.")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("Records are easy to read and write.")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("Read and write operations are slower as compared to row-oriented.")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("best suited for "),r("strong",[e._v("online transaction system")]),e._v(".")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("best suited for "),r("strong",[e._v("online analytical processing")]),e._v(".")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("These are not efficient in performing operations applicable to the entire datasets and hence aggregation in row-oriented is an expensive job or operations.")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("These are efficient in performing operations applicable to the entire dataset and hence enables aggregation over many rows and columns.")])]),e._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"left"}},[e._v("Typical compression mechanisms which provide less efficient result than what we achieve from column-oriented data stores.")]),e._v(" "),r("td",{staticStyle:{"text-align":"left"}},[e._v("These type of data stores basically permits high compression rates due to little distinct or unique values in columns.")])])])]),e._v(" "),r("h2",{attrs:{id:"comparison"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#comparison"}},[e._v("#")]),e._v(" Comparison")]),e._v(" "),r("h3",{attrs:{id:"sql-vs-nosql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sql-vs-nosql"}},[e._v("#")]),e._v(" Sql vs. NoSql")]),e._v(" "),r("p",[r("img",{attrs:{src:a(712),alt:"SQL vs NoSQL"}})]),e._v(" "),r("table",[r("thead",[r("tr",[r("th"),e._v(" "),r("th",[e._v("NoSQL")]),e._v(" "),r("th",[e._v("SQL")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[e._v("Model")])]),e._v(" "),r("td",[e._v("Non-relational")]),e._v(" "),r("td",[e._v("Relational")])]),e._v(" "),r("tr",[r("td"),e._v(" "),r("td",[e._v("Stores data in JSON documents. key/value pairs, wide column stores, or graphs")]),e._v(" "),r("td",[e._v("Stores data in a table")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Data")])]),e._v(" "),r("td",[e._v("Offers flexibility as not every record needs to store the same properties")]),e._v(" "),r("td",[e._v("Great for solutions where every record has the same properties")])]),e._v(" "),r("tr",[r("td"),e._v(" "),r("td",[e._v("New properties can be added on the fly")]),e._v(" "),r("td",[e._v("Adding a new property may require altering schemas or backfilling data")])]),e._v(" "),r("tr",[r("td"),e._v(" "),r("td",[e._v("Relationships are often captured by denormalizing data and presenting all data for an object in a single record")]),e._v(" "),r("td",[e._v("Relationships are often captured in normalized model using joins to resolve references across tables")])]),e._v(" "),r("tr",[r("td"),e._v(" "),r("td",[e._v("Good for semi-structured, complex or nested data")]),e._v(" "),r("td",[e._v("Good for structured data")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Schema")])]),e._v(" "),r("td",[e._v("Dynamic or flexible schemas")]),e._v(" "),r("td",[e._v("Strict schema")])]),e._v(" "),r("tr",[r("td"),e._v(" "),r("td",[e._v("Database is schema-agnostic and the schema is dictated by the application. This allows for agility and highly itertive development")]),e._v(" "),r("td",[e._v("Schema must be maintained and kept in sync between application and database")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Transactions")])]),e._v(" "),r("td",[e._v("ACID transaction support varies per solution")]),e._v(" "),r("td",[e._v("Supports ACID transactions")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Consistency & Availability")])]),e._v(" "),r("td",[e._v("Eventual to strong consistency supported, depending on solution")]),e._v(" "),r("td",[e._v("Strong consistency enforced")])]),e._v(" "),r("tr",[r("td"),e._v(" "),r("td",[e._v("Consistency, availability, and performance can be traded to meet the needs of the application (CAP theorem)")]),e._v(" "),r("td",[e._v("Consistency is prioritized over availability and performance")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Performance")])]),e._v(" "),r("td",[e._v("Performance can be maximized by reducing consistency, if needed")]),e._v(" "),r("td",[e._v("Insert and update performance is dependent upon how fast a write is committed, as strong consistency is enforced. Performance can be maximized by using scaling up available resources and using in-memory structures.")])]),e._v(" "),r("tr",[r("td"),e._v(" "),r("td",[e._v("All information about an entity is typically in a single record, so an update can happen in one operation")]),e._v(" "),r("td",[e._v("Information about an entity may be spread across many tables or rows, requiring many joins to complete an update or a query")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("Scale")])]),e._v(" "),r("td",[e._v("Scaling is typically achieved horizontally with data partitioned to span servers")]),e._v(" "),r("td",[e._v("Scaling is typically achieved vertically with more server resources")])])])]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("SQL")]),e._v(": Structured Query Language")]),e._v(" "),r("li",[r("strong",[e._v("UnQL")]),e._v(": Unstructured Query Language")]),e._v(" "),r("li",[r("strong",[e._v("ACID")]),e._v(": Atomicity, Consistency, Isolation and Durability")]),e._v(" "),r("li",[r("strong",[e._v("CAP")]),e._v(": Consistency, Availability and Partition tolerance")])]),e._v(" "),r("h2",{attrs:{id:"references"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://martinfowler.com/articles/nosqlKeyPoints.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Key Points from NoSQL Distilled"),r("OutboundLink")],1)])]),e._v(" "),r("h3",{attrs:{id:"introduction-to-nosql-martin-fowler"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-nosql-martin-fowler"}},[e._v("#")]),e._v(" Introduction to NoSQL - Martin Fowler")]),e._v(" "),r("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/qI_g07C_Q5I",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})],1)}),[],!1,null,null,null);t.default=o.exports},711:function(e,t,a){e.exports=a.p+"assets/img/nosql-data-model.85556a21.png"},712:function(e,t,a){e.exports=a.p+"assets/img/sql-nosql.8a9a364b.png"}}]);