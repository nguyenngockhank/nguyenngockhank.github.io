# Selenium IDE Snippets

[Docs full](https://www.seleniumhq.org/selenium-ide/docs/en/api/commands/) mà đọc ko hiểu nên cần trải nghiệm thêm... dưới đây là note 

## Input 

```
store   |   admin                  |   username
type    |   id=email_or_username   |   ${username}
```

## Checkbox

```
check   |   css=[name=abc][value=1]  |

```

## Select thường 

```
select   |   css=[name="dharma_school_id"]  |  value=1  
```

## Select2 (AJAX Search)

```
store                       |   00027                               |    search_keyword      /// khởi tạo biến (kiểu vậy)
wait for element visible    |   id=s2id_user_id                     |    500                 /// chờ select2 render UI
click                       |   css=#s2id_user_id .select2-choice   |                        /// click vào control 
send keys                   |   id=s2id_autogen1_search             |    ${search_keyword}   /// nhập biến ở trên vào input
pause                       |   1500                                |                        /// đợi AJAX chạy
click at                    |   css=#select2-results-1 > li:nth-child(1) > div  |            /// click Option đầu tiên 
verify element present      |   css=.result                                                  /// verify trên giao diện các kiểu 
```

## Tương tác với Browser  

**Đơn giản**

```
execute script          |   return document.getElementsByClassName('user-menu').length  |  hasAuth    /// nhớ return + tên biến `hasAuth`
if                      |   ${hasAuth} == 0                                             |             /// kiểm tra biến trong flow
    /// ... action here 
end
```

**Phức tạp hơn chút**

```
execute script          |   var index = ${member_id_index}; var member_id = ${member_id};var row_index = -1; $('.table-responsive tbody tr').each( (i, e) => { var text = $(e).find('td:nth-child(' + index +')').text(); if (text == member_id ) { row_index = i; }   } ); return row_index + 1; | row_index

```


## Vòng lặp

```
store json           |   ["member_id", "location", "cgdp_student_id"]                             |     arr_columns
for each             |   arr_columns                                                              |     column
    execute script   |   var v = ${column}; return $('#picked_column [value='+ v +']').length     |     picked_location
    // .....
end                  
```

Dùng để tạo dữ liệu gì đó
```
times  |    2    |      
    /// ... to task here  
end
```


