# P A R T I

**Surface-Level Improvements**

We begin our tour of readability with what we consider “surface-level” improvements: picking good names, writing good comments, and formatting your code neatly. These types of changes are easy to apply. You can make them “in place,” without having to refactor your code or change how the program runs. You can also make them incrementally, without a huge time investment.

These topics are very important because **they affect every line of code in your codebase**.

Although each change may seem small, in aggregate they can make a huge improvement to a  codebase. If your code has great names, well-written comments, and clean use of whitespace, your code will be _much_ easier to read.

Of course, there’s a lot more beneath the surface level when it comes to readability (and we’ll cover that in later parts of the book). But the material in this part is so widely applicable, for so little effort, that it’s worth covering first.

--- CHAPTER 1
 
### P A R T I I

**Simplifying Loops and Logic**

In Part I, we covered surface-level improvements—simple ways to improve the readability of

your code one line at a time that can be applied without much risk or effort.

In this next part, we go deeper and discuss the “loops and logic” of your program: the control

flow, logical expressions, and variables that make your code work. As always, our goal is to

make these parts of your code easy to understand.

We do this by trying to minimize the “mental baggage” of your code. Every time you see a

complicated loop, a giant expression, or a large number of variables, this adds to the mental

baggage in your head. It requires you to think harder and remember more. This is exactly the

opposite of “easy to understand.” When code has a lot of mental baggage, bugs are more likely

to go unnoticed, the code becomes harder to change, and it’s just less fun to work with.


--- CHAPTER 7



### P A R T I I I

**Reorganizing Your Code**

In Part II, we discussed how to change the “loops and logic” of your program to make your

code more readable. We described several techniques that required changing the structure of

your program in minor ways.

In this part, we’ll discuss larger changes you can make to your code at the function level.

Specifically, we’ll cover three ways to reorganize your code:

- Extract “unrelated subproblems” that aren’t related to the primary goal of your program.
- Rearrange your code so it’s doing only one task at a time.
- Describe your code in words first, and use this description to help guide you to a cleaner solution.

Finally, we’ll discuss situations where you can remove code entirely or avoid writing it in the first place—the single best way to make code easy to understand.


# P A R T I V

**Selected Topics**

In the previous three parts, we covered a wide range of techniques for making code easy to understand. In this part, we’re going to apply some of these techniques to two selected topics.

First, we’re going to discuss testing—how to write tests that are effective and readable at the same time.

Then we’re going to walk through the design and implementation of a special-purpose data structure (a “minute/hour counter”) to see an example where performance, good design, and readability interplay.

--- CHAPTER 14
