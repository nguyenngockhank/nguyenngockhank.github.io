# JWT (JSON Web Token)

## Explained

![Explained](https://lh3.googleusercontent.com/pw/ABLVV87ogGMf00Gk6T6btotcuqjeCyHIS4QUG9Jqf3jp8QMq_AJSNxrJJja6BIdg3NNHMvUk2CP37MkzZ4jQ-8IQR48GCVFsEUgCeL6Fzm0nps-cFwWhqSk=w2400)

The header is like the label on the outside of the box. It tells us what type of box it is and how it's secured. It's usually written in a format called JSON, which is just a way to organize information using curly braces { } and colons :

The payload is like the actual message or information you want to send. It could be your name, age, or any other data you want to share. It's also written in JSON format, so it's easy to understand and work with.

Now, the signature is what makes the JWT secure. It's like a special seal that only the sender knows how to create. The signature is created using a secret code, kind of like a password. This signature ensures that nobody can tamper with the contents of the JWT without the sender knowing about it.

When you want to send the JWT to a server, you put the header, payload, and signature inside the box. Then you send it over to the server. The server can easily read the header and payload to understand who you are and what you want to do.

Over to you: When should we use JWT for authentication? What are some other authentication methods?


## Structure of a JSON Web token

[ **HEADER** + **PAYLOAD** + **SIGNATURE** ]

**HEADER**
```json
{
    "alg": "HS256",
    "typ": "JWT"
}
```

**PAYLOAD**
```json
{
    "id": "135564653",
    "fullName": "John Doe",
    "admin": true,
    "iat": 21353532532
}
```

**SIGNATURE**
```sh
HMACSHA256(
    BASE64URL(header) . BASE64URL(payload), 
    secret
)
```


## Invalidate token
- blacklist token, expire

https://docs.nestjs.com/security/authentication#jwt-token

https://jwt.io/

https://www.cronj.com/blog/what-is-json-web-token-jwt/