# Composer

## composer.json và composer.lock

- **composer.json** chỉ liệt kê dependency, không chỉ định cụ thể version package sẽ được install, **composer.lock** là nơi chỉ định version nào được install khi chạy composer install.
- **composer.json** được dùng để chạy composer install lần đầu tiên, **composer.lock** được tạo ra sau đó, lưu trữ phiên bản đã được cài đặt. Sau khi đã có composer.lock, composer sẽ sử dụng composer.lock để xác định phiên bản cài đặt mà không dùng composer.json nữa.
- Dùng **composer.lock** để đảm bảo version package của các thành viên trong nhóm là giống nhau.