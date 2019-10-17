# CSS Tricks

## Không cần sử dụng `nl2br` 

`nl2br` là 1 hàm biến ký tự `\n` thành thẻ `<br />` để hiển thị trên web.

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


## Giao diện tràn chữ

```css
.truncate {
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; /* ellipsis là 3 chấm =)) ... */
}
```


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



## Loại bỏ Event của JS

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

