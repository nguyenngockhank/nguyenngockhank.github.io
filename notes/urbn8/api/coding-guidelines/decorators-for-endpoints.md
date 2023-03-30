---
description: To make outputted API documentation look clean and professional
---

# Decorators for Endpoints

<figure><img src="../.gitbook/assets/redoc2.png" alt=""><figcaption></figcaption></figure>

> ## For Controller

## Required Decorator

### ApiTags

```typescript
@ApiTags("Public Collect Code")
```

### ApiOperation

```typescript
@ApiOperation({
  summary: "Request a collect code with X uon",
  description: `
  \nUser/Group requests a collect code with X uon real time via the Public UON API.
  \nA \`distribution\` is created from the BE with the following fields:

  \n  - \`id\`: distribution id.
  \n  - \`maxTotalUons\`: maximum number of uons allowed for this distribution.
  \n  - \`salesType (RETAIL | WHOLESALE)\`: indicate UONs distributed from this distribution is RETAIL or WHOLESALE (for reporting purpose).
  \n  - \`userId\`: the user/group that is authorized for this distribution. Must be the same user that owns the "api-key" sent together in request header. Uon Card will have "sponsor by" value of this user/group's name.`,
})
```

### ApiSecurity

```typescript
@ApiSecurity("api-key")
```

### **ApiProperty**

```typescript
@ApiProperty({
  type: Number,
  required: true,
  maximum: 2000,
  minimum: 1,
  example: 1,
  description:
    "The number of uons that the collect code to be generated would contain",
})
```

## Depends on API design (Stoplight), we need to add corresponding decorator

### ApiParam

```typescript
@ApiParam({
  name: "distributionId",
  example: 1550858321152427,
  description: "The `id` of the distribution",
  type: "integer",
  required: true,
  format: "int64",
})
```

### ApiQuery

```typescript
@ApiQuery({
  name: "offset",
  example: 1,
  description: "pagination",
  type: "number",
  required: true,
})
```

### ApiOkResponse

```typescript
class PublicCollectCodeCreateResponseData {
  @ApiProperty({
    example: "WT0005-AMSHWYQB",
    required: true,
    type: String,
  })
  collectCode!: string;

  @ApiProperty({
    example: "https://earthtoday.com/collect/john?code=WT0005-AMSHWYQB",
    required: true,
    type: String,
  })
  collectUrl!: string;
}

class PublicCollectCodeCreateResponseDto {
  @ApiProperty({
    required: true,
    type: PublicCollectCodeCreateResponseData,
    title: "",
  })
  data!: PublicCollectCodeCreateResponseData;
}

@ApiOkResponse({
  description: "The collect code has been successfully created.",
  type: PublicCollectCodeCreateResponseDto,
})
```

Notice that <mark style="color:red;">`title`</mark> property from <mark style="color:red;">`PublicCollectCodeCreateResponseDto`</mark> is empty string, this make <mark style="color:red;">Redoc</mark> render cleaner as image below

<figure><img src="../.gitbook/assets/redoc3.png" alt=""><figcaption></figcaption></figure>

### ApiNotFoundResponse

```typescript
export abstract class NotFoundErrorApiProperties {
  @ApiProperty({
    example: "ERROR",
  })
  status!: string;

  @ApiProperty({
    example: "NotFoundError",
  })
  type!: string;

  @ApiProperty({
    example: "The resource cannot be found in the system",
  })
  detail!: string;

  @ApiProperty({
    example: "53bffb246fb16f60613abf31a95102a3",
  })
  correlationId!: string;

  @ApiProperty({
    example: "<ResourceType>",
    type: "string",
    enum: NotFoundErrorResourceType,
  })
  resourceType!: NotFoundErrorResourceType;
}

@ApiNotFoundResponse({
  description:
    "The distribution with the provided id cannot be found in the system",
  type: NotFoundErrorApiProperties,
})
```

### ApiBadRequestResponse

```typescript
@ApiBadRequestResponse({
    description: "You have an error in your request",
    type: BadRequestErrorApiProperties,
  })
