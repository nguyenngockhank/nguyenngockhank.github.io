---
tags: ["DistributedSystem", "Communication", "MessageQueue"]
---

# Queue notes 

<TagLinks />

## Types of queues 

![types](https://i.pinimg.com/originals/c9/4d/b5/c94db5ee8dbe814e3077b1acc135db4a.jpg)

Explaining the 4 Most Commonly Used Types of Queues in a Single Diagram.

Queues are popular data structures used widely in the system. The diagram below shows 4 different types of queues we often use.

### 1. Simple FIFO Queue
A simple queue follows FIFO (First In First Out). An new element is inserted at the tail of the queue, and an element is removed from the head of the queue.

If we would like to send out email notifications to the users whenever we receive a payment response, we can use a FIFO queue. The emails will be sent out in the same order as the payment responses.

###  2. Circular Queue
A circular queue is also called a circular buffer or a ring buffer. Its last element is linked to the first element. Insertion takes place at the front of the queue and deletion at the end of the queue.

A famous implementation is LMAX’s low-latency ring buffer. Trading components talk to each other via a ring buffer. This is implemented in memory and super fast.

### 3. Priority Queue
The elements in a priority queue have predefined priorities. We take the element with the highest (or lowest) priority from the queue. Under the hood, it is implemented using a max heap or a min heap where the element with the largest or lowest priority is at the root of the heap.

A typical use case is assigning patients with the highest severity to the emergency room while others to the regular rooms.

### 4. Deque
Deque is also called double-ended queue. The insertion and deletion can happen at both the head and the tail. Deque supports both FIFO and LIFO (Last In First Out), so we can use it to implement a stack data structure.


## Cloud patterns 

![Cloud patterns](https://i.pinimg.com/originals/25/26/5f/25265fe7b5f7229e79f8948f258f692b.gif)

## With vs Without

![With vs Without Message queue](https://i.pinimg.com/originals/20/11/63/2011636b56689eb7f102ff049ecc3cef.jpg)


## How do Message Queues Evolve

![evolve](https://i.pinimg.com/originals/4c/65/43/4c6543127c625d12579e9b930f38b42c.gif)

**IBM MQ -> RabbitMQ -> Kafka ->Pulsar, How do message queue architectures evolve?** 
 
### 🔹 IBM MQ 
IBM MQ was launched in 1993. It was originally called MQSeries and was renamed WebSphere MQ in 2002. It was renamed to IBM MQ in 2014. IBM MQ is a very successful product widely used in the financial sector. Its revenue still reached 1 billion dollars in 2020. 
 
### 🔹 RabbitMQ 
RabbitMQ architecture differs from IBM MQ and is more similar to Kafka concepts. The producer publishes a message to an exchange with a specified exchange type. It can be direct, topic, or fanout. The exchange then routes the message into the queues based on different message attributes and the exchange type. The consumers pick up the message accordingly. 
 
### 🔹 Kafka 
In early 2011, LinkedIn open sourced Kafka, which is a distributed event streaming platform. It was named after Franz Kafka. As the name suggested, Kafka is optimized for writing. It offers a high-throughput, low-latency platform for handling real-time data feeds. It provides a unified event log to enable event streaming and is widely used in internet companies. 
 
Kafka defines producer, broker, topic, partition, and consumer. Its simplicity and fault tolerance allow it to replace previous products like AMQP-based message queues. 
 
### 🔹 Pulsar 
Pulsar, developed originally by Yahoo, is an all-in-one messaging and streaming platform. Compared with Kafka, Pulsar incorporates many useful features from other products and supports a wide range of capabilities. Also, Pulsar architecture is more cloud-native, providing better support for cluster scaling and partition migration, etc. 
 
There are two layers in Pulsar architecture: the serving layer and the persistent layer. Pulsar natively supports tiered storage, where we can leverage cheaper object storage like AWS S3 to persist messages for a longer term. 


### Ref
- [Alex Xu's tweet1](https://twitter.com/alexxubyte/status/1729175223852019723)
- [Alex Xu's tweet2](https://twitter.com/bytebytego/status/1726861680880304638)

## Design a Message queue

![Design a Message queue](https://i.pinimg.com/564x/5c/a8/96/5ca896b3b3c53a9d21361264f15f70fc.jpg)

[READ DETAIL](https://medium.com/javarevisited/top-10-object-oriented-analysis-and-design-interview-questions-and-problems-for-experienced-6c3a53b7cb26)