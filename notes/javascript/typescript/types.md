---
tags: ["Typescript"]
---

# Types

<TagLinks />

## Type vs. Interface

:::: tabs

::: tab Interface
```ts
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear = getBear() 
bear.name
bear.honey
        
```
:::

::: tab Type
```ts
type Animal = {
  name: string
}

type Bear = Animal & { 
  honey: Boolean 
}

const bear = getBear();
bear.name;
bear.honey;
```
:::

::::

## Utility Types

Assume we have `Todo` interface

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
```

### Partial

**Partial &#x3C;Type&#x3E;**: Constructs a type with all properties of `Type` set to optional. This utility will return a type that represents all subsets of a given type.

```ts
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
```

### Required

**Required &#x3C;Type&#x3E;**: Constructs a type consisting of all properties of `Type` set to required. The opposite of `Partial`.


### Readonly

**Readonly &#x3C;Type&#x3E;**: Constructs a type with all properties of `Type` set to readonly, meaning the properties of the constructed type cannot be reassigned.

### Pick

**Pick &#x3C;Type, Keys&#x3E;**: Constructs a type by picking the set of properties `Keys` from `Type`.

```ts
type TodoPreview = Pick<Todo, "title" | "completed">;
```

### Omit

**Omit &#x3C;Type, Keys&#x3E;**: Constructs a type by picking all properties from `Type` and then removing `Keys`.

```ts
type TodoPreview = Omit<Todo, "description">;
```

### Record

**Record &#x3C;Keys, Type&#x3E;**: Constructs a type with a set of properties `Keys` of type `Type`. This utility can be used to map the properties of a type to another type.

```ts
interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
};
```

### NonNullable

**NonNullable &#x3C;Type&#x3E;**: Constructs a type by excluding `null` and `undefined` from `Type`.

```ts
type T0 = NonNullable<string | number | undefined>;
//    ^ = type T0 = string | number
type T1 = NonNullable<string[] | null | undefined>;
//    ^ = type T1 = string[]
```

### Exclude

**Exclude &#x3C;Type, ExcludedUnion&#x3E;**: Constructs a type by excluding from `Type` all union members that are assignable to `ExcludedUnion`.

```ts
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
//    ^ = type T1 = "c"
```

### Extract

**Extract &#x3C;Type, Union&#x3E;**: Constructs a type by extracting from `Type` all union members that are assignable to Union.

```ts
type T0 = Extract<"a" | "b" | "c", "a" | "f">;
//    ^ = type T0 = "a"
```

### ReturnType

**ReturnType &#x3C;Type&#x3E;**: Constructs a type consisting of the return type of function `Type`.

### InstanceType

**InstanceType &#x3C;Type&#x3E;**: Constructs a type consisting of the instance type of a constructor function in `Type`.


## References

- [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)
- [Interface vs Type alias in TypeScript 2.7](https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c)
- [How to Declare a Function that throws an Error in TypeScript](https://bobbyhadz.com/blog/typescript-function-that-throws-error)