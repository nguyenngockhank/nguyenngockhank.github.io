# Comparision

- [FP vs. OO](https://blog.cleancoder.com/uncle-bob/2018/04/13/FPvsOO.html)

- [Solution Architecture vs. Software Architecture](https://dotnetcalgary.com/solution-architecture-vs-software-architecture/)


## Architectural Styles vs. Architectural Patterns vs. Design Patterns

Tất cả khác nhau nằm ở scope. 

### Architectural Styles

Là đỉnh cao nhất khi nói về architecture, cực kỳ high level, có thể chỉ là những nét vẽ sơ khai tạo hình nên bản thiết kế quy định cụ thể các lớp, mô đun cấp cao của ứng dụng và cách các mô đun và lớp tương tác với nhau như thế nào, mối quan hệ giữa chúng.

::: tip
Architectural styles tell us, in very broad strokes, how to organise our code. It’s the highest level of granularity and it specifies layers, high-level modules of the application and how those modules and layers interact with each other, the relations between them.
:::

ví dụ về Architectural Styles:

- Component-based
- Monolithic application
- Layered
- Pipes and filters
- Event-driven
- Publish-subscribe
- Plug-ins
- Client-server
- Service-oriented

### Architectural Patterns

Một pattern là một giải pháp ứng với một vấn đề lặp đi lặp lại. Trong trường hợp của Architectural Patterns, nó giải quyết các vấn đề liên quan đến Architectural Styles.

::: tip
A pattern is a recurring solution to a recurring problem. In the case of Architectural Patterns, they solve the problems related to the Architectural Style. For example, “what classes will we have and how will they interact, in order to implement a system with a specific set of layers“, or “what high-level modules will have in our Service-Oriented Architecture and how will they communicate“, or “how many tiers will our Client-server Architecture have“.
:::

Một vài ví dụ về Architectural Patterns:

- Three-tier
- Microkernel
- Model-View-Controller
- Model-View-ViewModel

### Design Patterns 

Design Patterns khác Architectural Patterns ở phạm vi (scope) của chúng. Design Patterns giải quyết các vấn đề cục bộ, nhỏ lẻ hơn, nó không ảnh hưởng lớn đến code base mà chỉ là 1 phần nhỏ trong đó.


## Coupling & Cohesion

| Cohesion | Coupling |
|:--------|:--------|
| nhiệm vụ của từng module |  phụ thuộc lẫn nhau giữa các component | 
| Nhiệm vụ của từng module càng rõ ràng và tách biệt thì cohesion càng cao (high cohesion) | Low coupling, loose coupling có nghĩa là các component ít phụ thuộc vào nhau|
| Cohesion thể hiện mối quan hệ bên trong module. | Coupling thể hiển sự liên kết giữa các modules. | 
| Cohesion thể hiện sức mạnh liên kết giữa các chức năng | Coupling thể hiện quan hệ phụ thuộc vào nhiều modules. | 
| Cohesion đánh giá chất lượng mà một component / module tập trung vào một việc đơn lẻ. | Coupling là đánh giá mức độ một component / module liên kết với mudule khác. | 

[Low Coupling và High Cohesion là gì?](https://edwardthienhoang.wordpress.com/2018/01/08/low-coupling-and-high-cohesion/)
