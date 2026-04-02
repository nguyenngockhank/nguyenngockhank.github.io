# openapi-fetch

## Overview 

Use [openapi-fetch](https://openapi-ts.dev/openapi-fetch/) as the primary HTTP client instead of traditional libraries like Axios.


### Why Replace Axios?

While Axios is flexible and widely used, it has several limitations:

❌ Problems with Axios
- No built-in type inference from API schema
- Requires manual typing for:
    - Request payloads
    - Response data
- Easy to introduce mismatch between frontend and backend contracts
- Error handling is loosely typed

### Why use openapi-fetch?
- Achieve end-to-end type safety
- Eliminate manual API typing
- Reduce runtime errors
- Improve developer experience

## Setup 

### package.json

Packages & scripts

```json
{
    "name": "myapp",
    "version": "1.0.0",
    "scripts": {
        "gen:ts-openapi": "openapi-typescript https://api.dev.abc.com.vn/swagger-json -o ./src/types/schema.d.ts --empty-objects-unknown  --root-types  --root-types-no-schema-prefix --make-paths-enum"
    },
    "dependencies": {
        "openapi-fetch": "^0.15.0",
    }, 
    "devDependencies": {
        "openapi-typescript": "^7.10.1",
    }
}
```

- `gen:ts-openapi` will be fetch swagger json from backend and generate types for API
- `openapi-fetch` will be use to fetch API with type safety

### Create API client

`src/api/client.ts`

```ts
import createClient from 'openapi-fetch'
import type { paths } from '@/types/schema'

export const apiClient = createClient<paths>({ 
    baseUrl: 'https://api.dev.abc.com.vn', 
    querySerializer
})
```

### querySerializer

```ts
const querySerializer = (params: Record<string, any>) => {
    const search = new URLSearchParams()

    Object.entries(params).forEach(([key, value]) => {
    if (value === undefined) return

    switch (true) {
        case value === null:
            search.append(key, '')
            break
        case Array.isArray(value):
            value.forEach((item) => {
                search.append(`${key}`, String(item))
            })
            break
        case typeof value === 'object':
            search.append(key, JSON.stringify(value))
            break
        default:
            search.append(key, String(value))
            break
    }
    })

    return search.toString()
}
```

## Usage

### with react-query

```ts
import { useQuery } from '@tanstack/react-query'
import { apiClient } from '@/api/client'

export function useGetBrandStoriesQuery() {
  return useQuery({
    queryKey: ['brand-stories'],
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const { data: stories } = await apiClient.GET('/brands/stories')
      return stories
    },
  })
}
```

### Error handling 

Error only present when 4xx or 5xx

```ts
const { data, error } = await apiClient.GET('/brands/stories')

if (error) {
    // handle error 
    if (error.status === 404) {
        // Not found (typed)
    }
    if (error.status === 400) {
        // Validation error (typed schema)
        console.log(error.data)
    }
    throw new Error('Failed to fetch social posts')
}
```

Centralize error handling 

```ts
const makeApiError = (error: ApiError<any>) => {
  switch (error.status) {
    case 401:
      return {
        type: "UNAUTHORIZED",
        message: "Your session has expired. Please log in again.",
      }

    case 403:
      return {
        type: "FORBIDDEN",
        message: "You don't have permission to perform this action.",
      }

    case 404:
      return {
        type: "NOT_FOUND",
        message: "The requested resource could not be found.",
      }

    case 422:
      return {
        type: "VALIDATION_ERROR",
        message: "Invalid input data.",
        details: error.data, // typed validation errors
      }

    case 500:
      return {
        type: "SERVER_ERROR",
        message: "Something went wrong on our end. Please try again later.",
      }

    default:
      return {
        type: "UNKNOWN_ERROR",
        message: "An unexpected error occurred.",
      }
  }
}
```

Handle other cases: `no internet`, `timeout`, `DNS fail`, ...

```ts
try {
  const { data, error } = await client.GET("/users")
  if (error) {
    throw makeApiError(error)
  }
  return data
} catch (e) {
  // network-level error
  return {
    type: "NETWORK_ERROR",
    message: "Please check your connection",
  }
}
```


## openapi-react-query

A combination of openapi-fetch and react-query. Click [here](https://openapi-ts.dev/openapi-react-query/) for detail.

