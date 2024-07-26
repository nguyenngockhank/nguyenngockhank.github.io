# Command Query Responsibility Segregation (CQRS)

Với một ứng dụng kiểu **data-centric application** (ứng dụng tập trung vào dữ liệu) chỉ implement các thao tác CRUD căn bản xuống DB và để business process cho user xử lý (ví dụ như cần change data nào và khi nào change), nó có lợi điểm là user có thể thay đổi business process mà application không cần phải thay đổi. Nói cách khác, nó ngụ ý rằng tất cả user đều có hiểu biết rõ ràng về business process mà họ có thể làm, nhưng vấn đề là phần lớn user đều không thể nắm hết được business process mà họ cần phải thao tác.

Trong data-centric application, application không có kiến thức về business process, vì vậy domain sẽ không có bất cứ 1 “động từ” (hành động) nào, và không thể làm gì khác ngoài việc đọc/ghi raw data. Nó trở thành một sự trừu tượng hóa của mô hình dữ liệu (a glorified abstraction of the data model). Process (quy trình) chỉ tồn tại trong đầu của người sử dụng application, hoặc thậm chí là trong các sticky note dán trên màn hình máy tính.

Một ứng dụng thực sự hữu ích khi nó có thể loại bỏ gánh nặng “**process**” trên vai người dùng bằng cách nắm bắt ý định của họ, làm cho nó trở thành một ứng dụng có khả năng xử lý hành vi (process) chứ không chỉ đơn giản là lưu trữ dữ liệu.

## Command Query Separation

Thông thường, chúng ta bắt đầu bằng một cái gì đó như sau:

![1_layered](@/images/architecture/cqrs/1_layered.png?w=825)  
_Diagram of classic N-Layer architecture._

Đây là kiến trúc N-layer điển hình như tất cả chúng ta đều biết. Nếu chúng ta muốn thêm một số CQS ở đây, chúng ta có thể “đơn giản” tách business logic ra thành Commands và Queries

![CQRS-Simple-Architecture_2_CQS_1](@/images/architecture/cqrs/cqrs-simple-architecture_2_cqs_1.png?w=825)

_Separated Commands and Queries with shared domain model_

