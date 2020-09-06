# Number Handling

## Precision Format

:::: tabs

::: tab JS
```js
let num = 0.9
num.toFixed(5)
```
:::

::: tab TS
```ts
let num : number = 0.9
num.toFixed(5)
```
:::

::: tab Python
```py
num = 0.9
"%.9f" % num # way 1
"{:.9f}".format(num) # way 2
```
:::

::: tab PHP
```php
$num = 0.9;
number_format($num, 5, ',', '');
```
[More info about `number_format`](https://www.php.net/number_format)
:::

::: tab Java
```java
double num = 0.9f;
String.format("%.5f", b); // "0.90000"
```
[More info about `String.format`](https://dzone.com/articles/java-string-format-examples)
:::
::::

## Type casting

:::: tabs

::: tab JS/TS
```js
parseInt(12.4)
parseFloat("12.4")
```
:::

::: tab Python
```py
int(12.4)
float("12.4")
```
:::

::: tab PHP
```php
(int)12.4;
(float)"12.4";
```
:::

::: tab Java
```java
(int)12.4f;
Float.parseFloat("12.4");
```
:::
::::

## Random

Let's say we need a number in range -100 to 100

:::: tabs

::: tab JS
```js


```
:::

::: tab TS
```ts

```
:::

::: tab Python
```py


```
:::

::: tab PHP
```php

```
:::

::: tab Java
```java

```
:::
::::