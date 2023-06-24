---
tags: [ "ResiliencePattern", "DistributedSystem"]
---

# Retry pattern

If your request failed — wait a bit and try again. That’s basically it, retrying makes sense, because network might degrade for a moment or GC hit that particular instance your request came to.

**Distinguish retryable errors from non-retryable.** It’s pointless to retry request, when user doesn’t have permissions or payload doesn’t structured properly. Contrary, **retrying request timeouts or 5xx is good**.

**Adopt error budgeting** — this technique, when you **stop making retries if rate of retryable errors exceeds threshold**, e.g. if 20% of interactions with service D results in error, stop retrying it and try to degrade gracefully. Amount of errors might be tracked with rolling window over N last seconds.

**Use retries with exponential backoff** - this technique helps to avoid short and intermittent failures by performing call retries a certain number of times, in case the service was not available only for a short time.

```js
function resolveIps() {
    return new Promise((resolve, reject) => {

        var operation = retry.operation({
            retries: 5, // maximum amount of times to retry 
            factor: 3, // exponential factor
            minTimeout: 1 * 1000, //  milliseconds before starting the first retry.
            maxTimeout: 60 * 1000, // milliseconds between two retries
        });

        operation.attempt(function(currentAttempt) {
            dns.resolve(address, function(err, ips) {

                // Returns false 
                // when no error value is given, or the maximum amount of retries has been reached.
                if (operation.retry(err)) {
                    return;
                }

                err ? reject(operation.mainError()) : resolve(ips);
            });
        });
    })
}
```

**Libs**:
- [node retry](https://www.npmjs.com/package/retry)