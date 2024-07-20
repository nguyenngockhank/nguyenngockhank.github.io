# Cryptography

## Symmetric Encryption vs Asymmetric Encryption

![Symmetric Encryption vs Asymmetric Encryption](https://i.pinimg.com/originals/21/29/6f/21296f2bb7bd5429c775a4a952b817ef.gif)

Feature	| Symmetric Encryption	|  Asymmetric Encryption
----- | ---- | ----
Key Concept	| Uses a single, secret key for both encryption and decryption.	| Uses a pair of mathematically linked keys: `public key` (for encryption) and `private key` (for decryption).
Analogy |	Like a padlock with one key that opens and locks it. | 	Like a mailbox with two slots: a public slot for depositing messages and a private key to unlock and retrieve them.
Key Sharing	| Requires secure sharing of a single key with all authorized users. | 	Public key can be widely distributed, private key must be kept secret.
Security	| Vulnerable if the single key is compromised. | 	More secure - even if the public key is intercepted, it cannot decrypt data without the private key.
Performance	| Faster and more efficient. |	Slower due to more complex calculations.
Key Management |	Simpler - only one key to manage securely. | 	More complex - private key needs careful management to ensure secrecy.
Use Cases	| Encrypting data at rest, securing communication channels within networks, encrypting real-time data streams. |	Sending confidential information securely, digital signatures, public-key infrastructure (PKI).


**Choosing the Encryption Method:**

The choice between symmetric and asymmetric encryption within a protocol often depends on the specific security needs:

- For bulk encryption of data at rest or in transit, symmetric encryption's speed and efficiency make it a preferred choice.
- When secure key exchange or public key distribution is a requirement, asymmetric encryption is often used in conjunction with symmetric encryption.

## Symmetric Encryption

Symmetric encryption, with its speed and efficiency, is widely used in various protocols for securing data transmission and storage. Here are some prominent examples:

### Data Encryption at Rest and in Transit:

- **File Encryption**: Many file encryption tools and disk encryption technologies like AES-NI utilize symmetric encryption to scramble data on storage devices (hard drives, USB drives) or within files themselves.
- **Secure Communication Channels**: Protocols like Secure Shell (SSH) (after the initial key exchange using asymmetric encryption) and some VPNs (Virtual Private Networks) can leverage symmetric encryption to secure the actual data transmission between two parties.
- **Database Encryption**: Database encryption solutions often employ symmetric encryption to protect sensitive data stored within databases.

### Network Communication Protocols:

- **Wi-Fi Encryption**: Standards like WPA2 (Wi-Fi Protected Access 2) rely on symmetric encryption (AES) to secure wireless network traffic, ensuring only authorized devices can access the network and data transmitted over it is encrypted.
- **TLS/SSL (Partially)**: While Transport Layer Security/Secure Sockets Layer utilizes asymmetric encryption for initial handshake and key exchange, it often uses symmetric encryption for the bulk encryption of data during the secure connection.
- **Streaming Protocols**: Protocols like HTTPS Live Streaming (HLS) and Secure Real-time Transport Protocol (SRTP) can leverage symmetric encryption to secure the transmission of streaming data (audio, video).

### Other Use Cases:

- **Secure Messaging Apps**: Many messaging apps like Signal and WhatsApp implement symmetric encryption to scramble messages and attachments before sending them, ensuring only the intended recipient can decrypt them.
- **Credit Card Transactions**: During online transactions, symmetric encryption can be used to secure credit card information as it travels between the merchant and payment processor.


## Asymmetric Encryption

Many protocols leverage asymmetric encryption for various security purposes. Here are some prominent examples:
- **TLS/SSL** (Transport Layer Security/Secure Sockets Layer): The foundation for HTTPS, TLS/SSL uses asymmetric encryption to establish a secure connection between a web server and a client (your browser). It ensures data transmitted over the internet is encrypted and can only be decrypted by the intended recipient.
- **SSH** (Secure Shell): This protocol enables secure remote access and communication between computers. SSH employs asymmetric encryption for user authentication and key exchange, safeguarding login credentials and data transfer.
- **IPsec** (Internet Protocol Security): IPsec provides secure communication channels across networks. It utilizes asymmetric encryption for key exchange during the initial setup, ensuring the keys used for symmetric encryption are established securely.
- **PGP** (Pretty Good Privacy) & S/MIME (Secure/Multipurpose Internet Mail Extensions): These email encryption standards use asymmetric encryption to encrypt email messages and attachments. The recipient's public key encrypts the message, and only their private key can decrypt it, ensuring confidentiality.
- **Digital Signatures**: A core application of asymmetric encryption. Digital signatures allow verifying the authenticity and integrity of data. The sender signs the data with their private key, and anyone with the sender's public key can verify the signature, guaranteeing the data originated from the signer and hasn't been tampered with.

### Verifying Message

![Signing & verification](https://i.pinimg.com/originals/c7/74/0d/c7740dc13254c2d50d4bf557d5e0cb0e.png)

Verifying a signed message in asymmetric encryption involves using the public key of the signer to confirm the message's authenticity and integrity. Here's the process:

1. **Obtain the Signed Message**: You receive a message that includes two parts:
    - The actual message content.
    - A digital signature attached to the message.
2. **Acquire the Signer's Public Key**: You need a verified copy of the public key that belongs to the party who supposedly signed the message. This public key could be obtained through a trusted source or directly from the signer through a secure channel.
3. **Verification Process**:
    - Use a cryptographic library or tool that supports the specific asymmetric encryption algorithm used (e.g., RSA, DSA).
    - Provide the message content and the digital signature as inputs to the verification function.
    - The verification function utilizes the public key to decrypt (or mathematically verify) the signature.
4. **Verification Result**:
    - If the verification is successful, it indicates that the signature was indeed created using the corresponding private key of the signer. This implies a high likelihood that the message originated from the intended signer and has not been tampered with since it was signed.
    - If the verification fails, it could mean:
        - The signature is invalid (e.g., tampered message or incorrect private key used for signing).
        - The public key used for verification is incorrect.

## Encoding vs Encryption vs Tokenization

![Tokenization](https://i.pinimg.com/564x/8c/92/10/8c92102bff1c6de0d743264f054af7de.jpg)

Feature |	Encoding |	Encryption |	Tokenization
----- | ---- | ---- | ----
Purpose         |	Different format   |	Confidentiality |	Reduce breach risk
Focus           |	Readability        |	Security        |	Compliance, Security
Reversibility   |	Always reversible  |	Requires decryption key |	Usually not reversible
Security        |	Low	               |    High |	Moderate

## Encoding vs Encryption vs Hashing

![Encoding vs Excryption vs Hashing](https://i.pinimg.com/564x/01/99/d4/0199d41ba59ec9427db5351e500bbc43.jpg)


## Https Encryption Process

![Https encryption](https://i.pinimg.com/originals/c8/a2/24/c8a224f4f68f596977121025703d8189.gif)

## Hashing

### Store pass in DB

![Store pass in DB](https://i.pinimg.com/originals/34/49/7a/34497aaa04485cbf085ad9ba51eb74f7.jpg)

### Bloom filter

![Bloom filter](https://i.pinimg.com/originals/c5/86/fb/c586fbda95042c92a4e3461caa71d1e7.png)

### Consistent Hashing

![Consistent Hashing](https://i.pinimg.com/originals/bd/d6/8e/bdd68ea8186741a12e1490ac17d24c02.jpg)