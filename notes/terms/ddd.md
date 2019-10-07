# Domain Driven Design (DDD)

::: tip Domain-Driven Design
is an approach to software development for complex needs by connecting the implementation to an evolving model:
- placing the project's primary focus on the core domain and domain logic
- basing complex designs on a model of the domain
- initiating a creative collaboration between technical and domain experts to iteratively refine a conceptual model that addresses particular domain problems.
:::

It provides us with `strategic and tactical modeling tools` to aid designing high-quality software that meets our business goals.

## Concepts

### Context
The setting in which a word or statement appears that determines its meaning;

### Domain
A sphere of knowledge (ontology), influence, or activity. The subject area to which the user applies a program is the domain of the software;

### Model
A system of abstractions that describes selected aspects of a domain and can be used to solve problems related to that domain;

### Ubiquitous Language
A language structured around the domain model and used by all team members to connect all the activities of the team with the software.

## Strategic domain-driven design

### Bounded Context

::: tip 
Bounded Context is a central pattern in Domain-Driven Design. It is the focus of DDD's strategic design section which is all about dealing with large models and teams. DDD deals with large models by dividing them into different Bounded Contexts and being explicit about their interrelationships.
:::

### Continuous integration
...

### Context map
...


## Building blocks

### Entity
> An object that is not defined by its attributes, but rather by a thread of continuity and its identity.

### Value object
> An object that contains attributes but has no conceptual identity. They should be treated as immutable.

### Aggregate
> A collection of objects that are bound together by a root entity, otherwise known as an aggregate root. The aggregate root guarantees the consistency of changes being made within the aggregate by forbidding external objects from holding references to its members.


### Domain Event
> A domain object that defines an event (something that happens). A domain event is an event that domain experts care about.

### Service
> When an operation does not conceptually belong to any object. Following the natural contours of the problem, you can implement these operations in services. See also Service (systems architecture).

### Repository
> Methods for retrieving domain objects should delegate to a specialized Repository object such that alternative storage implementations may be easily interchanged.

### Factory
> Methods for creating domain objects should delegate to a specialized Factory object such that alternative implementations may be easily interchanged.


## Layered Architecture

![Example](@/images/ddd-layers.jpg)

More detail

![Example](@/images/ddd-diagram.png)

### Example
![Example](@/images/ddd-example.png)


## References 

- [BoundedContext](https://martinfowler.com/bliki/BoundedContext.html)
- [Domain-driven design](https://en.wikipedia.org/wiki/Domain-driven_design)
- [DDD - Introduction](https://archfirst.org/domain-driven-design/)
- [DDD - Layered Architecture](https://archfirst.org/domain-driven-design-6-layered-architecture/)
- [Domain-Driven-Design](https://khalilstemmler.com/articles/domain-driven-design-intro/)
- [The 6 Most Common Types of Logic in Large Applications](https://khalilstemmler.com/articles/software-design-architecture/organizing-app-logic/)
- [https://dddcommunity.org/](https://dddcommunity.org/)