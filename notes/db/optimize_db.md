---
tags: ["Performance"]
---

# Database Tuning

::: tip
Database tuning describes a group of activities used to optimize and homogenize the performance of a database. 
:::

<TagLinks />

## SQL Execution Order

![sql query execute order](https://i.pinimg.com/736x/ae/3e/fd/ae3efd2e5f6b3cb8669e2bbcd9c0d983.jpg)


Thầy tôi dạy câu thần chú `Chọn, chiếu, kết sau` đại loại câu này là để nhắc nhở lấy data vừa đủ thôi, buffet ăn không hết tội lắm
- **Chọn**: `WHERE`, lọc chiều ngang 
- **Chiếu**: `SELECT`, lọc chiều dọc
- **Kết**: `JOIN` 

Biết thứ tự này, các bạn sẽ biết thứ tự mấy cái lệnh thực thi sau đó đưa ra lựa chọn sáng suốt khi viết SQL. 

Ví dụ nếu câu điều kiện có thể để ở `WHERE` thì không nên đặt ở `HAVING` vì `WHERE` chạy trước. 

## Foreign Keys

Nếu nhất quán dữ liệu, ràng buộc toàn vẹn không là vấn đề thì bỏ mấy cái quan hệ khóa chính, khóa ngoại. Đùa đấy, thật ra là nếu được thì đưa logic ấy lên code luôn :>  

Mấy anh lớn như github, fb không xài *foreign key contraint* để tăng perf, vậy app mình đã đủ lớn chưa :))) 

[Thoughts on Foreign Keys?](https://github.com/github/gh-ost/issues/331#issuecomment-266027731)


## Sử dụng có chọn lọc

- Chỉ SELECT những cột cần thiết, đừng `SELECT *` vô tội vạ
- Chỉ JOIN với những bảng cần thiết, nghe cứ như đùa nhưng mà thế éo nào... =))
- Ý thức sort: không chỉ là `ORDER BY` là diễn ra sort mà kể cả `DISTINCT` hay `GROUP BY` hoặc là `UNION` 
    - Không sử dụng `HAVING` nếu có thể dùng `WHERE`. Đơn giản là `WHERE` sẽ giới hạn record trả về trước khi `SORT` rồi `GROUP BY`.
    - Phân biệt giữa 2 cái này: `UNION ALL` hay `UNION`. Cái sau có sử dụng `DISTINCT` để loại bỏ record giống nhau. 

## Denomalize - Thiết kế phá chuẩn

Đôi khi thiết kế chuẩn, không dư thừa dữ liệu lại gây ra câu query phức tạp như c, như b, như l... nên phá chuẩn, chấp nhận dư thừa là cách có thể xem xét =))

![Denomalize](https://i.pinimg.com/736x/53/97/bd/5397bd286bd3c4356b754d6201d03cdb.jpg)

Ví dụ, 

Sử dụng cassandra, ta có những thông tin của bảng **emails** dưới đây
- user_id là partition key
- email_id là sort key 

Field | type
-------| -----
email_id | bigint 
user_id |  bigint 
from    | text
subject | text
preview  | text 
is_read  | boolean

`is_read` là field để xem email user đã đọc hay chưa, để tăng tốc độ read hơn ta có thể tách bảng **read_emails** và **unread_emails**, đánh đổi là code phức tạp hơn và khó bảo trì hơn 👿👿👿


## Index column

![DB Indexing](https://i.pinimg.com/originals/0d/fe/31/0dfe31930989156b19c26e8b884d4dd1.jpg)

Có vài Index loại cơ bản

Index type  | Desc 
----------- | -----------
Primary key  | no duplication, has not `null`
Unique key  | no duplication, has `null`
Index / Secondary Index  | has duplication, has `null`
Fulltext  | Use for searching document

Đằng sau những chiếc INDEX là những thuật toán thâm sâu khôn lường, chôm về từ  [Postgres Index Types](https://www.postgresql.org/docs/current/indexes-types.html), đại loại là tùy mục đích sử dụng mà lôi ra xài thôi. 

| Thuật toán  |  Hỗ trợ | 
| ----------- | --------- |
|  B-Tree     | `<   <=   =   >=   >`
|  Hash     | `=`
|  GiST     | `<<   &<   &>   >>   <<|   &<|   |&>   |>>   @>   <@   ~=   &&` 
|  SP-GiST     | `<<   >>   ~=   <@   <<|   |>>` 
|  GIN     | `<@   @>   =   &&` 
|  BRIN     | `<   <=   =   >=   >` 


Index là cái thứ làm **tăng tốc độ đọc**, và làm **chậm tốc độ ghi** và làm **nhiều không gian lưu trữ**

Thế cho nên, cái nào không cần thiết thì xoá bớt đê cho nhanh :> 

### Phản khoa học
**Mặc dù đã index nhưng những câu điều kiện dưới đây sẽ bóp d*i đồng đội:**
- Dính tới NULL: `IS NULL`, `IS NOT NULL`. Mặc định DB sẽ mặc kệ mấy đứa liên quan tới NULL nên là Index cũng chả lưu vẹo gì cả. 
- Phủ định:  `!=`, `<>`,  `NOT IN`, `NOT LIKE`
- LIKE 2 lần =)) `LIKE '%tha tim%'`, và ngay cả `LIKE '%tha-tim'` thì cũng chả được tí index nào đâu nha. Cái này thì nhiều khi bất khả kháng =)) chấp nhận thôi 
- `OR` trong điều kiện 

