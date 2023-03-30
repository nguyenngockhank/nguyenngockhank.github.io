# Robustness Principle

Every API implementation and API consumer **MUST** follow Postel's law:

> _Be conservative in what you send, be liberal in what you accept._
>
> _–_ [_John Postel_](https://en.wikipedia.org/wiki/Robustness\_principle)

That is, send the necessary minimum and be tolerant as possible while consuming another service ([tolerant reader](https://martinfowler.com/bliki/TolerantReader.html)).



### But be just reasonably tolerant

> With a sufficient number of users of an API, it does not matter what you promise in the contract: all observable behaviours of your system will be depended on by somebody
>
> \- [Hyrum's Law](https://www.hyrumslaw.com/)
