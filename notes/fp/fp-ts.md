---
tags: ["FP", "Typescript"]
---

# fp-ts

<TagLinks />
 
https://dev.to/gcanti/getting-started-with-fp-ts-category-4c9a

`Eq`: Equal
`Ord`: Order

## Interoperability

Type       |  Example | Solution
--------   | -------- |--------- 
Sentinels  | `Array.prototype.findIndex` | `Option` 
Sentinels  | `Array.prototype.find`      | `Option`, `fromNullable`
Exceptions    | `JSON.parse`             | `Either`, `tryCatch`
Random values | `Math.random`            | `IO`
Sync side effects | `localStorage.getItem` | `IO`
Sync side effects | `readFileSync` | `IOEither`, `tryCatch`
Async side effects | reading from standard input | `Task`
Async side effects | `fetch` | `TaskEither`, `tryCatch`


### Sentinels

Use case: an API that may fail and returns a special value of the codomain.

```ts
import { Option, none, some } from 'fp-ts/Option'

function findIndex<A>(
  as: Array<A>,
  predicate: (a: A) => boolean
): Option<number> {
  const index = as.findIndex(predicate)
  return index === -1 ? none : some(index)
}
```

**Use case**: an API that may fail and returns undefined (or null).

```ts
import { Option, fromNullable } from 'fp-ts/Option'

function find<A>(
    as: Array<A>, 
    predicate: (a: A) => boolean
  ): Option<A> {
  return fromNullable(as.find(predicate))
}
```

### Exceptions

Use case: an API that may throw.

```ts
import { Either, tryCatch } from 'fp-ts/Either'

function parse(s: string): Either<Error, unknown> {
  return tryCatch(
    () => JSON.parse(s),
    (reason) => new Error(String(reason))
  )
}
```

### Random values

Use case: an API that returns a non deterministic value.

```ts
import { IO } from 'fp-ts/IO'
const random: IO<number> = () => Math.random()
```

### Synchronous side effects

Use case: an API that reads and/or writes to a global state.

```ts
import { Option, fromNullable } from 'fp-ts/Option'
import { IO } from 'fp-ts/IO'

function getItem(key: string): IO<Option<string>> {
  return () => fromNullable(localStorage.getItem(key))
}
```

Use case: an API that reads and/or writes to a global state and may throw.

```ts
import * as fs from 'fs'
import { IOEither, tryCatch } from 'fp-ts/IOEither'

function readFileSync(path: string): IOEither<Error, string> {
  return tryCatch(
    () => fs.readFileSync(path, 'utf8'),
    (reason) => new Error(String(reason))
  )
}
```

### Asynchronous side effects

Use case: an API that performs an asynchronous computation.

```ts
import { createInterface } from 'readline'
import { Task } from 'fp-ts/Task'

const read: Task<string> = () =>
  new Promise<string>((resolve) => {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout
    })
    rl.question('', (answer) => {
      rl.close()
      resolve(answer)
    })
  })
```

Use case: an API that performs an asynchronous computation and may reject.

```ts
import { TaskEither, tryCatch } from 'fp-ts/TaskEither'

function get(url: string): TaskEither<Error, string> {
  return tryCatch(
    () => fetch(url).then((res) => res.text()),
    (reason) => new Error(String(reason))
  )
}
```

## Equal

### Type class definition
```ts
interface Eq<A> {
  /** returns `true` if `x` is equal to `y` */
  readonly equals: (x: A, y: A) => boolean
}

// implementation
const eqPoint: Eq<Point> = {
  equals: (p1, p2) => p1 === p2 || (p1.x === p2.x && p1.y === p2.y)
}
```

### `getStructEq` combinator
```ts
import { getStructEq } from 'fp-ts/Eq'

const eqPoint: Eq<Point> = getStructEq({
  x: eqNumber,
  y: eqNumber
})

const eqVector: Eq<Vector> = getStructEq({
  from: eqPoint,
  to: eqPoint
})
```

### `getEq` for array

```ts
import { getEq } from 'fp-ts/Array'

const eqArrayOfPoints: Eq<Array<Point>> = getEq(eqPoint)
```

### `contramap` combinator

