# JWT

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


## Setup on Server

## Setup on Client

## Invalidate token
- blacklist token, expire


https://docs.nestjs.com/security/authentication#jwt-token

https://jwt.io/

https://www.cronj.com/blog/what-is-json-web-token-jwt/