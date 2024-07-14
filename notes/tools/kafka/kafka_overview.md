---
tags: ["Tools", "Overview", "Kafka"]
---

# Kafka Overview

<TagLinks />

![Kafka overview](https://i.pinimg.com/564x/88/ed/4d/88ed4d785c0a726ce5b2f7f83b9ba776.jpg)

## Why kafka fast?

![Why kafka fast?](https://i.pinimg.com/originals/ae/a3/f4/aea3f4c6adba03c677a945cd39359126.jpg)

## Workflow
![Kafka in a nutshell](https://i.pinimg.com/564x/56/2e/e2/562ee2e7d7bb05cb62893321c1f618d8.jpg)

### Architecture

![Architecture](https://i.pinimg.com/originals/2c/9c/b2/2c9cb256ddff4bb11d17f8ef665ee855.png)

## Use cases

![Kafka use cases](https://i.pinimg.com/originals/d1/5d/8f/d15d8fab8034171bfd34504c4645f932.gif)

![Kafka use cases](https://i.pinimg.com/originals/a5/14/58/a5145860803c149b4dc3b532e2e21ff3.jpg)

- Log analysis - Log Aggregation
- Data Streamming 
- System Monitoring & Alerting 
- Change Data Capture (CDC) - Data replication
- System Migration - Message queuing

## Event sourcing

![Kafka & event sourcing](https://i.pinimg.com/originals/5d/b7/e7/5db7e7745894c482e4a7d1ad02e495ae.jpg)

## Loss message?

![Loss message](https://i.pinimg.com/originals/26/d7/58/26d758688d75ab34f39f8ccfc92a7f35.gif)

### Producer 
When we call `producer.send()` to send a message, it doesn't get sent to the broker directly. There are two threads and a queue involved in the message-sending process: 
 
1. Application thread 
2. Record accumulator 
3. Sender thread (I/O thread) 
 
We need to configure proper **‘acks’** and **‘retries’** for the producer to make sure messages are sent to the broker. 
 
### Broker 
A broker cluster should not lose messages when it is functioning normally. However, we need to understand which extreme situations might lead to message loss: 
1. The messages are usually flushed to the disk asynchronously for higher I/O throughput, so if the instance is down before the flush happens, the messages are lost. 
2. The replicas in the Kafka cluster need to be properly configured to hold a valid copy of the data. The determinism in data synchronization is important. 
 
### Consumer 
Kafka offers different ways to commit messages. Auto-committing might acknowledge the processing of records before they are actually processed. When the consumer is down in the middle of processing, some records may never be processed. 
 
A good practice is to combine both synchronous and asynchronous commits, where we use asynchronous commits in the processing loop for higher throughput and synchronous commits in exception handling to make sure the the last offset is always committed. 
 

## Kafka vs RabbitMQ

![Kafka vs RabbitMQ](https://i.pinimg.com/originals/3f/6f/ae/3f6fae79735e9445ff03a5cf416bcd38.png)