# SQL vs. NoSQL

![SQL vs NoSQL](@/images/compare/sql-nosql.png)

<!-- ![SQL vs NoSQL](@/images/compare/sql-nosql-compare.png) -->

|  | NoSQL | SQL
| -- | -------|--------|
| **Model** | Non-relational | Relational |
|    | Stores data in JSON documents. key/value pairs, wide column stores, or graphs | Stores data in a table |
| **Data** | Offers flexibility as not every record needs to store the same properties  | Great for solutions where every record has the same properties |
| | New properties can be added on the fly | Adding a new property may require altering schemas or backfilling data |
| | Relationships are often captured by denormalizing data and presenting all data for an object in a single record | Relationships are often captured in normalized model using joins to resolve references across tables |
| | Good for semi-structured, complex or nested data | Good for structured data |
| **Schema** | Dynamic or flexible schemas | Strict schema |
| |  Database is schema-agnostic and the schema is dictated by the application. This allows for agility and highly itertive development | Schema must be maintained and kept in sync between application and database |
| **Transactions** |  ACID transaction support varies per solution | Supports ACID transactions |
| **Consistency & Availability** |  Eventual to strong consistency supported, depending on solution  | Strong consistency enforced |
| | Consistency, availability, and performance can be traded to meet the needs of the application (CAP theorem) |  Consistency is prioritized over availability and performance |
| **Performance** |  Performance can be maximized by reducing consistency, if needed | Insert and update performance is dependent upon how fast a write is committed, as strong consistency is enforced. Performance can be maximized by using scaling up available resources and using in-memory structures. |
| | All information about an entity is typically in a single record, so an update can happen in one operation | Information about an entity may be spread across many tables or rows, requiring many joins to complete an update or a query | 
| **Scale** | Scaling is typically achieved horizontally with data partitioned to span servers | Scaling is typically achieved vertically with more server resources |


- **SQL**: Structured Query Language
- **UnQL**: Unstructured Query Language
- **ACID**: Atomicity, Consistency, Isolation and Durability
- **CAP**: Consistency, Availability and Partition tolerance 