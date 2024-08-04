
# Payment Reconciliation

Reconciliation might be the most painful process in a payment system. It is the process of comparing records in different systems to make sure the amounts match each other.

## Overview
![Payment reconciliation](https://i.pinimg.com/originals/72/9d/c9/729dc9e71675d04479968afee8ddde39.jpg)

For example, if you pay $200 to buy a watch with Paypal: 
- The eCommerce website should have a record of the $200 purchase order.
- There should be a transaction record of $200 in Paypal
- The Ledger should record a debit of $200 dollars for the buyer, and a credit of $200 for the seller. This is called double-entry bookkeeping 


## Data normalization

When comparing records in different systems, they come in different formats. For example, the timestamp can be “`2022/01/01`” in one system and “`Jan 1, 2022`” in another.

**Possible solution**: we can add a layer to transform different formats into the same format.


## Massive data volume
**Possible solution**: we can use big data processing techniques to speed up data comparisons. If we need near real-time reconciliation, a streaming platform such as Flink is used; otherwise, end-of-day batch processing such as Hadoop is enough.

## Cut-off time issue.

For example, if we choose 00:00:00 as the daily cut-off time, one record is stamped with 23:59:55 in the internal system, but might be stamped 00:00:30 in the external system (Paypal), which is the next day. In this case, we couldn’t find this record in today’s Paypal records. It causes a discrepancy.

**Possible solution:**  we need to categorize this break as a “temporary break” and run it later against the next day’s Paypal records. If we find a match in the next day’s Paypal records, the break is cleared, and no more action is needed.


## Foreign Currency

Dealing with different currencies adds complexity. Conversions between currencies by payment providers (like Paypal) need to be reconciled.

## Multiple Events per Purchase:

A single purchase triggers multiple financial events (debits & credits) at different times:
When you use Paypal (considering time and currency).
When money moves from Paypal to your bank (potentially involving another currency conversion).
All these transactions need to be reconciled for accurate accounting.

##  Platform-Specific Buyer Issues:

Paypal's "`shadow transaction`" is an example. Funds reserved for a pending purchase (A) might be used partially for a newer purchase (B) if A gets cancelled. This can lead to confusion with bank withdrawals for B.

## Ideal Reconciliation Process:

A smooth flow of information between your shop, payment provider, and accounting system is key.
Order IDs and payment IDs should be carried through the process to create invoices automatically.
This allows for easier reconciliation of accounts receivable and payable.
 