(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1646:function(e,s,t){"use strict";t.r(s);var i=t(7),a=Object(i.a)({},(function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"design-new-feed-system"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#design-new-feed-system"}},[e._v("#")]),e._v(" Design new feed system")]),e._v(" "),i("p",[e._v("What is news feed? According to the Facebook help page, “News feed is the constantly updating list of stories in the middle of your home page. News Feed includes status updates, photos, videos, links, app activity, and likes from people, pages, and groups that you follow on Facebook”. This is a popular interview question. Similar questions commonly asked are: design Facebook news feed,\nInstagram feed, Twitter timeline, etc.")]),e._v(" "),i("h2",{attrs:{id:"step-1-understand-the-problem-and-establish-design-scope"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#step-1-understand-the-problem-and-establish-design-scope"}},[e._v("#")]),e._v(" Step 1 - Understand the problem and establish design scope")]),e._v(" "),i("p",[e._v("The first set of clarification questions are to understand what the interviewer has in mind when she asks you to design a news feed system. At the very least, you should figure out what features to support. Here is an example of candidate-interviewer interaction:")]),e._v(" "),i("p",[i("strong",[e._v("Candidate")]),e._v(": Is this a mobile app? Or a web app? Or both?"),i("br"),e._v(" "),i("strong",[e._v("Interviewer")]),e._v(": Both")]),e._v(" "),i("p",[i("strong",[e._v("Candidate")]),e._v(": What are the important features?"),i("br"),e._v(" "),i("strong",[e._v("Interview")]),e._v(": A user can publish a post and see her friends’ posts on the news feed page.")]),e._v(" "),i("p",[i("strong",[e._v("Candidate")]),e._v(": Is the news feed sorted by reverse chronological order or any particular order such as topic scores? For instance, posts from your close friends have higher scores."),i("br"),e._v(" "),i("strong",[e._v("Interviewer")]),e._v(": To keep things simple, let us assume the feed is sorted by reverse chronological order.")]),e._v(" "),i("p",[i("strong",[e._v("Candidate")]),e._v(": How many friends can a user have?"),i("br"),e._v(" "),i("strong",[e._v("Interviewer")]),e._v(": 5000")]),e._v(" "),i("p",[i("strong",[e._v("Candidate")]),e._v(": What is the traffic volume?"),i("br"),e._v(" "),i("strong",[e._v("Interviewer")]),e._v(": 10 million DAU")]),e._v(" "),i("p",[i("strong",[e._v("Candidate")]),e._v(": Can feed contain images, videos, or just text?"),i("br"),e._v(" "),i("strong",[e._v("Interviewer")]),e._v(": It can contain media files, including both images and videos. Now you have gathered the requirements, we focus on designing the system.")]),e._v(" "),i("h2",{attrs:{id:"step-2-propose-high-level-design-and-get-buy-in"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#step-2-propose-high-level-design-and-get-buy-in"}},[e._v("#")]),e._v(" Step 2 - Propose high-level design and get buy-in")]),e._v(" "),i("p",[e._v("The design is divided into two flows: feed publishing and news feed building.")]),e._v(" "),i("ul",[i("li",[e._v("Feed publishing: when a user publishes a post, corresponding data is written into cache and database. A post is populated to her friends’ news feed.")]),e._v(" "),i("li",[e._v("Newsfeed building: for simplicity, let us assume the news feed is built by aggregating friends’ posts in reverse chronological order.")])]),e._v(" "),i("h3",{attrs:{id:"newsfeed-apis"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#newsfeed-apis"}},[e._v("#")]),e._v(" Newsfeed APIs")]),e._v(" "),i("p",[e._v("The news feed APIs are the primary ways for clients to communicate with servers. Those APIs are HTTP based that allow clients to perform actions, which include posting a status, retrieving news feed, adding friends, etc. We discuss two most important APIs: feed publishing API and news feed retrieval API.")]),e._v(" "),i("h4",{attrs:{id:"feed-publishing-api"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#feed-publishing-api"}},[e._v("#")]),e._v(" Feed publishing API")]),e._v(" "),i("p",[e._v("To publish a post, a HTTP POST request will be sent to the server. The API is shown below:")]),e._v(" "),i("p",[i("em",[e._v("POST /v1/me/feed")])]),e._v(" "),i("p",[e._v("Params:")]),e._v(" "),i("ul",[i("li",[e._v("content: content is the text of the post.")]),e._v(" "),i("li",[e._v("auth_token: it is used to authenticate API requests.")])]),e._v(" "),i("h4",{attrs:{id:"newsfeed-retrieval-api"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#newsfeed-retrieval-api"}},[e._v("#")]),e._v(" Newsfeed retrieval API")]),e._v(" "),i("p",[e._v("The API to retrieve news feed is shown below:")]),e._v(" "),i("p",[i("em",[e._v("GET /v1/me/feed")])]),e._v(" "),i("p",[e._v("Params:")]),e._v(" "),i("ul",[i("li",[e._v("auth_token: it is used to authenticate API requests.")])]),e._v(" "),i("h3",{attrs:{id:"feed-publishing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#feed-publishing"}},[e._v("#")]),e._v(" Feed publishing")]),e._v(" "),i("p",[e._v("High-level design of the feed publishing flow.")]),e._v(" "),i("p",[i("img",{attrs:{src:t(987),alt:"image"}})]),e._v(" "),i("ul",[i("li",[e._v("User: a user can view news feeds on a browser or mobile app. A user makes a post with content “Hello” through API:\n"),i("code",[e._v("/v1/me/feed?content=Hello&auth_token={auth_token}")])]),e._v(" "),i("li",[e._v("Load balancer: distribute traffic to web servers.")]),e._v(" "),i("li",[e._v("Web servers: web servers redirect traffic to different internal services.")]),e._v(" "),i("li",[e._v("Post service: persist post in the database and cache.")]),e._v(" "),i("li",[e._v("Fanout service: push new content to friends’ news feed. Newsfeed data is stored in the cache for fast retrieval.")]),e._v(" "),i("li",[e._v("Notification service: inform friends that new content is available and send out push\nnotifications.")])]),e._v(" "),i("h3",{attrs:{id:"newsfeed-building"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#newsfeed-building"}},[e._v("#")]),e._v(" Newsfeed building")]),e._v(" "),i("p",[e._v("The high-level design")]),e._v(" "),i("p",[i("img",{attrs:{src:t(988),alt:"image"}})]),e._v(" "),i("ul",[i("li",[e._v("User: a user sends a request to retrieve her news feed. The request looks like this: "),i("code",[e._v("/v1/me/feed")]),e._v(".")]),e._v(" "),i("li",[e._v("Load balancer: load balancer redirects traffic to web servers.")]),e._v(" "),i("li",[e._v("Web servers: web servers route requests to newsfeed service.")]),e._v(" "),i("li",[e._v("Newsfeed service: news feed service fetches news feed from the cache.")]),e._v(" "),i("li",[e._v("Newsfeed cache: store news feed IDs needed to render the news feed.")])]),e._v(" "),i("h2",{attrs:{id:"step-3-design-deep-dive"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#step-3-design-deep-dive"}},[e._v("#")]),e._v(" Step 3 - Design deep dive")]),e._v(" "),i("p",[e._v("The high-level design briefly covered two flows: feed publishing and news feed building. Here, we discuss those topics in more depth.")]),e._v(" "),i("h3",{attrs:{id:"feed-publishing-deep-dive"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#feed-publishing-deep-dive"}},[e._v("#")]),e._v(" Feed publishing deep dive")]),e._v(" "),i("p",[e._v("outlines the detailed design for feed publishing. We have discussed most of components in high-level design, and we will focus on two components: web servers and fanout service")]),e._v(" "),i("p",[i("img",{attrs:{src:t(989),alt:"image"}})]),e._v(" "),i("h4",{attrs:{id:"web-servers"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#web-servers"}},[e._v("#")]),e._v(" Web servers")]),e._v(" "),i("p",[e._v("Besides communicating with clients, web servers enforce authentication and rate-limiting.")]),e._v(" "),i("p",[e._v("Only users signed in with valid "),i("em",[e._v("auth_token")]),e._v(" are allowed to make posts. The system limits the number of posts a user can make within a certain period, vital to prevent spam and abusive content.")]),e._v(" "),i("h4",{attrs:{id:"fanout-service"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fanout-service"}},[e._v("#")]),e._v(" Fanout service")]),e._v(" "),i("p",[e._v("Fanout is the process of delivering a post to all friends. Two types of fanout models are: fanout on write (also called push model) and fanout on read (also called pull model). Both models have pros and cons. We explain their workflows and explore the best approach to support our system.")]),e._v(" "),i("p",[i("strong",[e._v("Fanout on write")])]),e._v(" "),i("p",[e._v("With this approach, news feed is pre-computed during write time. A new post is delivered to friends’ cache immediately after it is published.")]),e._v(" "),i("ul",[i("li",[e._v("✅ Pros:\n"),i("ul",[i("li",[e._v("The news feed is generated in real-time and can be pushed to friends immediately.")]),e._v(" "),i("li",[e._v("Fetching news feed is fast because the news feed is pre-computed during write time.")])])]),e._v(" "),i("li",[e._v("❌ Cons:\n"),i("ul",[i("li",[e._v("If a user has many friends, fetching the friend list and generating news feeds for all of them are slow and time consuming. It is called hotkey problem.")]),e._v(" "),i("li",[e._v("For inactive users or those rarely log in, pre-computing news feeds waste computing resources.")])])])]),e._v(" "),i("p",[i("strong",[e._v("Fanout on read")])]),e._v(" "),i("p",[e._v("The news feed is generated during read time. This is an on-demand model. Recent posts are pulled when a user loads her home page.")]),e._v(" "),i("ul",[i("li",[e._v("✅ Pros:\n"),i("ul",[i("li",[e._v("For inactive users or those who rarely log in, fanout on read works better because it will not waste computing resources on them.")]),e._v(" "),i("li",[e._v("Data is not pushed to friends so there is no hotkey problem.")])])]),e._v(" "),i("li",[e._v("❌ Cons:\n"),i("ul",[i("li",[e._v("Fetching the news feed is slow as the news feed is not pre-computed.")])])])]),e._v(" "),i("p",[e._v("We adopt a hybrid approach to get benefits of both approaches and avoid pitfalls in them. Since fetching the news feed fast is crucial, we use a push model for the majority of users.")]),e._v(" "),i("p",[e._v("For celebrities or users who have many friends/followers, we let followers pull news content on-demand to avoid system overload. Consistent hashing is a useful technique to mitigate the hotkey problem as it helps to distribute requests/data more evenly.")]),e._v(" "),i("p",[e._v("Let us take a close look at the fanout service as shown below")]),e._v(" "),i("p",[i("img",{attrs:{src:t(990),alt:"imnage"}})]),e._v(" "),i("p",[e._v("The fanout service works as follows:")]),e._v(" "),i("ol",[i("li",[e._v("Fetch friend IDs from the graph database. Graph databases are suited for managing friend relationship and friend recommendations. Interested readers wishing to learn more about this concept should refer to the reference material [2].")]),e._v(" "),i("li",[e._v("Get friends info from the user cache. The system then filters out friends based on user settings. For example, if you mute someone, her posts will not show up on your news feed even though you are still friends. Another reason why posts may not show is that a user could selectively share information with specific friends or hide it from other people.")]),e._v(" "),i("li",[e._v("Send friends list and new post ID to the message queue.")]),e._v(" "),i("li",[e._v("Fanout workers fetch data from the message queue and store news feed data in the news feed cache. You can think of the news feed cache as a "),i("code",[e._v("<post_id, user_id>")]),e._v(" mapping table. Whenever a new post is made, it will be appended to the news feed table. The memory consumption can become very large if we store the entire user and post objects in the cache. Thus, only IDs are stored. To keep the memory size small, we set a configurable limit. The chance of a user scrolling through thousands of posts in news feed is slim. Most users are only interested in the latest content, so the cache missrate is low.")]),e._v(" "),i("li",[e._v("Store "),i("code",[e._v("<post_id, user_id >")]),e._v(" in news feed cache. Figure below shows an example of what the news feed looks like in cache.")])]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[e._v("post_id")]),e._v(" "),i("th",[e._v("user_id")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("post_id")]),e._v(" "),i("td",[e._v("user_id")])]),e._v(" "),i("tr",[i("td",[e._v("post_id")]),e._v(" "),i("td",[e._v("user_id")])]),e._v(" "),i("tr",[i("td",[e._v("post_id")]),e._v(" "),i("td",[e._v("user_id")])]),e._v(" "),i("tr",[i("td",[e._v("post_id")]),e._v(" "),i("td",[e._v("user_id")])]),e._v(" "),i("tr",[i("td",[e._v("post_id")]),e._v(" "),i("td",[e._v("user_id")])]),e._v(" "),i("tr",[i("td",[e._v("post_id")]),e._v(" "),i("td",[e._v("user_id")])])])]),e._v(" "),i("h3",{attrs:{id:"newsfeed-retrieval-deep-dive"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#newsfeed-retrieval-deep-dive"}},[e._v("#")]),e._v(" Newsfeed retrieval deep dive")]),e._v(" "),i("p",[e._v("illustrates the detailed design for news feed retrieval")]),e._v(" "),i("p",[i("img",{attrs:{src:t(991),alt:"imaeg"}})]),e._v(" "),i("p",[e._v("Media content (images, videos, etc.) are stored in CDN for fast retrieval. Let us look at how a client retrieves news feed.")]),e._v(" "),i("ol",[i("li",[e._v("A user sends a request to retrieve her news feed. The request looks like this: "),i("code",[e._v("/v1/me/feed")])]),e._v(" "),i("li",[e._v("The load balancer redistributes requests to web servers.")]),e._v(" "),i("li",[e._v("Web servers call the news feed service to fetch news feeds.")]),e._v(" "),i("li",[e._v("News feed service gets a list post IDs from the news feed cache.")]),e._v(" "),i("li",[e._v("A user’s news feed is more than just a list of feed IDs. It contains username, profile picture, post content, post image, etc. Thus, the news feed service fetches the complete user and post objects from caches (user cache and post cache) to construct the fully hydrated news feed.")]),e._v(" "),i("li",[e._v("The fully hydrated news feed is returned in JSON format back to the client for rendering")])]),e._v(" "),i("h3",{attrs:{id:"cache-architecture"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#cache-architecture"}},[e._v("#")]),e._v(" Cache architecture")]),e._v(" "),i("p",[e._v("Cache is extremely important for a news feed system. We divide the cache tier into 5 layers")]),e._v(" "),i("p",[i("img",{attrs:{src:t(992),alt:"cache arch"}})]),e._v(" "),i("ul",[i("li",[e._v("News Feed: It stores IDs of news feeds.")]),e._v(" "),i("li",[e._v("Content: It stores every post data. Popular content is stored in hot cache.")]),e._v(" "),i("li",[e._v("Social Graph: It stores user relationship data.")]),e._v(" "),i("li",[e._v("Action: It stores info about whether a user liked a post, replied a post, or took other actions on a post.")]),e._v(" "),i("li",[e._v("Counters: It stores counters for like, reply, follower, following, etc.")])]),e._v(" "),i("h2",{attrs:{id:"step-4-wrap-up"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#step-4-wrap-up"}},[e._v("#")]),e._v(" Step 4 - Wrap up")]),e._v(" "),i("p",[e._v("In this chapter, we designed a news feed system. Our design contains two flows: "),i("strong",[e._v("feed publishing")]),e._v(" and news "),i("strong",[e._v("feed retrieval")])]),e._v(" "),i("p",[e._v("Like any system design interview questions, there is no perfect way to design a system. Every company has its unique constraints, and you must design a system to fit those constraints.")]),e._v(" "),i("p",[e._v("Understanding the tradeoffs of your design and technology choices are important. If there are a few minutes left, you can talk about scalability issues. To avoid duplicated discussion, only high-level talking points are listed below.")]),e._v(" "),i("p",[e._v("Scaling the database:")]),e._v(" "),i("ul",[i("li",[e._v("Vertical scaling vs Horizontal scaling")]),e._v(" "),i("li",[e._v("SQL vs NoSQL")]),e._v(" "),i("li",[e._v("Master-slave replication")]),e._v(" "),i("li",[e._v("Read replicas")]),e._v(" "),i("li",[e._v("Consistency models")]),e._v(" "),i("li",[e._v("Database sharding")])]),e._v(" "),i("p",[e._v("Other talking points:")]),e._v(" "),i("ul",[i("li",[e._v("Keep web tier stateless")]),e._v(" "),i("li",[e._v("Cache data as much as you can")]),e._v(" "),i("li",[e._v("Support multiple data centers")]),e._v(" "),i("li",[e._v("Lose couple components with message queues")]),e._v(" "),i("li",[e._v("Monitor key metrics. For instance, QPS during peak hours and latency while users refreshing their news feed are interesting to monitor.")])])])}),[],!1,null,null,null);s.default=a.exports},987:function(e,s,t){e.exports=t.p+"assets/img/f2.c8275451.png"},988:function(e,s,t){e.exports=t.p+"assets/img/f3.8c43f4dc.png"},989:function(e,s,t){e.exports=t.p+"assets/img/f4.52b619f6.png"},990:function(e,s,t){e.exports=t.p+"assets/img/f5.fbb100d8.png"},991:function(e,s,t){e.exports=t.p+"assets/img/f7.4d2994b1.png"},992:function(e,s,t){e.exports=t.p+"assets/img/f8.5b21d202.png"}}]);