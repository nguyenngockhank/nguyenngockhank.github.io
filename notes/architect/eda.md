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

## Event Patterns

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

## Queue patterns

### Copier

![Copier pattern](https://i.pinimg.com/originals/c9/76/51/c976519367f48a2e1c6051046604bc30.jpg)

A copier duplicates a single stream of work items into two or more identical streams.

This pattern is useful when multiple pieces of work are needed on the same work item. 

An example of this might be rendering a video. Depending on where the video is intended to be shown, there are many formats that are useful when rendering a video. 
- A high-resolution format for playing off of a hard drive
- A rendering for digital streaming
- An animated GIF thumbnail.

These work items can be modeled as separate work queues for each render, but the input to each work item is identical.

###  Process & Filter

![Process & Filter](https://i.pinimg.com/originals/5f/26/21/5f2621999129356c5f07534658eea16c.png)

The role of a filter is to reduce a stream of work items to a smaller stream of work items by filtering out work items that don't meet particular criteria. 

For example, a batch workflow that handles new users signing up for a service. 
- Some users checked the option to be contacted via email for promotions and other information. 
- In this case, you can filter the set of newly signed-up users to only those who have explicitly opted to be contacted. 

The original producer provides the complete list of items to be worked on, and the filter then adjusts that list based on the filter criteria and only produces those filtered results to the next work queue.

### Process & Split

![Process & Split](https://i.pinimg.com/originals/31/3b/a2/313ba2ab831119b838c3d9503b690995.png)

The role of a splitter is to evaluate some criteria (like a filter), but instead of removing the input, the splitter sends different inputs to different queues based on those criteria.

An example of an application of the splitter pattern is online order processing, where people can receive shipping notifications via email or text message.

Given a work queue of shipped items, the splitter splits it into two queues: one responsible for sending emails and one for sending text messages.

A Copier and two Filters can also implement a Splitter.

### Sharder

![Sharder pattern](https://i.pinimg.com/originals/74/0d/0b/740d0bd2e472c75a22f9ce9a8ec7d053.png)

The role of a shader in a workflow is to divide a single queue into an evenly divided collection of work items based on some sharding function. 

One reason for sharding is reliability. If you shard your work queue, then the failure of a single workflow only affects a fraction of your service. 

Imagine you push a bad update to your worker container, which causes your workers to crash and your queue to stop processing work items. 

If you only have a single work queue processing items, your service will have a complete outage, with all users affected. 

### Merger

A merger is the opposite of a copier; its job is to combine two different work queues into a single queue. 

For example, many different source repositories may add new commits simultaneously. 

You want to take each of these commits and perform a build-and-test. 

Creating a separate build infrastructure for each source repository is not scalable. 

We can model each source repository as a separate work queue source that provides a set of commits.

Using a merger adapter, we can transform these different work queue inputs into a single merged set of inputs. 

This merged stream of commits is then the single source of the build system that performs the actual build. 

The merger is another great example of the adapter pattern, though in this case, the adapter is adapting multiple running source containers into a single merged source.


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
