# Debugging

## Improve your debugging strategies

- The common basic debugging strategy is the `standard strategy`, which means 'try this and see if it works.' However, sometimes this approach leads to a dead end, and you run out of ideas to try.

- Therefore, you need to switch to the `investigation mode` with the strategies in the article: binary search and systematically trace the code path.

- `Binary search` is a strategy of gradually narrowing down the problematic code by eliminating areas.

- `Systematically trace the code path` is a strategy of tracing and checking the code execution step by step without skipping any until you hit the code causing the error.

[Read more](https://www.functionize.com/blog/improve-your-debugging-strategies)

## Classes of Defects
- **Syntax or type errors**. These are always caught by the compiler, and reported via error messages. 
- **Typos and other simple errors** that have pass undetected by the type-checker or the other checks in the compiler. Once these are identified, they can easily be fixed.
- **Implementation errors**. It may be the case that logic in the high-level algorithm of a program is correct, but some low-level, concrete data structures are being manipulated incorrectly, breaking some internal representation invariants. 
- **Logical errors.** If the algorithm is logically flawed, the programmer must re-think the algorithm. Fixing such problems is more difficult, especially if the program fails on just a few corner cases. One has to closely examine the algorithm, and try to come up with an argument why the algorithm works. Trying to construct such an argument of correctness will probably reveal the problem. A clean design can help a lot figuring out and fixing such errors. In fact, in cases where the algorithm is too difficult to understand, it may be a good idea to redo the algorithm from scratch and aim for a cleaner formulation.

[Read more](https://www.cs.cornell.edu/courses/cs312/2006fa/lectures/lec26.html)

## Debugging strategies

### Incremental and bottom-up program development
One of the most effective ways to localize errors is to develop the program incrementally, and test it often, after adding each piece of code. It is highly likely that if there is an error, it occurs in the last piece of code that you wrote. With incremental program development, the last portion of code is small; the search for bugs is therefore limited to small code fragments. An added benefit is that small code increments will likely lead to few errors, so the programmer is not overwhelmed with long lists of errors. 
 
Bottom-up development maximizes the benefits of incremental development. With bottom-up development, once a piece of code has been successfully tested, its behavior won't change when more code is incrementally added later. Existing code doesn't rely on the new parts being added, so if an error occurs, it must be in the newly added code (unless the old parts weren't tested well enough).
 
### Instrument program to log information
Typically, print statements are inserted. Although the printed information is effective in some cases, it can also become difficult to inspect when the volume of logged information becomes huge. In those cases, automated scripts may be needed to sift through the data and report the relevant parts in a more compact format. Visualization tools can also help understanding the printed data. For instance, to debug a program that manipulates graphs, it may be useful to use a graph visualization tool (such as ATT's graphviz) and print information in the appropriate format (.dot files for graphviz). 
 
### Instrument program with assertions
Assertions check if the program indeed maintains the properties or invariants that your code relies on. Because the program stops as soon as it an assertion fails, it's likely that the point where the program stops is much closer to the cause, and is a good indicator of what the problem is. An example of assertion checking is the repOK() function that verifies if the representation invariant holds at function boundaries. Note that checking invariants or conditions is the basis of defensive programming. The difference is that the number of checks is usually increased during debugging for those parts of the program that are suspected to contain errors. 
 
### Use debuggers
If a debugger is available, it can replace the manual instrumentation using print statements or assertions. Setting breakpoints in the program, stepping into and over functions, watching program expressions, and inspecting the memory contents at selected points during the execution will give all  the needed run-time information without generating large, hard-to-read log files.
 
### Backtracking
One option is to start from the point where to problem occurred and go back through the code to see how that might have happened. 
 
### Binary search
The backtracking approach will fail if the error is far from the symptom. A better approach is to explore the code using a divide-and-conquer approach, to quickly pin down the bug. For example, starting from a large piece of code, place a check halfway through the code. If the error doesn't show up at that point, it means the bug occurs in the second half; otherwise, it is in the first half. Thus, the code that needs inspection has been reduced to half. Repeating the process a few times will quickly lead to the actual problem. 
 
### Problem simplification
A similar approach is to gradually eliminate portions of the code that are not relevant to the bug. For instance, if a function `fun f() = (g();h();k())` yields an error, try eliminating the calls to g, h, and k successively (by commenting them out), to determine which is the erroneous one. Then simplify the code in the body of buggy function, and so on. Continuing this process, the code gets simpler and simpler. The bug will eventually become evident. A similar technique can be applied to simplify data rather than code. If the size of the input data is too large, repeatedly cut parts of it and check if the bug is still present. When the data set is small enough, the cause may be easier to understand.
 
### A scientific method: form hypotheses
A related approach is as follows: inspect the test case results; form a hypothesis that is consistent with the observed data; and then design and run a simple test to refute the hypothesis. If the hypothesis has been refuted, derive another hypothesis and continue the process. In some sense, this is also a simplification process: it reduces the number of possible hypotheses at each step. But unlike the above simplification techniques, which are mostly mechanical, this process is driven by active thinking about an explanation. A good approach is to try to come with the simplest hypotheses and the simplest corresponding test cases. 
 
Consider, for example, a function `palindrome(s:string):bool`, and suppose that `palindrome("able was I ere I saw elba")` returns an incorrect value of false. Here are several possible hypotheses for this failure. Maybe palindrome fails for inputs with spaces (test " "); maybe it fails for programs with upper case letters (try "I"); maybe it fails for inputs of odd length greater than one (try "ere"), and so on.  Forming and testing these hypotheses one after another can lead the programmer to the source of the problem.
 
### Bug clustering
If a large number of errors are being reported, it is useful to group them into classes of related bugs (or similar bugs), and examine only one bug from each class. The intuition is that bugs from each class have the same cause (or a similar cause). Therefore, fixing a bug with automatically fix all the other bugs from the same class (or will make it obvious how to fix them).
 
### Error-detection tools
Such tools can help programmers quickly identify violations of certain classes of errors. For instance, tools that check safety properties can verify that file accesses in a program obey the open-read/write-close file sequence; that the code correctly manipulates locks; or that the program always accesses valid memory. Such tools are either dynamic (they instrument the program to find errors at run-time), or use static analysis (look for errors at compile-time). For instance, Purify is a popular dynamic tool that instruments programs to identify memory errors, such as invalid accesses or memory leaks. Examples of static tools include ESC Java and Spec#, which use theorem proving approaches to check more general user specifications (pre and post-conditions, or invariants); or tools from a recent company Coverity that use dataflow analysis to detect violations of safety properties. Such tools can dramatically increase productivity, but checking  is restricted to a particular domain or class of properties. There is also an associated learning curve, although that is usually low. Currently, there are relatively few such tools and this is more an (active) area of research.

[Read more](https://www.cs.cornell.edu/courses/cs312/2006fa/lectures/lec26.html)