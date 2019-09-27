# Chrome Tricks 

## Design mode

Chỉnh sửa text trên trang web :v 

```javascript
document.designMode = "on" || "off";
```

## console 

### Table để in data đẹp hơn =))

> console.table(object);


### Đo thời gian, benchmark đồ 

```javascript
console.time('myTime'); //Starts the timer with label - myTime

for ( let i = 0; i < 100000; ++i ) {
    // do sutff 
}

console.timeEnd('myTime'); //Ends the timer with Label - myTime

```

**Output**
> myTime: 1.301025390625ms


## Print mode 

Bật chế độ print mode để style... chứ `Ctrl + P` riết chắc mệt mỏi 

[Bài viết này](https://developers.google.com/web/tools/chrome-devtools/css/print-preview)

**Cách làm** 

Bước 0: 
> Bật developer tool lên, không biết thì... đi ngủ thôi ... xỉn roài

Bước 1: 
> Command+Shift+P (Mac) 

> hoặc Control+Shift+P (Windows, Linux, Chrome OS)

Bước 2: 

> Nhập `Rendering`  chọn `Show Rendering`

Bước 3: 

> Tại tab render `Emulate CSS media` chọn `print`.


