# Payment network

## SWIFT

The `Society for Worldwide Interbank Financial Telecommunication (SWIFT)` is the main secure **messaging system** that links the world’s banks.

The Belgium-based system is run by its member banks and handles millions of payment messages per day. 

![SWIFT transfer](https://i.pinimg.com/originals/86/f0/7c/86f07ce7ed5ed398292e4b9eda804978.jpg)

**Acronyms**
- ACK: acknowledgment
- NAK: negative acknowledgment
- MON: Message Output Number (unique ID)
- UAK: user positive acknowledgment (without error)
- UNK: user negative acknowledgment (checksum failure)

**Roles**
- The **Bank A** ends a message with transfer details to  **Regional Processor A** 
- The **Regional Processor A** is responsible for input message validation and output message queuing. 
- The **Slice Processor A** is responsible for storing and routing messages safely.
- The **Regional Processor B** assigns a unique ID MON & send to **Slice Processor B**
- The **Slice Processor B** validate MON then authorizes **Regional Processor B**
- The **Bank B** sends UAK/UNK to **Regional Processor B**

## Money movement 

![Money movement](https://i.pinimg.com/originals/15/71/b0/1571b0631acb440ea33dc07edb759c74.jpg)

## Foreign exchange

![Foreign exchange](https://i.pinimg.com/originals/f4/65/f3/f465f3b25afa3f72507a5f99eca4fe3c.jpg)

## How Visa works?

![How Visa works?](https://i.pinimg.com/originals/d4/7d/3d/d47d3defc268a8e17816a67d8ecff2d7.jpg)

The diagram shows VISA’s role in the credit card payment process. There are two flows involved. Authorization flow happens when the customer swipes the credit card. Capture and settlement flow occurs when the merchant wants to get the money at the end of the day.

### Authorization Flow

Step 0: The card issuing bank issues credit cards to its customers. 
 
Step 1: The cardholder wants to buy a product and swipes the credit card at the Point of Sale (POS) terminal in the merchant’s shop.
 
Step 2: The POS terminal sends the transaction to the acquiring bank, which has provided the POS terminal.
 
Steps 3 and 4: The acquiring bank sends the transaction to the card network, also called the card scheme. The card network sends the transaction to the issuing bank for approval.
 
Steps 4.1, 4.2, and 4.3: The issuing bank freezes the money if the transaction is approved. The approval or rejection is sent back to the acquirer, as well as the POS terminal. 

### Capture and Settlement Flow
Steps 1 and 2: The merchant wants to collect the money at the end of the day, so they hit ”capture” on the POS terminal. The transactions are sent to the acquirer in batches. The acquirer sends the batch file with transactions to the card network.
 
Step 3: The card network performs clearing for the transactions collected from different acquirers, and sends the clearing files to different issuing banks.
 
Step 4: The issuing banks confirm the correctness of the clearing files, and transfer money to the relevant acquiring banks.
 
Step 5: The acquiring bank then transfers money to the merchant’s bank. 
 
Step 4: The card network clears the transactions from different acquiring banks. Clearing is a process in which mutual offset transactions are netted, so the number of total transactions is reduced.
 
In the process, the card network takes on the burden of talking to each bank and receives service fees in return.

### How Visa makes money?

![Visa makes money](https://i.pinimg.com/originals/0b/91/0d/0b910d0697f9a842b19fbac0266a4a5c.jpg)

## FedNow (instant payment)

JPMorgan, Wells Fargo, and other major banks will use the new Federal Reserve's 'FedNow' instant payment system. Let's take a look at how it works.

Federal Reserve launched FedNow instant payment service on 20 Jul. It allows retail clients to send and receive money within seconds and it is available 24x7.

![FedNow](https://i.pinimg.com/originals/e3/c9/5e/e3c95e2ca672803932bec5e394f82a09.webp)

**What does this mean?**
1. Peer-to-peer payment services in the private sector like Venmo or PayPal act as intermediaries between banks, so we need to leverage payment schemes for clearing and Fed systems for settlement. However, FedNow can directly settle the transactions in central bank accounts.
2. Fedwire, another real-time payments system, will still function in large-value or low-value payments. FedNow is not designed to replace Fedwire.

### FedNow VS Automated Clearing House (ACH)
![FedNow VS ACH](https://i.pinimg.com/originals/a9/9e/ae/a99eae90f16be296a0db8fc9b0955f43.jpg)

**FedNow** 
- Step 0 - Bob wants to pay Alice $1000.
- Step 1 - Bob initiates a payment transaction using FedNow.
- Step 2 - The sender’s bank submits a payment message to FedNow.
- Step 3 - The FedNow service validates the payment message.
- Step 4 - The FedNow service sends the payment message to the receiver’s bank, where it is confirmed.
- Step 5 - The receiver’s bank replies to FedNow, confirming that the payment is accepted.
- Step 6 - The FedNow service debits and credits the designated accounts of the sender and receiver’s banks.
- Step 7 - The FedNow service notifies the sender’s bank and receiver’s bank that the settlement is complete.
- Step 8 - The banks debit and credit the bank accounts.

### Refs
- [Bytebytego - original post](https://blog.bytebytego.com/i/135537446/what-is-fednow-instant-payment)
- [Q & A](https://www.klaros.com/post/q-a-on-the-federal-reserve-s-fednow-service)
