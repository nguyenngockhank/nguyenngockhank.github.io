# Payment notes 

## Avoid double charge
...

## Payment security
...

## How does a modern stock exchange achieve microsecond latency 
...

## Payment system
...

## Mollie vs Stripe

### Payment status change 

https://docs.mollie.com/payments/status-changes

https://stripe.com/docs/payments/intents

https://stripe.com/docs/payments/payment-intents/verifying-status


## Never Use Floating-Point / Double Data types for Monetary Calculations!

https://dba.stackexchange.com/questions/248815/monetary-value-in-integer-over-decimal-datatype

https://www.ibm.com/docs/en/informix-servers/14.10?topic=types-fixed-precision-numbers-decimal-money

https://laracasts.com/discuss/channels/laravel/best-data-type-is-for-storing-money-values

Floating point values, or even (Double precision floating point format), should be avoided when using a currency amount with fractions (like Dollars and cents), in its nature, it cannot be stored exactly as is in memory. 

Say we want to store 0.1 dollars, any floating-point data type can not store it as is, it get’s stored as an approximation (0.10000000149….). 

When doing a series of math operations, some problem can rise, that is called (loss of significance), the errors can be amplified and cause trouble 🧐.
the solution is simple in swift, use NSNumber

````
let myBalance = 12.333
let decimal: Decimal = NSNumber(floatLiteral: 12.333).decimalValue
let result = decimal / 3
```