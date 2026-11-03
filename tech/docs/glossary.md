# AI Engineering Fundamentals

## 1. Harness

### Definition

**Harness** là hệ thống môi trường và cơ chế điều phối bao quanh một AI Model, giúp model có thể thực hiện công việc một cách có kiểm soát, nhất quán và có khả năng tương tác với thế giới bên ngoài.

Nếu AI Model là bộ não, Harness chính là môi trường vận hành cung cấp công cụ, quy tắc, bộ nhớ và cơ chế kiểm soát để bộ não đó làm việc.

Một Harness thường bao gồm:

- **System Instructions:** Định nghĩa vai trò, hành vi và nguyên tắc hoạt động.
- **Context Management:** Quản lý context, conversation history và thông tin cần thiết.
- **Tool Execution:** Cho phép model gọi tools, APIs hoặc thực thi commands.
- **State Management:** Theo dõi trạng thái và tiến trình công việc.
- **Permission & Security:** Kiểm soát quyền truy cập và hành động của AI.
- **Execution Loop:** Điều phối quá trình model suy luận, thực thi và nhận kết quả.
- **Error Handling:** Xử lý lỗi, retry và recovery.
- **Observability:** Logging, tracing và theo dõi quá trình thực thi.

### Architecture

Một kiến trúc Harness đơn giản:

```text
          User Request
                |
                v
        +---------------+
        |    Harness    |
        |---------------|
        | Instructions  |
        | Context       |
        | Tools         |
        | Permissions   |
        | State         |
        | Execution Loop|
        +---------------+
                |
                v
           AI Model
                |
                v
         Tool Execution
                |
                v
          Tool Results
                |
                +----> Harness
                |
                v
           Final Output
```

### Examples

Một số sản phẩm có thể xem là AI Harness:

- Claude Code
- OpenAI Codex
- OpenCode
- Hermes Agent

Chúng không chỉ cung cấp giao diện để chat với AI mà còn xây dựng môi trường giúp AI đọc code, thực thi commands, sử dụng tools và hoàn thành công việc.

### Key Takeaway

Harness không phải là AI Model. Nó là hệ thống biến một model thành một hệ thống có khả năng thực hiện công việc thực tế.

---

## 2. Agent

### Definition

**Agent** là một hệ thống AI có khả năng nhận mục tiêu, tự đưa ra quyết định, sử dụng tools và thực hiện nhiều bước hành động để đạt được mục tiêu đó.

Khác với chatbot truyền thống chủ yếu phản hồi từng câu hỏi, Agent có thể chủ động thực hiện một chuỗi hành động.

Một Agent thường có các thành phần:

- **Goal:** Mục tiêu cần hoàn thành.
- **Reasoning:** Phân tích tình huống và lựa chọn hành động.
- **Planning:** Chia mục tiêu lớn thành những nhiệm vụ nhỏ.
- **Tools:** Các công cụ để tương tác với hệ thống bên ngoài.
- **Memory:** Lưu trữ thông tin cần thiết giữa các bước hoặc các phiên làm việc.
- **Feedback:** Tiếp nhận kết quả để điều chỉnh hành động tiếp theo.

### Agent Execution Flow

```text
       User Goal
           |
           v
       Understand
           |
           v
         Plan
           |
           v
       Select Tool
           |
           v
      Execute Action
           |
           v
      Observe Result
           |
           v
      Evaluate Result
           |
      +----+----+
      |         |
   Complete   Continue
      |         |
      v         +----> Plan
     Done
```

### Types of Agents

**1. Reactive Agent**

Phản hồi dựa trên input hiện tại, ít hoặc không có khả năng lập kế hoạch dài hạn.

**2. Tool-Using Agent**

Có khả năng sử dụng tools như browser, terminal, APIs hoặc database.

**3. Autonomous Agent**

Có khả năng tự lập kế hoạch, thực thi nhiều bước và điều chỉnh hành động dựa trên kết quả.

**4. Multi-Agent System**

Nhiều Agent phối hợp với nhau, mỗi Agent đảm nhận một vai trò hoặc chuyên môn khác nhau.

Ví dụ:

```text
              Orchestrator
                   |
        +----------+----------+
        |          |          |
        v          v          v
      Coder     Reviewer    Tester
        |          |          |
        +----------+----------+
                   |
                Results
```

### Examples

- Hermes Agent: Agent hướng tới khả năng thực hiện công việc tự động và tương tác với nhiều công cụ.
- Coding Agent: Đọc source code, sửa lỗi, tạo feature và chạy tests.
- Research Agent: Tìm kiếm, tổng hợp và phân tích thông tin.
- Personal Assistant Agent: Quản lý lịch trình, email và các tác vụ cá nhân.

### Key Takeaway

Agent không đơn thuần là một model có khả năng chat. Agent là một hệ thống hướng mục tiêu, có khả năng suy luận, hành động và đánh giá kết quả.

