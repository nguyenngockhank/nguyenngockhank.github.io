# Kungfu
Let's go!!!

## algorithm

### is-prime
:::: tabs
::: tab GO
```go
func isPrime(number int) bool {
	if (number <= 1) {
        return false;
	}
	for i := 2; i <= number - 1; i++ {
		if (number % i == 0) {
            return false;
        }
	}
    return true;
}

// usage
var result bool = isPrime(10); // false
```
:::
::: tab JS
```js
function isPrime(number) {
	if (number <= 1) {
        return false;
	}
    for (let i = 2; i <= number - 1; ++i)  {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

// usage
const result = isPrime(10); // false

```
:::
::: tab JAVA
```java
boolean isPrime(int number) {
    if (number <= 1) {
        return false;
    }
    for (int i = 2; i <= number - 1; ++i)  {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

// usage 
boolean result = isPrime(10); // false
```
:::
::: tab PHP
```php
<?php
function isPrime(int $number): bool
{
    if ($number <= 1) {
        return false;
    }
    for ($i = 2; $i <= $number - 1; ++$i)  {
        if ($number % $i == 0) {
            return false;
        }
    }
    return true;
}

// usage 
$result = isPrime(10); // false
```
:::
::: tab PY
```py
def is_prime(number):
    if number <= 1:
        return False
    for i in range(2, number - 1):
        if number % i == 0: 
            return False
    return True


# usage
result = is_prime(10)
```
:::
::: tab TS
```ts
function isPrime(number: number) : boolean {
	if (number <= 1) {
        return false;
	}
    for (let i = 2; i <= number - 1; ++i)  {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

// usage
const result : boolean = isPrime(10); // false
```
:::
::::

### strong-password
:::: tabs
::: tab GO
```go
import "strings"

// Return the minimum number of characters to make the password strong
func minimumNumber(password string) int {
    lower_case := "abcdefghijklmnopqrstuvwxyz"
    upper_case := "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    special_characters := "!@#$%^&*()-+"
    numbers := "0123456789"

    var hasLower, hasUpper, hasSpecial, hasNumber bool; // false in default

    var n = len(password)
    for i := 0; i < n; i++ {
		ch := password[i:i+1] // substring

        if (!hasLower && strings.Index(lower_case, ch) >= 0) {
            hasLower = true
		}
        if (!hasUpper && strings.Index(upper_case, ch) >= 0) {
            hasUpper = true
        }
        if (!hasSpecial && strings.Index(special_characters, ch) >= 0) {
            hasSpecial = true
        }
        if (!hasNumber && strings.Index(numbers, ch) >= 0) {
            hasNumber = true
        }
		if (hasLower && hasUpper && hasSpecial && hasNumber) {
			break;
		}
	}
    
	var err = 0
    if (!hasLower) {
        err++
    }
    if (!hasUpper) {
        err++
    }
    if (!hasSpecial) {
        err++
    }
    if (!hasNumber) {
        err++
	}
	
    // dont need to add more chars 
    if (n > 6) {
        return err
	}
    var numLackChar = 6 - n;
	// no ternary operator 
	if numLackChar >= err {
		return numLackChar
	}
    return  err
}


```
:::
::: tab JS
```js
function minimumNumber(password) {
    // Return the minimum number of characters to make the password strong
    let err = 0
  
    const lower_case = "abcdefghijklmnopqrstuvwxyz"
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const special_characters = "!@#$%^&*()-+"
    const numbers = "0123456789"

    let hasLower = false, hasUpper = false, hasSpecial = false, hasNumber = false;

    let n = password.length;
    for(let i = 0; i < n; ++i) {
        let ch = password.charAt(i);
        if (!hasLower && lower_case.indexOf(ch) >= 0) {
            hasLower = true
        }
        if (!hasUpper && upper_case.indexOf(ch) >= 0) {
            hasUpper = true
        }
        if (!hasSpecial && special_characters.indexOf(ch) >= 0) {
            hasSpecial = true
        }
        if (!hasNumber && numbers.indexOf(ch) >= 0) {
            hasNumber = true
        }

        if (hasLower && hasUpper && hasSpecial && hasNumber) break;
    }

    if (!hasLower) {
        ++err 
    }

    if (!hasUpper) {
        ++err 
    }

    if (!hasSpecial) {
        ++err 
    }

    if (!hasNumber) {
        ++err 
    }

    // dont need to add more chars 
    if (n > 6) {
        return err
    }

    let numLackChar = 6 - n;
    return numLackChar >= err ? numLackChar : err
}

```
:::
::::


*Thanks!*