(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{1311:function(e,t,a){"use strict";a.r(t);var n=a(7),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"event-sourcing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-sourcing"}},[e._v("#")]),e._v(" Event Sourcing")]),e._v(" "),a("p",[e._v("Event Sourcing is a data management pattern where the state of an application is represented by a sequence of events. Instead of storing the current state of an object, you store a log of all the events that have happened to it.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.pinimg.com/originals/ed/da/aa/eddaaad962d688c328101153c5d91654.jpg",alt:"Event sourcing"}})]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("h3",{attrs:{id:"how-it-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[e._v("#")]),e._v(" How it works")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Event Creation")]),e._v(": Whenever a change occurs in the system, an event is generated to capture the change.")]),e._v(" "),a("li",[a("strong",[e._v("Event Appending")]),e._v(": The event is appended to an immutable event store. This log is append-only, meaning events can only be added, never modified or deleted.")]),e._v(" "),a("li",[a("strong",[e._v("State Reconstruction")]),e._v(": When needed, the current state of the system can be reconstructed by replaying all events from the beginning.")])]),e._v(" "),a("h3",{attrs:{id:"key-characteristics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-characteristics"}},[e._v("#")]),e._v(" Key Characteristics:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Immutability")]),e._v(": Events are immutable, meaning they cannot be changed once created.")]),e._v(" "),a("li",[a("strong",[e._v("Append-only")]),e._v(": Events are added to the end of the event store, ensuring data integrity.")]),e._v(" "),a("li",[a("strong",[e._v("Replayability")]),e._v(": The system can be restored to any point in time by replaying events up to that point.")])]),e._v(" "),a("h3",{attrs:{id:"benefits-of-event-sourcing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#benefits-of-event-sourcing"}},[e._v("#")]),e._v(" Benefits of Event Sourcing:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Auditability")]),e._v(": The complete history of the system is preserved, allowing for easy auditing and debugging.")]),e._v(" "),a("li",[a("strong",[e._v("Time Travel Debugging")]),e._v(": You can replay events to recreate specific system states.")]),e._v(" "),a("li",[a("strong",[e._v("Event-Driven Architecture")]),e._v(": Event Sourcing naturally fits into Event-Driven Architectures, enabling real-time processing and distributed systems.")]),e._v(" "),a("li",[a("strong",[e._v("CQRS (Command Query Responsibility Segregation)")]),e._v(": Event Sourcing often complements CQRS by providing an event store as the source of truth.")])]),e._v(" "),a("h3",{attrs:{id:"use-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[e._v("#")]),e._v(" Use cases")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.pinimg.com/originals/5d/b7/e7/5db7e7745894c482e4a7d1ad02e495ae.jpg",alt:"Use cases"}})]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Financial systems")]),e._v(": Tracking transactions and generating reports.")]),e._v(" "),a("li",[a("strong",[e._v("Gaming")]),e._v(": Storing game state for replay and analysis.")]),e._v(" "),a("li",[a("strong",[e._v("IoT systems")]),e._v(": Capturing sensor data for analysis and troubleshooting.")]),e._v(" "),a("li",[a("strong",[e._v("Fraud detection")]),e._v(": Analyzing event logs to identify suspicious patterns.")])]),e._v(" "),a("h3",{attrs:{id:"crud-vs-event-sourcing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crud-vs-event-sourcing"}},[e._v("#")]),e._v(" CRUD vs Event Sourcing")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.pinimg.com/originals/92/1e/53/921e532b0adebc33c2e0eb4dec2d0c94.jpg",alt:"CRUD vs ES"}})]),e._v(" "),a("h3",{attrs:{id:"event-sourcing-cqrs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-sourcing-cqrs"}},[e._v("#")]),e._v(" Event sourcing & CQRS")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.pinimg.com/originals/13/41/f6/1341f69dcdcb1434395689f060c1e183.webp",alt:"Event sourcing & CQRS"}})]),e._v(" "),a("h2",{attrs:{id:"terms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#terms"}},[e._v("#")]),e._v(" Terms")]),e._v(" "),a("p",[a("strong",[e._v("Event")]),e._v(": An event represents a specific occurrence or action that has happened in the system. It encapsulates all the relevant information about the event, such as the event type, timestamp, and any additional data associated with the event. Events are immutable and should not be modified once they are created.")]),e._v(" "),a("p",[a("strong",[e._v("Aggregate")]),e._v(": An aggregate is a domain object or a group of domain objects that are treated as a single unit within the event sourcing pattern. Aggregates are responsible for handling commands and generating events based on the business logic. They encapsulate the state and behavior of the domain objects they represent.")]),e._v(" "),a("p",[a("strong",[e._v("Command")]),e._v(": A command is a request or an action that is sent to an aggregate to perform a specific operation. Commands are typically initiated by external systems or user interactions. When a command is received, the aggregate processes it and generates one or more events as a result.")]),e._v(" "),a("p",[a("strong",[e._v("Event Store")]),e._v(": The event store is a persistent storage mechanism that stores all the events generated by the aggregates. It provides an append-only log of events, allowing the system to reconstruct the application's state by replaying the events in the correct order. The event store should be designed to handle high write throughput and provide efficient querying capabilities.")]),e._v(" "),a("p",[a("strong",[e._v("Projection")]),e._v(": A projection is a read model that represents a specific view of the application's state. Projections are created by subscribing to the events in the event store and updating the read model accordingly. They are optimized for querying and provide a denormalized view of the data to support efficient read operations.")]),e._v(" "),a("p",[a("strong",[e._v("Snapshot")]),e._v(": A snapshot is a point-in-time representation of an aggregate's state. It is used to optimize the process of reconstructing an aggregate's state by reducing the number of events that need to be replayed. Snapshots are periodically taken and stored in the event store alongside the events.")]),e._v(" "),a("h3",{attrs:{id:"projection-vs-snapshot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#projection-vs-snapshot"}},[e._v("#")]),e._v(" Projection vs Snapshot")]),e._v(" "),a("h3",{attrs:{id:"projection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#projection"}},[e._v("#")]),e._v(" Projection")]),e._v(" "),a("p",[e._v("A projection in event sourcing refers to the process of transforming a stream of events into a read model that can be queried for specific information. It is essentially a way to create a denormalized view of the events that have occurred in the system.")]),e._v(" "),a("p",[e._v('Projections are typically used to generate views or reports that provide a specific perspective on the data. They can be used to answer questions like "What is the current state of a particular entity?" or "What are the total sales for a specific product?"')]),e._v(" "),a("p",[e._v("Projections are usually implemented as separate components or services that subscribe to the event stream and update their internal state accordingly. They can be updated in real-time or periodically, depending on the requirements of the system.")]),e._v(" "),a("h3",{attrs:{id:"snapshot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snapshot"}},[e._v("#")]),e._v(" Snapshot")]),e._v(" "),a("p",[e._v("A snapshot, on the other hand, is a mechanism used to optimize the performance of event sourcing systems. It involves taking a snapshot of the current state of an aggregate or entity and storing it separately from the event stream.")]),e._v(" "),a("p",[e._v("The purpose of a snapshot is to reduce the amount of events that need to be replayed when reconstructing the state of an aggregate. Instead of replaying all the events from the beginning of time, the system can start from the latest snapshot and then apply only the events that occurred after the snapshot was taken.")]),e._v(" "),a("p",[e._v("Snapshots are typically taken at regular intervals or when a certain threshold is reached (e.g., number of events or elapsed time). They can be stored in a separate database or alongside the event stream, depending on the implementation.")]),e._v(" "),a("p",[e._v("By using snapshots, the system can significantly reduce the time and resources required to rebuild the state of an aggregate, especially when dealing with large event streams.")]),e._v(" "),a("h2",{attrs:{id:"common-problems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-problems"}},[e._v("#")]),e._v(" Common Problems")]),e._v(" "),a("h3",{attrs:{id:"complexity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#complexity"}},[e._v("#")]),e._v(" Complexity")]),e._v(" "),a("p",[e._v("Event sourcing introduces additional complexity to the system architecture. Instead of storing the current state of an entity, event sourcing requires storing a sequence of events that represent changes to the entity's state over time. This can make the system more difficult to understand, implement, and maintain, especially for developers who are not familiar with event sourcing.")]),e._v(" "),a("h3",{attrs:{id:"event-schema-evolution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-schema-evolution"}},[e._v("#")]),e._v(" Event Schema Evolution")]),e._v(" "),a("p",[e._v("As the system evolves, the structure and semantics of events may change. This can lead to challenges when dealing with event schema evolution. For example, if a new field needs to be added to an event, existing events may need to be migrated or transformed to accommodate the change. Managing event schema evolution can be complex and requires careful planning and coordination.")]),e._v(" "),a("h3",{attrs:{id:"event-replay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-replay"}},[e._v("#")]),e._v(" Event Replay")]),e._v(" "),a("p",[e._v("Event replay is a common technique used in event sourcing to rebuild the state of an entity by replaying the events that have occurred. However, event replay can be resource-intensive and time-consuming, especially for systems with a large number of events. It is important to optimize the event replay process to ensure efficient and timely system recovery.")]),e._v(" "),a("h3",{attrs:{id:"event-ordering-and-consistency"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-ordering-and-consistency"}},[e._v("#")]),e._v(" Event Ordering and Consistency")]),e._v(" "),a("p",[e._v("Maintaining event ordering and consistency can be challenging in distributed systems. Events may be generated and processed concurrently, leading to potential conflicts and inconsistencies. Ensuring that events are processed in the correct order and that the system remains consistent can require careful coordination and synchronization mechanisms.")]),e._v(" "),a("h3",{attrs:{id:"performance-and-scalability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance-and-scalability"}},[e._v("#")]),e._v(" Performance and Scalability")]),e._v(" "),a("p",[e._v("Event sourcing can have performance and scalability implications. Storing and processing a large number of events can put a strain on system resources and impact performance. It is important to design the system in a way that can handle the expected event load and scale as needed.")]),e._v(" "),a("h3",{attrs:{id:"debugging-and-testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debugging-and-testing"}},[e._v("#")]),e._v(" Debugging and Testing")]),e._v(" "),a("p",[e._v("Debugging and testing event-sourced systems can be more challenging compared to traditional systems. Since the current state of an entity is not directly stored, it may be more difficult to inspect and debug issues. Additionally, testing the system's behavior and ensuring correctness can require specialized testing techniques and tools.")]),e._v(" "),a("h2",{attrs:{id:"best-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[e._v("#")]),e._v(" Best Practices")]),e._v(" "),a("p",[e._v("Event sourcing is a powerful technique for building scalable and resilient systems. It allows you to capture and store every change made to an application's state as a series of events. These events can then be replayed to reconstruct the state of the application at any point in time. However, to ensure the success of an event sourcing implementation, it is important to follow certain best practices. In this article, we will discuss some of these best practices.")]),e._v(" "),a("h3",{attrs:{id:"_1-design-events-as-immutable-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-design-events-as-immutable-data"}},[e._v("#")]),e._v(" 1. Design Events as Immutable Data")]),e._v(" "),a("p",[e._v("When designing events, it is crucial to treat them as immutable data. Once an event is created, it should not be modified. This ensures that the historical record of events remains intact and can be relied upon for auditing, debugging, and replaying purposes. By making events immutable, you also avoid any unintended side effects that could occur if events were mutable.")]),e._v(" "),a("h3",{attrs:{id:"_2-use-domain-driven-design-ddd-principles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-use-domain-driven-design-ddd-principles"}},[e._v("#")]),e._v(" 2. Use Domain-Driven Design (DDD) Principles")]),e._v(" "),a("p",[e._v("Event sourcing works best when combined with Domain-Driven Design (DDD) principles. DDD helps in modeling the domain and defining the boundaries of aggregates, which are the consistency boundaries within which events are applied. By following DDD principles, you can ensure that your events accurately represent the business domain and capture the intent of the changes being made.")]),e._v(" "),a("h3",{attrs:{id:"_3-version-events-and-handle-evolution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-version-events-and-handle-evolution"}},[e._v("#")]),e._v(" 3. Version Events and Handle Evolution")]),e._v(" "),a("p",[e._v("As your application evolves, the structure of events may change. It is important to version your events and handle their evolution gracefully. This can be done by introducing new event types and providing backward compatibility for older versions. By versioning events, you can ensure that the historical events can still be replayed correctly, even when the structure of events has changed.")]),e._v(" "),a("h3",{attrs:{id:"_4-use-eventual-consistency"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-use-eventual-consistency"}},[e._v("#")]),e._v(" 4. Use Eventual Consistency")]),e._v(" "),a("p",[e._v("Event sourcing promotes eventual consistency, where changes to the application state are propagated asynchronously through events. This means that the state of the application may not be immediately updated after a command is executed. It is important to design your system to handle eventual consistency and ensure that users are aware of any delays in state updates.")]),e._v(" "),a("h3",{attrs:{id:"_5-implement-event-replay-and-projection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-implement-event-replay-and-projection"}},[e._v("#")]),e._v(" 5. Implement Event Replay and Projection")]),e._v(" "),a("p",[e._v("One of the key benefits of event sourcing is the ability to replay events to reconstruct the state of the application. Implementing event replay and projection mechanisms allows you to rebuild the state of the application from scratch or at specific points in time. This can be useful for debugging, auditing, or generating reports.")]),e._v(" "),a("h3",{attrs:{id:"_6-ensure-data-integrity-and-security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-ensure-data-integrity-and-security"}},[e._v("#")]),e._v(" 6. Ensure Data Integrity and Security")]),e._v(" "),a("p",[e._v("Since events are the source of truth in an event sourcing system, it is important to ensure their integrity and security. Use techniques like event hashing and digital signatures to verify the authenticity and integrity of events. Implement access controls and encryption to protect sensitive event data.")]),e._v(" "),a("h3",{attrs:{id:"_7-monitor-and-measure-performance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-monitor-and-measure-performance"}},[e._v("#")]),e._v(" 7. Monitor and Measure Performance")]),e._v(" "),a("p",[e._v("Event sourcing can introduce additional complexity and overhead compared to traditional data storage approaches. It is important to monitor and measure the performance of your event sourcing system to identify any bottlenecks or performance issues. Use tools and techniques like event sourcing frameworks, distributed tracing, and performance testing to ensure the system meets the required performance criteria.")]),e._v(" "),a("h2",{attrs:{id:"tools-for-event-stores"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tools-for-event-stores"}},[e._v("#")]),e._v(" Tools for Event Stores")]),e._v(" "),a("p",[e._v("Choosing the right tool for your event store is crucial for the success of your event sourcing implementation. Here are some popular options:")]),e._v(" "),a("p",[a("strong",[e._v("Dedicated Event Stores")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("EventStoreDB")]),e._v(": Specifically designed for event sourcing, offering high performance, scalability, and features like projections and subscriptions.")]),e._v(" "),a("li",[a("strong",[e._v("Apache Kafka")]),e._v(": While primarily a message queue, it can also be used as an event store, offering high throughput and durability.")])]),e._v(" "),a("p",[a("strong",[e._v("Relational Databases")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("PostgreSQL")]),e._v(": With extensions like pg_cron and hstore, PostgreSQL can be adapted for event sourcing, but it's generally not the optimal choice due to performance limitations for append-only workloads.")]),e._v(" "),a("li",[a("strong",[e._v("SQL Server")]),e._v(": Similar to PostgreSQL, it can be used for event sourcing but has performance limitations compared to dedicated solutions.")])]),e._v(" "),a("p",[a("strong",[e._v("NoSQL Databases")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("MongoDB")]),e._v(": Can be used for event storage, but it's not optimized for append-only workloads and might have performance issues at scale.")]),e._v(" "),a("li",[a("strong",[e._v("Cassandra")]),e._v(": Offers high performance and scalability, but it might require additional development effort for event sourcing specific features.")])]),e._v(" "),a("p",[a("strong",[e._v("Other Options")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Custom-built event stores:")]),e._v(" For specific requirements or performance optimization, you can build your own event store. However, this requires significant development effort and expertise.")])]),e._v(" "),a("p",[a("strong",[e._v("Key Considerations When Choosing an Event Store")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Performance")]),e._v(": The event store should handle high write throughput and low latency.")]),e._v(" "),a("li",[a("strong",[e._v("Scalability")]),e._v(": It should be able to handle increasing data volumes and growing numbers of events.")]),e._v(" "),a("li",[a("strong",[e._v("Durability")]),e._v(": Events should be persisted reliably to prevent data loss.")]),e._v(" "),a("li",[a("strong",[e._v("Features")]),e._v(": Consider features like projections, subscriptions, and query capabilities that align with your application's needs.")]),e._v(" "),a("li",[a("strong",[e._v("Cost")]),e._v(": Evaluate the cost of the event store, including licensing, hardware, and operational expenses.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);