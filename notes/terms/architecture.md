



## Purpose of software architecture

> The goal of software architecture is to minimize the human resources required to build and
maintain the required system.

Software = soft + ware => ware == product 
Hardware = hard + ware => hard to change 

## Functional Programming

### Immutability

All race conditions, deadlock conditions, and concurrent update problems are due to mutable variables

### Event Sourcing

our applications are not `CRUD`; they are just `CR`


## OOP
> A way to model the real world

### SOLID
Good software systems begin with clean code. On the one hand, if the bricks aren’t well made, the architecture of the building doesn’t matter much. On the other hand, you can make a substantial mess with well-made bricks. This is where the SOLID principles come in.

- **SRP**: The Single Responsibility Principle
An active corollary to Conway’s law: The best structure for a software system is heavily influenced by the social structure of the organization that uses it so that each software module has one, and only one, reason to change.


- **OCP**: The Open-Closed Principle
Bertrand Meyer made this principle famous in the 1980s. The gist is that for software systems to be easy to change, they must be designed to allow the behavior of those systems to be changed by adding new code, rather than changing existing code

- **LSP**: The Liskov Substitution Principle
Barbara Liskov’s famous definition of subtypes, from 1988. In short, this principle says that to build software systems from interchangeable parts, those parts must adhere to a contract that allows those parts to be substituted one for another.

- **ISP**: The Interface Segregation Principle
This principle advises software designers to avoid depending on things that they don’t use.

- **DIP**: The Dependency Inversion Principle
The code that implements high-level policy should not depend on the code that implements low-level details. Rather, details should depend on policies.


## COMPONENT COHESION

## REP: The Reuse/Release Equivalence Principle

::: tip
The granule of reuse is the granule of release.
:::

## CCP: The Common Closure Principle

::: tip 
Gather into components those classes that change for the same reasons and at the same
times. Separate into diferent components those classes that change at diferent times and
for diferent reasons.
:::

## CRP: The Common Reuse Principle
php
::: tip
Don’t force users of a component to depend on things they don’t need.
:::


## DTO

::: tip
One case where it is useful to use something like a DTO is **when you have a significant mismatch between the model in your presentation layer and the underlying domain model.** In this case it makes sense to make presentation specific facade/gateway that maps from the domain model and presents an interface that’s convenient for the presentation. It fits in nicely with Presentation Model. This is worth doing, but it’s only worth doing for screens that have this mismatch (in this case it isn’t extra work, since you’d have to do it in the screen anyway.) – Martin Fowler, PoEAA
:::