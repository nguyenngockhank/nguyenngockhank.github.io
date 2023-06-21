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
- **Aggregation** -  is a way to group and summarize data. Elasticsearch provides a wide range of aggregation types, such as terms, range, date histogram, and geo distance
- **Shard** - A shard is a subset of an index that contains a portion of the index's data.
- **Cluster** — Group of nodes that have the same cluster.name attribute.
- Optimistic concurrency control


### How to Communicate
- Elastic search provides REST apis. E.g creating index, listing all indices, querying a document, etc
- These APIs support structured queries, full text queries, and complex queries that combine the two.

## How documents are ranked in Elasticsearch

### **Relevance Score**
The relevance score is a measure of how well a document matches the search query. Elasticsearch calculates the relevance score based on a number of factors, including:

- **Term frequency**: How often the search terms appear in the document.
- **Inverse document frequency**: How common the search terms are across all documents in the index.
- **Field length**: Longer fields are given less weight than shorter fields.
- **Term proximity**: How close the search terms are to each other in the document.

Elasticsearch uses a variant of the TF-IDF algorithm to calculate the relevance score. The relevance score is a decimal value between 0 and 1, with 1 being the most relevant.

### Sorting Criteria

In addition to the relevance score, Elasticsearch also uses sorting criteria to determine the order of the results in the response list. Sorting criteria can be specified when you perform a search query and can include fields such as date, price, or popularity.

By default, Elasticsearch sorts the results by relevance score in descending order. This means that the most relevant results appear at the top of the response list. However, you can specify additional sorting criteria to further refine the order of the results.

For example, if you are searching for products on an e-commerce website, you might want to sort the results by price in ascending order. This would ensure that the cheapest products appear at the top of the response list.

