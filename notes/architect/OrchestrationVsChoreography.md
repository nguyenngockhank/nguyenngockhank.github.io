---
tags: ["Comparison", "DistributedSystem"]
---

# Orchestration Vs. Choreography

<TagLinks />

::: tip With Orchestration
we rely on a central brain to guide & drive the process. like the conductor in an orchestra.
:::

::: tip With Choreography
we inform each part of the system of its job, and let it work out the details, like dancers all finding their way and reacting to others around them in a ballet.
:::

![Orchestration vs Choreography](https://i.pinimg.com/564x/42/f6/2a/42f62ac11ccc93116996e4c0bf2cb642.jpg)


## Orchestration

![Orchestration-preview](./img/Orchestration.jpeg)

Service choreography is a global description of the participating services, which is defined by exchange of messages, rules of interaction and agreements between two or more endpoints. Choreography employs a decentralized approach for service composition.



## Choreography

![Choreography-preview](./img/Choreography.jpeg)

The choreography describes the interactions between multiple services, where as orchestration represents control from one party's perspective. This means that a choreography differs from an orchestration with respect to where the logic that controls the interactions between the services involved should reside.

## SAGA pattern

### **Choreography based SAGA**
![Choreography based SAGA](https://i.pinimg.com/originals/6e/6f/e1/6e6fe1bb0689a77f3d2d1e8e11b6f46e.webp)

### **Orchestration based SAGA**
![Orchestration based SAGA](https://i.pinimg.com/originals/23/d0/6d/23d06dfe44d7ec67419e388a34c7bf5f.png)
