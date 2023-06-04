# Capture data change

## Why?
- For event sourcing
- For communicating with other services


## How
- With triggers SQL
- With transaction logs
    - binlog in MYSQL
    - wal in Postgres

## Tools
- [Debezium](https://debezium.io/)
- [Kafka-connect](https://kafka.apache.org/documentation/#connect)