# Code Refactoring

::: tip Refactoring
tái cấu trúc – là quá trình làm thay đổi mã hiện có bên trong mà không thay đổi hành vi bên ngoài của nó. Nói cách khác, tức là thay đổi cách nó thực hiện, nhưng không không thay đổi nó làm cái gì. Mục đích là để cải thiện cơ cấu nội bộ.
:::


Refactoring có thể thực hiện ở nhiều mức độ
- Hệ thống 
- Chức năng 
- File/Class 
- Method/Functions.

Tùy theo những mức độ này thì "cấu trúc bên trong" "hành vi bên ngoài" "hệ thống" sẽ được hiểu khác nhau.


## Khi nào cần Refactor?

- khi có sự trùng lặp
- khi chúng ta nhận thức rằng mã và / hoặc mục đích của nó là không rõ ràng
- khi chúng ta phát hiện code smells (1 thuật ngữ để chỉ các đoạn mã tồi tệ), và đó xem như rằng có một vấn đề.

::: tip Code smells
là bất kỳ triệu chứng bất ổn nào bên trong mã nguồn của một chương trình, mà vì nó có thể sẽ dẫn đến các vấn đề lớn hơn. 
- không phải là bugs (lỗi lập trình), nghĩa là chúng không làm sai chứ năng của ứng dụng. 
- biểu hiện của sự yếu kém trong thiết kế và sẽ làm cho quá trình phát triển ứng dụng bị chậm lại hoặc tăng nguy cơ của bugs hoặc lỗi trong tương lai. 
:::

Ngoài ra, 
- Khi thêm chức năng mới vào source cũ 
- Khi tiến hành review code
- Khi cần handover lại

## Điều gì ngăn cản code refactoring?

- **Kiến thức**: ví dụ ko có hiểu biết sâu sắc về OOP thì code ban đầu viết ra sẽ rất “dở” nhưng quan trọng là họ hoàn toàn không biết rằng nó “dở”.
- **Chấp nhận**: Sau một thời gian dài, nhóm nhận ra có rất nhiều đoạn code “dở” nhưng nhóm vẫn chấp nhận bởi số lượng code “dở” là quá nhiều và có tư tưởng chấp nhận “sống chung với lũ”, hoặc nghĩ tới việc viết lại toàn bộ hệ thống.
- **Không có thời gian**:  Đây là lý do khá xác đáng; khách hàng hoàn toàn không nhận được lợi ích trực tiếp từ code refactoring, nên khó thuyết phục họ trả tiền cho nhóm phát triển thực hiện code refactoring.

## Làm như thế nào 

- [SÁCH GIÁO KHOA](https://refactoring.com/catalog/) xịn sò do anh `Martin Fowler` đại hiệp chỉ giáo =)) 
- [web hay](https://refactoring.guru/refactoring/what-is-refactoring)
