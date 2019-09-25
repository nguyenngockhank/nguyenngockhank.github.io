# [PHP] self and static

Xem đoạn code: 

```php
class Person {
    static function echoClass() {
        echo self::class . ' ' . static::class;
    }
}

class Dev extends Person{ }

Person::echoClass(); // Person Person
Dev::echoClass(); // Person Dev
```

**TÚM CÁI VÁY**
- `self` trỏ đến class mà nó được viết.
- `static` trỏ đến class mà nó được gọi.