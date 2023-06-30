# Architecture Terms

![Untitled-Diagram.png](./img/Untitled-Diagram.png)

## Right tool for right job
- **Object-Oriented Programming** is the tool best suited for defining how we cross architectural boundaries with polymorhpism and plugins
- **Functional programming** is the tool we use to push data to the boundaries of our applications
- and **Structured programming** is the tool we use to write algorithms


[📓 Functional in the small, OO in the large](https://www.johndcook.com/blog/2009/03/23/functional-in-the-small-oo-in-the-large/)

## Availability tactics 
Availability tactics have one of three purposes:
- fault detection
- fault recovery
- fault prevention.

will often be provided by a software infrastructure, such as a middleware package

## Vertical scaling vs. Horizontal scaling
- **Horizontal scaling** (*scale out*) means that you scale by adding more machines into your pool of resources 
- **Vertical scaling** (*scale up*) means that you scale by adding more power (CPU, RAM) to an existing machine.


## Locking Approaches
- **Pessimistic approaches** lock data records to prevent conflicts.
- **Optimistic approaches** detect conflicts and fix them.

## Two-phase commit (2PC) vs. SAGA
- 2PC works as a single commit and aims to perform ACID transactions on distributed systems.
- On the other hand, SAGA works sequentially, not as a single commit. Each operation gets committed before the subsequent one, and this makes the data eventually consistent. Thus, Saga consists of multiple steps whereas 2PC acts like a single request.

## Orchestration vs Choreography
- **Service orchestration** represents a single centralized executable business process that coordinates the interaction among different services.
- **The choreography** describes the interactions between multiple services, which is defined by exchange of messages, rules of interaction and agreements between two or more endpoints.
[READ MORE](./OrchestrationVsChoreography.md)

## High availability vs. fault tolerance

- **A fault tolerant environment** has no service interruption but a significantly higher cost
- **A highly available environment** has a minimal service interruption.

**Fault tolerance** relies on specialized hardware to detect a hardware fault and instantaneously switch to a redundant hardware component—whether the failed component is a processor, memory board, power supply, I/O subsystem, or storage subsystem. Although this cutover is apparently seamless and offers non-stop service, a high premium is paid in both hardware cost and performance because the redundant components do no processing. More importantly, the fault tolerant model does not address software failures, by far the most common reason for downtime.

**High availability** views availability not as a series of replicated physical components, but rather as a set of system-wide, shared resources that cooperate to guarantee essential services. High availability combines software with industry-standard hardware to minimize downtime by quickly restoring essential services when a system, component, or application fails. While not instantaneous, services are restored rapidly, often in less than a minute.

## High Level Design vs. Low Level Design

**High-Level Design** (HLD) is a general system design. It includes the description of the following parts:

- System architecture
- Database design
- Brief mention of all the platforms, systems, services, and processes the product would depend on
- Brief description of relationships between the modules and system features

All the data flows, flowcharts, data structures, etc. are in these docs, so that developers can understand how the system is expected to work with regards to the features and the database design.

**Low Level Design** (LLD) is a component-level design process that follows a step-by-step refinement process. It provides the details and definitions for the actual logic for every system component. It is based on HLD but digs deeper, going into the separate modules and features for every program in order to document their specifications.


**Detail Level Design** (DLD) is the most detailed technical document, which describes user stories, error processing algorithms, state transitions, logical sequences, and others. DLD describes the interaction of every low-level process with each other.

![hld-lld.png](./img/hld-lld.png)



## Monolithic vs. Microservices 
![mono-microservices](./img/mono-microservices.jpg)

## API Gateway 

Think of an API gateway as a specific type **reverse proxy** implementation.

**Pros**:
- Security benefits: hide sensitive API Endpoints, protects from malicious attack vectors such as DoS attacks, SQL injections, ...
- Decreased complexity: API gateway will manage concerns like  **routing**, **rate limiting**, **user access control**, **token authorization**, scaling among others
- Load balancing
- Monitoring and Analytics
- Over time you’ll add some new API services and retire others, but your clients will still want to find all your services in the same place.

**Cons**:
- high availability applications at scale especially since the API gateway is going to be the single point on of entry between the front end and the APIs it will also act as a single point of failure.
- configuring your application and API to interact via an API Gateway will require some more orchestration which will add a level of difficulty for the developers.
- Performance degradation is a concern impact the speed and reliability of your application.



## Coupling and Cohesion

- **Coupling**: Elements are coupled if a change in one forces a change in the other. *For example, if two classes inherit from a common parent, then a change in one class might require a change in the other.*
- **Cohesion**: An element’s cohesion is a measure of whether its responsibilities form a meaningful unit. *For example, a class that parses both dates and URLs is not coherent, because they’re unrelated concepts.*

## Event Sourcing

![Event Sourcing](./img/es/evensourcing.png)

**Stream**
![Event Sourcing](./img/es/stream.png)

**Event**
![Event](./img/es/event.png)

**Payload**
![Payload](./img/es/payload.png)


[EventStoreDB](https://eventstore.com/)


## Performance terms

- **Response time**: is the amount of time it takes for the system to process a request from the outside.
- **Responsiveness**: how quickly the system acknowledges a request as opposed to processing it.
- **Latency**: is the minimum time required to get any form of response.
- **Throughput**: is how much stuff you can do in a given amount of time.
- **Load**: is a statement of how much stress a system is under, which might be how many users are currently connected to init. The load is usally a context for some other measurement, such as a response time. *E.g: response time is 0.5s with 10 users and 2s with 20users.*
- **Load sensitivity**: is an expression of how the response time varies with the load. 
- **Efficiency**: is performance divided by resources. A system that gets 30 tps on 2 CPUs is more efficient than a system that gets 40tps on 4 CPUs.
- **The Capacity**: is an indication of maximum effective throughput or load.
- **Scalability**: is a measure of how adding resources (usally hardware) affects performance.



##  [Entity-Boundary-Interactor Architecture (1992)](./ebi.md)
aka EBC aka EIC

![fig_7_12_entity_interface_control](@/images/architecture/ebi/fig_7_12_entity_interface_control.jpg)


## [Single Page Application (2002-2003)](./spa.md)
![Example](@/images/architecture/spa/9c897-15aa2cnrij2fvo0rztjczhq.png)


## Hexagonal Architecture (2005)
aka Ports & Adapters Architecture
![hexagonal](@/images/architecture/hexagonal-arch-4-ports-adapters2.png)

## Model-View-ViewModel – MVVM (2005)
![MVVM](@/images/architecture/mvvm.png)


## [Command Query Responsibility Segregation - CQRS (2006)](./cqrs.md)
![CQRS](@/images/architecture/cqrs/2006-1-cqrs.png)

& Event Sourcing (ES) (2006)


## Onion Architecture (2008)
![Onion Architecture](@/images/architecture/Onion1.png)

## [Clean Architecture (2012)](./clean_A.md)
![Clearn Architecture](@/images/architecture/cleanarchitecture.jpg)


**2009**
- Microservices (at Netflix)

**2014**
- C4 Model

## Web & Bài viết hay 

- [https://microservices.io/](https://microservices.io/)
- [Martin Fowler](https://martinfowler.com/)
- [codingthearchitecture.com - Simon Brown](http://www.codingthearchitecture.com/)
- [The Software Architecture Chronicles - Herberto Graça](https://herbertograca.com/2017/07/03/the-software-architecture-chronicles/)
- [How to Learn Software Design and Architecture](https://khalilstemmler.com/articles/software-design-architecture/full-stack-software-design/)



## Others
### problems:
1. Overload         =>  recruitment
2. Complexity       =>  seperation of concerns
3. Mishaps          =>  fault tolerance

### Extensibility

### Preprocessing using cron jobs

### Backup servers

### Distributed Systems
