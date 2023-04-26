# Real time
Con người xã hội ngày càng phát triển và sống càng nhanh đòi hỏi sự phản hồi website là lập tức, tăng tương tác người dùng =)) 
- Chát không thể đợi lâu được
- Sàn giao dịch chậm 1 giây là mất cơ hội liền 
- Game trực tuyến, đánh bài, đánh cờ, các kiểu 
- ... nói chung là realtime =))) 

## Phương pháp để realtime 

Có thể phân ra 2 loại chính đó là `Client pull` và `Server push`.  
- Polling: Short Polling và Long Polling là loại Client pull
- Websockets và Sever Send Event là loại Server push 

## Short Polling 
Dùng AJAX để hỏi thăm server liên tục xem có dữ liệu mới không? 

Đại loại là vậy: 

```javascript
setInterval( grabNewData, 3000); 
```

- **Ưu** : dễ làm, dễ implement, server không cần thay đổi nhiều
- **Nhược** : **response trả về không đồng bộ** ; độ trễ cao, bóp d*i server, DDOS server nếu người dùng lớn =)) 

## Long Polling 
Cũng dùng AJAX hỏi thăm server, nhưng server sẽ giữ chân cái request lại... khi nào server có dữ liệu mới sẽ tha về

Cách này thì Facebook, Github đang xài 

- **Ưu**: Độ trễ thấp hơn short polling, ít request từ client gửi hơn 
- **Nhược**: **response trả về không đồng bộ**, phải xử lý vấn đề timeout của cả client và server...
 
## Server Send Event (SSE)
Cái này éo support IE =)) Yêu cầu browser phải có `EventSource`, Polyfill thì vẫn được 

Cái này thì client sẽ kết nối bền vững với server 1 lần rồi sau đó, cứ nhận dữ liệu mới từ server trả về... đây là đường 1 chiều ( `pub - sub  1-way`)  =)) 

Mặc dù là 1-way nhưng ta vẫn có thể gửi dữ liệu qua đường AJAX 

```javascript 
if(typeof(EventSource) !== "undefined") {
   var source = new EventSource("demo_sse.php");
   source.onmessage = function(event) {
      document.getElementById("result").innerHTML += event.data + "<br>";
   };
}
```

- **Ưu**: no delay, chuẩn nên dễ, cách làm bên server cũng giống bên Long polling
- **Nhược**: ... code tay xử lý string nhiều, cần hiểu biết rộng vì chưa thư viện hỗ trợ nhiều =)) 

## Web socket
Là một giao thức có kết nối bền vững ăn bám browser =))) Nghĩa là bạn có thể tự viết ra 1 Client app kết nối với web socket server mà ko cần qua http =))) Để chi thì chưa biết ... 

Thông qua giao thức này Client và Server có thể gửi dữ liệu lên, xuống thoải mái qua cái Socket đã kết nối ( `pub - sub  2-way`) 

- **Ưu**: realtime chính hiệu =)) performance nhanh hơn http; hỗ trợ nhiều thứ hay ho rất gì và này nọ
- **Nhược**: phía server phải nói là phức tạp về phần cài đặt, cấu hình cũng như cần mindset khác với lập trình web thông thường; thực tế thì rất nhiều case dị =))) 

**Lưu ý**:
Scale ngang của websocket ko hề đơn giản như RESTful API. [Đọc thêm](https://tsh.io/blog/how-to-scale-websocket/)

## Nên xài cái nào

Dựa vào nhiều yếu tốt nhưng mà có vài ý: 

Theo Khánk 
- Ko nên nghĩ tới `Long polling`, cho mấy anh lớn implement
- Nghĩ tới trách nhiệm: khi ta implement xong là có ai support nữa ko, hay mình ôm luôn =))) 

 

 






