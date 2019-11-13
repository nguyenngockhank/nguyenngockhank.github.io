# The Full-stack Software Design & Architecture Map

> Software design and architecture is a huge topic

::: tip
- Architect a system to serve the needs of it's users
- Write code that's easy to change
- Write code that's easy to maintain
- Write code that's easy to test
:::

## First Principles

First principles is the most effective way to break down problems.

It works by deconstructing a problem all the way down to the atomic level where we can't deconstruct it anymore.

## The Stack

![Stack](https://user-images.githubusercontent.com/6892666/65833569-bb34fc00-e29f-11e9-8516-79cbd9f8f07b.png)


### Stage 1: Clean code

::: tip
- being consistent
- preferring meaningful variable, method and class names over writing comments
- ensuring code is indented and spaced properly
- ensuring all of the tests can run
- writing pure functions with no side effects
- not passing null
:::

### Stage 2: Programming Paradigms

::: tip
- Object-Oriented Programming is the tool best suited for defining how we cross architectural boundaries with polymorhpism and plugins
- Functional programming is the tool we use to push data to the boundaries of our applications
- and Structured programming is the tool we use to write algorithms
:::

### Stage 3: Object-Oriented Programming

Object-Oriented Programming is the clear tool for the job.

### Stage 4: Design Principles

::: tip
- Composition over inheritance
- Encapsulate what varies
- Program against abstractions, not concretions
- The hollywood principle: "Don't call us, we'll call you"
- The SOLID principles, especially the Single responsibility principle
- DRY (Do Not Repeat Yourself)
- YAGNI (You Aren't Gonna Need It)
:::

### Stage 5: Design Patterns

#### Creational
Creational patterns are patterns that control how objects are created.


#### Structural
Structural patterns are patterns that simplify how we define relationships between components.


#### Behavioural
Behavioural patterns are common patterns for facilitating elegant communication between objects.

### Stage 6: Architectural Principles

::: tip
- Component design principles: The Stable Abstraction Principle, The Stable Dependency Principle, and The Acyclic Dependency Principle, for how to organize components, their dependencies, when to couple them, and the implications of accidentally creating dependency cycles and relying on unstable components.
- Policy vs. Detail, for understanding how to separate the rules of your application from the implementation details.
- Boundaries, and how to identify the subdomains that the features of your application belongs within.
:::

### Stage 7: Architectural Styles

#### Structrual

::: tip 
- **Component-based** architectures emphasize separation of concerns between the individual components within a system. Think Google for a sec. Consider how many applications they have within their enterprise (Google Docs, Google Drive, Google Maps, etc). For platforms with lots of functionality, component-based architectures divide the concerns into loosely coupled independent components. This is a horizontal separation.
- **Monolithic** means that the application is combined into a single platform or program, deployed altogether. Note: You can have a component-based AND monolithic architecture if you separate your applications properly, yet deploy it all as one piece.
- **Layered** architectures separate the concerns vertically by cutting software into infrastructure, application, and domain layers.
:::

![Structrual](https://khalilstemmler.com/img/blog/software-architecture-design/app-logic-layers.svg)

#### Messaging

::: tip
- Event-Driven architectures view all signficant changes to state as events. For example, within a vinyl-trading app, a offer's state might change from "pending" to "accepted" when both parties agreee on the trade.
- Publish-subscribe architectures build on top of the Observer design pattern by making it the primary communication method between the system itself, end-users / clients, and others systems and components.
:::

#### Distributed

::: tip
- **Client-server** architecture. One of the most common architectures, where we divide the work to be done between the client (presentation) and the server (business logic).
- **Peer-to-peer** architectures distribute application-layer tasks between equally-privileged participants, forming a peer-to-peer network.
:::


### Stage 8: Architectural Patterns

::: tip
- **Domain-Driven Design** is an approach to software development against really complex problem domains. For DDD to be most successful, we need to implement a layered architecture in order to separate the concerns of a domain model from the infrastrural details that makes the application actually run, like databases, webservers, caches, etc.
- **Model-View Controller** is probably the most well-known architectural pattern for developing user interface-based applications. It works by dividing the app into 3 components: model, view, and controller. MVC is incredibly useful when you're first starting out, and it helps you piggyback towards other architectures, but there hit's a point when we realize MVC isn't enough for problems with lots of business logic.
- **Event sourcing** is a functional approach where we store only the transactions, and never the state. If we ever need the state, we can apply all the transactions from the beginning of time.
:::

### Stage 9: Enterprise patterns

Any architectural pattern you choose will introduce a number of constructs and technical jargon to familiarize yourself with and decide on whether it's worth the effort to use or not.

## Refs

- [How to Learn Software Design and Architecture | The Full-stack Software Design & Architecture Map](https://khalilstemmler.com/articles/software-design-architecture/full-stack-software-design/)