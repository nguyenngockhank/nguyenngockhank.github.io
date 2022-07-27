# CouchDB 

CouchDB is a database that completely embraces the web. Store your data with JSON documents. Access your documents with your web browser, via HTTP. Query, combine, and transform your documents with JavaScript. 

## [Eventual Consistency](https://docs.couchdb.org/en/3.2.0/intro/consistency.html)

- **Consistency**: All database clients see the same data, even with concurrent updates.
- **Availability**: All database clients are able to access some version of the data.
- **Partition tolerance**: The database can be split over multiple servers.

![CouchDb consitency](./img/couch-consistency.png)

## Conflict resources
CouchDB uses an "optimistic concurrency" model. In the simplest terms, this just means that you send a document version along with your update, and CouchDB rejects the change if the current document version doesn't match what you've sent.

*[Question](https://stackoverflow.com/questions/299723/can-i-do-transactions-and-locks-in-couchdb#:~:text=CouchDB%20uses%20an%20%22optimistic%20concurrency,match%20what%20you've%20sent.)*



## Useful API

### Database
- `HEAD /{db}` - get info
- `PUT /{db}` - create database
- `DELETE /{db}` - delete database
- `GET /_all_dbs` - find databases
- `POST /{db}/index` - create index
- `PUT /{db}/_revs_limit` - Sets the max no of document revisions that will be tracked by CouchDB
- `GET /{db}/_changes` - polling changes

### Document 
- `HEAD /{db}/${docid}` - get info
- `GET /{db}/${docid}` - get document
- `PUT /{db}/${docid}` - create / update document
- `DELETE /{db}/${docid}` - delete document
- `POST /{db}/_bulk_docs` - upsert / delete documents
- `POST /{db}/_find` - Find documents using a declarative JSON querying syntax
- `GET /{db}/_all_docs` - executes the built-in **_all_docs** view

### Basic usage from axios
```ts
const authToken = Buffer.from(`${configs.couchUser}:${configs.couchPass}`).toString("base64");

const axiosClient = axios.create({
    baseURL: `${configs.couchHost}:${configs.couchPort}`,
    headers: {
    Authorization: `Basic ${authToken}`,
    },
});
```

Create database & create index & set revision
```ts
const databaseName = `test_db`;

await axiosClient.put(`/${databaseName}`, {});

await axiosClient.post(`/${databaseName}/_index`, {
  index: {
    fields: ["createdAt"],
  },
});

await axiosClient.put(`/${databaseName}/_revs_limit`, `20`);
```