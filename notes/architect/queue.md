---
tags: ["DistributedSystem", "Communication", "MessageQueue"]
---

# Queue notes 

<TagLinks />

## Types of queues 

![types](https://lh3.googleusercontent.com/pw/ABLVV87rUUOHYws8ljDCaZDiNoRzkl2jaFoLbX3BhFyry7p3j-NfU1di7TbB6PKxHR1cdIeOIFmPKxgwW11iwJrRgaQ1-kMUi4Lkibj6QpuHQodeh4acE_4O5UC89tszSBJSVrEvta58ShP8nXqrm_mkDDgvVeUQ_RlwJaRuy9QDrgUMvda37RBsiJw290szoD_sjeanHNWDNJqNOf25_qWXP2Virinl5t0zoioZc_porXZDzrCxJFgdhmLIPRNPqqKgOtyKtXFSrwCIhVWk9Tlf9yYZwt1j2_l9PtduK3TCJ2E70Jzdqu6Es8KJP4jluN3uHFW8nps2fBdlarsjpYTGx7g7cGDJ5KGmQDMgC2alP0M850vcGQjb6vQG9hZKGrtQkPwXYGAKssxk3ymKIg2arkI9DmkUnPbJrW76i6qq02bY1Mk0ynfw1HQi4pKu5HzbaT_gqe2Xa4QlOqe0tLmITLcXgFr3pYoxGLf-F6Glv56ijFZAl4yDq-OyJ8vqgRsbnHmP1lwG9YwkQV3UxBec20bxBgqM82LeJCzPXlJGhLuzLaqhPuTGONysw-Ub5j3RQqu6G9zEC7qed5eJhtfLueVIYV6Kj1k6nzaQ6mR-z1PfyRmmdyVrdISGZz0LAXJ_UVI4-aw34-t5Dxfwq7RDvCPtuaHkF8HIXx_FRVVUW_Y0nAB6OewZsn3Yinp6twK86hIHBiTMp41e7kJhVnwVfuVQNlP-8I0MU-emAvLsP1yFlvbQEafX8Ckj5EesbMuvJ_IkPx8r9_lGSU1Qpm8Q9R_L499MzDa9nSgQ3l390RWiLEk4N1P6Q8XpfWIXGs9QZRqCuX8NVAZUOkPguXT5BXJurcSRaSsfP5EB3GDEG3-NWot2h5eEp34fESeNAGrfMZ8nUk5_dcYKnfRKsd2UCFrHMNPmyJovAFHXgyP1pw=w710-h925-s-no-gm)

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

## How do Message Queues Evolve

![evolve](https://lh3.googleusercontent.com/pw/ABLVV84D6-m1_Sv42RZw2bRP917v81pkcbN7-V9ErWyazB7nrF_gCi6tN_wlj02yNlTErMXiauYsCYxt7A_CijtponFkfX1WIIGumWp_gyZN9QO650_EfNef7wxjLVoZQBrqyjm4KDlUmGeb1NAF1k9KeyrRlOPsexgAXH1SgkmdguP5qAjN8Za7o9UVCvJ9X4FMncauv6ynQzbTWDPbJw_aDHEsTF9QRWn9hcuDUKFxXNg50YU2i0iLJ9p_DA7vIq27tmOXIEHeHRKNNJTDsXg0fXPkFD92gRyhWjnahV1U5XVXrkFyVxdyMK-wHPfO0EY5WSyU7KcOaSm8woG8NbOEpG8d2veqF9ZdWX-g_F5kMponW-upTz92c4yBt0dDLpN2VKyxa9T26yFG28_52jtBKCvoaf7CoY21qxDo8XpHz_hRkmFnjCbsrKwdixReugNOknGVUbG-CX3xk4J-z2cND-bJCC2vyziXCQegfrCqhv_nk-yI5r-KQ8bfrJU81L15eEACSQPX1Z5ct4Y2clXQOBsllXDozNZzElqFwM-4iaMZSP2xohTA1KvLrhUp7rWFEXCo7XNUpUTs8tYMKX3IQknrttPbjBarr_dum_j2mnI6RMyU7VLQmnzEYhtPYjTHMSyBHXd4OMVOXx3zypGAeYuoxQnccX6XXE61skH3ejIbvjwfnVicffWEuqQUokT3GOtrpwQmdEo3Km4RaHOnAPUwctHmeqIZibm25BVxrI-s48RkoZLTsZI742QA7-i_cUIKnnwpLc1Dmfey0v3c_zeSjNgDoNy_xQcRaMDeCk2lCx867ZwI8nh5qVXsHHy1710QEr_9_Ib0THI-adTjhSqq_gid1ZT8cJ-K47pvDgLlHBY1f8ESgr3isDBxH68ZLcvJccVU9XqzAz-0W5xgZk0ucpg1N5z-WlrcGzS_Yw=w716-h925-s-no-gm)

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


## Ref
- [Alex Xu's tweet1](https://twitter.com/alexxubyte/status/1729175223852019723)
- [Alex Xu's tweet2](https://twitter.com/bytebytego/status/1726861680880304638)