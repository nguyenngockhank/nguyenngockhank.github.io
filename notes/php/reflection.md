# Reflection

## First of all 
```php
class Person {
    // ... 
}

class Student {
    function __construct(Person $p) {
        // ... implementation
    }
}
```
 
## Decode 

```php
$reflection = new ReflectionClass('Student'); 

$method = $reflection->getConstructor();

$params = $method->getParameters();

$type = $params[0]->getClass(); // will be `Person`
```

That why Laravel can based on `type hint` in constructor and do `Automatic Injection` 

## References 

[Reflection](https://www.php.net/manual/en/book.reflection.php)
