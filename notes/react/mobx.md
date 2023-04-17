# React with MobX

## Mobx Dereference values late

When using `mobx-react` it is recommended to dereference values as late as possible. This is because MobX will re-render components that dereference observable values automatically. If this happens deeper in your component tree, less components have to re-render.

*Slower*:
```jsx
<DisplayName name={person.name} />
```

*Faster*:
```jsx
<DisplayName person={person} />
```

In the faster example, a change in the `name` property triggers only `DisplayName` to re-render, while in the slower one the owner of the component has to re-render as well. There is nothing wrong with that, and if rendering of the owning component is fast enough (usually it is!), then this approach works well

[Read more](https://mobx.js.org/react-optimizations.html#dereference-values-late)

### Highlights
- Where we use `.property` from a store, mobx would observe the component at that location and re-render whenever value of `property` changes.
- Therefore, it's more preferable to send the whole store from the parent component into child component. That's why we have the concept of `driver` in the next chapter.

## Component Driver

Driver is a TypeScript type definition driving the the rendering of a pure component.

```jsx
interface Driver {
  readonly text: string;
  readonly disabled?: boolean;
  onClick(): void;
}

interface IProps {
  driver: Driver;
}

export const ButtonSocialFacebook = observer((props: IProps) => {
  const { driver } = props;

  return (
    <sc.ButtonSocialFacebook
      disabled={driver.disabled}
      onClick={driver.onClick}
    >
      <IconSvg
        color={etWhite}
      />
      {driver.text}
    </sc.ButtonSocialFacebook>
  );
});
```

## Others

- [Using Mobx As A State Manager In React Native Applications](https://www.smashingmagazine.com/2020/08/mobx-state-manager-react-native-applications/)
- [React integration](https://mobx.js.org/react-integration.html)