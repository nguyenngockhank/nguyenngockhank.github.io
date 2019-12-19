# phpDocumentor

[phpDocumentor in packagist](https://packagist.org/packages/phpDocumentor/phpDocumentor#v2.9.0)

## Install 

Change the version if this version out of date.

```
composer require phpdocumentor/phpdocumentor:v2.9.0
```

## Usage 

```
vendor/bin/phpdoc -d ../stcg/codecualeo -t ./docs/api
```

- `-d` : Source directory 
- `-t` : Target directory

## How to write docs

Example: [Glossary](https://docs.phpdoc.org/glossary.html#term-structural-elements)

```php
 /**
  * This class acts as an example on where to position a DocBlock.
  */
 class Foo extends FooParent
 {
     /** @var string|null Should contain a description if available */
     protected $description = null;

     /**
      * This method sets a description.
      *
      * @param string $description A text with a maximum of 80 characters.
      *
      * @return void
      */
     public function setDescription($description)
     {
         // there should be no docblock here
         $this->description = $description;
     }

    /**
     * {@inheritdoc}
     */
     public function overrideMethod() {
         
     }
}
```


```php
/**
* @param int $userId
*
* @return int
*
* @throws UserDoesNotExistException
*/
public function execute($userId)
{
    $user = $this->userRepository->ofId(new UserId($userId));
    if (null === $user) {
        throw new UserDoesNotExistException();
    }

    return $user->grantWishes();
}

```


```php
/**
* @var User[]
*/
private $users = array();

```

## Reference

[PHPDoc reference](https://docs.phpdoc.org/references/phpdoc/index.html)

[Basic Syntax](https://docs.phpdoc.org/references/phpdoc/basic-syntax.html#which-elements-can-have-a-docblock)