Theo Martin Fowler, thuật ngữ ‘command query separation’ được đặt ra bởi Bertrand Meyer trong cuốn sách của ông “[Object Oriented Software Construction](https://www.amazon.com/gp/product/0136291554?ie=UTF8&tag=martinfowlerc-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0136291554)” (1988) – một cuốn sách được cho là một trong những cuốn sách OO có ảnh hưởng nhất, trong những ngày đầu của OO.

Meyer nói rằng, chúng ta không nên có các method mà vừa thay đổi data và trả về data. Vì vậy, chúng ta có hai loại method:

*   Queries: Trả về data nhưng không thay đổi data, do đó không gây ra các side effects;
*   Commands: Thay đổi data và không trả về data.

Nói cách khác, đặt một câu hỏi không nên thay đổi câu trả lời và làm cái gì đó không nên trả lại câu trả lời, tuân theo Nguyên tắc Single Responsibility Principle.

Tuy vậy, cũng có 1 số pattern ngoại lệ với nguyên tắc này, ví dụ với implementation của Queue và Stack, thao tác “pop” vừa đồng thời thay đổi data và trả về data.

## Command Pattern

Ý tưởng chính của Command Pattern là chuyển chúng ta từ data-centric application sang process-centric application (ứng dụng tập trung vào quy trình), application sẽ có cả kiến thức về domain và processes.

Trong thực tế, điều này có nghĩa là thay vì có người dùng thực hiện hành động “CreateUser”, theo sau là một hành động “ActivateUser” và một hành động “SendUserCreatedEmail”, chúng ta sẽ yêu cầu người dùng thực hiện lệnh “RegisterUser” , application sẽ xử lý bao gồm cả ba hành động như một business process khép kín.

Tuy nhiên, bạn nên nhớ rằng điều này không có nghĩa là không thể có command “CreateUser” đơn giản. Các trường hợp sử dụng CRUD có thể cùng tồn tại với các trường hợp sử dụng có ý đồ đại diện cho một business process phức tạp, nhưng điều quan trọng là không nhầm lẫn chúng.

Giống như tên gọi của nó, trong pattern này chúng ta sẽ phân chia việc thực hiện các commands khác nhau. Hãy xem **Wikipedia** nói gì về pattern này

> _Command pattern là một behavioral design pattern trong đó một đối tượng được sử dụng để đại diện và đóng gói tất cả các thông tin cần thiết để gọi một method. Thông tin này bao gồm tên method, các đối tượng của method đó và các giá trị cho các tham số của method.._

Ví dụ, tất cả các Command sẽ có cùng một phương thức execute() để tại một thời điểm nào đó, bất cứ Command nào cũng có thể được kích hoạt mà không cần biết nó là Command gì. Điều này sẽ cho phép các Command được xếp hàng đợi và được thực thi khi có thể, có thể đồng bộ (sync) hoặc bất đồng bộ (async).

## Command Bus

Việc mô hình hoá các nghiệp vụ ghi dữ liệu dưới các command cho phép che đậy tốt các logic nghiệp vụ, giúp việc mở rộng dễ dàng hơn. Đồng thời các comand đó có thể dễ dàng chuyển đổi giữa xử lý đồng bộ và bất đồng bộ thông qua lớp abstract là command bus mà không thay đổi mô hình. Giúp cung cấp một mô hình nhất quán, xuyên suốt trong bộ kiến trúc. Phần ghi dữ liệu được thực hiện qua việc send các command tới các handler thông qua command bus. Comand hanlder đóng vai trò tương tự domain service sẽ tương tác với các model để thực hiện các nghiệp vụ thay đổi dữ liệu.

Hơn nữa, chúng ta có thể implement theo dạng nhiều command không cần phải được xử lý ngay lập tức, chúng có thể được xếp queue và thực hiện bất đồng bộ. Điều này có một số lợi thế làm cho hệ thống mạnh mẽ hơn:

*   Phản hồi cho người dùng được gửi lại nhanh hơn bởi vì chúng ta không xử lý command ngay lập tức;
*   Nếu vì lỗi hệ thống, giống như một lỗi hoặc DB đang offline, một command không thành công, người dùng thậm chí không nhận ra nó. Command này chỉ đơn giản có thể được execute khi vấn đề được giải quyết.

Ngoài ra, việc sử dụng command bus còn mang lại một số lợi điểm như chúng ta có thể áp dụng thêm **Aspect-oriented programming** (AOP) có thể wrap thêm các common logic trước và / hoặc sau khi xử lý được thực hiện. Ví dụ, chúng ta có thể validate dữ liệu command trước khi chuyển nó tới handler, wrap các handler trong transaction logic (commit, rollback) khi làm việc với DB transaction, hoặc chúng ta có thể làm cho command bus support việc truy vấn, phân luồng các logic phức tạp và thực thi bất đồng bộ.

Cách thông thường mà command bus đạt được là sử dụng Decorator pattern wrap xung quanh command bus (một Decorator object có thể decorate cho một Decorator object khác), giống như trò matryoshka.

![commandbusmatryoshka](@/images/architecture/cqrs/commandbusmatryoshka.jpg?w=825)

Điều này cho phép chúng ta tạo ra các **Decorators** riêng của chúng ta và để cấu hình cho command bus (có thể bên thứ ba) được tạo ra bởi bất kỳ Decorator nào, bất kể thứ tự nào, thêm chức năng tuỳ chỉnh của chúng ta vào command bus. Nếu chúng ta cần quản lý command theo hàng đợi, chúng ta thêm một Decorator để quản lý hàng đợi (queue) của các command. Nếu không sử dụng các transaction DB thì chúng ta không cần transaction management Decorator làm gì, …

## Command Query Responsibility Segregation

Bằng cách kết hợp các khái niệm về CQS, Command, Query và CommandBus, cuối cùng chúng ta đã đạt tới Command Query Responsibility Segregation (CQRS). Về cơ bản, chúng ta có thể nói rằng CQRS là một implementation của nguyên tắc Command Query Separation principle trong kiến trúc phần mềm. CQRS có thể được thực hiện theo những cách khác nhau và lên đến các cấp độ khác nhau, có thể chỉ có phía Command, hoặc có thể không sử dụng một Command Bus. Để hoàn thành, đây là một sơ đồ đại diện cho cách tôi nhìn thấy implementation của một CQRS đầy đủ:

![2006-1-cqrs](@/images/architecture/cqrs/2006-1-cqrs.png?w=825)

### Query side

Nếu làm theo CQS, phía truy vấn sẽ chỉ trả lại data và không thay đổi data. Vì không có ý định thực hiện business process trên data đó nên chúng ta không cần các business objects (ví dụ như các entities), vì vậy không cần một ORM trung gian. Chúng ta chỉ cần truy vấn dữ liệu thô để hiển thị cho người dùng và chính xác dữ liệu mà chúng ta cần để hiển thị đến người dùng!

Phần đọc dữ liệu được thiết kế riêng không lệ thuộc vào các model của phần ghi dữ liệu. Do đó có thể linh hoạt trong việc truy xuất database, cũng như sử dụng các data source khác nhau để tối ưu về tốc độ truy xuất.

Đây là lợi ích về hiệu suất ngay tại đây: Khi truy vấn dữ liệu, chúng ta không cần trải qua các business logic layers, chúng ta chỉ làm và nhận được chính xác những gì chúng ta cần.

Do sự tách biệt này, một cách tối ưu khác có thể là để tách biệt hoàn toàn bộ nhớ dữ liệu thành hai kho dữ liệu tách biệt: WRITE DB được tối ưu hóa cho ghi data và READ DB để tối ưu hóa cho việc đọc data. Ví dụ, nếu chúng ta đang sử dụng một RDBMS:

Việc đọc data không cần đến tính data integrity, chúng không cần các ràng buộc khoá ngoại bởi vì việc xác thực tính toàn vẹn dữ liệu được thực hiện khi ghi vào WRITE DB. Vì vậy, chúng ta có thể loại bỏ các ràng buộc toàn vẹn dữ liệu ở READ DB.

Chúng ta cũng có thể sử dụng các DB View với chính xác dữ liệu mà chúng ta cần, làm cho việc truy vấn trở nên đơn giản và do đó nhanh hơn, và do đó, tại sao chúng ta cần một RDBMS cho việc đọc dữ liệu ?! Chúng ta có thể sử dụng Mongo DB hoặc Redis, nhanh hơn. Việc thay đổi này có ích nếu ứng dụng đang có vấn đề hiệu suất về việc đọc data.

Việc truy vấn có thể được thực hiện bằng cách sử dụng một đối tượng truy vấn trả về một mảng dữ liệu mong muốn hoặc chúng ta có thể sử dụng một cái gì đó tinh vi hơn như Query Bus, ví dụ, nhận một query name, sử dụng một đối tượng truy vấn để truy vấn dữ liệu và trả về một thể hiện của ViewModel mà query cần.

### Command side

Như đã giải thích trước đó, bằng việc sử dụng command, chúng ta dịch chuyển thiết kế của application từ data-centric design sang behaviour design sử dụng Domain Driven Design.

Bằng việc loại bỏ các tác vụ READ ra khỏi code xử lý command và domain, có thể giải quyết các vấn đề sau:

*   Domain objects sẽ không cần phải lộ ra (expose) các trạng thái internal của nó
*   Các Repositories sẽ chỉ còn rất ít (nếu có) các tác vụ truy vấn dữ liệu
*   Tập trung vào behaviour tương tác giữa các Aggregate boundaries (hiểu nôm na là các đối tượng boundary trong EIB) hơn

Các phụ thuộc “one-to-many” và “many-to-many” giữa các entities có thể gây ra ảnh hưởng xấu về mặt performance trong ORM. Tin tốt là chúng ta hiếm khi cần các mối quan hệ đó khi xử lý các command, chúng chủ yếu được sử dụng để truy vấn và chúng ta vừa chuyển truy vấn ra khỏi để chúng ta có thể loại bỏ các mối quan hệ thực thể đó. Tôi không nói ở đây về mối quan hệ giữa các bảng trong một RDBMS, những ràng buộc khoái ngoại nên vẫn tồn tại trong DB, tôi đang nói về các kết nối giữa các thực thể được cấu hình ở cấp độ ORM. Ví dụ, liệu chúng ta có thực sự cần một danh sách đơn đặt hàng khi truy vấn một thực thể khách hàng? Xử lý nào chúng ta cần phải sử dụng danh sách đơn hàng đó?

Giống như phía truy vấn, nếu Command không được sử dụng cho các truy vấn phức tạp, chúng ta có thể thay thế RDBMS với một cách lưu trữ như document hoặc key-value? Tất nhiên điều đó còn phụ thuộc vào nếu ứng dụng đang có vấn đề hiệu suất về ghi dữ liệu.

### Business process events

Sau khi Command được xử lý, và nếu nó đã được xử lý thành công, trình xử lý sẽ kích hoạt một event thông báo cho phần còn lại của ứng dụng về những gì đã xảy ra. Các event nên được đặt tên như là Command kích hoạt nó, và một điều nữa như là quy luật với các event, nó phải là sử dụng thì quá khứ, ví dụ actionPerformed.

### CQRS != EVENT SOURCING

Event Sourcing là một ý tưởng đã được trình bày cùng với CQRS, và thường được xác định là một phần của CQRS. Ý tưởng về Event Sourcing rất đơn giản: domain của chúng ta đang tạo ra các event record lại tất cả thay đổi được thực hiện trong hệ thống. Nếu chúng ta lấy mọi event từ đầu của hệ thống và phát lại chúng về trạng thái ban đầu, chúng ta sẽ nhận được trạng thái hiện tại của hệ thống. Nó hoạt động tương tự như các giao dịch trên tài khoản ngân hàng của chúng ta; chúng ta có thể bắt đầu với tài khoản rỗng, phát lại từng giao dịch và (hy vọng) có được sự cân bằng hiện tại. Vì vậy, nếu chúng ta lưu trữ tất cả các sự kiện, chúng ta luôn có thể nhận được trạng thái hiện tại của hệ thống.

![CQRS_6_CQRS_ES](@/images/architecture/cqrs/cqrs_6_cqrs_es.png?w=825)

_Event Sourcing_

Trong khi Event Sourcing là một phương pháp tuyệt vời để lưu trữ trạng thái của hệ thống là không nhất thiết cần thiết trong CQRS. Đối với CQRS, điều quan trọng là Domain Model thực sự được lưu giữ như thế nào và đây chỉ là một trong những lựa chọn.

### EVENTUAL CONSISTENCY

Nếu các mô hình của chúng ta được phân tách về mặt vật lý thì việc đồng bộ hoá sẽ mất một thời gian, tuy nhiên cách này cũng rất đáng sợ đối với những người làm kinh doanh. Trong các dự án của tôi, nếu mỗi phần hoạt động chính xác, thời gian khi Mô hình READ không đồng bộ thì thường không đáng kể. Tuy nhiên, chúng ta chắc chắn sẽ cần phải tính đến các mối nguy thời gian trong quá trình phát triển trong các hệ thống phức tạp hơn. Giao diện người dùng được thiết kế tốt cũng rất hữu ích trong việc xử lý sự nhất quán cuối cùng.

Chúng ta phải giả định rằng ngay cả khi mô hình READ được cập nhật đồng bộ với mô hình WRITE, người dùng vẫn sẽ đưa ra quyết định dựa trên dữ liệu cũ. Thật không may, chúng ta không thể chắc chắn rằng khi dữ liệu được trình bày cho người sử dụng (ví dụ như trình bày trong trình duyệt web) nó vẫn còn tươi.

## Code sample

Việc implement CQRS cũng rất đơn giản và không cần đến bất kỳ framwork hỗ trợ nào.

Đầu tiên, chúng ta sẽ định nghĩa các class/interface cho phía Command, bao gồm **ICommand**, **ICommandHandler** và **ICommandDispatcher** interface.

```java
public interface ICommand
{
}
 
public interface ICommandHandler
    where TCommand : ICommand
{
    void Execute(TCommand command);
}
 
public interface ICommandDispatcher
{
    void Execute(TCommand command)
        where TCommand : ICommand;
}
```

Tiếp theo là phía Query side, chúng ta cũng có IQuery, IQueryHandler và IQueryDispatcher.

```java
public interface IQuery
{
}
 
public interface IQueryHandler
    where TQuery : IQuery
{
    TResult Execute(TQuery query);
}
 
public interface IQueryDispatcher
{
    TResult Execute(TQuery query)
        where TQuery : IQuery;
}
```

Tiếp theo là viết 1 lớp nhằm hiện thực **ICommandDispatcher** interface, ta gọi đó là **CommandDispatcher**. CommandDispatcher có một public method là **Execute(TCommand command)** để thực thi bất cứ Command nào thông qua CommandHandler. **CommandHandler** được khởi tạo bởi **IDependencyResolver** đã được truyền vào constructor của **ICommandDispatcher** với mục đích tìm ra CommandHandler tương ứng để execute 1 Command.

```java
public class CommandDispatcher : ICommandDispatcher
{
    private readonly IDependencyResolver _resolver;
 
    public CommandDispatcher(IDependencyResolver resolver)
    {
        _resolver = resolver;
    }
 
    public void Execute(TCommand command)
        where TCommand : ICommand
    {
        if(command == null)
        {
            throw new ArgumentNullException("command");
        }
 
        var handler = _resolver.Resolve>();
 
        if (handler == null)
        {
            throw new CommandHandlerNotFoundException(typeof(TCommand));
        }
 
        handler.Execute(command);
    }
}
```

Nữa là việc định nghĩa ra các đối tượng Command và **CommandHandler** cụ thể cho từng action. Ở đây ta có **SignOnCommand** và **SignOnCommandHandler**. SignOnCommand là một đối tượng Command như đã đề cập ở trên, chỉ chứa data đơn giản cần thiết cho việc execute command đó. **SignOnCommandHandler** sẽ nhận vào **SignOnCommand** và execute action tương ứng với data nhận được.


```java
public class SignOnCommand : ICommand
{
    public AssignmentId Id { get; private set; }
    public LocalDateTime EffectiveDate { get; private set; }
 
    public SignOnCommand(AssignmentId assignmentId, LocalDateTime effectiveDate)
    {
        Id = assignmentId;
        EffectiveDate = effectiveDate;
    }
}
 
public class SignOnCommandHandler : ICommandHandler
{
    private readonly AssignmentRepository _assignmentRepository;
    private readonly SignOnPolicyFactory _factory;
 
    public SignOnCommandHandler(AssignmentRepository assignmentRepository,
                                SignOnPolicyFactory factory)
    {
        _assignmentRepository = assignmentRepository;
        _factory = factory;
    }
 
    public void Execute(SignOnCommand command)
    {
        var assignment = _assignmentRepository.GetById(command.Id);
 
        if (assignment == null)
        {
            throw new MeaningfulDomainException("Assignment not found!");
        }
 
        var policy = _factory.GetPolicy();
 
        assignment.SignOn(command.EffectiveDate, policy);
    }
}
```

Để execute SignOnCommand này, chúng ta chỉ cần pass nó vào dispatcher như sau:

```java
_commandDispatcher.Execute(new SignOnCommand(new AssignmentId(rawId), effectiveDate));
```

Việc implement cho phía Query cũng tương tự như vậy, ta có **QueryDispatcher**.

```java
public class QueryDispatcher : IQueryDispatcher
{
    private readonly IDependencyResolver _resolver;
 
    public QueryDispatcher(IDependencyResolver resolver)
    {
        _resolver = resolver;
    }
 
    public TResult Execute(TQuery query)
        where TQuery : IQuery
    {
        if (query == null)
        {
            throw new ArgumentNullException("query");
        }
 
        var handler = _resolver.Resolve>();
 
        if (handler == null)
        {
            throw new QueryHandlerNotFoundException(typeof(TQuery));
        }
 
        return handler.Execute(query);
    }
}
```

Như tôi đã nói, việc triển khai này rất dễ dàng mở rộng. Ví dụ: chúng ta có thể handle các **transactions** cho command dispatcher mà không thay đổi việc thực hiện ban đầu bằng cách sử dụng các **Decorator**:

```java
public class TransactionalCommandDispatcher : ICommandDispatcher
{
    private readonly ICommandDispatcher _next;
    private readonly ISessionFactory _sessionFactory;
 
    public TransactionalCommandDispatcher(ICommandDispatcher next,
            ISessionFactory sessionFactory)
    {
        _next = next;
        _sessionFactory = sessionFactory;
    }
 
    public void Execute(TCommand command)
        where TCommand : ICommand
    {
        using (var session = _sessionFactory.GetSession())
            using (var tx = session.BeginTransaction())
            {
                try
                {
                    _next.Execute(command);
                    tx.Commit();
                }
                catch
                {
                    tx.Rollback();
                    throw;
                }
            }
    }
}
```
 

## Kết luận

Bằng cách sử dụng CQRS, chúng ta có thể tách rời hoàn toàn mô hình **READ** và **WRITE**, cho phép tối ưu hóa các thao tác đọc và ghi. Điều này làm tăng hiệu suất, làm cho codebase rõ ràng, đơn giản, phản ánh được domain, tăng tính bảo trì.

Một lần nữa, đó là tất cả về encapsulation, low coupling, high cohesion, và Single Responsibility Principle.

Tuy nhiên, cần lưu ý rằng mặc dù CQRS cung cấp một kiểu dáng thiết kế và một số giải pháp kỹ thuật có thể làm cho một ứng dụng rất mạnh mẽ, điều đó không có nghĩa là tất cả các ứng dụng phải được xây dựng theo cách này: Chúng ta nên sử dụng những gì chúng ta cần, và khi nào cần.



## Những quan niệm sai lầm

### CQRS rất khó

Xét về mức cơ bản thì CQRS chỉ là một pattern đơn giản triển khai nguyên tắc Single Responsibility Principle (SRP) ở lớp Domain Model.

CQRS không phải là một framework hay là một hệ thống multiple database, nó là pattern được áp dụng vào bounded context, dùng để chia Domain Model thành 2 model: Write Model (Command side) và Read Model (Query side), chúng được xử lý riêng rẽ để đạt hiệu quả tốt hơn.

### CQRS là Eventually Consistent

Eventually Consistency được áp dụng để Read Model được cập nhật bất đồng bộ (asynchronous) với Write Model

Đây không phải là điều kiện tiên quyết của CQRS, nhưng nó thường được sử dụng để cho phép bên Read side có thể scale (mở rộng) dễ dàng.

CQRS không yêu cầu bạn phải thực hiện Eventually Consistent. Bạn có thể sử dụng cùng một database và transaction để cập nhật Read Model hoặc sử dụng caching để có Strong Consistency.

### Model phải dùng Event Sourcing

Event Sourcing là một cách rất hiệu quả để xây dựng cả Read Model và Write Model nhưng nó không bắt buộc phải có khi sử dụng CQRS.

Event Sourcing là một giải pháp lưu trữ dữ liệu theo lịch sử một cách chính xác, nhưng nó cũng giúp xây dựng Read Model dễ dàng hơn bởi vì bạn có thể tạo ra bất kỳ projection mong muốn từ những dữ liệu sự kiện theo lịch sử.

### Command nên là Asynchronous

CQRS không bắt buộc Command phải được gửi theo kiểu fire-and-forget (không quan tâm đến response).

Với các trường hợp tương tác cao, nhiều user thực hiện thay đổi vào cùng dữ liệu thì Asynchronous Command sẽ hiệu quả. Nó sẽ giúp ứng dụng dễ scale và không bị quá tải.

Tuy nhiên các Command mà không phản hồi lại thành công hay thất bại sẽ cần phải có những cách khác để cập nhật cho user kết quả của hành động. Nó có thể là qua email hoặc qua các thao tác phụ xử lý message lỗi.

### CQRS chỉ hoạt động được với hệ thống Messaging

Nếu bạn đang tìm cách áp dụng một Read store theo cách eventually consistent hoặc xử lý Command theo kiểu bất đồng bộ thì dùng một messaging framework có thể là một ý tưởng tốt.

Ngược lại, sử dụng một hệ thống messaging khi không cần thiết sẽ làm cho ứng dụng của bạn trở nên phức tạp và khó bảo trì hơn.

### Cần phải sử dụng Domain Event với CQRS

Sử dụng Event để dựng Read Model là một phương pháp hiệu quả để giữ Read Model và Write Model được tách biệt.

Tuy nhiên nó không phải là cách duy nhất, và bạn có thể sử dụng nhiều method khác để tạo Read store, ví dụ như dựng trực tiếp từ dữ liệu quan hệ của Write Model.



**Bài viết được tham khảo từ:**

[From CQS to CQRS](https://herbertograca.com/2017/10/19/from-cqs-to-cqrs/)

[https://www.future-processing.pl/blog/cqrs-simple-architecture/](https://www.future-processing.pl/blog/cqrs-simple-architecture/)

