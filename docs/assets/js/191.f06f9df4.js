(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{1306:function(e,t,s){"use strict";s.r(t);var a=s(7),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"event-driven-architecture-eda"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-driven-architecture-eda"}},[e._v("#")]),e._v(" Event-driven architecture (EDA)")]),e._v(" "),s("p",[e._v("Event-Driven Architecture (EDA) is a software design pattern where systems react to events or significant occurrences. Instead of following a strict, predefined flow, components communicate by producing and consuming events.")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://i.pinimg.com/originals/5a/7c/14/5a7c14fc09282208748f56b83a3847a8.gif",alt:"EDA"}})]),e._v(" "),s("p",[s("strong",[e._v("Key Components of EDA:")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Events")]),e._v(": These are occurrences or changes in the system that trigger actions. Examples include user clicks, database updates, or sensor readings.")]),e._v(" "),s("li",[s("strong",[e._v("Event Producers")]),e._v(": Components that generate events.")]),e._v(" "),s("li",[s("strong",[e._v("Event Consumers")]),e._v(": Components that react to events and perform specific actions.")]),e._v(" "),s("li",[s("strong",[e._v("Event Broker")]),e._v(": A middleware component that facilitates the distribution of events to interested consumers.")])]),e._v(" "),s("h2",{attrs:{id:"event-patterns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-patterns"}},[e._v("#")]),e._v(" Event Patterns")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://i.pinimg.com/564x/48/06/85/4806853564568b882a026b699422e939.jpg",alt:"Patterns"}})]),e._v(" "),s("h3",{attrs:{id:"event-notification"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-notification"}},[e._v("#")]),e._v(" Event Notification")]),e._v(" "),s("p",[e._v("The Event Notification Pattern is a fundamental building block in Event-Driven Architecture (EDA). It involves using events to communicate changes in the system to interested parties.")]),e._v(" "),s("h3",{attrs:{id:"event-carried-state-transfer-ecst"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-carried-state-transfer-ecst"}},[e._v("#")]),e._v(" Event-Carried State Transfer (ECST)")]),e._v(" "),s("p",[e._v("Event-Carried State Transfer (ECST) is a pattern where the state of a system is embedded within the events themselves. Instead of merely notifying about a state change, the event carries the complete or partial state information.")]),e._v(" "),s("h3",{attrs:{id:"event-sourcing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-sourcing"}},[e._v("#")]),e._v(" "),s("RouterLink",{attrs:{to:"/architect/eventsource.html"}},[e._v("Event Sourcing")])],1),e._v(" "),s("p",[e._v("Event Sourcing is a data management pattern where the state of an application is represented by a sequence of events. Instead of storing the current state of an object, you store a log of all the events that have happened to it.")]),e._v(" "),s("h3",{attrs:{id:"command-query-responsibility-segregation-cqrs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-query-responsibility-segregation-cqrs"}},[e._v("#")]),e._v(" Command Query Responsibility Segregation (CQRS)")]),e._v(" "),s("p",[e._v("CQRS is a pattern that separates the read and write operations for a data store. This separation allows for optimization of both read and write operations independently, leading to improved performance, scalability, and security.")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://i.pinimg.com/originals/13/41/f6/1341f69dcdcb1434395689f060c1e183.webp",alt:"Event sourcing & CQRS"}})]),e._v(" "),s("h2",{attrs:{id:"queue-patterns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#queue-patterns"}},[e._v("#")]),e._v(" Queue patterns")]),e._v(" "),s("h3",{attrs:{id:"copier"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#copier"}},[e._v("#")]),e._v(" Copier")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://i.pinimg.com/originals/c9/76/51/c976519367f48a2e1c6051046604bc30.jpg",alt:"Copier pattern"}})]),e._v(" "),s("p",[e._v("A copier duplicates a single stream of work items into two or more identical streams.")]),e._v(" "),s("p",[e._v("This pattern is useful when multiple pieces of work are needed on the same work item.")]),e._v(" "),s("p",[e._v("An example of this might be rendering a video. Depending on where the video is intended to be shown, there are many formats that are useful when rendering a video.")]),e._v(" "),s("ul",[s("li",[e._v("A high-resolution format for playing off of a hard drive")]),e._v(" "),s("li",[e._v("A rendering for digital streaming")]),e._v(" "),s("li",[e._v("An animated GIF thumbnail.")])]),e._v(" "),s("p",[e._v("These work items can be modeled as separate work queues for each render, but the input to each work item is identical.")]),e._v(" "),s("h3",{attrs:{id:"process-filter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#process-filter"}},[e._v("#")]),e._v(" Process & Filter")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://i.pinimg.com/originals/5f/26/21/5f2621999129356c5f07534658eea16c.png",alt:"Process & Filter"}})]),e._v(" "),s("p",[e._v("The role of a filter is to reduce a stream of work items to a smaller stream of work items by filtering out work items that don't meet particular criteria.")]),e._v(" "),s("p",[e._v("For example, a batch workflow that handles new users signing up for a service.")]),e._v(" "),s("ul",[s("li",[e._v("Some users checked the option to be contacted via email for promotions and other information.")]),e._v(" "),s("li",[e._v("In this case, you can filter the set of newly signed-up users to only those who have explicitly opted to be contacted.")])]),e._v(" "),s("p",[e._v("The original producer provides the complete list of items to be worked on, and the filter then adjusts that list based on the filter criteria and only produces those filtered results to the next work queue.")]),e._v(" "),s("h3",{attrs:{id:"process-split"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#process-split"}},[e._v("#")]),e._v(" Process & Split")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://i.pinimg.com/originals/31/3b/a2/313ba2ab831119b838c3d9503b690995.png",alt:"Process & Split"}})]),e._v(" "),s("p",[e._v("The role of a splitter is to evaluate some criteria (like a filter), but instead of removing the input, the splitter sends different inputs to different queues based on those criteria.")]),e._v(" "),s("p",[e._v("An example of an application of the splitter pattern is online order processing, where people can receive shipping notifications via email or text message.")]),e._v(" "),s("p",[e._v("Given a work queue of shipped items, the splitter splits it into two queues: one responsible for sending emails and one for sending text messages.")]),e._v(" "),s("p",[e._v("A Copier and two Filters can also implement a Splitter.")]),e._v(" "),s("h3",{attrs:{id:"sharder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sharder"}},[e._v("#")]),e._v(" Sharder")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://i.pinimg.com/originals/74/0d/0b/740d0bd2e472c75a22f9ce9a8ec7d053.png",alt:"Sharder pattern"}})]),e._v(" "),s("p",[e._v("The role of a shader in a workflow is to divide a single queue into an evenly divided collection of work items based on some sharding function.")]),e._v(" "),s("p",[e._v("One reason for sharding is reliability. If you shard your work queue, then the failure of a single workflow only affects a fraction of your service.")]),e._v(" "),s("p",[e._v("Imagine you push a bad update to your worker container, which causes your workers to crash and your queue to stop processing work items.")]),e._v(" "),s("p",[e._v("If you only have a single work queue processing items, your service will have a complete outage, with all users affected.")]),e._v(" "),s("h3",{attrs:{id:"merger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#merger"}},[e._v("#")]),e._v(" Merger")]),e._v(" "),s("p",[e._v("A merger is the opposite of a copier; its job is to combine two different work queues into a single queue.")]),e._v(" "),s("p",[e._v("For example, many different source repositories may add new commits simultaneously.")]),e._v(" "),s("p",[e._v("You want to take each of these commits and perform a build-and-test.")]),e._v(" "),s("p",[e._v("Creating a separate build infrastructure for each source repository is not scalable.")]),e._v(" "),s("p",[e._v("We can model each source repository as a separate work queue source that provides a set of commits.")]),e._v(" "),s("p",[e._v("Using a merger adapter, we can transform these different work queue inputs into a single merged set of inputs.")]),e._v(" "),s("p",[e._v("This merged stream of commits is then the single source of the build system that performs the actual build.")]),e._v(" "),s("p",[e._v("The merger is another great example of the adapter pattern, though in this case, the adapter is adapting multiple running source containers into a single merged source.")]),e._v(" "),s("h2",{attrs:{id:"rules-in-system"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rules-in-system"}},[e._v("#")]),e._v(" Rules in System")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://i.pinimg.com/originals/1b/c7/a5/1bc7a50757d22f95963a9eecf12661e3.jpg",alt:"Rules"}})]),e._v(" "),s("ul",[s("li",[e._v("Rule #1: Use JSON everywhere")]),e._v(" "),s("li",[e._v("Rule #2: Use standard event envelope")]),e._v(" "),s("li",[e._v("Rule #3: Use unique event ID")]),e._v(" "),s("li",[e._v("Rule #4: Use schemas and contracts")]),e._v(" "),s("li",[e._v("Rule #5: Maintain backward compatibility")]),e._v(" "),s("li",[e._v("Rule #6: Maintain a schema registry")]),e._v(" "),s("li",[e._v("Rule #7: Use an event broker")]),e._v(" "),s("li",[e._v("Rule #8: Use event supporting APIs")]),e._v(" "),s("li",[e._v("Rule #9: Evolve your events")]),e._v(" "),s("li",[e._v("Rule #10: Use the storage-first pattern")]),e._v(" "),s("li",[e._v("Rule #11: Trace your events")])]),e._v(" "),s("p",[s("img",{attrs:{src:"https://i.pinimg.com/originals/d2/29/b5/d229b5a731e58eb9703531dda4387832.png",alt:"EDA Notes"}})]),e._v(" "),s("h2",{attrs:{id:"nodejs-and-eda"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-and-eda"}},[e._v("#")]),e._v(" Nodejs and EDA")]),e._v(" "),s("p",[e._v("Node.js and Event-Driven Architecture (EDA) are intrinsically linked. Node.js's asynchronous, non-blocking nature aligns seamlessly with EDA's core principles.")]),e._v(" "),s("p",[e._v("Node.js and EDA: A Perfect Match\nNode.js and Event-Driven Architecture (EDA) are intrinsically linked. Node.js's asynchronous, non-blocking nature aligns seamlessly with EDA's core principles.")]),e._v(" "),s("p",[s("strong",[e._v("How Node.js Supports EDA")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Asynchronous Programming")]),e._v(": Node.js excels at handling multiple concurrent operations without blocking the main thread. This is fundamental to EDA, where events trigger actions independently.")]),e._v(" "),s("li",[s("strong",[e._v("Event Loop")]),e._v(": Node.js employs an event loop to process events efficiently, making it ideal for handling a high volume of concurrent connections and asynchronous tasks.")]),e._v(" "),s("li",[s("strong",[e._v("I/O Operations")]),e._v(": Node.js is optimized for non-blocking I/O, which is crucial for EDA systems that often involve heavy I/O workloads.")]),e._v(" "),s("li",[s("strong",[e._v("Lightweight and Efficient")]),e._v(": Node.js's single-threaded architecture and efficient memory usage make it suitable for building scalable and responsive EDA applications.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);