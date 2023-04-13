# MongoDB Notes

## MongoDB vs SQL

https://www.mongodb.com/docs/manual/reference/sql-comparison/

https://www.mongodb.com/developer/products/mongodb/sql-to-aggregation-pipeline/


https://leanylabs.com/blog/mongoose-vs-mongodb/

## Migration

https://dba.stackexchange.com/questions/203926/how-to-find-all-invalid-document-based-on-jsonschema-validator/203950#203950

https://www.mongodb.com/community/forums/t/can-i-update-a-schema/154565

## Arggregate Pipelines

[Aggregation Pipeline Stages](https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/)


## Example data

[Sample Data](https://github.com/neelabalan/mongodb-sample-dataset)

## Best practices

### General Rules for MongoDB Schema Design:

Rule 1: Favor embedding unless there is a compelling reason not to

Rule 2: Needing to access an object on its own is a compelling reason not to embed it.

Rule 3: Avoid joins/lookups if possible, but don't be afraid if they can provide a better schema design.

Rule 4: Arrays should not grow without bound. If there are more than a couple of hundred documents on the "many" side, don't embed them; if there are more than a few thousand documents on the "many" side, don't use an array of ObjectID references. High-cardinality arrays are a compelling reason not to embed.

Rule 5: As always, with MongoDB, how you model your data depends – entirely – on your particular application's data access patterns. You want to structure your data to match the ways that your application queries and updates it.

Recap:
One-to-One - Prefer key value pairs within the document
One-to-Few - Prefer embedding
One-to-Many - Prefer embedding
One-to-Squillions - Prefer Referencing
Many-to-Many - Prefer Referencing


https://developer.mongodb.com/article/schema-design-anti-pattern-massive-arrays

## Performance 

use projection to select few fields

https://www.mongodb.com/docs/manual/indexes/

https://www.mongodb.com/docs/manual/core/query-plans/


## Arggregate Pipelines

https://studio3t.com/knowledge-base/articles/build-mongodb-aggregation-queries/
https://studio3t.com/knowledge-base/categories/import-export/

## Others


### Running on docker

https://hub.docker.com/_/mongo

```
docker run --name some-mongo -d -p 27017:27017 mongo:latest
```