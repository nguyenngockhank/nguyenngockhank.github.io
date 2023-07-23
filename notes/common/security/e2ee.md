## End-to-end encryption (E2EE) 

E2EE protects your messages and files from being accessed and manipulated by other people other than those you send them to.

## How it works:


![how it works](https://pbs.twimg.com/media/F01obX5X0AAt_oW?format=jpg&name=large)

### 1. Keys generated: 

In each app, every account has two keys: one is public and can be shared with anyone; the other should be kept secret. 

Although these keys are mathematically related, it's impossible to determine someone's private key from their public key.

### 2. Public key exchange: 

When two people begin a conversation, they exchange their public keys. 

Since public keys don't have to be kept secret, this can occur through any type of communication channel.

### 3. Encryption: 

When a user wants to send a message, it is protected using symmetric and asymmetric encryption.

In asymmetric encryption, the public key is used for encryption, and the private key for decryption.

#### 3.A 

Whereas symmetric encryption uses a single session key for both. In E2EE, the sender generates a unique session key and encrypts the data with it. Then, they encrypt the session key itself with the recipient's public key.

### 4. Data transmission: 

The encrypted message and session key are then sent over the internet.

The encryption makes sure that only the sender and receiver can read the data, even if someone intercepts it during transmission.

### 5. Decryption:

When an encrypted message is received, the receiver uses their private key to unlock the session key; which they then use to decrypt the message.



End-to-end encryption is only as powerful as the cryptographic algorithms used, and how well they are implemented. 

When done right, E2EE boosts the security of digital communications, protecting them from eavesdropping and tampering.