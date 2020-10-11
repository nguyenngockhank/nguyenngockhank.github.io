# Architecture Overview

## Clean Architecture
:::: quote
**The goal of software architecture** is to minimize the human resources required to build and maintain the required system. - *Uncle Bob*
::::

**Function** or **Architecture**:

> If you give me a program that works perfectly but impossible to change, then it won't work when the requirements change, and I won't be able to make it work. Therefore the program will becomme **useless**.

> If you give me a program that does not work but easy to change, then I can make it work, and keep it working as requirements change. Therefor the program will remain continually **useful**.

The Architecture of a software system is the shape given to that system by those who build it. The form of that shape is in the division of that system into components, the arrangement of those components, and the ways in which those components communicate with each other.

That purpose of that shape is to facilitate the development, deployment, operation, and maintenance of the software system contained within it.

::: tip
The strategy behind that facilitation is to leave as many options open as possible, for as long as possible.
:::

## A Philosophy of Software Design
:::: quote
*Complexity is anything related to the structure of a software system that makes it hard to understand and modify the system.* - *John Ousterhout*
::::

### Tactical programming vs Strategic programming

::: danger Tactical Programming
In the tactical approach, your main focus is to get something working, such as a new feature or a bug fix. At first glance this seems totally reasonable: what could be more important than writing code that works? However, tactical programming makes it nearly impossible to produce a good system design.
:::

::: tip Strategic Programming
The first step towards becoming a good software designer is to realize that **working code isn’t enough.** It’s not acceptable to introduce unnecessary complexities in order to finish your current task faster. The most important thing is the long-term structure of the system. Most of the code in any system is written by extending the existing code base, so your most important job as a developer is to facilitate those future extensions. Thus, you should not think of “working code” as your primary goal, though of course your code must work. Your primary goal must be to produce a great design, which also happens to work. This is strategic programming.
:::


## Stack
![architecture-stack](./img/architecture-stack.png)


