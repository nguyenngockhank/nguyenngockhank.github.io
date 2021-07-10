# Design patterns

## Code reuse

I see 3 levels of reuse 

::: quote
At the lowest level, you reuse classes: class libraries, containers, maybe some class "teams" like container/interator.
:::

::: quote
Frameworks are at the highest level. They really try to distill your design decisions. They identify the key abstractions for solving a problem, represent them by classes and define relationships between them. 
:::

JUnit is a small framework, for example. It is the "Hello, world" of frameworks. It has `Test`, `TestCase`, `TestSuite` and relationships defined.

A framework is typically larger-grained than just a single class. Also, you hook into frameworks by subclassing somewhere. They use the so-called Hollywood principle of `don't call us, we'll call you`. The framework lets you define your custom behavior, and it will call you when it's your turn to do something. Same with JUnit, right? It calls you when it wants to execute a test for you, but the rest happens in the framework.


::: quote
There also is a middle level. This is where I see patterns. Design patterns are both smaller and more abstract than framework. They're really a description about how a couple of classes can relate to and interact with each other. The level of reuse increases when you move classes to patterns and finally frameworks.
:::

What is nice about this middle layer is that patterns offer reuse in a way that is less risky than frameworks. Building a framework is high-risk and significant investment. Patterns let you reuse design ideas and concepts independently of concrete code.

## Design Principles

::: tip Encapsulate what varies
Identify the aspects of your application that vary and separate them from what stats the same.
:::

::: tip Program to and Interface, not an Implementation
Program to an interface, not an implementation. Depend on abstractions, not on concrete classes.
:::

::: tip Favor Composition over Inheritance
- A subclass can't reduce the interface of the superclass.
- When overriding methods you need to make sure that the new behavior is compatible with base one.
- Inheritance breaks encapsulation of the superclass.
:::

## Catalog of design patterns

### Creational Design patterns

::: tip Factory method (aka Virtual Constructor)
Provides an interface for creating objects in a super class, but allows subclasses to alter the type of objects that will be created.
:::


::: tip Abstract Factory
Lets you produce families of related objects without specifying their concrete classes.
:::

::: tip Builder
Lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.
:::

::: tip Prototype (aka Clone)
Lets you copy existing objects without making your code dependent on their classes.
:::

::: tip Singleton
Lets you ensure that a class has only one instance, while providing a global access point to this instance.
:::

### Structural Design patterns

::: tip Adapter (aka Wrapper)
Provides a unified interface that allows objects with incompatible interfaces to collaborate.
:::

::: tip Bridge
Lets you split a large class or a set of closely related classes into 2 separate hierarchies  - abstraction and implementation - which can bne developed independently of each other.
:::

::: tip Composite (aka Object Tree)
Lets you compose objects into 3 structures and then work with these structures as if there were individual objects.
:::

::: tip Decorator (aka Wrapper)
Lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.
:::

::: tip Facade
Provides a simplified interface to a library, a framework, or any other complex set of classes.
:::

::: tip Flyweight (aka Cache)
Lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects, instead of keeping all of the data in each object.
:::

::: tip Proxy
Lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something  either before  or after the request gets through to the original object.
:::

### Behavioral Design patterns

::: tip Chain of Responsibility (aka CoR, Chain of Command)
Lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.
:::

::: tip Command (aka Action, Transaction)
Turns a request into a stand-alone object that contains all information about the request. This transformation lets you parameterize methods with different requests, delay or queue a request's execution, and support undoable operations.
:::

::: tip Iterator
Lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.)
:::

::: tip Mediator (aka Intermediary, Controller)
Lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.
:::

::: tip Memento (aka Snapshot)
Lets you sae and restore the previous state of  an object without revealing the details of its implementation.
:::

::: tip Observer (aka Event-subscriber, Listener)
Lets you defined a subscription mechanism to notify multiple objects about any events that happen to the object they're observing.
:::

::: tip State
Lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.
:::

::: tip Strategy
lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.
:::

::: tip Template Method
Defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.
:::

::: tip Visitor
Lets you separate algorithms from the objects on which they operate.
:::


