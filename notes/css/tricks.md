# Tricks

## Terms
![CSS Terms](https://i.pinimg.com/564x/48/f9/a9/48f9a9215a93e06954e1184a8cda39a8.jpg)


## Text style

### Text overflow

```css
.truncate {
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* ellipsis là 3 chấm =)) ... */
}
```

### Text with Background 

![Text with Background](https://i.pinimg.com/originals/c4/8c/b7/c48cb71f0d139d48c018fb55d6dc99e9.jpg)

### White-space

![White-space](https://i.pinimg.com/564x/24/1b/02/241b028d364d0a6ab24f2b45f54ceb8a.jpg)

`nl2br` is a php function to convert character`\n` into tag `<br />` in a strings. In this case, we can use a css property to achieve this case

```css
.my-content {
  white-space: pre-line;
}
```

- `normal`: default - xuống hàng khi hết chỗ
- `nowrap` : ko bao giờ xuống hàng cho tới khi gặp thẻ `<br >`
- `pre`: hoạt động giống thẻ `<pre />`, xuống hàng khi gặp ký tự `\n` (new-line) 
- `pre-line`: xuống hàng khi hết chỗ và gặp ký tự `\n` (new-line)  
- `pre-wrap`: giống `pre-line` nhưng giảm khoảng trắng hiển thị


## Gradient border 

![Gradient border](https://i.pinimg.com/736x/b2/e5/22/b2e52283b18c8aa237adf8d8e0280416.jpg)


## Center image

### Parent relative, child absolute

```scss
 .video-thumbnail {
    position: relative;

   .play-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
}
```
## Shadow 

![Shadow](https://i.pinimg.com/564x/7c/c5/a2/7cc5a24a50aa07620a4da91f5bcc9492.jpg)

## Dark mode

Check if user prefers dark mode

**In CSS**
```css
@media (prefers-color-schema: dark) {
  /* scheme */
}

@media (prefers-color-schema: light) {
  /* scheme */
}
```

![Dark mode](https://i.pinimg.com/564x/d1/f7/ea/d1f7ea19f5313c4b1a738ec471cd43d4.jpg)


## Hình trắng đen (Thanos style)

```css
img {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
}
```

## Đánh index cho elements

[Demo](https://www.w3schools.com/cssref/pr_gen_counter-increment.asp)

```css
body {
  /* Set "my-sec-counter" to 0 */
  counter-reset: my-sec-counter;
}

h2::before {
  /* Increment "my-sec-counter" by 1 */
  counter-increment: my-sec-counter;
  content: "Section " counter(my-sec-counter) ". ";
}
```



## Remove js events

Add event các kiểu bằng JS, vẫn éo hiểu tại sao thì nhớ thuộc tính này của CSS

```css
div.ex1 {
  pointer-events: none;
}
```

## System font stack

Lợi dụng những font có sẵn mặc định trong OS... 

### Cách 1 

```css
/* System Fonts as used by GitHub */
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
```

### Cách 2

```css
/* Define the "system" font family */
@font-face {
  font-family: system;
  font-style: normal;
  font-weight: 300;
  src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
}

/* Now, let's apply it on an element */
body {
  font-family: "system";
}
```

## Loading animation
![Loading animation](https://i.pinimg.com/564x/92/47/6d/92476df901c2f71868433b7ab2ed6582.jpg)

## Using video instead of animated gif

![Using video instead of animated gif](https://i.pinimg.com/736x/61/49/e3/6149e32721f6eeda55550cd5e7377208.jpg)

## Shortcuts

![Shortcuts](https://i.pinimg.com/564x/ea/b7/d9/eab7d9c85dda2bac54a361960a499ee9.jpg)

