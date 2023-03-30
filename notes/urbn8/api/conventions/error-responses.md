# Error Responses

Error responses should following the following format:

```
{
"status": "ERROR",
"type": "InternalServerError",
"detail": "UON system is down",
"correlationId": "53bffb246fb16f60613abf31a95102a3"
...
}
```

Where:

* `status`: "ERROR"
* `type`: the specific error class name. Always have post-fixed with "Error"
* `detail`: extra detail about the error
* `correlationId`: request's tracing id

Error response can have extra fields depending on the specific error to provide more programmatic detail to the client. For example, field  `maxTotalUons` in:

```
{
  "status": "ERROR",
  "type": "MaximumNumberOfUONsExceededError",
  "detail": "The maximum number of UONs authorized for this distribution has been exceeded",
  "correlationId": "53bffb246fb16f60613abf31a95102a3",
  "maxTotalUons": 10000
}
```



Public endpoints **MUST** use this convention by default.

Existing legacy endpoints **MUST** gradually refactor to this convention by applying `UseNewErrorFormatGuard` on the controller method:

```
@Post("/uon/claims")
  @HttpCode(HttpStatus.OK)
  @UseGuards(UseNewErrorFormatGuard) // MUST apply for legacy endpoint to apply new convention
  redeemClaimCode(
    @Req() request: AppRequest,
    @Body() codes: CollectCodeRedeemPayload,
  ) {
    return this.collectCodeRedeemInteractor.execute(request, codes);
  }

```
