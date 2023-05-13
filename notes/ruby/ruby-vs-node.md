
## Basic

| NodeJs                      | Ruby                  |
|------                       | ------                |
| `file.js`                   |  `file.rb`   | 
| /** comment in lines  */    |  =begin  comment in lines  =end    | 
| typeof a                    |  a.class  (Integer / String)            | 
| console.log()               |  puts               | 
| ``` `Value of pi = ${pi}`  ```   |  ```"Value of pi = #{pi}"```     | 
| message   |  $message  (global var)   | 



## OOP

### Access modifier


https://www.cosmiclearn.com/ruby/accessmodifiers.php



| NodeJs                | Ruby                  |
|------                 | ------                |
| `function constructor()`    |  `def initialize(id)`         | 
| `new Amimal()`              |  `Animal.new`                 | 
| `new Amimal("1")`           |  `Animal.new("1")`            | 


```rb
class Employee
    protected
        def setSalary(salary)
            @salary = salary
        end

    public
        def setData
            if @experience == "Fresher"
                setSalary("1000 Rupees")
            elsif @experience == "One"
                setSalary("100000 Dollars")
            elsif @experience == "Ten"
                setSalary("700000000 Dollars")
            end
        end

        def getSalary
            return @salary
        end
end

class Manager < Employee # extend
    def initialize
        setSalary(1000)
    end
end

employee1 = Manager.new
puts "Employee Salary is #{employee1.getSalary()}"
```