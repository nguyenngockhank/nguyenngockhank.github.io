(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1161:function(e,a,t){"use strict";t.r(a);var r=t(7),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"cache-notes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cache-notes"}},[e._v("#")]),e._v(" Cache Notes")]),e._v(" "),r("TagLinks"),e._v(" "),r("h2",{attrs:{id:"cache-levels"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cache-levels"}},[e._v("#")]),e._v(" Cache levels")]),e._v(" "),r("ul",[r("li",[e._v("Browser / Client side")]),e._v(" "),r("li",[e._v("CDN")]),e._v(" "),r("li",[e._v("Load Balancer")]),e._v(" "),r("li",[e._v("Reverse Proxy / API Gateway")]),e._v(" "),r("li",[e._v("CPU / RAM / Disk")]),e._v(" "),r("li",[e._v("Object cache / distributed cache ( redis, memcached)")]),e._v(" "),r("li",[e._v("Relational Database:\n"),r("ul",[r("li",[e._v("Write ahead log (WAL)")]),e._v(" "),r("li",[e._v("Bufferpool")]),e._v(" "),r("li",[e._v("Materialized View")]),e._v(" "),r("li",[e._v("Transaciton log")]),e._v(" "),r("li",[e._v("Replication log")])])]),e._v(" "),r("li",[e._v("Message broker")])]),e._v(" "),r("h2",{attrs:{id:"things-to-consider-when-using-cache"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#things-to-consider-when-using-cache"}},[e._v("#")]),e._v(" Things to consider when using cache")]),e._v(" "),r("h3",{attrs:{id:"suitable-scenarios"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#suitable-scenarios"}},[e._v("#")]),e._v(" Suitable Scenarios:")]),e._v(" "),r("ul",[r("li",[e._v("In-memory solution")]),e._v(" "),r("li",[e._v("Read heavy system")]),e._v(" "),r("li",[e._v("Data is not frequently updated")])]),e._v(" "),r("h3",{attrs:{id:"caching-eviction-algorithm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#caching-eviction-algorithm"}},[e._v("#")]),e._v(" Caching Eviction Algorithm:")]),e._v(" "),r("ul",[r("li",[e._v("Least Recently Used (LRU)")]),e._v(" "),r("li",[e._v("Least Frequently Used (LFU)")]),e._v(" "),r("li",[e._v("First-in First-out (FIFO)")]),e._v(" "),r("li",[e._v("Random Replacement (RR)")])]),e._v(" "),r("h3",{attrs:{id:"key-metrics"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#key-metrics"}},[e._v("#")]),e._v(" Key metrics")]),e._v(" "),r("ul",[r("li",[e._v("Cache hit ratio")]),e._v(" "),r("li",[e._v("Latency")]),e._v(" "),r("li",[e._v("Throughput")]),e._v(" "),r("li",[e._v("Invalidate rate")]),e._v(" "),r("li",[e._v("Memory usage")]),e._v(" "),r("li",[e._v("CPU usage")]),e._v(" "),r("li",[e._v("Network usage")])]),e._v(" "),r("h3",{attrs:{id:"other-issue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-issue"}},[e._v("#")]),e._v(" Other issue")]),e._v(" "),r("ul",[r("li",[e._v("Thunder herd on cold start")]),e._v(" "),r("li",[e._v("Time-to-live (TTL)")])]),e._v(" "),r("h2",{attrs:{id:"read-strategies"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#read-strategies"}},[e._v("#")]),e._v(" Read Strategies")]),e._v(" "),r("h3",{attrs:{id:"cache-aside"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cache-aside"}},[e._v("#")]),e._v(" Cache Aside")]),e._v(" "),r("p",[r("img",{attrs:{src:t(530),alt:"Image"}})]),e._v(" "),r("ul",[r("li",[e._v("The cache is sitting aside the database.")]),e._v(" "),r("li",[e._v("The application will first request the data from the cache.\n"),r("ul",[r("li",[e._v("If the data exists "),r("strong",[e._v("cache hit")]),e._v(", the app will retrieve the data directly.")]),e._v(" "),r("li",[e._v("If not "),r("strong",[e._v("cache miss")]),e._v(", the app will request data from the database and write it to the cache so that the data can be retrieved from the cache again next time.")])])])]),e._v(" "),r("h3",{attrs:{id:"read-through"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#read-through"}},[e._v("#")]),e._v(" Read through")]),e._v(" "),r("p",[r("img",{attrs:{src:t(531),alt:"Image"}})]),e._v(" "),r("ul",[r("li",[e._v("The cache sits in between the application and the database.")]),e._v(" "),r("li",[e._v("The application only request data from the cache.")]),e._v(" "),r("li",[e._v("If a "),r("strong",[e._v("cache miss")]),e._v(" occurs, the cache is responsible to retrieve data from the database, update itself and return data to the application.")])]),e._v(" "),r("h3",{attrs:{id:"refresh-ahead"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#refresh-ahead"}},[e._v("#")]),e._v(" Refresh-ahead")]),e._v(" "),r("p",[e._v("Cached data, by default, expires after a certain period. This might result in higher latency when clients request an expired key since it requires a trip to the database.")]),e._v(" "),r("p",[e._v("The Refresh-ahead strategy refreshes the "),r("strong",[e._v("hot data")]),e._v(" before it gets expired.")]),e._v(" "),r("p",[r("strong",[e._v("Implementation")])]),e._v(" "),r("ol",[r("li",[e._v("Supposed the cached data’s expiration time is 60 seconds and the refresh-ahead factor is 0.5.")]),e._v(" "),r("li",[e._v("If the cached data is accessed at the 25th second, nothing happens.")]),e._v(" "),r("li",[e._v("If the cached data is accessed after 30 seconds, said 35th second, the cache returns the data and asynchronously refreshes the data.")])]),e._v(" "),r("p",[r("strong",[e._v("Advantages")])]),e._v(" "),r("ul",[r("li",[e._v("Hot data is refreshed before it expires and which leads to lower read latency of hot data.")]),e._v(" "),r("li",[e._v("Data is refreshed periodically, hence, preventing stale data.")])]),e._v(" "),r("p",[r("strong",[e._v("Disadvantages")])]),e._v(" "),r("ul",[r("li",[e._v("More difficult to implement.")]),e._v(" "),r("li",[e._v("It might incur an extra load on the cache if all keys refresh at the same time.")])]),e._v(" "),r("h2",{attrs:{id:"write-strategies"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#write-strategies"}},[e._v("#")]),e._v(" Write Strategies")]),e._v(" "),r("h3",{attrs:{id:"write-through"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#write-through"}},[e._v("#")]),e._v(" Write through")]),e._v(" "),r("p",[r("img",{attrs:{src:t(532),alt:"Image"}})]),e._v(" "),r("ul",[r("li",[e._v("The cache sits in between the application and the database.")]),e._v(" "),r("li",[e._v("Every writes from the application must go through the cache to the database. (double write)")])]),e._v(" "),r("h3",{attrs:{id:"write-back-a-k-a-write-behind"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#write-back-a-k-a-write-behind"}},[e._v("#")]),e._v(" Write Back (a.k.a Write Behind)")]),e._v(" "),r("p",[r("img",{attrs:{src:t(533),alt:"Image"}})]),e._v(" "),r("ul",[r("li",[e._v("The application still writes data to the cache.")]),e._v(" "),r("li",[e._v("However, there is a delay in writing from the cache to the database.")]),e._v(" "),r("li",[e._v("The cache only flushes all updated data to the DB once in a while (e.g. every 2 minutes).")])]),e._v(" "),r("h3",{attrs:{id:"write-around"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#write-around"}},[e._v("#")]),e._v(" Write Around")]),e._v(" "),r("p",[r("img",{attrs:{src:t(534),alt:"Image"}})]),e._v(" "),r("ul",[r("li",[e._v("Write around usually combines with either "),r("strong",[e._v("cache aside")]),e._v(" or "),r("strong",[e._v("read through")]),e._v(" strategy.")]),e._v(" "),r("li",[e._v("The application writes directly to the database.")]),e._v(" "),r("li",[e._v("Only data that is read goes to the cache.")])]),e._v(" "),r("h2",{attrs:{id:"invalidate-cache"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#invalidate-cache"}},[e._v("#")]),e._v(" Invalidate cache")]),e._v(" "),r("ul",[r("li",[e._v("At Read side\n"),r("ul",[r("li",[e._v("let the cache item live until its expiration (probably stale data)")]),e._v(" "),r("li",[e._v("use "),r("a",{attrs:{href:"#refresh-ahead"}},[e._v("soft expiration (Refresh-ahead)")]),e._v(" (probably stale data)")])])]),e._v(" "),r("li",[e._v("At write side\n"),r("ul",[r("li",[e._v("remove completely cache item from storage if we using "),r("a",{attrs:{href:"#cache-aside"}},[e._v("Cache Aside")])]),e._v(" "),r("li",[e._v("remove soft expiration (probably stale data)")]),e._v(" "),r("li",[e._v("update new value into the cache item (will be problem if data structure of cache item)")]),e._v(" "),r("li",[e._v("emit an event, then cache updator will update itself (CQRS architecture)")])])])]),e._v(" "),r("h2",{attrs:{id:"cache-problems"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cache-problems"}},[e._v("#")]),e._v(" Cache problems")]),e._v(" "),r("h3",{attrs:{id:"cache-penetration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cache-penetration"}},[e._v("#")]),e._v(" Cache Penetration")]),e._v(" "),r("p",[e._v("A cache penetration happens when a searched "),r("strong",[e._v("key does not reside in both the database and the cache.")])]),e._v(" "),r("p",[e._v("Let’s take a look at how it works.")]),e._v(" "),r("ul",[r("li",[e._v("It happens when a key does not reside in the cache nor the database.")]),e._v(" "),r("li",[e._v("When users query for the key, the application hits the database due to "),r("code",[e._v("cache miss")]),e._v(".")]),e._v(" "),r("li",[e._v("Since the database does not contain the key and returns an empty result, the key is never cached.")]),e._v(" "),r("li",[e._v("Hence, every query will eventually result in cache miss and hit the database.")])]),e._v(" "),r("p",[e._v("While this might seem trivial at first, an attacker can attempt to bring down your database by launching lots of searches with such keys.")]),e._v(" "),r("p",[e._v("To mitigate such issues, we can:")]),e._v(" "),r("ul",[r("li",[e._v("Cache the empty result with a short expiration time.")]),e._v(" "),r("li",[e._v("Employ a "),r("a",{attrs:{href:"https://medium.com/codex/how-to-efficiently-check-if-a-username-is-registered-dbbe02cca20f",target:"_blank",rel:"noopener noreferrer"}},[e._v("bloom filter"),r("OutboundLink")],1),e._v(". Before querying the database, the application looks up the key in a bloom filter and returns immediately if the key does not exist.")])]),e._v(" "),r("h3",{attrs:{id:"cache-breakdown"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cache-breakdown"}},[e._v("#")]),e._v(" Cache Breakdown")]),e._v(" "),r("p",[e._v("Cache Breakdown  aka Thundering herd problem aka Cache Miss Storm")]),e._v(" "),r("p",[e._v("A cache breakdown happens when a cache key expires, and "),r("strong",[e._v("multiple requests access the database concurrently")]),e._v(" looking for the same key.")]),e._v(" "),r("p",[e._v("Let’s take a look at how it works")]),e._v(" "),r("ul",[r("li",[e._v("A hot cache key expires.")]),e._v(" "),r("li",[e._v("Multiple concurrent requests come in searching for the same key.")]),e._v(" "),r("li",[e._v("The servers launch multiple concurrent requests to the database to look for the same key.")])]),e._v(" "),r("p",[e._v("A cache breakdown increases the load on the database dramatically especially when lots of hot keys expire at the same time.")]),e._v(" "),r("p",[e._v("Here are some mitigation plans")]),e._v(" "),r("ul",[r("li",[e._v("Acquire a lock on the searched key. Other threads need to wait when a thread is trying to update the cache.")]),e._v(" "),r("li",[e._v("Utilise "),r("a",{attrs:{href:"##refresh-ahead"}},[e._v("Refresh-ahead strategy")]),e._v(" to asynchronously refresh hot data so that the hot keys never expire.")]),e._v(" "),r("li",[e._v("Use "),r("a",{attrs:{href:"#read-through"}},[e._v("Read-through")]),e._v(" strategy to move the data fetching logic to the cache and ensures that the cache fires only one request to the database for each query.")])]),e._v(" "),r("h3",{attrs:{id:"cache-avalanche"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cache-avalanche"}},[e._v("#")]),e._v(" Cache Avalanche")]),e._v(" "),r("p",[e._v("A cache avalanche happens when there’s a "),r("strong",[e._v("sudden spike of requests to the database.")])]),e._v(" "),r("p",[e._v("This happens when:")]),e._v(" "),r("ul",[r("li",[e._v("Lots of cached data expire at the same time.")]),e._v(" "),r("li",[e._v("A cache service goes down, and all requests access the database directly.")])]),e._v(" "),r("p",[e._v("A sudden spike of traffic to the database might result in cascading effects and might eventually bring down your service.")]),e._v(" "),r("p",[e._v("Here are some mitigation plans")]),e._v(" "),r("ul",[r("li",[e._v("Adjust the expiration time for the cached keys so that they won’t expire at the same time.")]),e._v(" "),r("li",[e._v("Use "),r("a",{attrs:{href:"##refresh-ahead"}},[e._v("Refresh-ahead strategy")]),e._v(" to asynchronously refresh hot data so that they never expire.")]),e._v(" "),r("li",[e._v("Use cache clusters to avoid single point of failure. When a master crashes, one of the replicas is promoted as the new master.")])]),e._v(" "),r("h2",{attrs:{id:"🔗-readmore"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#🔗-readmore"}},[e._v("#")]),e._v(" 🔗 Readmore")]),e._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/common/security/software-security.html#cache-miss-attack-prevention"}},[e._v("Cache Miss Attack Prevention")])],1),e._v(" "),r("li",[r("a",{attrs:{href:"https://dev.to/uzumakinarut0/cache-miss-escaping-the-storm-1f9j",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cache miss : Escaping the Storm"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.percona.com/blog/cache-miss-storm/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cache Miss Storm"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://blog.bytebytego.com/p/a-crash-course-in-caching-part-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Crash Course in Caching - Part 2"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.youtube.com/watch?v=dGAgxozNWFE&ab_channel=ByteByteGo",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cache Systems Every Developer Should Know"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("https://www.youtube.com/watch?v=jIA7z1gxuc8&ab_channel=HusseinNasser")])],1)}),[],!1,null,null,null);a.default=s.exports},530:function(e,a,t){e.exports=t.p+"assets/img/cache-aside.faf1b6f8.png"},531:function(e,a,t){e.exports=t.p+"assets/img/cache-read-through.1a8af934.png"},532:function(e,a,t){e.exports=t.p+"assets/img/cache-write-through.bca249c5.png"},533:function(e,a,t){e.exports=t.p+"assets/img/cache-write-back.4abe7ae4.png"},534:function(e,a,t){e.exports=t.p+"assets/img/cache-write-around.6ff1e3a9.png"}}]);