# Dependency Injection Container


At the `Client` (*CacheService.php*) - the class uses the `ActiveCacheService` will update like this:

```php
new ActiveCacheService(FileDriver::getInstance());
```

If we have a DI-Container - it will be:

```php
$container->get(ActiveCacheService::class);
```