---

## 3. MCP (Model Context Protocol)

### Definition

**MCP (Model Context Protocol)** là một giao thức mở chuẩn hóa cách ứng dụng AI kết nối với các nguồn dữ liệu và công cụ bên ngoài.

Thay vì phải xây dựng một integration riêng cho từng AI application và từng tool, MCP cung cấp một giao thức chung để các hệ thống có thể giao tiếp với nhau.

Có thể hiểu MCP như một chuẩn kết nối giữa AI và thế giới bên ngoài.

### Architecture

MCP sử dụng mô hình Client-Server:

```text
       AI Application
       (Host / Client)
              |
              | MCP Protocol
              |
       +------+------+
       |      |      |
       v      v      v
     MCP    MCP    MCP
    Server Server Server
       |      |      |
       v      v      v
     GitHub Database Filesystem
```

Các thành phần chính:

- **Host:** Ứng dụng AI chứa MCP Clients, ví dụ IDE hoặc AI coding assistant.
- **Client:** Thành phần trong Host chịu trách nhiệm giao tiếp với MCP Server.
- **Server:** Cung cấp tools, resources và prompts thông qua MCP.

### Core Primitives

MCP cung cấp ba nhóm khả năng chính:

**1. Tools**

Cho phép AI thực hiện hành động.

Ví dụ:
- `search_repositories`
- `create_issue`
- `query_database`
- `read_file`

Tools thường được AI lựa chọn và gọi khi cần thực hiện một hành động.

**2. Resources**

Cung cấp dữ liệu hoặc context cho AI.

Ví dụ:
- Database schema.
- Documentation.
- Project configuration.
- Application logs.

**3. Prompts**

Cung cấp các prompt templates hoặc workflow hướng dẫn có thể tái sử dụng.

Ví dụ:
- Code review prompt.
- Generate documentation prompt.
- Debugging workflow.

### Example

Giả sử một Coding Agent cần kiểm tra một GitHub repository.

Thay vì tự xây dựng GitHub API integration, Agent có thể kết nối với GitHub MCP Server.

```text
User:
"Find all open issues assigned to me"

        |
        v

    AI Agent
        |
        v
    MCP Client
        |
        v
  GitHub MCP Server
        |
        v
    GitHub API
        |
        v
   Issue Results
        |
        v
    AI Agent
        |
        v
    User Response
```

### Why MCP Matters

- Chuẩn hóa cách AI kết nối với tools.
- Giảm sự phụ thuộc vào integration riêng biệt.
- Cho phép tái sử dụng MCP Servers giữa nhiều AI applications.
- Mở rộng khả năng của Agent mà không cần xây dựng lại toàn bộ hệ thống.
- Tách biệt logic của AI khỏi implementation của từng external service.

### Key Takeaway

MCP không phải là Agent, cũng không phải là AI Model.

MCP là giao thức kết nối giúp AI applications tiếp cận tools, resources và dữ liệu từ các hệ thống bên ngoài.

---

## 4. Loop Engineering

### Definition

**Loop Engineering** là cách tiếp cận xây dựng và vận hành hệ thống AI thông qua những vòng lặp liên tục giữa việc xác định mục tiêu, thực thi, đánh giá kết quả và cải thiện.

Thay vì kỳ vọng AI tạo ra kết quả hoàn hảo ngay từ lần đầu tiên, Loop Engineering tập trung vào việc thiết kế feedback loops để hệ thống có thể liên tục kiểm tra, phát hiện vấn đề và cải thiện kết quả.

Đây là một cách tiếp cận engineering, không phải một giao thức hay framework có định nghĩa chuẩn hóa duy nhất.

### Core Concept

Một vòng lặp cơ bản:

```text
        Define Goal
             |
             v
          Execute
             |
             v
          Observe
             |
             v
          Evaluate
             |
             v
          Improve
             |
             +------> Execute Again
```

Mỗi vòng lặp tạo ra feedback để cải thiện chất lượng của vòng tiếp theo.

### Loop Engineering in AI Development

Có thể áp dụng vào nhiều giai đoạn phát triển phần mềm.

**1. Development Loop**

```text
Understand Requirement
        |
        v
    Write Code
        |
        v
    Run Tests
        |
        v
    Inspect Errors
        |
        v
    Fix Issues
        |
        +----> Repeat
```

Ví dụ: Coding Agent tự viết code, chạy TypeScript compiler, đọc lỗi và sửa code cho đến khi đạt yêu cầu.

**2. Agent Execution Loop**

```text
      Receive Goal
           |
           v
       Make Plan
           |
           v
      Execute Tool
           |
           v
      Observe Result
           |
           v
      Evaluate State
           |
           +----> Continue / Replan
```

Ví dụ: Agent cần tìm hiểu một codebase. Nó có thể đọc cấu trúc thư mục, tìm dependencies, phân tích source code và tiếp tục tìm kiếm khi context chưa đủ.

