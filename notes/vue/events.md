# Events

## Chuột trái, phải, giữa các kiểu

```html
<button @click.right="alert(2)">Click me!</button>
```
- `.left`
- `.middle`
- `.right`


## Native Events

Bind native event (click, focus, ...) vào những component không thuộc html thì phải cần có `.native`

```html
<base-input @focus.native="onFocus"></base-input>
```

## Event Modifiers 

Xem ví dụ dưới 

```html
<div @click="alert(1)">
    <button @click="alert(2)">Click me!</button>
</div>
```

Nếu bạn click button, thì sẽ hiện cả 2 thông báo. Để dẹp cái hiện tượng này, bạn sẽ cần sử dụng `Modifiers`

```html
<div @click="alert(1)">
    <button @click.stop="alert(2)">Click me!</button>
</div>
```

Có thể sử dụng `@click.prevent.stop` chấm nhiều lần như vậy vẫn được 

**Danh sách do viện khoa học Vue cung cấp**
- `.stop` tương đương JS ta hay viết `event.stopPropagation()`
- `.prevent` tương đương `event.preventDefault()` 
- `.capture` tương đương `target.addEventListener(type, listener, { capture: true })` 
- `.once` tương đương `target.addEventListener(type, listener, { once: true })` 
- `.passive` tương đương `target.addEventListener(type, listener, { passive: true })` 
- `.self` tương đương một mớ code để tránh check target click từ element con. Nghĩa là chỉ nhận những event từ chính nó, ko nhận từ element con.   


[Full docs về Event Modifiers ](https://vuejs.org/v2/guide/events.html#Event-Modifiers) 

[Syntax addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Syntax)


## Key Modifiers

```html
<input v-on:keyup.enter="submit">
```

- `.enter`
- `.tab`
- `.delete` (captures both “Delete” and “Backspace” keys)
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

**Định nghĩa thêm**

```javascript
// enable `v-on:keyup.f1`
Vue.config.keyCodes.f1 = 112
```

## System Modifier Keys

- `.ctrl`
- `.alt`
- `.shift`
- `.meta` ( command trên mac, windows trên window )

```html
<!-- Alt + C -->
<input @keyup.alt.67="clear">

<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>


<!-- this will only fire when Ctrl and no other keys are pressed -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- this will only fire when no system modifiers are pressed -->
<button @click.exact="onClick">A</button>
```

---

[Keyboard Event Viewer](https://w3c.github.io/uievents/tools/key-event-viewer.html)