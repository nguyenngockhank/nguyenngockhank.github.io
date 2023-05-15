---
tags: ["RDMS", "HLD"]
---

# Database design 

<TagLinks />

## Database Normalization

Database Normalization is a design step which eliminates redundant data stored in form of large monolithic tables making the overall query execution simpler. 

The main purpose of this normalized data is logical storage of data using relationships between the tables. As originally proposed by **Edgar Codd**, there are six steps involved in the overall process from 1NF to 6NF as described below. Most modern databases follow a standard upto the 4NF step.

![db normalize](https://static.javatpoint.com/dbms/images/dbms-normalization.png)


##  Polymorphic DB Table Design

Look at [Example Person and Organization Example](https://dba.stackexchange.com/questions/179654/developing-a-database-for-a-funds-transfers-business-where-a-people-and-organi)

source: 
![Polymorphic DB Table Design](./img/Polymorphic-table.png)

Key takeaways:
- "As demonstrated, Person and Organization are depicted as mutually exclusive subtypes of Party."
- "The Party **supertype** holds a discriminator (i.e., PartyTypeCode) and all the properties (or attributes) that are common to its **subtypes**, which, in turn, have the properties that apply to each of them."

Result DB diagram. Pay attention to how the polymorphic relationships resolved using this design:
- Person is-a Party
- Organization is-a Party
- PartyTypeCode is the **discriminator**

See more: 
- [3 ways to implement class hierarchies in relational databases](https://stackoverflow.com/questions/9174200/how-to-create-multiple-one-to-ones/9178524#9178524)
- [Single Table Inheritance](https://www.martinfowler.com/eaaCatalog/singleTableInheritance.html)
- [Class Table Inheritance](https://www.martinfowler.com/eaaCatalog/classTableInheritance.html)
- [Concrete Table Inheritance](https://www.martinfowler.com/eaaCatalog/concreteTableInheritance.html)

## Metadata DB Table Design 

Wordpress database is a great example 
![Polymorphic DB Table Design](./img/wp-metadatatable.png)

[Another one](https://stackoverflow.com/questions/3241033/designing-database-to-hold-different-metadata-information)

## Thoughts on Foreign Keys 
At GitHub we do not use foreign keys, ever, anywhere.

- FKs are in your way to shard your database. Your app is accustomed to rely on FK to maintain integrity, instead of doing it on its own. It may even rely on FK to cascade deletes (shudder). When eventually you want to shard or extract data out, you need to change & test the app to an unknown extent.
- FKs are a performance impact. The fact they require indexes is likely fine, since those indexes are needed anyhow. But the lookup made for each `insert`/`delete` is an overhead.
- FKs don't work well with online schema migrations.



Read more: 
- [Should I define the relations between tables in the database or just in code?](https://softwareengineering.stackexchange.com/questions/334624/should-i-define-the-relations-between-tables-in-the-database-or-just-in-code)
- [Thoughts on Foreign Keys?](https://github.com/github/gh-ost/issues/331#issuecomment-266027731)
