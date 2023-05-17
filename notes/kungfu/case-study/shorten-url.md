---
tags: ["ZCaseStudy"]
---

# URL Shorter

## S1 - Understand the problem and establish design scope
System design interview questions are intentionally left open-ended. To design a well-crafted system, it is critical to ask clarification questions.

**Candidate**: Can you give an example of how a URL shortener work?

**Interviewer**: Assume URL `https://www.systeminterview.com/q=chatsystem&c=loggedin&v=v3&l=long` is the original URL. Your service creates an alias with shorter length: `https://tinyurl.com/y7keocwj`. If you click the alias, it redirects you to the original URL.

**Candidate**: What is the traffic volume?

**Interviewer**: 100 million URLs are generated per day.

**Candidate**: How long is the shortened URL?

**Interviewer**: As short as possible.

**Candidate**: What characters are allowed in the shortened URL?

**Interviewer**: Shortened URL can be a combination of numbers (0-9) and characters (a-z, AZ).

**Candidate**: Can shortened URLs be deleted or updated?

**Interviewer**: For simplicity, let us assume shortened URLs cannot be deleted or updated. Here are the basic use cases:
1. URL shortening: given a long URL => return a much shorter URL
2. URL redirecting: given a shorter URL => redirect to the original URL
3. High availability, scalability, and fault tolerance considerations

### Back of the envelope estimation
- Write operation: 100 million URLs are generated per day.
- Write operation per second: `100 million / 24 / 3600 = 1160`
- Read operation: Assuming ratio of read operation to write operation is `10:1`, read operation per second: `1160 * 10 = 11,600`
- Assuming the URL shortener service will run for 10 years, this means we must support `100 million * 365 * 10 = 365 billion` records.
- Assume average URL length is `100`.
- Storage requirement over `10 years`: `365 billion * 100 bytes * 10 years = 365 TB`


## S2 - Propose high-level design and get buy-in

A URL shortener primary needs two API endpoints

### API Endpoints

A URL shortener primary needs two API endpoints.
1. URL shortening
2. URL redirecting

### URL shortening: 

To create a new short URL, a client sends a POST request, which contains one parameter: the original long URL. The API looks like this:

```
POST api/v1/data/shorten

Payload: 
{
   longURL: string; 
}

Response:
{
    shortURL: string;
}
```

Assume the short URL looks like this: `www.tinyurl.com/{hashValue}`. To support the URL shortening use case, we must find a `hash function fx` that maps a long URL to the `hashValue`

```
fx(longURL) => hashValue
```

The hash function must satisfy the following requirements:
- Each `longURL` must be hashed to one `hashValue`. (Unique)
- Each `hashValue` can be mapped back to the `longURL`.

### URL redirecting: 

To redirect a short URL to the corresponding long URL, a client sends a GET request. The API looks like this:

```
GET api/v1/shortUrl 

Return longURL for HTTP redirection
```

**301 redirect**:   *permanently* moved . If the priority is to **reduce the server load**, using 301 redirect makes sense as only the first request of the same URL is sent to URL.
**302 redirect**.  *temporarily* moved. If analytics is important, 302 redirect is a better choice as it can track click rate and source of the click more easily.

Assuming the hash table stores `<shortURL, longURL>` pairs, URL redirecting can be implemented by the following:
- Get longURL: longURL = hashTable.get(shortURL)
- Once you get the longURL, perform the URL redirect.

## S3 - Design deep dive

### Data model

**URL Table**
Columm | Type
--------|-------
ID (auto-incr) | PK
shortURL | 
longURL  | 

### Hash model

**Hash value length**

The `hashValue` consists of characters from `[0-9, a-z, A-Z]`, containing `10 + 26 + 26 = 62` possible characters

To figure out the length of `hashValue`, find the smallest `n` such that `62^n ≥ 365 billion`


base10  | base62 
------- |-------
`[0-9]` | `[0-9, a-z, A-Z]`
10^ 6 = 1 Million | 62^6 = ~56 Million
10^ 7 = 10 Million | 62^7 = 3.5 Trillion 

So, `n = 7`, length of `hashValue` is 7

**Hash + collision resolution**

Hash function | Hash value (Hex) | Length
-------------- | -------------   |  --------- 
CRC32          | a1238e48       | 8 
MD5            | 37693cfc748049e45d87b8c7d8b9aacd | 32
SHA1           | 23ca86f71e3170af8f47fa24c28323e100543bc3 | 40
=> use CRC32 make sense

**Base 62 conversion**
Base conversion is another approach commonly used for URL shorteners. 

Base conversion helps to convert the same number between its different number representation systems. Base62 conversion is used as there are 62 possible characters for `hashValue`. 

**Compare**
Hash + collision resolution | Base 62 conversion
---------------------------| ----------------
fixed short URL length     | the short url length is not fixed. It goes up with the ID
No need a unique ID generator | depends on unique ID generator 
Collision is possible & must be resolved | Collision is impossible because ID is unique 
It is impossible to figure out the next available short URL | It is easy to figure out the next available short URL if ID incr 1 for new entry. This can be the security concern.

### URL shortening deep dive

1. longURL is the input.
2. The system **checks if the longURL is in the database.**
    3. If it is, it means the longURL was converted to shortURL before. In this case, fetch the shortURL from the database and return it to the client.
    4. If not, the longURL is new. A new unique ID (primary key) Is generated by the unique ID generator.
        5. Convert the ID to shortURL with base 62 conversion.
        6. Create a new database row with the ID, shortURL, and longURL.

The distributed unique ID generator is worth mentioning. Its primary function is to generate **globally unique IDs**, which are used for creating shortURLs. In a highly **distributed environment**, implementing a unique ID generator is challenging.

### URL redirecting deep dive

The flow of URL redirecting is summarized as follows:
1. A user clicks a short URL link: `https://tinyurl.com/zn9edcu`
2. The load balancer forwards the request to web servers.
3. If a shortURL is already in the cache, return the longURL directly.
4. If a shortURL is not in the cache, fetch the longURL from the database. If it is not in the database, it is likely a user entered an invalid shortURL.
5. The longURL is returned to the user.

### Step 4 - Wrap up

If there is extra time at the end of the interview, here are a few additional talking points.

- **Rate limiter**: A potential security problem we could face is that malicious users send an overwhelmingly large number of URL shortening requests. Rate limiter helps to filter out requests based on IP address or other filtering rules. If you want to refresh your memory about rate limiting, refer to “Chapter 4: Design a rate limiter”.
- **Web server scaling**: Since the web tier is stateless, it is easy to scale the web tier by
adding or removing web servers.
- **Database scaling**: Database replication and sharding are common techniques.
- **Analytics**: Data is increasingly important for business success. Integrating an analytics solution to the URL shortener could help to answer important questions like how many people click on a link? When do they click the link? etc.
- **Availability**, **consistency**, and **reliability**. These concepts are at the core of any large system’s success. 

