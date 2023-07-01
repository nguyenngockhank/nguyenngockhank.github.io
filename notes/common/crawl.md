# Crawl data

Nói chung làm dự án thiếu dữ liệu, mệt mỏi với khâu nhập liệu, dữ liệu chưa đủ nhiều, chưa đủ đa dạng, chưa đủ phức tạp, chưa đủ để phân tích cũng như tổng hợp =))) Nói chung là thiếu thốn nên người ta mới nghĩ đến chuyện lụm data

Ví dụ vài công cụ hay ho trên thị trường như là:

- [JUNO_OKYO | Công cụ tạo tin tức tự động cho mục Điểm tin của J2TEAM Community](https://www.youtube.com/watch?v=O--YcRIYJmI)

- [Trình thu thập dữ liệu của Google](https://support.google.com/webmasters/answer/1061943?hl=vi)


# Các cách thực hiện

## Flow sương sương là 

1. Xác định data muốn lấy ở đâu 
2. Tạo ra request lấy nội dung 
3. Bóc tách dữ liệu
4. Lưu dữ liệu
5. Phân tích dữ liệu

- Ngoài ra: còn nhiều thứ khác lắm =))

## PHP - get_file_contents

### Ngữ cảnh
Thích hợp với Data nằm trên response HTML (GET method) - request không cần cầu kỳ phức tạp gì 

### Vài dòng code

```php
$url = 'https://example.com';
$html = get_file_contents($url); // send request => recieve html into $html
```

## PHP - CURL 

### Ngữ cảnh
Thích hợp với Request cần authentication. Các request khác GET. 
VD: Data nằm trên trang Admin =))) kiểu là hack đc pass của admin rồi, giờ chỉ còn việc lụm data zìa thôi 

### Vài dòng code

```php
$url = 'https://example.com/admin/users';
$ch = curl_init($url);

curl_setopt($ch, CURLOPT_URL, $url);

// to be fake a browser
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/48 (like Gecko) Safari/48');


$headers = array(
    'Cookie: session_id=abc',
);
curl_setopt($curlHandle, CURLOPT_HTTPHEADER, $headers);

// recieve html into $html
$html = curl_exec($ch);

// release 
curl_close($ch);
```


## Javascript - puppeteer

### Ngữ cảnh
Thích hợp với các website SPA, nếu tự tạo các request bằng PHP có thể bị CORS 

```javascript
const url = 'https://example.com';

const browser = await puppeteer.launch({
    headless: false
});

const page = await browser.newPage();
page.setViewport({width: 1280, height: 720});

// access page
await page.goto(url);

// grab html
const articles = await page.evaluate(() => {
    let elements = document.querySelectorAll(".article .title");

    let result = [];
    elements.forEach(item => {
        result.push({
            href: item.getAttribute('href').trim(),
            title: item.getAttribute('title').trim(),
        })
    });
    return result; // trả kết quả về cho biến articles
});
```

## Google sheet

Ừm, nghe có vẻ vô lý nhưng lại rất hợp lý đó :)) 

Trong cái Google sheet thì có phần `Trình chỉnh sửa tập lệnh`.

Nơi đây bạn có thể viết code để tương tác với lại dữ liệu trên sheet. Và ta có thể hẹn giờ cho đoạn script chạy theo giờ giống cron job zị á ^^!

### Ngữ cảnh

Phù hợp với những bạn không có server để treo =)) 

Hoặc IP của bạn đã bị Server ban. IP của script thực thi thay đổi, nên có thể pass được lần thực thi sau.


### Vài dòng code

Đây là vài dòng code mình crawl thử cái định nghĩa đầu tiên trên cambridge

```javascript
var PROCESS_COL_INDEX = 4;
var WORD_COL_INDEX = 1;


function crawl(sheet, rowIndex) {
   var word = sheet.getRange(rowIndex, WORD_COL_INDEX).getValue();
  
   if (!word) {
      return false;
   }
  
    sheet.getRange(rowIndex, PROCESS_COL_INDEX).setValue('1');
     
    var content = UrlFetchApp.fetch('https://dictionary.cambridge.org/dictionary/english/' + word);
    var html = content.getContentText();
  
    if (html) {
        $ = Cheerio.load(html);
        var defineText = $(".di .def-block .def").text();
       
        sheet.getRange(rowIndex, 5).setValue(defineText);
    }
  
    return true;
}

// hàm chính 
function execute(){
  var excel = SpreadsheetApp.getActive();
  var sheet =  excel.getSheetByName('voka');
  
  var last_row_index = sheet.getLastRow();
  
  for(var i = 1; i < last_row_index; i++) {
     var v = sheet.getRange(i, PROCESS_COL_INDEX).getValue();
    
     if (!v && crawl(sheet, i)) {
        break;
     }
  }
  
    
}


```