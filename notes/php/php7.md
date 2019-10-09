# New Syntax in PHP7

[[toc]]

## Spaceship Operator

```php
//integer comparison
echo 1 <=> 1;      // 0
echo 1 <=> 2;      // -1

//float comparison
echo 1.5 <=> 1.5;  // 0
echo 0.5 <=> 1.5;  // 0

//string comparison
echo "a" <=> "a";  // 0
echo "a" <=> "b";  // -1
```

## Null Coalescing Operator

```php
// fetch the value of $_GET['user'] and returns 'not passed'
// if username is not passed
$username = $_GET['username'] ?? 'not passed';

// Chaining ?? operation
$username = $_GET['username'] ?? $_POST['username'] ?? 'not passed';
```


## Contant Arrays

```php
define('animals', [
    'dog',
    'cat',
    'bird'
]);
```


## Closure::call()
**Pre PHP7**

```php
class A {
    private $x = 1;
}

// Define a closure Pre PHP 7 code
$getValue = function() {
    return $this->x;
};

// Bind a clousure
$value = $getValue->bindTo(new A, 'A'); 

print($value());
```

**PHP 7+**

```php
class A {
    private $x = 1;
}

// PHP 7+ code, Define
$value = function() {
    return $this->x;
};

print($value->call(new A));
```

## use Statement

```php
// Before PHP 7
use com\tutorialspoint\ClassA;
use com\tutorialspoint\ClassB;
use com\tutorialspoint\ClassC as C;

// PHP 7+ code
use com\tutorialspoint\{ClassA, ClassB, ClassC as C};
```

## Scalar Type Declarations & Return Type Declarations

### Coercive mode
```php
// Coercive mode
function sum(int ...$ints) : int {
    return array_sum($ints);
}
print(sum(2, '3', 4.1)); // 9
```

### Strict Mode
```php
 // Strict mode
declare(strict_types=1);
function sum(int ...$ints) : int {
    return array_sum($ints);
}
print(sum(2, '3', 4.1));
```

```
Fatal error: Uncaught TypeError: Argument 2 passed to sum() must be of the type integer, string given, ...
```

## New methods

::: tip
**random_bytes()** generates an arbitrary-length string of cryptographic random bytes that are suitable for cryptographic use, such as when generating salts, keys or initialization vectors.
:::

```php
// string random_bytes ( int $length )
$bytes = random_bytes(5);
bin2hex($bytes); // 54cc305593
```

::: tip
**random_int()** generates cryptographic random integers that are suitable for use where unbiased results are critical.
:::

```php
// int random_int ( int $min , int $max )
random_int(-1000, 0) ; // -882
```

::: tip
**intdiv()**, which performs integer division of its operands and return the division as int.
:::

```php
intdiv(10,3);  // 3
```
