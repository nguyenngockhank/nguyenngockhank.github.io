(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1285:function(e,t,r){"use strict";r.r(t);var a=r(7),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"data-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-structure"}},[e._v("#")]),e._v(" Data structure")]),e._v(" "),a("h2",{attrs:{id:"skiplist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#skiplist"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Skip_list",target:"_blank",rel:"noopener noreferrer"}},[e._v("Skiplist"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("a common in-memory index type")]),e._v(" "),a("li",[e._v("to build the "),a("code",[e._v("Sorted Set")])]),e._v(" "),a("li",[e._v("allows for fast lookups, range queries, and other operations")]),e._v(" "),a("li",[e._v("DB used: Redis")])]),e._v(" "),a("p",[e._v("https://www.geeksforgeeks.org/skip-list/")]),e._v(" "),a("p",[e._v("https://www.npmjs.com/package/ts-skiplist")]),e._v(" "),a("h2",{attrs:{id:"log-structured-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-structured-storage"}},[e._v("#")]),e._v(" Log Structured Storage")]),e._v(" "),a("p",[e._v("Log Structured Storage là trường phái Database dựa trên Append-only Log, tức là dữ liệu được ghi lưu lại dưới dạng log, chỉ có ghi xuống cuối file chứ không thể ghi đè.")]),e._v(" "),a("h2",{attrs:{id:"write-ahead-log-wal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#write-ahead-log-wal"}},[e._v("#")]),e._v(" Write ahead log (WAL)")]),e._v(" "),a("ul",[a("li",[e._v("Must force the log record for an update before the correspoding data gets to disk")]),e._v(" "),a("li",[e._v("Must write all log records for a Xact before commit")])]),e._v(" "),a("p",[a("img",{attrs:{src:r(474),alt:"wal"}})]),e._v(" "),a("ul",[a("li",[e._v("Guarantees Atomicity")]),e._v(" "),a("li",[e._v("Guarantees Durability")])]),e._v(" "),a("h3",{attrs:{id:"how-it-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[e._v("#")]),e._v(" How it works")]),e._v(" "),a("ul",[a("li",[e._v("Each log record has unique "),a("strong",[e._v("Log Sequence Number (LSN)")]),e._v(" (increment)")]),e._v(" "),a("li",[e._v("Each data page contains a pageLSN, the LSN of the most recent log record for an update to that page")]),e._v(" "),a("li",[e._v("System keeps track of flushedLSN")]),e._v(" "),a("li",[e._v("WAL: before a page is written "),a("code",[e._v("pageLSN <= flushedLSN")])])]),e._v(" "),a("p",[e._v("http://redbook.cs.berkeley.edu/redbook3/aries/sld013.htm")]),e._v(" "),a("h2",{attrs:{id:"binary-tree"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binary-tree"}},[e._v("#")]),e._v(" Binary tree")]),e._v(" "),a("h3",{attrs:{id:"avl-tree"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#avl-tree"}},[e._v("#")]),e._v(" AVL Tree")]),e._v(" "),a("p",[e._v("AVL Tree = Adelson-Velsky and Landis Tree = self-balancing binary search tree")]),e._v(" "),a("p",[e._v("AVL tree is a self-balancing Binary Search Tree (BST) where the difference between heights of left and right subtrees cannot be more than one for all nodes.")]),e._v(" "),a("h3",{attrs:{id:"red-black-tree"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#red-black-tree"}},[e._v("#")]),e._v(" Red-Black Tree")]),e._v(" "),a("p",[e._v("Red-Black tree is a binary search tree in which every node is colored with either red or black. It is a type of self balancing binary search tree. It has a good efficient worst case running time complexity.")]),e._v(" "),a("p",[e._v("https://www.geeksforgeeks.org/insertion-in-an-avl-tree/")]),e._v(" "),a("p",[e._v("https://www.geeksforgeeks.org/introduction-to-red-black-tree/")]),e._v(" "),a("ul",[a("li",[e._v("Node Packages "),a("a",{attrs:{href:"https://www.npmjs.com/package/bintrees",target:"_blank",rel:"noopener noreferrer"}},[e._v("bintrees"),a("OutboundLink")],1),e._v(" (Bin Tree & RB Tree)")])]),e._v(" "),a("h2",{attrs:{id:"hash-index-aka-hashtable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hash-index-aka-hashtable"}},[e._v("#")]),e._v(" Hash Index aka HashTable")]),e._v(" "),a("ul",[a("li",[e._v("allows for fast lookups, insertions & deletions")])]),e._v(" "),a("p",[e._v("https://stackoverflow.com/questions/61745927/why-sequential-write-is-faster-than-random-write-on-hdd/61753068#61753068")]),e._v(" "),a("h2",{attrs:{id:"btree"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#btree"}},[e._v("#")]),e._v(" BTree")]),e._v(" "),a("p",[a("img",{attrs:{src:r(475),alt:"btree"}})]),e._v(" "),a("p",[e._v("https://viblo.asia/p/mot-it-ve-b-tree-XL6lAPPrZek")]),e._v(" "),a("h2",{attrs:{id:"lsm-tree"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lsm-tree"}},[e._v("#")]),e._v(" LSM tree")]),e._v(" "),a("p",[e._v("LSM tree = Log-Structured Merge-Tree")]),e._v(" "),a("p",[e._v("Sparse index in memory = LSM Tree Index")]),e._v(" "),a("ul",[a("li",[e._v("DB used: RocksDB, LevelDB, Cassandra, HBase,  BigTable, Lucene")])]),e._v(" "),a("p",[a("img",{attrs:{src:r(476),alt:"lsm1"}})]),e._v(" "),a("p",[e._v("Big picture\n"),a("img",{attrs:{src:r(477),alt:"lsm1"}})]),e._v(" "),a("h3",{attrs:{id:"sstable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sstable"}},[e._v("#")]),e._v(" SSTable")]),e._v(" "),a("p",[e._v("SSTable = Sorted Strings Table")]),e._v(" "),a("p",[e._v("Về bản chất thì nó khá giống với kiến trúc Log file")]),e._v(" "),a("p",[e._v("Điểm khác biệt duy nhất đó là: mỗi key trong SSTable đều chỉ xuất hiện 1 lần duy nhất (không có chuyện trùng lặp Key), và các row được sắp xếp theo Key.")]),e._v(" "),a("ul",[a("li",[e._v("to store data on disk in sorted order")]),e._v(" "),a("li",[e._v("file-based data structure that used to store large amounts of data in a highly compressed & efficient format")])]),e._v(" "),a("p",[e._v("immutable on-disk “Map” implementation")]),e._v(" "),a("h3",{attrs:{id:"memtable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memtable"}},[e._v("#")]),e._v(" MemTable")]),e._v(" "),a("ul",[a("li",[e._v("use data structure AVL Tree or Red Black Tree")])]),e._v(" "),a("h2",{attrs:{id:"bloom-filter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bloom-filter"}},[e._v("#")]),e._v(" Bloom filter")]),e._v(" "),a("p",[e._v("A Bloom filter is a "),a("strong",[e._v("space-efficient probabilistic")]),e._v(" data structure that is used to test whether an element is a member of a set.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(478),alt:"bloom"}})]),e._v(" "),a("p",[e._v("Use case:")]),e._v(" "),a("ul",[a("li",[e._v("avoid attack miss cache attack")])]),e._v(" "),a("p",[e._v("Refs")]),e._v(" "),a("ul",[a("li",[e._v("Node Package "),a("a",{attrs:{href:"https://www.npmjs.com/package/bloom-filters",target:"_blank",rel:"noopener noreferrer"}},[e._v("bloom-filters"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.geeksforgeeks.org/bloom-filters-introduction-and-python-implementation/?ref=gcse",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bloom filters Introduction"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("https://www.scylladb.com/glossary/sstable/")]),e._v(" "),a("h2",{attrs:{id:"data-structure-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-structure-2"}},[e._v("#")]),e._v(" Data structure")]),e._v(" "),a("p",[e._v("A good engineer needs to recognize how data structures are used in our daily lives.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("list")]),e._v(": keep your Twitter feeds")]),e._v(" "),a("li",[a("strong",[e._v("stack")]),e._v(": support undo/redo of the word editor")]),e._v(" "),a("li",[a("strong",[e._v("queue")]),e._v(": keep printer jobs, or send user actions in-game")]),e._v(" "),a("li",[a("strong",[e._v("heap")]),e._v(": task scheduling")]),e._v(" "),a("li",[a("strong",[e._v("tree")]),e._v(": keep the HTML document, or for AI decision")]),e._v(" "),a("li",[a("strong",[e._v("suffix tree")]),e._v(": for searching string in a document")]),e._v(" "),a("li",[a("strong",[e._v("graph")]),e._v(": for tracking friendship, or path finding")]),e._v(" "),a("li",[a("strong",[e._v("r-tree")]),e._v(": for finding the nearest neighbor")]),e._v(" "),a("li",[a("strong",[e._v("vertex buffer")]),e._v(": for sending data to GPU for rendering")])])])}),[],!1,null,null,null);t.default=s.exports},474:function(e,t,r){e.exports=r.p+"assets/img/wal.5faf0674.png"},475:function(e,t,r){e.exports=r.p+"assets/img/btree-structure.8479494f.jpg"},476:function(e,t,r){e.exports=r.p+"assets/img/lsm2.62a24320.jpeg"},477:function(e,t,r){e.exports=r.p+"assets/img/lsm.195f3d0c.png"},478:function(e,t,r){e.exports=r.p+"assets/img/bloom-1.720dc376.png"}}]);