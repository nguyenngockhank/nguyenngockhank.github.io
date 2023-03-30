# JSON Fields Naming Conventions

* All JSON field names **MUST** follow the [Naming Conventions ](broken-reference)(`camelCase`, American English, etc.)
* Field names **MUST** be ASCII alpha num characters, underscore (`_`) or dollar sign (`$`)
* Boolean fields **MUST NOT** be of `null` value
* Empty arrays **SHOULD NOT**  be `null` (use `[]` instead)
* Array field names **SHOULD** be plural (e.g. `"orders": []`)
