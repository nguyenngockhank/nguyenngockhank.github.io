(window.webpackJsonp=window.webpackJsonp||[]).push([[494],{1750:function(e,s,t){"use strict";t.r(s);var a=t(7),i=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"kafka-vs-jetstream"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kafka-vs-jetstream"}},[e._v("#")]),e._v(" Kafka vs Jetstream")]),e._v(" "),t("p",[e._v("Kafka has connector for Database, publish data change to kafka\nKafka strong at scale &  partition compatibity with cluster")]),e._v(" "),t("ul",[t("li",[e._v("broker at PROD at least 3")])]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("Kafka is a ditributed append only commit log")]),e._v(" "),t("ul",[t("li",[e._v("Base Kafka: store & replay of message logs")]),e._v(" "),t("li",[e._v("Kafka streams: built on top Base Kafka")]),e._v(" "),t("li",[e._v("append only WAL LOG\n"),t("ul",[t("li",[e._v("No deletes, just compaction")])])])]),e._v(" "),t("p",[e._v("NATS + Jetstream is a ditributed messaging platform with persistent storage")]),e._v(" "),t("ul",[t("li",[e._v("Core NATs: fully-fledged distributed messaging system using subject based addressing. Such Request / Reply , Queuing, Pub / Sub")]),e._v(" "),t("li",[e._v("Jetstream: distributed persistence on top of Core NATs")]),e._v(" "),t("li",[e._v("JS is immediately consistent message STORE\n"),t("ul",[t("li",[e._v("can delete individual messages")])])]),e._v(" "),t("li",[e._v("JS is subject based addressing aware\n"),t("ul",[t("li",[e._v("you can address messages by subject")])])]),e._v(" "),t("li",[e._v("JS supports KV & Object Store")])]),e._v(" "),t("h2",{attrs:{id:"subject-based-addressing-topics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#subject-based-addressing-topics"}},[e._v("#")]),e._v(" Subject based addressing != Topics")]),e._v(" "),t("p",[e._v("With SBA, you can capture messages into streams using subject "),t("strong",[e._v("token wildcards")]),e._v(".")]),e._v(" "),t("ul",[t("li",[e._v("Subjects do not need to be created ahead of time")])]),e._v(" "),t("p",[e._v("Kafka, is one topic stream & up to the clients to constantly refresh the list of Topics to match agaist a Regex & start consuming from.")]),e._v(" "),t("ul",[t("li",[e._v("Topics have to be pre-defined before messages are stored (optionally created with default values)")]),e._v(" "),t("li",[e._v("Topic creation causes re-partitioning")])]),e._v(" "),t("h3",{attrs:{id:"when-producing-messages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#when-producing-messages"}},[e._v("#")]),e._v(" When producing messages")]),e._v(" "),t("p",[e._v("With SBA, the key (and/or unique id) of message is naturally included inside the subject (vs explicitly passed as separate argument)")]),e._v(" "),t("ul",[t("li",[e._v("can use as many tokens as you need (composite key vs single key)")]),e._v(" "),t("li",[e._v("can include things you know you are going to want to filter on when consuming (vs having to use Kafka Streams)")]),e._v(" "),t("li",[e._v("remember that subjects can always get mapped (partitioned, split & sliced)")])]),e._v(" "),t("h3",{attrs:{id:"when-consuming-messages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#when-consuming-messages"}},[e._v("#")]),e._v(" When consuming messages")]),e._v(" "),t("p",[e._v("Kafka is replay from offset only\n- or you have to use Kafka Streams to create filtered sub-streams")]),e._v(" "),t("p",[e._v("JS Client apps can also 'query' the stream using subject filters\n- pushes the filtering back to nats server vs full stream scan by client app\n- indexing is being used to avoid full stream scan by the server\n- Filtering is more than just by exact match: hierarchical filtering  "),t("code",[e._v("*")]),e._v(" and "),t("code",[e._v(">")]),e._v(" wild cards\n- Filtering can be combined with JS time stamping & ability to start scanning from a point of time")]),e._v(" "),t("h2",{attrs:{id:"consuming-messages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consuming-messages"}},[e._v("#")]),e._v(" Consuming messages")]),e._v(" "),t("ul",[t("li",[e._v("Consumers vs Consumer Groups\nTERMINOLOGY:\n"),t("ul",[t("li",[e._v("JS Consumer = Kafka Consumer Group")]),e._v(" "),t("li",[e._v("JS Subscriber (to a Consumer) = Kafka Consumer")])])]),e._v(" "),t("li",[e._v("JS Consumers are:\n"),t("ul",[t("li",[e._v("Partition-less 'Consumer Group', distributes the messages btw the subscribing client apps.")]),e._v(" "),t("li",[e._v("Statefull, and the state can be persisted & repliated")])])]),e._v(" "),t("li",[e._v("JS Consumers can:\n"),t("ul",[t("li",[e._v("specify a subject filter that can include wildcards, are like a 'view' on a Stream (without having to use Kafka Stream)")]),e._v(" "),t("li",[e._v("use pull or push delivery mechanisms (vs pull only)")]),e._v(" "),t("li",[e._v("have one-to-many flow control as well as one-to-one flow control (pull)")])])]),e._v(" "),t("li",[e._v("Consumer positioning:\n"),t("ul",[t("li",[e._v("JS supports: all (start), new (end), message sequence (offset), plus last message, last message for each subject, and from a period of time in the past")]),e._v(" "),t("li",[e._v("Kafka is only start, end or specific offset")])])])]),e._v(" "),t("h2",{attrs:{id:"exactly-once-quality-of-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exactly-once-quality-of-service"}},[e._v("#")]),e._v(" Exactly once Quality of service")]),e._v(" "),t("h3",{attrs:{id:"at-least-once"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#at-least-once"}},[e._v("#")]),e._v(" At least once")]),e._v(" "),t("ul",[t("li",[e._v("JS consumers can automatically re-deliver messages & manage ack at the individual message sequence number level:\n"),t("ul",[t("li",[e._v("multiple kinds of ack(s) : ack, nack, term, in process")]),e._v(" "),t("li",[e._v("you control the re-delivery attempt backoff timings")]),e._v(" "),t("li",[e._v("can implement Dead Lock Queue (DLQ)  type functionaltiy")])])]),e._v(" "),t("li",[e._v("Kafka consumer groups only support 'Ack All':\n"),t("ul",[t("li",[e._v("the client app needs to do it's 'seek' itself for re-deliveries")])])])]),e._v(" "),t("h3",{attrs:{id:"exactly-once"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#exactly-once"}},[e._v("#")]),e._v(" Exactly once")]),e._v(" "),t("p",[t("strong",[e._v("Message de-duplication")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("JS has built-in message de-duplication over configurable time window which works across client app sessions.")]),e._v(" "),t("ul",[t("li",[e._v("It is now also possible to have message de-duplication that is not time limited & covers the entire contents of the stream")])])]),e._v(" "),t("li",[t("p",[e._v('Kafka\'s built-in message de-duplication feature is limited: "The producer can only guarantee idempotence for messages sent within a single session"')]),e._v(" "),t("ul",[t("li",[e._v("app crashing before receiving the publication's ack & then restart & re-publishing is actually quite a likely scenario! => Needs Kafka Streams")])])])]),e._v(" "),t("p",[t("strong",[e._v("Reliable message consumption")])]),e._v(" "),t("ul",[t("li",[e._v("JS HAS A synchoronous double ack of the consumption of a message feature (AckAck)")]),e._v(" "),t("li",[e._v("With Kafka the client app must store both the offset & the results of the consumption to some outside system (in order to be able to store them atomically) => Needs Kafka Streams")])]),e._v(" "),t("h2",{attrs:{id:"store-vs-log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#store-vs-log"}},[e._v("#")]),e._v(" Store vs Log")]),e._v(" "),t("ul",[t("li",[e._v("Memory or file storage (Kafka is file only with memory just for caching)")]),e._v(" "),t("li",[e._v("JS Stream are read/write\n"),t("ul",[t("li",[e._v("working queue/ interest retention policies: use a stream as a queue")]),e._v(" "),t("li",[e._v("deletetion of individual messages (with optional 'safe delete' option)")])])]),e._v(" "),t("li",[e._v("Encryption at rest")]),e._v(" "),t("li",[e._v("Limits & discard policies:\n"),t("ul",[t("li",[e._v("JS\n"),t("ul",[t("li",[e._v("time, number of messages")]),e._v(" "),t("li",[e._v("exactly nper subject message limit\n"),t("ul",[t("li",[e._v("last value cache\nhistory of last values")]),e._v(" "),t("li",[e._v("distributed locks with discard new per subject")])])]),e._v(" "),t("li",[e._v("discard oldest or refuse the new message, limits are applied each time a new message is published.")]),e._v(" "),t("li",[e._v("limits are combined")])])]),e._v(" "),t("li",[e._v("Kafka log is append only with log compaction\n"),t("ul",[t("li",[e._v("compaction happends periodically, not each time a new message published: no 'discard policy'")]),e._v(" "),t("li",[e._v("time, number of messages")]),e._v(" "),t("li",[e._v("'at least 1' message per key (but you still need to scan the whole stream to find your key)")])])])])])]),e._v(" "),t("h2",{attrs:{id:"scaling-partitioning-scaling-the-clusters"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scaling-partitioning-scaling-the-clusters"}},[e._v("#")]),e._v(" Scaling & partitioning: scaling the clusters")]),e._v(" "),t("h3",{attrs:{id:"js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js"}},[e._v("#")]),e._v(" JS")]),e._v(" "),t("ul",[t("li",[e._v("distributes the streams over the cluster\n"),t("ul",[t("li",[e._v("adding or removing servers from a cluster doesnt cause stream re-distribution (unless administratively trigger)")]),e._v(" "),t("li",[e._v("adding streams to a cluster means selecting servers for the stream")]),e._v(" "),t("li",[e._v("adding or removing client apps from a consumer doesnt cause any redistribution")])])]),e._v(" "),t("li",[e._v("can use mirroring btw clusters & leaf nodes to scale out streams")])]),e._v(" "),t("h3",{attrs:{id:"kafka"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kafka"}},[e._v("#")]),e._v(" Kafka")]),e._v(" "),t("ul",[t("li",[e._v("distributes the partitions over the servers & the client apps over the partitions\n"),t("ul",[t("li",[e._v("adding or removing servers from a cluster means redistributing the partitions")]),e._v(" "),t("li",[e._v("adding topics means distributing the partitions over the servers in the cluster")]),e._v(" "),t("li",[e._v("removing topics many mean re-distributing remaining streams' partitions over the servers in the cluster")]),e._v(" "),t("li",[e._v("adding or removing client apps from a consumer group means re-distributing the partitions over the client apps")])])]),e._v(" "),t("li",[e._v("requires mirror maker instances to mirror btw users")])]),e._v(" "),t("h2",{attrs:{id:"security"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[e._v("#")]),e._v(" Security")]),e._v(" "),t("ul",[t("li",[e._v("Security models:\n"),t("ul",[t("li",[e._v("Kafka: plain or certificate based authentication")]),e._v(" "),t("li",[e._v("JS: plain, certificate or JWT-based delegated authentication/authorization with accounts and users")])])]),e._v(" "),t("li",[e._v("Multi-tenant security model:\n"),t("ul",[t("li",[e._v("JS\n"),t("ul",[t("li",[e._v("each account (i.e. tenant) has its own completedly independent subject namespace.")]),e._v(" "),t("li",[e._v("within an account, each user in a tenant can be allowed/denied on a per-subject (and per stream operation) basis")]),e._v(" "),t("li",[e._v("ability to import/export message streams (with on the fly subject mapping if needed) between accounts")])])]),e._v(" "),t("li",[e._v("Kafka\n"),t("ul",[t("li",[e._v("must manually carve parts of the topic namespace for each tenant")])])])])])]),e._v(" "),t("h2",{attrs:{id:"ecosystem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ecosystem"}},[e._v("#")]),e._v(" Ecosystem")]),e._v(" "),t("p",[e._v("https://www.benthos.dev/\nhttps://github.com/nats-io/nats-kafka")]),e._v(" "),t("h2",{attrs:{id:"functional-overlap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#functional-overlap"}},[e._v("#")]),e._v(" Functional overlap")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Kafka broker JVM")])]),e._v(" "),t("li",[t("p",[e._v("Zookeeper JVM")])]),e._v(" "),t("li",[t("p",[e._v("Kafka Streams JVM")])]),e._v(" "),t("li",[t("p",[e._v("Mirror Maker JVM")])]),e._v(" "),t("li",[t("p",[e._v("Redis")])]),e._v(" "),t("li",[t("p",[e._v("Messaging broker")])]),e._v(" "),t("li",[t("p",[e._v("Kafka Connect JVM")])]),e._v(" "),t("li",[t("p",[e._v("NATS Server")])]),e._v(" "),t("li",[t("p",[e._v("Benthos")])])]),e._v(" "),t("p",[e._v("https://docs.google.com/presentation/d/e/2PACX-1vRI3QQ7O6J_zi9pq4jCGUjgRQV1cos-ywYby3QwsOZLacBsMrfaxYurHbS9LfeQp0WERLO9zTcre9rT/pub?start=true&loop=false&delayms=5000&slide=id.g1861c2644d6_0_97")])])}),[],!1,null,null,null);s.default=i.exports}}]);