# Google App Script


Mình có đề cập sử dụng **Google Sheet** như là công cụ để [crawl dữ liệu](../common/crawl.md#google-sheet). 

Dạng kiểu bạn có thể viết `VB` trong `Excel`. 

Thì đây với cương vị là một JS developer không biết cái tool này thì hơi phí. 

## Yeah, start with `Why`

**Why?**
- Xử lý data, lọc data, format lại data
- Xử lý công thức phức tạp không thể nào sử dụng Formula bình thường
- Nhiều feature hay: đặt lịch tự động chạy script, tự động trigger script theo sự kiện, viết bằng JS nè, ... 


**How?**
- `Trên thanh công cụ` > `Trình chỉnh sửa tập lệnh`
- Đặt tên dự án + Viết Code
- `Chạy` > `Chạy hàm` > `Chọn` > `Xem kết quả`

**Tài liệu nghiên cứu**
- [Guide của GG](https://developers.google.com/apps-script/guides/triggers/events?csw=1)
- [API cửu chương cũng từ GG](https://developers.google.com/apps-script/reference/spreadsheet/range)

Rất nhiều thứ hay ho ở đây như: 
- `UrlFetchApp` để fetch HTML về nè, 
- `Cheerio` để xử lý HTML string như jQuery xử lý DOM vậy


## Get Sheet 

Để xử lý dữ liệu, trước hết phải biết thao tác trên trang nào, dưới đây là 2 cái mình hay dùng

### Sheet đang active

```js
var activeSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
```

### Sheet qua tên
```js
var sheetName = 'DS Lớp';
var activeSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
```

## Get & Set Cell Data 

Sau khi lấy được sheet thì cần get / set data vào Cell. Viết nó thành helpers để sau này nhìn tham số mà truyền vào thôi. 

Tại vì cái getRange origin nó quá phức tạp đi =)) mình thì lười mở API lên đọc. Thế thôi, với lại cũng khá ý nghĩa 

```js
function getCellValue(sheet, rowIndex, colIndex) { 
  return sheet.getRange(rowIndex, colIndex).getValue();
}

function setCellValue(sheet, rowIndex, colIndex, value) {
  sheet.getRange(rowIndex, colIndex).setValue(value);
}
```

*Note*: `rowIndex`, `colIndex` đều được đếm từ 1 nhé. Không phải số 0 giống mảng trong lập trình đâu.

## Hàm tiện ích khác

### getMaxRows

Lấy số dòng của Sheet

```js
sheet.getMaxRows();
```

### getDataRange

Lấy tất cả data. Có thể parse nó qua thành JSON các kiểu =)) 

Nhưng mà parse xong thì đừng set nó vào Cell, vì mỗi Cell chiều dài có giới hạn

```js
var data = sheet.getDataRange().getValues();
var jsonData = JSON.stringify(data); 
```

## Lên lịch 

- Dưới thanh công cụ trong trình chỉnh sửa Code, đó là thanh công cụ thứ 2 =)) 
- Trên thanh đó có nút `Save` dạng icon 
- Cạnh nút ấy, bên phải có cái icon `Đồng hồ`, click vào đấy bạn sẽ đến nơi muốn đến
- Tại ấy, tìm `Tạo trình kích hoạt mới` 
- Mò tiếp =)) 

## To be continued

... Sau này update thêm