# Using Kafka in Nodejs

## Installing Kafka

Before we can use Kafka in our Nodejs application, we need to install Kafka on our system. You can download Kafka from the official website: https://kafka.apache.org/downloads

Once you have downloaded Kafka, extract the files to a directory of your choice. You can then start Kafka by running the following command:

```
bin/zookeeper-server-start.sh config/zookeeper.properties

bin/kafka-server-start.sh config/server.properties
```
## Basic
### Creating a Kafka Producer

```js
const kafka = require('kafka-node');
const Producer = kafka.Producer;
const client = new kafka.KafkaClient();
const producer = new Producer(client);

producer.on('ready', function () {
  console.log('Kafka producer is ready');
});

producer.on('error', function (err) {
  console.error('Error occurred while creating Kafka producer:', err);
});

const payloads = [
  { topic: 'test-topic', messages: 'Hello World!' }
];

producer.send(payloads, function (err, data) {
  if (err) {
    console.error('Error occurred while sending message:', err);
  } else {
    console.log('Message sent:', data);
  }
});
```

### Creating a Kafka Consumer

```js
const kafka = require('kafka-node');
const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient();
const consumer = new Consumer(
  client,
  [{ topic: 'test-topic', partition: 0 }],
  { autoCommit: false }
);

consumer.on('message', function (message) {
  console.log('Received message:', message);
});

consumer.on('error', function (err) {
  console.error('Error occurred while creating Kafka consumer:', err);
});
```

## Partition

### Setup
```
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 3 --topic my-topic
```

### Producer
```js
const payloads = [
    { topic: 'my-topic', messages: 'Hello World!', partition: 0 },
];

producer.send(payloads, function (err, data) {
    console.log(data);
});
```

### Consumer
```js
const consumer = new Consumer(
    client,
    [
        { topic: 'my-topic', partition: 0 }
    ],
    {
        autoCommit: false
    }
);
```

## Manual ack / commit

```js
const consumer = new Consumer(
  client,
  [{ topic: 'test-topic', partition: 0 }],
  { autoCommit: false }
);

consumer.on('message', function (message) {
  console.log('Received message:', message.value);

  // Perform some processing on the message

  consumer.commit(function (error, data) {
    if (error) {
      console.error('Error committing message:', error);
    } else {
      console.log('Message committed:', data);
    }
  });
})
```

## Batch processing

### Producer
 
```js
const messages = [
  { topic: 'my-topic', messages: ['message 1', 'message 2', 'message 3'] },
  { topic: 'my-other-topic', messages: ['message 4', 'message 5', 'message 6'] }
];

producer.send(messages, function(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
```

### Consumer

 using the `fetch` method to fetch messages from Kafka in batches.

```js
const consumer = new kafka.Consumer(client, [{ topic: 'my-topic' }]);

consumer.on('message', function(message) {
  console.log(message);
});

consumer.on('error', function(err) {
  console.error(err);
});

consumer.fetch({ maxWaitTime: 1000, minBytes: 1, maxBytes: 1024 * 1024 }, function(err, messages) {
  if (err) {
    console.error(err);
  } else {
    console.log(messages);
  }
});
```

## Dead letter queue (DLQ)

A dead letter queue (DLQ) is a queue where messages that cannot be processed are sent. In Kafka, a DLQ can be implemented using a combination of topics and consumer groups. Here's how to use a DLQ in Kafka:

### Create topic

```
# Main topic
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic my-topic-dlq

# DLQ for main topic
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic my-topic-dlq
```

### Consumer group 

Consumer group 4 main topic

```js
var kafka = require('kafka-node');
var ConsumerGroup = kafka.ConsumerGroup;

var options = {
  kafkaHost: 'localhost:9092',
  groupId: 'my-group',
  sessionTimeout: 15000,
  protocol: ['roundrobin'],
  fromOffset: 'latest'
};

var consumerGroup = new ConsumerGroup(options, 'my-topic');

// Set up a listener for the main topic:
consumerGroup.on('message', function (message) {
  try {
    // process message
  } catch (err) {
    // send message to DLQ
    var producer = new kafka.Producer(client);
    producer.on('ready', function () {
      producer.send([
        { topic: 'my-topic-dlq', messages: [message.value] }
      ], function (err, data) {
        console.log(data);
      });
    });
  }
});
```

Consumer group 4 the DLQ

```js
var options = {
  kafkaHost: 'localhost:9092',
  groupId: 'my-group-dlq',
  sessionTimeout: 15000,
  protocol: ['roundrobin'],
  fromOffset: 'latest'
};

var consumerGroupDLQ = new ConsumerGroup(options, 'my-topic-dlq');

consumerGroupDLQ.on('message', function (message) {
  // process message
});
```

