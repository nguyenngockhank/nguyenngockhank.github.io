(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1360:function(e,t,a){"use strict";a.r(t);var s=a(7),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"chapter-4-distribution-models"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chapter-4-distribution-models"}},[e._v("#")]),e._v(" Chapter 4. Distribution Models")]),e._v(" "),s("p",[e._v("The primary driver of interest in NoSQL has been its ability to run databases on a large cluster. As\ndata volumes increase, it becomes more difficult and expensive to scale up—buy a bigger server to\nrun the database on. A more appealing option is to scale out—run the database on a cluster of servers.\nAggregate orientation fits well with scaling out because the aggregate is a natural unit to use for\ndistribution.")]),e._v(" "),s("p",[e._v("Depending on your distribution model, you can get a data store that will give you the ability to\nhandle larger quantities of data, the ability to process a greater read or write traffic, or more\navailability in the face of network slowdowns or breakages. These are often important benefits, but\nthey come at a cost. Running over a cluster introduces complexity—so it’s not something to do unless\nthe benefits are compelling.")]),e._v(" "),s("p",[e._v("Broadly, there are two paths to data distribution: replication and sharding. Replication takes the\nsame data and copies it over multiple nodes. Sharding puts different data on different nodes.\nReplication and sharding are orthogonal techniques: You can use either or both of them. Replication\ncomes into two forms: master-slave and peer-to-peer. We will now discuss these techniques starting\nat the simplest and working up to the more complex: first single-server, then master-slave replication,\nthen sharding, and finally peer-to-peer replication.")]),e._v(" "),s("h2",{attrs:{id:"_4-1-single-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-single-server"}},[e._v("#")]),e._v(" 4.1. Single Server")]),e._v(" "),s("p",[e._v("The first and the simplest distribution option is the one we would most often recommend—no\ndistribution at all. Run the database on a single machine that handles all the reads and writes to the\ndata store. We prefer this option because it eliminates all the complexities that the other options\nintroduce; it’s easy for operations people to manage and easy for application developers to reason\nabout.")]),e._v(" "),s("p",[e._v("Although a lot of NoSQL databases are designed around the idea of running on a cluster, it can\nmake sense to use NoSQL with a single-server distribution model if the data model of the NoSQL\nstore is more suited to the application. Graph databases are the obvious category here—these work\nbest in a single-server configuration. If your data usage is mostly about processing aggregates, then a\nsingle-server document or key-value store may well be worthwhile because it’s easier on application\ndevelopers.")]),e._v(" "),s("p",[e._v("For the rest of this chapter we’ll be wading through the advantages and complications of more\nsophisticated distribution schemes. Don’t let the volume of words fool you into thinking that we\nwould prefer these options. If we can get away without distributing our data, we will always choose\na single-server approach.")]),e._v(" "),s("h2",{attrs:{id:"_4-2-sharding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-sharding"}},[e._v("#")]),e._v(" 4.2. Sharding")]),e._v(" "),s("p",[e._v("Often, a busy data store is busy because different people are accessing different parts of the dataset.\nIn these circumstances we can support horizontal scalability by putting different parts of the data onto\ndifferent servers—a technique that’s called "),s("strong",[e._v("sharding")]),e._v(" (see Figure 4.1).")]),e._v(" "),s("p",[s("img",{attrs:{src:a(915),alt:"img"}})]),e._v(" "),s("p",[s("strong",[e._v("Figure 4.1. Sharding puts different data on separate nodes, each of which does its own reads and writes.")])]),e._v(" "),s("p",[e._v("In the ideal case, we have different users all talking to different server nodes. Each user only has to\ntalk to one server, so gets rapid responses from that server. The load is balanced out nicely between\nservers—for example, if we have ten servers, each one only has to handle 10% of the load.")]),e._v(" "),s("p",[e._v("Of course the ideal case is a pretty rare beast. In order to get close to it we have to ensure that data\nthat’s accessed together is clumped together on the same node and that these clumps are arranged on\nthe nodes to provide the best data access.")]),e._v(" "),s("p",[e._v("The first part of this question is how to clump the data up so that one user mostly gets her data from\na single server. This is where aggregate orientation comes in really handy. The whole point of\naggregates is that we design them to combine data that’s commonly accessed together—so aggregates\nleap out as an obvious unit of distribution.")]),e._v(" "),s("p",[e._v("When it comes to arranging the data on the nodes, there are several factors that can help improve\nperformance. If you know that most accesses of certain aggregates are based on a physical location,\nyou can place the data close to where it’s being accessed. If you have orders for someone who lives\nin Boston, you can place that data in your eastern US data center.")]),e._v(" "),s("p",[e._v("Another factor is trying to keep the load even. This means that you should try to arrange aggregates\nso they are evenly distributed across the nodes which all get equal amounts of the load. This may vary\nover time, for example if some data tends to be accessed on certain days of the week—so there may\nbe domain-specific rules you’d like to use.")]),e._v(" "),s("p",[e._v("In some cases, it’s useful to put aggregates together if you think they may be read in sequence. The\nBigtable paper [Chang etc.] described keeping its rows in lexicographic order and sorting web\naddresses based on reversed domain names (e.g., com.martinfowler). This way data for multiple\npages could be accessed together to improve processing efficiency.")]),e._v(" "),s("p",[e._v("Historically most people have done sharding as part of application logic. You might put all customers with surnames starting from A to D on one shard and E to G on another. This complicates the programming model, as application code needs to ensure that queries are distributed across the various shards. Furthermore, rebalancing the sharding means changing the application code and migrating the data. Many NoSQL databases offer "),s("strong",[e._v("auto-sharding")]),e._v(" , where the database takes on the responsibility of allocating data to shards and ensuring that data access goes to the right shard. This can make it much easier to use sharding in an application.")]),e._v(" "),s("p",[e._v("Sharding is particularly valuable for performance because it can improve both read and write\nperformance. Using replication, particularly with caching, can greatly improve read performance but\ndoes little for applications that have a lot of writes. Sharding provides a way to horizontally scale\nwrites.")]),e._v(" "),s("p",[e._v("Sharding does little to improve resilience when used alone. Although the data is on different nodes,\na node failure makes that shard’s data unavailable just as surely as it does for a single-server\nsolution. The resilience benefit it does provide is that only the users of the data on that shard will\nsuffer; however, it’s not good to have a database with part of its data missing. With a single server\nit’s easier to pay the effort and cost to keep that server up and running; clusters usually try to use less reliable machines, and you’re more likely to get a node failure. So in practice, sharding alone is\nlikely to decrease resilience.")]),e._v(" "),s("p",[e._v("Despite the fact that sharding is made much easier with aggregates, it’s still not a step to be taken\nlightly. Some databases are intended from the beginning to use sharding, in which case it’s wise to\nrun them on a cluster from the very beginning of development, and certainly in production. Other\ndatabases use sharding as a deliberate step up from a single-server configuration, in which case it’s\nbest to start single-server and only use sharding once your load projections clearly indicate that you\nare running out of headroom.")]),e._v(" "),s("p",[e._v("In any case the step from a single node to sharding is going to be tricky. We have heard tales of\nteams getting into trouble because they left sharding to very late, so when they turned it on in\nproduction their database became essentially unavailable because the sharding support consumed all\nthe database resources for moving the data onto new shards. The lesson here is to use sharding well\nbefore you need to—when you have enough headroom to carry out the sharding.")]),e._v(" "),s("h2",{attrs:{id:"_4-3-master-slave-replication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-master-slave-replication"}},[e._v("#")]),e._v(" 4.3. Master-Slave Replication")]),e._v(" "),s("p",[e._v("With master-slave distribution, you replicate data across multiple nodes. One node is designated as\nthe master, or primary. This master is the authoritative source for the data and is usually responsible\nfor processing any updates to that data. The other nodes are slaves, or secondaries. A replication\nprocess synchronizes the slaves with the master (see Figure 4.2).")]),e._v(" "),s("p",[s("img",{attrs:{src:a(916),alt:"img"}})]),e._v(" "),s("p",[s("strong",[e._v("Figure 4.2. Data is replicated from master to slaves. The master services all writes; reads may come from either master or slaves.")])]),e._v(" "),s("p",[e._v("Master-slave replication is most helpful for scaling when you have a read-intensive dataset. You\ncan scale horizontally to handle more read requests by adding more slave nodes and ensuring that all\nread requests are routed to the slaves. You are still, however, limited by the ability of the master to\nprocess updates and its ability to pass those updates on. Consequently it isn’t such a good scheme for\ndatasets with heavy write traffic, although offloading the read traffic will help a bit with handling the\nwrite load.")]),e._v(" "),s("p",[e._v("A second advantage of master-slave replication is "),s("strong",[e._v("read resilience")]),e._v(" : Should the master fail, the\nslaves can still handle read requests. Again, this is useful if most of your data access is reads. The\nfailure of the master does eliminate the ability to handle writes until either the master is restored or a\nnew master is appointed. However, having slaves as replicates of the master does speed up recovery\nafter a failure of the master since a slave can be appointed a new master very quickly.")]),e._v(" "),s("p",[e._v("The ability to appoint a slave to replace a failed master means that master-slave replication is\nuseful even if you don’t need to scale out. All read and write traffic can go to the master while the\nslave acts as a hot backup. In this case it’s easiest to think of the system as a single-server store with\na hot backup. You get the convenience of the single-server configuration but with greater resilience—\nwhich is particularly handy if you want to be able to handle server failures gracefully.")]),e._v(" "),s("p",[e._v("Masters can be appointed manually or automatically. Manual appointing typically means that when\nyou configure your cluster, you configure one node as the master. With automatic appointment, you")]),e._v(" "),s("p",[e._v("create a cluster of nodes and they elect one of themselves to be the master. Apart from simpler\nconfiguration, automatic appointment means that the cluster can automatically appoint a new master\nwhen a master fails, reducing downtime.")]),e._v(" "),s("p",[e._v("In order to get read resilience, you need to ensure that the read and write paths into your\napplication are different, so that you can handle a failure in the write path and still read. This includes\nsuch things as putting the reads and writes through separate database connections—a facility that is\nnot often supported by database interaction libraries. As with any feature, you cannot be sure you\nhave read resilience without good tests that disable the writes and check that reads still occur.")]),e._v(" "),s("p",[e._v("Replication comes with some alluring benefits, but it also comes with an inevitable dark side—\ninconsistency. You have the danger that different clients, reading different slaves, will see different\nvalues because the changes haven’t all propagated to the slaves. In the worst case, that can mean that\na client cannot read a write it just made. Even if you use master-slave replication just for hot backup\nthis can be a concern, because if the master fails, any updates not passed on to the backup are lost.\nWe’ll talk about how to deal with these issues later (“Consistency,” p. 47 ).")]),e._v(" "),s("h2",{attrs:{id:"_4-4-peer-to-peer-replication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-peer-to-peer-replication"}},[e._v("#")]),e._v(" 4.4. Peer-to-Peer Replication")]),e._v(" "),s("p",[e._v("Master-slave replication helps with read scalability but doesn’t help with scalability of writes. It\nprovides resilience against failure of a slave, but not of a master. Essentially, the master is still a\nbottleneck and a single point of failure. Peer-to-peer replication (see Figure 4.3) attacks these\nproblems by not having a master. All the replicas have equal weight, they can all accept writes, and\nthe loss of any of them doesn’t prevent access to the data store.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(917),alt:"img"}})]),e._v(" "),s("p",[s("strong",[e._v("Figure 4.3. Peer-to-peer replication has all nodes applying reads and writes to all the data.")])]),e._v(" "),s("p",[e._v("The prospect here looks mighty fine. With a peer-to-peer replication cluster, you can ride over\nnode failures without losing access to data. Furthermore, you can easily add nodes to improve your\nperformance. There’s much to like here—but there are complications.")]),e._v(" "),s("p",[e._v("The biggest complication is, again, consistency. When you can write to two different places, you\nrun the risk that two people will attempt to update the same record at the same time—a write-write\nconflict. Inconsistencies on read lead to problems but at least they are relatively transient.\nInconsistent writes are forever.")]),e._v(" "),s("p",[e._v("We’ll talk more about how to deal with write inconsistencies later on, but for the moment we’ll\nnote a couple of broad options. At one end, we can ensure that whenever we write data, the replicas\ncoordinate to ensure we avoid a conflict. This can give us just as strong a guarantee as a master,\nalbeit at the cost of network traffic to coordinate the writes. We don’t need all the replicas to agree\non the write, just a majority, so we can still survive losing a minority of the replica nodes.")]),e._v(" "),s("p",[e._v("At the other extreme, we can decide to cope with an inconsistent write. There are contexts when\nwe can come up with policy to merge inconsistent writes. In this case we can get the full performance\nbenefit of writing to any replica.")]),e._v(" "),s("p",[s("strong",[e._v("These points are at the ends of a spectrum where we trade off consistency for availability.")])]),e._v(" "),s("h2",{attrs:{id:"_4-5-combining-sharding-and-replication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-combining-sharding-and-replication"}},[e._v("#")]),e._v(" 4.5. Combining Sharding and Replication")]),e._v(" "),s("p",[e._v("Replication and sharding are strategies that can be combined. If we use both master-slave replication\nand sharding (see Figure 4.4), this means that we have multiple masters, but each data item only has a\nsingle master. Depending on your configuration, you may choose a node to be a master for some data\nand slaves for others, or you may dedicate nodes for master or slave duties.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(918),alt:"img"}})]),e._v(" "),s("p",[s("strong",[e._v("Figure 4.4. Using master-slave replication together with sharding")])]),e._v(" "),s("p",[e._v("Using peer-to-peer replication and sharding is a common strategy for column-family databases. In a\nscenario like this you might have tens or hundreds of nodes in a cluster with data sharded over them.\nA good starting point for peer-to-peer replication is to have a replication factor of 3, so each shard is\npresent on three nodes. Should a node fail, then the shards on that node will be built on the other\nnodes (see Figure 4.5).")]),e._v(" "),s("p",[s("img",{attrs:{src:a(919),alt:"img"}})]),e._v(" "),s("p",[s("strong",[e._v("Figure 4.5. Using peer-to-peer replication together with sharding")])]),e._v(" "),s("h2",{attrs:{id:"_4-6-key-points"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-key-points"}},[e._v("#")]),e._v(" 4.6. Key Points")]),e._v(" "),s("ul",[s("li",[e._v("There are two styles of distributing data:\n"),s("ul",[s("li",[e._v("Sharding distributes different data across multiple servers, so each server acts as the single\nsource for a subset of data.")]),e._v(" "),s("li",[e._v("Replication copies data across multiple servers, so each bit of data can be found in multiple\nplaces.")])])])]),e._v(" "),s("p",[e._v("A system may use either or both techniques.")]),e._v(" "),s("ul",[s("li",[e._v("Replication comes in two forms:\n"),s("ul",[s("li",[e._v("Master-slave replication makes one node the authoritative copy that handles writes while slaves synchronize with the master and may handle reads.")]),e._v(" "),s("li",[e._v("Peer-to-peer replication allows writes to any node; the nodes coordinate to synchronize their copies of the data.\nMaster-slave replication reduces the chance of update conflicts but peer-to-peer replication\navoids loading all writes onto a single point of failure.")])])])])])}),[],!1,null,null,null);t.default=o.exports},915:function(e,t,a){e.exports=a.p+"assets/img/image--014.5d836f4d.jpg"},916:function(e,t,a){e.exports=a.p+"assets/img/image--015.fea4418b.jpg"},917:function(e,t,a){e.exports=a.p+"assets/img/image--016.73f6b03d.jpg"},918:function(e,t,a){e.exports=a.p+"assets/img/image--017.d6e7de30.jpg"},919:function(e,t,a){e.exports=a.p+"assets/img/image--018.01e159ef.jpg"}}]);