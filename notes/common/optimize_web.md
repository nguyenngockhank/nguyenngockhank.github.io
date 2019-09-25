# Performance website

Câu hỏi muôn thuở đi phỏng vấn chắc gặp hoài lun :v kkkk nhưng không đơn thuần là đối phó, mà là để ghi nhớ rồi sau này áp dụng hoy 

***:gem: KIM CHỈ NAM***
------

:thumbsup: Cái mục đích, mục tiêu khi mà tối ưu website đó là nhanh hơn, mượt hơn, xì mút hơn... chủ yếu là tạo thêm phần sung sướng tột đỉnh cho người dùng :star2:

Để mà có thể tối ưu được website hiệu quả, các bạn nên biết được khi người dùng gõ `mywebsite.com` trên trình duyệt rồi enter sẽ xảy ra chuyện gì? Chuyện gì xảy ra trên Browser, chuyện gì trên server, chuyện gì xảy ra trên internet :v ahihi

:v: Mình có thể ví dụ ra như sau:
- Browser sẽ tìm tới DNS Server -> coi địa chỉ IP của domain
- Browser sẽ tạo request tới server đích (để tải HTML)
- Trên server khi nhận request của Browser sẽ xử lý đưa ra HTML response... rồi gửi lại Browser
- Browser nhận HTML ... parse HTML từ trên xuống dưới, và nếu gặp phải resource (CSS, JS, Fonts, Images,...) nào đó để hiển thị thì tạo request để tải các resource theo một độ ưu tiên... nào đó =))

:metal: Một vài phương thức để hiện thực hóa chuyện đó như là 
- giảm số lượng, số lần request tới server của browser
- giảm khối lượng & thời gian response
- giảm sự ngăn cản render trên browser
- xử lý trước một số thao tác khi CPU rãnh... 

---

:ok_hand: Mình sẽ giới thiệu, từ trên xuống dưới, từ code ít tới code nhiều =))

