(window.webpackJsonp=window.webpackJsonp||[]).push([[518],{1756:function(e,t,s){"use strict";s.r(t);var a=s(7),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"payment-network"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#payment-network"}},[e._v("#")]),e._v(" Payment network")]),e._v(" "),s("h2",{attrs:{id:"swift"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swift"}},[e._v("#")]),e._v(" SWIFT")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("Society for Worldwide Interbank Financial Telecommunication (SWIFT)")]),e._v(" is the main secure "),s("strong",[e._v("messaging system")]),e._v(" that links the world’s banks.")]),e._v(" "),s("p",[e._v("The Belgium-based system is run by its member banks and handles millions of payment messages per day.")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://i.pinimg.com/originals/86/f0/7c/86f07ce7ed5ed398292e4b9eda804978.jpg",alt:"SWIFT transfer"}})]),e._v(" "),s("p",[s("strong",[e._v("Acronyms")])]),e._v(" "),s("ul",[s("li",[e._v("ACK: acknowledgment")]),e._v(" "),s("li",[e._v("NAK: negative acknowledgment")]),e._v(" "),s("li",[e._v("MON: Message Output Number (unique ID)")]),e._v(" "),s("li",[e._v("UAK: user positive acknowledgment (without error)")]),e._v(" "),s("li",[e._v("UNK: user negative acknowledgment (checksum failure)")])]),e._v(" "),s("p",[s("strong",[e._v("Roles")])]),e._v(" "),s("ul",[s("li",[e._v("The "),s("strong",[e._v("Bank A")]),e._v(" ends a message with transfer details to  "),s("strong",[e._v("Regional Processor A")])]),e._v(" "),s("li",[e._v("The "),s("strong",[e._v("Regional Processor A")]),e._v(" is responsible for input message validation and output message queuing.")]),e._v(" "),s("li",[e._v("The "),s("strong",[e._v("Slice Processor A")]),e._v(" is responsible for storing and routing messages safely.")]),e._v(" "),s("li",[e._v("The "),s("strong",[e._v("Regional Processor B")]),e._v(" assigns a unique ID MON & send to "),s("strong",[e._v("Slice Processor B")])]),e._v(" "),s("li",[e._v("The "),s("strong",[e._v("Slice Processor B")]),e._v(" validate MON then authorizes "),s("strong",[e._v("Regional Processor B")])]),e._v(" "),s("li",[e._v("The "),s("strong",[e._v("Bank B")]),e._v(" sends UAK/UNK to "),s("strong",[e._v("Regional Processor B")])])]),e._v(" "),s("h2",{attrs:{id:"how-visa-works"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-visa-works"}},[e._v("#")]),e._v(" How Visa works?")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://i.pinimg.com/originals/d4/7d/3d/d47d3defc268a8e17816a67d8ecff2d7.jpg",alt:"How Visa works?"}})]),e._v(" "),s("p",[e._v("The diagram shows VISA’s role in the credit card payment process. There are two flows involved. Authorization flow happens when the customer swipes the credit card. Capture and settlement flow occurs when the merchant wants to get the money at the end of the day.")]),e._v(" "),s("h3",{attrs:{id:"authorization-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authorization-flow"}},[e._v("#")]),e._v(" Authorization Flow")]),e._v(" "),s("p",[e._v("Step 0: The card issuing bank issues credit cards to its customers.")]),e._v(" "),s("p",[e._v("Step 1: The cardholder wants to buy a product and swipes the credit card at the Point of Sale (POS) terminal in the merchant’s shop.")]),e._v(" "),s("p",[e._v("Step 2: The POS terminal sends the transaction to the acquiring bank, which has provided the POS terminal.")]),e._v(" "),s("p",[e._v("Steps 3 and 4: The acquiring bank sends the transaction to the card network, also called the card scheme. The card network sends the transaction to the issuing bank for approval.")]),e._v(" "),s("p",[e._v("Steps 4.1, 4.2, and 4.3: The issuing bank freezes the money if the transaction is approved. The approval or rejection is sent back to the acquirer, as well as the POS terminal.")]),e._v(" "),s("h3",{attrs:{id:"capture-and-settlement-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#capture-and-settlement-flow"}},[e._v("#")]),e._v(" Capture and Settlement Flow")]),e._v(" "),s("p",[e._v("Steps 1 and 2: The merchant wants to collect the money at the end of the day, so they hit ”capture” on the POS terminal. The transactions are sent to the acquirer in batches. The acquirer sends the batch file with transactions to the card network.")]),e._v(" "),s("p",[e._v("Step 3: The card network performs clearing for the transactions collected from different acquirers, and sends the clearing files to different issuing banks.")]),e._v(" "),s("p",[e._v("Step 4: The issuing banks confirm the correctness of the clearing files, and transfer money to the relevant acquiring banks.")]),e._v(" "),s("p",[e._v("Step 5: The acquiring bank then transfers money to the merchant’s bank.")]),e._v(" "),s("p",[e._v("Step 4: The card network clears the transactions from different acquiring banks. Clearing is a process in which mutual offset transactions are netted, so the number of total transactions is reduced.")]),e._v(" "),s("p",[e._v("In the process, the card network takes on the burden of talking to each bank and receives service fees in return.")])])}),[],!1,null,null,null);t.default=n.exports}}]);