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

## Password Authentication
Password authentication is a fundamental and widely used mechanism for verifying a user's identity on websites and applications. In this method, users enter their unique username and password combination to gain access to protected resources. The entered credentials are checked against stored user information in the system, and if they match, the user is granted access.

While password authentication is a foundational method for user verification, it has some limitations. Users may forget their passwords, and managing unique usernames and passwords for multiple websites can be challenging. Furthermore, password-based systems can be vulnerable to attacks, such as brute-force or dictionary attacks, if proper security measures aren't in place.

To address these issues, modern systems often implement additional security measures, such as multi-factor authentication, or use other authentication mechanisms (e.g., session-cookie or token-based authentication) to complement or replace password-based authentication for subsequent access to protected resources.


## HTTP Basic Access Authentication

HTTP basic access authentication requires a web browser to provide a username and a password when requesting a protected resource. The credentials are encoded using the Base64 algorithm and included in the HTTP header field Authorization: Basic.

Here's how it typically works:

1. The client sends a request to access a protected resource on the server.
2. If the client has not yet provided any authentication credentials, the server responds with a 401 Unauthorized status code and includes the WWW-Authenticate: Basic header to indicate that it requires basic authentication.
3. The client then prompts the user to enter their username and password, which are combined into a single string in the format username:password.
4. The combined string is Base64 encoded and included in the "Authorization: Basic" header in the subsequent request to the server, e.g., `Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=`
5. Upon receiving the request, the server decodes the Base64-encoded credentials and separates the username and password. The server then checks the provided credentials against its user database or authentication service.
6. If the credentials match, the server grants access to the requested resource. If not, the server responds with a 401 Unauthorized status code.

HTTP Basic Access Authentication has limitations. The username and password, encoded using Base64, can be easily decoded. Most websites use TLS (Transport Layer Security) to encrypt data between the browser and server, improving security. However, users' credentials may still be exposed to interception or man-in-the-middle attacks.

With HTTP Basic Access Authentication, the browser sends the Authorization header with the necessary credentials for each request to protected resources within the same domain. This provides a smoother user experience, without repeatedly entering the username and password. But, as each website maintains its own usernames and passwords, users may find it difficult to remember their credentials.

![basic](https://lh3.googleusercontent.com/pw/ABLVV87HzsMWpRefqqDUQe8ccRE6OEeRaTIdte8MQq3_MbiOHSd5n3LVfEYgitUjaI737Uh1VFRO2OHdhujNNt8jrWZTUoblMUTZiSQoIQAEyZoNiyB_YqY=w2400)


## Session-Cookie Authentication

Session-cookie authentication addresses HTTP basic access authentication's inability to track user login status. A session ID is generated to track the user's status during their visit. This session ID is recorded both server-side and in the client’s cookie, serving as an authentication mechanism. It is called a session-cookie because it is a cookie with the session ID stored inside. Users must still provide their username and password initially, after which the server creates a session for the user's visit. Subsequent requests include the cookie, allowing the server to compare client-side and server-side session IDs.

Let’s see how it works:

1. The client sends a request to access a protected resource on the server. If the client has not yet authenticated, the server responds with a login prompt. The client submits their username and password to the server.
2. The server verifies the provided credentials against its user database or authentication service. If the credentials match, the server generates a unique session ID and creates a corresponding session in the server-side storage (e.g., server memory, database, or session server).
3. The server sends the session ID to the client as a cookie, typically with a Set-Cookie header.
4. The client stores the session cookie.
5. For subsequent requests, it sends the cookie along with the request headers.
6. The server checks the session ID in the cookie against the stored session data to authenticate the user.
7. If validated, the server grants access to the requested resource. When the user logs out or after a predetermined expiration time, the server invalidates the session, and the client deletes the session cookie.

![session-cookie](https://lh3.googleusercontent.com/pw/ABLVV86A3UD15QBSlXtox8bnR2HXGSb9oVkuFMfRlVrkNAZS54YbYT2VXE9EgHiAhvcazPZt2MFEdq4SwG7fTxGoLahsWxeJ-46oBh7ZD8eNBRhyJjBYoLM=w2400)
