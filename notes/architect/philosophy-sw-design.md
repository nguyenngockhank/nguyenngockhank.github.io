# A Philosophy of Software Design

## Tactical programming vs Strategic programming

::: danger Tactical Programming
In the tactical approach, your main focus is to get something working, such as a new feature or a bug fix. At first glance this seems totally reasonable: what could be more important than writing code that works? However, tactical programming makes it nearly impossible to produce a good system design.
:::

::: tip Strategic Programming
The first step towards becoming a good software designer is to realize that **working code isn’t enough.** It’s not acceptable to introduce unnecessary complexities in order to finish your current task faster. The most important thing is the long-term structure of the system. Most of the code in any system is written by extending the existing code base, so your most important job as a developer is to facilitate those future extensions. Thus, you should not think of “working code” as your primary goal, though of course your code must work. Your primary goal must be to produce a great design, which also happens to work. This is strategic programming.
:::


### Red Flags

::: danger 🚩 Red Flag: Shallow Module 🚩
A shallow module is one whose interface is complicated relative to the functionality it provides. 
Shallow modules don’t help much in the battle against complexity, because the benefit they provide (not having to learn about how they work internally) is negated by the cost of learning and using their interfaces. 
Small modules tend to be shallow.
:::

::: danger 🚩 Red Flag: Information Leakage 🚩
Information leakage occurs when the same knowledge is used in multiple places, such as two different classes that both understand the format of a particular type of file
:::

::: danger 🚩 Red Flag: Temporal Decomposition 🚩
In temporal decomposition, execution order is reflected in the code structure: operations that happen at different times are in different methods or classes.
If the same knowledge is used at different points in execution, it gets encoded in multiple places, resulting in information
leakage.
:::

::: danger 🚩 Red Flag: Overexposure 🚩
If the API for a commonly used feature forces users to learn about other features that are rarely used, this increases the cognitive load on users who don’t need the rarely used features.
:::

::: danger 🚩 Red Flag: Pass-Through Method 🚩
A pass-through method is one that does nothing except pass its arguments to another method, usually with the same API as the passthrough method. This typically indicates that there is not a clean division of responsibility between the classes.
:::

::: danger 🚩 Red Flag: Repetition 🚩
If the same piece of code (or code that is almost the same) appears over and over again, that’s a red flag that you haven’t found the right abstractions.
:::


::: danger 🚩 Red Flag: Special-General Mixture 🚩
This red flag occurs when a general-purpose mechanism also contains code specialized for a particular use of that mechanism. This makes the mechanism more complicated and creates information leakage between the mechanism and the particular use case: future modifications to the use case are likely to require changes to the underlying mechanism as well.
:::

::: danger 🚩 Red Flag: Conjoined Methods 🚩
It should be possible to understand each method independently. If you can’t understand the implementation of one method without also understanding the implementation of another, that’s a red flag. 
This red flag can occur in other contexts as well: if two pieces of code are physically separated, but each can only be understood by looking at the other, that is a red flag.
:::


### Notes

:::: quote
*It is more important for a module to have a simple interface than a simple implementation*
::::

## References 

- [A Philosophy of Software Design: My Take (and a Book Review)](https://blog.pragmaticengineer.com/a-philosophy-of-software-design-review/)