# Generate ID

**Requirements**:
- Globally unique
- Roughly sorted by time
- Numerical values only
- 64 bits
- Highly scalable, low latency

## DB Auto-increment
- ✅ Easy to setup 
- ❌ Only works in a singler server setup 
- ❌ Security issue See: Insecure direct object references

## UUID
- ✅ Easy to generate, globally unique 
- ❌ Very long, not sorted by time, not numeric

## DB ticket server
- ✅ DB Auto-increment is well understood
- ❌ Single Point Of Failure (SPOF) if a server is used
- ❌ IDs are not sorted if multiple servers are used

## Redis
- ✅ Dont rely on DB
- ❌ Adding or removing Redis servers cause complexity

## Twitter Snowflake Id
- ✅ Open sourced by Twitter
- ✅ Widely used in the industry
- ✅ Dicord / Twitter used this


## Refs

- [Ticket Servers: Distributed Unique Primary Keys on the Cheap](https://code.flickr.net/2010/02/08/ticket-servers-distributed-unique-primary-keys-on-the-cheap/)
- [snowflake-id](https://www.npmjs.com/package/snowflake-id)
- [flake-idgen](https://www.npmjs.com/package/flake-idgen)