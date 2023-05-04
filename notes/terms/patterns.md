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