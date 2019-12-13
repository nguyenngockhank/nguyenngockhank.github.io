# Crunz

[Document](https://packagist.org/packages/lavary/crunz#v1.12.4)

## Install 

```
composer require lavary/crunz
```

## Usage 

Just need only one task in crontabs, will be executed in every minute.
```
* * * * * cd /project && vendor/bin/crunz schedule:run /path/to/tasks/directory
```

> By default, Crunz assumes all the task files reside in the `tasks/` directory within the project's root directory. And the suffix of the file is `Tasks.php`


### Directory
```
tasks\
    locks\
        index.html
    FirstGroupTasks.php
    SecondGroupTasks.php
```

--- 

A template for creating tasks

```php
<?php
use Crunz\Schedule;
use Symfony\Component\Lock\Store\FlockStore;

$schedule = new Schedule();

$schedule->onError(function() {
    // sendmai de 
    echo 'Send mail deeeee';
});

/// run with a closure 
/// this can be replaced by other ways
$task = $schedule->run(function() use ($x) { 
    echo "I'm running <3";
    echo "I'm done";
});


$task->description('A task run every minute'); 

// set time
$task->everyMinute();

// prevent overllapse
$store = new FlockStore(__DIR__ . '/locks');
$task->preventOverlapping($store);

// add hooks 
$task->before(function() { 
    echo "\n[START]: ". date('Y-m-d H:i:s') . "\n";
})->after(function () {
    echo "\n[END]: ". date('Y-m-d H:i:s') . "\n";
});

// append logs
$task->appendOutputTo( __DIR__ . '/logs/closure2/' . date('Y-m-d') . '.log');

return $schedule;
```

### Ways to run task

:::: tabs

::: tab Script
```php
// Follow CI instruction:   
// `hi` Controller, `hello` Method, `"khankitty"` Param 
$task = $schedule->run('php index.php hi hello "khankitty"');
```
:::

::: tab Closure
```php
$x = 12;
$task = $schedule->run(function() use ($x) { 
   // Do some cool stuff in here 
});
```
:::

::: tab File
```php
// --destination is an option supported by backup.php script.
$task = $schedule->run(PHP_BINARY . ' backup.php', 
    ['--destination' => 'path/to/destination']
);
```
:::

::::

### Ways to set timeline

:::: tabs

::: tab "Certain Times"
**Run once**
```php
$task->on('13:30 2016-03-01');
```

**Hourly**
```php
// will be run every hour at the 15th minute
$task->hourlyAt('15');
```

**Daily**
```php
$task->daily()->at('13:30');
```

**Weekly**
```php
// run on Tuesday (day 2 of the week) at 09:00 
$task->weeklyOn(2,'09:00');

// or
$task->tuesdays()->at('09:00');
```

**Monthly**
```php
// run on the second of the month at 20:00
$task->monthlyOn(2, '20:00');
```

:::


::: tab LifeTime
```php
$task
    ->everyFiveMinutes()
        ->from('12:30 2016-03-04')
        ->to('04:55 2016-03-10');

// or 
$task
    ->everyFiveMinutes()
    ->between('12:30 2016-03-04', '04:55 2016-03-10');
```

**Run every day but only within specified duration**
```php
$task
     ->everyFiveMinutes()
     ->between('12:30', '04:55');
```
:::


::: tab "More complex"
```php
$task       
    ->minute(['1-30', 45, 55])
    ->hour('1-5', 7, 8)
    ->dayOfMonth(12, 15)
    ->month(1);
```
:::

::::

### Skip by specific condition

```php
$task->skip(function() {
    if ((bool) (time() % 2)) {
        return true;
    }
    return false;  
});
```

## Commands

:::: tabs

::: tab List
```
vendor/bin/crunz schedule:list
```
:::

::: tab "Run Task"
```
vendor/bin/crunz schedule:run --task 1 --force
```
:::

::::

