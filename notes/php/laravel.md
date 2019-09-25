# Laravel
Based on Laravel 4.2

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

### Create new command


### Migration and Db Seeding

```
./artisan migrate

./artisan db:seed --class=InitSeeder
```

## Model 

### SELECT 
### INSERT 
### UPDATE 
### DELETE 


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