[READ MORE](https://www.elastic.co/blog/how-to-improve-elasticsearch-search-relevance-with-boolean-queries)

## Searching for Same Meaning Words

we can achieve this by using synonyms

### Define Synonyms
```js
const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' });

const indexName = 'my_index';
const settings = {
  analysis: {
    filter: {
      my_synonyms: {
        type: 'synonym',
        // here
        synonyms: [
          'car, automobile',
          'bike, bicycle',
          'bus, coach, minibus',
          'train, railway',
          'plane, airplane, aircraft'
        ]
      }
    },
    analyzer: {
      my_analyzer: {
        tokenizer: 'standard',
        filter: ['lowercase', 'my_synonyms']
      }
    }
  }
};

client.indices.create({
  index: indexName,
  body: {
    settings,
  }
}, (err, resp) => {
  if (err) console.trace(err.message);
  else console.log(`Index ${indexName} created.`);
});
```

### Search for Synonyms

```js
const indexName = 'my_index';
const searchParams = {
  index: indexName,
  body: {
    query: {
      match: {
        my_field: {
          query: 'car',
          analyzer: 'my_analyzer'
        }
      }
    }
  }
};

client.search(searchParams, (err, resp) => {
  if (err) console.trace(err.message);
  else console.log(resp.hits.hits);
});
```

In this example, we search for the word `car` using the `my_analyzer` analyzer. The analyzer will expand the search to include the synonyms `automobile`. The search results will include all documents that contain the word `car` or `automobile`.

## Searching for Mistyped Words

### 1. Use Fuzzy Query

Fuzzy Query feature allows you to search for words that are similar to the one you are looking for, even if they are not spelled correctly. For example, if you are searching for the word `apple` but someone has typed `aple` instead, the Fuzzy Query feature will still return the correct result.

```js
const { body } = await client.search({
  index: 'my_index',
  body: {
    query: {
      fuzzy: {
        'my_field': {
          value: 'aple',
          fuzziness: 'AUTO', // here
        }
      }
    }
  }
});

console.log(body.hits.hits);
```

### 2. Use Phonetic Analysis

This technique involves converting words into their phonetic representations and then searching for words that sound similar to the one you are looking for. This can be especially useful for words that are commonly misspelled, such as names or technical terms.

```js
const { body } = await client.search({
  index: 'my_index',
  body: {
    query: {
      match: {
        'my_field': {
          query: 'aple',
          analyzer: 'my_phonetic_analyzer'
        }
      }
    }
  }
});

console.log(body.hits.hits);
```

#### **To create `my_phonetic_analyzer`**

1. Install plugin 

```
sudo bin/elasticsearch-plugin install analysis-phonetic
```

2. Create a custom phonetic analyzer 

```js
client.indices.create({
  index: 'my_index',
  body: {
    settings: {
      analysis: {
        analyzer: {
          my_phonetic_analyzer: {
            tokenizer: 'standard',
            filter: ['lowercase', 'my_phonetic_filter']
          }
        },
        filter: {
          my_phonetic_filter: {
            type: 'phonetic',
            encoder: 'double_metaphone',
            replace: true
          }
        }
      }
    }
  }
}, (err, resp) => {
  if (err) console.trace(err.message);
});
```

3. use the custom analyzer

```js
client.index({
  index: 'my_index',
  body: {
    title: 'The Night Knight',
    content: 'A story about a knight who fights at night.'
  },
  analyzer: 'my_phonetic_analyzer'
}, (err, resp) => {
  if (err) console.trace(err.message);
});
```

### 3. Use N-Grams

N-Grams are a type of tokenization that breaks words down into smaller pieces and indexes them separately. This allows you to search for words even if they are misspelled or incomplete.

```js
const { body } = await client.search({
  index: 'my_index',
  body: {
    query: {
      match: {
        'my_field': {
          query: 'aple',
          analyzer: 'my_ngram_analyzer'
        }
      }
    }
  }
});

console.log(body.hits.hits);
```

**To create `my_ngram_analyzer`**

```js
const settings = {
  analysis: {
    analyzer: {
      my_ngram_analyzer: {
        tokenizer: 'my_ngram_tokenizer'
      }
    },
    tokenizer: {
      my_ngram_tokenizer: {
        type: 'ngram',
        min_gram: 3,
        max_gram: 5,
        token_chars: ['letter', 'digit']
      }
    }
  }
};

const mappings = {
  properties: {
    my_field: {
      type: 'text',
      analyzer: 'my_ngram_analyzer'
    }
  }
};

await client.indices.create({
  index: indexName,
  body: {
    settings,
    mappings,
  }
});
```

## Match query vs Term query

- The `match` query is a full-text search query
- The `term` query is a query that looks for exact matches of a term or phrase in the index.

```js
// match query 
const { body } = await client.search({
  index: 'my_index',
  body: {
    query: {
      match: { title: 'Nodejs elasticsearch' }
    }
  }
});
console.log(body.hits.hits);

// term query
const { body } = await client.search({
  index: 'my_index',
  body: {
    query: {
      term: { title: 'Nodejs elasticsearch' }
    }
  }
});
console.log(body.hits.hits);
```

## Use Aggregation

```js
await client.index({
  index: 'myindex',
  body: {
    name: 'John Doe',
    age: 30,
    city: 'New York'
  }
});

await client.index({
  index: 'myindex',
  body: {
    name: 'Jane Doe',
    age: 25,
    city: 'Los Angeles'
  }
});

const response = await client.search({
  index: 'myindex',
  body: {
    aggs: {
      avg_age: {
        avg: {
          field: 'age'
        }
      },
      city_count: {
        terms: {
          field: 'city'
        }
      }
    }
  }
});

console.log(response.body.aggregations);
```



### date_histogram Aggregation

allows you to group data based on a specific time interval

```js
const { body } = await client.search({
  index: 'my_index',
  body: {
    query: {
      match_all: {}
    },
    aggs: {
      sales_over_time: {
        date_histogram: {
          field: 'timestamp',
          interval: 'day'
        }
      }
    }
  }
});

const salesOverTime = body.aggregations.sales_over_time.buckets;
console.log(salesOverTime);
```


Others are `avg`, `sum`, `min`, `max`, `cardinality`, `terms`, `date_histogram`, and more.

## Sharding data

### 1. Create an Index
```js
await client.indices.create({
  index: 'my_index',
  body: {
    settings: {
      number_of_shards: 3,
      number_of_replicas: 1
    }
  }
}, { ignore: [400] }); // status ignore
```

### 2. Index Data

```js
await client.index({
  index: 'my_index',
  body: {
    title: 'My Document',
    content: 'This is my document content.'
  }, 
  routing: 'my_routing_value',
});
```

`routing` is a way to ensure that related documents are stored in the same shard.

### 3. Search Data


```js
const { body } = await client.search({
  index: 'my_index',
  body: {
    query: {
      match: {
        content: 'document'
      }
    }
  }
});

console.log(body.hits.hits);
```

## Other Samples

### Indexes

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

### Documents

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
- TF-IDF = Term Frequency–Inverse Document Frequency
- [Running the Elastic Stack on Docker](https://www.elastic.co/guide/en/elastic-stack-get-started/8.2/get-started-stack-docker.html)