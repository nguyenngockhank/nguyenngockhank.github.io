# Data types

## Primitives:
- string
- number
- boolean
- null
- undefined
- symbol

## Objects

All other types are called `primitive` because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities. 


## Symbols

The `symbol` type is used to create `unique identifiers` for objects. 

```javascript
typeof Symbol("id") // "symbol"

Symbol('id') === Symbol('id'); // false
```

## Falsy values
- false
- null
- 0
- ""
- undefined
- NaN

## Truthy values
All values are truthy unless they are defined as falsy


## Type Coertion

![Type Coertion](@/images/js-coercion.png)

## References

[Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)