# Loop

## For in Range

:::: tabs

::: tab JS/TS
```js
for (let i = 0; i < 5; i++) {
    console.log(val)  // 0, 1, 2, 3, 4
}
```
:::

::: tab Python
```py
for x in range(0, 4):
  print(x) # 0, 1, 2, 3, 4
```
:::

::: tab PHP
```php
for ($i = 0; $i < 5; $i++) {
    // ...
}
```


:::

::: tab Java
```java
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}
```


:::

::: tab GO

```go
for i := 0; i < 5; i++ {
    fmt.Println(i)
}
```

:::
::::

## For through an Array

Access elements of an array

:::: tabs

::: tab JS/TS
```js
let arr = [10, 20, 30, 40]

for (let val of arr) {
    console.log(val)  // 10, 20, 30, 40
}
```
:::


::: tab Python
```py
arr = [10, 20, 30, 40]

for x in arr:
    print(x)  # 10, 20, 30, 40
```
:::

::: tab PHP
```php
$arr = [10, 20, 30, 40];

foreach($arr as $val) {
    echo $val; // 10, 20, 30, 40
}
```
:::

::: tab Java
```java
int[] numbers = {10, 20, 30, 40};

for (int i : numbers) {
  System.out.println(i);
}
```
:::

::: tab GO
```go
arr := []int{10, 20, 30, 40}

for k, val := range arr {
    fmt.Println(i, val)
}
```
:::

::::


## Loop Through a Dictionary

:::: tabs

::: tab JS/TS
Access properties of an object

```js
var person = {
    fname:"John", 
    lname:"Doe", 
    age:25
};

for (var x in person) {
    console.log(x); // fname, lname, age
    console.log(person[x]) // John, Doe, 25
}
```
:::


::: tab Python
```py
person = {
  "fname": "John",
  "lname": "Doe",
  "age": 25
}
for k, v in thisdict.person():
  print(k) # fname, lname, age
  print(v) # John, Doe, 25
```
:::

::: tab PHP
```php
$person = [
    "fname" => "John", 
    "lname" => "Doe", 
    "age" => 25
];

foreach($person as $key => $val) {
    echo $key; // fname, lname, age
    echo $val; // John, Doe, 25
}
```
:::

::: tab Java
```java
Map<String, Object> map = new HashMap<String, Object>();

map.put("fname", "John");
map.put("lname", "Doe");
map.put("age", 25);
    
for ( Map.Entry<String, Object> entry : map.entrySet() ) {
    String key = entry.getKey();
    Object value = entry.getValue();
    
    System.out.println(key + " " + value);
}

// another types
for ( String key : map.keySet() ) {
}

for ( Label value : map.values() ) {
}
```
:::

::: tab GO

```go
m := map[string]string{
    "fname": "John",
    "lname":  "Doe",
}
for k, v := range m {
    fmt.Println(k, v)
}
```

[See more](https://yourbasic.org/golang/for-loop-range-array-slice-map-channel/)
:::
::::