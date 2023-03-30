# API Classifications

> Data should be segmented into one of three types: Static, Dynamic, and Personal.
> API CALLS SHOULD INCLUDE ONLY ONE TYPE OF DATA.

* STATIC data is data that once created rarely or never changes or changes rarely (daily, every few hours). Example: product photos and description.
* DYNAMIC data is data that is known to change regularly - every few seconds or every minute but the value is global. Typically fetched from a database table. Example: Available inventory, shipping time updates, etc.
* PERSONAL data is data that may or may not change regularly but is specific and unique (and likely private) to a user. Example: shopping carts, user profile, order histories.

#### Route pattern naming rules:

* STATIC: `/v*/static/*`
* PERSONAL: `/v*/users/me/*`
* DYNAMIC: `/v*/*`

Implementation of each endpoint should be separate for easier handling of caching, validation...



## Caching per Data Type

* Static should be cached either indefinitely or with a very long (hours) TTL. Ideally, the content will only update with a PUSH from source systems telling the cache that new data is available.
* Dynamic data should at least be updated at a known frequency (e.g. 10s). Cache refresh can also be either persistent (update on notification) or transient (expires after a timer).
* Unique/Personal data can be cached at the client side. Exceptions to this rule should be for security or legal reasons, in which case data should be stored in whichever means is most appropriate. For instance, a user logs in and their profile loads. Cache in the browser or mobile app as long as possible to avoid future API calls.

For Static and Dynamic data, Edge Caching (e.g CDN) should be implemented transparently at the infrastructure level. Ideally neither client nor server is aware of the existence of the cache. This typically means using a CDN or API gateway/reverse-proxy service that encapsulates this behavior. We do this because multiple levels of cache can create all sorts of race conditions and invalidation bugs that are hard to debug or reproduce. By keeping things at the infrastructure level, it’s typically easy to tune the system. Only if this layer is not enough should additional cache layers be considered.
