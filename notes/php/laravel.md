# Laravel
Based on Laravel 4.2

[[toc]]

## Split the routes

1) Create new files to store the routes: `app\routes\main.php`


2) At file `routes.php`, include the seperated routes 

```php
require app_path() . '/routes/main.php';
```

## Register new Module 

1) Add piece of codes at file `composer.json` 

```php
"autoload": {
    "psr-4": {
        "Khank\\": "app/modules/"
    }
}
```

2) Run the command: 
```
composer dump-autoload 
```

3) Define a class at `app/modules/Test.php`

```php
<?php
namespace Khank;

class Test {
    static function info() {
        echo 'hello';
    }
}
```

4) Usage: 
```php 
echo \Khank\Test::info(); // hello
```


## Artisan to Develop

### List 
List all of commands availabel

```
./artisan list
```

### Essential Command
After creating new class `Controller / Model / Command, lang files ...` except `views` pages, then need run these commands: 
```
composer dump-autoload && ./artisan dump-autoload && ./artisan optimize && ./artisan cache:clear
```

## Create new command


### Migration and Db Seeding

```
./artisan migrate

./artisan db:seed --class=InitSeeder
```

## Eloquent Tricks 

### Customize time column

Instead of using default column name

```php
class User extends Model
{
    const CREATED_AT = 'created_time';
    const UPDATED_AT = 'udpated_time';
    const DELETED_AT = 'removed_time';
}
```

### Check object is persistence

```php
$user->exists; /// boolean 
```

### Check object is changed 

```php
$user->isDirty(); /// boolean
$user->isDirty('email'); 
$user->isDirty(['email', 'name']); 

/// get what 
$user->getDirty(); /// array
```

### Get original data

```php
$user->getOriginal(); /// array
$user->getOriginal('email');
```

### Clone a instance

```php
$user = User::first();
$clonedUser = $user->replicate();
```

### Refresh (grab from Database)

```php
$user->name= 'Nguyen';
$user->address->city = "HCM City";

/// data of user is back to original. 
$user->refresh();
```

### Skip events

```php
$user = User::withoutEvents(function () {
    return factory(User::class)->create(); 
});
```

### Save self & relations 

```php
$user->name = 'Nguyen';
$user->address->city = "HCM City";

/// will save relations & self attributes
$user->push();
```

### Force delete 

```php
$user->forceDelete();
```

## Helpers

### Path

```php
public_path(); // Path of public/
base_path(); // Path of application root
storage_path(); // Path of storage/
app_path(); // Path of app/
```