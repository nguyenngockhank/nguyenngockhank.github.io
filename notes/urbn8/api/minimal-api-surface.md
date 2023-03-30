# Minimal API Surface

Every API design **MUST** aim for a minimal API surface without sacrificing on product requirements. API design **SHOULD NOT** include unnecessary resources, relations, actions or data. API design **SHOULD NOT** add functionality until deemed necessary ([YAGNI principle](https://martinfowler.com/bliki/Yagni.html)).

API **SHOULD** not include overlapping and/or potentially conflicting data. For example, API that accept firstName, lastName **SHOULD NOT** also accept fullName which is constructible from firstName and lastName (besides, it's inflexible for cases like firstName lastName ordered differently based on locale).
