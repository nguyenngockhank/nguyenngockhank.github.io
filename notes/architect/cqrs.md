# CQRS

CQRS stands for Command Query Responsibility Segregation. It's an architectural pattern that separates the read and write operations for a data store.

## How it works:
- **Commands**: These are instructions to modify the system's state. They are typically asynchronous and idempotent.   
- **Queries**: These are used to retrieve information from the system without modifying its state. They are typically read-only operations. 

### Benefits of CQRS:
- **Improved performance**: By separating read and write operations, you can optimize each independently.   
- **Increased scalability**: You can scale read and write components differently based on their load.   
- **Enhanced security**: Isolating write operations can help protect sensitive data.
- **Better testability**: Separating concerns makes unit testing easier.

### Example

**Monolith System with multi storage**
- **Write model**: A transactional database (e.g., SQL Server) for handling commands like placing orders, updating product inventory.
- **Read model**: A read-optimized database (e.g., NoSQL like MongoDB) for handling queries like product catalog, order history.

**Microservices System**
CQRS is a natural fit for microservices architectures. It aligns perfectly with the principles of independent services, each responsible for a specific domain.
- **Write model**: 
    - Order Service: Handles placing orders, canceling orders, updating order status.
    - Inventory Service: Handles updating product inventory levels.
- **Read model**:
    - Customer Service: Uses events from Order and Inventory services to update its read model.

## Architecture

### With event sourcing
![Event sourcing & CQRS](https://i.pinimg.com/originals/13/41/f6/1341f69dcdcb1434395689f060c1e183.webp)

### On aws

![CQRS on aws](https://i.pinimg.com/originals/ac/00/16/ac0016768c2ca1c7d55ded1b764eaf21.png)

## Logical 

![logical cqrs](https://i.pinimg.com/originals/b5/1b/df/b51bdfe32e85f7c9793f57b54ebfa549.png)