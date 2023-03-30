# Public API Extending Rules

Public API URI must be versioned by prefix `/v*`(e.g. `/v1`).

Any modification to an existing public API **MUST** avoid breaking changes and **MUST** maintain **backward compatibility**.

_The fundamental principle is that you can’t break existing clients, because you don’t know what they implement, and you don’t control them. In doing so, you need to turn a backwards-incompatible change into a compatible one._

_–_ [_Mark Nottingham_](https://www.mnot.net/blog/2011/10/25/web\_api\_versioning\_smackdown)

In particular, any change to an public API **MUST** follow the following **Rules for Extending** (applied for everything and API expose to the public including URIs, query params, request body, response body, headers...):

1. **You MUST NOT take anything away** (related: [minimal-api-surface.md](minimal-api-surface.md "mention"), [robustness-principle.md](principles/contract/robustness-principle.md "mention"))
2. **You MUST NOT change processing rules**&#x20;
3. **You MUST NOT make optional things required**
4. **Anything you add MUST be optional** (related [robustness-principle.md](principles/contract/robustness-principle.md "mention"))

> The goal is to keep published API stable over the time. Clients already using those APIs must be able to continue using the APIs through new releases, updates, deployments without being forced to change anything from their side.
