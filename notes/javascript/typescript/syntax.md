# Syntax


## Types


### Enum

```ts
const enum Suit {
  Clubs,
  Diamonds,
  Hearts,
  Spades
}
var d = Suit.Diamonds;

enum Colors {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}
```


### Union type
```ts
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```

```ts
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
  return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}

const result = rollDice();
```


### Intersection type
```ts
type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
  name: string;
}

var people: LinkedList<Person>;
var s = people.name;
var s = people.next.name;
var s = people.next.next.name;
var s = people.next.next.next.name;
```

```ts
interface A {
  a: string;
  c: string;
}

interface B {
  b: string;
  c: number
}

type AB = A & B // { a: string; b: string: c: number };
type BA = B & A // { a: string; b: string: c: string };
```


### Tuple type

```ts
var x: [string, number];
x = ["hello", 10];
```

### `never` type

The `never` type has the following characteristics:
- `never` is a subtype of and assignable to every type.
- No type is a subtype of or assignable to `never` (except `never` itself).
- In a function expression or arrow function with no return type annotation, if the function has no `return` statements, or only `return` statements with expressions of type never, and if the end point of the function is not reachable (as determined by control flow analysis), the inferred return type for the function is never.
- In a function with an explicit `never` return type annotation, all `return` statements (if any) must have expressions of type `never` and the end point of the function must not be reachable.

### void 

we can only assign undefined or null to them.

```ts
let unusable: void = undefined;
let tempNum: void = undefined;  

function helloUser(): void {  
  alert("This is a welcome message");  
}  
```

### Generics

```ts
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
```

## namespace vs. module

- “Internal modules” are closer to what most people would call a `namespace`
- “External modules” in JS speak really just are `modules` now.

```ts
// BEFORE
module Math {
    export function add(x, y) { ... }
}

// AFTER 
namespace Math {
    export function add(x, y) { ... }
}
```


## Assertion

### Assert Function

```ts
function multiply(x, y) {
  assert(typeof x === "number");
  assert(typeof y === "number");

  return x * y;
}
```

### const assertions

```ts
let foo = {
  name: "foo",
  contents: arr
} as const;

foo.name = "bar"; // error!

foo.contents = []; // error!
foo.contents.push(5); // ...works!
```

### Type parameters as constraints

```ts
function assign<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
    target[id] = source[id];
  }
  return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };
assign(x, { b: 10, d: 20 });
assign(x, { e: 0 }); // Error
```

### Type guards

```ts
interface UserAccount {
  id: number;
  email?: string;
}

// access
user!.email!.length;
```


## Others

### Optional Chaining

```ts
let x = foo?.bar.baz();
// explain: 
// let x = foo === null || foo === undefined ? undefined : foo.bar.baz();
```

```ts
if (foo && foo.bar && foo.bar.baz) {
  // ...
}

// After-ish
if (foo?.bar?.baz) {
  // ...
}
```


### Dynamic import

```ts
async function getZipFile(name: string, files: File[]): Promise<File> {
  const zipUtil = await import("./utils/create-zip-file");
  const zipContents = await zipUtil.getContentAsBlob(files);
  return new File(zipContents, name);
}
```


### Computed properties

Recursive as well

```ts
type NeighborMap = { [name: string]: Node };
type Node = { name: string; neighbors: NeighborMap };

function makeNode(name: string, initialNeighbor: Node): Node {
  return {
    name: name,
    neighbors: {
      [initialNeighbor.name]: initialNeighbor,
    },
  };
}
```


## Class

### Readonly properties
```ts
interface Point {
  readonly x: number;
  readonly y: number;
}
```

```ts
class Foo {
  readonly a = 1;
  readonly b: string;
  constructor() {
    this.b = "hello"; // Assignment permitted in constructor
  }
}
```


### Decorators

```ts
function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class Greeter {
  property = "property";
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}
```

```ts
class C {
  @readonly
  @enumerable(false)
  method() { ... }
}

function readonly(target, key, descriptor) {
    descriptor.writable = false;
}

function enumerable(value) {
    return function (target, key, descriptor) {
        descriptor.enumerable = value;
    };
}
```

### with Json

```ts
interface MyObj {
    myString: string;
    myNumber: number;
}

let obj: MyObj = JSON.parse('{ "myString": "string", "myNumber": 4 }');
```