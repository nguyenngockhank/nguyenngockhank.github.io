(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{1327:function(e,a,t){"use strict";t.r(a);var s=t(7),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"load-balancers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-balancers"}},[e._v("#")]),e._v(" Load balancers")]),e._v(" "),t("h2",{attrs:{id:"load-balancer-and-api-gateway-confusion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-balancer-and-api-gateway-confusion"}},[e._v("#")]),e._v(" Load balancer and API Gateway confusion")]),e._v(" "),t("p",[e._v("API gateway predominately does API management and provides various other key features such as IAM (Identity and Access Management), Rate limiting, circuit breakers. Hence, it mainly eliminates the need to implement API-specific code for functionalities such as security, caching, throttling, and monitoring for each of the microservice. Microservices typically expose the REST APIs for use in front ends, other microservices and 3rd party apps with help of API gateway.")]),e._v(" "),t("p",[e._v("However, normally, the API Management does not include load balancing function, so it should be used in conjunction with a load balancer to achieve the same.")]),e._v(" "),t("p",[e._v("In system architecture based on Azure, there is Azure Application Gateway which is a load balancer that runs on Layer 7 and provides more features than traditional load balancer (Layer 4) in terms of routing traffic using routing decisions based on additional attributes of HTTP request or content of traffic. This can also be termed as an application load balancer.")]),e._v(" "),t("p",[e._v("It shall be used in conjunction by "),t("strong",[e._v("Azure API Management")]),e._v(" (API gateway). Azure has a "),t("strong",[e._v("Traffic Manager")]),e._v(" for operating at DNS level which uses DNS to direct client requests to the most appropriate service endpoint based on a traffic-routing method and the health of the endpoints. "),t("strong",[e._v("Traffic manager")]),e._v(" also uses the rules configured at the DNS level and enables dstribution of the the load over multiple regions and data centers. Within every region or data center, there shall be "),t("strong",[e._v("application gateways")]),e._v(" coupled with load balancers such that, the application gateways shall help in determining the application server to fetch response from and the load balancer shall help in load balancing.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://i.stack.imgur.com/Tih2R.png",alt:"images"}})]),e._v(" "),t("h2",{attrs:{id:"reverse-proxy-vs-api-gateway-vs-load-balancer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reverse-proxy-vs-api-gateway-vs-load-balancer"}},[e._v("#")]),e._v(" Reverse proxy vs. API gateway vs. load balancer")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://lh3.googleusercontent.com/pw/ABLVV85NUp0j2suINAld47fvfH8_q-_YA3rrLxL_3f4xqhafrNjr33Jtzim_WZfUVtvvPhNVmc-SWhkcZvr66LMdi4CHi9EstF6EPlanVgdEpd__94stjtrdnSf6Y72c5ae2gR38FpJICxpg-wOHOmd1STwd7x3AvDfj-YKeo97a8dMG2ZrcImmS15orO8Y_3NsdBgUi5oXqm8OSzqwIhvQYeFehfsDG9Wux86n1BlKLKMmDk6BwolyyxFOZVoY4ouDfRM3fXZSg5KSsUXF9iwKuQ7QXfaoP53gdekQCW56A62HiQWSpLgnFRIaSusIAbEwyVw2CncetHhVSxRx_tHKxvl6jDzB3agkUnf7vKJ7O4X1fgpB9IfviauPGgq2u1nOR9rI72Bs7I_5srGuyYCsBWGcH2ldmsRb3LV3zd0vb1HM5hEXogn_6YjzC2yaEO3Xqd30RXnfVBSNo6avxoYFwe-Ac7_9tAEAUKa2PjcWOoqUt3mEPqfCrHTEtYotSVhWio1lyKmrCoT0UxRhNY9eBMtOoYIaYODZZNElUD6bGMVkv3tNo8UElDngHXeO2oQC07EH8gMidDW1QBRtHfRn7lDoSxqMdrXwEkOvToNFhJfCEPJZZbETmUHcc2fz53QNyt5uNZ6Wy4QS2nTLKTNqRPwPF7JsnSbJrKoQx3OhWpiMzqqKI8Qim0wdvf6ziVmMAztru95qDt5AfLUH13mBsBHmN1ujcC4NkFd1jwgCSS2OTxd5X8rVk6BKE8YNJWsx6nIBmc_8oIqquVg-OJuCrQNGju3LLnNRiG2hdfhbOoSCGqTcx2UVn-D0WVoObJ5Os63aaNsScsSbh9t8AHnPwvL1DkxqWvydbnUPfLwvrjyaUreVSulWMBKKzTBDwTS5v2rmmiOvug9CyLjdZFjjpEy3FSovPojrQ6iSBJbgoZg=w783-h925-s-no-gm",alt:"compare"}})]),e._v(" "),t("p",[e._v("As modern websites and applications are like busy beehives, we use a variety of tools to manage the buzz. Here we'll explore three superheroes: Reverse Proxy, API Gateway, and Load Balancer.")]),e._v(" "),t("p",[e._v("🔹Reverse Proxy: change identity")]),e._v(" "),t("ul",[t("li",[e._v("Fetching data secretly, keeping servers hidden.")]),e._v(" "),t("li",[e._v("Perfect for shielding sensitive websites from cyber-attacks and prying eyes.")])]),e._v(" "),t("p",[e._v("🔹API Gateway: postman")]),e._v(" "),t("ul",[t("li",[e._v("Delivers requests to the right services.")]),e._v(" "),t("li",[e._v("Ideal for bustling applications with numerous intercommunicating services.")])]),e._v(" "),t("p",[e._v("🔹Load Balancer: traffic cop")]),e._v(" "),t("ul",[t("li",[e._v("Directs traffic evenly across servers, preventing bottlenecks")]),e._v(" "),t("li",[e._v("Essential for popular websites with heavy traffic and high demand.")])]),e._v(" "),t("p",[e._v("In a nutshell, choose a Reverse Proxy for stealth, an API Gateway for organized communications, and a Load Balancer for traffic control.  Sometimes, it's wise to have all three - they make a super team that keeps your digital kingdom safe and efficient.")]),e._v(" "),t("h2",{attrs:{id:"routing-algorithms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#routing-algorithms"}},[e._v("#")]),e._v(" Routing Algorithms")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://lh3.googleusercontent.com/pw/ABLVV86Qi57-XGwhzrNhBWSPLtDPHYqsHdvThHM-3TrDAgRUNXTi9YyJKc3zz2P7DMLcAhBgQCjBHJJRfTOwzHcBgBNCE-X5786FB-h09lU9ssglsVyNr5vNjDF1I2lOOt_1ECda3tPlOPtASei4fwmRXkVCHcb63jExAfg2JVpbQme502zq84HNFFkj3O1eUQRkTcnobvtklc9UVSbxyRlQ_TzmG8sSesbfvWnTUK_LNU9FjBh5-h8KOmbYVVlRg4s6-yUb8UvuTtZsXnOp5gYKl93Dgb5pjaSaVlIQn1HgZbhTTgNqojKhygclXfjR0-LRLQ735GSxUIvzughwLrvcagcsXEjEF_EXM318k_Zz04QBca0p4vlC0UfY_FcEfhx8gBi2dC7mzm41BnMsd18uo9uVOmGnF-aw0gRj8lHvJgjBE3yoiNSJ-QzDNChyiDEyiGEzfb5xM2n4B6bx1COXHuaba0B8bVOQF9t33sv40rpcdjmzxZDeGOEqTJ0YK48RDZF3yE1XvtzfX0t839uLK3y3Onl0TFKDIfR48M909bvxK3_8scx9jS-m5AcB6NCGq3uEQDxSdLnWjYBAfkAcFiqCPyVH3qqEwoGGU1k0TfQMHw9WflRjSF_AjgW3lwSExfjaUOrMt9iLav8sNd9aJ3xzAkQfvOXCe9YmQatxSzfoDDuJufc5PQpoFEhT82pT9QbFEWmWsqgkk70JwoqvHCzOGURXlr5UpSHhDcLVvcsQywAUl6ZtPwiH-yAUqVUxst02L29I6aJ8gkThuRqlhYbKgXVuCFmsANTUV_niYXbxHer69HzfkYONIP0GNltOsmWeL-QH7ZS8dQkdC52whJ6cNT1HwdVywNzzlshg6KiQ26soXNcAqWFKA0f1QEnN7xhotvlEVxjOqmgx-l1NNUatNmp9lVb7f_8G76TRzg=w720-h900-s-no-gm",alt:"techniques"}})]),e._v(" "),t("h3",{attrs:{id:"round-robin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#round-robin"}},[e._v("#")]),e._v(" Round robin")]),e._v(" "),t("p",[e._v("The client requests are sent to different service instances in sequential order. The services are usually required to be stateless.")]),e._v(" "),t("h3",{attrs:{id:"sticky-round-robin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sticky-round-robin"}},[e._v("#")]),e._v(" Sticky round-robin")]),e._v(" "),t("p",[e._v("This is an improvement of the round-robin algorithm. If Alice’s first request goes to service A, the following requests go to service A as well.")]),e._v(" "),t("h3",{attrs:{id:"weighted-round-robin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#weighted-round-robin"}},[e._v("#")]),e._v(" Weighted round-robin")]),e._v(" "),t("p",[e._v("The admin can specify the weight for each service. The ones with a higher weight handle more requests than others.")]),e._v(" "),t("h3",{attrs:{id:"hash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hash"}},[e._v("#")]),e._v(" Hash")]),e._v(" "),t("p",[e._v("This algorithm applies a hash function on the incoming requests' IP or URL. The requests are routed to relevant instances based on the hash function result.")]),e._v(" "),t("h3",{attrs:{id:"least-connections"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#least-connections"}},[e._v("#")]),e._v(" Least connections")]),e._v(" "),t("p",[e._v("A new request is sent to the service instance with the least concurrent connections.")]),e._v(" "),t("h3",{attrs:{id:"least-response-time"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#least-response-time"}},[e._v("#")]),e._v(" Least response time")]),e._v(" "),t("p",[e._v("A new request is sent to the service instance with the fastest response time.")]),e._v(" "),t("h2",{attrs:{id:"tools"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tools"}},[e._v("#")]),e._v(" Tools")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("NGINX")]),e._v(": NGINX is a widely used open-source web server and reverse proxy server that can also function as an API Gateway. It offers features like load balancing, caching, SSL termination, and request routing. NGINX can be configured to handle API requests efficiently and provides high performance and scalability.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Kong")]),e._v(": Kong is an open-source API Gateway built on top of NGINX. It provides a comprehensive set of features such as request/response transformation, rate limiting, authentication, and more. Kong also supports plugins that extend its functionality, making it highly customizable and flexible.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Apigee")]),e._v(": Apigee is a full-featured API management platform that includes an API Gateway. It offers a wide range of capabilities, including security, analytics, developer portal, and monetization. Apigee is a cloud-based solution and provides a user-friendly interface to manage APIs effectively.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("AWS API Gateway")]),e._v(": AWS API Gateway is a fully managed service provided by Amazon Web Services. It allows you to create, publish, and manage APIs at any scale. AWS API Gateway integrates well with other AWS services and provides features like authentication, authorization, caching, and monitoring.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Azure API Management")]),e._v(": Azure API Management is a comprehensive API management solution offered by Microsoft Azure. It includes an API Gateway that enables you to secure, publish, and monitor APIs. Azure API Management also provides features like developer portal, analytics, and developer engagement tools.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Tyk")]),e._v(": Tyk is an open-source API Gateway that offers features like rate limiting, authentication, request/response transformation, and more. It can be deployed on-premises or in the cloud and provides a user-friendly dashboard to manage APIs effectively.")])])]),e._v(" "),t("h2",{attrs:{id:"a-load-balancer-for-a-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-load-balancer-for-a-database"}},[e._v("#")]),e._v(" A load balancer for a database?")]),e._v(" "),t("p",[e._v("In a microservice architecture, it is common to have multiple instances of a database to handle the increased load and ensure high availability. However, using a load balancer directly for the database is not a recommended approach.")]),e._v(" "),t("p",[e._v("Load balancers are typically used to distribute incoming network traffic across multiple servers or instances to optimize performance and ensure fault tolerance. They work at the network layer and are designed to handle HTTP requests, TCP connections, or UDP packets.")]),e._v(" "),t("p",[e._v("On the other hand, databases operate at a higher level, dealing with data storage, retrieval, and manipulation. They have their own mechanisms for handling concurrency, consistency, and data integrity. Load balancing at the database level requires a different approach.")]),e._v(" "),t("p",[e._v("Instead of using a load balancer directly for the database, a common practice in a microservice architecture is to use a database clustering or replication mechanism. This involves setting up multiple instances of the database and synchronizing the data between them.")]),e._v(" "),t("p",[e._v("There are different approaches to database clustering, such as master-slave replication or multi-master replication. These mechanisms ensure that the data is replicated across multiple instances, providing fault tolerance and high availability.")]),e._v(" "),t("p",[e._v("To distribute the load across the database instances, you can use a connection pool or a database proxy. A connection pool manages a pool of database connections and distributes the workload among the available instances. A database proxy acts as an intermediary between the application and the database, routing the requests to the appropriate instance based on the load or other criteria.")]),e._v(" "),t("p",[e._v("Using a connection pool or a database proxy allows you to distribute the workload across the database instances without the need for a load balancer. It also provides additional benefits such as connection pooling, query caching, and request routing based on the application's needs.")]),e._v(" "),t("p",[e._v("In summary, while load balancers are not typically used directly for databases in a microservice architecture, you can achieve load balancing and high availability by using database clustering mechanisms and connection pooling or a database proxy. These approaches ensure that the workload is distributed across multiple database instances, providing fault tolerance and scalability.")])])}),[],!1,null,null,null);a.default=n.exports}}]);