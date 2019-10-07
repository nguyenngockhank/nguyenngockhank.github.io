# DB tuning

Tinh chỉnh hiệu suất thực thi (Performance tuning) 

- Chọn database / thiết kế database
- nhất quán dữ liệu, ràng buộc toàn vẹn => quan hệ khóa chính, Khóa ngoại + thiết kế theo chuẩn
- Primary key trên mỗi bảng
- Đánh index cho các Foreign key (primary / unique / index / fulltext)
- Select trả về những column cần thiết
- Sử dụng transaction khi thích hợp (ko xài lung tung)
- Bỏ qua việc sử dụng bảng tạm hết mức có thể


=> Nếu dự án cần tốc độ đọc ghi nhiều và ràng buộc toàn vẹn không phải là vấn đề 

[Link](http://tayninhit.info/20-van-de-database-tuning-90.html#targetText=Tinh%20ch%E1%BB%89nh%20hi%E1%BB%87u%20su%E1%BA%A5t%20th%E1%BB%B1c,(Database%20Administrator)%20l%C3%A2u%20n%C4%83m.)