(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1372:function(e,s,t){"use strict";t.r(s);var i=t(7),a=Object(i.a)({},(function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"simple-queue-service-sqs"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#simple-queue-service-sqs"}},[e._v("#")]),e._v(" Simple Queue Service (SQS)")]),e._v(" "),i("h2",{attrs:{id:"standard-queue"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#standard-queue"}},[e._v("#")]),e._v(" Standard Queue")]),e._v(" "),i("ul",[i("li",[e._v("Oldest offering (over 10 years old)")]),e._v(" "),i("li",[e._v("Fully managed service, used to decouple applications")]),e._v(" "),i("li",[e._v("Attributes:\n"),i("ul",[i("li",[e._v("Unlimited throughput, unlimited number of messages in queue")]),e._v(" "),i("li",[e._v("Default retention of messages: 4 days, maximum of 14 days")]),e._v(" "),i("li",[e._v("Low latency (<10 ms on publish and receive)")]),e._v(" "),i("li",[e._v("Limitation of 256KB per message sent")])])]),e._v(" "),i("li",[e._v("Can have duplicate messages (at least once delivery, occasionally)")]),e._v(" "),i("li",[i("strong",[e._v("Can have out of order messages")]),e._v(" (best effort ordering)")])]),e._v(" "),i("h2",{attrs:{id:"fifo-queue"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fifo-queue"}},[e._v("#")]),e._v(" FIFO Queue")]),e._v(" "),i("p",[e._v("FIFO = First In First Out (ordering of messages in the queue)")]),e._v(" "),i("ul",[i("li",[e._v("Limited throughput: 300 msg/s without batching, 3000 msg/s with")]),e._v(" "),i("li",[e._v("Exactly-once send capability (by removing duplicates)")]),e._v(" "),i("li",[e._v("Messages are processed in order by the consumer")])]),e._v(" "),i("h2",{attrs:{id:"producing-messages"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#producing-messages"}},[e._v("#")]),e._v(" Producing Messages")]),e._v(" "),i("ul",[i("li",[e._v("Produced to SQS using the SDK (SendMessage API)")]),e._v(" "),i("li",[e._v("The message is persisted in SQS until a consumer deletes it")]),e._v(" "),i("li",[e._v("Message retention: default 4 days, up to 14 days")])]),e._v(" "),i("p",[i("strong",[e._v("Example")]),e._v(": send an order to be processed")]),e._v(" "),i("ul",[i("li",[e._v("Order id")]),e._v(" "),i("li",[e._v("Customer id")]),e._v(" "),i("li",[e._v("Any attributes you want")])]),e._v(" "),i("p",[i("strong",[e._v("SQS standard")]),e._v(": unlimited throughput")]),e._v(" "),i("h2",{attrs:{id:"consuming-messages"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#consuming-messages"}},[e._v("#")]),e._v(" Consuming Messages")]),e._v(" "),i("ul",[i("li",[e._v("Consumers (running on EC2 instances, servers, or AWS Lambda)…")]),e._v(" "),i("li",[e._v("Poll SQS for messages (receive up to 10 messages at a time)")]),e._v(" "),i("li",[e._v("Process the messages (example: insert the message into an RDS database)")]),e._v(" "),i("li",[e._v("Delete the messages using the DeleteMessage API")])]),e._v(" "),i("h3",{attrs:{id:"multiple-ec2-instances-consumers"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#multiple-ec2-instances-consumers"}},[e._v("#")]),e._v(" Multiple EC2 Instances Consumers")]),e._v(" "),i("ul",[i("li",[e._v("Consumers receive and process messages in parallel")]),e._v(" "),i("li",[e._v("At least once delivery")]),e._v(" "),i("li",[e._v("Best-effort message ordering")]),e._v(" "),i("li",[e._v("Consumers delete messages after processing them")]),e._v(" "),i("li",[e._v("We can scale consumers horizontally to improve throughput of processing")])]),e._v(" "),i("h2",{attrs:{id:"security"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[e._v("#")]),e._v(" Security")]),e._v(" "),i("p",[i("strong",[e._v("Encryption")]),e._v(":")]),e._v(" "),i("ul",[i("li",[e._v("In-flight encryption using HTTPS API")]),e._v(" "),i("li",[e._v("At-rest encryption using KMS keys")]),e._v(" "),i("li",[e._v("Client-side encryption if the client wants to perform encryption/decryption itself")])]),e._v(" "),i("p",[i("strong",[e._v("Access Controls")]),e._v(": IAM policies to regulate access to the SQS API")]),e._v(" "),i("p",[i("strong",[e._v("SQS Access Policies")]),e._v(" (similar to S3 bucket policies)")]),e._v(" "),i("ul",[i("li",[e._v("Useful for cross-account access to SQS queues")]),e._v(" "),i("li",[e._v("Useful for allowing other services (SNS, S3…) to write to an SQS queue")])]),e._v(" "),i("h2",{attrs:{id:"message-visibility-timeout"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#message-visibility-timeout"}},[e._v("#")]),e._v(" Message Visibility Timeout")]),e._v(" "),i("ul",[i("li",[e._v("After a message is polled by a consumer, it becomes "),i("strong",[e._v("invisible")]),e._v(" to other consumers")]),e._v(" "),i("li",[e._v("By default, the “message visibility timeout” is "),i("strong",[e._v("30 seconds")])]),e._v(" "),i("li",[e._v("That means the message has 30 seconds to be processed")]),e._v(" "),i("li",[e._v("After the message visibility timeout is over, the message is “visible” in SQS")])]),e._v(" "),i("p",[i("img",{attrs:{src:t(648),alt:"timeout"}})]),e._v(" "),i("ul",[i("li",[e._v("If a message is not processed within the visibility timeout, it will be processed twice")]),e._v(" "),i("li",[e._v("A consumer could call the "),i("strong",[e._v("ChangeMessageVisibility")]),e._v(" API to get more time")]),e._v(" "),i("li",[e._v("If visibility timeout is high (hours), and consumer crashes, re-processing will take time")]),e._v(" "),i("li",[e._v("If visibility timeout is too low (seconds), we may get duplicates")])]),e._v(" "),i("h2",{attrs:{id:"long-polling"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#long-polling"}},[e._v("#")]),e._v(" Long Polling")]),e._v(" "),i("ul",[i("li",[e._v("When a consumer requests messages from the queue, it can optionally “wait” for messages to arrive if there are none in the queue")]),e._v(" "),i("li",[e._v("This is called Long Polling")]),e._v(" "),i("li",[i("strong",[e._v("LongPolling decreases the number of API calls made to SQS while increasing the efficiency and reducing latency of your application")])]),e._v(" "),i("li",[e._v("The wait time can be between 1 sec to 20 sec (20 sec preferable)")]),e._v(" "),i("li",[e._v("Long Polling is preferable to Short Polling")]),e._v(" "),i("li",[e._v("Long polling can be enabled at the queue level or at the API level using "),i("strong",[e._v("WaitTimeSeconds")])])]),e._v(" "),i("h2",{attrs:{id:"sqs-with-asg"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sqs-with-asg"}},[e._v("#")]),e._v(" SQS with ASG")]),e._v(" "),i("p",[i("img",{attrs:{src:t(649),alt:"autoscaling"}})]),e._v(" "),i("p",[i("strong",[e._v("If the load is too big")]),e._v(", some transactions may be lost => SQS as a buffer to database writes")]),e._v(" "),i("p",[i("img",{attrs:{src:t(650),alt:"write to db"}})])])}),[],!1,null,null,null);s.default=a.exports},648:function(e,s,t){e.exports=t.p+"assets/img/visibility-timeout.95518ae6.png"},649:function(e,s,t){e.exports=t.p+"assets/img/sqs-with-asg.3885a4d2.png"},650:function(e,s,t){e.exports=t.p+"assets/img/sqs-as-buffer-to-db-write.5e0b55e2.png"}}]);