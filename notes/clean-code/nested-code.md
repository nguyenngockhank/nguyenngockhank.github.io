---
tags: [ "CleanCode"]
---

# Get Rid of Nested Code

## 1. Extract Methods

One effective way to reduce nested code is by extracting methods. When you encounter a block of code that performs a specific task or has a clear responsibility, you can extract it into a separate method. This not only reduces the nesting level but also improves code reusability and maintainability. By giving the extracted method a descriptive name, you can make the code more self-explanatory.

For example, consider the following nested code:

```java
public void processOrder(Order order) {
    if (order != null) {
        if (order.isValid()) {
            if (order.isPaymentReceived()) {
                // Process the order
            } else {
                // Handle payment not received
            }
        } else {
            // Handle invalid order
        }
    } else {
        // Handle null order
    }
}
```
By extracting the nested conditions into separate methods, the code becomes more readable:

```java
public void processOrder(Order order) {
    if (order != null) {
        if (isValidOrder(order)) {
            if (isPaymentReceived(order)) {
                // Process the order
            } else {
                handlePaymentNotReceived(order);
            }
        } else {
            handleInvalidOrder(order);
        }
    } else {
        handleNullOrder();
    }
}

private boolean isValidOrder(Order order) {
    // Validation logic
}

private boolean isPaymentReceived(Order order) {
    // Payment check logic
}

private void handlePaymentNotReceived(Order order) {
    // Handle payment not received
}

private void handleInvalidOrder(Order order) {
    // Handle invalid order
}

private void handleNullOrder() {
    // Handle null order
}
```

## 2. Use Guard Clauses

Another technique to reduce nested code is by using guard clauses. Guard clauses are conditional statements placed at the beginning of a method to handle exceptional cases or early returns. By handling exceptional cases first, we can eliminate unnecessary nesting and improve code readability.

For example, consider the following nested code:

```java
public void processOrder(Order order) {
    if (order != null) {
        if (order.isValid()) {
            if (order.isPaymentReceived()) {
                // Process the order
            } else {
                // Handle payment not received
            }
        } else {
            // Handle invalid order
        }
    } else {
        // Handle null order
    }
}
```

By using guard clauses, the code becomes more concise and easier to read:

```java
public void processOrder(Order order) {
    if (order == null) {
        handleNullOrder();
        return;
    }

    if (!order.isValid()) {
        handleInvalidOrder(order);
        return;
    }

    if (!order.isPaymentReceived()) {
        handlePaymentNotReceived(order);
        return;
    }

    // Process the order
}

private void handleNullOrder() {
    // Handle null order
}

private void handleInvalidOrder(Order order) {
    // Handle invalid order
}

private void handlePaymentNotReceived(Order order) {
    // Handle payment not received
}
```

## 3. Use Polymorphism and Inheritance

In some cases, nested code can be reduced by utilizing polymorphism and inheritance. By applying object-oriented principles, we can create a hierarchy of classes that encapsulate different behaviors. This allows us to eliminate conditional statements and replace them with polymorphic method calls.

For example, consider the following nested code:

```java
public void processShape(Shape shape) {
    if (shape instanceof Circle) {
        Circle circle = (Circle) shape;
        // Process circle
    } else if (shape instanceof Rectangle) {
        Rectangle rectangle = (Rectangle) shape;
        // Process rectangle
    } else if (shape instanceof Triangle) {
        Triangle triangle = (Triangle) shape;
        // Process triangle
    } else {
        // Handle unknown shape
    }
}
```

By using polymorphism and inheritance, the code becomes more extensible and maintainable:

```java
public abstract class Shape {
    public abstract void process();
}

public class Circle extends Shape {
    @Override
    public void process() {
        // Process circle
    }
}

public class Rectangle extends Shape {
    @Override
    public void process() {
        // Process rectangle
    }
}

public class Triangle extends Shape {
    @Override
    public void process() {
        // Process triangle
    }
}

public void processShape(Shape shape) {
    shape.process();
}
```

By applying these techniques, we can significantly reduce nested code and improve the readability, maintainability, and extensibility of our codebase. Remember, clean code is not just about making the code work, but also about making it easy to understand and modify.