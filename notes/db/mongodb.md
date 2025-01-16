---
tags: ["NoSQL"]
---

# MongoDB Notes

## MongoDB vs SQL

### Terms comparision

RDBMS     | MongoDB
--------- | -------
database  | database
table     | collection
row       | document / BSON document
column    | field
index     | index
table join | `$lookup`, embedded documents
primary key | primary key (automatically set to the `_id` field)
aggregation (e.g. group by) | aggregation pipeline
materialized views | [On-Demand Materialized Views](https://www.mongodb.com/docs/manual/core/materialized-views/)
transactions | [transactions](https://www.mongodb.com/docs/manual/core/transactions/)3

[Full here - sql-comparison](https://www.mongodb.com/docs/manual/reference/sql-comparison/)

Sql Comparison | MongoDB
------------ | -------
WHERE col IN()  | `$in()`
NOT IN()  | `$nin` 
`>`       | `$gt`
`>=`      | `$gte`
`<`       | `$lt`
`<=`      | `$lte`
`!=`      | `$ne` 


Sql Logical | MongoDB
------------ | -------
AND                 | `$and`
NOT                 | `$not`
OR                  | `$or`
NOT ... AND NOT ... | `$nor`

## Arggregate Pipelines

Sql Terms | MongoDB
--------- | -------
SELECT      | `$project`
WHERE       | `$match`
GROUP BY    | `$group`
HAVING      | `$match`
LIMIT       | `$limit`
OFFSET      | `$skip`
ORDER BY    | `$sort`
SUM()       | `$sum`
COUNT()     | `$sum` and `$sortByCount`
JOIN        | `$lookup`
SELECT INTO NEW_TABLE | `$out`
MERGE INTO TABLE | `$merge`
UNION ALL | `$unionWith`

[Full here - sql-to-aggregation-pipeline](https://www.mongodb.com/developer/products/mongodb/sql-to-aggregation-pipeline/)

[Aggregation Pipeline Stages](https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/)


### Example

For example, you can use the `$match` stage to filter documents, the `$group` stage to group documents by a specific field, and the `$project` stage to reshape the output.

```js

async function runAggregation() {
  const pipeline = [
    { $match: { status: 'active' } },
    { $group: { _id: '$category', total: { $sum: '$quantity' } } },
    { $project: { category: '$_id', total: 1, _id: 0 } }
  ];

  try {
    const collection = client.db().collection('products');
    const result = await collection.aggregate(pipeline).toArray();
    console.log(result);
  } catch (error) {
    console.error('Error executing aggregation', error);
  } finally {
    await client.close();
  }
}

runAggregation();
```

## Migration

https://dba.stackexchange.com/questions/203926/how-to-find-all-invalid-document-based-on-jsonschema-validator/203950#203950

https://www.mongodb.com/community/forums/t/can-i-update-a-schema/154565


## Indexes 

### Single Field Index

This is the most basic type of index in MongoDB. It indexes a single field in a collection. Single field indexes can significantly improve the performance of queries that involve filtering or sorting based on that field.

Here's an example of creating a single field index on the "name" field of a collection called "users":

```js
db.users.createIndex({ name: 1 });
```

### Compound Index

A compound index is created on multiple fields in a collection. It can improve the performance of queries that involve filtering or sorting based on multiple fields.

Here's an example of creating a compound index on the "name" and "age" fields of a collection called "users":

```js
db.users.createIndex({ name: 1, age: -1 });
```

### Text Index

Text indexes are used to perform full-text search on string content. They enable efficient searching of text fields for words or phrases. Text indexes are particularly useful when implementing search functionality in applications.

Here's an example of creating a text index on the "description" field of a collection called "products":

```js
db.products.createIndex({ description: "text" });
```

### Geospatial Index

Geospatial indexes are used to optimize queries that involve geospatial data. They enable efficient querying of data based on location and support various geospatial operations like finding nearby points or calculating distances.

Here's an example of creating a geospatial index on the "location" field of a collection called "places":

```js
db.places.createIndex({ location: "2dsphere" });
```

### Hashed Index

Hashed indexes are useful for sharding data across multiple servers in a MongoDB cluster. They distribute data evenly based on the hash value of a field. Hashed indexes are typically used for fields with high cardinality.
Here's an example of creating a hashed index on the "user_id" field of a collection called "orders":

```js
db.orders.createIndex({ user_id: "hashed" });
```

These are just a few examples of the types of indexes available in MongoDB. Each index type serves a specific purpose and can greatly enhance the performance of queries in different scenarios. It's important to choose the appropriate index type based on the nature of your data and the types of queries you need to optimize.

Remember, creating indexes comes with a trade-off in terms of increased storage space and write performance. Therefore, it's essential to carefully analyze your application's requirements and query patterns before deciding on the indexes to create.

## Example data

[Sample Data](https://github.com/neelabalan/mongodb-sample-dataset)

## Best practices

### General Rules for MongoDB Schema Design:

Rule 1: Favor embedding unless there is a compelling reason not to

Rule 2: Needing to access an object on its own is a compelling reason not to embed it.

Rule 3: Avoid joins/lookups if possible, but don't be afraid if they can provide a better schema design.

Rule 4: Arrays should not grow without bound. 
    - **If there are more than a couple of hundred documents on the "many" side, don't embed them**; 
    - **If there are more than a few thousand documents on the "many" side, don't use an array of ObjectID references**. 
    - High-cardinality arrays are a compelling reason not to embed.

Rule 5: As always, with MongoDB, how you model your data depends – entirely – on your particular application's data access patterns. You want to structure your data to match the ways that your application queries and updates it.

Recap:
One-to-One - Prefer key value pairs within the document
One-to-Few - Prefer embedding
One-to-Many - Prefer embedding
One-to-Squillions - Prefer Referencing
Many-to-Many - Prefer Referencing

[Full here](https://www.mongodb.com/developer/products/mongodb/mongodb-schema-design-best-practices/#additional-resources-)

https://developer.mongodb.com/article/schema-design-anti-pattern-massive-arrays

## Distributed Architecture

Prefer Consistency

### Replica set
![Replica set](https://www.mongodb.com/docs/manual/images/replica-set-read-write-operations-primary.bakedsvg.svg)

**Automatic Failover**: *The replica set cannot process write operations until the election completes successfully.*

### Sharding

![Sharded Cluster](https://www.mongodb.com/docs/manual/images/sharded-cluster-production-architecture.bakedsvg.svg)


### Tunable Consistency

Read concern  | Description 
------------- | -------
Local         | Returns data from the instance without guaranteeing the data has been written to a majority of the instances. This is equivalent to a `read uncommitted` isolation in a relational database
Available     | Same as local
Majority     | Guarantees that a majority of the cluster members acknowledged the request. A majority read returns only committed data.


Write concern  | Description 
------------- | -------
0             | Does not require an acknowledgment of the write.database
1             | Requires acknowledgment from the primary member only.
`<number>`    | Checks if the operation has replicated to the specified number of instances.
Majority      | Checks if the operations have propagated to the majority.


- [Docs - Read Concern](https://www.mongodb.com/docs/v6.0/reference/read-concern/)
- [Docs - Write Concern](https://www.mongodb.com/docs/v6.0/reference/write-concern/)


## Performance 

use projection to select few fields

https://www.mongodb.com/docs/manual/indexes/

https://www.mongodb.com/docs/manual/core/query-plans/


## Arggregate Pipelines

https://studio3t.com/knowledge-base/articles/build-mongodb-aggregation-queries/
https://studio3t.com/knowledge-base/categories/import-export/


### Tools
- [Compass](https://www.mongodb.com/products/tools/compass): The GUI for MongoDB 
- [studio3t](https://studio3t.com/download/)
- [robomongo](https://robomongo.org/)

## Others

- [cassandra-vs-mongodb](https://www.instaclustr.com/blog/cassandra-vs-mongodb/)
- [MongoDB Limits and Thresholds](https://www.mongodb.com/docs/manual/reference/limits/)
- [Mongoose vs. MongoDB](https://leanylabs.com/blog/mongoose-vs-mongodb/)


### Running on docker

https://hub.docker.com/_/mongo

```
docker run --name some-mongo -d -p 27017:27017 mongo:latest
```