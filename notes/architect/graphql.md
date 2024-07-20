# GraphQL notes

GraphQl doest NOT replace SQL but it's a replacement for REST API.

![what is graphql](https://i.pinimg.com/originals/ce/01/9f/ce019f0d8d5e7ca1cdf5019f82f16994.jpg)

[Online tool here](https://graphql.github.io/swapi-graphql/)

## protocol-agnostic

GraphQL itself is **protocol-agnostic**, meaning it doesn't dictate a specific network protocol for communication. It focuses on the data structure and query language for requesting and receiving data.

However, GraphQL is most commonly used with **HTTP** (Hypertext Transfer Protocol). Here's why:
- **Widely Supported**: HTTP is the foundation of the web, making it a familiar and universally supported choice for most servers and clients.
- **Flexibility**: HTTP offers various methods (GET, POST) that can be adapted to different GraphQL request types.
- **Existing Tools and Libraries**: A wealth of existing tools and libraries exist for handling HTTP communication, simplifying development with GraphQL.

**Alternative Protocols**:

While HTTP is dominant, GraphQL can theoretically be used with other protocols like:
- **WebSockets**: For real-time data updates where two-way communication is necessary.
- **gRPC**: For potential performance benefits, especially in high-performance environments with language compatibility for gRPC and Protocol Buffers.

**Key Point**: The network protocol choice primarily affects how data is transferred, while GraphQL handles the data structure and querying logic itself.

## Queries

### Basic 
```graphql
{
    allPeople {
        people {
            name
            birthYear
        }
    }
}
```

### Limiting

```graphql
{
    allPeople (first: 2) {
        people {
            name
            birthYear
        }
    }
}
```
Note: could use _last_ instead of _first_

### Combining with Fragment


```graphql
query FirstAndLastTwoPeople {
    firstTwoPeople: allPeople (first: 2) {
        people {
           ...peopleFields
        }
    }
    lastTwoPeople: allPeople (first: 2) {
        people {
            ...peopleFields
        }
    }
}

fragment peopleFields on Person {
    name
    birthYear
    gender
}
```


### Combining With Argument

```graphql
query FirstAndLastNPeople($n: Int = 5) {
    firstNPeople: allPeople (first: $n) {
        people {
           ...peopleFields
        }
    }
    lastNPeople: allPeople (first: $n) {
        people {
            ...peopleFields
        }
    }
}

fragment peopleFields on Person {
    name
    birthYear
    gender
}
```

### Combining With Directive

```graphql
query FirstAndLastNPeople($n: Int = 5, $fetchFirst: Boolean = false) {
    firstNPeople: allPeople (first: $n) {
        people @include (if $fetchFirst) {
           ...peopleFields
        }
    }
    lastNPeople: allPeople (first: $n) {
        people {
            ...peopleFields
        }
    }
}

fragment peopleFields on Person {
    name
    birthYear
    gender
}
```

Note: could use *@skip* instead of *@include*

## Mutations

```graphql
mutation {
   updateUser( id: "1", data: {name: "Ban Admin"}) {
    id
    name
  }
}
```

## References 

- [GraphQL Tutorial](https://www.tutorialspoint.com/graphql/index.htm)
- [Online tool here](https://graphql.github.io/swapi-graphql/)