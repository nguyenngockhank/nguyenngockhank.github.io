# Database types 

## Key value DB

![Key value DB](https://i.pinimg.com/564x/0e/91/47/0e91475093e1c6d76b4f05720f9143f2.jpg)

## Document oriented DB

A document-oriented database, also known as a document store, is a type of NoSQL database that stores data in documents. These documents are similar to JSON objects, containing key-value pairs.

**Key Characteristics:**
- **Flexible Schema**: Unlike relational databases, document databases don't enforce a strict schema. Documents can have different structures within the same collection.
- **Scalability**: They can handle large volumes of data and high traffic efficiently.   
- **Performance**: Often optimized for rapid read and write operations.   
- **JSON-like Format**: The data is stored in a human-readable format, making it easier to work with.   

**How it Works:**
- **Data Storage**: Documents are stored as individual units with key-value pairs.   
- **Indexing**: Indexes can be created on specific fields within documents for efficient querying.   
- **Querying**: Document databases typically use query languages like MongoDB's query language or specialized APIs to retrieve data.   


**Use Cases:**
- **Content Management Systems**: Storing articles, blog posts, and other content with rich structure.
- **E-commerce**: Managing product catalogs, customer data, and order information.   
- **Real-time Analytics**: Processing and analyzing large volumes of data quickly.
- **Mobile and Web Applications**: Storing user data, preferences, and session information.

**Examples**: MongoDb, Amazon DocumentDB, Couchbase, Firebase Firestore, ...

## Wide column DB

![Wide column database](https://i.pinimg.com/564x/3a/84/73/3a8473af1fc83c1d7ae0dc9754a2d5e9.jpg)

**Examples**: Big Table, HBase, Cassandra.

## Vector DB

A vector database is a specialized database designed to store and search high-dimensional numerical data, known as vectors. These vectors are often representations of complex data like text, images, or audio, transformed into mathematical formats using techniques like embedding.

![Vector database](https://i.pinimg.com/originals/6e/a8/56/6ea856a6ac1d0c13f52bb2cfef82bba7.jpg)

**How it works:**
- **Data Transformation**: Raw data (text, image, etc.) is converted into numerical vectors using machine learning models.   
- **Vector Storage**: These vectors are stored in the vector database.   
- **Similarity Search**: When a query vector is provided, the database efficiently finds the most similar vectors based on distance metrics (e.g., Euclidean, cosine). 

**Use Cases:**
- **Recommendation Systems**: Finding similar products, movies, or music based on user preferences.   
- **Image Search**: Searching for similar images based on visual content.   
- **Text Search**: Finding semantically similar text documents.
- **Fraud Detection**: Identifying anomalous patterns in financial data.   
- **Drug Discovery**: Finding similar molecules for potential drug candidates.

![Vector DB](https://i.pinimg.com/originals/85/90/ae/8590ae7837bbd715c14345c0b0b495e6.jpg)

## Graph DB

A graph database is a specialized database that uses graph structures to store and manage data. Unlike relational databases that organize data in tables, rows, and columns, graph databases represent data as **nodes** (entities) and **edges** (relationships) between them.   

![Graph DB](https://i.pinimg.com/564x/3b/65/d5/3b65d5ee4e5a139664ce61640be98798.jpg)

**How it Works:**
- **Data Modeling**: Data is modeled as a graph, where entities are nodes and connections between them are edges.   
- **Data Storage**: The database stores nodes, edges, and their properties.   
- **Querying**: Queries are performed by traversing the graph structure to find related information.

**Use Cases:**
- **Social Networks**: Analyzing friend connections, recommendations, and influence.   
- **Fraud Detection**: Identifying patterns of fraudulent activities.   
- **Recommendation Systems**: Suggesting products or content based on user preferences and behavior.   
- **Knowledge Graphs**: Representing complex information and relationships.   
- **Supply Chain Managemen**: Tracking the flow of goods and materials.


## Object oriented DB

In an object-oriented database, data is organized and stored as objects, which are self-contained units that contain both data and the operations or methods that can be performed on that data.

![Object-oriented database](https://i.pinimg.com/originals/5c/f7/06/5cf706d3e999f785eab848e4dd687f4e.jpg)

## Time Series Database (TSDB)

A Time Series Database (TSDB) is specifically designed to handle and store data points that are collected at specific points in time. Think of it as a database optimized for time-stamped data.

**Key Characteristics:**
- **Time-stamped Data**: Every data point is associated with a timestamp.   
- **High Ingestion Rate**: TSDBs can handle massive amounts of data points quickly.   
- **Efficient Querying**: They are optimized for queries that involve time ranges, aggregations, and filtering.   
- **Data Retention**: Often configured to automatically delete old data to manage storage.

**How it Works:**
TSDBs typically use a combination of techniques to efficiently store and query time-series data:

- **Compression:** To reduce storage space.
- **Indexing**: To quickly locate data points based on time ranges.   
- **Partitioning**: To distribute data across multiple storage nodes for scalability.   
- **Aggregation**: To summarize data for faster query performance.   


**Common Use Cases**:
- **IoT Sensor Data**: Collecting and storing data from devices like temperature sensors, humidity sensors, etc.   
- **Financial Data**: Tracking stock prices, trading volumes, and market data.   
- **IT Monitoring**: Storing metrics like CPU usage, memory utilization, network traffic.   
- **Web Analytics**: Analyzing website traffic, user behavior, and performance metrics.

## New SQL

NewSQL databases are a relatively new class of database management systems that aim to bridge the gap between traditional relational databases (RDBMS) and NoSQL databases.

**Key Characteristics:**
- **ACID Compliance**: They maintain the ACID properties (Atomicity, Consistency, Isolation, Durability) of traditional RDBMS, ensuring data integrity and reliability.   
- **Scalability**: They offer the horizontal scalability of NoSQL databases, allowing them to handle increasing workloads and data volumes.   
- **High Performance**: NewSQL databases strive to achieve high performance, comparable to NoSQL systems, while maintaining ACID compliance.   
- **SQL Support**: They typically support SQL for querying data, making them familiar to developers.


**How It Works:**
NewSQL databases achieve these characteristics through a combination of techniques:

- **Distributed Architecture**: Data is distributed across multiple nodes for scalability and fault tolerance.
- **Sharding**: Data is partitioned based on specific criteria to improve performance and scalability.
- **In-Memory Computing**: Some NewSQL databases utilize in-memory data storage for faster processing.   
- **Hybrid Storage**: A combination of disk-based and in-memory storage to balance performance and cost.

**Use Cases:**
NewSQL databases are suitable for a wide range of applications, including:

- **Online Transaction Processing (OLTP)**: Handling high volumes of concurrent transactions.   
- **Online Analytical Processing (OLAP)**: Supporting complex analytical queries on large datasets.
- **Real-time Analytics**: Processing and analyzing data in real-time.   
- **Internet of Things (IoT)**: Handling massive amounts of time-series data.

## Spatial DB

A spatial database is a specialized database designed to store, manage, and analyze geographic data. This type of data represents objects defined in a geometric space, such as points, lines, and polygons.

**Key Characteristics:**
- **Spatial Data Types**: Supports specific data types to represent geographic features like points, lines, polygons, and multi-polygons.   
- **Spatial Indexes**: Uses specialized indexes to efficiently query and retrieve spatial data based on location and proximity.   
- **Spatial Functions**: Offers functions for performing spatial operations like distance calculations, intersections, and overlays.   
- **Coordinate Systems**: Handles different coordinate systems (e.g., latitude/longitude, UTM) to accurately represent geographic data.

**Use Cases:**
- **Geographic Information Systems (GIS)**: Storing and analyzing geographic data for mapping, analysis, and visualization.   
- **Location-Based Services (LBS)**: Providing location-aware services like navigation, proximity search, and geofencing.
- **Urban Planning**: Managing and analyzing urban data for planning and development.
- **Environmental Science**: Storing and analyzing environmental data for monitoring and modeling.

**Examples**: PostgreSQL/PostGIS, Oracle Spatial, MongoDB GeoJSON, Redis geospatial ... 

## Comparision

### Sql vs Nosql

![Sql vs Nosql](https://i.pinimg.com/564x/b2/eb/2b/b2eb2b5cd084cd23398bbd4b4030e798.jpg)

### Row vs Column based

![Row vs Column based](https://i.pinimg.com/originals/41/81/a4/4181a4696021e0f798b9c18a4f37a450.jpg)

### Document vs Key value
![Document db vs key value store](https://i.pinimg.com/564x/93/05/7a/93057a38e74e418e3881002b8c8ff36d.jpg)

### Centralized  vs Decentralized 
![Centralized vs Decentralized](https://i.pinimg.com/736x/c2/ff/2f/c2ff2f8726df384a99ed53089869c507.jpg)


### OLTP and OLAP systems

Features | OLTP System <br /> (Operational Data) | OLAP System <br /> (Data Warehouse)
---------| ------------ | -----------
Data source | From Traditional or original source | From diverse databases
Aim of data  | Organizational basic activities running | For planning and problem solving known Business support system
Data type | images of ongoing business transaction | Business activities from various sections
Insertion and updating | Insert and update are by end users which is fast | Periodic refreshing inform of Batch jobs
Queries | Simple queries that return small records | Complex aggregate queries
Efficiency | Very high speed to answer queries | Takes some time depending on the requirement but can be improved using index
Space hold | holds very small history | Comprehensive history due to aggregation
Database design | Greatly normalized due to many tables involvement | Highly denormalised with few tables using Star and snowflake schema.


### Object vs file vs block storage

![Object vs file vs block storage](https://i.pinimg.com/originals/dd/4d/2b/dd4d2b23821f8b71545d88de5424e361.jpg)

