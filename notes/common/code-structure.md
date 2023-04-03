# Code structure

## Package by Layer

Example: 
```
├── com.app
    └── controller
        ├── CompanyController
        ├── ProductController
        └── UserController
    └── model
        ├── Company   
        ├── Product
        └── User
    └── repository
        ├── CompanyRepository   
        ├── ProductRepository
        └── UserRepository
    └── service
        ├── CompanyService
        ├── ProductService
        └── UserService
    └── util
```

-> low cohesion

## Package by Feature

```
├── com.app
    └── company
        ├── Company
        ├── CompanyController
        ├── CompanyRepository        
        └── CompanyService
    └── product
        ├── Product   
        ├── ProductController
        ├── ProductRepository
        └── ProductService
    └── util
    └── user
        ├── User   
        ├── UserController
        ├── UserRepository
        └── UserService
```

- high cohesion within packages & low coupling between packages.
- reduces the need to navigate between packages
- allows some classes to set their access modifier package-private instead of public, so it increases **encapsulation**
- Package by Feature is like microservice architecture. Each package is limited to classes related to a particular feature. On the other hand, Package By Layer is monolithic. As an application grows in size, the number of classes in each package will increase without bound.

## Atomic Design Pattern:

- **Atoms**: Basic building blocks of matter, such as a button, input or a form label. They’re not useful on their own.
- **Molecules**: Grouping atoms together, such as combining a button, input and form label to build functionality.
- **Organisms**: Combining molecules together to form organisms that make up a distinct section of an interface (i.e. navigation bar)
- **Templates**: Consisting mostly of groups of organisms to form a page — where clients can see a final design in place.
- **Pages**: An ecosystem that views different template renders. We can create multiple ecosystems into a single environment — the application.


```
├── components
    ├── Buttons
        └── Delete
            ├── DeleteButton.jsx
            ├── styles.css
            └── test.js
        └── Submit
            ├── SubmitButton.jsx
            ├── styles.css
            └── test.js
    ├── Form
        └── Login
            ├── LoginForm.jsx
            ├── styles.css
            └── test.js
        └── Register
            ├── RegisterForm.jsx
            ├── styles.css
            └── test.js
    ├── styles
    ├── App.jxs
    └── index.js
```

## Read more
- [Atomic Design Pattern: How to structure your React application](https://medium.com/@janelle.wg/atomic-design-pattern-how-to-structure-your-react-application-2bb4d9ca5f97)
- [Package by Layer vs Package by Feature](https://medium.com/sahibinden-technology/package-by-layer-vs-package-by-feature-7e89cde2ae3a#:~:text=%E2%80%94%20Package%20by%20Feature%20allows%20some,set%20nearly%20all%20classes%20public%20.)
- [Atomic Design and ReactJS](https://danilowoz.com/blog/atomic-design-with-react)
- [react-atomic-design github](https://github.com/danilowoz/react-atomic-design)