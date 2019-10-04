# Apache Cassandra

Cassandra là `NoSQL`, được phát triển bởi Facebook vào năm 2007. Sau đó nó được tặng cho quỹ Apache vào 2/2010 và nâng cấp lên thành dự án hàng đầu của Apache.

Thông thường database trong NoSQL thì không cần thiết phải tạo schema ngay lúc đầu. Thế nhưng Cassandra thì lại khác. **Trước khi insert dữ liệu thì cần phải tạo keyspace và schema của table.**

Có thể thực hiện được 1 số câu query như select, update, insert, delete, drop.

- Dữ liệu được phân tán trên nhiều node khác nhau.
- Node càng nhiều thì throughput của nó càng tăng.
- Write throughput luôn luôn cao hơn read throughput.
- Tính chịu lỗi khá cao, cho dù node bị chết đi chăng nữa thì khi truy vấn sẽ được chuyển hướng đến node khác.
- Backup, restore dữ liệu 1 cách đơn giản.
- Tốc độ truy vấn cao