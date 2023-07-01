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


### Errors and Exceptions:
Logging errors and exceptions is crucial for troubleshooting and debugging. It helps developers identify and fix issues quickly. When an error occurs, logging the relevant error message, stack trace, and any contextual information can provide valuable insights into the root cause of the problem.

```js
try {
    // Code that may throw an exception
} catch (Exception e) {
    logger.error("An error occurred: " + e.getMessage(), e);
}
```

    
### Performance Metrics / Availability

Logging performance metrics such as response times, database queries, or resource utilization can help identify bottlenecks and optimize the application's performance. This information can be valuable for capacity planning, load testing, and identifying areas for improvement.

- Slow queries
- Network error 
- At infra layer / firewall / gateway / ...

```java
long startTime = System.currentTimeMillis();
// Code to measure performance
long endTime = System.currentTimeMillis();
long executionTime = endTime - startTime;
logger.info("Execution time: " + executionTime + "ms");
```

### Configuration Changes

Logging configuration changes can help track modifications made to the application's settings or environment. 

This can be useful for troubleshooting issues related to configuration changes or **ensuring compliance** with security and regulatory requirements.


### User Actions

Logging user actions can be useful for auditing, security, and understanding user behavior. It can help track user interactions, identify patterns, and detect any suspicious or unauthorized activities.

```js
logger.info("User {username} logged in");
```

### Application Events
- Background threads / async job

Logging important application events can help track the flow of execution and provide a detailed history of the application's behavior. This includes logging when the application starts or stops, when specific actions are performed, or when significant milestones are reached.

### Third-Party Integrations

If your application integrates with external services or APIs, logging the interactions with these integrations can help diagnose issues and monitor their performance.


### Security Events/ Threats

Logging security-related events, such as failed login attempts, access control violations, or suspicious activities, can help detect and respond to potential security breaches

- suspicious activities
- unauthorized access to restricted processes or data
- invalid parameters or input
- warnings by the application’s security mechanisms.

### Trace Logging / Audit Trail
- correlation id

## What Not to Log
- large messages
- known errors, all errors  


### Personally Identifiable Information (PII)

PII includes sensitive data such as `names`, `emails`, `addresses`, `social security numbers`, `credit card details`, and other personally identifiable information. Logging this information can pose a significant risk to user privacy and may violate data protection laws.

```py
# Example: Logging PII should be avoided
logger.info(f"User {user_id} logged in with password {password}")
```

### Authentication Credentials
Logging usernames, passwords, or any other authentication credentials is highly discouraged. Storing this information in logs can lead to unauthorized access and compromise the security of user accounts.

```java
// Example: Avoid logging authentication credentials
logger.debug("User login attempt with username: " + username + " and password: " + password);
```

### Sensitive Business Data

Logging sensitive business data, such as trade secrets, financial information, or proprietary algorithms, can expose critical information to unauthorized individuals. It is crucial to protect this type of data from being logged.
```csharp
// Example: Avoid logging sensitive business data
logger.LogInformation("Customer XYZ purchased product ABC for $1000");
```

### Session Identifiers and Tokens

Session identifiers, access tokens, or any other session-related information should not be logged. These values can be used to impersonate users or gain unauthorized access to their accounts.
```javascript
// Example: Do not log session identifiers or tokens
console.log("Session ID: " + sessionId);
```

### Internal System Details

Logging internal system details, such as server configurations, database connection strings, or API keys, can expose critical infrastructure information to potential attackers. It is essential to keep this information confidential and not log it.

```ruby
# Example: Avoid logging internal system details
logger.debug("Database connection string: " + dbConnectionString);
```

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