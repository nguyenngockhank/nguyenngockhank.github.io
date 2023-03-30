## Custom Http Headers

Every HTTP Header should use `Hyphenated-Pascal-Case`. A custom HTTP Header **SHOULD NOT** start with `X-` ([RFC6648](https://tools.ietf.org/html/rfc6648)).

#### Example

```
ET-Payment-Header: 42
```


## Pagination

Pagination when implemented must be via query params offset and limit.

Example: `/cards?offset=100&limit=50`
