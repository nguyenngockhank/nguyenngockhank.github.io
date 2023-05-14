---
tags: ["FP", "Pattern"]
---

# Functor

<TagLinks />

::: tip
In essence, a **functor** is nothing more than a data structure you can **map** functions over with the purpose of **lifting values** from a container, **modifying them**, and then **putting them back** into a container. 
:::

## Example

```js
class Functor {
    constructor(value) {
        this._value = value;
    }

    get() {
        return this._value;
    }

    map(fn) {
        const newVal = fn(this._value);
        return new Functor(newVal);
    }
}
```


Usage 

```js
const name = 'Khank';

const newName = new Functor(name)
                    .map(str => "Nguyen " + name)
                    .map(str => str.toUpperCase())
                    .get();

console.log(newName); // NGUYEN KHANK
```

## Monet

[Monet.js](https://monet.github.io/)

### Maybe

The Maybe type is the most common way of representing nothingness (or the null type) with making the possibilities of NullPointer issues disappear.

Maybe is effectively abstract and has two concrete subtypes: Some (also Just) and None (also Nothing).

### Either

Either (or the disjunct union) is a type that can either hold a value of type A or a value of type B but never at the same time. Typically it is used to represent computations that can fail with an error. Think of it as a better way to handle exceptions. We think of an Either as having two sides, the success is held on the right and the failure on the left. This is a right biased either which means that map and flatMap (bind) will operate on the right side of the either.

### ...

## References 

- [What is a functor?](https://medium.com/@dtinth/what-is-a-functor-dcf510b098b6)
- [Monet.js](https://monet.github.io/)
- [Building A Maybe In JavaScript](https://www.codingame.com/playgrounds/6272/building-a-maybe-in-javascript)
- [fp ts document](https://gcanti.github.io/fp-ts/)