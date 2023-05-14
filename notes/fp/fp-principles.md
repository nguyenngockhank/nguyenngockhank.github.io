---
tags: ["FP", "Pattern"]
---


# Functional Programming Principles


<TagLinks />

https://www.thoughtworks.com/insights/blog/architecture/domain-driven-design-in-functional-programming

https://medium.com/@kumbhar.pradnya/functional-programming-principles-6f59bc6764ff

## The three categories of code in FP

### Actions

Anything that depends on when it is run, or how many times it is run, or both, is an action. If I send an urgent email today, it’s much
different from sending it next week. And of course, sending the same email 10 times is different from sending it 0 times or 1 time

### Calculations

Calculations are computations from input to output. They always give the same output when you give them the same input. You can call them anytime, anywhere, and it won’t affect anything outside of them. That makes them really easy to test and safe to use without worrying about how many times or when they are called.

### Data

Data is recorded facts about events. We distinguish data because it is not as complex as executable code. It has well-understood properties. Data is interesting because it is meaningful without being run. It can be interpreted in multiple ways. Take a restaurant receipt as an example: It can be used by the restaurant manager to determine which food items are popular. And it can be used by the customer to track their dining-out budget. 

## Patterns of stratified design

### Straightforward implementations
The layer structure of stratified design should help us build straightforward implementations. When we read a function with a straightforward implementation, the problem the function signature presents should be solved at the right level of detail in the body. Too much detail is a code smell.

### Abstraction barrier
Some layers in the graph provide an interface that lets us hide an important implementation detail. These layers help us write code at a higher level and free our limited mental capacity to think at a higher level.

### Minimal interface
As our system evolves, we want the interfaces to important business concepts to converge to a small, powerful set of operations. Every other operation should be defined in terms of those, either directly or indirectly

### Comfortable layers
The patterns and practices of stratified design should serve our needs as programmers, who are in turn serving the business. We should invest time in the layers that will help us deliver software faster and with higher quality. We don’t want to add layers for sport. The code and its layers of abstraction should feel comfortable to work in.


## Immutability

### copy-on-write pattern

1. Make a copy
2. Modify the copy
3. Return the copy

```ts
function add_element_last(array, elem) {
  var new_array = array.slice(); // Make a copy
  new_array.push(elem); // Modify the copy
  return new_array; // Return the copy
}
```

### The rules of defensive copying

```ts
function black_friday_promotion_safe(cart) {
  var cart_copy = deepCopy(cart);
  black_friday_promotion(cart_copy);
  return deepCopy(cart_copy);
}
```

#### Rule 1: Copy as data leaves your code
If you have immutable data that will leave your code and enter code that you don’t trust, follow these steps to protect your original:
1. Make a deep copy of the immutable data.
2. Pass the copy to the untrusted code.


#### Rule 2: Copy as data enters your code
If you are receiving data from untrusted code, that data might not be immutable. Follow these steps:
1. Immediately make a deep copy of the mutable data passed to your code.
2. Use the copy in your code.


## Principle: Design is about pulling things apart

Functions give us a very natural way to separate concerns. Functions separate what value is provided as an argument from how the value is used. Very often, we are tempted to put things together. Bigger, more complex things feel more substantial. But things that are pulled apart can always be composed back together. The hard part is figuring out useful ways to pull them apart.

- **Easier to reuse**: Smaller, simpler functions are easier to reuse. They do less. They make fewer assumptions.
- **Easier to maintain**: Smaller functions are easier to understand and maintain. They have less code. They are often obviously right (or wrong).
- **Easier to test**: Smaller functions are easier to test. They do one thing, so you just test that one thing. Even if there is no identifiable problem in a function, if you see something you can pull out, it’s worth at least trying to extract it. It might lead to a better design.


## Principle: Minimize implicit inputs and outputs

*Implicit inputs* are all of the inputs that aren’t arguments. And *implicit outputs* are all of the outputs that aren’t the return value. 
We’ve been writing functions with no implicit inputs and outputs. We call those calculations.

However, calculations aren’t the only thing that this principle applies to. Even actions would do well to eliminate implicit inputs and outputs. Even if you can’t eliminate all implicit inputs and outputs, the more you can eliminate, the better.

## Concurrency

### Principles of working with timelines

**1. Fewer timelines are easier**
The easiest system has a single timeline. Every action happens immediately after the action
before it. However, in modern systems, we have to deal with multiple timelines. Multiple threads,
asynchronous callbacks, and client-server communication all have multiple timelines.


**2. Shorter timelines are easier**
Another lever we have is to reduce the number of steps in each timeline. If we can eliminate steps (decrease a in the formula on the right), we can reduce the number of possible orderings dramatically.

**3. Sharing fewer resources is easier**
If two steps on different timelines don’t share resources, the order between them doesn’t matter. It doesn’t reduce the number of possible orderings, but it reduces the number of possible orderings that you have to consider. When looking at two timelines, you really only have to consider the steps that share resources across timelines.

**4. Coordinate when resources are shared**
If we eliminate as many shared resources as we can, we will still be left with some resources that we can’t get rid of. We need to ensure that the timelines share these resources in a safe way. That means ensuring they take turns in the right order. Coordinating between timelines means eliminating possible orderings that don’t give us the right result.

**5. Manipulate time as a first-class concept**
The ordering and proper timing of actions is difficult. We can make this easier by creating reusable objects that manipulate the timeline. We’ll see examples of those in the next couple of chapters.


### Principle: In an asynchronous context, we use a final callback instead of a return value as our explicit output
