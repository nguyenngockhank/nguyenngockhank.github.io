(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{1104:function(s,t,e){"use strict";e.r(t);var n=e(7),o=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"consistent-hashing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#consistent-hashing"}},[s._v("#")]),s._v(" Consistent hashing")]),s._v(" "),e("TagLinks"),s._v(" "),e("p",[s._v("Consistent Hashing is a distributed hashing scheme that operates independently of the number of servers or objects in a distributed hash table. It powers many high-traffic dynamic websites and web applications.")]),s._v(" "),e("h2",{attrs:{id:"how-does-consistent-hashing-work"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-does-consistent-hashing-work"}},[s._v("#")]),s._v(" How Does Consistent Hashing Work?")]),s._v(" "),e("p",[s._v("At a high level, consistent hashing performs the following operations:")]),s._v(" "),e("ol",[e("li",[s._v("The output of the "),e("strong",[s._v("hash function")]),s._v(" is placed on a "),e("strong",[s._v("virtual ring structure")]),s._v(" (known as the "),e("strong",[s._v("hash ring")]),s._v(")")]),s._v(" "),e("li",[s._v("The "),e("strong",[s._v("hashed IP addresses of the nodes")]),s._v(" are used to assign a position for the nodes on the hash ring")]),s._v(" "),e("li",[s._v("The "),e("strong",[s._v("key of a data object")]),s._v(" is hashed using the same hash function to find the position of the key on the hash ring")]),s._v(" "),e("li",[s._v("The hash ring is traversed in the clockwise direction starting from the position of the key until a node is found")]),s._v(" "),e("li",[s._v("The data object is stored or retrieved from the node that was found")])]),s._v(" "),e("p",[s._v("Read more: "),e("a",{attrs:{href:"http://highscalability.com/blog/2023/2/22/consistent-hashing-algorithm.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Consistent Hashing Algorithm"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"consistent-hashing-vs-hash-slot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#consistent-hashing-vs-hash-slot"}},[s._v("#")]),s._v(" Consistent Hashing vs Hash Slot")]),s._v(" "),e("p",[s._v("Redis Cluster => Hash Slot 16384 slots")]),s._v(" "),e("p",[s._v("Cassandra Consistent Hashing => fROM -2"),e("sup",[s._v("63")]),s._v(" to 2"),e("sup",[s._v("63")]),s._v(" - 1")]),s._v(" "),e("p",[s._v("Virtual nodes is quite simalar with hash slot.")]),s._v(" "),e("p",[s._v("But virtual nodes is not an original concept of consistent hashing, but more like a trick used by Cassandra based on consistent hashing. So it's also ok for redis to say not using consistent hashing.")]),s._v(" "),e("p",[s._v("So, don't bother with phraseology.")]),s._v(" "),e("p",[s._v("Readmore:")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.reddit.com/r/redis/comments/4yztxi/which_one_is_better_hash_slot_or_consistent/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Which one better hashslot or consistent hashing"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://stackoverflow.com/questions/50246763/does-redis-cluster-use-consistent-hashing",target:"_blank",rel:"noopener noreferrer"}},[s._v("Does Redis cluster use consistent hashing"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"refs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#refs"}},[s._v("#")]),s._v(" Refs")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.youtube.com/watch?v=p6wwj0ozifw&ab_channel=HusseinNasser",target:"_blank",rel:"noopener noreferrer"}},[s._v("Consistent Hashing explain by HusseinNasser"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://ably.com/blog/implementing-efficient-consistent-hashing",target:"_blank",rel:"noopener noreferrer"}},[s._v("Consistent hashing explained"),e("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);