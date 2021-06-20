# Lessons

## Don't Repeat Yourself (DRY)


## Multithread

- Trong thế giới thiết kế đa luồng, unitest có thể không hữu ích như bạn nghĩ

- Xác suất xảy ra conflict giữa các threads lớn hay nhỏ?

:::: quote
**Định luật Murphy:**
Anything that can possibly go wrong, does
::::


## Moore's law

> Computer speed, memory, and density double every 18 months. 

This law held from the 1950s to 2000, but then, at least for clock rates, stopped cold.

## YAGNI

You aren't going to need it


## Humble Object pattern

`Chapter 23: Clean Architecture` 

is a design pattern that was originally identified as a way to help unit testers to separate behaviors that are hard to test from behaviors that
are easy to test. 

The idea is very simple: *Split the behaviors into two modules or classes.*
- One of those modules is humble; it contains **all the hard-to-test behaviors** stripped down to their barest essence. 
- The other module contains **all the testable behaviors** that were stripped out of the humble object.