- [⚡️ Gzip](#zap-gzip)
- [⚡️ HTTP Cache Header](#zap-http-cache-header)
- [⚡️ Resource hints](#zap-resource-hints)
- [⚡️ Script defer / async](#zap-script-defer--async)
- [⚡️ CDN (Content Delivery Network)](#zap-cdn-content-delivery-network)
- [⚡️ CSS Sprite](#zap-css-sprite)
- [⚡️ Internal CSS](#zap-internal-css)
- [⚡️ Fonts](#zap-fonts)
- [⚡️ Hình ảnh](#zap-hình-ảnh)
- [⚡️ Không load dư thừa ](#zap-không-load-dư-thừa)
- [⚡️ Lazy load](#zap-lazy-load)
- [⚡️ ADM (Asynchronous Module Definition)](#zap-adm-asynchronous-module-definition)
- [⚡️ Bundle Assets](#zap-bundle-assets)
- [⚡️ Minimize Assets](#zap-minimize-assets)
- [⚡️ Cache ...](#zap-cache-)
- [⚡️ Tối ưu Database](#zap-tối-ưu-database)
- [⚡️ Service worker](#zap-service-worker)
- [⚡️ CSS Rendering Performance](#zap-css-rendering-performance)
- [⚡️ CSS BEM](#zap-css-bem)
- [⚡️ Short polling, Long polling, WebSocket](#zap-short-polling-long-polling-websocket)
- [⚡️ Sử dụng Tools](#sử-dụng-tools)
- [☔️ BasketJS](#umbrella-basketjs)
- [☔️ Deferred CSS](#umbrella-deferred-css)




## :zap: Gzip
- Cách này server sẽ trả về những file đã được nén lại. Cách hoạt động của Gzip thì được hỗ trợ bởi các Browser 4.0 hết roài, khỏi lo. 
- Để kích hoạt cái này cũng tùy vào cái platform bạn sử dụng :v có thể cấu hình trong `.htaccess`, `apache`, `nginx`, ... 
- Thấy response trả về có: `Accept-Encoding: gzip, ...` là hiểu được nén rồi. *Lưu ý*: đừng để sót các đuôi extension file từ image tới fonts, tới html, css, js, cứ j mà trả về server là nén hết đi =)) 
- Tool kiểm tra: [Link](https://www.websiteplanet.com/webtools/gzip-compression/) thấy còn Uncompressed page size là có nghĩa có phần còn chưa nén =))

## :zap: HTTP Cache Header
- Cách này là thêm vào vài thuộc tính lên header của response js, css, fonts, images,... để kích hoạt công năng đặc biệt của browser... [Link tham khảo](https://www.keycdn.com/blog/http-cache-headers)
- Cách làm thì tùy vào cái công nghệ bạn làm luôn. Có thể là `.htaccess`, `apache`, `nginx`, hoặc là trong code ...


## :zap: [Resource hints](https://www.w3.org/TR/resource-hints/) 
- `preload`: đặt độ ưu tiên cao khi browser load tài nguyên, ko chặn render. Thường sử dụng cho css, font, image.
- `prefetch`: sau khi load xong những resouce cần thiết, browser sẽ nạp ngầm những preconnect chuẩn bị sử dụng trong tương lai. 
- `prefetch-dns`: DNS requests thì rất nhỏ, nhưng độ trễ đôi khi là rất lớn. Đây là giải pháp cho vấn đề đó.
- `preconnect`: cái này giống như trên nhưng gồm 3 bước `DNS lookups`, `TLS negotiations`, `TCP handshakes`. Làm nhiều hơn cái trên 2 bước cuối.
- `prerender`: cái này thì hơi dữ dằng :v cho ngầm load trước cái trang luôn, bao gồm js, css, ... 


## :zap: Script defer / async
- Chúng ta thường đem hết các thẻ `<script>` về cuối footer để tránh blocking sự render của browser. 
- Nay HTML5 cho chúng ta có nhiều cách hơn
    - `<script async >` load đồng bộ, và browser làm việc browser, script làm việc script, script load xong tự execute =))) thường sử dụng cho: Google Analytics, [Sentry](https://sentry.io/welcome/), User Log, ...
    - `<script defer >` khi nào document parsed xong thì mới execute script
    - `<script>` chạy mặc định, khi nào script chạy xong thì parse DOM tiếp 

## :zap: CDN (Content Delivery Network)
Mình sẽ ko giải thích CDN là gì và làm gì đâu? Mình chỉ giải thích tại sao nó có thể giảm số lần request thôi.

- Vd bạn có 2 website: `webcuatui.com` và `sub.webcuatui.com` cả 2 website đều sử dụng JQuery giống nhau nhưng URI khác nhau `http://webcuatui.com/assets/js/jquery.js` và `http://sub.webcuatui.com/assets/js/jquery.js`. Điều này khiến browser load 2 lần nếu truy cập vào 2 web. 
- Thế cho nên khi sử dụng CDN bạn sẽ sử dụng chung 1 URI thì browser chỉ load lần đầu thôi. 
- Cách nào cũng ưu nhược điểm riêng... ví dụ khi sử dụng CDN thì mất công phải mất công truy cập DNS Server, phụ thuộc vào 3rd party, tốn tiền =)) ... 


## :zap: CSS Sprite
- Cách này là gôm các hình ảnh thành 1 tấm, rồi sử dụng css background xử lý... mục đích để giảm bớt request tới server
- [Bài văn mẫu](https://www.w3schools.com/css/css_image_sprites.asp)

## :zap: Internal CSS
- Nghĩa là đem hết CSS vào vào trong HTML, không dùng external thẻ `link`
- Vì browser xem đó là tài nguyên chặn sự render

*Note*: 
- Tất nhiên phải sửa lại các đường dẫn image, `@font-face` các kiểu.
- Cách này luyện không cẩn thận sẽ bị tẩu hỏa nhập ma 😜 File css mà cả chục MB thì đây là sai sách. 

## :zap: Fonts
- Case 1: bạn xài fonts awesome bạn có muốn sử dụng có 10 icon mà phải load tới 300 cái icon khác không. Tất nhiên ai cũng bảo là *éo rồi nhưng làm như thế nào? Tool này sẽ giúp bạn chỉ chọn những icon mà bạn muốn. [IcoMoon](https://icomoon.io/)

- Case 2: bạn xài google fonts mà lại muốn tải font đó zìa host của bạn để bạn có thể tự lo phần cache. Tìm mãi mới ra cái [tool này](https://google-webfonts-helper.herokuapp.com/fonts)

- Case 3: bạn desiner đưa bạn 1 cái template khoảng 7,8 font custom gì đó, solution nhanh trong case này là bạn nên gửi 1 lời cảnh báo tới PM và ép thèng designer làm lại 1 template khác ít fonts hơn. Thế nhưng ... PM vẫn cứng đầu thì sao? Solution: hãy display font System trước, sau đó font custom load xong thì hiển thị nó lên với 1 dòng code CSS.

```css
@font-face { 
    font-family: Helvetica; 
    font-display: swap; /* Mặt trời chân lý là đây */
}
```
À ... thèng bên Microsoft chưa hỗ trợ tính năng này nhé =))) Nhưng có hơn ko... cứ thêm vào đi =)) 


## :zap: Hình ảnh
Hình ảnh là thứ nặng nề nhất trong khi browser render á :v 

- Resize hình ảnh, chỉ vừa với kích cỡ cần render thôi, không cần to quá :p
- Giảm / nén chất lượng hình ảnh
- Loại bỏ các meta data trong file
- Tools online: 
    - [JPEG Optimizer](http://jpeg-optimizer.com/)
    - [Kraken](https://kraken.io/web-interface)
    - [Optimizilla](http://optimizilla.com/)
    - [ImageRecycle](http://enviragallery.com/refer/imagerecycle/)
    - [CompressNow](https://compressnow.com/)
    - [Trimage](https://trimage.org/)
    - [Online Image Optimizer](http://tools.dynamicdrive.com/imageoptimizer/)
    - [Tiny PNG](https://tinypng.com/)
    - [Resize Photos](http://www.resize-photos.com/)
    - [GiftOfSpeed](https://www.giftofspeed.com/tools/)
    - [Compressor.io](https://compressor.io/compress)
    - [JPEGmini](http://www.jpegmini.com/)
    - [PNGGauntlet](https://pnggauntlet.com/)
- Packages: có thể kết hợp vs webpack, hay grunt, gulp j đó :D
    - [imagemin](https://www.npmjs.com/package/imagemin) 
- Serve next-Gen Formats (JPEG 2000, JPEG XR, WebP). Tham khảo [link google](https://developers.google.com/web/tools/lighthouse/audits/webp)
- Responsive images [Link ví dụ](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images). Cách này dùng feature mới của HTML5. Hoặc có thể thêm vào [lazysizes](https://github.com/aFarkas/lazysizes) có hỗ trợ feature này, cũng như lazy load.


## :zap: Không load dư thừa 
ví dụ: 
- Bạn xài bootstrap thì có phần [Customize](https://getbootstrap.com/docs/3.4/customize/) để chọn phần bạn cần thôi...
- Hoặc bạn xài [Lodash](https://lodash.com/) thì không cần load full mà cần gì load đó thôi 
```javascript
var _ = require('lodash'); // không nên load full như này 

var at = require('lodash/at'); /// cần gì load đó thôi :D 
```
- Icon Fonts thì [IcoMoon](https://icomoon.io/) mình có nói ở trên rồi
- Cách khổ dâm: Chrome có nhận biết được dòng code nào đã được chạy trên JS và CSS 
    1. Trên Chrome mở devtools lên ( Command + Option + J )
    2. Mở search lên ( Command + Shift + P )
    3. Gõ vào "Show Coverage" > Click vào 
    4. Nhìn dưới đáy có cái toolbar > Click vào tab "Coverage"
    5. Kéo cái thanh đó lên và nhìn xem dòng code JS & CSS nào được sử dụng =)) rãnh thì vào code xóa bớt mấy chỗ thừa đi... Lưu ý là nhiều khi nó đỏ nhưng mà nó chưa được kích hoạt lên thôi, như CSS thì có `hover`. JS thì có trigger `on click`
 
## :zap: Lazy load
Cách này sẽ không tạo ra request tới server khi mà chưa cần thiết, tránh tắc nghẽn giao thông =)) 
- Lazy load hình ảnh khi nào scroll sắp đến mới load src của img lên. 
- Lazy load video :v đừng cho nó autoplay =))
- Cách implement thì: Mình xài thư viện này, vừa có feature lazy load vừa có feature Responsive images lun [lazysizes](https://github.com/aFarkas/lazysizes)


## :zap: ADM (Asynchronous Module Definition)
- ADM, có thể component như là popup & tab & route ... cách này thì tùy vào case, tùy vào framework, build tools mà implement ... 
- Tools: 
    - [RequireJS](https://requirejs.org/docs/whyamd.html)
    - [Code spliting](https://webpack.js.org/guides/code-splitting/) trong [Webpack](https://webpack.js.org/)
    - Hand made =))

## :zap: Bundle Assets
- Lưỡng long nhất thể các file CSS thành 1 file
- Quy tụ các file JS thành 1 file
- Tools: [Webpack](https://webpack.js.org/), [Grunt](https://gruntjs.com/), [Gulp](https://gulpjs.com/), tay to ... 


## :zap: Minimize Assets
- Xóa hết các ký tự khoảng trắng, tab, xuống hàng dư thừa đối với các file html, css, js, json, ...
- Đổi các tên biến dài thòn trong JS. Ví dụ: 
```javascript
var total = number1 + number2; 
/// rewrite
var t = n + m;
```

Trừ mấy bạn thất tình, đen bạc, thì mới làm thủ công bước này thôi. Chứ các build tool nó support tận răng mấy bước này roài. :D 
- [uglifyjs](https://github.com/webpack-contrib/uglifyjs-webpack-plugin) in webpack
- [plugin](https://marketplace.visualstudio.com/items?itemName=olback.es6-css-minify) cho Visual Code
- ... cần gì search đó 

- Minimize html trả về cũng khá là kỳ công đó :v 

Ví dụ như mình sử dụng Laravel, mình sẽ sử dụng Middleware: [Link tham khảo](https://laravel.com/docs/5.0/middleware#defining-middleware) 
```php
<?php namespace App\Http\Middleware;

class AfterMiddleware implements Middleware {

    public function handle($request, Closure $next)
    {
        $response = $next($request);

        // implement code how to filter $response 

        return $response;
    }
}
```

Còn như khi làm với Codeigniter, mình cần định nghĩa lại cách display. [Link tham khảo](https://github.com/bcit-ci/CodeIgniter/wiki/Compress-HTML-output)

```php
<?php
// Compress output
$hook['display_override'][] = array(
	'class' => '',
	'function' => 'compress',
	'filename' => 'compress.php',
	'filepath' => 'hooks'
);
```


---
Sau đây là một cách thức có thể áp dụng trên code backend... 

## :zap: Cache ...
Viết gì nhỉ =)) Có thể là bạn đang sử dụng 1 framework backend nào đó và có đủ thứ docs về Cache. Nào là `memcache`, `redis` ... đọc rất là easy nhưng mà implement nó là cả 1 vùng trời kiến thức, kiến trúc, sáng kiến, cao kiến, phong kiến lun á =)))

Nói vậy thôi để implement Cache thì chỉ cần biết vài chỗ này thôi =))
- Nơi xử lý `Cache miss`
- Nơi xử lý `Cache hit`
- Nơi xử lý `Cache remove`
- Nơi xử lý `Cache refresh` 

Rồi ví dụ: 

:sunglasses: Bạn đang làm một cái website hoành tráng lệ, hệ thống phân quyền các kiểu con đà điểu. 

| Tables         | 
| -------------  |
| user           |      
| function       | 
| user_functions | 


:open_mouth: Bạn nhận thấy sau khi User login thành công, thì mỗi request lên server đều phải xuống database để lấy dữ liệu phân quyền. 
Sau đó dùng dữ liệu đó để show/ hide một số nút, link trên UI. 

:blush: Bạn thấy có vẻ cần phải optimize chỗ này, bạn lên đọc documents kỹ càng, tự tin apply cache cho nó. 

Giả sử bạn đang xài ORM, khi bạn lấy dữ liệu phân quyền thì đều qua Model hết. 
Thế nên bạn xử lý `Cache miss` và `Cache hit` tại Model, khi User log out thì `Cache remove`. 

Sau đó hệ thống chạy xì mút cho tới khi... có 1 thằng Admin cấp cao vào báo bug cho bạn =))

:rage: *"Tôi có remove 1 vài chức năng của thằng cấp dưới, nhưng nó không chạy..."*

:dizzy_face: Bạn dằn vặt, cắn rứt, khóc... và rồi Ông bụt hiện lên chỉ cho bạn thiếu làm `Cache refresh` khi có tác nhân tác động. 

:thumbsup: Bạn càng ngày càng thấm câu: "Cái gì đang chạy thì để cmn yên" =))

***:triangular_flag_on_post: KẾT BÀI***
- Cần phải nắm rõ hệ thống hiện tại 
- Dự trù được những case có thể xảy ra 
- Tham khảo từ người lớn, sếp, ...
- Hoặc "Cái gì đang chạy thì để cmn yên"


## :zap: Tối ưu Database

**:star: Thiết kế phá chuẩn**
Đôi khi thiết kế chuẩn, không dư thừa dữ liệu lại gây ra câu query phức tạp như c, như b, như l... nên phá chuẩn, chấp nhận dư thừa là cách có thể xem xét =))

**:star: Sử dụng có chọn lọc**
- Chỉ SELECT những cột cần thiết, đừng `SELECT *` vô tội vạ
- Chỉ JOIN với những bảng cần thiết, nghe cứ như đùa nhưng mà thế éo nào... =))
- Ý thức sort: không chỉ là `ORDER BY` là diễn ra sort mà kể cả `DISTINCT` hay `GROUP BY` hoặc là `UNION` 
    - Không sử dụng `HAVING` nếu có thể dùng `WHERE`. Đơn giản là `WHERE` sẽ giới hạn record trả về trước khi SORT rồi GROUP BY.
    - Phân biệt giữa 2 cái này: `UNION ALL` hay `UNION`. Cái sau có sử dụng `DISTINCT` để loại bỏ record giống nhau. 

**:star: Index column**
Mặc dù đã index nhưng những câu điều kiện dưới đây sẽ bóp d*i đồng đội:
- Dính tới NULL: `IS NULL`, `IS NOT NULL`
- Phủ định:  `!=`, `<>`,  `NOT IN`, `NOT LIKE`
- `OR` trong điều kiện 
- LIKE 2 lần =)) `LIKE '%tha tim%'`, và ngay cả `LIKE '%tha-tim'` thì cũng chả được tí index nào đâu nha. Cái này thì nhiều khi bất khả kháng =)) chấp nhận thôi 

Dưới đây là một số cách làm giảm hiệu năng index =))
- Đặt sai thứ tự cột trên index nhiều cột. 
- So sánh 2 lần =)) `WHERE score >= 2`. Cái này bằng với việc `WHERE score > 2 OR score = 2`. **NẾU** chỉ thao tác với số nguyên thì có thể sửa lại `WHERE score > 1`. 

**:star: Vài note khác về index:**
- Không nên sử dụng trên bảng nhỏ
- Không nên sử dụng trên bảng thường update / insert 
- không nên sử dụng trên cột thường update / insert 
- Không nên sử dụng trên cột nhiều giá trị `NULL`
- Không nên sử dụng trên cột có ít giá trị. Vd như `active` và `inactive` 

**:star: EXPLAIN**
Sử dụng `EXPLAIN {{query}}` để phân tích câu lệnh :D Xem được đang join cái gì, có index không, bao nhiêu rows,... [Sách ôn thi học sinh giỏi](https://dzone.com/articles/understanding-mysql-queries-with-explain)

**:star: Chọn Engine**
Chọn Engine với mục đích của Table..

**:star: Sử dụng ORM hợp lý**
Cân nhắc lúc nào cần sử dụng Lazy loading, lúc nào cần Eager Loading. Nhất là khi làm việc với Array. 

---
Dưới đây một số cách khác 

## :zap: Service worker
Thèng này có tên là "công nhân dịch vụ" hoạt động ngầm underground =)) Giao tiếp với overground qua `postMessage`, cái này cũng giống `iframe`.

Muốn sử dụng được tính năng này thì điều tiên quyết đó là tự cung... cấp `https` :v Vì thằng "công nhân dịch vụ" này có công năng đặc dị có thể thay đổi các response trên http nên cần `https` để giới hạn tài năng nó lại =)) [Google bảo thế](https://developers.google.com/web/fundamentals/primers/service-workers/)

Và nó cũng là xương sống trong việc làm 1 PWA (web có thể dùng offline ). Nhưng mà để nó hợp thức hóa, liên quan hóa với chủ đề tối ưu website thì chỉ nên chú trọng vào phần Backgroun sync & Cache request thôi nhé :v 

## :zap: CSS Rendering Performance
[Link tựa vào](https://developers.google.com/web/fundamentals/performance/rendering/)

Khi browser render thì cần trải qua 5 bước:
- **Javascript** > **Style calculations** > **Layout** > **Paint** > **Compositing** 

Cách tối ưu là sử dụng CSS property hợp lý để có thể skip được bước nào hay bước đó =)) Trong 5 bước này thì 2 bước đầu là fixed. Còn bước **Layout** nặng nhất vì kiểu gì cũng phải **Paint** lại, **Compositing** lại.

Đây là [danh sách các thuộc tính CSS](https://docs.google.com/spreadsheets/d/1Hvi0nu2wG3oQ51XRHtMv-A_ZlidnwUYwgQsPQUg1R2s/pub?single=true&gid=0&output=html)

Túm nhẹ một số CSS chi phí rẻ mạt: 
```css
/* Position */
selector {
    transform: translate(n px, n px);
}
/* Scale */
selector {
    transform: scale(n);
}
/* Rotation */
selector {
    transform: rotate(n deg);
}
/* Opacity */
selector {
   opacity: 0 -> 1;
}
```

## :zap: [CSS BEM](http://getbem.com/introduction/)
Đây là cách viết code hướng module trong CSS, hướng tới việc giảm độ sâu, độ dài của selector bằng cách đặt cái tên dài hơn, chi tiết hơn =))) Tất nhiên là giảm được cái độ phức tạp của selector thì CPU rãnh hơn, rãnh hơn thì web nhanh hơn =)) 

## :zap: Short polling, Long polling, WebSocket
Xem xét nên đổi một số công nghệ implement hay không? Vd: feature nhận thông báo giống facebook, thay vì bạn làm `Short polling`, cứ mỗi 5s request lên server 1 lần để kiểm tra dữ liệu mới nhất... thì xem xét có nên đổi sang `long polling` hay `websocket`. Tất nhiên là làm cái gì cũng có cái giá của nó =))


## :zap: Sử dụng Tools
Cách này thì kiểu làm bài tập, đưa website cho tools chấm. Làm tới khi nào điểm cao thì thôi

Tool mình hay xài: 
- [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) trên google, thật ra có sẵn trong DevTools mà mình thích cài Extension cho dễ coi. 
- [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) tool này trước page mình nó chấm cả 100 giờ còn 60 =))) cập nhật cách tính liên tục =)))


--- 
Những cách lỗi thời =))

## :umbrella: BasketJS
[BasketJS](https://addyosmani.com/basket.js/)
Cái thư viện này sẽ load file JS qua AJAX sau đó cất vào trong localStorage tại browser và lần sau không request lên server nữa... 

## :umbrella: Deferred CSS
```html
<noscript id="deferred-styles">
    <link href="http://yourwebsite/assets/css/main.min.css?v=7.9" rel="stylesheet">
</noscript> 
 
 <script>
  var loadDeferredStyles = function() {
    var addStylesNode = document.getElementById("deferred-styles");
    var replacement = document.createElement("div");
    replacement.innerHTML = addStylesNode.textContent;
    document.body.appendChild(replacement)
    addStylesNode.parentElement.removeChild(addStylesNode);
  };
  var raf = requestAnimationFrame || mozRequestAnimationFrame ||
      webkitRequestAnimationFrame || msRequestAnimationFrame;
  if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
  else window.addEventListener('load', loadDeferredStyles);
</script>
```

Bỏ qua mấy vụ phân tán, load balancing, microservice gì đi nhé =)) 

To be continued... Khi phát hiện gì mới thì update tiếp :v