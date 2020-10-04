# Refactoring Catalog

From **Refactoring - Improving the Design of Existing Code** - *Martin Fowler with contribution by Kent Beck*

[[toc]]

## A First Set of Refactorings

### Extract Function 

formerly: *Extract Method* <br />inverse of: [*Inline Function*](#inline-function)

:::: tabs

::: tab Before
```js
function printOwing(invoice) {
    printBanner();
    let outstanding = calculateOutstading();

    // print details
    console.log(`name: ${invoice.customer}`)
    console.log(`amount: ${outstanding}`)
}
```
:::

::: tab After
```js
function printOwing(invoice) {
    printBanner();
    let outstanding = calculateOutstading();
    printDetails(printBanner);

    // print details
    function printDetails(outstanding) {
        console.log(`name: ${invoice.customer}`)
        console.log(`amount: ${outstanding}`)
    }
}
```
:::
::::

### Inline Function 

formerly: *Inline Method* <br />inverse of: [*Extract Function*](#extract-function)


:::: tabs

::: tab Before
```js
function getRating(driver) {
    return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver) {
    return driver.numberOfLateDeliveries > 5;
}
```
:::

::: tab After
```js
function getRating(driver) {
    return (driver.numberOfLateDeliveries > 5) ? 2 : 1;
}
```
:::
::::


### Extract Variable
formerly: *Introduce Explaining Variable* <br />inverse of: [*Inline Variable*](#inline-variable)


:::: tabs

::: tab Before
```js
return order.quantity * order.itemPrice - 
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100);
```
:::

::: tab After
```js
const basePrice = order.quantity * order.itemPrice;
const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
const shipping = Math.min(basePrice * 0.1, 100);
return basePrice - quantityDiscount + shipping;
```
:::
::::


### Inline Variable
formerly: *Inline Temp* <br />inverse of: [*Extract Variable*](#extract-variable)


:::: tabs
::: tab Before
```js
let basePrice = anOrder.basePrice;
return (basePrice > 1000);
```
:::

::: tab After
```js
return basePrice > 1000;
```
:::
::::

### Change Function Declaration

aka: *Rename Function* <br />
formerly: *Rename Method* <br />
formerly: *Add Parameter*<br />
formerly: *Remove Parameter*<br />
aka: *Change Signature*

:::: tabs
::: tab Before
```js
function circum(radius) { /** code... */}
```
:::

::: tab After
```js
function circumference(radius) { /** code... */}
```
:::
::::

A good name allows me to understand what function does.

### Encapsulate Variable

formerly: *Self-Encapsulate Field*<br />
formerly: *Encapsulate Field*

:::: tabs

::: tab Before
```js
let defaultOwner = { firstName: "Martin", lastName: "Fowler" }
```
:::

::: tab After
```js
let defaultOwnerData = { firstName: "Martin", lastName: "Fowler" }
export function defaultOwner() { return defaultOwnerData }
export function setDefaultOwner(arg) { defaultOwnerData = arg }
```
:::
::::

I want to move widely accessed data

### Rename Variable

:::: tabs

::: tab Before
```js
let a = height * width;
```
:::

::: tab After
```js
let area = height * width;
```
:::
::::



### Introduce Parameter Object

:::: tabs

::: tab Before
```js
function amountInvoiced(startDate, endDate) { /** body */ }
function amountReceived(startDate, endDate) { /** body */ }
function amountOverdue(startDate, endDate) { /** body */ }
```
:::

::: tab After
```js
function amountInvoiced(aDateRange) { /** body */ }
function amountReceived(aDateRange) { /** body */ }
function amountOverdue(aDateRange) { /** body */ }
```
:::

::::

See a groups of data items that regularly travel together, appearing in function after function.
- makes explicit the relationship between data items
- reduces size of parameter lists
- helps consistency since all functions that use the structure
- can move behavior into the new class

### Combine Functions into Class

:::: tabs
::: tab Before
```js
function base(aReading) { /** code */}
function taxableCharge(aReading) { /** code */}
function calculateBaseCharge(aReading) { /** code */}
```
:::

::: tab After
```js
class Reading {
    base() {/** code */}
    taxableCharge() { /** code */}
    calculateBaseCharge() { /** code */}
}
```
:::
::::

See a group of functions that operate closely together on common body of data.
- form functions => more explicit, simplify function calls inside the object by removing many of the args 
- provides a reference to pass such an object to other pars of the system
- allows client to mutate the core data of the object, and the derivations remain consistent.

### Combine Functions into Transform

:::: tabs
::: tab Before
```js
function base(aReading) { /** code */}
function taxableCharge(aReading) { /** code */}
```
:::

::: tab After
```js
function enrichReading(argReading) {
    const aReading = _.cloneDeep(argReading);
    argReading.baseCharge = base(aReading);
    argReading.taxableCharge = taxableCharge(aReading);
    return aReading;
}
```
:::
::::

### Split Phase


:::: tabs
::: tab Before
```js
const orderData = orderString.split(/\s+/);
const productPrice = priceList[orderData[0].split("-")[1]];
const orderPrice = parseInt(orderData[1]) * productPrice;
```
:::

::: tab After
```js
const orderRecord = parseOrder(order);
const orderPrice = price(orderRecord, priceList);

function parseOrder(string) {
    const values = aString.split(/\s+/);
    return ({
        productID: values[0].split("-")[1],
        quantity: parseInt(values[1])
    });
}

function price(order, priceList) {
    return order.quantity * priceList[order.productID];
}
```
:::
::::


## Encapsulation

### Encapsulate Record

formerly: *Replace Record with Data Class*

:::: tabs
::: tab Before
```js
organization = {name: "Acme Gooseberries", country: "GB"};
```
:::

::: tab After
```js
class Organization {
    constructor(data) {
        this._name = data.name;
        this._country = data.country;
    }

    get name() { return this._name; }
    set name(arg) { this._name = arg; }
    get country() { return this._name; }
    set country(arg) { this._country = arg; }
}
```
:::
::::

### Encapsulate Collection

:::: tabs
::: tab Before
```js
class Person {
    get courses() { return this._courses; }
    set courses(aList) { this._courses = aList; }
}
```
:::

::: tab After
```js
class Person {
    get courses() { return this._courses.slice(); }
    addCourse(aCourse) { /** code */}
    removeCourse(aCourse) { /** code */}
}
```
:::
::::

### Replace Primitive with Object

:::: tabs
::: tab Before
```js
orders.filter(o => "high" === o.priority 
                || "rush" === o.priority);
```
:::

::: tab After
```js
orders.filter(o => o.priority.higherThan(new Priority("normal")));
```
:::
::::

### Replace Temp With Query

:::: tabs

::: tab Before
```js
const basePrice = this._quantity * this._itemPrice;
if (basePrice > 1000) {
    return basePrice * 0.95;
}
return basePrice * 0.98;
```
:::

::: tab After
```js
get basePrice() { this._quantity * this._itemPrice; }

//...
if (basePrice > 1000) {
    return this.basePrice * 0.95;
}
return this.basePrice * 0.98;
```
:::
::::


### Extract Class

inverse of: [*Inline Class*](#inline-class)

:::: tabs
::: tab Before
```js
class Person {
    get officeAreaCode() { return this._officeAreaCode; }
    get officeNumber() { return this._officeNumber; }
}
```
:::

::: tab After
```js
class Person {
    get officeAreaCode() { return this._telephoneNumber.areaCode; }
    get officeNumber() { return this._telephoneNumber.areaCode; }
}

class TelephoneNumber {
    get areaCode() { return this._areaCode; }
    get number() { return this._number; }
}
```
:::
::::

### Inline Class

inverse of: [*Extract Class*](#extract-class)


:::: tabs
::: tab Before
```js
class Person {
    get officeAreaCode() { return this._telephoneNumber.areaCode; }
    get officeNumber() { return this._telephoneNumber.areaCode; }
}

class TelephoneNumber {
    get areaCode() { return this._areaCode; }
    get number() { return this._number; }
}
```
:::

::: tab After
```js
class Person {
    get officeAreaCode() { return this._officeAreaCode; }
    get officeNumber() { return this._officeNumber; }
}
```
:::
::::

### Hide Delegate

inverse of: [*Remove Middle Man*](#remove-middle-Man)

:::: tabs
::: tab Before
```js
manager = aPerson.department.manager;
```
:::

::: tab After
```js
manager = aPerson.manager;

class Person {
    get manager() { return this.department.manager }
}
```
:::
::::

### Remove Middle Man

inverse of: [*Hide Delegate*](#hide-delegate)

:::: tabs
::: tab Before
```js
manager = aPerson.manager;

class Person {
    get manager() { return this.department.manager }
} 
```
:::

::: tab After
```js
manager = aPerson.department.manager;
```
:::
::::

::: tip
*I can do a mixture here. Some delegations may be so common that I'd like to keep them to make client code easier to work with.*
:::


### Substitute Algorithm

:::: tabs
::: tab Before
```js
function foundPerson(people) {
    for (let i=0; i < people.length; i++) {
        if (people[i] === "Don") {
            return "Don";
        }
        if (people[i] === "John") {
            return "John";
        }
        if (people[i] === "Kent") {
            return "Kent";
        }
    }
    return "";
}
```
:::

::: tab After
```js
function foundPerson(people) {
    const candidates = ["Don", "John", "Kent"];
    return people.find(p => candidates.includes(p)) || '';
}
```
:::
::::


## Moving Features

### Move Function

formerly: *Move Method*


:::: tabs
::: tab Before
```js
class Account {
    get overdraftCharge() { /** code */}
}
```
:::

::: tab After
```js
class AccountType {
    get overdraftCharge() { /** code */}
}
```
:::
::::

### Move Field

:::: tabs
::: tab Before
```js
class Customer {
    get plan() { return this._plan; }
    get discountRate() { return this._discountRate; }
}
```
:::

::: tab After
```js
class Customer {
    get plan() { return this._plan; }
    get discountRate() { return this.plan._discountRate; }
}
```
:::
::::

### Move Statements into Functions

inverse of: [*Move Statements into Callers*](#move-statements-into-callers)

:::: tabs
::: tab Before
```js
result.push(`<p>title: ${person.photo.title}</p>`);
result.concat(photoData(person.photo));

function photoData(aPhoto) {
    return [
        `<p>location: ${aPhoto.location}</p>`,
        `<p>date: ${aPhoto.date.toDateString}</p>`,
    ]
}
```
:::

::: tab After
```js
result.concat(photoData(person.photo));
function photoData(aPhoto) {
    return [
        `<p>title: ${aPhoto.title}</p>`,
        `<p>location: ${aPhoto.location}</p>`,
        `<p>date: ${aPhoto.date.toDateString}</p>`,
    ]
}
```
:::
::::

### Move Statements into Callers

inverse of: [*Move Statements into Functions*](#move-statements-into-functions)

:::: tabs
::: tab Before
```js
emitPhotoData(outStream, person.photo);

function emitPhotoData(outStream, photo) {
    outStream.write(`<p>title: ${photo.title}</p>\n`);
    outStream.write(`<p>location: ${photo.location}</p>\n`);
}
```
:::

::: tab After
```js
emitPhotoData(outStream, person.photo);
outStream.write(`<p>location: ${photo.location}</p>\n`);

function emitPhotoData(outStream, photo) {
    outStream.write(`<p>title: ${photo.title}</p>\n`);
}
```
:::
::::

### Replace Inline Code with Function Call

:::: tabs
::: tab Before
```js
let appliesToMass = false;
for (const s of states) {
    if (s === "MA") appliesToMass = true;
} 
```
:::

::: tab After
```js
appliesToMass = states.includes("MA");
```
:::
::::

### Slide Statements

formerly: *Consolidate Duplicate Conditional Fragment*

:::: tabs
::: tab Before
```js
const pricingPlan = retrievePricingPlan();
const order =  retrieveOrder();
let charge;
const chargePerUnit = pricingPlan.unit;
```
:::

::: tab After
```js
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order =  retrieveOrder();
let charge;
```
:::
::::

### Split Loop

:::: tabs
::: tab Before
```js
let averageAge = 0;
let totalSalary = 0;
for (const of people) {
    averageAge += p.age;
    totalSalary += p.salary;
}
averageAge = averageAge / people.length;
```
:::

::: tab After
```js
let totalSalary = 0;
for (const of people) {
    totalSalary += p.salary;
}

let averageAge = 0;
for (const of people) {
    averageAge += p.age;
}
averageAge = averageAge / people.length;
```
:::
::::

### Replace Loop with Pipeline

:::: tabs
::: tab Before
```js
const names = [];
for (const i of input) {
    if (i.job === "programmer") {
        names.push(i.name);
    }
}
```
:::

::: tab After
```js
const names = input
    .filter(i => i.job === "programmer")
    .map(i => i.name)
    ;
```
:::
::::

### Remove Dead Code

:::: tabs
::: tab Before
```js
if (false) {
    doSomethingThatUserMatter();
}
```
:::

::: tab After
```js

```
:::
::::

## Organizing Data


### Split Variable

formerly: *Consolidate Duplicate Conditional Fragment*<br />
formerly: *Consolidate Duplicate Conditional Fragment*

:::: tabs
::: tab Before
```js
let temp = 2 * (height + width);
console.log(temp);
temp = height * width;
console.log(temp);
```
:::

::: tab After
```js
const perimeter = 2 * (height + width);
console.log(perimeter);
const area = height * width;
console.log(area);
```
:::
::::

### Rename Field

:::: tabs
::: tab Before
```js
class Organization {
    get name() { /** code */}
}
```
:::

::: tab After
```js
class Organization {
    get title() { /** code */}
}
```
:::
::::


### Replace Derived Variable with Query

:::: tabs
::: tab Before
```js
get discountedTotal() { return this._discountedTotal; }
set discount(aNumber) {
    const old = this._discount;
    this._discount = aNumber;
    this._discountedTotal += old - aNumber;
}
```
:::

::: tab After
```js
get discountedTotal() { return this._baseTotal - this._discount; }
set discount(aNumber) { this._discount = aNumber; }
```
:::
::::

### Change Reference to Value

inverse of: [*Change Value to Reference*](#change-value-to-reference)

:::: tabs
::: tab Before
```js
class Product {
    applyDiscount(arg) { this._price.amount -= arg; }
}
```
:::

::: tab After
```js
class Product {
    applyDiscount(arg) { 
        this._price = new Money(this._price.amount - arg, this._price.currency); 
    }
}
```
:::
::::


### Change Value to Reference

inverse of: [*Change Reference to Value*](#change-reference-to-value)

:::: tabs
::: tab Before
```js
let customer = new Customer(customerData);
```
:::

::: tab After
```js
let customer = new customerRepository.get(customerData.id);
```
:::
::::

## Simplifying Conditional Logic

### Decompose Conditional

:::: tabs
::: tab Before
```js
if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd))
    charge = quantity * plan.summerRate;
else
    charge = quantity * plan.regularRate + plan.regularServiceCharge;
```
:::

::: tab After
```js
if (summer())
    charge = summerCharge();
else
    charge = regularCharge();
```
:::
::::

### Consolidate Conditional Expression

:::: tabs
::: tab Before
```js
if (anEmployee.seniority < 2) return 0;
if (anEmployee.monthsDisabled > 12) return 0;
if (anEmployee.isPartTime) return 0;
```
:::

::: tab After
```js
if (isNotEligableForDisability()) return 0;

function isNotEligableForDisability() {
    return ((anEmployee.seniority < 2) 
        || (anEmployee.monthsDisabled > 12)
        || (anEmployee.isPartTime) 
    )
}
```
:::
::::


### Replace Nested Conditional with Guard Clauses

:::: tabs
::: tab Before
```js
function getPayAmount() {
    let result;
    if (isDead)
        result = deadAmount();
    else {
        if (isSeperated) 
            result = separatedAmount();
        else {
            if (isRetired) 
                result = retiredAmount();
            else 
                result = normalPayAmount();
        }
    }
    return result;
}
```
:::

::: tab After
```js
function getPayAmount() {
    if (isDead) return deadAmount();
    if (isSeperated) return separatedAmount();
    if (isRetired) return retiredAmount();
    return normalPayAmount();
}
```
:::
::::

### Replace Conditional with Polymorphism

:::: tabs
::: tab Before
```js
switch (bird.type) {
    case 'EuropeanSwallow':
        return "average";
    case 'AfricanSwallow':
        return (bird.numberOfCoconuts > 2) ? "tired" : "average";
    case 'NorwegianBlueParrot':
        return (bird.voltage > 100) ? "scorched" : "beautiful";
    default:
        return "unknown";
}
```
:::

::: tab After
```js
class EuropeanSwallow {
    get plumage() {
        return "average";
    }
}

class AfricanSwallow {
    get plumage() {
        return (this.numberOfCoconuts > 2) ? "tired" : "average";
    }
}

class NorwegianBlueParrot {
    get plumage() {
        return (this.voltage > 100) ? "scorched" : "beautiful";
    }
}
```
:::
::::


### Introduce Special Case

formerly: *Introduce Null Object*

:::: tabs
::: tab Before
```js
if (aCustomer === "unknown") customerName = "occupant";
```
:::

::: tab After
```js
class UnknownCustomer {
    get name() { return "occupant"; }
}
```
:::
::::

### Introduce Assertion

:::: tabs
::: tab Before
```js
if (this.discountRate)
    base = base - (this.discountRate * base);
```
:::

::: tab After
```js
assert(this.discountRate >= 0);
if (this.discountRate)
    base = base - (this.discountRate * base);
```
:::
::::

## Refactoring APIs

### Separate Query from Modifier

:::: tabs
::: tab Before
```js
function getTotalOutstadingAndSendBill() {
    const result = customer.invoices.reduce((total, each) => each.amount + total, 0);
    sendBill();
    return result;
}
```
:::

::: tab After
```js
function getTotalOutstadingAndSendBill() {
    const result = customer.invoices.reduce((total, each) => each.amount + total, 0);
    return result;
}
function sendBill() {
    emailGateway.send(formatBill(customer));
}
```
:::
::::


### Parameterize Function

formerly: *Parameterize Method*


:::: tabs
::: tab Before
```js
function tenPercentRaise(aPerson) {
    aPerson.salary = aPerson.salary.multiply(1.1);
}
function fivePercentRaise(aPerson) {
    aPerson.salary = aPerson.salary.multiply(1.05);
}
```
:::

::: tab After
```js
function raise(aPerson, factor) {
    aPerson.salary = aPerson.salary.multiply(1 + factor);
}
```
:::
::::


### Remove Flag Argument

formerly: *Replace Parameter with Explicit Methods*

:::: tabs
::: tab Before
```js
function setDimension(name, value) {
    if (name === "height") {
        this._height = value;
        return;
    }
    if (name === "width") {
        this._width = value;
        return;
    }
}
```
:::

::: tab After
```js
function setHeight(value) { this._height = value; }
function setWidth(value) { this._width = value; }
```
:::
::::


### Preserve Whole Object

:::: tabs
::: tab Before
```js
const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if (aPlan.withinRange(low, high))
```
:::

::: tab After
```js
if (aPlan.withinRange(aRoom.daysTempRange))
```
:::
::::


### Replace Parameter with Query

formerly: *Replace Parameter with Method*<br/>
inverse of: [*Replace Query with Parameter*](#replace-query-with-parameter)

:::: tabs
::: tab Before
```js
availableVacation(anEmployee, anEmployee.grade);

function availableVacation(anEmployee, grade) {
    // calculate vacation...
}
```
:::

::: tab After
```js
availableVacation(anEmployee);

function availableVacation(anEmployee) {
    const grade = anEmployee.grade;
    // calculate vacation...
}
```
:::
::::

### Replace Query with Parameter

inverse of: [*Replace Parameter with Query*](#replace-parameter-with-query)

:::: tabs
::: tab Before
```js
targetTemperature(aPlan);

function targetTemperature(aPlan) {
    currentTemperature = thermostat.currentTemperature;
    // code
}
```
:::

::: tab After
```js
targetTemperature(aPlan, thermostat.currentTemperature);

function targetTemperature(aPlan, currentTemperature) {
    // code
}
```
:::
::::



### Remove Setting Method

:::: tabs
::: tab Before
```js
class Person {
    get name() { /** code */ }
    set name(aString) { /** code */ }
}
```
:::

::: tab After
```js
class Person {
    get name() { /** code */ }
}
```
:::
::::

### Replace Constructor with Factory Function

formerly: *Replace Constructor with Factory Method*

:::: tabs
::: tab Before
```js
leadEngineer = new Employee(document.leadEngineer, 'E');
```
:::

::: tab After
```js
leadEngineer = createEngineer(document.leadEngineer);
```
:::
::::

### Replace Function with Command

formerly: *Replace Method with Method Object*<br/>
inverse of: [*Replace Command with Function*](#replace-command-with-function)


:::: tabs
::: tab Before
```js
function score(candidate, medicalExam, scoringGuide) {
    let result = 0;
    let healthLevel = 0;
    // code
}
```
:::

::: tab After
```js
class Scorer {
    constructor(candidate, medicalExam, scoringGuide) {
        this._candidate = candidate;
        this._medicalExam = medicalExam;
        this._scoringGuide = scoringGuide;
    }

    function execute() {
        this._result = 0;
        this._healthLevel = 0;
        // code
    }
}
```
:::
::::


### Replace Command with Function

inverse of: [*Replace Function with Command*](#replace-function-with-command)

:::: tabs
::: tab Before
```js
class ChargeCalculator {
    constructor(customer, usage) {
        this._customer = customer;
        this._usage = usage;
    }

    excute() {
        return this._customer.rate * this._usage;
    }
}
```
:::

::: tab After
```js
function charge(customer, usage) {
    return customer.rate * usage;
}
```
:::
::::


## Dealings with Inheritance

### Pull Up Method

inverse of: [*Push Down Method*](#push-down-method)

:::: tabs
::: tab Before
```js
class Employee { /** code */ }

class Salesman extends Employee {
    get name() { /** code */}
}

class Engineer extends Employee {
    get name() { /** code */}
}
```
:::

::: tab After
```js
class Employee { 
    get name() { /** code */}
}

class Salesman extends Employee { /** code */ }
class Engineer extends Employee { /** code */ }
```
:::
::::

### Pull Up Field
inverse of: [*Push Down Field*](#push-down-field)


:::: tabs
::: tab Before
```java
class Employee { /** code */ } // JAVA

class Salesman extends Employee {
    private String name;
}

class Engineer extends Employee {
    private String name;
}
```
:::

::: tab After
```java
class Employee { 
    protected String name;
}

class Salesman extends Employee { /** code */ }
class Engineer extends Employee { /** code */ }
```
:::
::::


### Pull up Constructor body

:::: tabs
::: tab Before
```js
class Party { /** code */ }

class Employee extends Party {
    constructor(name, id, monthlyCost) {
        super();
        this._id = id;
        this._name = name;
        this._monthlyCost = monthlyCost;
    }
}
```
:::

::: tab After
```js
class Party {  
    constructor(name) {
        this._name = name;
    }
}

class Employee extends Party {
    constructor(name, id, monthlyCost) {
        super(name);
        this._id = id;
        this._monthlyCost = monthlyCost;
    }
}
```
:::
::::


### Push Down Method
inverse of: [*Pull Up Method*](#pull-up-method)


:::: tabs
::: tab Before
```js
class Employee extends Party {
    get quota() {/** code */}
}

class Engineer extends Employee { /** code */ }
class Salesman extends Employee { /** code */ }
```
:::

::: tab After
```js
class Employee extends Party { /** code */ }

class Engineer extends Employee { /** code */ }
class Salesman extends Employee { 
    get quota() {/** code */}
}
```
:::
::::


### Push Down Field

inverse of: [*Pull Up Field*](#pull-up-field)

:::: tabs
::: tab Before
```java
class Employee { // JAVA
    private String quota;
} 

class Engineer extends Employee { /** code */ }
class Salesman extends Employee { /** code */ }
```
:::

::: tab After
```java
class Employee { /** code */ } 

class Engineer extends Employee { /** code */ }
class Salesman extends Employee { 
    private String quota;
}
```
:::
::::

### Replace Type Code with Subclasses

subsummes: *Replace Type Code with State/Strategy*<br/>
subsummes: *Extract Subclass*<br/>
inverse of: [*Remove Subclass*](#remove-subclass)

:::: tabs
::: tab Before
```js
function createEmployee(name, type) {
    return new Employee(name, type);
}
```
:::

::: tab After
```js
function createEmployee(name, type) {
    switch(type) {
        case "engineer": return new Engineer(name);
        case "salesman": return new Salesman(name);
        case "manager": return new Manager(name);
    }
}
```
:::
::::

### Remove Subclass

formerly: *Replace Subclass with Fields*<br/>
inverse of: [*Replace Type Code with Subclasses*](#replace-type-code-with-subclasses)

:::: tabs
::: tab Before
```js
class Person {
    get genderCode() { return "X"; }
}
class Male extends Person {
    get genderCode() { return "M"; } 
}
class Female extends Person {
    get genderCode() { return "F"; } 
}
```
:::

::: tab After
```js
class Person {
    get genderCode() { return this._genderCode; }
}
```
:::
::::

### Extract Superclass

:::: tabs
::: tab Before
```js
class Department {
    get totalAnnualCost() { /** code */}
    get name() {/** code */}
    get headCount() {/** code */}
}

class Employee {
    get annualCost() { /** code */}
    get name() {/** code */}
    get id() {/** code */}
}
```
:::

::: tab After
```js
class Party {
    get name() {/** code */}
    get annualCost() { /** code */}
}

class Department extends Party {
    get totalAnnualCost() { /** code */}
    get headCount() {/** code */}
}

class Employee extends Party {
    get annualCost() { /** code */}
    get id() {/** code */}
}
```
:::
::::


### Replace Subclass with Delegate

:::: tabs
::: tab Before
```js
class Order {
    get daysToShip() {
        return this._warehouse.daysToShip;
    }
}

class PriorityOrder extends Order {
    get daysToShip() {
        return this._priorityPlan.daysToShip;
    }
}
```
:::

::: tab After
```js
class Order {
    get daysToShip() {
        return (this._priorityDelegate) 
            ? this._priorityDelegate.daysToShip
            : this._warehouse.daysToShip;
    }
}

class PriorityOrderDelegate {
    get daysToShip() {
        return this._priorityPlan.daysToShip;
    }
}
```
:::
::::


### Replace Superclass with Delegate

formerly: *Replace Inheritance with Delegation*

:::: tabs
::: tab Before
```js
class List {/** code */}
class Stack extends List {/** code */}
```
:::

::: tab After
```js
class Stack {
    constructor() {
        this._storage = new List();
    }
}

class List {/** code */}
```
:::
::::


