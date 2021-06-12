# Microservices

Microservices are small, autonomous services that work together.

> *Gather together those things that change for same reason, and separate those things that change for different reasons.*

**Benefits**
- Technology heterogeneity
- Resilience
- Scaling
- Ease of Deployment
- Organizational Alignment
- Composability
- Optimizing for Replaceability

## Model a Service

::: tip Loose coupling
The whole point of a microservice is being able to make a change to one service and deploy it, without needing to change any other part of the system. 
:::

::: tip High cohesion
We want related behavior to sit together, and unrelated behavior to sit elsewhere. 
- If we want to change behavior, we want to be able to change it one place, and release that change ASAP.
- If we have to change that behavior in lots of different places, we'll have to release lots of different services to deliver that change. Making changes in lots of different places is slower, and deploing lots of services at once is risky.
:::

## Integration

### Shared Database

- The consumer is tied to a specific technology of the service. Good bye, loose coupling.
- If the service makes change that can update & deploy into many consumers. Bye, cohesion.

### Synchoronous vs Asynchoronous Communication

- **With sync communication**, a call is made to a remote server, which blocks until the operation completes.
- **With async communication**, the caller doesn't wait for the operation to complete before returning, and may not even care whether or not the operation completes at all.
    - Async communication can be very useful for long-running jobs

- These 2 different modes of communication can enable 2 different idoomatic styles of collaboration:
    - *resquest / response*
    - *event-based*


### Orchestration vs Choreography

- **With Orchestration**: we rely on a central brain to guide & drive the process. like the conductor in an orchestra.
- **With Choreography:** we inform each part of the system of its job, and let it work out the details, like dancers all finding their way and reacting to others around them in a ballet.

### Summary 

- Avoid database integration at all costs.
- Understand the trade-offs between REST & RPC, but strongly consider REST as a good starting point for request/response integration.
- Prefer Choreography over Orchestration
- Avoid breaking changes and the need to version by understanding Postel's Law and using tolerant readers.
- Think of user interfaces as compositional layers.

## Others

::: tip DRY
Don't violate DRY within a microservice, but relaxed about violating DRY accross all services. The evils of too much coupling between services are far worse than the problems caused by code duplication. 
:::

::: tip Postel's Law
Be conservative in what you do, be liberal in what you accept from others.
:::


::: tip Murphy's Law
Anything that can possibly go wrong, does.
:::

::: tip Moore's Law
Computer speed, memory, and density double every 18 months.
:::

::: tip Melvin Conway's Law
Any organization that designs a system will inevitably produce a design whose structure is a copy of organization's communication structure.
:::