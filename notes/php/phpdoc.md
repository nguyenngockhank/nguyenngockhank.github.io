# phpDocumentor

[phpDocumentor](https://packagist.org/packages/phpDocumentor/phpDocumentor#v2.9.0)

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

:::: tabs

::: tab Types

Mix

```php
/** @var mixed  */
private $var;
```

String Or Null

```php
/** @var string|null  */
private $var;
```

Array 

```php
/** @var int[] this is an array of int */
private $var;
```
:::

::: tab Class

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
    * @param string $description A text with a maximum of 80 characters.
    * @return void
    * @throws NullDescriptionException
    */
    public function setDescription($description)
    {
        // implement ...
    }

    /**
     * {@inheritdoc}
     */
    public function overrideMethod() 
    {
        // implement ...
    }
}
```
:::
::::


## Reference

[PHPDoc reference](https://docs.phpdoc.org/references/phpdoc/index.html)

[Basic Syntax](https://docs.phpdoc.org/references/phpdoc/basic-syntax.html#which-elements-can-have-a-docblock)



