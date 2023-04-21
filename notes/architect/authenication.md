# Authenication

Theo Wiki =)) 

::: tip
Xác thực là một hành động nhằm thiết lập hoặc chứng thực một cái gì đó đáng tin cậy, có nghĩa là, những lời khai báo do người đó đưa ra hoặc về vật đó là sự thật. Xác thực một đối tượng còn có nghĩa là công nhận nguồn gốc của đối tượng, trong khi, xác thực một người thường bao gồm việc thẩm tra nhận dạng của họ.
:::

## Dấu hiệu chung

Xác thực một HTTP request bằng một dấu hiệu nào đó trên request:

- URL: `/post/create?api_key=my_key`
- Cookie: SESSION_ID=CLIENT_TOKEN
- Authorization Header: `Authorization: my_token`
- Custom Header: `Authorization: my_token`
- Body: `content=...&token=my_token`

## Basic Authentication

::: tip
Cách hoạt động của Basic Auth là gửi chính `username` + `password` của người dùng theo `mỗi request`.
:::

**Ưu điểm**

- Đơn giản, đa số browsers & server đều support 
- Dễ dàng kết hợp với các phương pháp khác.

**Nhược điểm**

- Username/password dễ bị lộ vì mỗi request đều phải truyền username và password
- Không thể logout. Ngoại trừ việc tự xóa lịch sử duyệt web hoặc hết thời gian lưu của trình duyệt.
- Không thân thiện với người dùng. UI xấu

## Session-based Authentication

Thi thoảng được gọi là cookie-based authentication. 

::: tip
Session-based authentication là cơ chế đăng nhập người dùng dựa trên việc tạo ra `session` của người dùng ở `phía server`.
:::

Thường được dùng trong các website và những ứng dụng web làm việc `chủ yếu với browser`, những `hệ thống monolithic` do cần sự tập trung trong việc lưu session data và sự hạn chế về domain.

**Ưu điểm**

- Thông tin được giấu kín. Session ID thường random không mang thông tin user
- Dung lượng truyền tải nhỏ
- Không cần tác động client nhiều. 2 động tác hay làm đó là set Cookie cho mỗi request, hoặc nhét thêm hidden field trong Form.
- Fully-controlled session. VD: thời gian login, force logout, ...


**Nhược điểm**

- Chiếm nhiều bộ nhớ trên server
- Khó scale: vì phải `dùng chung chỗ lưu session` hoặc `ghi nhớ user đã kết nối tới server nào` phục vụ cho việc **Load Balancer** có đẩy request server khác vẫn hiểu được đã authenication.
- Phụ thuộc domain. Thường sử dụng cookie để lưu `Session ID`, mà cookie lại phụ thuộc vào domain
- `CSRF` - một cách thức để tấn công, ăn cắp quyền 

## Token-based Authentication

::: tip
`Token-based Authentication` là cơ chế đăng nhập người dùng dựa trên việc tạo ra `token` - một chuỗi ký tự (thường được mã hóa) `mang thông tin xác định người dùng` được server tạo ra và `lưu ở client`. Server sau đó [có thể] không lưu lại token này.
:::

Thường được sử dụng trong các hệ thống `Web API`, `các hệ thống phân tán`, `micro-services`, các hệ thống có sự tham gia của các nền tảng khác như `mobile`, `IoT`, `server`,..., hoặc các `website kiểu mới` (phân tách rõ UI app và API).


**Ưu điểm**

- Stateless: `token` thường có tính chất `self-contained` => tính chất quan trọng nhất cho việc scale ngang - không cần quan tâm `sinh token ở đâu` và `verify token ở đâu`
- Phù hợp với nhiều loại client: không chỉ `browser` mà cả 
- Chống CSRF
- Không bị giới hạn bởi domain nhưng cũng có khả năng sẽ bị Cross Domain - [Đọc thêm bài này để tham khảo thêm vấn đề này](cross_domain.md)

**Nhược điểm**

