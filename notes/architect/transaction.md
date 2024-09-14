# Transaction 

## Unit of work pattern

Unit of Work pattern is a design pattern that encapsulates multiple database operations into a single transaction. This ensures data consistency and atomicity, meaning that either all operations are committed or all are rolled back.
- Encapsulates multiple database operations into a single transaction.
- Ensures data consistency and atomicity by committing or rolling back all operations as a unit.
- Typically involves creating a UnitOfWork class that manages the transaction and provides repositories for accessing data.
- Can improve performance by reducing the number of round trips to the database.
- Well-suited for scenarios where multiple related operations need to be performed as a single unit.

:::: tabs

::: tab main.js
```ts
import { Connection } from 'typeorm';
import { UnitOfWork } from './unitOfWork';

// Assuming you have a Connection instance named 'connection'

async function main() {
  const unitOfWork = new UnitOfWork(connection);

  try {
    await unitOfWork.beginTransaction();

    const userRepository = await unitOfWork.getRepository(User);
    const productRepository = await unitOfWork.getRepository(Product);

    // Perform operations on repositories

    await unitOfWork.commit();
    console.log('Transaction committed successfully.');
  } catch (error) {
    await unitOfWork.rollback();
    console.error('Transaction rolled back due to error:', error);
  } finally {
    await unitOfWork.close();
  }
}

main();
```
:::

::: tab unitOfWork.js
```ts
import { Connection, Repository } from 'typeorm';

export class UnitOfWork {
  private readonly connection: Connection;
  private readonly repositories: Map<string, Repository<any>>;

  constructor(connection: Connection) {
    this.connection = connection;
    this.repositories = new Map();
  }

  async beginTransaction() {
    await this.connection.beginTransaction();
  }

  async commit() {
    await this.connection.commit();
  }

  async rollback() {
    await this.connection.rollback();
  }

  async   
 getRepository<TEntity>(entityClass: new () => TEntity): Promise<Repository<TEntity>> {
    const entityName = entityClass.name;
    if (!this.repositories.has(entityName)) {
      this.repositories.set(entityName, this.connection.getRepository(entityClass));
    }
    return this.repositories.get(entityName) as Repository<TEntity>;
  }

  async close() {
    await this.connection.close();
  }
}
```
:::

::::


## System Transactions vs. Business Transactions

### System Transactions
- **Scope**: Primarily focused on ensuring data integrity and consistency within a database system.
- **Purpose**: To guarantee that a series of database operations are executed as a single unit, either all succeeding or all failing.
- **Characteristics**:
    - **Atomicity**: All operations within a system transaction are treated as a single unit.
    - **Consistency**: The database must be in a consistent state before and after a system transaction.
    - **Isolation**: Transactions should not interfere with each other.
    - **Durability**: Once a transaction is committed, its changes are permanent.
- **Example**: A bank transfer involving debiting one account and crediting another.

### Business Transactions
- **Scope**: Aligned with the specific business processes and requirements of an application.
- **Purpose**: To represent a logical unit of work that reflects a real-world business activity.
- **Characteristics**:
    - **Semantic correctness**: A business transaction must adhere to the application's specific rules and constraints.
    - **Compensation**: In case of failure, a business transaction may require compensation mechanisms to undo its effects.
- **Example**: A customer placing an order, which involves multiple steps like selecting products, calculating the total, and processing payment.

### Comparision

Feature	| System Transactions	| Business Transactions
------- | ---------------- | ----------
Scope	|Single database operation or small group	| Series of related operations
Purpose |	Data integrity and consistency |	Business logic and requirements
Management	| DBMS |	Application layer
Examples	| SQL transactions	| Placing an order, payment

**Relationship Between the Two:**

- **System Transactions as Building Blocks**: Business transactions often rely on system transactions as building blocks to ensure data integrity and consistency within the database.
- **Business Logic Encapsulation**: Business transactions encapsulate the business logic and rules associated with a series of related operations, while system transactions focus on the technical aspects of data manipulation.


## Offline Transaction

Offline transaction in software architecture refers to a transaction that is processed **without** an immediate connection to a central server or database. This means that the transaction data is stored locally on the device or system where it originated until a connection is established and the data can be synchronized with the central system.

### key characteristics:

**Local storage**: Transaction data is stored locally, ensuring that it can be processed even in the absence of a network connection.
Synchronization: Once a connection is reestablished, the local data is synchronized with the central system to ensure consistency and accuracy.
**Conflict resolution**: In cases where multiple devices or systems have modified the same data offline, conflict resolution mechanisms are needed to determine the correct version and update the central system accordingly.
**Data integrity**: Offline transactions must maintain data integrity even when processed offline. This often involves using local databases or other mechanisms to ensure that data is consistent and valid.

### Use cases:

- **Network connectivity is unreliable**: In areas with poor network coverage or frequent outages, offline transactions can provide a seamless user experience by allowing users to continue using the application without interruption.
- **Real-time processing is not critical**: For applications where immediate processing is not essential, offline transactions can be used to batch data and process it in bulk when a connection is available.
- **Privacy and security are concerns**: Offline transactions can help protect sensitive data by minimizing the amount of time it spends in transit over the network.

Overall, offline transactions are a valuable technique for building robust and resilient software applications that can operate effectively in environments with varying network conditions.

## Distributed Transactions

2 phrase commit vs SAGA 

[Read here](./microservices.md#distributed-transactions)