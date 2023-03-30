# JSON structure

Applied for both request body and response body

Namespace the returned data with "data":

## Example 1: Ask for one user:

```
GET /v1/users/1
{
  "data": {
    "id": "511501255",
    "name": "Phil Sturgeon"
  },
  "meta: {
    "lastLoginAt": "2023-01-01T00:12:13Z"
  }
}
```

## Example 2: Ask for a list of users:

```
GET /v1/users
{
  "data": [
    {
      "name": "Hulk Hogan",
      "id": "100002"
    },
    {
      "name": "Mick Foley",
      "id": "100003"
    }
  ]
}
```

This leaves space for pagination or other meta data while still keep simplistic structure.

## Example 3: Nested resource "comments"

```
GET /posts/1
{
  "data": {
    "name": "Phil Sturgeon",
    "id": "511501255",
    "comments": {
      "data": [
        {
          "id": 123423,
          "text": "MongoDB is web-scale!"
        }
      ]
    }
  }
}
```

When comments are being returned we wrap that in a "data" item so that pagination or links can be added to that nested data too.
