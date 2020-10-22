# Command Query Seperation

Take a look at the function `is_logged_in()` 

```php
public function is_logged_in() {
    $user_id = $this->ci->session->userdata('user_id');
    if (!is_null($user_id) && $user_id > 0) {
        $this->_handle_multiple_login($user_id);
        return true;
    }
    return false;
}
```

The function name talks to check login status but it also does other *hidden* thing `_handle_multiple_login`.

It's called a `side effect` that leads to confusion of the functionality, makes strange coupling, dependencies.


## How to resolve

We could try to resolve that by renaming `is_logged_in` to `check_logged_in_and_handle_multiple_login` but it doesn't much help.

The real solution is to separate the command from the query so that the ambiguity cannot occur.

::: tip
- Functions should do one thing. They should do it well. They should do it only. 
- Functions should either do something (command) or answer something (query), but not both.
    - `Queries`: Return data but do not change data, therefore having no side effects;
    - `Commands`: Change data but do not return data.
:::

Here is the [full description](https://en.wikipedia.org/wiki/Command%E2%80%93query_separation) of Command Query Seperation (CQS) from wiki

## Few cases violates the CQS

It's Ok when we know what we're doing and It makes you more productive.

### Singleton Pattern

We usually do this for a lazy initialization.

```php
class Runtime
{
    public static function getInstance()
    {
        if(empty(self::$instance)) {
            self::$instance = new Runtime();
        }
        return self::$instance;
    }

}
```

### Fluent Builder Pattern (Fluent interface/ Method chaining)

You can easily to see something like this arround our project

```php
$this->db->select('*')
        ->from('table')
        ->where('id', 1)
        ->get();
```

To create the `Fluent Interface` in the class defination body will be like: 

```php
class Query_builder {
    private $qb_select;
    private $qb_from;

    public function select($select = '*')
	{
        $this->qb_select = $select; // change the state
        return $this; // make the chain
    }

    public function from($table)
	{
        $this->qb_from = $table; // change the state
        return $this;
    }

    // more methods...
}
```

