# Thiết kế phần mềm

[[toc]]

## Phần mềm tốt 


<collapse title="⭐️ Tính đúng đắn" content-tag="p" :show="false">
    <ul>
        <li>Đầy đủ</li>
        <li>Chính xác</li>
    </ul>
</collapse>


<collapse title="⭐️ Tính tiện dụng" content-tag="p" :show="false">
    <ul>
        <li>Dễ học</li>
        <li>Dễ sử dụng</li>
        <li>Giao diện trực quan</li>
        <li>Tự nhiên</li>
    </ul>
</collapse>

<collapse title="⭐️ Tính tối ưu" content-tag="p" :show="false">
    <ul>
        <li>Tối ưu CPU</li>
        <li>Tối ưu bộ nhớ</li>
        <li>Tối ưu thiết bị sử dụng</li>
    </ul>
</collapse>

<collapse title="⭐️ Tính tương thích" content-tag="p" :show="false">
    <ul>
        <li>Import / Export Data</li>
        <li>Trương tác</li>
    </ul>
</collapse>

<collapse title="⭐️ Tính tiến hóa" content-tag="p" :show="false">
    khả năng cập nhật phiên bản mới
</collapse>

<collapse title="⭐️ Tính dễ kiểm tra" content-tag="p" :show="false">
    phải dễ dàng kiểm tra, tracing back khi có bug
</collapse>

<collapse title="⭐️ Tính dễ sửa lỗi" content-tag="p" :show="false">
    ^^!
</collapse>

<collapse title="⭐️ Tính dễ bảo trì" content-tag="p" :show="false">
    Cập nhật phần mềm nhanh chóng, các thành phần nên độc lập không nên phụ thuộc nhau dẫn đến khó bảo trì.
</collapse>

<collapse title="⭐️ Tính tái sử dụng" content-tag="p" :show="false">
    Đừng đúp code, chế tạo lại bánh xe 
</collapse>

## Quy trình 

### Waterfall Model

**Lợi**: 
- dễ dàng nắm toàn bộ thông tin giai đoạn hiện tại
- Nhanh gọn

**Hại**:
- KHi có lỗi ở giai đoạn trước, thì khó sửa.

-> vài phiên bản nâng cấp có thể quay lại giai đoạn trước nhưng vẫ dở =))


### Prototype Model

https://prepinsta.com/software-engineering/prototype-model/

**Lợi**: 
- Có sản phẩm mẫu để đánh giá & xác định yêu cầu
- Phù hợp vs dự án nhỏ & vừa. 
- Nếu sản phẩm mẫu tốt có thể giúp tăng tốc phần mềm

**Hại**:
- Chưa tối ưu với dự án dài hơi
- tốn chi phí tạo sản phẩm mẫu

### Spiral Model

https://www.guru99.com/what-is-spiral-model-when-to-use-advantages-disadvantages.html

Giống giống **Prototype Model**


## Use Case

[See here](./use-case.md)

## Activity Diagram