```

### ApiForbiddenResponse

```typescript
@ApiForbiddenResponse({
  description:
    "The maximum number of UONs authorized for this distribution has been exceeded",
  type: MaximumNumberOfUONsExceededErrorApiProperties,
})
```

### ApiUnauthorizedResponse

```typescript
@ApiUnauthorizedResponse({
  description: "The provided api-key is invalid",
  type: AuthorizationErrorApiProperties,
})
```

### ApiInternalServerErrorResponse

```typescript
@ApiInternalServerErrorResponse({
  description:
    "The server encountered an unexpected condition that prevented it from fulfilling the request",
  type: InternalServerErrorApiProperties,
})
```





> ## For API request body, response

Every request body, response **MUST** be defined as a class, and the name convention is `XxxPayloadDto` & `XxxResponseDto`

```typescript
class PublicCollectCodeCreateDataPayload {
  @ApiProperty({
    type: Number,
    required: true,
    maximum: 2000,
    minimum: 1,
    example: 1,
    description:
      "The number of uons that the collect code to be generated would contain",
  })
  @IsNumber()
  @Max(2000, {
    message: "Maximum uon amount is 2000",
  })
  @Min(1, {
    message: "Minimum uon amount is 1",
  })
  uonAmount!: number;
}
export class PublicCollectCodeCreatePayloadDto {
  @ValidateNested()
  @ApiProperty({ type: PublicCollectCodeCreateDataPayload, title: "" })
  @Type(() => PublicCollectCodeCreateDataPayload)
  @IsNotEmpty()
  data!: PublicCollectCodeCreateDataPayload;
}
export class PublicCollectCodeCreateResponseDto {
  ...
}
```

Most of the cases, `ApiProperty` decorator is enough.

Notice that the request body and response **ALWAYS** wrapped with <mark style="color:red;">`data`</mark> property

> ## For API error response

We can define error response schema as below

```typescript
@ApiUnauthorizedResponse({
    description: "The provided api-key is invalid",
    schema: {
      type: "object",
      properties: {
        status: {
          type: "string",
          example: "ERROR",
        },
        type: {
          type: "string",
          example: "AuthorizationError",
        },
        detail: {
          type: "string",
          example: "The provided api-key is invalid",
        },
        correlationId: {
          type: "string",
          example: "53bffb246fb16f60613abf31a95102a3",
        },
      },
    },
  })
```

But we **SHOULD** define an abstract class for reusable, this class usually exported from the same custom error file

```typescript
AuthorizationError.ts
export abstract class AuthorizationErrorApiProperties {
 ...
}

publicCollectCode.controller.ts
@ApiUnauthorizedResponse({
    description: "The provided api-key is invalid",
    type: AuthorizationErrorApiProperties,
 })
```

### Utility Decorator

#### PersonalRequestDecorator

Endpoints with format `/v*/users/me/...` we can apply PersonalRequestDecorator as shortcut to apply multiple decorators `at a same time`

```typescript
@Get("/users/me/cards/starred")
@PersonalRequestDecorator()
```

Body structure of PersonalRequestDecorator looks like:&#x20;

```typescript
export function PersonalRequestDecorator() {
  return applyDecorators(
    ApiBearerAuth(),
    ApiUnauthorizedResponse({
      description: "The bearer token is invalid",
      type: AuthenticationFailedErrorApiProperties,
    }),
  );
}
```

#### PublicApiRequestDecorator

Endpoints with format `/public/v*/users/me/...` we can apply PublicApiRequestDecorator as shortcut to apply multiple decorators `at a same time`

```typescript
@Post("public/v1/distributions/:distributionId/collect-codes")
@PublicApiRequestDecorator()
```

Body structure of PublicApiRequestDecorator looks like:&#x20;

```typescript
export function PublicApiRequestDecorator() {
  return applyDecorators(
    ApiSecurity("api-key"),
    ApiUnauthorizedResponse({
      description: "The provided api-key is invalid",
      type: AuthorizationErrorApiProperties,
    }),
    ApiInternalServerErrorResponse({
      description:
        "The server encountered an unexpected condition that prevented it from fulfilling the request",
      type: InternalServerErrorApiProperties,
    }),
  );
}

```
