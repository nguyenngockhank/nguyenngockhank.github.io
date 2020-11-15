# GraphQL Snippets

GraphQl doest NOT replace SQL but it's a replacement for REST API.

[Online tool here](https://graphql.github.io/swapi-graphql/)

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

## References 

- [GraphQL Tutorial](https://www.tutorialspoint.com/graphql/index.htm)
- [Online tool here](https://graphql.github.io/swapi-graphql/)