Mấy chiếc query `OR` kiểu này, không sử dụng được index

```sql
SELECT fields FROM table
WHERE field1='something' OR field2='something' 
```

nên đổi ra thành kiểu này 

```sql
SELECT fields FROM table WHERE field1='something' 
UNION
SELECT fields FROM table WHERE field2='something' 
```


**Dưới đây là một số cách khách làm giảm hiệu năng index =))**
- Đặt sai thứ tự cột trên index nhiều cột. 
- So sánh 2 lần =)) `WHERE score >= 2`. Cái này bằng với việc `WHERE score > 2 OR score = 2`. NẾUchỉ thao tác với số nguyên thì có thể sửa lại `WHERE score > 1`. 
- Đối với mấy chiếc index có nhiều cột, thứ tự where cũng nên 

**Vài lưu ý khác về index:**
- Không nên sử dụng trên bảng nhỏ
- Không nên sử dụng trên bảng thường update / insert 
- không nên sử dụng trên cột thường update / insert 
- Không nên sử dụng trên cột nhiều giá trị `NULL`. Vì như đã nói ở trên mấy cái WHERE mà `IS NULL` thì ko có xài index.
- Không nên sử dụng trên cột có ít giá trị. Vd như `active` và `inactive`. Gần như là full scan bảng :>  

## Sử dụng ORM hợp lý
- Cân nhắc lúc nào cần sử dụng Lazy loading, lúc nào cần Eager Loading. Nhất là khi làm việc với Array. 
- phân trang bằng **Cursor** thay vì **offset** 

### Prisma
- Biết log [query events](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/logging#event-based-logging) để tìm hiểu vấn đề perf

```js
prisma.$on('query', (e) => {
  console.log('Query: ' + e.query)
  console.log('Params: ' + e.params)
  console.log('Duration: ' + e.duration + 'ms')
})
```

- Mấy chiếc insert/ update sau mặc định sẽ trả về nguyên 1 full tất cả attributes của row => chủ động select để giảm số lượng field result

```js
prisma.user.create({
    data: { ...userData },
    select: {
        id: true,
    }
})
```


## Job schedule
Chạy script để thực hiện Job schedule (Crontab)  hoặc Backup database nên thực hiện vào lúc ít người sử dụng sản phẩm nhất.

## EXPLAIN
Sử dụng `EXPLAIN {{query}}` để phân tích câu lệnh :D Xem được đang join cái gì, có index không, bao nhiêu rows,... [Sách ôn thi học sinh giỏi](https://dzone.com/articles/understanding-mysql-queries-with-explain)

## Và sử dụng các mô hình scale
[📕 Xem bài này](./db/architect.md)

## Other
- [When you should and should NOT use ENUM data type](https://dzone.com/articles/when-you-should-and-should-not)
- [Postgres indexes](https://www.postgresql.org/docs/current/indexes.html)
- [Is it possible to index on enum?](https://stackoverflow.com/questions/62207344/is-it-possible-to-index-on-enum)
- [use-the-index-luke.com](https://use-the-index-luke.com/)
- [](https://ignaciochiazzo.medium.com/paginating-requests-in-apis-d4883d4c1c4c)
