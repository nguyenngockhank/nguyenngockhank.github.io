# Go lang

## The good
- Performant
- Easy concurrent programming with goroutines and channels
- Interfaces
- `defer` statement, to avoid forgetting to clean up
- Standardized test framework

## The bad things

- no exceptions, no asserts
- 1970s style error handling
- no generics
- OOP is cruft

### nil 

nil interfaces are not entirely nil

---

```go
func (u *URL) Parse(ref string) (*URL, error) {
    refurl, err := Parse(ref)
    if err != nil {
        return nil, err
    }
    return u.ResolveReference(refurl), nil
}
```

but we can't use it like this:

```go
var str string //or var str int
str = nil
```


### Mutability is hardcoded in the language

```go
type S struct {
    A string
    B []string
}

func main() {
    x := S{"x-A", []string{"x-B"}}
    y := x // copy the struct
    y.A = "y-A"
    y.B[0] = "y-B"

    fmt.Println(x, y)
    // Outputs "{x-A [y-B]} {y-A [y-B]}" -- x was modified!
}
```

Use [deepcopy lib](https://github.com/jinzhu/copier) to handle this.

