# Verb and URI (REST)

## API Design Implementation Maturity

Every API design implementation using the HTTP protocol **MUST** use the appropriate **HTTP Request Method** ([Richardson Maturity Model Level 2](https://martinfowler.com/articles/richardsonMaturityModel.html#level2)) to implement an action afforded by a resource.

## URI as Resource

An URI **MUST** target at least one **identity of a** **resource**.

URI is meant to express a **identity of a resource**. The only exception is a **command** associated with a resource e.g. /images/migrate-check-transparency

## Resource

Resource SHOULD be plural noun e.g. users, groups, decks...

Kebab-case MUST be used (hyphen (`-`) separated words) e.g. `/system-users`.

An URI **MUST NOT** end with a trailing slash (`/`).

## `Verbs Examples`

* `GET`: for read data. For example:
  * `GET /v1/users`: response list of users
  * `GET /v1/users/:userId` : response one user.
* `POST`: for creating data, or triggering a command. For example:
  * `POST /v1/users`: create user.
  * `POST /v1/events/re-sync`: trigger command re-sync events.
* `PUT`: create/update data (related: [post-vs-put.md](./post-vs-put.md "mention")). For example:
  * `PUT /v1/users/:userId` : update user with given userId.
* `DELETE`: delete data. For example:
  * `DELETE /v1/users/:userId` : delete user.
* `PATCH`: partially update data. For example:
  * `PATCH /v1/users/:userId` where body only contains firstName to only update firstName of the user.

## Query Parameters

`camelCase` must be used for query parameters.



### URI Template Variables

URI Template Variable names **MUST** use `camelCase` and follow the [RFC6570](https://tools.ietf.org/html/rfc6570#section-2.3). That is, the variable names can consist only from `ALPHA / DIGIT / "_" / pct-encoded`.

> NOTE: Per RFC6570 Hyphen (`-`) is NOT legal URI Template variable name character.

#### Example

A well-formed URI Template Variable:

```
/system-orders/{orderId}/author
```
