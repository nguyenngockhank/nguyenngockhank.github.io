# Blockchain overview

## Terms
- Blockchain: Technology to store data with block & chain 
    - Block contains: 
        - metadata: created at, blockchain number, previous block, ...
        - ransactions
    - Characteristic: immutability & decentralization by consensus mechanism
- Bitcoin: 
    - store & transfer money (btc unit)
    - consensus mechanism: proof of work
    - max btc total: 21m
- Etherum:
    - created by: Vitalik Buterin  & Charles Hoskinson
    - etherum virtual machine (EVM): run smart contract
- Cryptographic hash: 
    - **Keccak256** (same with SHA3 - Secure hash algorithm)
    - a mathematical function that converts data of any size into a fixed-length string of characters, called a hash value
    - fingerprint to identify a tranaaction

- Blockchain Address:
    - The Process:
        - Generate a Private Key
        - Derive the Public Key by  **elliptic curve cryptography** (ECC)
        - Hash the Public Key by **Keccak256** 
            - get last 40 chars from 64 chars 
            - prepend `0x`
    - Types:
        - EOA: Externally Owned Account 
            - Controlled by Private Keys
            - User Interaction
            - Sending Transactions
        - Contract address:
            - Controlled by the code of the contract 
            - Uniqueness
            - Interaction
- Transaction: action to mutate the blockchain
    - send crypto 
    - deploy smart contract
    - invoke a function (**operation**) to mutate a state of smart contract 
    - in case view the info (called **call**)
- Tx life cycle:
    - build info (from, to, ...)
    - use private key to sign
    - send tx to blockchain
    - wait for confirm from validator node / minner node
    - if tx succedded => get **tx receipt**

## Wallet

**An Hierarchical Deterministic** (HD) wallet is a type of cryptocurrency wallet that generates a hierarchical structure of public and private key pairs from a single, master seed. This seed is typically a 12-24 word mnemonic phrase.


## Hierarchical Deterministic Wallets

Hierarchical Deterministic Wallets is a type of cryptocurrency wallet that generates a hierarchical structure of: 
- public and private key pairs from a single, master seed.
- This seed is typically a 12-24 word **mnemonic phrase**.
- [read more](https://www.ledger.com/academy/crypto/what-are-hierarchical-deterministic-hd-wallets)

