(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{1304:function(e,t,n){"use strict";n.r(t);var s=n(7),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"event-driven-architecture-eda"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-driven-architecture-eda"}},[e._v("#")]),e._v(" Event-driven architecture (EDA)")]),e._v(" "),n("p",[e._v("Event-Driven Architecture (EDA) is a software design pattern where systems react to events or significant occurrences. Instead of following a strict, predefined flow, components communicate by producing and consuming events.")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://i.pinimg.com/originals/5a/7c/14/5a7c14fc09282208748f56b83a3847a8.gif",alt:"EDA"}})]),e._v(" "),n("p",[n("strong",[e._v("Key Components of EDA:")])]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Events")]),e._v(": These are occurrences or changes in the system that trigger actions. Examples include user clicks, database updates, or sensor readings.")]),e._v(" "),n("li",[n("strong",[e._v("Event Producers")]),e._v(": Components that generate events.")]),e._v(" "),n("li",[n("strong",[e._v("Event Consumers")]),e._v(": Components that react to events and perform specific actions.")]),e._v(" "),n("li",[n("strong",[e._v("Event Broker")]),e._v(": A middleware component that facilitates the distribution of events to interested consumers.")])]),e._v(" "),n("h2",{attrs:{id:"patterns"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#patterns"}},[e._v("#")]),e._v(" Patterns")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://i.pinimg.com/564x/48/06/85/4806853564568b882a026b699422e939.jpg",alt:"Patterns"}})]),e._v(" "),n("h3",{attrs:{id:"event-notification"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-notification"}},[e._v("#")]),e._v(" Event Notification")]),e._v(" "),n("p",[e._v("The Event Notification Pattern is a fundamental building block in Event-Driven Architecture (EDA). It involves using events to communicate changes in the system to interested parties.")]),e._v(" "),n("h3",{attrs:{id:"event-carried-state-transfer-ecst"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-carried-state-transfer-ecst"}},[e._v("#")]),e._v(" Event-Carried State Transfer (ECST)")]),e._v(" "),n("p",[e._v("Event-Carried State Transfer (ECST) is a pattern where the state of a system is embedded within the events themselves. Instead of merely notifying about a state change, the event carries the complete or partial state information.")]),e._v(" "),n("h3",{attrs:{id:"event-sourcing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-sourcing"}},[e._v("#")]),e._v(" "),n("RouterLink",{attrs:{to:"/architect/eventsource.html"}},[e._v("Event Sourcing")])],1),e._v(" "),n("p",[e._v("Event Sourcing is a data management pattern where the state of an application is represented by a sequence of events. Instead of storing the current state of an object, you store a log of all the events that have happened to it.")]),e._v(" "),n("h3",{attrs:{id:"command-query-responsibility-segregation-cqrs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#command-query-responsibility-segregation-cqrs"}},[e._v("#")]),e._v(" Command Query Responsibility Segregation (CQRS)")]),e._v(" "),n("p",[e._v("CQRS is a pattern that separates the read and write operations for a data store. This separation allows for optimization of both read and write operations independently, leading to improved performance, scalability, and security.")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://i.pinimg.com/originals/13/41/f6/1341f69dcdcb1434395689f060c1e183.webp",alt:"Event sourcing & CQRS"}})]),e._v(" "),n("h2",{attrs:{id:"rules-in-system"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rules-in-system"}},[e._v("#")]),e._v(" Rules in System")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://i.pinimg.com/originals/1b/c7/a5/1bc7a50757d22f95963a9eecf12661e3.jpg",alt:"Rules"}})]),e._v(" "),n("ul",[n("li",[e._v("Rule #1: Use JSON everywhere")]),e._v(" "),n("li",[e._v("Rule #2: Use standard event envelope")]),e._v(" "),n("li",[e._v("Rule #3: Use unique event ID")]),e._v(" "),n("li",[e._v("Rule #4: Use schemas and contracts")]),e._v(" "),n("li",[e._v("Rule #5: Maintain backward compatibility")]),e._v(" "),n("li",[e._v("Rule #6: Maintain a schema registry")]),e._v(" "),n("li",[e._v("Rule #7: Use an event broker")]),e._v(" "),n("li",[e._v("Rule #8: Use event supporting APIs")]),e._v(" "),n("li",[e._v("Rule #9: Evolve your events")]),e._v(" "),n("li",[e._v("Rule #10: Use the storage-first pattern")]),e._v(" "),n("li",[e._v("Rule #11: Trace your events")])]),e._v(" "),n("p",[n("img",{attrs:{src:"https://i.pinimg.com/originals/d2/29/b5/d229b5a731e58eb9703531dda4387832.png",alt:"EDA Notes"}})]),e._v(" "),n("h2",{attrs:{id:"nodejs-and-eda"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-and-eda"}},[e._v("#")]),e._v(" Nodejs and EDA")]),e._v(" "),n("p",[e._v("Node.js and Event-Driven Architecture (EDA) are intrinsically linked. Node.js's asynchronous, non-blocking nature aligns seamlessly with EDA's core principles.")]),e._v(" "),n("p",[e._v("Node.js and EDA: A Perfect Match\nNode.js and Event-Driven Architecture (EDA) are intrinsically linked. Node.js's asynchronous, non-blocking nature aligns seamlessly with EDA's core principles.")]),e._v(" "),n("p",[n("strong",[e._v("How Node.js Supports EDA")])]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Asynchronous Programming")]),e._v(": Node.js excels at handling multiple concurrent operations without blocking the main thread. This is fundamental to EDA, where events trigger actions independently.")]),e._v(" "),n("li",[n("strong",[e._v("Event Loop")]),e._v(": Node.js employs an event loop to process events efficiently, making it ideal for handling a high volume of concurrent connections and asynchronous tasks.")]),e._v(" "),n("li",[n("strong",[e._v("I/O Operations")]),e._v(": Node.js is optimized for non-blocking I/O, which is crucial for EDA systems that often involve heavy I/O workloads.")]),e._v(" "),n("li",[n("strong",[e._v("Lightweight and Efficient")]),e._v(": Node.js's single-threaded architecture and efficient memory usage make it suitable for building scalable and responsive EDA applications.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);