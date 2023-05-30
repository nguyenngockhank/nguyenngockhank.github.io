---
tags: ["HLD"]
---

# Logging / Audit notes

::: tip
You never know what data you can collect today that will be useful to you tomorrow.
:::

<TagLinks />

## Logging vs Auditing

Logging typically means the recording of implementation level events that happen as the program is running (methods get called, objects are created, etc.). As such it focuses on things that interest programmers

Auditing is about recording domain-level events: a transaction is created, a user is performing an action, etc. In certain types of application (Banking) there is a legal obligation to record such events.

## Notes 
- put context into the log
- Don’t use `debug` level for system monitoring data
- Do NOT log sensitive information!

## Types 

- **Auditing**: this is sometimes a business requirement. The idea is to capture significant events that matter to the management or legal people. These are statements that describe usually what users of the system are doing (like who signed-in, who edited that, etc…).
- **Profiling**: as logs are timestamped (sometimes to the millisecond level), it can become a good tool to profile sections of a program, for instance by logging the start and end of an operation, you can either automatically (by parsing the log) or during troubleshooting infer some performance metrics without adding those metrics to the program itself.
- **Statistics**: if you log each time a certain event happens (like a certain kind of error or event) you can compute interesting statistics about the running program (or the user behaviors). It’s also possible to hook this to an alert system that can detect too many errors in a row.

## Log what 

### Requests
- time / start / stop
- correlation id
- user agent
- IP / GPS / ... 
- user id / request id / idempotent key
    
### Availability
- Slow queries
- Network error 
- At infra layer / firewall / gateway / ...

### Threats
- suspicious activities
- unauthorized access to restricted processes or data
- invalid parameters or input
- warnings by the application’s security mechanisms.

### Events / Application 
- Background threads / async job
- Exception Logging

### Trace Logging / Audit Trail
- correlation id

## What Not to Log
- Sensitive Information
    - Passwords
    - Credit card numbers
    - Social security numbers
    - email , ....
    - Be careful about GDPR  
- large messages
- known errors, all errors  

## Architecture

![arch](../kungfu/case-study/metrics/f6.png)

- metrics source - your app 
- collector - promtail
- DB - prometheus/S3
- query service - loki
- visual - grafana, 
- alert is alertmanager

![k8s monitoring](./img/Prometheus-Server_Chart.png)

## Refs

https://stackoverflow.com/questions/967970/what-information-should-i-be-logging-in-my-web-app

https://www.dataset.com/blog/the-10-commandments-of-logging/

https://www.freecodecamp.org/news/how-to-use-logs-effectively-in-your-code/

https://www.bloghoctap.com/security/authentication-authorization-va-accounting.html

[Four Minute Paper: Facebook’s time series database, Gorilla](https://jessicagreben.medium.com/four-minute-paper-facebooks-time-series-database-gorilla-800697717d72)


[Kubernetes Monitoring: Install Prometheus and Grafana using Helm](https://k21academy.com/docker-kubernetes/prometheus-grafana-monitoring/)