# Formats

## JSON Fields Naming Conventions

* All JSON field names **MUST** follow the [Naming Conventions ](broken-reference)(`camelCase`, American English, etc.)
* Field names **MUST** be ASCII alpha num characters, underscore (`_`) or dollar sign (`$`)
* Boolean fields **MUST NOT** be of `null` value
* Empty arrays **SHOULD NOT**  be `null` (use `[]` instead)
* Array field names **SHOULD** be plural (e.g. `"orders": []`)


## Date and Time Format

Date and Time **MUST** always conform to the [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) format e.g.: `2017-06-21T14:07:17Z` (date time) or `2017-06-21` (date), it **MUST** use the UTC (without time offsets).

## Duration Format

Duration format **MUST** conform to the [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) standard e.g.: `P3Y6M4DT12H30M5S` (three years, six months, four days, twelve hours, thirty minutes, and five seconds).

## Time Interval Format

Time Interval format **MUST** conform to the [ISO 8601](https://en.wikipedia.org/wiki/ISO\_8601) standard e.g.: `2007-03-01T13:00:00Z/2008-05-11T15:30:00Z`.

## Standard Time Stamps

Where applicable, a resource representation **SHOULD** contain the standard timestamps:

* `createdAt`
* `updatedAt`
* `finishedAt`

### Example

```javascript
{
    "createdAt": "2017-01-01T12:00:00Z",
    "updatedAt": "2017-01-01T13:00:00Z",

    ...
}
```

## Language Code Format

Language codes **MUST** conform to the [ISO 639](https://en.wikipedia.org/wiki/List\_of\_ISO\_639-1\_codes) e.g.: `en` for English.

## Country Code Format

Country codes **MUST** conform to the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO\_3166-1\_alpha-2) e.g.: `DE` for Germany.

## Currency Format

Currency codes **MUST** conform to the [ISO 4217](https://en.wikipedia.org/wiki/ISO\_4217) e.g.: `EUR` for Euro.
