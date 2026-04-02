# Timezone Handling

## Backend

All timestamps in the system must be **stored in UTC (UTC+0)**.

We strongly recommend using the **ISO 8601 format** (e.g. 2026-04-02T10:30:00Z) for:
- Database storage
- API communication
- Logging

**Why UTC?**
- Eliminates ambiguity across different regions
- Avoids daylight saving issues
- Ensures consistency between services

## Frontend 

### Convert Time for User Display

Users may be located in different timezones. Therefore, all timestamps should be converted to the user's local timezone before displaying.

**Example**

A football match starts at: `2026-04-02T18:00:00Z` (UTC)

- User in Vietnam (UTC+7): sees `01:00 AM, 03/04/2026`
- User in USA (UTC-5): sees `01:00 PM, 02/04/2026`

::: tip Key Principle
Backend stores UTC → Frontend converts to user timezone
:::

## Fixed Time Windows (Business Logic)

Some features depend on **fixed daily (weekly, monthly, yearly, ...) cycles**, such as:
- Daily reward reset
- Usage limits reset
- Daily statistics
- Weekly leaderboard

These **must NOT depend on the user's timezone**. Instead, they should be calculated using a **fixed application timezone** (e.g. `Asia/Ho_Chi_Minh`, UTC+7).


::: tip Key Principle
Business logic uses app timezone → NOT user timezone

*A timezone could have multiple offset hours because of daylight saving.*
:::

## Snippets for RN

### Format date

```ts
import dayjs from 'dayjs'

export const FULL_DATE_FORMAT = 'DD.MM.YYYY'

export function formatShortDate(date?: Date | string | number): string {
  return dayjs(date).format('DD.MM')
}

export function formatFullDate(date?: Date | string | number): string {
  return dayjs(date).format(FULL_DATE_FORMAT)
}

export function formatDateTime(date?: Date | string | number): string {
  return dayjs(date).format('DD.MM.YYYY HH:mm:ss')
}

export function formatTime(date?: Date | string | number): string {
  return dayjs(date).format('HH:mm')
}

export function formatDbDate(date?: Date | string | number) {
  return dayjs(date).format('YYYY-MM-DD')
}
```

### Device timezone offset hours
```ts
export function getDeviceTimezoneOffsetHours() {
  return Number((-new Date().getTimezoneOffset() / 60).toFixed(2))
}
```

### App timezone offset hours
```ts
export const APP_TIMEZONE = 'Europe/Skopje'

export function getAppTimezoneOffsetHours() {
  return getTimezoneOffsetHours(APP_TIMEZONE)
}

function getTimezoneOffsetHours(tz: string) {
  const now = new Date()

  // Format time in app timezone
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })

  const parts = formatter.formatToParts(now)

  const get = (type: string) => parts.find(p => p.type === type)?.value

  // Create a simulated date based on that timezone (UTC).
  const asUTC = Date.UTC(
    Number(get('year')),
    Number(get('month')) - 1,
    Number(get('day')),
    Number(get('hour')),
    Number(get('minute')),
    Number(get('second')),
  )

  const offsetMinutes = (asUTC - now.getTime()) / 60000
  return Math.round(offsetMinutes) / 60
}
```
