# POST vs PUT

The first key differentiation between POST and PUT is **Idempotent**.

**Idempotent**: “can do it over and over again without causing different results”.

The second key difference is if the entire URL is known.



For example, If you know user are only going to have one image and a new attempt is an override, the endpoint would be as follow:

PUT /users/1/image



Read more at [https://restcookbook.com/HTTP%20Methods/put-vs-post/](https://restcookbook.com/HTTP%20Methods/put-vs-post/)