- Khó quản lý đăng xuất
- Phức tạp phần client
- Thông tin dễ lộ => thông thường chỉ lưu 1 số thông tin thiết yếu như `user_id`, `username` mà không lưu thông tin nhạy cảm như `password` vào token
- Dung lượng truyền tải lớn

## Hash based Message Authentication Code (HMAC)

dùng để kiểm tra toàn vẹn + xác thực dữ liệu 

![HMAC](https://media.licdn.com/dms/image/C4D12AQGhsdUJ4h4bNw/article-cover_image-shrink_720_1280/0/1593274127772?e=2147483647&v=beta&t=OI9rOEe6eEFMZ-XiNG7L0OnMxsiUyU9XOcoxk3PNM3M)

- Server sẽ tạo ra public key & private key rồi đưa cho client (shared key)
- Client tạo HMAC signature từ message + private key => gửi lên server để xin resource 
- Server nhận request từ client, tạo 1 chiếc HMAC signature khác rồi so sánh với HMAC signature từ client gửi lên => ngon thì process  


Ví dụ [Amazon S3 documentation](http://s3.amazonaws.com/doc/s3-developer-guide/RESTAuthentication.html)

```ts
"Authorization: AWS " + AWSAccessKeyId + ":"  + base64(hmac-sha1(VERB + "\n" 
							     + CONTENT-MD5 + "\n" 
							     + CONTENT-TYPE + "\n" 
							     + DATE + "\n" 
							     + CanonicalizedAmzHeaders + "\n" 
							     + CanonicalizedResource))
```

```
PUT /quotes/nelson HTTP/1.0
Authorization: AWS 44CF9590006BF252F707:jZNOcbfWmD/A/f3hSvVzXZjM2HU=
Content-Md5: c8fdb181845a4ca6b8fec737b3581d76
Content-Type: text/html
Date: Thu, 17 Nov 2005 18:49:58 GMT
X-Amz-Meta-Author: foo@bar.com
X-Amz-Magic: abracadabra
```

Usage scenarios
- Password reset link
- Links in verifying email addresses in order to create or activate accounts.
- Authenticating data sent by external applications.

https://www.geeksforgeeks.org/what-is-hmachash-based-message-authentication-code/


## Single Sign-On (SSO)

When a principal tries to access a resource, she is directed to authenticate with an **identity provider**. Once identity provider is satisfied that the principal has been authenticated, it gives informatin to the **service provider**, allowing it to decide whether to grant her access to the resource.

- **Identity provider** could be an externally hosted system, or something inside your own organization. 
    - Goolge, for example, provides an OpenID Connect identity provider.
    - For enterprises, it's common to have your own identity provider, which may be linked to your company's directory service - It could be s.th like *Lightweight Directory Access Protocol (LDAP)* or *Active Directory*



## Open Authentication (OAuth)

::: tip 
`OAuth` ra đời nhằm giải quyết vấn đề trên và xa hơn nữa, đây là một phương thức chứng thực giúp các ứng dụng có thể chia sẻ tài nguyên với nhau mà không cần chia sẻ thông tin username và password.
:::

- **Ứng dụng**  (website hoặc mobile app)yêu cầu ủy quyền để truy cập vào **Resource Server** (Gmail,Facebook, Twitter hay Github…) thông qua User
- Nếu **User** ủy quyền cho yêu cầu trên, **Ứng dụng** sẽ nhận được *`ủy quyền từ phía User`* (dưới dạng một token string)
- **Ứng dụng** gửi thông tin *`định danh`* (ID) của mình kèm theo *`ủy quyền của User`* tới **Authorization Server**
- Nếu *`thông tin định danh`* được xác thực và ủy quyền hợp lệ, **Authorization Server** sẽ trả về cho **Ứng dụng** *`access_token`*. Đến đây quá trình ủy quyền hoàn tất.
- Nếu *`access_token`* hợp lệ, **Resource Server** sẽ trả về dữ liệu của tài nguyên đã được yêu cầu cho **Ứng dụng**.

![Mô hình OAuth2](@/images/oauth.png)

Tóm tắt [bài viết gốc](https://viblo.asia/p/authentication-story-part-1-authentication-la-lam-gi-63vKj2YMK2R)