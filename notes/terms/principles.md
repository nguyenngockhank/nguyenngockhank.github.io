# Principles

## Coding Principles

### Keep It Simple, Stupid (KISS)

::: quote
It means you should be writing code as **simple as possible**. Don't get caught up in trying to be overly clever or showing off with a paragraph of advanced code. If you can write a script in one line, write it in one line.
:::

### Don't repeat yourself (DRY)

::: quote
*Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.*
:::

[Read more](./97things4dev.html#_30-%E2%9C%85-nguyen-tac-dry-don-t-repeat-yourself)

### Separation Of Concerns

::: quote
The separation of concerns principle is an **abstract version of [the single responsibility principle](#single-responsibility-priciple-srp)**. This idea states that a program should be designed with different containers, and these containers should not have access to each other.
:::

### You Aren't Going To Need It (YAGNI)

::: quote
This principle means you **should never code for functionality on the chance that you may need in the future**. Don't try and solve a problem that doesn't exist.
:::

## SOLID Principles

### Single responsibility priciple (SRP)

An active corollary to Conway's law: 

::: quote
*The best structure for a software system is heavily influenced by the social structure of the organization that uses it so that **each software module has one, and only one, reason to change**.*
:::


### Open/Closed principle (OCP)

Bertrand Meyer made this principle famous in the 1980s. 

::: quote
*Open for extension but closed for modification.*
:::

### Liskov substitution principe (LSP)

Barbara Liskov’s famous definition of subtypes, from 1988. 

::: quote
*In short, this principle says that to build software systems from interchangeable parts, those parts must adhere to a contract that allows those parts to be substituted one for another.*
:::

### Interface segregation principle (ISP)

::: quote
*This principle advises software designers to avoid depending on things that they don’t use.*
:::


### Dependency inversion principle (DIP)

::: quote
*The code that implements high-level policy should not depend on the code that implements low-level details. Rather, details should depend on policies.*
:::

## Component Principles

From **Clean Architecture**

### Component Cohension

#### The Reuse/Release Equivalence Principle

::: quote
*The granular of reuse is the granular of release.*
:::

#### The Common Closure Principle

::: quote
*The classes in a component should be closed together against the same kinds of changes. A change that affects a component affects all the classes in that component and no other components.*
:::

#### The Common Reuse Principle

::: quote
*The classes in a component are reused together. If you reuse one of the classes in a component, you reuse them all.*
:::

### Component Coupling

#### The Acyclic Dependencies Principle

::: quote
*Allow no cycles in the component dependency graph.*
:::

#### The Stable Dependencies Principle

::: quote
*Depend in the direction of stability.*
:::

**Stability Metrics**
```
I = Fan-out / (Fan-in + Fan-out)
```
- *I*: Instability
- *Fan-in*: Incomming dependencies
- *Fan-out*: Outgoing dependencies

The *I* metric ranges from 0 to 1. 
- *I* = 0 indicates a maximally stable component.
- *I* = 1 indicates a maximally unstable component.


#### The Stable Abstractions Principle

::: quote
*A component should be as abstract as it is stable.*
:::

**Measuring Abstraction**

```
A = Na / Nc
```
- *A*: Abstractness
- *Nc*: The number of classes in the component
- *Na*: The number of abstract classes and interfaces in the component

The *A* metric ranges from 0 to 1. 
- *A* = 0 implies that the component has no abstract classes at all. 
- *A* = 1 implies that the component contains nothing but abstract classes. 

## GRASP

**GRASP** stands for General Responsibility Assignment Software Principles

### Information Expert

**Problem**: *What is a general principle of assigning responsibilities to objects?*

::: tip Advice
Assign responsibility to the class that has the information needed to fulfill it.
:::

**Information expert** (the expert principle) is a principle used to determine where to delegate responsibilities such as methods, computed fields, and so on.

### Creator

**Problem**: *Who creates object A?*

::: tip Advice
Assign class B the responsibility to create object A if one of these is true (the more the better):
- B **contains or compositely aggregates** A
- B **records**  A
- B **closely uses** A
- B **has the initialising data for** A
:::

### Controller

**Problem**: *What first object beyond the UI layer **receives and coordinates** (“controls”) a system operation?*

::: tip Advice
Assign the responsibility to an object representing one of these choices:
- Represents the overall “system”, a “root object”, a device that the software is running within, or a major subsystem (these are all variations of a facade controller).
- Represents a use case scenario within which the system operation.
Avoid bloated controllers.
:::

### Low coupling


**Problem**: *How to reduce the impact of change?*

::: tip Advice
Assign responsibilities so that (unnecessary) **coupling remains low**. Use this principle to evaluate alternatives. Focus on points of realistic instability or evolution.
:::

**Drawback**: may add additional layers of indirection.

### High cohesion

**Problem**: *How to keep objects focussed, understandable, and manageable, and as a side effect, support Low Coupling?*

::: tip Advice
Assign responsibilities so that **cohesion remains high**. Use this to evaluate alternatives.
:::

Read more: [Law of Cohesion](https://www.thenewagesite.com/index.php/articles/the-laws-of-alice-a-bailey/law-of-cohesion/)

### Polymorphism

**Problem**: *How to handle alternatives based on type? How to create pluggable software components?*

::: tip Advice
When **related alternatives** or **behaviours vary by type** (class), assign responsibility for the behaviour — using polymorphic operations— to the types for which the behaviour varies.
:::

::: quote
*Avoid adding flexibility just because you can.*
:::


### Indirection

**Problem**: *Where to assign a responsibility, to **`avoid direct coupling`** between two (or more) classes? How to decouple objects so that low coupling is supported and reuse potential remains higher?*

::: tip Advice
Assign the responsibility to an **intermediate object** to mediate between other components or services so that they are not directly coupled.
:::

### Pure fabrication

**Problem**: *What object should have the responsibility, when you do not want to violate High Cohesion and Low Coupling, or other goals, but solutions offered by Information Expert (for example) are not appropriate?*

::: tip Advice
Assign a highly cohesive set of responsibilities to an artificial or convenience class that does not represent a domain concept—sometimes invented to support high cohesion, low coupling, and reuse.
:::

### Protected variations

**Problem**: *How to design objects, subsystems, and systems so that the variations or instability in these elements does not have an undesirable impact on other elements?*

::: tip Advice
Identify points of predicted variation or instability; assign responsibilities to create a **stable interface** around them.
:::

*Interface is used in broadest sense – not just Java interfaces.*

## Key Design Principles

::: tip Separation of Concerns
Divide the components of system into specific features so that there is no overlapping among the components functionality. This will provide high cohesion and low coupling. This approach avoids the interdependency among components of system which helps in maintaining the system easy.
:::

::: tip Single Responsibility Principle
Each and every module of a system should have one specific responsibility, which helps the user to clearly understand the system. It should also help with integration of the component with other components.
:::

::: tip Principle of Least Knowledge
Any component or object should not have the knowledge about internal details of other components. This approach avoids interdependency and helps maintainability.
:::

::: tip Minimize Large Design Upfront
Minimize large design upfront if the requirements of an application are unclear. If there is a possibility of modifying requirements, then avoid making a large design for whole system.
:::

::: tip Do not Repeat the Functionality
Do not repeat functionality specifies that functionality of components should not to be repeated and hence a piece of code should be implemented in one component only. Duplication of functionality within an application can make it difficult to implement changes, decrease clarity, and introduce potential inconsistencies.
:::

::: tip Prefer Composition over Inheritance while Reusing the Functionality
Inheritance creates dependency between children and parent classes and hence it blocks the free use of the child classes. In contrast, the composition provides a great level of freedom and reduces the inheritance hierarchies.
:::

::: tip Identify Components and Group them in Logical Layers
Identity components and the area of concern that are needed in system to satisfy the requirements. Then group these related components in a logical layer, which will help the user to understand the structure of the system at a high level. Avoid mixing components of different type of concerns in same layer.
:::

::: tip Define the Communication Protocol between Layers
Understand how components will communicate with each other which requires a complete knowledge of deployment scenarios and the production environment.
:::

::: tip Define Data Format for a Layer
Various components will interact with each other through data format. Do not mix the data formats so that applications are easy to implement, extend, and maintain. Try to keep data format same for a layer, so that various components need not code/decode the data while communicating with each other. It reduces a processing overhead.
:::

::: tip System Service Components should be Abstract
Code related to security, communications, or system services like logging, profiling, and configuration should be abstracted in the separate components. Do not mix this code with business logic, as it is easy to extend design and maintain it.
:::

::: tip Design Exceptions and Exception Handling Mechanism
Defining exceptions in advance, helps the components to manage errors or unwanted situation in an elegant manner. The exception management will be same throughout the system.
:::

::: tip Naming Conventions
Naming conventions should be defined in advance. They provide a consistent model that helps the users to understand the system easily. It is easier for team members to validate code written by others, and hence will increase the maintainability.
:::

## Others

- [Return Early Pattern](https://medium.com/swlh/return-early-pattern-3d18a41bba8#:~:text=Return%20early%20is%20the%20way,when%20conditions%20are%20not%20met.)
- [Demeter’s Law -  Don’t talk to strangers!](https://dev.to/carlillo/demeters-law-dont-talk-to-strangers-10ep)

- Hollywood Principle "don't call us, we'll call you"

## References 

- [10 Basic Programming Principles Every Programmer Must Know](https://www.makeuseof.com/tag/basic-programming-principles/)
- [10 Coding Principles Every Programmer Should Learn](https://dzone.com/articles/10-coding-principles-every-programmer-should-learn)
- [GRASP (object-oriented design)](https://en.wikipedia.org/wiki/GRASP_(object-oriented_design)#:~:text=General%20Responsibility%20Assignment%20Software%20Patterns,to%20the%20SOLID%20design%20principle.)
- [General Responsibility Assignment Software Patterns](https://gist.github.com/dimabory/56e36474a1bb5573c08f26805a978fb5)
- [Design: GRASP and Refinement](https://www.cs.cmu.edu/~aldrich/214/slides/design-grasp.pdf)
- [GRASP Design Principles](https://krzysztof-kwiecinski.medium.com/grasp-design-principles-de98cae2196c)
- [Principles of Package and Component Design](https://blog.avenuecode.com/principles-of-package-and-component-design)