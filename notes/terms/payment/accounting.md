# Accounting

## Double-Entry Bookkeeping

Double-entry bookkeeping is a fundamental accounting method where every financial transaction is recorded with equal and opposite entries in at least two accounts. This system ensures that the accounting equation (`Assets = Liability + Equity`) always balances.

::: tip Core Principles:
- Every transaction affects at least two accounts.
- For each transaction, there's at least one debit and one credit.
- Total debits must always equal total credits.
:::

## Why is a debit card called a “debit” card? 

![Accounting](https://i.pinimg.com/originals/c8/08/a6/c808a6cff2b500976665d66afa51f80b.webp)

- Each transaction in the business system is transformed into at least two journal lines in the ledger system. This is called **double-entry** accounting, where every transaction must have a source account and a target account.
- Each journal line is booked to an account. 
- Each account belongs to one of the three components in the balance sheet:

>  Asset = Liability + Equity

Bob pays $100 to the merchant with a debit card. We have two accounts involved in this transaction:

- **Journal line 1** - From the issuing bank’s point of view, Bob’s bank account is a liability (because the bank owes Bob money). Bob’s bank account is deducted $100. 
This is a **debit** record.
- **Journal line 2** - Bank’s cash is an asset and the bank’s cash is deducted by $100.
This is a **credit** record.

The balance sheet equation still balances with the two journal lines recorded in the ledger.
 
Bob’s card is called a **“debit”** card because it is a **debit record** when paying with a debit card. 

::: danger Why is this important? 
This is how a ledger system is designed, only a real ledger is more complicated. 
Applying these strict accounting rules makes reconciliation much easier!
:::

## Payment reconciliation

Reconciliation might be the most painful process in a payment system. It is the process of comparing records in different systems to make sure the amounts match each other.

![Payment reconciliation](https://i.pinimg.com/originals/72/9d/c9/729dc9e71675d04479968afee8ddde39.jpg)

For example, if you pay $200 to buy a watch with Paypal: 
- The eCommerce website should have a record of the $200 purchase order.
- There should be a transaction record of $200 in Paypal
- The Ledger should record a debit of $200 dollars for the buyer, and a credit of $200 for the seller. This is called double-entry bookkeeping 


Let’s take a look at some pain points and how we can address them: 

### Data normalization. 

When comparing records in different systems, they come in different formats. For example, the timestamp can be “`2022/01/01`” in one system and “`Jan 1, 2022`” in another.

**Possible solution**: we can add a layer to transform different formats into the same format.


### Massive data volume
**Possible solution**: we can use big data processing techniques to speed up data comparisons. If we need near real-time reconciliation, a streaming platform such as Flink is used; otherwise, end-of-day batch processing such as Hadoop is enough.

### Cut-off time issue.

For example, if we choose 00:00:00 as the daily cut-off time, one record is stamped with 23:59:55 in the internal system, but might be stamped 00:00:30 in the external system (Paypal), which is the next day. In this case, we couldn’t find this record in today’s Paypal records. It causes a discrepancy.

**Possible solution:**  we need to categorize this break as a “temporary break” and run it later against the next day’s Paypal records. If we find a match in the next day’s Paypal records, the break is cleared, and no more action is needed.


### Foreign Currency

Dealing with different currencies adds complexity. Conversions between currencies by payment providers (like Paypal) need to be reconciled.

### Multiple Events per Purchase:

A single purchase triggers multiple financial events (debits & credits) at different times:
When you use Paypal (considering time and currency).
When money moves from Paypal to your bank (potentially involving another currency conversion).
All these transactions need to be reconciled for accurate accounting.

###  Platform-Specific Buyer Issues:

Paypal's "`shadow transaction`" is an example. Funds reserved for a pending purchase (A) might be used partially for a newer purchase (B) if A gets cancelled. This can lead to confusion with bank withdrawals for B.

### Ideal Reconciliation Process:

A smooth flow of information between your shop, payment provider, and accounting system is key.
Order IDs and payment IDs should be carried through the process to create invoices automatically.
This allows for easier reconciliation of accounts receivable and payable.
 