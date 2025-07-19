# Passkey

> A passkey is a **passwordless login credential** based on public-key cryptography, built on the FIDO2 standard and WebAuthn API.

Related Packages: [@simplewebauthn/server](https://www.npmjs.com/package/@simplewebauthn/server), [@simplewebauthn/browser](https://www.npmjs.com/package/@simplewebauthn/browser)

## High-Level Flow


![Passkeys](https://i.pinimg.com/originals/29/c4/41/29c441a2a7b1007754e382c2458ceda4.png)


## 1. Registration
1. User initiates registration → get a challenge
2. Frontend uses WebAuthn API to create credential (passkey)
3. Browser/device creates a key pair → sends public key & signature
4. Backend verifies and stores public key

### 2. Login (Authentication)
1. User initiates login → get a challenge
2. Device signs challenge using private key
3. Backend verifies signature using stored public key


## Supported Devices 
Passkey support is built into modern browsers via the WebAuthn API, which is a standard part of the FIDO2 framework.

Platform | 	 Supported | 	Cross-Device Sync
-------- | -------- | ----- 
iOS/macOS | 	✅ Yes | 	✅ via iCloud
Android | 	✅ Yes | 	✅ via Google
Windows | 	✅ Yes | 	❌ (local only)
Chromebook | 	✅ Yes | 	✅ (via Chrome)
Linux | 	⚠️ Partial | 	❌


**External Authenticators**

Authenticator	| Supported	| Notes
-------- | -------- | ----- 
YubiKey (FIDO2) |	✅ Yes |	Works via USB/NFC
Security Keys |	✅ Yes |	FIDO2/WebAuthn compatible
Platform Authenticator |	✅ Yes |	Built into OS/device

## What happens if the user loses their passkey device?
- They can't respond to WebAuthn challenges (no private key)
- Passkey = passwordless, but also means no recovery via password

**Solution Strategies**
 Backup Authentication Methods
- Register multiple passkeys (e.g., phone + laptop + USB security key)
- Allow fallback login: Email + OTP, SMS code, Temporary password reset link, ...

Platform Recovery (Apple / Google)
If passkeys are synced via:
- iCloud Keychain (Apple)
- Google Password Manager (Android)

Then passkeys can resync on new devices automatically when logged into the same Apple/Google account.

- ✅ Good user experience
- ❌ Not guaranteed in enterprise or cross-platform environments

## Passkey vs Crypto Wallet


Feature	Passkey | (WebAuthn)	| Crypto Wallet (e.g., MetaMask)
-------- | -------- | ----- 
Main Purpose |	Passwordless login to websites or apps	Prove identity and sign transactions on the blockchain
Standards Used |	FIDO2 + WebAuthn |	EIP-4361 (Sign-In with Ethereum), EIP-712 (typed data signing)
Private Key Storage |	OS-level keystore (e.g., Secure Enclave, TPM, Android Keystore) |	Browser extension or mobile wallet app
User Experience |	Seamless biometric auth (FaceID, fingerprint, etc.) |	Pop-up to sign message; usually more manual
Device Sync |	Synced across devices via Apple/Google account |	Usually not synced between devices
Backup / Recovery |	Apple iCloud / Google account (for passkeys) |	Requires seed phrase (manual, risky)
Multi-Device Support |	Yes, register multiple passkeys |	Not inherently; one wallet per device unless manually imported
Security |	Very high (biometrics + device-based keys) |	High, but depends on wallet and user handling of private keys
Open to All Users |	Yes, no crypto knowledge required |	Requires crypto wallet setup
Anti-Phishing |	Yes, via origin binding (WebAuthn enforces origin check) |	Weak unless custom message signing is implemented properly
Use Cases |	Login to websites/apps (banking, email, SaaS, etc.) |	Web3 apps, dApps, DAO voting, signing blockchain transactions
Frontend Support |	Native browser APIs |	JavaScript libraries like ethers.js, web3.js, etc.
Backend Verification |	@simplewebauthn/server, FIDO2 server libraries |	Verify ECDSA signatures using public address