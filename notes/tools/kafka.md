# Kafka

## Architecture 

Event streaming platform

![ar](https://www.tutorialspoint.com/apache_kafka/images/cluster_architecture.jpg)

### Zoo keeper
manages cluster, brokers, topics, offsets, events,...

### Kafka cluster
- is a distributed system
- is a set of many broker servers (in prod > 3)
- highly scalable & fault tolerant

### Kafka Broker
- form storage layer
- Apps (consumer & producer) use broker to exchange data async
- Broker organized events into 1 or many topics

### Event / Message
- Event is any data captured in real time
- Event Stream is a stream of data in sequence of time from many data sources
- Kafka stores events in files
- Kafka Message Anatomy
![Kafka Message Anatomy](https://media.geeksforgeeks.org/wp-content/uploads/20220720230741/21.png)

### Producer & Consumer 
- Producer: sends events to topic in brokers
- Consumer: read events from topics in brokers
- Producers & Consumers are decoupled, both must provide Serializer/Deserializer for data types of event to convert them into a stream of bytes that Kafka uses to stores & transmits

### Consumer Group
- is a set of consumers which corporate to consume data from topics
- each consumer in group reads 1 partition in topic
- If **total of consumers <= total of partitions**, some consumers read one more partitions
- If **total of consumers > total of partitions**, some consumers will be idle
- One consumer group can consume many topics

![consumer group](https://ibm.github.io/event-streams/images/kafka_overview.png)

### Kafka topic
- a category to organize events in broker
- identified by a name
- broker can have many topics
- Multi-producers can write events to a topic
- Multi-consumers can read events from a / multi topic

### Kafka topic partitions

- A topic is partitioned, break into multi smaller parts
- Parts are located on different brokers

![img0](https://i.stack.imgur.com/qhGRl.png)

The producer will decide target partition to place any message, depending on:
- **Partition id**, if it's specified within the message
- **key % num partitions**, if no partition id is mentioned
- Round robin if neither **partition id** nor **message key** is available in the message means only the value is available

### Kafka Event's Offset
- Offset is a unique id of a message , event's position in partitions
- Offset is unchangeable

### Kafka Partition's Replication
- Every topic partition in replicated *n times* (factor) at different brokers in clsuter
- One partition is leader, other are followers. Producer writes to leader, followers copy.
- If leader fails, a follower is elected to become new leader.
- Replication make sure that messages remain avaibable when some servers are failure
- In production, factor should be odd, 3 , 5 , 7



### Comparision 
| Kafka  | Database |
|--------| ---------|
| Topic  | Table    | 
| Event  | Row      | 
| Offset | Primary key | 
| Partition | Sharding / Horizontal Partition | 
| Partition Replication | Master / Slave or Leader / Follower | 

### Use cases
- Traditional messaging systems
- website activity tracking
- metrics
- log aggregation
- stream processing
- event sourcing
- commit log


## Error handling 
- register callback when publishing message
- store failed message into db 

### Polling Service
- Scheduler to configure & schedule tasks in background
- Read data from source (database, e.g message publishing failed), then send to Kafka server
    - If success, update status or remove
    - If failure, update status & re-send next time or notification

### Dead-letter Topic
- for message consumming failed many times => move to a dead letter topic
- Method use for consumers that cares about the sequence of events.
- Avoid blocking if ordered consumer 
- Avoid data lost
- Name same with original topic with postfix DLT. E.g: 'statistic.DLT'
- use default handler 

```java
DefaultErrorHandler errorHandler(KafkaOperations<String, Object> template) {
    return new DefaultErrorHandler(new DeadLetterPublishingRecoverer(template), new FixedBackOff(1000L, 2));
}
```

### Kafka Consumer non-block retry

```java
@RetryableTopic(attempts = "5", dltTopicSuffix = "-dlt", backoff = @Backoff(delay= 2000, multiplier = 2))
@KafkaListener(id = "statGroup", topic = "stat")
public void listen(Stat stat) {
    // ...
}
```

## Tools
[kafkatool](https://www.kafkatool.com/)


https://www.tutorialspoint.com/apache_kafka/index.htm

