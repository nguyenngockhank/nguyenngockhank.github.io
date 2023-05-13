#!/usr/bin/ruby -w

class Employee
    protected
        def setSalary(salary)
            @salary = salary
        end
    public
        def getSalary
            return @salary
        end
end

class Manager < Employee
    def initialize
        setSalary(1000)
    end
end

employee1 = Manager.new
puts "Employee Salary is #{employee1.getSalary()}"
