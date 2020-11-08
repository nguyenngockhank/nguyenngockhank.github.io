# Kết luận

Có người mô tả Go là một ngôn ngữ *tẻ nhạt*. Tẻ nhạt vì nó dễ học, dễ viết và quan trọng là dễ đọc. Chúng ta *đã dành* ra 3 chương để nói về các kiểu dữ liệu, và cách khai báo các kiểu đó.

Nếu bạn có kiến thức về ngôn ngữ có kiểu dữ liệu tĩnh, hầu hết những gì chúng ta đã xem đều đầy đủ. Go cũng có con trỏ và slice trong Go chứng minh rằng không phải chỉ có Java hay C# mới làm được tính năng này.

Nếu bạn chủ yếu sử dụng ngôn ngữ động, bạn sẽ cảm thấy hơi khác một chút. Nó đáng để tìm hiểu. Không ít trong số đó là cú pháp khai báo và khởi tạo khác nhau. Dù là một fan hâm mộ của Go, tôi thấy rằng hầu hết các cải tiến đều theo hướng đơn giản hóa. Tuy nhiên, một số thứ lại bị phức tạp hóa (như bạn chỉ có thể khai báo biến một lần và `:=` dùng khai báo biến) và một vài khái niệm cơ bản (như `new(X)` hoặc `&X{}` chỉ cấp phát bộ nhớ, nhưng slice, map và các channel cần nhiều khởi tạo hơn, `make`).

Ngoài ra, Go tạo ra một cách đơn giản nhưng hiệu quả để tổ chức mã nguồn. Interface, xử lý lỗi thông qua giá trị trả về, `defer` cho quản lý tài nguyên và một cách đơn giản tạo một cấu trúc tổ hợp.

Cuối cùng, Go hỗ trợ sẵn cơ chế lập trình đồng thời. Khó có thể dùng một từ nào để mô tả về goroutine, ngoại trừ hiệu quả và đơn giản (đơn giản vì sử dụng thế nào cũng được). Đó là khái niệm trừu tượng. Các channel thì phức tạp hơn. Tôi luôn nghĩ rằng điều quan trọng là phải hiểu mô hình cơ bản trước khi sử dụng các lớp bao quanh ở mức cao. Tôi *nghĩ* học lập trình đồng thời không dùng channel sẽ rất tốt. Tuy nhiên, các channel đã được xây dựng sẵn, với tôi, không thấy giống như một khái niệm trừu tượng đơn giản. Tôi nói điều này bởi vì chúng thay đổi cách bạn viết và suy nghĩ về lập trình đồng thời. Nó giải quyết các vấn đề khó trong lập trình đồng thời, và chắc chắn là thứ tuyệt vời.