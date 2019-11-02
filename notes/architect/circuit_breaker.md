# Circuit Breaker

Trạm trung chuyển (Proxy) nhận request & response từ Upstream Service.

Nếu như `số lượng request thất bại vượt qúa số lượng cho phép`, khi đó nó sẽ phán đoán Upstream Service đang có vấn đề. Và nó sẽ **ngắt mạch**. Không cho request chảy sang bên Upstream Service nữa.


## Fallback 
Nhưng mà server toàn trả về lỗi. Khi đó bạn có suy nghĩ gì về trải nghiệm người dùng? Chắc chắn là không tốt rồi.

- Retries request đến 1 con upstream service khác
- Lưu request đó vào queue và sẽ xử lý lại vào thời gian khác.
- Lôi từ kết quả response từ cache ra

## Phục hồi

Nó sẽ đợi sau 1 thời gian nào đó (ví dụ như 1 phút), Grab gọi nó là **Sleep Window**.

Rồi sẽ test lại mạch bằng cách gửi 1 vài request nào đó đến Upstream Service. Nếu như nhận được response OK, khi đó nó sẽ tiến hành đóng mạch và cho hệ thống hoạt động như bình thường.

## Bulwark

monitor toàn bộ các request đến đồng thời được gửi đến Circuit Breaker và nó sẽ `block nếu như số lượng request đồng thời vượt quá số lượng cho phép`.

## Packages 

[hystrix](https://godoc.org/github.com/afex/hystrix-go/hystrix)

## Reference

- [Designing resilient systems: Circuit Breakers or Retries?](https://engineering.grab.com/designing-resilient-systems-part-1)

- [Circuit Breaker, Fallback, and Load Balancing With Netflix OSS and Spring Cloud](https://dzone.com/articles/circuit-breaker-fallback-and-load-balancing-with-n)
