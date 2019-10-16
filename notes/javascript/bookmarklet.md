# Bookmarklet

## Bookmarklet là cái chi?
::: tip
Bookmarklets are traditionally small pieces of unobtrusive JavaScript which can be easily executed via a "bookmarks" or "favourites" feature in a web browser
:::

Nói chung là một đoạn javascript ngắn (có thể thực thi qua Bookmarks hoặc Favorites của browser) 

Ví dụ: để disable 1 link 

```html
<!-- Điều này sẽ khiến scroll về đầu trang -->
<a href="#">Hi</a>

<!-- Thay vào đó, ta hay làm -->
<a href="javascript:void(0)">Hi</a>
```

Ở đây `javascript:void(0)` là 1 Bookmarklet.

## Làm gì được?

Tùy... mục đích thôi, cũng là js mà... ví dụ 

### Chuyển chế độ Darkmode 

- Giả sử ta xài Chrome
- `Right click` vào `thanh Bookmark ` -> chọn `Add Page`
- Nhập vào trường `Name`: **`DarkMode Bookmarklet`**
- Nhập vào trường `URL` bằng đoạn code dưới đây 
```js
javascript:!function(d)%7Bd.head.appendChild(d.createElement(%27style%27)).innerText%3D%27html,img,video%7B-webkit-filter:invert(1)hue-rotate(180deg)%3Bfilter:invert(1)hue-rotate(180deg)%7Dbody%7Bbackground:%23000%7D%27%7D(document)%3B
```
- Vào 1 link nào đó... giả sử [wiki của tui](https://nguyenngockhank.github.io/)
- Click vào cái **`DarkMode Bookmarklet`** nãy ta vừa tạo trên `thanh Bookmark` ^^

## Tạo bookmarklet

Nhìn đoạn code trên kia ta tưởng ko phải JS. Nhưng hãy decode cái khúc sau `javascript:`: 

```js
decodeURIComponent('!function(d)%7Bd.head.appendChild(d.createElement(%27style%27)).innerText%3D%27html,img,video%7B-webkit-filter:invert(1)hue-rotate(180deg)%3Bfilter:invert(1)hue-rotate(180deg)%7Dbody%7Bbackground:%23000%7D%27%7D(document)%3B')

// ta sẽ có 
"!function(d){d.head.appendChild(d.createElement('style')).innerText='html,img,video{-webkit-filter:invert(1)hue-rotate(180deg);filter:invert(1)hue-rotate(180deg)}body{background:#000}'}(document);"
```

**Từ Decode tới Encode**

Nôm na là `tạo ra 1 anonymous function` rồi biến nó thành `string` rồi `encodeURIComponent` để Browser có thể hiểu nó là 1 URL hợp lệ 

**Tool tạo cho nhanh**

[bookmarklet creator](https://mrcoles.com/bookmarklet/)


## References

- [How to Create a JavaScript Bookmarklet](http://www.dev-hq.net/posts/1--create-javascript-bookmarklet)
- [Bookmarklet Creator](https://mrcoles.com/bookmarklet/)
