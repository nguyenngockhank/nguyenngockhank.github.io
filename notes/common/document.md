# Documentation

Yeah, tầm quan trọng của document cũng không cần phải tranh cãi 
- Miêu tả các tính năng, khả năng, chức năng, tiềm năng của phần mềm
- Đóng vai trò như sự giao tiếp trong team
- Là di sản để lại cho người đến sau =)) để maintain cũng như mở rộng
- Các framework / library nổi tiếng để có docs =)) 
- ...

## Code as documentation

Trưởng lão nói rằng: 

:::: quote
So the first step to clear code is to accept that code is documentation, and then put the effort in to make it be clear. 

::: right
from [Martin Fowler](https://martinfowler.com/bliki/CodeAsDocumentation.html)
:::
::::

Mình thì chưa trải qua cái dự án nào mà lý tưởng như vậy, thậm chí là nhỏ như mấy site worpdress cũng ko thể clear :)) Thế cho nên mình vẫn thích nhìn mấy cái sơ đồ hơn 

> A Picture is Worth a Thousand Words 

## UML Diagrams

Xưa đi học các cô các thầy cứ bảo là sử dụng UML Diagrams  :)) Nhưng lớn lên mới biết nó có cả chục cái sơ đồ sơ sài.  =)))

![UML Diagrams Types](@/images/uml-diagram-types.png)

Ở một vài cty mình làm thì mấy anh PM thường vẽ **Activity Diagrams**, Còn **Use Case** chỉ viết specs hoặc dẹp luôn cho khỏe =)) 

[Bài viết chi tiết hơn](https://creately.com/blog/diagrams/uml-diagram-types-examples/)


## C4 Model 

Đây là do 1 tuyệt phẩm từ 1 phượt thủ đi du lịch nhiều, nên thường xuyên mở bản đồ ra xem. Thế là anh đã đem ý tướng đó vào trong Lập trình. 

C4 là viết tắt của 4 chữ C
- **Context** 
- **Container**
- **Component**
- **Code**

Yeah, nghĩa là zoom in Context System sẽ là các Container, zoom in các Container sẽ là các Component, zoom in Component sẽ là Code Diagram 

Ở mức Code Diagram, ta có thể sử dụng UML Class Diagram để trình bày


![C4 overview](https://c4model.com/img/c4-overview.png)

[Trang chủ C4](https://c4model.com/)

## Markdown Tools 

2 Tools mềnh đã xài 

- [mkdocs](https://www.mkdocs.org/)
- [vuepress](https://vuepress.vuejs.org/)

Nhận xét thì mình thích Vuepress hơn =))) Vì răng?
- Nhìn sáng sủa hơn =))
- Vì là 1 đồ chơi của Vue 
    - Có thể tạo ra nhiều custom UI thú vị bằng Vue
    - Nhiều plugin hay ho tốt cho SEO, PWA

Web này cũng là từ Vuepress đây :)) 

## Document From Source Code 

Những dạng tool kiểu này sẽ scan sorce code dựa theo các comment của bạn rồi build ra 1 trang API document, chủ yếu là input / output của function / class. Một vài tool có tính năng hay ho như build Class Diagram, ...

- PHP thì ta có [phpDocumentor](https://www.phpdoc.org/)
- Javascript thì ta có [jsdoc](https://jsdoc.app/index.html)




