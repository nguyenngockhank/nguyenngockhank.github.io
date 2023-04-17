
## Notes

::: quote
*Side effects* are any behavior of a function besides the return value.
*Pure functions* depend only on their arguments and don’t have any side effects.
:::

::: quote
Calculations are *referentially transparent* because a call to a calculation can be replaced by its result.
For instance, + is a calculation. 2 + 3 always results in 5, so you could replace the code 2 + 3 with 5 and have an equivalent program. That means you can call 2 + 3 zero, one, or more times and get the same result.
:::

::: quote
Functional programmers call these implicit inputs and outputs side effects. They are not the main effect of the function (which is to calculate a return value)
:::

::: quote
Copying a mutable value before you modify it is a way to implement immutability. It’s called *copy-on-write*. 
:::

::: quote
A *code smell* is a characteristic of a piece of code that might be a symptom of deeperproblems.
:::

::: quote
We say data is *nested* when there are data structures within data structures, like an array full of objects. The objects are nested in the array. Think of nesting as in Russian nesting dolls—dolls within dolls within dolls.
We say data is *deeply nested* when the nesting goes on for a while. It’s a relative term, but an example might be objects within objects within arrays within objects within objects `...` The nesting can go on a long time.
:::

::: quote
*Shallow copies* only duplicate the top-level data structure of nested data. For instance, if you have an array of objects, a shallow copy will only duplicate the array. The objects inside will be shared with both the original and the copy of the array. We will compare shallow and
deep copies later on.

When two pieces of nested data share some of their references, it is called structural sharing. When it’s all immutable, structural sharing is very safe. Structural sharing uses less memory and is faster than copying everything.
:::

::: quote
Let’s do a quick vocabulary review of some words we’ve already seen:
- *Nested data*: Data structures inside data structures; we can talk about the inner data structure and the top-level data structure
- *Shallow copy*: Copying only the top-level data structure in nested data Structural sharing: Two nested data structures referencing the same nner data structure
:::

::: quote
*Deep copies* duplicate all levels of nested data structures, from the top all the way to the bottom.
:::

::: quote
*Legacy code* to mean existing code (perhaps written with older practices) that we can’t replace at the moment. We have to work with it as is.
:::

::: quote
When modules implement defensive copying when talking to each other, this is often called a *shared nothing architecture* because the modules don’t share references to any data. You don’t want your copy-on-write code to share references with untrusted code.
:::

::: quote
*Stratified design* is a design technique that builds software in layers. It is a practice with long historical roots, with many contributions from many people. However, special mention goes to Harold Abelson and Gerald Sussman for documenting their insights into the practice.
:::

::: quote
A *code smell* is a characteristic of a piece of code that might be a symptom of deeper problems.
:::

::: quote
A *first-class value* can be used just like all of the other values in your language.
:::

::: quote
*Data orientation* is a style of programming that uses generic data structures to represent facts about events and entities
:::

::: quote
*Higher-order functions* take other functions as arguments or return functions as their return values.
:::

::: quote
*Anonymous functions* are functions without names. They can be written inline—right where they are used.
:::

::: quote
In the JavaScript world, functions passed as arguments are often called *callbacks*, but we also hear the same term outside of the JavaScript community. The function you are passing the callback to is expected to call the function. Other communities might call these *handler functions*. Experienced functional programmers are so used to passing functions as arguments, they often don’t need a special name for them.
:::

::: quote
An *inline function* is defined where it is used. For example, a function might be defined in the argument list.
:::


::: quote
*Predicates* are functions that return true or false. They are useful for passing to `filter()` and other higher-order functions.
:::


::: quote
The *identity function* is a function that returns its argument unchanged. It appears to do nothing, but it is useful for indicating just that: othing should be done.
:::

::: quote
The sequence of keys for locating a value in nested objects is called a *path*. The path has one key for each level of nesting.
:::

::: quote
A *recursive function* is a function that is defined in terms of itself. A recursive function will have a recursive call where the function calls itself.
:::

::: quote
A *base case* in recursion is a case with no recursive call that stops the recursion. Each recursive call should make progress toward the base case.
:::

::: quote
A *timeline* is a sequence of actions over time. There can be multiple timelines running at the same time in your system.
:::

::: quote
Actions on different timelines may *interleave* if they can occur between each other. This happens when multiple threads run at the same time.
:::

::: quote
A *queue* is a data structure where items are removed in the same order they are added.
:::

::: quote
A *concurrency primitive* is a piece of reusable functionality that helps share resources across timelines
:::

::: quote
A *race condition* occurs when the behavior depends on which timeline finishes first.
:::

::: quote
An action that only has an effect the first time you call it is called *idempotent*. 
:::

::: quote
There’s more than one name for the *watcher* concept. No name is more correct than the others. You may have heard these other names:
- *Watchers*
- *Observers*
- *Listeners*
- *Event handlers*
- *Callbacks*
They’re all correct and represent similar ideas.
:::


**Functional programming (FP), noun.**
1. a programming paradigm characterized by the use of mathematical functions and the avoidance of side effects
2. a programming style that uses only pure functions without side effects

**software design, noun.**
using one’s aesthetic sense to guide programming choices to improve the ease of coding, testing, and maintaining software



## A higher order function (HOF) 
is a function that follows at least one of the following conditions
- Takes on or more functions as argument
- Returns a function as its result

### data types
- Fundamental data types: int, char, float, etc.
- Derived data types: These data types are derived using built-in data type which are designed by the programmer to store multiple values of same type as per their requirement. For example − Array, Pointer, function, list, etc.
- User-defined data types: These data types are derived using built-in data types which are wrapped into a single a data type to store multiple values of either same type or different type or both as per the requirement. For example − Class, Structure, etc.

## Lazy Evaluation

Lazy evaluation is an evaluation strategy which holds the evaluation of an expression until its value is needed. It avoids repeated evaluation.



## Stratified design

Stratified design is a design technique that builds software in
layers. It is a practice with long historical roots, with many
contributions from many people. However, special mention
goes to Harold Abelson and Gerald Sussman for documenting their insights into the practice



https://mostly-adequate.gitbook.io/mostly-adequate-guide/
https://www.youtube.com/playlist?list=PLuPevXgCPUIMbCxBEnc1dNwboH6e2ImQo