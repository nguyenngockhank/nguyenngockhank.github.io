---
tags: ["Overview"]
---

# Clean code overview

![overview](https://i.pinimg.com/originals/07/eb/7a/07eb7afd82dd111b4c653c7874a87a0c.jpg)

## Principles

> A principle is an abstraction, a guide to design. A pattern is an implementation that solves a particular problem.

![Programming principles](https://i.pinimg.com/originals/43/73/fa/4373fa9a09a4c4eb4e9c2cf1adcd7d4f.jpg)

### 10 good principles 
![Principles](https://i.pinimg.com/originals/5f/08/67/5f0867f8d9311258ce2e75b0929e0f5d.jpg)

### Refactoring tips

![Refactoring tips](https://i.pinimg.com/originals/49/0e/8f/490e8f754d8aa80fcd3a562eabc73b17.jpg)


### SOLID 

![SOLID](https://i.pinimg.com/originals/94/a7/d7/94a7d7d96fc53ddc9cf08de84bb6074d.jpg)


## OOD patterns

> An antipattern is just like a pattern, except that instead of a solution, it gives something that looks superficially like a solution but isn't one.

![Design patterns](https://i.pinimg.com/originals/9c/bb/7c/9cbb7ccf675aff822cfa2eb81cfc6881.png)

### Creational DP

![Creational DP](https://i.pinimg.com/originals/d4/54/3a/d4543a82e6af15d233795d0646bd0357.png)

### Structural DP

![Structural DP](https://i.pinimg.com/originals/6d/56/5c/6d565c3421d0e0970a13b9b94ca91da9.png)

### Behavioral DP

![Behavioral DP](https://i.pinimg.com/originals/8b/77/ca/8b77ca2587f29a3780d71111446e791a.png)


### Prefer composition over Inheritance

**Inheritance** may be a fundamental feature of OOP, but it is typically over used. The problem with **inheritance** is that it is not as flexible as it looks. Most things you are trying to achieve with **inheritance** can also be achieved with **composition**.

The downside of **inheritance** is that if any errors are made (i.e. in the base class) then they will be inherited down to all the other classes. It also makes bug fixing very difficult as it can be hard to identify in which class an error has been made. In large programs **inheritance** can be very overused.

![Composition vs Inheritance](https://i.pinimg.com/736x/54/17/20/54172065cc6c1a707dcc1450410e3628.jpg)

## Standards

![Standards](https://i.pinimg.com/originals/cc/c7/4d/ccc74d56b7763a357ea3638bc053ccc9.jpg)

## Learning path

![Learning path](https://i.pinimg.com/736x/01/43/62/01436286ed5f27b2ec722a3cffe9efce.jpg)

## Quick Tips

What may be some tips that I as a developer can follow to write clean code?

1. `Never assume, ask, question` Requirements are never complete, it just gets refined with time. Don’t assume when something is unclear.
2. `Think of behaviour in terms of conditions` Good behavior is about compliance to conditions,ensure combinations are well taken care.
3. `Be friends with bug(s)` Do not hate bugs, for they are the ones from who teach you constantly to do better. Learn from each, so that you find it and not others.
4. `Use smart checklists` While coding, be sensitive as what issues can occur. Sensitise & prevent rather than rely only on test to find issues.
5. `Treat code as a living entity` Nothing is frozen. Refactor, refactor constantly to simplify. Clean code is really never done, how much you can do is simply limited by time.
6. `Be sensitive to NFRs` Non-functional requirements cannot be ‘fitted’ in later, so pay attention to load, performance, usability scaling, security, maintainability etc. always.
7. `Don’t be scared to inject bad inputs` Checking correctness with good inputs are fine, but it is incorrect inputs/settings that create unwanted technical debt. Get these out of way early, by ensuring robustness at early stage.
8. `Be purposeful of issues to find via unit test` There are different types of issues that may be there, be clear as to what to strive to prevent, what to go after via unit test and what at higher levels of testing. Ensure clarity of what you are going after. 
9. `Strive to understand how your code will be consumed` It is not meeting a spec, it is not working in isolation, it is about visualising who (i.e other code) will use/consume my code so it can take care of the situations in future.
10. `Unit test is not an after thought or compliance`
The act of unit testing is not a chore or compliance to satisfy someone, it should be natural thing that we do to ensure our code does not stray. Treat this as part of coding, not as another activity post code. Write a script while doing this or jot down stuff to perform this manually. Stay lightweight so that you can repeat this continually. After all, development should be friction-less.

### Debugging tips

![Debugging tips](https://i.pinimg.com/originals/87/e4/6c/87e46cac98bd04323a6a6563896de23e.jpg)