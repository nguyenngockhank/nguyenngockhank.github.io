# React overview

## Key terms

### Components

Components are the building blocks of a React application. They are reusable and independent units of UI that can be combined to create complex user interfaces. React components can be either functional or class-based. Functional components are simple JavaScript functions that return JSX (JavaScript XML) elements, while class-based components are ES6 classes that extend the React.Component class.

Here's an example of a functional component in React:

```js
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

### JSX

JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It is used to define the structure and appearance of React components. JSX elements are transpiled into regular JavaScript function calls by the Babel compiler

### Virtual DOM

The Virtual DOM is a lightweight copy of the actual DOM (Document Object Model) maintained by React. It is a representation of the UI components and their state. React uses the Virtual DOM to efficiently update and render only the necessary parts of the UI when there are changes, resulting in improved performance.

### State

State is an object that holds data that can change over time in a React component. It represents the current state of the component and can be updated using the setState method. When the state of a component changes, React automatically re-renders the component to reflect the updated state.

### Props
Props (short for properties) are used to **pass data from a parent component to its child components**. They are read-only and cannot be modified by the child components. Props are passed as attributes to the child components in JSX.


## Best practices 

### Component Structure and Organization

**Single Responsibility Principle**: Each component should have a single responsibility and be focused on a specific task. This makes the code easier to understand, test, and maintain.

**Container and Presentational Components**: Separate cotainer components (responsible for data fetching and state management) from presentational components (responsible for rendering UI). This improves reusability and testability.

**Folder Structure**: Organize your components into folders based on their functionality or feature. This helps in finding and managing components as the project grows.

### State Management

**Use State Wisely**: Avoid unnecessary state and keep the state as minimal as possible. Use local component state for component-specific data and global state management libraries like Redux or MobX for application-wide state.

**Immutability**: Follow the principle of immutability when updating state. Use immutable data structures or libraries like Immutable.js to ensure predictable state updates and avoid bugs caused by mutable state.

### Performance Optimization

**Virtual DOM**: Leverage React's virtual DOM to efficiently update and render components. Avoid unnecessary re-renders by using `shouldComponentUpdate` or `React.memo` to optimize performance.

**Code Splitting**: Split your code into smaller chunks using techniques like dynamic imports or React.lazy to improve initial load times and reduce bundle size.

**Memoization**: Use memoization techniques like React.memo or `useMemo` to cache expensive computations and avoid unnecessary re-computations.

### Testing

**Unit Testing**: Write unit tests for your components and business logic using testing frameworks like Jest and testing utilities provided by React (e.g., React Testing Library). This helps catch bugs early and ensures code reliability.

**Integration Testing**: Test the interaction between components and different parts of your application to ensure they work together correctly.

**Snapshot Testing**: Use snapshot testing to capture the expected output of a component and detect unintended changes in subsequent test runs.

### Code Quality and Maintainability

**Linting**: Use a linter like ESLint to enforce coding standards and catch potential errors or code smells. Configure your linter to follow popular style guides like Airbnb or Standard.

**Code Reviews**: Conduct code reviews to ensure code quality, identify potential issues, and share knowledge among team members.
Documentation: Document your code, especially complex components or functions, to make it easier for others (including your future self) to understand and maintain the codebase.

## Optimize performance

1. Minimize Render Operations: ReactJS uses a virtual DOM to efficiently update the actual DOM. However, unnecessary re-renders can impact performance. To minimize render operations, use the shouldComponentUpdate lifecycle method or React's memo or PureComponent to prevent unnecessary re-renders.

2. **Use React Profiler**: React Profiler is a built-in tool that helps identify performance bottlenecks in your application. It provides insights into component render times, re-renders, and other performance metrics. Use React Profiler to identify and optimize slow-performing components.

3. **Code Splitting**: Splitting your code into smaller chunks and loading them on-demand can significantly improve performance. Use tools like Webpack's code splitting or React's lazy and Suspense to load components and resources only when needed.

4. **Optimize Network Requests**: Reduce the number and size of network requests by bundling and compressing your assets. Use tools like Webpack to bundle your JavaScript and CSS files, and enable gzip compression on your server to reduce file sizes.

5. **Memoize Expensive Computations**: If you have expensive computations or calculations in your components, consider memoizing them using libraries like `memoize-one` or `reselect`. Memoization caches the results of expensive computations, preventing unnecessary recalculations.

6. **Use React's Profiling Tools**: React provides various profiling tools like React DevTools and React Performance Devtool. These tools help you identify performance issues, analyze component render times, and optimize your application's performance.

7. **Optimize Images**: Images can significantly impact the performance of your application. Compress and optimize images using tools like ImageOptim or Squoosh to reduce their file size without compromising quality. Additionally, consider lazy-loading images that are not immediately visible on the screen.

8. **Avoid Unnecessary State Updates**: Minimize state updates by avoiding unnecessary re-renders. Use functional updates (`setState((prevState) => ...)` instead of `setState({...prevState, ...newState})`) to prevent unnecessary state merges.

9. **Use Memoization and Caching**: If your application fetches data from an API, consider implementing memoization and caching techniques to avoid redundant API calls. Libraries like swr or react-query can help with data fetching and caching.

10. **Optimize List Rendering**: When rendering large lists, use techniques like virtualization or windowing to render only the visible items. Libraries like react-window or react-virtualized can help optimize list rendering performance.

Remember, performance optimization is an ongoing process. Regularly monitor and profile your application to identify and address performance bottlenecks. Keep an eye on new ReactJS releases and best practices to stay up-to-date with the latest performance optimization techniques.