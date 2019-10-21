# Chrome Tricks 

## Design mode

Chỉnh sửa text trên trang web :v 

```javascript
document.designMode = "on" || "off";
```

## console 

### Table để in data đẹp hơn =))
```javascript
console.table(object);
```

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


## Chặn 1 resource

Bước 1: giống trên kia

> Command+Shift+P (Mac) 
> hoặc Control+Shift+P (Windows, Linux, Chrome OS)

Bước 2: 
Chọn `Request Blocking`

Bước 3
`+` Thêm pattern


## Extensions

**Tiện ích**
- `AdBlock`: chặn quảng cáo hoho
- `Checker Plus for Gmail™`: notification cho email
- `Hola Free VPN Proxy Unblocker`: đổi IP
- `Form Filler`: Tự fill data vào form
- `Emoji Keyboard - Emojis For Chrome`: Icon Font 
- `J2TEAM Security`: bcs bảo vệ bản thân =))
- `Google Translate`: đọc sách báo j đó, double click dịch cho nhanh

**Hình ảnh**
- `Copyfish`: 1 công cụ OCR tách chữ từ hình ảnh
- `Full Page Screen Capture`: chụp full màn hình
- `Image Downloader`: tải ảnh từ trang, khỏi inspect html các kiểu

**Inspect**
- `Wappalyzer`: Kiểm tra web xây dựng bằng công nghệ gì
- `WhatFont`: tìm font đang sử dụng
- `Page Ruler`: đo đạc các kiểu

**Developer**
- `PerfectPixel by WellDoneCode (pixel perfect)`: Dùng so sánh design với hiện tại 
- `Custom JavaScript for websites`: Thêm JS vào website
- `SEOQuake`: Công cụ hỗ trợ SEO, kiểm tra Google Index, hạng Alexa, ... 
- `Checkbot: SEO, Web Speed & Security Tester`: kiểm tra đủ thứ 
- `JSONView`: Response trả về JSON thì tự format cho đẹp 
- `Postman`: Tạo RESTful API request
- `Postman Interceptor`: để kết nối browser với Postman
- `ModHeader`: sửa Param HEAD cho request
- `Vue.js devtools`: for Vue dev