```ts
import { contramap } from 'fp-ts/Eq'

type User = {
  userId: number
  name: string
}

/** two users are equal if their `userId` field is equal */
const eqUser = contramap((user: User) => user.userId)(eqNumber)

eqUser.equals({ userId: 1, name: 'Giulio' }, { userId: 1, name: 'Giulio Canti' }) // true
eqUser.equals({ userId: 1, name: 'Giulio' }, { userId: 2, name: 'Giulio' }) // false
```

## Order

### Type class definition
```ts
import { Eq } from 'fp-ts/Eq'

type Ordering = -1 | 0 | 1

interface Ord<A> extends Eq<A> {
  readonly compare: (x: A, y: A) => Ordering
}
```

Example implementation
```ts
const ordNumber: Ord<number> = {
  equals: (x, y) => x === y,
  compare: (x, y) => (x < y ? -1 : x > y ? 1 : 0)
}
```

### Min / Max

```ts
import { getDualOrd } from 'fp-ts/Ord'

function min<A>(O: Ord<A>): (x: A, y: A) => A {
  return (x, y) => (O.compare(x, y) === 1 ? y : x)
}

function max<A>(O: Ord<A>): (x: A, y: A) => A {
  return min(getDualOrd(O)) // reserse the order
}
```

For Number
```ts
import { Ord, fromCompare } from 'fp-ts/Ord'

const ordNumber: Ord<number> = fromCompare((x, y) => (x < y ? -1 : x > y ? 1 : 0))
min(ordNumber)(2, 1) // 1
```

For User
```ts
import { contramap } from 'fp-ts/Ord'

// const byAge: Ord<User> = fromCompare((x, y) => ordNumber.compare(x.age, y.age));
const byAge: Ord<User> = contramap((user: User) => user.age)(ordNumber) // another way

const getYounger = min(byAge)
getYounger({ name: 'Guido', age: 48 }, { name: 'Giulio', age: 45 }) // { name: 'Giulio', age: 45 }
```

## Semigroup

https://dev.to/gcanti/getting-started-with-fp-ts-semigroup-2mf7

A semigroup is a pair `(A, *)` in which `A` is a non-empty set and `*` is a binary **associative** operation on `A`, 
i.e. a function that takes two elements of A as input and returns an element of A as output...

```
(x * y) * z = x * (y * z)
```

Examples of semigroups:
- `(number, *)` where * is the usual multiplication of numbers
- `(string, +)` where + is the usual concatenation of strings
- `(boolean, &&)` where && is the usual conjunction


```ts
interface Semigroup<A> {
  concat: (x: A, y: A) => A
}
// **Associativity**: `concat(concat(x, y), z) = concat(x, concat(y, z))`, for all x, y, z in A
```


```ts
/** number `Semigroup` under addition */
const semigroupSum: Semigroup<number> = {
  concat: (x, y) => x + y
}
```


```ts
import { ordNumber } from 'fp-ts/Ord'
import { getMeetSemigroup, getJoinSemigroup } from 'fp-ts/Semigroup'

const semigroupMin: Semigroup<number> = getMeetSemigroup(ordNumber)
const semigroupMax: Semigroup<number> = getJoinSemigroup(ordNumber)

semigroupMin.concat(2, 1) // 1
semigroupMax.concat(2, 1) // 2
```

### `getStructSemigroup` combinator

```ts
import { getStructSemigroup } from 'fp-ts/Semigroup'

const semigroupSum: Semigroup<number> = {
  concat: (x, y) => x + y
}

const semigroupPoint: Semigroup<Point> = getStructSemigroup({
  x: semigroupSum,
  y: semigroupSum
})

const semigroupVector: Semigroup<Vector> = getStructSemigroup({
  from: semigroupPoint,
  to: semigroupPoint
})
```


### `getFunctionSemigroup` combinator

```ts
import { getFunctionSemigroup, Semigroup, semigroupAll } from 'fp-ts/Semigroup'

/** `semigroupAll` is the boolean semigroup under conjunction */
const semigroupPredicate: Semigroup<(p: Point) => boolean> = getFunctionSemigroup(
  semigroupAll
)<Point>()

// usage
const isPositiveX = (p: Point): boolean => p.x >= 0
const isPositiveY = (p: Point): boolean => p.y >= 0

const isPositiveXY = semigroupPredicate.concat(isPositiveX, isPositiveY)

isPositiveXY({ x: 1, y: 1 }) // true
isPositiveXY({ x: 1, y: -1 }) // false
isPositiveXY({ x: -1, y: 1 }) // false
isPositiveXY({ x: -1, y: -1 }) // false
```

