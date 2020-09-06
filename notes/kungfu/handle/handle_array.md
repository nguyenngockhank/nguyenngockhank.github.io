# Array Handling

## Chunk

```
INPUT: [1, 2, 3, 4, 5]
OUTPUT: [[1, 2], [3, 4], [5]]
```

:::: tabs

::: tab JS

Use [lodash](https://lodash.com/docs/4.17.15#chunk) to archive this

```js
let input = [1, 2, 3, 4, 5]
console.log(_.chunk(input, 2))
```
:::

::: tab Python

Use [pydash](https://pydash.readthedocs.io/en/latest/api.html) to archive this

```py
from pydash

inp = [1, 2, 3, 4, 5]
print(pydash.arrays.chunk(inp, 2)
```

:::

::: tab PHP
```php
$input = [1, 2, 3, 4, 5];
print_r(array_chunk($input, 2));
```
:::

::: tab Java

Usage

```java
final List<Integer> input = Arrays.asList(1, 2, 3, 4, 5);
System.out.println(Partition.ofSize(input, 2));
```

`Partition.java`

```java

import java.util.AbstractList;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

public final class Partition<T> extends AbstractList<List<T>> {

    private final List<T> list;
    private final int chunkSize;

    public Partition(List<T> list, int chunkSize) {
        this.list = new ArrayList<>(list);
        this.chunkSize = chunkSize;
    }

    public static <T> Partition<T> ofSize(List<T> list, int chunkSize) {
        return new Partition<>(list, chunkSize);
    }

    @Override
    public List<T> get(int index) {
        int start = index * chunkSize;
        int end = Math.min(start + chunkSize, list.size());

        if (start > end) {
            throw new IndexOutOfBoundsException("Index " + index + " is out of the list range <0," + (size() - 1) + ">");
        }

        return new ArrayList<>(list.subList(start, end));
    }

    @Override
    public int size() {
        return (int) Math.ceil((double) list.size() / (double) chunkSize);
    }
}
```

[another ways](https://e.printstacktrace.blog/divide-a-list-to-lists-of-n-size-in-Java-8/)
:::
::::

## Difference

```
INPUT: [2, 1], [2, 3]
OUTPUT: [1]
```

:::: tabs

::: tab JS
```js
const arr1 = [2, 1]
const arr2 = [2, 3]

console.log(_.difference(arr1, arr2)) // => [1]
```
:::

::: tab Python
```py
arr1 = [2, 1]
arr1 = [2, 3]

print(pydash.arrays.difference(inp, 2)
```
:::

::: tab PHP
```php
$arr1 = [2, 1];
$arr2 = [2, 3];

var_dump(array_diff($arr1, $arr2));
```
:::

::::



## References

Javascript 
- [lodash](https://lodash.com/docs/4.17.15)

Python
- [pydash](https://pydash.readthedocs.io/en/latest/api.html)