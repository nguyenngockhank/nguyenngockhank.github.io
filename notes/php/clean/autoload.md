# Autoloading

## [PSR-4 Autoloader](https://www.php-fig.org/psr/psr-4/)

PSR-4 describes a specification for autoloading **classes** from file paths.

### Take a tour

Let see how I use PRS-4 in webportal:

**Definition:**
Add pieces of code into `composer.json` at root project. 

```json
"autoload": {
  "psr-4": {
    // more code ...
    "Wp3Module\\": "application/modules/",
    "Wp3\\": "application/",
    // more code ...
  }
}
```

**Explanation:**
- the classes of namespace `Wp3Module` will be looked up and loaded at `application/modules/`
- the classes of namespace `Wp3` will be looked up and loaded at `application/modules/`


**Run command in terminal:**

```
composer dump-autoload
```
*make sure you have installed the composer in your machine before you run*

Then you can see few files in `vendor` update. It means Composer generates list of all classes that need to be included (*autoload_classmap.php*).

### Class definition

Create a file at `/application/modules/contact/myfolder/Greeting.php` with contents: 

```php{2}
<?php
namespace Wp3Module\contact\myfolder;

class Greeting 
{
    public static function getInstance() 
    {
		static $instance = null;
		if (null === $instance) {
			$instance = new static();
		}
		return $instance;
    }
    
	protected function __construct() {}

    function helloWorld() 
    {
        return 'Hello world';
    }
}
```

### Class Usage

Now you can use the class `Greeting` everywhere in our project. Create a controller  `/application/modules/contact/controllers/Hello_controller.php`

```php{2,8}
<?php
use Wp3Module\contact\myfolder\Greeting;

class Hello_controller extends MX_Controller
{
    function index() 
    {
        echo Greeting::getInstance()->helloWorld();
    }
}
```

Open link to manual check: `{webportal_url}/contact/hello_controller`


## Conclusion

I just introduce to you: 
- Defining namespace & usage.
- PSR-4 Autoloader with Composer. 

We're more independent of Codeigniter
- have our own directory structure.
- easy to resolve dependencies I'll talk later in another post


### Other loaders with Composer
- `PRS-0`: a older standards was replaced by PRS-4 - `Not recommended`
- `classmap`: composer will scan all classes in given folder to build - `Not recommended`
- `files`: point the specific files to load - useful for helpers

## References
- [PHP namespace](https://www.php.net/manual/en/language.namespaces.php)
- [PSR-4 Autoloader](https://www.php-fig.org/psr/psr-4/)
- [dump-autoload](https://getcomposer.org/doc/03-cli.md#dump-autoload-dumpautoload-) - you can put more options like `-o` for optimization
