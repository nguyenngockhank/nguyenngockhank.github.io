# Hexagonal Architecture

::: tip
Allow an application to equally be driven by users, programs, automated test or batch scripts, and to be developed and tested in isolation from its eventual run-time devices and databases.
:::


![hexagonal](@/images/architecture/hexagonal-arch-4-ports-adapters2.png)

**Phía bên trái,** Adapter phụ thuộc vào Port và được đưa (inject) vào trong implementation cụ thể của port (hay còn gọi là nơi thực hiện use-case). Cả Port và implementation cụ thể của nó (use-case) thuộc về bên trong ứng dụng;

**Ở phía bên phải,** Adapter là implementation cụ thể của Port và được đưa (inject) vào business logic của chúng ta, ứng dụng của chúng ta chỉ làm việc trên interface đó. Ở phía này, Port nằm trong ứng dụng, nhưng implementation của nó thuộc về bên ngoài và wrap một số tool bên ngoài.

## Lợi ích
Sử dụng port/adapter design, với ứng dụng của chúng ta nằm ở trung tâm của hệ thống, cho phép chúng ta giữ ứng dụng được tách biệt với các chi tiết triển khai như công nghệ thường xuyên thay đổi, công cụ và cơ chế phân phối, làm cho giai đoạn chứng minh khả năng (Proof of Concept – POC) và thử nghiệm sản phẩm (Pilot Phase) trở nên dễ dàng thực hiện hơn.

## Implementation

[Ports and Adapters implementation in PHP, with a little help from Symfony](https://medium.com/azimolabs/ports-and-adapters-implementation-in-php-with-a-little-symfony-help-6d4fdbe830ba)

[Git](https://github.com/purplefan/song-vote-ppa)

## Refs

- [Ports & Adapters Architecture](https://herbertograca.com/2017/09/14/ports-adapters-architecture/)
- [Ports & Adapters Architecture (Bản Việt)](https://edwardthienhoang.wordpress.com/2018/01/18/ports-adapters-architecture/)

