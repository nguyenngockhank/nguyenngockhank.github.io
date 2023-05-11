# Kafka vs Jetstream

Kafka has connector for Database, publish data change to kafka 
Kafka strong at scale &  partition compatibity with cluster
- broker at PROD at least 3 

----

Kafka is a ditributed append only commit log
- Base Kafka: store & replay of message logs
- Kafka streams: built on top Base Kafka
- append only WAL LOG
    - No deletes, just compaction


NATS + Jetstream is a ditributed messaging platform with persistent storage
- Core NATs: fully-fledged distributed messaging system using subject based addressing. Such Request / Reply , Queuing, Pub / Sub
- Jetstream: distributed persistence on top of Core NATs
- JS is immediately consistent message STORE
    - can delete individual messages
- JS is subject based addressing aware
    - you can address messages by subject
- JS supports KV & Object Store

## Subject based addressing != Topics

With SBA, you can capture messages into streams using subject **token wildcards**. 
- Subjects do not need to be created ahead of time

Kafka, is one topic stream & up to the clients to constantly refresh the list of Topics to match agaist a Regex & start consuming from.
- Topics have to be pre-defined before messages are stored (optionally created with default values)
- Topic creation causes re-partitioning

### When producing messages

With SBA, the key (and/or unique id) of message is naturally included inside the subject (vs explicitly passed as separate argument)
- can use as many tokens as you need (composite key vs single key)
- can include things you know you are going to want to filter on when consuming (vs having to use Kafka Streams)
- remember that subjects can always get mapped (partitioned, split & sliced)

### When consuming messages

Kafka is replay from offset only
    - or you have to use Kafka Streams to create filtered sub-streams

JS Client apps can also 'query' the stream using subject filters
    - pushes the filtering back to nats server vs full stream scan by client app
    - indexing is being used to avoid full stream scan by the server
    - Filtering is more than just by exact match: hierarchical filtering  `*` and `>` wild cards
    - Filtering can be combined with JS time stamping & ability to start scanning from a point of time

## Consuming messages
- Consumers vs Consumer Groups
    TERMINOLOGY: 
    - JS Consumer = Kafka Consumer Group
    - JS Subscriber (to a Consumer) = Kafka Consumer
- JS Consumers are: 
    - Partition-less 'Consumer Group', distributes the messages btw the subscribing client apps.
    - Statefull, and the state can be persisted & repliated
- JS Consumers can:
    - specify a subject filter that can include wildcards, are like a 'view' on a Stream (without having to use Kafka Stream)
    - use pull or push delivery mechanisms (vs pull only)
    - have one-to-many flow control as well as one-to-one flow control (pull)
- Consumer positioning:
    - JS supports: all (start), new (end), message sequence (offset), plus last message, last message for each subject, and from a period of time in the past
    - Kafka is only start, end or specific offset


## Exactly once Quality of service

### At least once
- JS consumers can automatically re-deliver messages & manage ack at the individual message sequence number level:
    - multiple kinds of ack(s) : ack, nack, term, in process
    - you control the re-delivery attempt backoff timings
    - can implement Dead Lock Queue (DLQ)  type functionaltiy
- Kafka consumer groups only support 'Ack All':
    - the client app needs to do it's 'seek' itself for re-deliveries

### Exactly once

**Message de-duplication**
- JS has built-in message de-duplication over configurable time window which works across client app sessions.
    - It is now also possible to have message de-duplication that is not time limited & covers the entire contents of the stream

- Kafka's built-in message de-duplication feature is limited: "The producer can only guarantee idempotence for messages sent within a single session"
    - app crashing before receiving the publication's ack & then restart & re-publishing is actually quite a likely scenario! => Needs Kafka Streams


**Reliable message consumption**
- JS HAS A synchoronous double ack of the consumption of a message feature (AckAck)
- With Kafka the client app must store both the offset & the results of the consumption to some outside system (in order to be able to store them atomically) => Needs Kafka Streams


## Store vs Log
- Memory or file storage (Kafka is file only with memory just for caching)
- JS Stream are read/write
    - working queue/ interest retention policies: use a stream as a queue
    - deletetion of individual messages (with optional 'safe delete' option)
- Encryption at rest
- Limits & discard policies:
    - JS
        - time, number of messages
        - exactly nper subject message limit
            - last value cache
                history of last values
            - distributed locks with discard new per subject
        - discard oldest or refuse the new message, limits are applied each time a new message is published.
        - limits are combined
    - Kafka log is append only with log compaction
        - compaction happends periodically, not each time a new message published: no 'discard policy'
        - time, number of messages
        - 'at least 1' message per key (but you still need to scan the whole stream to find your key)

## Scaling & partitioning: scaling the clusters

### JS

- distributes the streams over the cluster
    - adding or removing servers from a cluster doesnt cause stream re-distribution (unless administratively trigger)
    - adding streams to a cluster means selecting servers for the stream
    - adding or removing client apps from a consumer doesnt cause any redistribution
- can use mirroring btw clusters & leaf nodes to scale out streams

### Kafka
- distributes the partitions over the servers & the client apps over the partitions
    - adding or removing servers from a cluster means redistributing the partitions
    - adding topics means distributing the partitions over the servers in the cluster
    - removing topics many mean re-distributing remaining streams' partitions over the servers in the cluster
    - adding or removing client apps from a consumer group means re-distributing the partitions over the client apps
- requires mirror maker instances to mirror btw users

## Security
- Security models:
    - Kafka: plain or certificate based authenication
    - JS: plain, certificate or JWT-based delegated authentication/authorization with accounts and users
- Multi-tenant security model:
    - JS
        - each account (i.e. tenant) has its own completedly independent subject namespace.
        - within an account, each user in a tenant can be allowed/denied on a per-subject (and per stream operation) basis
        - ability to import/export message streams (with on the fly subject mapping if needed) between accounts
    - Kafka
        - must manually carve parts of the topic namespace for each tenant


## Ecosystem
https://www.benthos.dev/
https://github.com/nats-io/nats-kafka



## Functional overlap

- Kafka broker JVM
- Zookeeper JVM
- Kafka Streams JVM
- Mirror Maker JVM
- Redis
- Messaging broker
- Kafka Connect JVM

 
- NATS Server
- Benthos


https://docs.google.com/presentation/d/e/2PACX-1vRI3QQ7O6J_zi9pq4jCGUjgRQV1cos-ywYby3QwsOZLacBsMrfaxYurHbS9LfeQp0WERLO9zTcre9rT/pub?start=true&loop=false&delayms=5000&slide=id.g1861c2644d6_0_97
