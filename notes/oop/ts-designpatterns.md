---
tags: ["OOP", "Pattern"]
---

# Typescript Design patterns

[KISS](https://en.wikipedia.org/wiki/KISS_principle) first, patterns later, maybe much later

A pattern is a state of mind, mostly. Don't ever try to force your code into a specific pattern, rather notice which patterns start to crystallize out of your code and help them along a bit.

Deciding "ok, I'm going to write a program that does X using pattern Y" is a recipe for disaster. It might work for hello world class programs fit for demonstrating the code constructs for patterns, but not much more.

https://www.yegor256.com/2016/02/03/design-patterns-and-anti-patterns.html

## Creational

### Singleton

A singleton is an object that can only be **instantiated once**. It is useful fo implementing a global object that can be accessed from anywhere in the application.

```ts
class Settings {

  static instance: Settings;
  public readonly mode = 'dark';

  // prevent new with private constructor
  private constructor() {}

  static getInstance(): Settings {
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }
    return Settings.instance;
  }

}

const settings = Settings.getInstance();
const settings = new Settings() // throws error
```

::: warning Disavantages
[Paraphrased from Brian Button](https://codingexplained.com/coding/theory/the-singleton-pattern):

1. They are generally used as a global instance, why is that so bad? Because you hide the dependencies of your application in your code, instead of exposing them through the interfaces. Making something global to avoid passing it around is a code smell.

2. They violate the single responsibility principle: by virtue of the fact that they control their own creation and lifecycle.

3. They inherently cause code to be tightly coupled. This makes faking them out under test rather difficult in many cases.

4. They carry state around for the lifetime of the application. Another hit to testing since you can end up with a situation where tests need to be ordered which is a big no no for unit tests. Why? Because each unit test should be independent from the other.
::: 

### Prototype

Prototype allows objects to be **clones** of other objects, rather then extended via inheritance.

```ts
const zombie = {
  eatBrains() {
    return 'yum 🧠';
  }
}

const chad = Object.create(zombie, { name: { value: 'chad'} });

const babyChad = Object.create(chad, { baby: { value: true } });

// chad.__proto__;
Object.getPrototypeOf(chad);
```

### Factory

A factory is a method or function that **creates an object, or a set of objects, without exposing the creation logic** to the client.

```ts
class IOSButton { }

class AndroidButton { }

// Without Factory
const button1 = os === 'ios' ? new IOSButton() : new AndroidButton()
const button2 = os === 'ios' ? new IOSButton() : new AndroidButton()

class ButtonFactory {
  createButton(os: string): IOSButton | AndroidButton {
    if (os === 'ios') {
      return new IOSButton();
    } else {
      return new AndroidButton();
    }
  }
}

// With Factory
const factory = new ButtonFactory();
const btn1 = factory.createButton(os);
const btn2 = factory.createButton(os);
```

### Builder

The builder pattern is a creational design pattern that lets you **construct complex objects step by step**. It JavaScript, we can achieve this with method chaining.

```ts
class HotDog {
  constructor(
    public bread: string,
    public ketchup?: boolean,
    public mustard?: boolean,
    public kraut?: boolean
  ) {}

  addKetchup() {
    this.ketchup = true;
    return this;
  }
  addMustard() {
    this.mustard = true;
    return this;
  }
  addKraut() {
    this.kraut = true;
    return this;
  }
}

const myLunch = new HotDog('gluten free')
  .addKetchup()
  .addMustard()
  .addKraut();
```

## Structural

Structural patterns are primarily used to handle relationships between objects.

### Facade

A facade is a class that provides a **simplified API** for larger body of code. It is often to used to hide low-level details of a subsystem.

```ts
class PlumbingSystem {
  // low evel access to plubming system
  setPressure(v: number) {}
  turnOn() {}
  turnOff() {}
}

class ElectricalSystem {
  // low evel access to electrical system
  setVoltage(v: number) {}
  turnOn() {}
  turnOff() {}
}

class House {

  private plumbing = new PlumbingSystem();
  private electrical = new ElectricalSystem();

  public turnOnSystems() {
    this.electrical.setVoltage(120);
    this.electrical.turnOn();
    this.plumbing.setPressure(500);
    this.plumbing.turnOn();
  }

  public shutDown() {
    this.plumbing.turnOff();
    this.electrical.turnOff();
  }

}

const client = new House();
client.turnOnSystems();
client.shutDown();
```

### Proxy

The proxy pattern lets you **provide a substitute or placeholder** for another object to control access to it. For example, [VueJS uses a Proxy](https://vuejs.org/guide/extras/reactivity-in-depth.html#how-reactivity-works-in-vue) to intercept and modify data on objects.

```ts
const original = { name: 'jeff' };

const reactive = new Proxy(original, {
  get(target, key) {
    console.log('Tracking: ', key);
    return target[key];
  },
  set(target, key, value) {
    console.log('updating UI...');
    return Reflect.set(target, key, value);
  },
});

reactive.name; // 'Tracking: name'

reactive.name = 'bob'; // 'updating UI...'
```

## Behavioral

Behavioral patterns are used to **identify communication between objects**.

### Iterator

The iterator pattern is used to traverse a collection of elements. Most programming languages provide abstrations for iteration like the for loop. However, you can create your own iterators in JavaScript by using the *Symbol.iterator* property. 

```ts
function range(start: number, end: number, step=1) {
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (start < end) {
        start = start+step;
        return { value: start, done: false };
      }
      return { done: true, value: end }; 
    }
  }
}

for (const n of range(0, 100, 5)) {
  console.log(n);   
}
```


### Observer

The observer pattern is used to **notify** a set of interested parties when a state change occurs. The rxjs library is a popular implementation of this pattern.

```ts
import { Subject } from 'rxjs';

const news = new Subject();

const tv1 = news.subscribe(v => console.log(v + 'via Den TV'));
const tv2 = news.subscribe(v => console.log(v + 'via Batcave TV'));
const tv3 = news.subscribe(v => console.log(v + 'via Airport TV'));

news.next('Breaking news: ');
news.next('The war is over ');

tv1.unsubscribe();
```

### Mediator

The mediator is provids a **middle layer** between objects that communicate with each other. This pattern implemented frequently in JavaScript libaries via plugin systems (like Webpack) and middleware (like Express).

```ts
import express from 'express';
const app = express();

// Middleware logic
function mediator(req, res, next) {
  console.log('Request Type:', req.method)
  next()
}

app.use(mediator);

// Mediator runs before each route handler
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/about', (req, res) => {
  res.send('About');
});
```

### State

The state pattern is used to **encapsulate the state of an object** so that it can be changed and accessed independently of the object. In JavaScript, finite state machines are sometimes used to maintain a predictable flow of data in an application via libraries like XState.

```ts
interface State {
  think(): string;
}

class HappyState implements State {
  think() {
    return 'I am happy 🙂';
  }
}

class SadState implements State {
  think() {
    return 'I am sad 🙁';
  }
}


class Human {
  state: State;

  constructor() {
    this.state = new HappyState();
  }

  changeState(state) {
    this.state = state;
  }

  think() {
    return this.state.think();
  }
  
}

const human = new Human();
console.log(human.think());
human.changeState(new SadState());
console.log(human.think());
```

### Command 

Command is a behavioral design pattern that turns a **request into a stand-alone object** that contains all information about the request. 

- Use when parametrize objects with operations.
- Use when queue operations, schedule their execution, or execute them remotely.
- Use when implement reversible operations.
