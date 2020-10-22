# Dependency Inversion Principle

Take a look at the function `__construct()` in file `/application/modules/layout/libraries/CacheService/Services/ActiveCacheService.php`

```php
class ActiveCacheService implements CacheServiceInterface
{
    public $driver;

    public function __construct()
    {
        $this->driver = FileDriver::getInstance();
    }
    // ...
}
```

Property `driver` is assigned inside the constructor and no set method for `driver`. That means `driver` have no chance to change unless update the code - it's called *hard-coding* - an anti-pattern we should avoid

## Refactor


### Injection types
Let's update then `driver` can be injected from outside. There're 3 ways to do that and 2 of first methods are more popular.

1. Inject through Constructor 
```php
public function __construct(FileDriver $driver)
{
    $this->driver = $driver
}
```

2. Inject through setter
```php
function setDriver(FileDriver $driver) 
{
    $this->driver = $driver
}
```

3. Inject through method - you will implement method from an interface to archive this.

## Switch the storage

We still have a problem with this. What if someday, we want to switch to `Redis` to store the cache. 

Just follow me:


Firstly, I create an interface to replace the concrete class. Then, let `FileDriver` and `RedisDriver` implement `StorageDriver` interface: 

:::: tabs

::: tab StorageDriver.php
```php
interface StorageDriver 
{
    /**
     * @param string $key
     * @return mixed
     */
    function get($key);

    /**
     * @param string $key
     * @param mixed $key
     * @return void
     */
    function set($key, $value);

    // more methods
}
```
:::

::: tab FileDriver.php
```php
class FileDriver implements StorageDriver
{
    function get($key) {
        // method implementation
    }
    
    function set($key, $value) {
        // method implementation
    }
}
```
:::

::: tab RedisDriver.php
```php
class RedisDriver implements StorageDriver
{
    function get($key) {
        // method implementation
    }
    
    function set($key, $value) {
        // method implementation
    }
}
```
:::
::::

Update the class `ActiveCacheService` to use `StorageDriver` instead of `FileDriver`

```php
class ActiveCacheService implements CacheServiceInterface
{
    public $driver;

    public function __construct(StorageDriver $driver)
    {
        $this->driver = $driver;
    }
    // ...
}
```

Finally, `ActiveCacheService` no more cares about which driver is used. Let's jump into the **Dependency Inversion Principle** to understand more.


## DIP Definition

::: tip Dependency Inversion Principle Definition
1. High-level modules should not depend on low-level modules. Both should depend on the **abstraction**.
2. Abstractions should not depend on details. Details should depend on abstractions.
:::

Look back to the example above:
- `ActiveCacheService` is high-level module
- `FileStorage` & `RedisDriver` are low-level modules


### Before refactoring

`ActiveCacheService` uses the `FileStorage` directly. We realizes that's impossible to change to another driver when doing that. 

### After updating

After refactoring the code conforms the DIP

- `ActiveCacheService` uses the `StorageDriver` 
- `FileDriver` and `RedisDriver` implement `StorageDriver` 

> Both should depend on the **abstraction**


- `FileStorage` is the abstraction
- `FileDriver` and `RedisDriver` are the details

> Abstractions should not depend on details. Details should depend on abstractions.



## Conclusion

The general idea of DIP is as simple as it is important: High-level modules, which provide complex logic, should be easily reusable and unaffected by changes in low-level modules, which provide utility features. To achieve that, you need to introduce an abstraction that decouples the high-level and low-level modules from each other.