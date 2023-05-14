---
tags: ["Pattern", "CleanCode"]
---

# "Return Early" Pattern

<TagLinks />

Take a look at the function `track_user_activity()` in file `/application/core/MY_Controller.php`

```php
protected function track_user_activity(){
    $user_id = $this->b2be_runtime->getUserID();
    if(!empty($user_id)){
        $current_datetime = date('Y-m-d H:i:s');
        // check if not from test connection ajax, count activity user
        if($this->router->fetch_class() != 'internet'){
            // 60+ lines of code here
        }
    }
}
```

Can you read that? Yes, but ... 
- The code indent is not easy to read
- nested logical condition is complexity

## Return Early

Ok, let me do a make up on this code

```php
protected function track_user_activity(){
    $user_id = $this->b2be_runtime->getUserID();
    if(empty($user_id)) {
        return;
    }

    if($this->router->fetch_class() != 'internet') {
        return;
    }

    $current_datetime = date('Y-m-d H:i:s');
    // 60+ lines of code here

}
```

Most of cases you can apply this pattern to keep your code more clean and more readable.

**Now It's Your Turn!**

