(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1406:function(e,t,s){"use strict";s.r(t);var i=s(7),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"simple-notification-service-sns"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#simple-notification-service-sns"}},[e._v("#")]),e._v(" Simple Notification Service (SNS)")]),e._v(" "),i("p",[e._v("if you want to send one message to many receivers?")]),e._v(" "),i("ul",[i("li",[e._v("The “event producer” only sends message to one SNS topic")]),e._v(" "),i("li",[e._v("As many “event receivers” (subscriptions) as we want to listen to the SNS topic notifications\n"),i("ul",[i("li",[e._v("SQS")]),e._v(" "),i("li",[e._v("Lambda")]),e._v(" "),i("li",[e._v("Kinesis Data Firehouse")]),e._v(" "),i("li",[e._v("Emails")]),e._v(" "),i("li",[e._v("SMS & Mobile Notifications")]),e._v(" "),i("li",[e._v("Http endpoints")]),e._v(" "),i("li",[e._v("...")])])]),e._v(" "),i("li",[e._v("Each subscriber to the topic will get all the messages (note: new feature to filter messages)")]),e._v(" "),i("li",[e._v("Up to 12,500,000 subscriptions per topic")]),e._v(" "),i("li",[e._v("100,000 topics limit")]),e._v(" "),i("li",[e._v("Many AWS services can send data directly to SNS for notifications")])]),e._v(" "),i("h2",{attrs:{id:"how-to-publish"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-to-publish"}},[e._v("#")]),e._v(" How to publish")]),e._v(" "),i("ul",[i("li",[i("p",[i("strong",[e._v("Topic Publish (using the SDK)")])]),e._v(" "),i("ul",[i("li",[e._v("Create a topic")]),e._v(" "),i("li",[e._v("Create a subscription (or many)")]),e._v(" "),i("li",[e._v("Publish to the topic")])])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("Direct Publish (for mobile apps SDK)")])]),e._v(" "),i("ul",[i("li",[e._v("Create a platform application")]),e._v(" "),i("li",[e._v("Create a platform endpoint")]),e._v(" "),i("li",[e._v("Publish to the platform endpoint")]),e._v(" "),i("li",[e._v("Works with Google GCM, Apple APNS, Amazon ADM…")])])])]),e._v(" "),i("h2",{attrs:{id:"security"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[e._v("#")]),e._v(" Security")]),e._v(" "),i("p",[i("strong",[e._v("Encryption")]),e._v(":")]),e._v(" "),i("ul",[i("li",[e._v("In-flight encryption using HTTPS API")]),e._v(" "),i("li",[e._v("At-rest encryption using KMS keys")]),e._v(" "),i("li",[e._v("Client-side encryption if the client wants to perform encryption/decryption itself")])]),e._v(" "),i("p",[i("strong",[e._v("Access Controls")]),e._v(": IAM policies to regulate access to the SNS API")]),e._v(" "),i("p",[i("strong",[e._v("SNS Access Policies")]),e._v(" (similar to S3 bucket policies)")]),e._v(" "),i("ul",[i("li",[e._v("Useful for cross-account access to SNS topics")]),e._v(" "),i("li",[e._v("Useful for allowing other services ( S3…) to write to an SNS topic")])]),e._v(" "),i("h2",{attrs:{id:"sns-sqs-fan-out"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sns-sqs-fan-out"}},[e._v("#")]),e._v(" SNS + SQS: Fan Out")]),e._v(" "),i("p",[i("img",{attrs:{src:s(674),alt:"fanout"}})]),e._v(" "),i("ul",[i("li",[e._v("Push once in SNS, receive in all SQS queues that are subscribers")]),e._v(" "),i("li",[e._v("Fully decoupled, no data loss")]),e._v(" "),i("li",[e._v("SQS allows for: data persistence, delayed processing and retries of work")]),e._v(" "),i("li",[e._v("Ability to add more SQS subscribers over time")]),e._v(" "),i("li",[e._v("Make sure your SQS queue access policy allows for SNS to write")]),e._v(" "),i("li",[e._v("Cross-Region Delivery: works with SQS Queues in other regions")])]),e._v(" "),i("h2",{attrs:{id:"events-to-multiple-queues"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#events-to-multiple-queues"}},[e._v("#")]),e._v(" Events to multiple queues")]),e._v(" "),i("p",[i("img",{attrs:{src:s(675),alt:"multiple queue"}})]),e._v(" "),i("ul",[i("li",[e._v("For the same combination of: event type (e.g. object create) and prefix (e.g. images/) you can only have one S3 Event rule")]),e._v(" "),i("li",[e._v("If you want to send the same S3 event to many SQS queues, use fan-out")])]),e._v(" "),i("h2",{attrs:{id:"fifo-topic"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#fifo-topic"}},[e._v("#")]),e._v(" FIFO Topic")]),e._v(" "),i("p",[e._v("FIFO = First In First Out (ordering of messages in the topic)")]),e._v(" "),i("ul",[i("li",[e._v("Similar features as SQS FIFO:\n"),i("ul",[i("li",[e._v("Ordering by Message Group ID (all messages in the same group are ordered)")]),e._v(" "),i("li",[e._v("Deduplication using a Deduplication ID or Content Based Deduplication")])])]),e._v(" "),i("li",[i("strong",[e._v("Can only have SQS FIFO queues as subscribers")])]),e._v(" "),i("li",[e._v("Limited throughput (same throughput as SQS FIFO)")])]),e._v(" "),i("h3",{attrs:{id:"sns-fifo-sqs-fifo-fan-out"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sns-fifo-sqs-fifo-fan-out"}},[e._v("#")]),e._v(" SNS FIFO + SQS FIFO: Fan Out")]),e._v(" "),i("ul",[i("li",[e._v("In case you need fan out + ordering + deduplication")])]),e._v(" "),i("p",[i("img",{attrs:{src:s(676),alt:"sns fifo"}})]),e._v(" "),i("h2",{attrs:{id:"message-filtering"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#message-filtering"}},[e._v("#")]),e._v(" Message Filtering")]),e._v(" "),i("ul",[i("li",[e._v("JSON policy used to filter messages sent to SNS topic’s subscriptions")]),e._v(" "),i("li",[e._v("If a subscription doesn’t have a filter policy, it receives every message")])]),e._v(" "),i("p",[i("img",{attrs:{src:s(677),alt:"Message filter"}})]),e._v(" "),i("h2",{attrs:{id:"application-sns-to-amazon-s3-through-kinesis-data-firehose"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#application-sns-to-amazon-s3-through-kinesis-data-firehose"}},[e._v("#")]),e._v(" Application: SNS to Amazon S3 through Kinesis Data Firehose")]),e._v(" "),i("p",[e._v("SNS can send to Kinesis and therefore we can have the following solutions architecture:")]),e._v(" "),i("p",[i("img",{attrs:{src:s(678),alt:"img"}})])])}),[],!1,null,null,null);t.default=o.exports},674:function(e,t,s){e.exports=s.p+"assets/img/fanout.644c7c64.png"},675:function(e,t,s){e.exports=s.p+"assets/img/s3-2-multiple-q.b8c9d7a6.png"},676:function(e,t,s){e.exports=s.p+"assets/img/sns-fifo-sqs-fifo-fanout.edb8137d.png"},677:function(e,t,s){e.exports=s.p+"assets/img/message-filter.25a47e32.png"},678:function(e,t,s){e.exports=s.p+"assets/img/sns-2-s3.9fb6c397.png"}}]);