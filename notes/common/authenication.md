
# Authenication

Xác thực một HTTP request bằng một dấu hiệu nào đó:

1/ Tạo ra dấu hiệu gì
3/ Kiểm tra dấu hiệu thế nào


## 1/ Tạo ra dấu hiệu gì

```
POST /post?api_key=12321323 HTTP/1.1        (URL)
Host: example.com                   
Authorization: Basic I_AM_ME                (Authorization Header)    
Cookie: SESSION_ID=XXXXXYYYY                (Cookie header)
X-token: CUSTOM_TOKEN                       (Custom header)

body                                        (Body)
```

## 2/ Lưu trữ dấu hiệu ở đâu

Basic Authentication



Session-based Authentication

Token-based Authentication


