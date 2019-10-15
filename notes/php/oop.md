# OOP

## Autoload 

::: tip
The **`spl_autoload_register()`** function registers any number of autoloaders, enabling for classes and interfaces to be automatically loaded if they are currently not defined. By registering autoloaders, PHP is given a last chance to load the class or interface before it fails with an error.
:::

```php
spl_autoload_register(function ($class_name) {
    include $class_name . '.php';
});
```

### PSR-0 / PSR-4

> *PSR* = `PHP Standard Recommendation`

**PSR-0** lỗi thời rồi - hãy sử dụng [PSR-4](https://www.php-fig.org/psr/psr-4/)

### Autoload Composer

```php
"autoload": {
    "psr-4": {
        "Khank\\": "app/modules/"
    }
}
```

Đừng quên chạy lệnh 

```
composer dump-autoload 
```

**Optimization**
Chạy `composer dump-autoload` với option `-o` / `--optimize` cho production 

## Magic methods 

[See my note 📕 about this](./magic.md)


## self vs. static

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