**3. Evaluation Loop**

```text
      Generate Output
             |
             v
         Run Tests
             |
             v
       Compare Expected
             |
             v
        Find Problems
             |
             v
        Improve Prompt
             |
             +----> Generate Again
```

Ví dụ: Đánh giá chất lượng bản dịch AI bằng test cases, phát hiện những trường hợp dịch sai và cải thiện prompt hoặc model configuration.

### Why Loop Engineering Matters

- Không phụ thuộc vào kết quả của một lần inference.
- Giúp AI phát hiện và sửa lỗi thông qua feedback.
- Có thể đo lường chất lượng bằng các tiêu chí cụ thể.
- Giúp tự động hóa những công việc phức tạp nhiều bước.
- Tạo cơ sở để cải thiện hệ thống dựa trên dữ liệu thực tế.

### Important Principles

Một Loop Engineering system tốt cần:

1. **Clear Objective:** Mỗi vòng lặp phải có mục tiêu rõ ràng.
2. **Observable Results:** Phải có cách quan sát kết quả.
3. **Evaluation Criteria:** Phải có tiêu chí xác định thành công hoặc thất bại.
4. **Actionable Feedback:** Feedback phải giúp xác định hành động tiếp theo.
5. **Bounded Execution:** Cần giới hạn số lần retry, thời gian và chi phí.
6. **Measurable Improvement:** Phải đánh giá được hệ thống có thực sự tốt hơn hay không.

### Key Takeaway

Loop Engineering chuyển AI từ mô hình tạo kết quả một lần thành một hệ thống có khả năng thực thi, kiểm tra, học hỏi từ feedback và cải thiện liên tục.

---

# 5. How They Work Together

Bốn khái niệm này không cạnh tranh với nhau. Chúng giải quyết những vấn đề khác nhau trong một hệ thống AI Engineering.

| Concept | Responsibility |
|---|---|
| Harness | Môi trường vận hành và điều phối AI |
| Agent | Hệ thống thực hiện mục tiêu |
| MCP | Giao thức kết nối với external tools và data |
| Loop Engineering | Phương pháp thiết kế feedback và cải thiện liên tục |

### Combined Architecture

```text
                  USER
                    |
                    v
             +--------------+
             |    AGENT     |
             |--------------|
             | Goal         |
             | Reasoning    |
             | Planning     |
             | Decision     |
             +--------------+
                    |
                    v
             +--------------+
             |   HARNESS    |
             |--------------|
             | Context      |
             | Instructions |
             | State        |
             | Permissions  |
             | Execution    |
             +--------------+
                    |
             +------+------+
             |             |
             v             v
         AI MODEL      MCP CLIENT
                           |
                           v
                      MCP SERVERS
                           |
                 +---------+---------+
                 |         |         |
                 v         v         v
               GitHub   Database  Filesystem

                    |
                    v
               OBSERVATION
                    |
                    v
                EVALUATION
                    |
                    v
                 FEEDBACK
                    |
                    +------> NEXT ITERATION
```

*Lưu ý: Đây là kiến trúc khái niệm. Trên thực tế, Agent, Harness và execution loop có thể được tích hợp trong cùng một runtime; MCP cũng chỉ là một trong nhiều cách để Agent sử dụng tools.*

### Practical Example: AI Coding System

Giả sử chúng ta yêu cầu AI:

"Implement authentication using Google OAuth in this React Native application."

Quá trình có thể diễn ra như sau:

1. **Agent:** Phân tích yêu cầu và lập kế hoạch triển khai.
2. **Harness:** Cung cấp project context, system instructions và quyền truy cập filesystem.
3. **MCP:** Kết nối với documentation, GitHub hoặc các external services cần thiết.
4. **Agent:** Đọc source code và thực hiện thay đổi.
5. **Loop Engineering:** Chạy TypeScript checks, tests, đánh giá kết quả và yêu cầu Agent sửa lỗi.
6. **Harness:** Theo dõi execution state và kiểm soát các hành động.
7. **Agent:** Tổng hợp kết quả và báo cáo hoàn thành.

Kết quả cuối cùng không chỉ là một đoạn code do AI sinh ra, mà là một feature đã trải qua quá trình thực thi và kiểm tra.

---

# 6. Final Mental Model

Hãy nhớ bốn câu sau:

- **Harness:** AI hoạt động trong môi trường nào?
- **Agent:** AI đang cố gắng hoàn thành việc gì?
- **MCP:** AI kết nối và tương tác với thế giới bên ngoài bằng cách nào?
- **Loop Engineering:** AI kiểm tra và cải thiện kết quả như thế nào?

Khi kết hợp cả bốn, chúng ta có nền tảng để xây dựng những hệ thống AI có khả năng làm việc thực tế, tự động hóa quy trình và mở rộng thành các hệ thống Agentic phức tạp hơn.