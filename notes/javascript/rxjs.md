# RxJS

https://viblo.asia/p/rxjs-va-reactive-programming-63vKj6oxK2R

## Terms

**Observable**
An observable is a function that creates an observer and attaches it to the source where values are expected, for example, clicks, mouse events from a dom element or an Http request, etc.

**Observer**
It is an object with next(), error() and complete() methods, that will get called when there is interaction to the with the observable i.e. the source interacts for an example button click, Http request, etc.

**Subscription**
When the observable is created, to execute the observable we need to subscribe to it. It can also be used to cancel the execution.

**Operators**
An operator is a pure function that takes in observable as input and the output is also an observable.

**Subject**
A subject is an observable that can multicast i.e. talk to many observers. Consider a button with an event listener, the function attached to the event using addlistener is called every time the user clicks on the button similar functionality goes for subject too.

**Schedulers**
A scheduler controls the execution of when the subscription has to start and notified.