---
tags: [ "Pattern"]
---

# Dependency Injection

<TagLinks />

## Dependency Inversion Principle
::: tip Dependency Inversion Principle
1. High-level modules should not depend on low-level modules. Both should depend on the abstraction.
2. Abstractions should not depend on details. Details should depend on abstractions.
:::


**What is an Abstraction?**

Abstraction in programming means to create an interface or an abstract class which is non-concrete. This means we cannot create an object of an interface or an abstract class.

Example: 

`BusinessLayerClass` (high-level module) should not depend on the concrete `DataAccessClass` (low-level module). Both classes should depend on abstractions, meaning both classes should depend on an interface or an abstract class.


## Dependency Injection

::: tip Dependency Injection (DI) 
is a design pattern used to implement IoC follows DIP. It allows the creation of dependent objects outside of a class and provides those objects to a class through different ways.
:::

The Dependency Injection pattern involves 3 types of classes.
- Client Class: The client class (dependent class) is a class which depends on the service class
- Service Class: The service class (dependency) is a class that provides service to the client class.
- Injector Class: The injector class injects the service class object into the client class.

![DI](https://www.tutorialsteacher.com/Content/images/ioc/DI.png)

## DI Container

::: tip IoC Container (a.k.a. DI Container) 
is a framework for implementing automatic dependency injection. It manages object creation and it's life-time, and also injects dependencies to the class.
:::

All the containers must provide easy support for the following DI lifecycle.

- **Register**: The container must know which dependency to instantiate when it encounters a particular type. This process is called registration. Basically, it must include some way to register type-mapping.
- **Resolve**: When using the IoC container, we don't need to create objects manually. The container does it for us. This is called resolution. The container must include some methods to resolve the specified type; the container creates an object of the specified type, injects the required dependencies if any and returns the object.
- **Release**: The container must manage the lifetime of the dependent objects. Most IoC containers include different lifetimemanagers to manage an object's lifecycle and dispose it.

See more: [The Register Resolve Release pattern](https://blog.ploeh.dk/2010/09/29/TheRegisterResolveReleasepattern/)

## Frameworks & Libs

Supported by many frameworks 
- [NestJs Provider](https://docs.nestjs.com/providers)
- [Laravel Container](https://laravel.com/docs/master/container)

Many libraries like:
- [php-di](https://php-di.org/)
- [InversifyJS](https://www.npmjs.com/package/inversify)