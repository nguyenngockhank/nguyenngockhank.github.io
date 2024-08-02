---
tags: ['Pattern', "Architecture"]
---


# Event-driven architecture (EDA)

Event-Driven Architecture (EDA) is a software design pattern where systems react to events or significant occurrences. Instead of following a strict, predefined flow, components communicate by producing and consuming events.

![EDA](https://i.pinimg.com/originals/5a/7c/14/5a7c14fc09282208748f56b83a3847a8.gif)

**Key Components of EDA:**
- **Events**: These are occurrences or changes in the system that trigger actions. Examples include user clicks, database updates, or sensor readings.   
- **Event Producers**: Components that generate events.   
- **Event Consumers**: Components that react to events and perform specific actions.   
- **Event Broker**: A middleware component that facilitates the distribution of events to interested consumers.

## Patterns

![Patterns](https://i.pinimg.com/564x/48/06/85/4806853564568b882a026b699422e939.jpg)

### Event Notification 
The Event Notification Pattern is a fundamental building block in Event-Driven Architecture (EDA). It involves using events to communicate changes in the system to interested parties.

### Event-Carried State Transfer (ECST)
Event-Carried State Transfer (ECST) is a pattern where the state of a system is embedded within the events themselves. Instead of merely notifying about a state change, the event carries the complete or partial state information.

### [Event Sourcing](./eventsource.md)

Event Sourcing is a data management pattern where the state of an application is represented by a sequence of events. Instead of storing the current state of an object, you store a log of all the events that have happened to it.


### Command Query Responsibility Segregation (CQRS)

CQRS is a pattern that separates the read and write operations for a data store. This separation allows for optimization of both read and write operations independently, leading to improved performance, scalability, and security.

![Event sourcing & CQRS](https://i.pinimg.com/originals/13/41/f6/1341f69dcdcb1434395689f060c1e183.webp)

## Rules in System

![Rules](https://i.pinimg.com/originals/1b/c7/a5/1bc7a50757d22f95963a9eecf12661e3.jpg)

- Rule #1: Use JSON everywhere
- Rule #2: Use standard event envelope
- Rule #3: Use unique event ID
- Rule #4: Use schemas and contracts
- Rule #5: Maintain backward compatibility
- Rule #6: Maintain a schema registry
- Rule #7: Use an event broker
- Rule #8: Use event supporting APIs
- Rule #9: Evolve your events
- Rule #10: Use the storage-first pattern
- Rule #11: Trace your events

![EDA Notes](https://i.pinimg.com/originals/d2/29/b5/d229b5a731e58eb9703531dda4387832.png)

## Nodejs and EDA

Node.js and Event-Driven Architecture (EDA) are intrinsically linked. Node.js's asynchronous, non-blocking nature aligns seamlessly with EDA's core principles.

Node.js and EDA: A Perfect Match
Node.js and Event-Driven Architecture (EDA) are intrinsically linked. Node.js's asynchronous, non-blocking nature aligns seamlessly with EDA's core principles.

**How Node.js Supports EDA**
- **Asynchronous Programming**: Node.js excels at handling multiple concurrent operations without blocking the main thread. This is fundamental to EDA, where events trigger actions independently.
- **Event Loop**: Node.js employs an event loop to process events efficiently, making it ideal for handling a high volume of concurrent connections and asynchronous tasks.
- **I/O Operations**: Node.js is optimized for non-blocking I/O, which is crucial for EDA systems that often involve heavy I/O workloads.
- **Lightweight and Efficient**: Node.js's single-threaded architecture and efficient memory usage make it suitable for building scalable and responsive EDA applications.
