(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1013:function(e,t,a){e.exports=a.p+"assets/img/hld.adbbf5f1.png"},1014:function(e,t,a){e.exports=a.p+"assets/img/detail.3ccf11d8.png"},1642:function(e,t,a){"use strict";a.r(t);var s=a(7),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"design-pastebin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#design-pastebin"}},[e._v("#")]),e._v(" Design Pastebin")]),e._v(" "),s("p",[e._v("Let's design a Pastebin like web service, where users can store plain text. Users of the service will enter\na piece of text and get a randomly generated URL to access it. Similar Services: pastebin.com,\npasted.co, chopapp.com")]),e._v(" "),s("p",[e._v("Difficulty Level: Easy")]),e._v(" "),s("h2",{attrs:{id:"_1-what-is-pastebin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-what-is-pastebin"}},[e._v("#")]),e._v(" 1. What is Pastebin?")]),e._v(" "),s("p",[e._v("Pastebin like services enable users to store plain text or images over the network (typically the Internet)\nand generate unique URLs to access the uploaded data. Such services are also used to share data over\nthe network quickly, as users would just need to pass the URL to let other users see it.")]),e._v(" "),s("p",[e._v("If you haven’t used "),s("a",{attrs:{href:"https://pastebin.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("pastebin.com"),s("OutboundLink")],1),e._v(" before, please try creating a new ‘Paste’ there and spend some time\ngoing through the different options their service offers. This will help you a lot in understanding this\nchapter.")]),e._v(" "),s("h2",{attrs:{id:"_2-requirements-and-goals-of-the-system"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-requirements-and-goals-of-the-system"}},[e._v("#")]),e._v(" 2. Requirements and Goals of the System")]),e._v(" "),s("p",[e._v("Our Pastebin service should meet the following requirements:")]),e._v(" "),s("h3",{attrs:{id:"functional-requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#functional-requirements"}},[e._v("#")]),e._v(" Functional Requirements:")]),e._v(" "),s("ol",[s("li",[e._v("Users should be able to upload or “paste” their data and get a unique URL to access it.")]),e._v(" "),s("li",[e._v("Users will only be able to upload text.")]),e._v(" "),s("li",[e._v("Data and links will expire after a specific timespan automatically; users should also be able to\nspecify expiration time.")]),e._v(" "),s("li",[e._v("Users should optionally be able to pick a custom alias for their paste.")])]),e._v(" "),s("h3",{attrs:{id:"non-functional-requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#non-functional-requirements"}},[e._v("#")]),e._v(" Non-Functional Requirements:")]),e._v(" "),s("ol",[s("li",[e._v("The system should be highly reliable, any data uploaded should not be lost.")]),e._v(" "),s("li",[e._v("The system should be highly available. This is required because if our service is down, users\nwill not be able to access their Pastes.")]),e._v(" "),s("li",[e._v("Users should be able to access their Pastes in real-time with minimum latency.")]),e._v(" "),s("li",[e._v("Paste links should not be guessable (not predictable).")])]),e._v(" "),s("h3",{attrs:{id:"extended-requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extended-requirements"}},[e._v("#")]),e._v(" Extended Requirements:")]),e._v(" "),s("ol",[s("li",[e._v("Analytics, e.g., how many times a paste was accessed?")]),e._v(" "),s("li",[e._v("Our service should also be accessible through REST APIs by other services.")])]),e._v(" "),s("h2",{attrs:{id:"_3-some-design-considerations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-some-design-considerations"}},[e._v("#")]),e._v(" 3. Some Design Considerations")]),e._v(" "),s("p",[e._v("Pastebin shares some requirements with URL Shortening service, but there are some additional design\nconsiderations we should keep in mind.")]),e._v(" "),s("p",[s("strong",[e._v("What should be the limit on the amount of text user can paste at a time?")]),e._v(" We can limit users not to\nhave Pastes bigger than 10MB to stop the abuse of the service.")]),e._v(" "),s("p",[s("strong",[e._v("Should we impose size limits on custom URLs?")]),e._v(" Since our service supports custom URLs, users can\npick any URL that they like, but providing a custom URL is not mandatory. However, it is reasonable\n(and often desirable) to impose a size limit on custom URLs, so that we have a consistent URL\ndatabase.")]),e._v(" "),s("h2",{attrs:{id:"_4-capacity-estimation-and-constraints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-capacity-estimation-and-constraints"}},[e._v("#")]),e._v(" 4. Capacity Estimation and Constraints")]),e._v(" "),s("p",[e._v("Our services will be read-heavy; there will be more read requests compared to new Pastes creation. We\ncan assume a 5:1 ratio between read and write.")]),e._v(" "),s("p",[s("strong",[e._v("Traffic estimates")]),e._v(": Pastebin services are not expected to have traffic similar to Twitter or Facebook,\nlet’s assume here that we get one million new pastes added to our system every day. This leaves us with\nfive million reads per day.")]),e._v(" "),s("p",[e._v("New Pastes per second:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("1M / (24 hours * 3600 seconds) ~= 12 pastes/sec\n")])])]),s("p",[e._v("Paste reads per second:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("5M / (24 hours * 3600 seconds) ~= 58 reads/sec\n")])])]),s("p",[s("strong",[e._v("Storage estimates")]),e._v(": Users can upload maximum 10MB of data; commonly Pastebin like services are\nused to share source code, configs or logs. Such texts are not huge, so let’s assume that each paste on\naverage contains 10KB.")]),e._v(" "),s("p",[e._v("At this rate, we will be storing 10GB of data per day.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("1M * 10KB => 10 GB/day\n")])])]),s("p",[e._v("If we want to store this data for ten years we would need the total storage capacity of 36TB.\nWith 1M pastes every day we will have 3.6 billion Pastes in 10 years. We need to generate and store\nkeys to uniquely identify these pastes. If we use base64 encoding ([A-Z, a-z, 0-9, ., -]) we would need\nsix letters strings:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("64^6 ~= 68.7 billion unique strings\n")])])]),s("p",[e._v("If it takes one byte to store one character, total size required to store 3.6B keys would be:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("3.6B * 6 => 22 GB\n")])])]),s("p",[e._v("22GB is negligible compared to 36TB. To keep some margin, we will assume a 70% capacity model\n(meaning we don’t want to use more than 70% of our total storage capacity at any point), which raises\nour storage needs to 51.4TB.")]),e._v(" "),s("p",[s("strong",[e._v("Bandwidth estimates")]),e._v(": For write requests, we expect 12 new pastes per second, resulting in 120KB of\ningress per second.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("12 * 10KB => 120 KB/s\n")])])]),s("p",[e._v("As for the read request, we expect 58 requests per second. Therefore, total data egress (sent to users)\nwill be 0.6 MB/s.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("58 * 10KB => 0.6 MB/s \n")])])]),s("p",[e._v("Although total ingress and egress are not big, we should keep these numbers in mind while designing\nour service.")]),e._v(" "),s("p",[s("strong",[e._v("Memory estimates")]),e._v(": We can cache some of the hot pastes that are frequently accessed. Following the\n80-20 rule, meaning 20% of hot pastes generate 80% of traffic, we would like to cache these 20%\npastes")]),e._v(" "),s("p",[e._v("Since we have 5M read requests per day, to cache 20% of these requests, we would need:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("0.2 * 5M * 10KB ~= 10 GB\n")])])]),s("h2",{attrs:{id:"_5-system-apis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-system-apis"}},[e._v("#")]),e._v(" 5. System APIs")]),e._v(" "),s("p",[e._v("We can have SOAP or REST APIs to expose the functionality of our service. Following could be the\ndefinitions of the APIs to create/retrieve/delete Pastes:")]),e._v(" "),s("p",[s("code",[e._v("addPaste(api_dev_key, paste_data, custom_url=None user_name=None, paste_name=None, expire_date=None)")])]),e._v(" "),s("p",[s("strong",[e._v("Parameters")]),e._v(":")]),e._v(" "),s("ul",[s("li",[e._v("api_dev_key (string): The API developer key of a registered account. This will be used to, among other things, throttle users based on their allocated quota.")]),e._v(" "),s("li",[e._v("paste_data (string): Textual data of the paste.")]),e._v(" "),s("li",[e._v("custom_url (string): Optional custom URL.")]),e._v(" "),s("li",[e._v("user_name (string): Optional user name to be used to generate URL.")]),e._v(" "),s("li",[e._v("paste_name (string): Optional name of the paste")]),e._v(" "),s("li",[e._v("expire_date (string): Optional expiration date for the paste.")])]),e._v(" "),s("p",[s("strong",[e._v("Returns")]),e._v(": (string)\nA successful insertion returns the URL through which the paste can be accessed, otherwise, it will return an error code.\nSimilarly, we can have retrieve and delete Paste APIs:")]),e._v(" "),s("p",[s("code",[e._v("getPaste(api_dev_key, api_paste_key)")]),s("br"),e._v("\nWhere “api_paste_key” is a string representing the Paste Key of the paste to be retrieved. This API will return the textual data of the paste.")]),e._v(" "),s("p",[s("code",[e._v("deletePaste(api_dev_key, api_paste_key)")]),s("br"),e._v("\nA successful deletion returns ‘true’, otherwise returns ‘false’.")]),e._v(" "),s("h2",{attrs:{id:"_6-database-design"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-database-design"}},[e._v("#")]),e._v(" 6. Database Design")]),e._v(" "),s("p",[e._v("A few observations about the nature of the data we are storing:")]),e._v(" "),s("ol",[s("li",[e._v("We need to store billions of records.")]),e._v(" "),s("li",[e._v("Each metadata object we are storing would be small (less than 100 bytes).")]),e._v(" "),s("li",[e._v("Each paste object we are storing can be of medium size (it can be a few MB).")]),e._v(" "),s("li",[e._v("There are no relationships between records, except if we want to store which user created what Paste.")]),e._v(" "),s("li",[e._v("Our service is read-heavy.")])]),e._v(" "),s("h3",{attrs:{id:"database-schema"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#database-schema"}},[e._v("#")]),e._v(" Database Schema:")]),e._v(" "),s("p",[e._v("We would need two tables, one for storing information about the Pastes and the other for users’ data.")]),e._v(" "),s("p",[s("strong",[e._v("Paste")])]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Field")]),e._v(" "),s("th",[e._v("Type")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("URLHash")]),e._v(" "),s("td",[e._v("varchar(16)  PK")])]),e._v(" "),s("tr",[s("td",[e._v("ContentKey")]),e._v(" "),s("td",[e._v("varchar(512)")])]),e._v(" "),s("tr",[s("td",[e._v("ExpirationDate")]),e._v(" "),s("td",[e._v("datatime")])]),e._v(" "),s("tr",[s("td",[e._v("CreationDate")]),e._v(" "),s("td",[e._v("datetime")])])])]),e._v(" "),s("p",[s("strong",[e._v("User")])]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Field")]),e._v(" "),s("th",[e._v("Type")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("UserID")]),e._v(" "),s("td",[e._v("int  PK")])]),e._v(" "),s("tr",[s("td",[e._v("Name")]),e._v(" "),s("td",[e._v("varchar(20)")])]),e._v(" "),s("tr",[s("td",[e._v("Email")]),e._v(" "),s("td",[e._v("varchar(32)")])]),e._v(" "),s("tr",[s("td",[e._v("CreationDate")]),e._v(" "),s("td",[e._v("datetime")])]),e._v(" "),s("tr",[s("td",[e._v("LastLogin")]),e._v(" "),s("td",[e._v("datetime")])])])]),e._v(" "),s("p",[e._v("Here, ‘URlHash’ is the URL equivalent of the TinyURL and ‘ContentKey’ is the object key storing the contents of the paste.")]),e._v(" "),s("h2",{attrs:{id:"_7-high-level-design"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-high-level-design"}},[e._v("#")]),e._v(" 7. High Level Design")]),e._v(" "),s("p",[e._v("At a high level, we need an application layer that will serve all the read and write requests. Application\nlayer will talk to a storage layer to store and retrieve data. We can segregate our storage layer with one\ndatabase storing metadata related to each paste, users, etc., while the other storing the paste contents in\nsome object storage (like Amazon S3). This division of data will also allow us to scale them\nindividually.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(1013),alt:"img"}})]),e._v(" "),s("h2",{attrs:{id:"_8-component-design"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-component-design"}},[e._v("#")]),e._v(" 8. Component Design")]),e._v(" "),s("h3",{attrs:{id:"a-application-layer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-application-layer"}},[e._v("#")]),e._v(" a. Application layer")]),e._v(" "),s("p",[e._v("Our application layer will process all incoming and outgoing requests. The application servers will be\ntalking to the backend data store components to serve the requests.")]),e._v(" "),s("p",[s("strong",[e._v("How to handle a write request?")]),e._v(" Upon receiving a write request, our application server will generate a\nsix-letter random string, which would serve as the key of the paste (if the user has not provided a\ncustom key). The application server will then store the contents of the paste and the generated key in\nthe database. After the successful insertion, the server can return the key to the user. One possible\nproblem here could be that the insertion fails because of a duplicate key. Since we are generating a\nrandom key, there is a possibility that the newly generated key could match an existing one. In that\ncase, we should regenerate a new key and try again. We should keep retrying until we don’t see failure\ndue to the duplicate key. We should return an error to the user if the custom key they have provided is\nalready present in our database.")]),e._v(" "),s("p",[e._v("Another solution of the above problem could be to run a standalone "),s("strong",[e._v("Key Generation Service")]),e._v(" (KGS)\nthat generates random six letters strings beforehand and stores them in a database (let’s call it key-DB).\nWhenever we want to store a new paste, we will just take one of the already generated keys and use it.")]),e._v(" "),s("p",[e._v("This approach will make things quite simple and fast since we will not be worrying about duplications\nor collisions. KGS will make sure all the keys inserted in key-DB are unique. KGS can use two tables\nto store keys, one for keys that are not used yet and one for all the used keys. As soon as KGS gives\nsome keys to an application server, it can move these to the used keys table. KGS can always keep\nsome keys in memory so that whenever a server needs them, it can quickly provide them. As soon as\nKGS loads some keys in memory, it can move them to the used keys table, this way we can make sure\neach server gets unique keys. If KGS dies before using all the keys loaded in memory, we will be\nwasting those keys. We can ignore these keys given that we have a huge number of them.")]),e._v(" "),s("p",[s("strong",[e._v("Isn’t KGS a single point of failure?")]),e._v(" Yes, it is. To solve this, we can have a standby replica of KGS\nand whenever the primary server dies it can take over to generate and provide keys.")]),e._v(" "),s("p",[s("strong",[e._v("Can each app server cache some keys from key-DB?")]),e._v(" Yes, this can surely speed things up. Although\nin this case, if the application server dies before consuming all the keys, we will end up losing those\nkeys. This could be acceptable since we have 68B unique six letters keys, which are a lot more than we\nrequire.")]),e._v(" "),s("p",[s("strong",[e._v("How does it handle a paste read request?")]),e._v(" Upon receiving a read paste request, the application service\nlayer contacts the datastore. The datastore searches for the key, and if it is found, returns the paste’s\ncontents. Otherwise, an error code is returned.")]),e._v(" "),s("h3",{attrs:{id:"b-datastore-layer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b-datastore-layer"}},[e._v("#")]),e._v(" b. Datastore layer")]),e._v(" "),s("p",[e._v("We can divide our datastore layer into two:")]),e._v(" "),s("ol",[s("li",[e._v("Metadata database: We can use a relational database like MySQL or a Distributed Key-Value\nstore like Dynamo or Cassandra.")]),e._v(" "),s("li",[e._v("Object storage: We can store our contents in an Object Storage like Amazon’s S3. Whenever we\nfeel like hitting our full capacity on content storage, we can easily increase it by adding more\nservers.")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(1014),alt:"img"}})]),e._v(" "),s("p",[e._v("Detailed component design for Pastebin")]),e._v(" "),s("h2",{attrs:{id:"_9-purging-or-db-cleanup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-purging-or-db-cleanup"}},[e._v("#")]),e._v(" 9. Purging or DB Cleanup")]),e._v(" "),s("p",[e._v("Please see Designing a URL Shortening service.")]),e._v(" "),s("h2",{attrs:{id:"_10-data-partitioning-and-replication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-data-partitioning-and-replication"}},[e._v("#")]),e._v(" 10. Data Partitioning and Replication")]),e._v(" "),s("p",[e._v("Please see Designing a URL Shortening service.")]),e._v(" "),s("h2",{attrs:{id:"_11-cache-and-load-balancer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-cache-and-load-balancer"}},[e._v("#")]),e._v(" 11. Cache and Load Balancer")]),e._v(" "),s("p",[e._v("Please see Designing a URL Shortening service.")]),e._v(" "),s("h2",{attrs:{id:"_12-security-and-permissions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-security-and-permissions"}},[e._v("#")]),e._v(" 12. Security and Permissions")]),e._v(" "),s("p",[e._v("Please see Designing a URL Shortening service.")])])}),[],!1,null,null,null);t.default=r.exports}}]);