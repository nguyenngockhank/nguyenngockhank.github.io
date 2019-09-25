
# Domain Driven Design (DDD)
Nôm na nó là 1 `Design Pattern`, gồm 4 lớp (layer)

```
User Interface   |   Application   |   Domain   |    Infrastructure
```

**User Interface** : Giao diện / input control tạo ra những event bằng những command 

**Application** : vai trò gần giống Controller trong MVC, nhiệm vụ match các `Activity`, không chứa `Bussiness Logic`, chỉ chứa `Application Task Progress`. 

**Domain** : Chứa các `Bussiness Object`. Trái tim của toàn bộ doanh nghiệp, nghiệp vụ các kiểu ở đây nè.

**Infrastructure** : cung cấp các cơ chế giao tiếp các layer với nhau, các common library (Log, Utility, ...), và `Data Access` lưu trữ `Business Object` (database).


# Mirco Service



## API gateway
- Vai trò làm trung gian, giữa người dùng cuối và các service phía sau hệ thống 
- Phân tải, cache, đo & theo dõi lượng truy cập (API metering and monitoring)., ... 

## Database
- Mỗi service sẽ có 1 database -> vấn đề dư thừa dữ liệu, ràng buộc quan hệ dữ liệu, ...
- Vài service vẫn có thể dùng chung một CSDL khi tính toàn vẹn dữ liệu (ACID Atomicity, Consistency, Isolation, Durability) cần ưu tiên cao nhất.

## Message Queue 

| Message Base | Data Pipeline |
|--------------|:-------------:|
| RabitMQ      | Kafka         |
| ActiveMQ     | Kinesis       |
| SQS          | RocketMQ      |
| ZeroMQ       |               |
| MSMQ         |               |
| IronMQ       |               |



|   Message Base   | Data Pipeline  |
|:----------------:|----------------|
| Lưu state của các consumer => đảm bảo nhận được message từ topic đã subcribe | Không lưu state của consumer |
| Sau khi tất cả consumer nhận đc message => message sẽ bị xoá                 | Message được xoá sau 1 khoảng th/gian nhất định  |
| Khi có 1 message mới, consumer chỉ có thể lấy duy nhất 1 message đó          | Khi có 1 message mới, consumer có thể tuỳ ý lựa chọn lấy về 1 danh sách message. Có thể lấy message mới hoặc lấy thêm một số cũ. |