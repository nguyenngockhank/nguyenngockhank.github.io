# Law of Demeter

Take a look at the class 

```php{3}
abstract class BaseService
{
    protected $CI;
    protected $cacheservice;

    protected function __construct()
    {
        $this->CI = &get_instance();
        $this->CI->load->library('layout/CacheService');
        $this->CI->load->library('Output');
        $this->cacheservice = &$this->CI->cacheservice;
        $this->cacheservice->setPrefix($this->getCachePrefix());

        $this->CI->load->config('assets');
        $this->ttl = $this->CI->config->item('asset_cache_ttl');
        $this->templatePath = APPPATH . 'views/';
    }

    // ...more code
}
```

After assign the CI instance to an property then it seems that class become knowledgeable. 

The class can do a lot of things through CI property

```php
// in __construct()
$this->CI->load->library('layout/CacheService');
$this->CI->load->library('Output');
$this->cacheservice = &$this->CI->cacheservice;
$this->CI->config->item('asset_cache_ttl');

// in addAsset()
$this->CI->assets->addCss($url);
$this->CI->assets->addJs($url);

// in outputFile()
$this->CI->output
```

And the question is how many things this class is dependent? We can not answer this after go through all lines of the file and check where the `$this->CI` appears.

**The issue is this class knows too much.**

## Law of Demeter

::: tip Definition
Law of Demeter is a design guideline for developing software, particularly object-oriented programs, can be succinctly summarized in each of the following ways:
- Each unit should have only limited knowledge about other units: only units "closely" related to the current unit.
- Each unit should only talk to its friends; don't talk to strangers.
- Only talk to your immediate friends.
::: 

### In OOP

More precisely, the law in programming says that a method `f` of a class `C` should only call the methods of these: 
- methods of `C`
- methods from an object created by `f`
- methods from an object passed as an argument to `f`
- methods from an object property of `C`

## What should we do?
To respect the **Law of Demeter**, we should update the code: 

From this
```php
$this->CI->assets->addCss($url);
$this->CI->assets->addJs($url);
```

To this
```php
$this->wpAssets->addCss($url);
$this->wpAssets->addJs($url);
```

Constructor will be transformed to:
```php
protected function __construct($wpAsset, $cacheService, $CI_Output, ...)
{
    $this->wpAsset = $wpAsset;
    $this->ciOuput = $CI_Output;
    $this->cacheService = $cacheService;
```

At the higher level class will inject the dependent objects to this class.



