
## Humble Object pattern

`Chapter 23: Clean Architecture` 

is a design pattern that was originally identified as a way to help unit testers to separate behaviors that are hard to test from behaviors that
are easy to test. 

The idea is very simple: *Split the behaviors into two modules or classes.*
- One of those modules is humble; it contains **all the hard-to-test behaviors** stripped down to their barest essence. 
- The other module contains **all the testable behaviors** that were stripped out of the humble object.