### Folding


```ts
import { fold, semigroupSum, semigroupProduct } from 'fp-ts/Semigroup'

// fold() => () => <T>(initialValue: T, elements: T[]) : T
const sum = fold(semigroupSum)

sum(0, [1, 2, 3, 4]) // 10

const product = fold(semigroupProduct)

product(1, [1, 2, 3, 4]) // 24
```

### Semigroups for type constructors

```ts
import { semigroupSum } from 'fp-ts/Semigroup'
import { getApplySemigroup, some, none } from 'fp-ts/Option'

const S = getApplySemigroup(semigroupSum)

S.concat(some(1), none) // none
S.concat(some(1), some(2)) // some(3)
```

### Example merge user
```ts
import {
  Semigroup,
  getStructSemigroup,
  getJoinSemigroup,
  getMeetSemigroup,
  semigroupAny
} from 'fp-ts/Semigroup'
import { getMonoid } from 'fp-ts/Array'
import { ordNumber, contramap } from 'fp-ts/Ord'

const semigroupCustomer: Semigroup<Customer> = getStructSemigroup({
  // keep the longer name
  name: getJoinSemigroup(contramap((s: string) => s.length)(ordNumber)),
  // accumulate things
  favouriteThings: getMonoid<string>(), // <= getMonoid returns a Semigroup for `Array<string>` see later
  // keep the least recent date
  registeredAt: getMeetSemigroup(ordNumber),
  // keep the most recent date
  lastUpdatedAt: getJoinSemigroup(ordNumber),
  // Boolean semigroup under disjunction
  hasMadePurchase: semigroupAny
})

semigroupCustomer.concat(
  {
    name: 'Giulio',
    favouriteThings: ['math', 'climbing'],
    registeredAt: new Date(2018, 1, 20).getTime(),
    lastUpdatedAt: new Date(2018, 2, 18).getTime(),
    hasMadePurchase: false
  },
  {
    name: 'Giulio Canti',
    favouriteThings: ['functional programming'],
    registeredAt: new Date(2018, 1, 22).getTime(),
    lastUpdatedAt: new Date(2018, 2, 9).getTime(),
    hasMadePurchase: true
  }
)
/*
{ name: 'Giulio Canti',
  favouriteThings: [ 'math', 'climbing', 'functional programming' ],
  registeredAt: 1519081200000, // new Date(2018, 1, 20).getTime()
  lastUpdatedAt: 1521327600000, // new Date(2018, 2, 18).getTime()
  hasMadePurchase: true }
*/
```

## Monoid

### Type class definition
```ts
import { Semigroup } from 'fp-ts/Semigroup'

interface Monoid<A> extends Semigroup<A> {
  readonly empty: A
}
```

### Example settings

```ts
import { Monoid, getStructMonoid } from 'fp-ts/Monoid'
import { Option, some, none, getLastMonoid } from 'fp-ts/Option'

/** VSCode settings */
interface Settings {
  /** Controls the font family */
  fontFamily: Option<string>
  /** Controls the font size in pixels */
  fontSize: Option<number>
  /** Limit the width of the minimap to render at most a certain number of columns. */
  maxColumn: Option<number>
}

const monoidSettings: Monoid<Settings> = getStructMonoid({
  fontFamily: getLastMonoid<string>(),
  fontSize: getLastMonoid<number>(),
  maxColumn: getLastMonoid<number>()
})

const workspaceSettings: Settings = {
  fontFamily: some('Courier'),
  fontSize: none,
  maxColumn: some(80)
}

const userSettings: Settings = {
  fontFamily: some('Fira Code'),
  fontSize: some(12),
  maxColumn: none
}

/** userSettings overrides workspaceSettings */
monoidSettings.concat(workspaceSettings, userSettings)
/*
{ fontFamily: some("Fira Code"),
  fontSize: some(12),
  maxColumn: some(80) }
*/
```