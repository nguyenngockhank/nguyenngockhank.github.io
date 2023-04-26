# Laravel vs Symfony

Criteria | Laravel | Symfony 
---------| --------| --------
CLI Tool | Artisan |  Symfony CLI
Template engine | Blade | Twig
Request Handling | MVC | MVC
ORM    | Eloquent  | Doctrine 
Data Source Pattern |  Active Record  | Data Mapper
Entities | plain PHP | inherit `Eloquent` logic 
Migration | Migration file  | Annotations within the entity 
Memory Usage  |  more | less
Persistence  | instance itself | EntityManager 
Raw Query | SQL | Doctrine Query Language (DQL)
Rate Limiting | [Rate Limiting](https://laravel.com/docs/master/rate-limiting) | [Rate Limiter](https://symfony.com/doc/current/rate_limiter.html)
Service Container | [Service Container](https://laravel.com/docs/master/container) | [Service Container](https://symfony.com/doc/current/service_container.html)
Routing | [Routing](https://laravel.com/docs/master/routing) | [Routing](https://symfony.com/doc/current/routing.html)

## Routing

:::: tabs
::: tab Laravel
```php
// routes/web.php

use Illuminate\Http\Request;
 
Route::any('/blog', function (Request $request) {
    // ...
});

Route::get(
    '/blog',
    [BlogController::class, 'list']
)->name('blog_list');
```
:::

::: tab Symfony
```php
// config/routes.php
use App\Controller\BlogController;
use Symfony\Component\Routing\Loader\Configurator\RoutingConfigurator;

return function (RoutingConfigurator $routes) {
    $routes->add('blog_list', '/blog')
        // the controller value has the format [controller_class, method_name]
        ->controller([BlogController::class, 'list'])
        ->methods(['GET'])

        // if the action is implemented as the __invoke() method of the
        // controller class, you can skip the 'method_name' part:
        // ->controller(BlogController::class)
    ;
};
```
:::
::::


## Service Container 

### Register

:::: tabs
::: tab Laravel
```php
$this->app->bind(Transistor::class, function (Application $app) {
    return new Transistor($app->make(PodcastParser::class));
});
```
:::

::: tab Symfony
```yaml
# config/services.yaml
services:
    # default configuration for services in *this* file
    _defaults:
        autowire: true      # Automatically injects dependencies in your services.
        autoconfigure: true # Automatically registers your services as commands, event subscribers, etc.

    # makes classes in src/ available to be used as services
    # this creates a service per class whose id is the fully-qualified class name
    App\:
        resource: '../src/'
        exclude:
            - '../src/DependencyInjection/'
            - '../src/Entity/'
            - '../src/Kernel.php'

    # order is important in this file because service definitions
    # always *replace* previous ones; add your own service configuration below

    # ...
```
:::
::::

### Resolve
...

### Release
... 


## Model 

### Create new Model

:::: tabs
::: tab Laravel

Eloquent
```sh
php artisan make:model Flight
```

https://laravel.com/docs/10.x/eloquent#generating-model-classes
:::

::: tab Symfony
```sh
php bin/console make:entity
```

https://symfony.com/doc/current/doctrine.html#creating-an-entity-class
:::
::::

### Entities

**Example**

:::: tabs
::: tab Laravel

Eloquent entities inherit all of the persistence logic of the ORM.

```php
class User extends Eloquent
{
    // ...
}

```
:::

::: tab Symfony

Doctrine entities are just plain old PHP 

```php
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="users")
 */
class User
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $name;
}
```
:::
::::


**Persistence**

:::: tabs
::: tab Laravel
```php
$user = User::find(123);

$user->name = "Philip Brown";
$user->save();
```
:::

::: tab Symfony
```php
$user = EntityManager::find("Cribbb\Entities\User", 123); // map 
// shortcut for line below
// $user = EntityManager::getRepository("Cribbb\Entities\User")->find($id);

$user->setName("Philip Brown");

EntityManager::persist($user);
EntityManager::flush(); // delay interacting with the database until the flush() method is called.
```
:::
::::

**Query language**

:::: tabs
::: tab Laravel
```php

```
:::

::: tab Symfony
```php
$query = EntityManager::createQuery(
    "select u from Cribbb\Entities\User u where u.karma >= 10 and u.karma <= 100"
);
$users = $query->getResult();
```
:::
::::

http://laraveldoctrine.org/