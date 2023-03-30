# Overview

## Abstract

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC2119](https://www.ietf.org/rfc/rfc2119).

## Design API first before Code

Everyone **MUST** design the API first before commit yourselves to coding.

A development of an API **MUST** always start with API design without any upfront coding activities.

This applies for both new API and adjusting existing ones.

Junior developers **SHOULD** create a first proposal and discuss with the team.

Senior developers **MAY** create a first proposal and discuss with the team but is **RECOMMENDED** when there is uncertainty, and **REQUIRED** to do so if collaborator(s) requires the API contract upfront (for example, front-end coding happening in parallel with the API development).

**API design** (e.g., description, schema) **is the master of truth, not the API implementation.**

## Minimal API Surface

Every API design **MUST** aim for a minimal API surface without sacrificing on product requirements. API design **SHOULD NOT** include unnecessary resources, relations, actions or data. API design **SHOULD NOT** add functionality until deemed necessary ([YAGNI principle](https://martinfowler.com/bliki/Yagni.html)).

API **SHOULD** not include overlapping and/or potentially conflicting data. For example, API that accept firstName, lastName **SHOULD NOT** also accept fullName which is constructible from firstName and lastName (besides, it's inflexible for cases like firstName lastName ordered differently based on locale).

## API Classifications

> Data should be segmented into one of three types: Static, Dynamic, and Personal.
> API CALLS SHOULD INCLUDE ONLY ONE TYPE OF DATA.

* STATIC data is data that once created rarely or never changes or changes rarely (daily, every few hours). Example: product photos and description.
* DYNAMIC data is data that is known to change regularly - every few seconds or every minute but the value is global. Typically fetched from a database table. Example: Available inventory, shipping time updates, etc.
* PERSONAL data is data that may or may not change regularly but is specific and unique (and likely private) to a user. Example: shopping carts, user profile, order histories.

## Robustness Principle

Every API implementation and API consumer **MUST** follow Postel's law:

> _Be conservative in what you send, be liberal in what you accept._
>
> _–_ [_John Postel_](https://en.wikipedia.org/wiki/Robustness\_principle)

That is, send the necessary minimum and be tolerant as possible while consuming another service ([tolerant reader](https://martinfowler.com/bliki/TolerantReader.html)).



### But be just reasonably tolerant

> With a sufficient number of users of an API, it does not matter what you promise in the contract: all observable behaviours of your system will be depended on by somebody
>
> - [Hyrum's Law](https://www.hyrumslaw.com/)


