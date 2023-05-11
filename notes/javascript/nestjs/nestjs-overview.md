# NestJs Notes

## Request lifecycle

![lifecycle](./lifecycle.png)

```ts
@UseGuards(AuthGuard)
@UseInterceptors(LoggingInterceptor)

app.useGlobalPipes(new ValidationPipe());
app.useGlobalFilters(new HttpExceptionFilter()); @Catch(HttpException)
```