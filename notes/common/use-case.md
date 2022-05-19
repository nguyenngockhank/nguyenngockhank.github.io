# Use Case

## Actor
là tác nhân bên ngoài hệ thống 
- Người dùng 
- Phần mềm khác: Mail tới client email, ... 
- Phần cứng: camera, barcode scanner, sensor, ... 
- Hệ thống khác: Paypal, 3rd API

=> Nhóm actor
=> Phân loại: người dùng / hệ thống khác / phần cứng / phần mềm

## Use-case
- 1 **chuỗi hành động của hệ thống**, mang lại kết quả quan sát được đối với Actor
- Có thể hiểu à 1 chức năng nghiệp vụ của hệ thống, mang 1 **ý nghĩa nhất định** đối vs người dùng.


### Gom actor
Có thể gom **nhiều actor** sử dụng **chung Use-Case** thành 1

### Quan hệ giữa các Use-case
- `<<include>>`: *Use-Case A*`<<include>>` *Use-Case B* nghĩa là trong Use-Case A **luôn cần** Use-Case B thực hiện
- `<<extend>>`:  *Use-Case A* `<<extend>>` *Use-Case B* nghĩa là trong Use-Case A **trong 1 số trường hợp** cần Use-Case B thực hiện


## Đặc tả Use-case (Use Case Specification)

<table style="border-collapse: collapse; width: 100%;">
<tbody>
<tr style="height: 15px;">
<td style="width: 19.1458%; height: 15px;"><strong>Use Case ID</strong></td>
<td style="width: 80.8542%; height: 15px;">UC-1.1</td>
</tr>
<tr style="height: 15px;">
<td style="width: 19.1458%; height: 15px;"><strong>Use Case Name</strong></td>
<td style="width: 80.8542%; height: 15px;">Đăng nhập</td>
</tr>
<tr style="height: 15px;">
<td style="width: 19.1458%; height: 15px;"><strong>Description</strong></td>
<td style="width: 80.8542%; height: 15px;">Là người dùng, tôi muốn đăng nhập vào ứng dụng để sử dụng dịch vụ từ ứng dụng.</td>
</tr>
<tr style="height: 15px;">
<td style="width: 19.1458%; height: 15px;"><strong>Actor(s)</strong></td>
<td style="width: 80.8542%; height: 15px;">Khách hàng, Google, Facebook</td>
</tr>
<tr style="height: 15px;">
<td style="width: 19.1458%; height: 15px;"><strong>Priority</strong></td>
<td style="width: 80.8542%; height: 15px;">Must Have</td>
</tr>
<tr style="height: 15px;">
<td style="width: 19.1458%; height: 15px;"><strong>Trigger</strong></td>
<td style="width: 80.8542%; height: 15px;">Người dùng muốn đăng nhập vào ứng dụng Medium</td>
</tr>
<tr style="height: 15px;">
<td style="width: 19.1458%; height: 15px;"><strong>Pre-Condition(s):</strong></td>
<td style="width: 80.8542%; height: 15px;">
<ul>
<li>Tài khoản người dùng đã được tạo sẵn</li>
<li>Tài khoản người dùng đã được phân quyền</li>
<li>Thiết bị của người dùng đã được kết nối internet khi thực hiện đăng nhập</li>
</ul>
</td>
</tr>
<tr style="height: 15px;">
<td style="width: 19.1458%; height: 15px;"><strong>Post-Condition(s):</strong></td>
<td style="width: 80.8542%; height: 15px;">
<ul>
<li>Người dùng đăng nhập ứng dụng thành công</li>
<li>Hệ thống ghi nhận hoạt động đăng nhập thành công vào Activity Log.</li>
</ul>
</td>
</tr>
<tr style="height: 15px;">
<td style="width: 19.1458%; height: 15px;"><strong>Basic Flow</strong></td>
<td style="width: 80.8542%; height: 15px;">1. Người dùng truy cập ứng dụng Medium.<p></p>
<p>2. Người dùng chọn phương thức đăng nhập bằng tài khoản Medium</p>
<p>3. Người dùng nhập tài khoản Medium và chọn lệnh đăng nhập</p>
<p>4. Hệ thống xác thực thông tin đăng nhập thành công và cho phép người dùng truy cập ứng dụng</p>
<p>5. Hệ thống ghi nhận hoạt động đăng nhập thành công vào Activity Log.</p></td>
</tr>
<tr style="height: 15px;">
<td style="width: 19.1458%; height: 15px;"><strong>Alternative Flow</strong></td>
<td style="width: 80.8542%; height: 15px;">2a. Người dùng chọn phương thức đăng nhập bằng tài khoản Gmail<p></p>
<p>2a1. Hệ thống chuyển sang màn hình đăng nhập của Google</p>
<p>3a. Người dùng nhập tài khoản Google và chọn lệnh đăng nhập</p>
<p>4a. Google xác thực thông tin đăng nhập thành công và cho phép người dùng truy cập ứng dụng</p>
<p><em>Use Case tiếp tục bước 5.</em></p>
<p>&nbsp;</p>
<p>2b. Người dùng chọn phương thức đăng nhập bằng tài khoản Facebook</p>
<p>2b1. Hệ thống chuyển sang màn hình đăng nhập của Facebook</p>
<p>3b. Người dùng nhập tài khoản Facebook và chọn lệnh đăng nhập</p>
<p>4b. Facebook xác thực thông tin đăng nhập thành công và cho phép người dùng truy cập ứng dụng</p>
<p><em>Use Case tiếp tục bước 5.</em></p></td>
</tr>
<tr>
<td style="width: 19.1458%;"><strong>Exception Flow</strong></td>
<td style="width: 80.8542%;">4c. Hệ thống xác thực thông tin đăng nhập không thành công và hiển thị thông báo.<p></p>
<p>4c1. Người dùng chọn lệnh hủy đăng nhập.<br>
<em>Use Case dừng lại.</em></p>
<p>4c2. Người dùng chọn lệnh lấy lại mật khẩu<br>
<em>Use Case tiếp tục Use Case UC1-3</em></p>
<p>4c3. Người dùng chọn lệnh khóa tài khoản<br>
<em>Use Case tiếp tục Use Case UC1-4</em></p></td>
</tr>
<tr>
<td style="width: 19.1458%;"><strong>Business Rules</strong></td>
<td style="width: 80.8542%;">BR1.1-1: Người dùng nhập sai thông tin đăng nhập ở lần thứ 6 liên tiếp sẽ bị khóa tài khoản 30 phút.</td>
</tr>
<tr>
<td style="width: 19.1458%;"><strong>Non-Functional Requirement</strong></td>
<td style="width: 80.8542%;">NFR1.1-1: Time out cho màn hình đăng nhập dưới 60 giây.<p></p>
<p>NFR1.1-2: Mật khẩu của người dùng phải được hash bằng MD5.</p></td>
</tr>
</tbody>
</table>


## Refs 

- https://thinhnotes.com/chuyen-nghe-ba/viet-dac-ta-use-case-sao-don-gian-nhung-hieu-qua/
- https://www.bravo.com.vn/vi/Tin-tuc/Quan-tri-doanh-nghiep/Dac-ta-so-do-use-case-quan-ly-khach-san
- Tools: http://plantuml.com/use-case-diagram