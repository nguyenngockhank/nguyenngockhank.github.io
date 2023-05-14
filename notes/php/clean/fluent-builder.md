---
tags: ["Pattern"]
---

# Fluent Builder Pattern

## Long parameter list

Take a look at the function 

```php
public function send_mail($to, $subject, $message, $toFirstName = null, $toLastName = null, $template = null, $vars = null, $from_name = null, $attachment = array(), $from_email = null, $cc = null, $bcc = null) {
    // method detail 
}
```

12 parameters in a method - a long parameter list 

When you run into some cases like this. There is a pattern you can apply. It's `Fluent Builder Pattern`

I won't go detail about few ambiguous things:
- `$toFirstName` and `$toLastName` vs `$from_name`. 
    - Why `$to_name` vs `$from_name` ?
    - Or `$toFirstName` and `$toLastName` vs `$fromFirstName` and `$fromLastName`?
- `$template` is what?

Main purpose of this post is resolving the parameter long list & introducing the `Fluent Builder Pattern`

## Refactor

After refactoring I want that method will become: 

```php
public function send_mail(Email $email, ExtraOption $extraOption) {
    // method detail 
}
```

- 12 parameters becomes 2  parameter objects
- `Email` is a class contains information of an email
- `ExtraOption` is a class contains other things. I won't talk about this class.

**Way to build `$email` param**


```php
$subject = "A title of subject";
$message = "content";
$toEmail = "nguyen.khank@b2be.com";

$email = Email::Builder()->
                ->setSubject($subject)
                ->setMessage($message)
                ->setToEmail($toEmail)
                ->build();
```


## Parameter Object

```php
<?php
namespace Wp3Module\core\utils\B2BEMailer;

class Email 
{
    private $subject;
    private $message;

    private $toEmail;
    private $toName;

    private $fromName;
    private $fromEmail;

    private $attachments;

    private $cc;
    private $bc;

    function setSubject($subject)
    {
        $this->subject = $subject;
    }

    function getSubject()
    {
        return $this->subject;
    }

    // list of getters & setters 
}
```

Ok, now you can use the `Email` class: 

```php
$email = new Email();
$email->setSubject('A title');
// set more things here
```


## Fluent Builder

Then, I create a builder to build that Email

```php
<?php
namespace Wp3Module\core\utils\B2BEMailer;

class EmailBuilder 
{
    private $subject;
    private $message;

    private $toEmail;
    private $toName;

    private $fromName;
    private $fromEmail;

    private $cc;
    private $bc;

    private $attachments;

    static function getInstance() 
    {
        return new EmailBuilder();
    }

    function setSubject($subject)
    {
        $this->subject = $subject;
        return $this;
    }

    // list of setters

    /**
     * @return Email
     */
    function build() 
    {
        $email = new Email();
        $email->setSubject($this->subject);
        $email->setMessage($this->message);
        $email->setToEmail($this->toEmail);
        $email->setToName($this->toName);
        $email->setFromEmail($this->fromEmail);
        $email->setFromName($this->fromName);
        $email->setBC($this->bc);
        $email->setCC($this->cc);
        $email->setAttachments($this->attachments);
        return $email;
    }
}

```

Update the `Email` class, add more `Builder` function: 

```php
class Email 
{
    static function Builder() 
    {
        return EmailBuilder::getInstance();
    }

}
```

Ok we're done! 

No, need to write test cases


## Testing

```php
<?php
namespace Tests\Helpers;
use PHPUnit\Framework\TestCase;

use Wp3Module\core\utils\B2BEMailer\Email;

class B2BEMailTest extends TestCase
{
    function testBuildSuccess()
    {
        $subject = "A title of subject";
        $message = "content";
        $toEmail = "nguyen.khank@b2be.com";
        $toName = "Nguyen khanh";
        $fromEmail = "doan.nguyencong@b2be.com";
        $fromName = "Doan kitty";
        $cc = "";
        $bc = "";

        $email = Email::Builder()
                        ->setSubject($subject)
                        ->setMessage($message)
                        ->setToEmail($toEmail)
                        ->setToName($toName)
                        ->setFromEmail($fromEmail)
                        ->setFromName($fromName)
                        ->build();

        $this->assertEquals($subject, $email->getSubject());               
        $this->assertEquals($message, $email->getMessage());               
        $this->assertEquals($fromEmail, $email->getFromEmail());               
        $this->assertEquals($fromName, $email->getFromName());               
        $this->assertEquals($toName, $email->getToName());               
        $this->assertEquals($toEmail, $email->getToEmail());               
        $this->assertEquals($bc, $email->getBC());               
        $this->assertEquals($cc, $email->getCC());               
    }
}
```

## Coding too much?

Yeah, It’s worth it.

Now, I want to validate the email, what should I do. 

Business rules should be right place. Come back to the `Email` class, I will add a bussiness logic to validate the email there:


```php
<?php
class Email 
{
    static function validEmail($email) 
    {
        return \filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    function setFromEmail($fromEmail)
    {
        if (!static::validEmail($fromEmail)) {
            throw new \Exception("Invalid Email");
        }
        $this->fromEmail = $fromEmail;
    }
}
```

It will throw an Exception if incorrect email supported.

**Add more test for this case**

```php
class B2BEMailTest extends TestCase
{
    function testInvalidFromEmail() 
    {
        $this->expectExceptionMessage("Invalid Email");

        $fromEmail = "from-a-non-email";
        Email::Builder()
                ->setFromEmail($fromEmail)
                ->build();
    }
}
```