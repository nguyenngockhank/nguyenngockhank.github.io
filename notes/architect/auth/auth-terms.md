---
tags: ["Authentication"]
---

# Auth Terms 

When we use various applications and websites, three essential security steps are continuously at play:

- Identity 
- Authentication
- Authorization

![terms](https://lh3.googleusercontent.com/pw/ABLVV85_OH9DTyLCpCiZdezh-7ENcjIfY2iaYOS7wu31o_0tn5U-l1vkqntbOyZVmKXL7ud2WMEiPVF-OXtvPbjVl4E50bjJMz6LTpKKeZAEyogsFaCEw1w=w2400)

When you login to a website, your identity needs to be managed. Here is how different solutions work:

- **Session** - The server stores your identity and gives the browser a **session ID cookie**. This allows the server to track login state. But cookies don't work well across devices.
- **Token** - Your identity is encoded into a token sent to the browser. The browser sends this token on future requests for authentication. No server session storage is required. But tokens need encryption/decryption.
- **JWT** - JSON Web Tokens standardize identity tokens using digital signatures for trust. The signature is contained in the token so no server session is needed.
- **QR Code** - Encodes a random token into a QR code for mobile login. Scanning the code logs you in without typing a password.
- **WWW-Authenticate** is the most basic method. You are asked for the username and password by the browser. As a result of the inability to control the login life cycle, it is seldom used today.
- A finer control over the login life cycle is **session-cookie**. The server maintains session storage, and the browser keeps the ID of the session. A cookie usually only works with browsers and is not mobile app friendly.
- To address the compatibility issue, the **token** can be used. The client sends the token to the server, and the server validates the token. The downside is that the token needs to be encrypted and decrypted, which may be time-consuming.
- **JWT** is a standard way of representing tokens. This information can be verified and trusted because it is digitally signed. Since JWT contains the signature, there is no need to save session information on the server side.
- **SSO** - Single Sign On uses a central authentication service. This allows a single login to work across multiple sites. By using SSO (single sign-on), you can sign on only once and log in to multiple websites. It uses CAS (central authentication service) to maintain cross-site information
- **OAuth2** - Allows limited access to your data on one site by another site, without giving away passwords. By using OAuth 2.0, you can authorize one website to access your information on another website


## What are the differences between cookies and sessions?

Cookies and sessions are both used to carry user information over HTTP requests, including user login status, user permissions, etc.

### 🔹 Cookies
Cookies typically have size limits (4KB). They carry small pieces of information and are stored on the users’ devices. Cookies are sent with each subsequent user request. Users can choose to ban cookies in their browsers.

### 🔹 Sessions
Unlike cookies, sessions are created and stored on the server side. There is usually a unique session ID generated on the server, which is attached to a specific user session. This session ID is returned to the client side in a cookie. Sessions can hold larger amounts of data. Since the session data is not directly accessed by the client, the session offers more security.
