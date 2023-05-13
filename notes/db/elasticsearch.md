---
tags: ["NoSQL"]
---

# Elastic Search

[Welcome to Elastic Docs](https://www.elastic.co/guide/index.html)
[Api conventions](https://www.elastic.co/guide/en/elasticsearch/reference/8.7/api-conventions.html)

## Key terms
- **Documents** — Data is stored as JSON documents.
- **Indices** — Every document is indexed (inverted index) to perform fast searches.
- **Node** — Every instance of elastic search is a node. Nodes actually handle the client requests. There are different roles a node.
- **Cluster** — Group of nodes that have the same cluster.name attribute.
- Optimistic concurrency control

### How to Communicate
- Elastic search provides REST apis. E.g creating index, listing all indices, querying a document, etc
- These APIs support structured queries, full text queries, and complex queries that combine the two.

### Example

#### Indexes

[Index API](https://www.elastic.co/guide/en/elasticsearch/reference/8.7/docs-index_.html)

**Creates** a new index customer
```
PUT customer
```

**Lists** all indices 
```
GET /_cat/indices?v
```

**Deletes** the index customer, pretty option to pretty print output of the command
```
DELETE /customer?pretty
```

#### Documents

[Document API](https://www.elastic.co/guide/en/elasticsearch/reference/8.7/docs.html)

**Add** a new document to the index customer
```
PUT /customer/_doc/1?pretty
{
  "name": "John Doe"
}

// Response of the above command returns the index created
{
  "_index" : "customer",
  "_type" : "_doc",
  "_id" : "1",
  "_version" : 1,
  "result" : "created",
  "_shards" : {
    "total" : 2,
    "successful" : 1,
    "failed" : 0
  },
  "_seq_no" : 0,
  "_primary_term" : 1
}
```

**Updates** existing document in index customer with id->1

```
POST /customer/_update/1?pretty
{
  "doc": { "name": "Jane Doe" }
}
```

**Deletes** existing document in index customer  with id -> 1
```
DELETE /customer/_doc/1?pretty
```

## Other
[Running the Elastic Stack on Docker](https://www.elastic.co/guide/en/elastic-stack-get-started/8.2/get-started-stack-docker.html)