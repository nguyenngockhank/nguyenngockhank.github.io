# SEO 

Mình ko chuyên đi SEO back link, chỉ biết câu thần chú 

::: tip
Content is King, Link is Queen. 
:::

Nhưng mà sau đây mình sẽ liệt kê một mớ Checklist của mình =)) *Cũng chả liên quan gì tới content hay link j lắm đâu*

## Cài đặt Google Analytics 

Theo wiki 
::: tip
`Google Analytics` (viết tắt là GA) là một dịch vụ miễn phí của Google cho phép tạo ra các bảng thống kê chi tiết về khách đã viếng thăm một trang web. Nó là sản phẩm được các nhà Marketing trong giới Internet dùng để đối chọi lại với giới webmaster và giới kỹ thuật trong khi nền công nghiệp phân tích web đang ngày càng phát triển.
:::

[Doc 4 Dev](https://developers.google.com/analytics?hl=vi)


## Cài đặt Google Search Console

::: tip
`Google Search Console` là một dịch vụ miễn phí được Google cung cấp để giúp bạn theo dõi và duy trì sự hiện diện của trang web của bạn trong kết quả tìm kiếm của Google. 
:::

[Những câu hỏi liên quan xác minh Website](https://support.google.com/webmasters/answer/9008080)


[Link đọc chơi](https://support.google.com/webmasters/answer/9128668?hl=vi)

## Cài đặt SSL

[Tại sao phải xài?](https://developers.google.com/web/fundamentals/security/encrypt-in-transit/why-https)
- Google ưu tiên `https` để index page
- Bảo vệ website nè, tránh bị Hacker tấn công `Man In Middle` hay này nọ 
- Nhiều tính năng, thư viện 3rd yêu cầu https để bảo mật 


## sitemap.xml

`Sitemap.xml` này mình chủ yếu submit lên [Google Search Console](#google-search-console) và đặt vào file `Robot.txt` để crawler dựa vào đó mà crawl, không cần phải đi kiếm link trong từng trang nữa. 

[Tài liệu về sitemap](https://www.sitemaps.org/protocol.html)

Dùng Open source thì kiếm `Plugin` mà xài, hay kiếm `Package` mà code. 
Còn lười nữa thì xài [Tool Online](https://www.xml-sitemaps.com/)


## Schema Markup (Dữ liệu có cấu trúc)

Cung cấp cho Google biết cấu trúc website, để hiển thị kết quả màu mè đầy màu sắc, lôi cuốn, hấp dẫn người dùng 

Có nhiều format để làm Schema Markup
- [https://json-ld.org/](https://json-ld.org/)
- [HTML Microdata](https://www.w3.org/TR/microdata/)
- RDFa

[Tài liệu newbie](https://support.google.com/webmasters/topic/4599161?hl=vi&ref_topic=9456381)

[Tool Testing](https://search.google.com/structured-data/testing-tool/u/0/)

## Responsive website

Theo thực tế thì website [📕 Sổ tay chém gió](https://sotaychemgio.com) của mình, trên 90% người sử dụng di động để truy cập 

Không có responsive thì thôi ai xài. Cân nhắc nghĩ đến Mobile First trong quá trình phát triển 

## Google AMP

:::tip
AMP is a web component framework to easily create user-first websites.
:::

> AMP: Accelerated Mobile Pages

**Lợi**
- Được Google chống lưng, cache page các kiểu, tăng tốc độ cho website dành cho di động
- Rõ ràng sẽ SEO tốt hơn rồi, ko thì liệt kê zô đây làm gì 

**Hại**
- Cái khái niệm HTML, CSS thường có chút thay đổi... phải học lại =)) Xây dựng lại từ đầu vì Không sử dụng lại được codebase
- Quảng cáo ??? không hay lắm =)) trừ khi cái Provider có build component ngon nghẻ, xịn sò cho bạn dùng thôi 


[Full Docs](https://amp.dev/documentation/)



## Optimize Performance 

Yeah, web chậm quá thì không ai thèm xài. Spider index lâu, điểm thấp =)) 

Cách đơn giản là follow theo Tool mà làm nhất là [Pagespeed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=vi) của Google, họ hàng rễ má của nó =)) cứ thế mà làm theo. ***Nhớ tối ưu bên Mobile trước nhé***

Cũng là web [📕 Sổ tay chém gió](https://sotaychemgio.com) được 9x điểm trên tool đó, đọc thêm note của mình về cách [Tối ưu website](./optimize_web.md)


## Những điều lưu ý khác

- Không sử dụng công nghệ cũ như Java Applet, Flash các kiểu... 
- Force Domain sử dụng (www) hoặc (non www) thôi 
- Tạo [title và meta description](https://support.google.com/webmasters/answer/35624#1) thật sexy
- [rel=canonical](https://support.google.com/webmasters/answer/139066) dùng để tránh index trùng lặp content nè.
- Sử dụng [Robot.txt](https://support.google.com/webmasters/answer/6062596?hl=vi) để tránh index những trang nhạy cảm =)) Nhớ nhét thêm [`sitemap.xml`](#sitemap-xml) link vào
- Cũng đừng quên thuộc tính **`lang`** , viết nội dung tiếng việt mà để `en` là hỏng
- Sử dụng `nofollow` cho các link quảng cáo hay link ngoài website
- Sử dụng `og:title`, `og:description`, `og:images` , `article:publisher`, `article:author` cho các Mạng xã hội
- Tạo favicon bằng [Tool Online](https://www.favicon-generator.org)
- [Google Search Docs](https://developers.google.com/search/docs/guides/get-started) dành cho Developer


## Có gì update sau

Tu bi con ti niu!

