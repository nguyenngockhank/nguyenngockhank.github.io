# React patterns

## Smart vs Pure Components

![Smart vs Pure Components](https://i.pinimg.com/originals/02/4d/69/024d69f194cf6d6e0c3dde3a066a8936.jpg)

**different names**
Often also preferred as other different names: 
- smart vs dumb components
- container vs presentation components
- stateful vs stateless component

**functions**
- Smart components are ones that has direct access to store (e.g import) and doesn't contain any styling.
- Pure components are components without inner state. They only receives react props from outside and render accordingly. 

::: tip coding rules of thumb
Pure components are predictable, keep the code base into simple understandable unit, and therefore, maintainable.

Pure components are hugely not attached to (mobx) store business logics so they are reusable in different business context given similar UI.
:::

We need to make use the best of it as much as possible:
- Prefer pure components over smart components whenever possible.
- **DO NOT MIX** pure component with smart component.
- Pure component should have story written in storybook with all possible realistic scenarios of props value inputs.
- Created storybook story scenarios must have ui-regression test cases.


## Rerendering

- Re-rendering is how React updates components with new data. Without re-renders, there will be no interactivity in our apps.
- State update is the initial source of all re-renders.
- If a component's re-render is triggered, all nested components inside that component will be re-rendered.
- During the normal React re-renders cycle (without the use of **memoization**), props change doesn't matter: components will rerender even if they don't have any props.
- We can use the pattern known as "**moving state down**" to prevent unnecessary re-renders in big apps.
- State update in a hook will trigger the re-render of a component that uses this hook, even if the state itself is not used.
- In the case of hooks using other hooks, any state update within that chain of hooks will trigger the re-render of a component that uses the very first hook.

### Elements passed as props
- A **Component** is just a function that accepts an argument **(props)** and returns **Elements** that should be rendered when this Component renders on the screen - is a **Component**.
```jsx
const A = () => <B />
```
- An **Element** is an object that describes what needs to be rendered on the screen, with the type either a string for DOM elements or a reference to a Component for components - is an **Element**.
```jsx
const b = <B />
```
- Re-render is just React calling the Component's function.
- A component re-renders when its element object changes, as determined by `Object.is` comparison of it before and after rerender
- When elements are **passed as props to a component**, and this component triggers a re-render through a state update, **elements** that are passed as props won't re-render.
- "children" are just props and behave like any other prop when they are passed via JSX nesting syntax:

```jsx
<Parent>
 <Child />
</Parent>

// the same as:
<Parent children={<Child />} />
```

## Configuration

### Element as props
- When a component renders another component, the configuration of which is controlled by props, we can pass the entire component element as a prop instead, leaving the configuration concerns to the consumer.

```jsx
const Button = ({ icon }) => {
 return <button>Submit {icon}</button>; // button doest control how icon looks like
};

// large red Error icon
<Button icon={<Error color="red" size="large" />} />;
```

- If a component that has elements as props is rendered conditionally, then even if those elements are created outside of the condition, they will only be rendered when the conditional component is rendered.
```jsx
const App = () => {
  // footer will be rendered only when the dialog itself renders
  // after isDialogOpen is set to "true"
  const footer = <Footer />;
  return isDialogOpen ? (<ModalDialog footer={footer} />) : null;
};
```
- If we need to provide default props to the element from props, we can use the `cloneElement` function for that.
```jsx
const Button = ({ appearance, size, icon }) => {
    // create default props
    const defaultIconProps = {
        size: size === 'large' ? 'large' : 'medium',
        color: appearance === 'primary' ? 'white' : 'black',
    };
    const newProps = {
        ...defaultIconProps,
        // make sure that props that are coming from the icon override  default if they exist
        ...icon.props,
    };
    // clone the icon and assign new props to it
    const clonedIcon = React.cloneElement(icon, newProps);
    return <button>Submit {clonedIcon}</button>;
};
```
- This pattern, however, is very fragile. It's too easy to make a mistake there, so use it only for very simple cases.

### render props

- If a component that has elements as props wants to have control over the props of those elements or pass state to them, you'll need to convert those elements into render props:
```jsx
const Button = ({ renderIcon }) => {
    const [someState, setSomeState] = useState()
    const someProps = { ... };
    return <button>Submit {renderIcon(someProps, someState)}</button>;
}

<Button renderIcon={(props, state) => <IconComponent {...props} someProps={state} /> } />
```
- Children also can be render props, including "nesting" syntax.
```jsx
const Parent = ({ children }) => {
    return children(somedata);
};
```
- Render props were very useful when we needed to share stateful logic between components without lifting it up.
- But hooks replaced that use case in 99% of cases.
- Render props for sharing stateful logic and data can still be useful even today, for example, when this logic is  attached to a DOM element.


## Memoization
- React compares objects/arrays/functions by their reference, not their value. That comparison happens in hooks' dependencies and in props of components wrapped in `React.memo` 
- The inline function passed as an argument to either `useMemo` or `useCallback` will be re-created on every re-render. `useCallback` memoizes that function itself, `useMemo` memoizes the result of its execution.
- **Memoizing props** on a component makes sense only when:
  - This component is wrapped in `React.memo` .
  - This component uses those props as dependencies in any of the hooks.
  - This component passes those props down to other components, and they have either of the situations from above.
- If a component is wrapped in `React.memo` and its re-render is triggered by its parent, then React will not re-render this component if its props haven't changed. In any other case, rerender will proceed as usual.
- Memoizing all props on a component wrapped in `React.memo` is harder than it seems. Avoid passing non-primitive values that are coming from other props or hooks to it.
- When memoizing props, remember that "children" is also a nonprimitive prop that needs to be memoized.

```jsx
const ParentMemo = React.memo(Parent);

const Component = () => {
  const child = useMemo(() => <ChildMemo />, []);
  return (
    <ParentMemo>
      <ChildMemo />
    </ParentMemo>
  );
};
```

## Higher Order Component (HOC)

```tsx
export const withSuppressKeyPress = (Component) => {
  return (props) => {
    const onKeyPress = (event) => event.stopPropagation()
  
   return (
     <div onKeyPress={onKeyPress}>
       <Component {...props} />
    </div>
   )
 }
}
```

- A higher-order component is just a function that accepts a component as an argument and returns a new component. That new component renders the component from the argument. 
- We can inject props or additional logic into the components that are wrapped in a higher-order component.
- We can pass additional data to the higher-order component, either through the function's argument or through props.

## Debounce / throttle

```tsx
const useDebounce = (callback) => {
 const ref = useRef();
 useEffect(() => {
   ref.current = callback;
 }, [callback]);

 const debouncedCallback = useMemo(() => {
   const func = () => { 
    ref.current?.()
   }
   return debounce(func, 1000);
 }, [])
 return debouncedCallback
};
```

- We use debounce and throttle when we want to skip some function's executions that were fired too often.
- In order for those functions to work properly, they should be called only once in a component's life, usually when it's mounted. 
- If we call them in the component's render function directly, the timer inside will be re-created with every re-render, and the functions will not work as expected.
- To fix this, we can memoize those with `useMemo` or through the usage of Refs.
- If we simply memoize them or use Refs "naively", we won't have access to the component's latest data, like state or props. This is happening because a closure is created when we initialize Ref, which freezes values at the time it's created.
- To escape the closure trap, we can leverage the mutable nature of the Ref object and gain access to the latest data by constantly updating the "closed" function in `ref.current` within `useEffect` .

## Anti patterns

An anti-pattern is a common solution to a problem that, despite initially appearing effective, ultimately leads to more negative consequences than positive ones. It's essentially a bad practice that's widely used.
Common anti-patterns in React 

### Props drilling
the practice of passing props through multiple levels of a component tree in React. While it might seem straightforward at first, it can lead to several issues as your application grows:

**Problems**
- Increased complexity: As the component tree deepens, managing and passing props becomes increasingly convoluted.
- Reduced maintainability: Changes to the prop structure can require modifications in multiple components.
- Performance impact: Unnecessary re-renders can occur if props are passed down to components that don't use them.

**Solution**
Use store or context for avoiding props drilling

### In-component data transformation
In-component data transformation refers to the process of manipulating data within a React component before rendering it to the UI. This is often necessary when the data received from an API or other source doesn't match the exact format required for display.

**Problems**
- Lack of clarity: Combining data fetching, transformation, and rendering tasks within a single component makes it harder to pinpoint the component’s exact purpose 
- Reduced reusability: Should another component require the same or a similar transformation, we’d be duplicating logic
- Testing challenges: Testing this component now requires considering the transformation logic, making tests more convoluted

**Solution**
Use Anti-corruption layer pattern

![Anti-corruption in react](https://i.pinimg.com/originals/9a/d6/95/9ad695dad2e32ba07f720f1726b00b9e.png)

### Duplicated code
Duplicated code refers to code segments that appear multiple times within a software project. It's often a sign of code redundancy and can lead to various problems.

**Examples of Duplicated Code:**
- Identical code blocks: Exact copies of code in different parts of the program.
- Similar code logic: Code with the same functionality but implemented differently.
- Code with minor variations: Code that is almost identical but with slight differences.

**Problems**
- Increased maintenance effort: Changes need to be made in multiple places.
- Higher chances of errors: Inconsistencies can arise when updating one copy but not the others.
- Reduced code readability: Code becomes harder to understand with repeated sections.
- Lower code reusability: Potential for creating reusable functions or modules is missed.

**Solution**
The DRY (don’t repeat yourself) principle comes to the rescue here. 

By centralizing common logic into utility/helper functions or hooks or higher-order components (HOCs), the code becomes more maintainable and readable, and less prone to errors.

### Complicated logic in views
The beauty of modern frontend frameworks, including React, is the distinct separation of concerns. By design, components should be oblivious to the intricacies of business logic, focusing instead on presentation. However, a recurrent pitfall that developers encounter is the infusion of business logic within view components. This not only disrupts the clean separation but also bloats components and makes them harder to test and reuse.

**Problems**
- Reusability: If another component requires a similar filter, the logic would need to be duplicated 
- Testing: Unit testing becomes more complex as you’re not just testing the rendering, but also the business logic 
- Maintenance: As the application grows and more logic is added, this component can become unwieldy and harder to maintain

### Long component with too much responsibility
React encourages the creation of modular, reusable components. However, as features get added, a component can quickly grow in size and responsibility, turning into an unwieldy behemoth. A long component that manages various tasks becomes difficult to maintain, understand, and test.

A component violates the single-responsibility principle (SRP), which advocates that a component should fulfill only one function. By taking on multiple roles, it becomes more complex and less maintainable.

**Solution**
Use separation of concern principle. Look the image,

![layered arch in react](https://i.pinimg.com/originals/a6/71/45/a6714521c7ad850971f539179c021a55.png)

It's just an example that shows how to extract a long or complicated code into pieces

**Applying separation of concern**
- Split code into layers 
  - UI layer
  - Business logic layer
  - Infrastructure layer
- At UI layer
  - Container (Smart) component 
  - Presentational (Dump) component
  - hooks hold logic in UI
- At business layer
  - Business models (contract) that Infrastructure layer & UI layer must follow
  - ViewModel and DTO (currently we only use DTO)
- At Infra layer
  - Fetcher: request to API server, Blockchain to get the data from remote server
  - Adaptor: functions that transform responses from remote data source into the business models. 
  - Some query to get data from local (cookie, localStorage, indexeddb, ...)  
  - ...