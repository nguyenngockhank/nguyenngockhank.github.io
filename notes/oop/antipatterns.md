---
tags: ["Pattern"]
---

# Anti-Patterns

<TagLinks />

[Software Development AntiPatterns](https://sourcemaking.com/antipatterns/software-development-antipatterns)

## Premature Optimization
Optimizing before you have enough information to make educated conclusions about where and how to do the optimization.

It is very difficult to know exactly what will be the bottleneck in practice. Attempting to optimize prior to having empirical data is likely to end up increasing code complexity and room for bugs with negligible improvements.


## Reinventing the Wheel
// ... 

## Dependency Hell
// ... 

## Spaghetti Code
// ... 

## Cargo-Cult Programming
Cargo Cult Programming is a term used to describe the process of developing software without really understanding the languages, tools, techniques, and frameworks used to develop it. 


## Copy and Paste Programming
// ... 

## Lava Flow

Lava flow is considered an anti-pattern, a commonly encountered phenomenon leading to poor design.

## Golden Hammer
// ... 

## Dead Code

The term [dead code](https://en.wikipedia.org/wiki/Dead_code) has multiple definitions
- code which can never be executed at run-time.
- a section in the source code of a program which is executed but whose result is never used in any other computation.

Have you ever come across a function where no team member knows what it does, but it works and is referred to everywhere. That's dead code because
1. no one knows how to change/fix it.
2. One day, one tweak, and it's going to make the system dead

## Hard Coding / Magic value 
// ... 

## Soft Coding
// ... 

## God Class / The Blob
// ... 

## Bikeshedding

Tendency to spend excessive amounts of time debating and deciding on trivial and often subjective issues.

## Analysis Paralysis

Over-analyzing to the point that it prevents action and progress.

## References

- [9 Anti-Patterns Every Programmer Should Be Aware Of](https://sahandsaba.com/nine-anti-patterns-every-programmer-should-be-aware-of-with-examples.html#premature-optimization)