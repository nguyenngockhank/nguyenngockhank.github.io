# Code Refactoring

::: tip Refactoring
Refactoring is the process of changing a software system in such a way that it does not alter the external behavior of the code yet improves its internal structure. It is a disciplined way to clean up code that minimizes the chances of introducing bugs. In essence when you refactor you are **improving the design of the code after it has been written**.
:::


Refactoring có thể thực hiện ở nhiều mức độ
- Hệ thống 
- Chức năng 
- File/Class 
- Method/Functions.

Tùy theo những mức độ này thì "cấu trúc bên trong" "hành vi bên ngoài" "hệ thống" sẽ được hiểu khác nhau.


## Clean Code ???
<collapse  title-tag="h4">
    <template v-slot:title>
        💥 Clean code is obvious for other programmers.
    </template>
    And I’m not talking about super sophisticated algorithms. Poor variable naming, bloated classes and methods, magic numbers -you name it- all of that makes code sloppy and difficult to grasp.
</collapse>
<collapse  title-tag="h4">
    <template v-slot:title>
       💥 Clean code doesn’t contain duplication.
    </template>
    Each time you have to make a change in a duplicate code, you have to remember to make the same change to every instance. This increases the cognitive load and slows down the progress.
</collapse>
<collapse  title-tag="h4">
    <template v-slot:title>
       💥 Clean code contains a minimal number of classes and other moving parts.
    </template>
    Less code is less stuff to keep in your head. Less code is less maintenance. Less code is fewer bugs. Code is liability, keep it short and simple.
</collapse>
<collapse title-tag="h4">
    <template v-slot:title>
    💥 Clean code passes all tests.
    </template>
    You know your code is dirty when only 95% of your tests passed. You know you’re screwed when you test coverage is 0%.
</collapse>

**💥 Clean code is easier and cheaper to maintain!**

## When to refactor

<collapse title="💥 Rule of Three"  :show="false">
<ol>
    <li>When you’re doing something for the first time, just get it done.</li>
    <li>When you’re doing something similar for the second time, cringe at having to repeat but do the same thing anyway.</li>
    <li>When you’re doing something for the third time, start refactoring.</li>
</ol>
</collapse>

<collapse title="💥 When adding a feature" :show="false">
<ul>
    <li>Refactoring helps you understand other people’s code. If you have to deal with someone else’s dirty code, try to refactor it first. Clean code is much easier to grasp. You will improve it not only for yourself but also for those who use it after you.</li>
    <li>Refactoring makes it easier to add new features. It’s much easier to make changes in clean code.</li>
</ul>
</collapse>

<collapse title="💥 When fixing a bug" :show="false">
Bugs in code behave just like those in real life: they live in the darkest, dirtiest places in the code. Clean your code and the errors will practically discover themselves.
<br/>
Managers appreciate proactive refactoring as it eliminates the need for special refactoring tasks later. Happy bosses make happy programmers!
</collapse>

<collapse title="💥 During a code review" :show="false">
The code review may be the last chance to tidy up the code before it becomes available to the public.
<br/>
It’s best to perform such reviews in a pair with an author. This way you could fix simple problems quickly and gauge the time for fixing the more difficult ones.
</collapse>


- khi chúng ta nhận thức rằng mã và / hoặc mục đích của nó là không rõ ràng
- khi chúng ta phát hiện code smells (1 thuật ngữ để chỉ các đoạn mã tồi tệ), và đó xem như rằng có một vấn đề.

::: tip Code smells
là bất kỳ triệu chứng bất ổn nào bên trong mã nguồn của một chương trình, mà vì nó có thể sẽ dẫn đến các vấn đề lớn hơn. 
- không phải là bugs (lỗi lập trình), nghĩa là chúng không làm sai chứ năng của ứng dụng. 
- biểu hiện của sự yếu kém trong thiết kế và sẽ làm cho quá trình phát triển ứng dụng bị chậm lại hoặc tăng nguy cơ của bugs hoặc lỗi trong tương lai. 
:::

## Principles

::: tip The Two Hats
When you use refactoring to develop software, you divide your time between two distinct activities: adding function and refactoring. When you add function, you shouldn't be changing existing code; you are just adding
new capabilities
:::

## Điều gì ngăn cản code refactoring?

- **Kiến thức**: ví dụ ko có hiểu biết sâu sắc về OOP thì code ban đầu viết ra sẽ rất “dở” nhưng quan trọng là họ hoàn toàn không biết rằng nó “dở”.
- **Chấp nhận**: Sau một thời gian dài, nhóm nhận ra có rất nhiều đoạn code “dở” nhưng nhóm vẫn chấp nhận bởi số lượng code “dở” là quá nhiều và có tư tưởng chấp nhận “sống chung với lũ”, hoặc nghĩ tới việc viết lại toàn bộ hệ thống.
- **Không có thời gian**:  Đây là lý do khá xác đáng; khách hàng hoàn toàn không nhận được lợi ích trực tiếp từ code refactoring, nên khó thuyết phục họ trả tiền cho nhóm phát triển thực hiện code refactoring.

- One problem area for refactoring is **databases**. Most business applications are tightly coupled to
the database schema that supports them. That's one reason that the database is difficult to
change. Another reason is data migration. Even if you have carefully layered your system to
minimize the dependencies between the database schema and the object model, changing the
database schema forces you to migrate the data, which can be a long and fraught task.


## Checklist of refactoring done right way

:::: collapse ✔️ The code should become cleaner.
If the code remains just as unclean after refactoring... well, I’m sorry, but you’ve just wasted an hour of your life. Try to figure out why this happened.

It frequently happens when you move away from refactoring with small changes and mix a whole bunch of refactorings into one big change. So it’s very easy to lose your mind, especially if you have a time limit.

But it can also happen when working with extremely sloppy code. Whatever you improve, the code as a whole remains a disaster.

In this case, it’s worthwhile to think about completely rewriting parts of the code. But before that, you should have written tests and set aside a good chunk of time. Otherwise, you’ll end up with the kinds of results we talked about in the first paragraph.
::::


:::: collapse ✔️ New functionality shouldn’t be created during refactoring.
Don’t mix refactoring and direct development of new features. Try to separate these processes at least within the confines of individual commits.
::::

:::: collapse ✔️ All existing tests must pass after refactoring.
There are two cases when tests can break down after refactoring:
- **You made an error during refactoring.** This one is a no-brainer: go ahead and fix the error.
- **Your tests were too low-level**. For example, you were testing private methods of classes.
    
    In this case, the tests are to blame. You can either refactor the tests themselves or write an entirely new set of higher-level tests. A great way to avoid this kind of a situation is to write BDD-style tests.
::::

## Tips

::: tip
When you find you have to add a feature to a program, and the program's code is not
structured in a convenient way to add the feature, first refactor the program to make it
easy to add the feature, then add the feature.
:::
 

::: tip "The First Step in Refactoring"
Before you start refactoring, check that you have a solid suite of tests. These tests
must be self-checking.
:::

::: tip
Refactoring changes the programs in small steps. If you make a mistake, it is easy to
find the bug.
:::

::: tip 
Any fool can write code that a computer can understand. Good programmers write code that humans can understand.
:::

## Refs

- [SÁCH GIÁO KHOA](https://refactoring.com/catalog/) xịn sò do anh `Martin Fowler` đại hiệp chỉ giáo =)) 
- [web sịn sò hay](https://refactoring.guru/refactoring/what-is-refactoring)
