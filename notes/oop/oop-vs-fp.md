---
tags: ["Comparison", "FP", "OOP"]
---
# OOP vs FP

<TagLinks />

## Architecture

:::: quote
- Object-Oriented Programming is the tool best suited for defining how we cross architectural boundaries with polymorphism and plugins
- Functional Programming is the tool we use to push data to the boundaries of our applications
- Structured programming is the tool we use to write algorithms
::: right 
― Uncle Bob *Clean Architecture*
:::
::::

This implies that effective software uses a hybrid all 3 programming paradigms styles at different times.

While you could take a strictly functional or strictly object-oriented approach to writing code, understanding where each excels will improve the quality of your designs.

## Imperative Vs Functional Vs Object-oriented Programming

![compare](https://lh3.googleusercontent.com/pw/ABLVV87HhW57ofpydQRdH4PBs5X-LPRMntRfhzjeE5k08NJbEIouXSe7eAF9s94y54yHCOXOdn8hGOQL6deGtDd0KQD-LzT_VcMTwbw6JLTZn0gLv0Ieo2f4X0CtqVv2fzBTgPHQcsA46Y7gXOQ02TVASavm5OvmIQUZXSgVAvWDHoXHnmxYOKFDlUqqWloR_Kpw8KFGFkZkjgoMqtkQMdf2WiSjyCbolerqsb1SOwux0QQksob_VL8HdiPFsDLKOoMgrJ3ydx3yV16KsHQSMXS6PRAw13XlOo4Rh2NMTKUr9b0kQLP-5unRHlkBMJPDTIYIxDjBSuug0T9goZJjymfBGGtsVBYCDkK2nPGgQujNJfik8d4CSb2poL8USxf2G2AZC8Hlz0fYih9QjR1V5PqETxVul9adieClbvnRb8jDh0PoiQbi9Tb4qOP_xPmhA3QIU7JUBQauvkfg7XbBh-X9ejvL_K9qX7bvuozg-ZGcrjmRV9DuITlYtGIn5dhn5l4K8TIzuvqIpuDZbTF_DQKQBP2BO7gwZoN1Mr-LRN80l3RszeGFcK9bNlqQjYOUD3gZginUqnYl3QTmtsg-MA_uZ8pAga0dvPuZpMs6i3fz7D8MLpCvI4pXlJofshqfiA5Vb86j-RTvAWvGHcKRX2sHNLjfSxWFtQnNBbMfbZQn-aLRA1Uc37DL7XRfjsP-eePnW2OPP3ggBj-qa1B64A2RT8N2TgJOtm7KH6vym48DyD-_Q6dwLmlVBMzyIWnyIu3TfRdrQZlfY628te7PnVumtazOR7fYkETfxcAL76q6YoZQ7P0B8aKw9jRmD9zXhzkp0pZQzzOw9Ue91wmMnjkcAkNV2V_1HOVZTi8KwcHn5ubM_RrOjFCdeLXzouUa3AeF97uDL5pV6lp_9BMumS2AEPXUe3kSKqvqFofmBx_bDw=w499-h640-s-no-gm)


In software development, different programming paradigms offer unique ways to structure code. Three main paradigms are Imperative, Functional, and Object-oriented programming, each with distinct approaches to problem-solving.

### 1. Imperative Programming:
- Works by changing program state through a sequence of commands.
- Uses control structures like loops and conditional statements for execution flow.
- Emphasizes on mutable data and explicit steps for task completion.
- Examples: C, Python, and most procedural languages.

### 2. Functional Programming:
- Relies on pure functions, emphasizing computation without side effects.
- Promotes immutability and the avoidance of mutable state.
- Supports higher-order functions, recursion, and declarative programming.
- Examples: Haskell, Lisp, Scala, and functional features in languages like JavaScript.

### 3. Object-oriented Programming:
- Focuses on modeling real-world entities as objects, containing data and methods.
- Encourages concepts such as inheritance, encapsulation, and polymorphism.
- Utilizes classes, objects, and interfaces to structure code.
- Examples: Java, C++, Python, and Ruby.

### Functional Core, Imperative Shell

Read full at [The Functional Core, Imperative Shell Pattern](https://kennethlange.com/functional-core-imperative-shell/)

1. Keep the domain logic in the Functional Core, and use immutable values & pure functions.
2. Keep the infrastructure code in Imperative Shell, and use mutable values & functions with side effects.
3. The Imperative Shell can call the Functional Core, but not vice versa. (Dependency Rule)


## Complexity

:::: quote
- Object-Oriented Programming makes code understandable by encapsulating (isolating) moving parts (complexity).
- Functional programming makes code understandable by minimizing (reducing) moving parts (complexity).

::: right 
― Michael Feathers
:::
::::

[Functional Programming Vs Object Oriented Programming](https://www.aravindhu.com/software%20development/2020/07/06/FP-Vs-OOP.html)

In OOP, we use encapsulation to prevent objects from being aware of the state mutations of other objects. 
In functional programming, we try to avoid dealing with state mutations instead of encapsulating them.
Classes encapsulate state properties that are then modified by methods, which encourages methods to be stateful and not pure.


### Pillars

| Pillars Of OOP | Pillars Of FP                |
|----------------|------------------------------|
| Inheritance    | Pure Functions               |
| Enscapsulation | Higher Order Functions       |
| Polymorphism   | Immutability                 |
| Abstraction    | Function Partial Application |

### Key Differences

| Functional Programming | OOP   |
|----------------        |-------|
| Uses Immutable data.  | Uses Mutable data. | 
| Follows Declarative Programming Model. | Follows Imperative Programming Model. | 
| Focus is on: “What you are doing” | Focus is on “How you are doing” | 
| Supports Parallel Programming  | Not suitable for Parallel Programming | 
| Its functions have no-side effects | Its methods can produce serious side effects. |
| Flow Control is done using function calls & function calls with recursion | Flow control is done using loops and conditional statements. |
| It uses "Recursion" concept to iterate Collection Data. | It uses "Loop" concept to iterate Collection Data. For example: For-each loop in Java |
| Execution order of statements is not so important. | Execution order of statements is very important. |
| Supports both "Abstraction over Data" and "Abstraction over Behavior". | Supports only "Abstraction over Data". | 

[Read more](https://www.tutorialspoint.com/functional_programming/functional_programming_introduction.htm)


## g ∘ f patterns (aka From Gof to lambda)

by [Mario Fusco](https://twitter.com/mariofusco)

Pattern                 | Lambda
----------------------- | --------------
Command                 | Functions
Strategy                | Functions
Template                | Consumer
Observer                | Consumer
Decorator               | Functions composition
Chain of Responsibility | Stream of functions
Interpreter             | Map of functions
Visitor                 | Pattern matching + Functions


- The video of talk is available [here](https://www.youtube.com/watch?v=lZG74WbnhoE&ab_channel=Devoxx).
- [Source](https://github.com/thomasbricchi/dp-from-gof-to-lambda)