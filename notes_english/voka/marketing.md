# Từ vựng về Martketing 

| Từ        |   Nghĩa      |
|:--------- | :---------- |
| Advertising |  Quảng cáo |
| Auction-type pricing |  Định giá trên cơ sở đấu giá |
| Benefit |  Lợi ích |
| Brand acceptability |  Chấp nhận nhãn hiệu |
| Brand awareness |  Nhận thức nhãn hiệu |
| Brand equity |  Giá trị nhãn hiệu |
| Brand loyalty |  Trung thành nhãn hiệu |
| Brand mark |  Dấu hiệu của nhãn hiệu |
| Brand name |  Nhãn hiệu/tên hiệu |
| Brand preference |  Sự ưa thích nhãn hiệu |
| Break-even point |  Điểm hoà vốn |
| Buyer |  Người mua |
| By-product pricing |  Định giá sản phẩm thứ cấp |
| Captive-product pricing |  Định giá sản phẩm bắt buộc |
| Cash discount |  Giảm giá vì trả tiền mặt |
| Cash rebate |  Phiếu giảm giá |
| Channel level |  Cấp kênh |
| Channel management |  Quản trị kênh phân phối |
| Channels |  Kênh(phân phối) |
| Communication channel |  Kênh truyền thông |
| Consumer |  Người tiêu dùng |
| Copyright |  Bản quyền |
| Cost |  Chi Phí |
| Coverage |  Mức độ che phủ(kênh phân phối) |
| Cross elasticity |  Co giãn (của cầu) chéo (với sản phẩm thay thế hay bổ sung) |
| Culture |  Văn hóa |
| Customer |  Khách hàng |
| Customer-segment pricing |  Định giá theo phân khúc khách hàng |
| Decider |  Người quyết định (trong hành vi mua) |
| Demand elasticity |  Co giãn của cầu |
| Demographic environment |  Yếu tố (môi trường) nhân khẩu học= |
| Direct marketing |  Tiếp thị trực tiếp |
| Discount |  Giảm giá |
| Diseriminatory pricing |  Định giá phân biệt |
| Distribution channel |  Kênh phân phối |
| Door-to-door sales |  Bán hàng đến tận nhà |
| Dutch auction |  Đấu giá kiểu Hà Lan |
| Early adopter |  Nhóm (khách hàng) thích nghi nhanh |
| Economic environment |  Yếu tố (môi trường) kinh tế |
| End-user |  Người sử dụng cuối cùng, khách hàng cuối cùng |
| English auction |  Đấu giá kiểu Anh |
| Evaluation of alternatives |  Đánh giá phương án |
| Exchange |  Trao đổi |
| Exelusive distribution |  Phân phối độc quyền |
| Franchising |  Chuyển nhượng đặc quyền kinh tiêu |
| Functional discount |  Giảm giá chức năng |
| Image pricing |  Định giá theo hình ảnh |
| Income elasticity |  Co giãn (của cầu) theo thu nhập |
| Influencer |  Người ảnh hưởng |
| Information search |  Tìm kiếm thông tin |
| Initiator |  Người khởi đầu |
| Innovator |  Nhóm(khách hàng) đổi mới |
| Intensive distribution |  Phân phối đại trà |
| Internal record system |  Hệ thống thông tin nội bộ |
| Laggard |  Nhóm ( khách hàng) lạc hậu |
| Learning curve |  Hiệu ứng thực nghiệm, hiệu ứng kinh nghiệm, hiệu ứng học tập |
| List price |  Giá niêm yết |
| Long-run Average Cost – LAC |  Chi phí trung bình trong dài hạn |
| Loss-leader pricing |  Định giá lỗ để kéo khách |
| Mail questionnaire |  Phương pháp điều tra bằng bảng câu hỏi gửi thư |
| Market coverage |  Mức độ che phủ thị trường |
| Marketing |  Tiếp thị |
| Marketing chanel |  Kênh tiếp thị |
| Marketing concept |  Quan điểm thiếp thị |
| Marketing decision support system |  Hệ thống hỗ trợ ra quyết định |
| Marketing information system |  Hệ thống thông tin tiếp thị |
| Marketing intelligence |  Tình báo tiếp thị |
| Marketing mix |  Tiếp thị hỗn hợp |
| Marketing research |  Nghiên cứu tiếp thị |
| Markup pricing |  Định giá cộng lời vào chi phí |
| Mass-customization marketing |  Tiếp thị cá thể hóa theo số đông |
| Mass-marketing |  Tiếp thị đại trà |
| Middle majority |  Nhóm (khách hàng) số đông |
| Modified rebuy |  Mua lại có thay đổi |
| MRO-Maintenance Repair Operating |  Sản phẩm công nghiệp thuộc nhóm cung ứng |


## References 

[Link](https://pasal.edu.vn/bai-hoc-tieng-anh-giao-tiep-tu-vung-nganh-marketing-a25i359.html)

```js
words = words.split("\n");

words = words.map((word) => {
	var pieces = word.split(':');
	return {
		word: pieces[0],
		meaning: pieces[1],
	}
})


var str = ''; 
words.forEach(( { word, meaning }  = place) => { 
    str += `| ${word} | ${meaning} |\n`;
})
```