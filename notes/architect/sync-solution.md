# Sync solution


## ELT Architecture
ETL = Extract - Transform - Load

![elt](./img/etl-process-diagram.png)

## Extract

Extraction is the first phase. Data is collected from one or more data sources. It is then held in temporary storage, where the next two steps are executed.

During extraction, validation rules are applied. This tests whether data meets the requirements of its destination. Data that fails validation is rejected and doesn’t continue to the next step.


## Transform

In the transformation phase, data is processed to make its values and structure conform consistently with its intended use case. The goal of transformation is to make all data fit within a uniform schema before it moves on to the last step.

Typical transformations include aggregators, data masking, expression, joiner, filter, lookup, rank, router, union, XML, Normalizer, H2R, R2H and web service. This helps to normalize, standardize and filter data. It also makes the data fit for consumption for analytics, business functions and other downstream activities.

## Load

moves the transformed data into a permanent target system. his could be a target database, data warehouse, data store, data hub or data lake — on-premises or in the cloud. Once all the data has been loaded, the process is complete.


## ETL or ELT?

ETL stands for Extraction, Transformation, Load, whereas ELT is short for Extract, Load, Transform. An ELT method will export or copy data from the source locations, but it won’t load it into a staging area to await transformation. Instead, raw data will be loaded directly into the target data store and only then become transformed as per request.

https://www.informatica.com/hk/resources/articles/what-is-etl.html


## ETL Tools

There are different kinds of ETL tools that serve different purposes. Even though such tools have been present on the market for more than 30 years, the advancement of technology has rendered different types of ETL tools to develop.

You can find both genuine ETL retailers as well as see household software names offering ETL tools. IBM, Microsoft, and Oracle are some of the industry giants offering ETL tools as part of their repertoire.

Enterprise Software ETL (IBM InfoSphere DataStage, Informatica PowerCenter, Oracle Data Integrator, Microsoft SQL Server Integration Services, Ab Initio, SAP Data Services, SAS Data Manager)

Open-Source ETL (Hadoop, Pentaho Data Integration, Talend Open Studio)

Custom ETL (SQL, Python, Java, Spark & Hadoop)

ETL Cloud Services (Google Cloud Dataflow, AWS Data Pipeline, AWS EMR, Stitch, Azure Data Factory, AWS Glue, Segment)

--- 


CDC : Change Data Capture

ETL-based Data Transform (EDT)

- complete synchronization
- incremental synchronization