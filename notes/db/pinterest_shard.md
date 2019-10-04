# Pinterest đã thực hiện scaled MySQL của họ như thế nào

[[toc]]

## Nhận định 

- Một khi đã shard, họ sẽ ko thể sử dụng joins, foreign keys, hoặc index một cách global được.
- Load balancing vẫn là cần thiết sau khi shard. Không để trường hợp node này quá đầy, node kia lại ko có gì.
- Những nodes cần có tính ổn định cao.
- Một khi đã shard, thì ko sờ vào data ở slave nữa. Mọi action read/write đều tiến hành trên master hết.
- Cần 1 giải thuật đơn giản khi tạo UUID cho tất cả các records của họ.


## Lưu cấu hình 

> `shard nào`, có `ID là bao nhiêu`? con `server nào chứa` 

```js
[ 
    {“range”:     (0,511), “master”: “MySQL001A”, “slave”: “MySQL001B”},
    {“range”: (512, 1023), “master”: “MySQL002A”, “slave”: “MySQL002B”},
     //  ...
    {“range”: (3072, 3583), “master”: “MySQL007A”, “slave”: “MySQL007B”},
    {“range”: (3584, 4095), “master”: “MySQL008A”, “slave”: “MySQL008B”}
]
```

## Tạo ID khi sharding

> `UUID` = (`shard ID` << 46) | (`type ID` << 36) | (`local ID` <<0)

- **`shard ID`**: là 1 số **16 bit**, có vai trò là ID của shard. 
- **`type ID`**: là 1 số **10 bit**, có vai trò chỉ ra type của object. Ví dụ nếu type ID = 1 có nghĩa object type là `Pin`, type ID = 2 ứng với object type là `Board` chẳng hạn.
- **`local ID`**: là 1 số **36 bit**, có vai trò là ID của records bên trong shard, có giá trị auto increment.

Ví dụ: Tiến hành decompose cái UUID theo cách sau:

```
https://www.pinterest.com/pin/241294492511762325/
```

```js
`Shard ID` = (241294492511762325 >> 46) & 0xFFFF = 3429
```
Dịch phải 46 bit rồi & với 0xFFFF 

```js
`Type ID`  = (241294492511762325 >> 36) & 0x3FF = 1 // type Pin -> query vào table pins
```

```js
`Local ID` = (241294492511762325 >>  0) & 0xFFFFFFFFF = 7075733
```

```js
// Shard ID = 3429 => ”MySQL007A” from config 
conn = MySQLdb.connect(host=”MySQL007A”)
conn.execute(“SELECT data FROM db03429.pins where local_id=7075733”)
```

## Database Schema

Họ phân loại dữ liệu ra 2 loại: Object và Map. Nói nôm na là các table có tính chất là chứa thông tin, và các table có tính chất là tham chiếu.

```sql
CREATE TABLE pins (
   local_id INT PRIMARY KEY AUTO_INCREMENT,
   data TEXT,
   ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE  = InnoDB;
```

```sql
CREATE TABLE board_has_pins (
  board_id INT,
  pin_id INT,
  sequence INT,
  INDEX(board_id, pin_id, sequence)
) ENGINE=InnoDB;
```


Để ý thấy là table `Pin` có bao nhiêu thông tin như thế, vậy mà `sao lại có mỗi column data`? Cái hay là họ nhét tất cả các thông tin liên quan đến pin vào column data này, dưới dạng JSON:

```
{“details”: “New Star Wars character”, “link”: “http://webpage.com/asdf”, “user_id”: 241294629943640797, “board_id”: 241294561224164665, …}
```

- nếu phải thêm 1 column mới cho 1 table theo cách tiếp cận cũ, thì việc alter table sẽ rất nặng (do phải alter cho tất cả các table tương ứng của các shard)
- chỉ cần khai báo ở tầng app giá trị default cho column mới mỗi khi muốn đọc ra thôi

- Khi insert 1 record mới, họ chỉ định ghi nó vào `shard ID` nào, `type ID` là gì. Sau khi record được insert rồi, nó sẽ trả về `local ID`, lúc này sẽ kết hợp với Shard ID và Type ID để cho ra UUID theo cách bên trên. Quá lợi hại.


Table `board_has_pins` 

**`board_id`** và **`pin_id`** là các UUID 64bit như trên, `sequence` có dạng timestamp, bảo đảm cho việc order theo created time rồi.



### Câu hỏi phát sinh: 

*Vậy giả sử có query: lấy tất cả boards của user X, thì ko lẽ query trên tất cả các shards à?*

Dự là không. table users, trong column data có chứa luôn list board rồi. Vì là JSON mà, nó lưu gì chả được. Tiếp cận theo cách của NoSQL là hoàn toàn đúng đắn trong trường hợp này.

---

## References

- [Sharding Pinterest: How we scaled our MySQL fleet](https://medium.com/pinterest-engineering/sharding-pinterest-how-we-scaled-our-mysql-fleet-3f341e96ca6f)
- [Pinterest đã thực hiện scaled MySQL của họ như thế nào](https://kipalog.com/posts/Pinterest-da-thuc-hien-scaled-MySQL-cua-ho-nhu-the-nao)
- [Instagram đã sinh ra ID trong database của họ như thế nào](https://nghethuatcoding.com/2019/05/19/instagram-da-sinh-ra-id-trong-database-cua-ho-nhu-the-nao/)