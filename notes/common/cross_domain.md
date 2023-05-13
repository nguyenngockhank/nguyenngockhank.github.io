# Cross Domain 

Same Origin Policy là một cơ chế bảo mật của trình duyệt. Nói ngắn gọn là Cross Domain =))

Dựa trên 3 thứ 
* Giao thức http / https
* Port
* Domain (subdomain cũng khác parent domain)

```
protocol :// domain :port
```

## Một số thứ ảnh hưởng 

### Cookie 

Cookie bị hạn chế bởi Same Origin Policy, các domain khác nhau không thể truy cập cookie của nhau.

### iframe 

Nếu iframe ko bị hạn chế, thì tương tác với nhau bằng `contentWindow` hoặc `contentDocument`

```javascript
function iframeRef( frameRef ) {
    return frameRef.contentWindow
        ? frameRef.contentWindow.document
        : frameRef.contentDocument
}

var inside = iframeRef( document.getElementById('one') )
```

Còn nếu bị hạn chế thì qua `postMessage`

```javascript
/// bắn message qua 
document.getElementById("child").contentWindow.postMessage("Hello", "http://example:4003"); 
```

```javascript
 window.onload = function() {
    window.addEventListener("message", function(e) {

        /// Kiểm tra xem tin nhắn có phải đến trang gốc hay không để đảm bảo tính bảo mật
        if (e.source != window.parent) {
            return;
        }

        /// Kiểm tra thêm domain cho bảnh
        if (e.origin !== "https://example.com") {
            return;
        }

        console.log(e.data);
    });
};

```

### script

Cái này không bị hạn chế bởi Same Origin Policy... JSONP là 1 chơi điếm =))) 

Ví dụ JSONP. Client tạo 1 thẻ script sau khi click cái núm 

```javascript
function clickButton() {
    var s = document.createElement("script");
    s.src = "demo_jsonp.php?callback=myDisplayFunction";
    document.body.appendChild(s);
}
```

Trên server 

```php
$outp = ...; /// get from db 
$callback = isset($_GET['callback']) ? ($_GET['callback'] : 'myFunc' ; 
echo $callback . "(" . json_encode($outp) . ")";
```

vậy là sau khi insert thẻ script vào cuối body thì hàm `myDisplayFunction` sẽ được gọi cùng với data server trả về =))) 


### Khác
- `link` và `@font-face` không bị ảnh hưởng
- `img`,  `video`, `audio` cũng không
- Websocket =)) là 1 giao thức khác nên cũng không nốt


----

## CORS (Cross-origin resource sharing)

Giúp AJAX vượt qua giới hạn =))

### Simple request

Là những request không cần `prelight request`, Các điều kiện dưới đây nếu nó lọt khe thì nó sẽ là Simple request:

Các phương thức 
- HEAD
- GET 
- POST

Các request chỉ xài 6 cái thuộc tính này: 
- Accept
- Accept-Language
- Content-Language
- Last-Event-ID
- Content-Type: 3 giá trị: *application/x-www-form-urlencoded*, *multipart/formdata* và *text/plain*


Request 
```javascript
var url = 'http://api.alice.com/cors';
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
// thêm data + xử lý các kiểu con đà điều ở đây
xhr.send();
```

```
GET /cors HTTP/1.1
Origin: http://localhost.com
Host: api.alice.com
Accept-Language: en-US
Connection: keep-alive
User-Agent: Mozilla/5.0...
```

Response
```
Access-Control-Allow-Origin: http://localhost.com
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: FooBar
Content-Type: text/html; charset=utf-8
```

**Access-Control-Allow-Origin** : trường bắt buộc, cho biết domain nào được chấp nhận xin xỏ 

**Access-Control-Allow-Credentials** : trường không bắt buộc. Trưởng này thông báo Cookie có cho phép gửi lên hay không 

Nếu cần thì thêm zô trong `withCredentials`. Mấy đồ như `jQuery`, `axios` cũng có config này.

```javascript
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
```

**Access-Control-Expose-Headers** : trường này cho biết được lụm thêm attribute trong response,ngoài 6 cái này Cache-Control, Content-Language, Content-Type, Expires, Last-Modified và Pragma. 


### Not a Simple request

Ừa =)) Thì như trên những request này trước khi chạy thực sẽ có  1 `prelight request` (method OPTIONS) đi thả thính trước. Nếu cầu hôn thành công rồi mới đem kiệu hoa vào nhà mà rước.

---

Ví dụ: Mọi chuyện đều yên ổn cho tới khi sếp tôi đọc được đâu và muốn nhét cái Json web token vào làm authenication 

```javascript
var url = 'http://api.alice.com/cors';
var xhr = new XMLHttpRequest();
xhr.open('PUT', url, true);
xhr.setRequestHeader('Authorization', 'Bearer <token>');
xhr.setRequestHeader('Content-Type', 'text/json');
// thêm data các kiểu con đà điều ở đây
xhr.send();
```

```
OPTIONS /cors HTTP/1.1
Origin: http://api.bob.com
Host: api.alice.com
Accept-Language: en-US
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: Authorization, Content-Type
```


Response
```
Access-Control-Allow-Origin: http://localhost.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: Authorization, Content-Type, X-Requested-With
Content-Type: text/html; charset=utf-8
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/plain
```

Nói chung túm lại 3 trường sau đây, cần lưu ý, khúc trên cho zui =)))) 

**Access-Control-Allow-Origin** : như trên simple request. Có tên trong danh sách này là cổng đầu là đã ưng rồi. Nhưng mà cấn thêm 2 điều kiện sau nữa. 

**Access-Control-Allow-Methods** : tương ứng với **Access-Control-Request-Method** của request. Em server chỉ chấp nhận các tư thế GET, POST, PUT. Thế mà đi đòi DELETE là bị từ chối ngay. 

**Access-Control-Allow-Headers** : Như trên. Nói chung ngoài mấy cái sính lễ standard, cái thèng nào là lạ là không được được.



## Config on Nodejs server

```js
// Create express server
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});
```