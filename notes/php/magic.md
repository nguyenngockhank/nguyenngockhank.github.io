# Magic methods

Magic methods là 1 thứ rất hay ho và khá bảnh của PHP. 

Dưới đây là note của mình về cách làm 1 thứ cũng rất này nọ từ feature này. 

Đó là **Class static** (khái niệm mới chế)

## Singleton 

Đầu tiên ta xem định nghĩa qua class **`BaseLogger`** implement pattern singleton 

```php
class BaseLogger {
	public static function getInstance() {
		static $instance = null;
		if (null === $instance) {
			$instance = new static();
		}
		return $instance;
    }
    
    function debug($name = '') {
        echo 'Debug: Hello ' . $name;
    }

    function info($name  = '') {
        echo 'Info: Hello ' . $name;
    }

    /// ... more functions 
}
```

**Cách sử dụng**

```php
BaseLogger::getInstance()->debug('khanh'); 
BaseLogger::getInstance()->info(); 
```

Ừm cũng coi như là static hết rồi nhưng lúc nào cũng phải gọi **`::getInstance()`**, có cách nào bỏ luôn không ^^! 

> Yes, it's magic 

## `__callStatic`

Và đây là solution. 

```php
class Logger {
	public static function __callStatic($method, $arguments) {
		return call_user_func_array ( [ BaseLogger::getInstance(), $method ] , $arguments);
    }
}
```

Tạo một class khác và gọi tới `BaseLogger`.  

```php
Logger::debug('Khanh'); 
Logger::info('); 
```

**__callStatic**

::: tip
`__callStatic` is triggered when invoking inaccessible methods in a static context.
:::

Sub: `__callStatic` hàm này sẽ được thực thi khi những hàm static (::info, ::debug) được sử dụng không có implementation. 

**call_user_func_array**

::: tip
`call_user_func_array` - Call a callback with an array of parameters
:::

Sub: gọi 1 Callback với các tham số nằm gói gọn trong cái mảng =)) Nôm na là để truyền tham số động vào đúng cái method

## Note thêm

::: warning Caution
PHP reserves all function names starting with __ as magical. It is recommended that you do not use function names with __ in PHP unless you want some documented magic functionality.
:::


::: tip __invoke ([ $... ] ) : mixed
is called when a script tries to call an object as a function.
:::


::: tip static __set_state ( array $properties ) : object
is called for classes exported by `var_export()` since PHP 5.1.0.
:::


::: tip ___debugInfo ( void ) : array
is called by var_dump() when dumping an object to get the properties that should be shown. If the method isn't defined on an object, then all public, protected and private properties will be shown.
:::



::: tip __clone ( void ) : void
An object copy is created by using the clone keyword (which calls the object's __clone() method if possible). An object's __clone() method cannot be called directly.
:::

---

::: tip __sleep( void ) : array
serialize() checks if your class has a function with the magic name __sleep(). If so, that function is executed prior to any serialization.
:::

It can clean up the object and is supposed to return an array with the names of all variables of that object that should be serialized. If the method doesn't return anything then **NULL** is serialized and **E_NOTICE** is issued.

::: tip __wakeup ( void ) : void
Conversely, unserialize() checks for the presence of a function with the magic name __wakeup(). If present, this function can reconstruct any resources that the object may have.
:::

---