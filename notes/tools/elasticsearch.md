# Elastic Search

## General Features

The general features of Elasticsearch are as follows:

- Elasticsearch is scalable up to petabytes of structured and unstructured data.
- Elasticsearch can be used as a replacement of document stores like MongoDB and RavenDB.
- Elasticsearch uses denormalization to improve the search performance.
- Elasticsearch is one of the popular enterprise search engines, and is currently being used by many big organizations like Wikipedia, The Guardian, StackOverflow, GitHub etc.
- Elasticsearch is an open source and available under the Apache license version 2.0.

## Installation

### Through Docker

```
docker pull docker.elastic.co/elasticsearch/elasticsearch:6.8.6
```

```
docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:6.8.6
```


**[Kibnana**

[Link](https://www.elastic.co/guide/en/kibana/current/docker.html)

```
docker pull docker.elastic.co/kibana/kibana:7.6.0
```


## Snippets

### Index

:::: tabs

::: tab Create

```
PUT colleges
```

**Response**
```json
{
   "acknowledged" : true,
   "shards_acknowledged" : true,
   "index" : "colleges"
}
```
:::


::: tab Delete

```
DELETE /colleges
```

**Response**
```json
{
   "acknowledged" : true,
   "shards_acknowledged" : true,
   "index" : "colleges"
}
```
:::

::::




::: tab "Delete Data"
```
DELETE schools/_doc/4  
```


**Response**

```json
{
   "found":true, "_index":"schools",
    "_type":"school", 
    "_id":"4", 
    "_version":2,
   "_shards":{"total":2, "successful":1, "failed":0}
}
```
:::


### Queries

:::: tabs

::: tab Simple
```json
GET _search
{
  "query": {
    "match": {
      "FIELD": "TEXT"
    }
  }
}
```
:::

::: tab "with Option"
```json
GET _search
{
  "query": {
    "match": {
      "FIELD": "TEXT"
    }
  }
}
```
:::


::: tab "Full Options"
```json
{
  "query": {
    "bool": {
      "must": [
        {
          "match": {
            "title": "smith"
          }
        }
      ],
      "must_not": [
        {
          "match_phrase": {
            "title": "granny smith"
          }
        }
      ],
      "filter": [
        {
          "exists": {
            "field": "title"
          }
        }
      ]
    }
  },
  "aggs": {
    "my_agg": {
      "terms": {
        "field": "user",
        "size": 10
      }
    }
  },
  "highlight": {
    "pre_tags": [
      "<em>"
    ],
    "post_tags": [
      "</em>"
    ],
    "fields": {
      "body": {
        "number_of_fragments": 1,
        "fragment_size": 20
      },
      "title": {}
    }
  },
  "size": 20,
  "from": 100,
  "_source": [
    "title",
    "id"
  ],
  "sort": [
    {
      "_id": {
        "order": "desc"
      }
    }
  ]
}
```
:::



::::