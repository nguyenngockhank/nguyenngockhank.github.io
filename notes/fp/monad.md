# Monad 

Monads are a design pattern that allows `a user to chain operations` while `the monad manages secret work` behind the scenes.

[The Absolute Best Intro to Monads For Software Engineers](https://www.youtube.com/watch?v=C2w45qRc3aU&ab_channel=StudyingWithAlex)


![how](https://digitteck.com/wp-content/uploads/2022/06/2022_06_08_1-640x400.png)



Monad | Abstracts Away
------|---------------
NumberWithLogs / Writer | accumulation of log data
Option   | possibility of missing values
Future / Promise | possibility for values to only become available later
List | branching computation

## Monad Components: 

1/ `Wrapper Type`
2/ `Wrap Function` allows entry to monad ecosystem aka `return`, `pure`, `unit`
3/ `Run Function` runs transformations on monadic values aka `bind`, `flatMap`, `>>=`


```ts
// 1. Wrapper Type
interface NumberWithLogs {
  result: number
  logs: string[]
}

function square(x: number): NumberWithLogs {
  return {
    result: x * x,
    logs: [`Squared ${x} to get ${x * x}`],
  }
}

function addOne(x: number): NumberWithLogs {
  return {
    result: x + 1,
    logs: [`Added 1 to ${x} to get ${x + 1}`],
  }
}

// 2. Wrap Function
function wrapWithLogs(x: number) : NumberWithLogs {
  return {
    result: xm
    logs: [],
  }
}

// 3. Run Function
function runWithLogs(input: NumberWithLogs, transform: (_: number) => NumberWithLogs) : NumberWithLogs {
  const newNumberWithLogs = transform(input.result);
  return {
    result: newNumberWithLogs.result,
    logs: input.logs.concat(newNumberWithLogs.logs)
  }
}
```


## Maybe

```ts
// 1. Wrap type
// T : raw type
// Option<T>: wrapped T
type Option<T>; 

// 2. Wrap function
function some<T>(x: T): Option<T> {
  // ...
}

// 3. Run function
function run<T>(input: Option<T>, transform: (_: T)): Option<T>  {
  if (input === none) {
    return none;
  }
  return transform(input.value)
}
```

:::: tabs
::: tab WithoutOption
```ts
function getPetNickName(): stirng  | undefined {
  const user: User | undefined = getCurrentUser();
  if (user === undefined) {
    return undefined
  }

  const userPet: Pet | undefined = getPet(user);
  if (userPet === undefined) {
    return undefined
  }

  const userPetNickName: string | undefined = getNickName(user);
  if (userPet === undefined) {
    return undefined
  }

  return userPetNickName;
}
```
:::

::: tab WithOption
```ts
function getPetNickName(): stirng  | undefined {
  const user: Option<User>  = getCurrentUser();
  const userPet: Option<User>  = run(user, getPet);
  const userPetNickName: Option<string>  = run(user, getNickName);
  return getNickName;
}

// or 
function getPetNickName(): stirng  | undefined {
  return getCurrentUser().run(getPet).run(getNickName);
}
```
:::
::::

