# Single Sign-On (SSO)

## What is SSO (Single Sign-On)?

The diagram below illustrates how SSO works.

![what is SSO](https://lh3.googleusercontent.com/pw/ABLVV85ZXQJEHKW5UH8oDgAs4djUE79wdwC4M1_XV1Kmga0gqAjve6D-HVvL41t3THGU48s0CRDDZtc-oAaquLY2B5XbyXrYId9DV6IfPq_UCO1URzs9VU0=w2400)

Basically, Single Sign-On (SSO) is an authentication scheme. It allows a user to log in to different systems using a single ID.



**Step 1**: A user visits Gmail, or any email service. Gmail finds the user is not logged in and so redirects them to the SSO authentication server, which also finds the user is not logged in. As a result, the user is redirected to the SSO login page, where they enter their login credentials.

**Steps 2-3**: The SSO authentication server validates the credentials, creates the global session for the user, and creates a token.

**Steps 4-7**: Gmail validates the token in the SSO authentication server. The authentication server registers the Gmail system, and returns “valid.” Gmail returns the protected resource to the user.

**Step 8**: From Gmail, the user navigates to another Google-owned website, for example, YouTube.

**Steps 9-10**: YouTube finds the user is not logged in, and then requests authentication. The SSO authentication server finds the user is already logged in and returns the token.

**Step 11-14**: YouTube validates the token in the SSO authentication server. The authentication server registers the YouTube system, and returns “valid.” YouTube returns the protected resource to the user.

The process is complete and the user gets back access to their account.

## Explained 

![sso](https://lh3.googleusercontent.com/pw/ABLVV85XJafQefFLMgCrsNMXYnIEmb6r4Kcpscnxr-m_BQgRn6TwLNiV1RIqhAJ_awN6u2jVB4ev6oBESt_SbMaLy5cj6MDGBUQAmW13jF1f6-_KUL7S47M=w2400)

SSO can be thought of as a master key to open all different locks. It allows a user to log in to different systems using a single set of credentials.

In a time where we are accessing more applications than ever before, this is a big help to mitigate password fatigue and streamlines user experience.

To fully understand the SSO process, 𝗹𝗲𝘁’𝘀 𝘁𝗮𝗸𝗲 𝗮 𝗹𝗼𝗼𝗸 𝗮𝘁 𝗵𝗼𝘄 𝗮 𝘂𝘀𝗲𝗿 𝘄𝗼𝘂𝗹𝗱 𝗹𝗼𝗴 𝗶𝗻𝘁𝗼 𝗟𝗶𝗻𝗸𝗲𝗱𝗜𝗻 𝘂𝘀𝗶𝗻𝗴 𝗚𝗼𝗼𝗴𝗹𝗲 𝗮𝘀 𝘁𝗵𝗲 𝗶𝗱𝗲𝗻𝘁𝗶𝘁𝘆 𝗽𝗿𝗼𝘃𝗶𝗱𝗲𝗿:

### 𝟭) 𝗨𝘀𝗲𝗿 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀 𝗮𝗰𝗰𝗲𝘀𝘀
First, the user would attempt to access the Service Provider (LinkedIn). At this point, a user would be presented with login options, and in this example, they would select "Sign in with Google".

### 𝟮) 𝗔𝘂𝘁𝗵𝗲𝗻𝘁𝗶𝗰𝗮𝘁𝗶𝗼𝗻 𝗿𝗲𝗾𝘂𝗲𝘀𝘁
From here, the Service Provider (LinkedIn) will redirect the user to the Identity Provider (Google) with an authentication request.

### 𝟯) 𝗜𝗱𝗣 𝗰𝗵𝗲𝗰𝗸𝘀 𝗳𝗼𝗿 𝗮𝗰𝘁𝗶𝘃𝗲 𝘀𝗲𝘀𝘀𝗶𝗼𝗻
Once the Identity Provider (Google) has received the request, it will check for an active session. If it doesn't find one, authentication will be requested.

### 𝟰) 𝗨𝘀𝗲𝗿 𝘀𝘂𝗯𝗺𝗶𝘁𝘀 𝗰𝗿𝗲𝗱𝗲𝗻𝘁𝗶𝗮𝗹𝘀
At this stage, the user will submit their login credentials (username and password) to the Identity Provider (IdP).

### 𝟱) 𝗜𝗱𝗣 𝘃𝗲𝗿𝗶𝗳𝗶𝗲𝘀 𝗰𝗿𝗲𝗱𝗲𝗻𝘁𝗶𝗮𝗹𝘀
The Identity Provider will then verify the submitted credentials against its User Directory (database). If the credentials are correct, the IdP will create an authentication token or assertion.

### 𝟲) 𝗜𝗱𝗣 𝘀𝗲𝗻𝗱𝘀 𝘁𝗼𝗸𝗲𝗻 𝘁𝗼 𝗦𝗲𝗿𝘃𝗶𝗰𝗲 𝗣𝗿𝗼𝘃𝗶𝗱𝗲𝗿
Once the token or assertion has been created, the IdP sends it back to the Service Provider confirming the user's identity. The user is now authenticated and can access the Service Provier (LinkedIn).

### 𝟳) 𝗔𝗰𝗰𝗲𝘀𝘀 𝗴𝗿𝗮𝗻𝘁𝗲𝗱 𝘂𝘀𝗶𝗻𝗴 𝗲𝘅𝗶𝘀𝘁𝗶𝗻𝗴 𝘀𝗲𝘀𝘀𝗶𝗼𝗻
Since the Identity Provider has established a session, when the user goes to access a different Service Provider (eg; GitHub), they won't need to re-enter their credentials. Future service providers will request authentication from the Identity Provider, recognize the existing session, and grant access to the user based on the previously authenticated session.

SSO workflows like the above operate on SSO protocols, which are a set of rules that govern how the IdP and SP communicate and trust each other. Common protocols include Security Assertion Markup Language (SAML), OpenID Connect, and OAuth.


## More detail

![otp](https://lh3.googleusercontent.com/pw/ABLVV87X65OtE7EzYBs7MLQKynbb2KbjkS94xFUVb5VY8s33oVq53Ap1ys3tOq68KNmCAZwyVaWFKzOLQOd3ySxYy13i6v-A3xsrN3eg5wQLxpy_TscPtSw=w2400)

- SSO: Single Sign-On 
- CAS: Central Authentication Service 
- TGT: Ticket Granting Ticket
- TGC: Ticket Granting Cookie
- ST: Service Ticket

When a principal tries to access a resource, she is directed to authenticate with an **identity provider**. Once identity provider is satisfied that the principal has been authenticated, it gives informatin to the **service provider**, allowing it to decide whether to grant her access to the resource.

- **Identity provider** could be an externally hosted system, or something inside your own organization. 
    - Goolge, for example, provides an OpenID Connect identity provider.
    - For enterprises, it's common to have your own identity provider, which may be linked to your company's directory service - It could be s.th like *Lightweight Directory Access Protocol (LDAP)* or *Active Directory*


The SSO process mainly relies on a **Central Authentication Service (CAS)** server. Here's a step-by-step breakdown of the SSO process:

1. When we attempt to log in to an application, such as Gmail, we're redirected to the **CAS** server.
2. The **CAS** server verifies our login credentials and creates a **Ticket Granting Ticket (TGT)**. This **TGT** is then stored in a **Ticket Granting Cookie (TGC)** on our browser, **representing our global session.**
3. CAS generates a **Service Ticket (ST)** for our visit to Gmail and redirects us back to Gmail with the **ST**.
4. Gmail uses the **ST** to validate our login with the **CAS** server. After validation, we can access Gmail.

When we want to access another application, like YouTube, the process is simplified:
- Since we already have a **TGC** from our Gmail login, **CAS** recognizes our authenticated status.
- **CAS** generates a new **ST** for YouTube access, and we can use YouTube without inputting our credentials again.

This process reduces the need to remember and enter multiple sets of credentials for different applications.

