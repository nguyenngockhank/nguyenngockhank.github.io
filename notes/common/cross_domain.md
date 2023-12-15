# Cross Domain 


![CORS](https://lh3.googleusercontent.com/pw/ABLVV87NrAftbvIA1S99b0LKw-4DZOrdOOVN2p0TzhjHvWz2M7fyK7h76_b3I1MBOloyAzhe27wc_hxtgCb9hom4wGUtmobeIw4ByrppcwAYmUKc3nrkV0OX_u5gdl8d5SJAE_fOeD_wIYAhRjRJOeoHzwHlPP30u75EwUD6auUb79vnqXDUdlCSX24FUgErhFcvo98BQmpxgF16x_D9WfQ8HWKI1sLP4o5S_mn_kTitSLofY5Mh9c1ky-2QZZ_yMXPISv42z_dLpTH6_7m3PeQBh-l5C5xxo5whTVZqCtbnUbETg5M5kOisLWE0ecp4gz7CLBT0UwS-prxcvzXTaysy42R2i1ke4MJ803iafRp_6UgDyGRLS0JtRNl-IZYg_KR1QypRReE879dkx1ttG6qSxwkT4HSx7e3e-y3swtgk8RW5chZYPdSSV9jNIqFkP09w9-PiCXJ6XR9tfjXM4D7qI92Gf_2rCC_iTerxK2utmV2uWdPdehjFPJ7r3HMwndcLaVdAz7Ix4_rJV2zoP2G77-kq6bVULJie4pIg_djlFaEmwLW-8DvBR2FkcChb5PhNeEE3tjHHiyZ9cwzg4WHO3B4IFePb-kHcSOy3YQX6jRnyvBtZP8ghOVguwXVjYpImieIuTlxqoF6HRNIEVJhhuToqGR4umDrdGjK-L_VeTvE7CirWJpGX8phkPSKv-hxFna0U-UPjYZT1PwKxN9aCjuE7awgqXy3qdLV5v0MVYNefXf9L7i2YK2SRr9khfozlC2kf6umffgSykU2XIuYO7kz_TpEQkz8fL99MNCPsKUw-zZCVKB8uLlgppr11qt2btw4Zd8kkwPdHZ64ibqDr2ZG0DtgaGl2z63zzML-28AYeoG3IIqgBUYqFmM1Zxo4a0qxbzNBKoy0k_4AJTYMcBCegJ5PhZmRwVmhPXN1-kg=w564-h565-s-no-gm)

Web browsers use Cross-Origin Resource Sharing (CORS) to manage requests made to a different domain than the one serving the web page. It's a security mechanism to mitigate the risks of cross-site request forgery and other cross-site attacks.

To get a clear picture of how it works, let’s break down the CORS workflow:

1) Initiation of a request from a web page
The process starts with a web page (origin A) trying to access a resource of a different origin (origin B).

2) “Simple” or “non-simple” request check
Before initiating the actual request, the browser checks if the request is "simple" or "non-simple". A "simple" request typically includes methods like GET, POST, or HEAD and a limited set of headers. If the request is "non-simple", the browser initiates a preflight request.

3) Preflight request (for non-simple requests)
After the browser has completed its “non-simple” request check, if the request is “non-simple”, it will send an OPTIONS request to the target origin (origin B). The headers included will provide details of the actual request it wants to make.

4) Server response to preflight request
Once the server (origin B) receives the preflight request, it will send a response. If the server decides that the origin is allowed to access the resource, it will respond with a set of headers that stipulate so. The browser will reject the actual request if the server doesn't provide the right headers or if those headers don't match the details of the request itself.

5) The actual request is sent
Now that the preflight request is all out of the way (successful or not required), the browser can make the actual request to origin B. The request will include any necessary headers, credentials, or data.

6) Server response to the actual request
Once the server (origin B) receives the request, it then processes it and sends a response. Along with the response, the server will still send the appropriate CORS-related headers.

7) Browser enforcement
Last but not least, the browser will check the CORS headers in the response a final time. If everything checks out then the browser provides the response to the web page’s JavaScript. If not, then the browser will block access to the response and log a CORS error in the console.

CORS ensures that servers have control over who can access their resources. Browsers enforce these rules to protect users from potential security threats. Whilst CORS does introduce an additional layer of complexity, it provides an effective security measure to ensure safe cross-origin data sharing.

[Read more](https://twitter.com/NikkiSiapno/status/1735060129022881927)

---

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

- Cross-Origin Resource Sharing (CORS)
- Origin = scheme (protocol) + host (domain) + port

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

Ví dụ: Mọi chuyện đều yên ổn cho tới khi sếp tôi đọc được đâu và muốn nhét cái Json web token vào làm authentication 

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