(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{1288:function(e,t,a){"use strict";a.r(t);var r=a(7),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"api-design-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-design-overview"}},[e._v("#")]),e._v(" API Design Overview")]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v('The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in '),a("a",{attrs:{href:"https://www.ietf.org/rfc/rfc2119",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC2119"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"design-api-first-before-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design-api-first-before-code"}},[e._v("#")]),e._v(" Design API first before Code")]),e._v(" "),a("p",[e._v("Everyone "),a("strong",[e._v("MUST")]),e._v(" design the API first before commit yourselves to coding.")]),e._v(" "),a("p",[e._v("A development of an API "),a("strong",[e._v("MUST")]),e._v(" always start with API design without any upfront coding activities.")]),e._v(" "),a("p",[e._v("This applies for both new API and adjusting existing ones.")]),e._v(" "),a("p",[e._v("Junior developers "),a("strong",[e._v("SHOULD")]),e._v(" create a first proposal and discuss with the team.")]),e._v(" "),a("p",[e._v("Senior developers "),a("strong",[e._v("MAY")]),e._v(" create a first proposal and discuss with the team but is "),a("strong",[e._v("RECOMMENDED")]),e._v(" when there is uncertainty, and "),a("strong",[e._v("REQUIRED")]),e._v(" to do so if collaborator(s) requires the API contract upfront (for example, front-end coding happening in parallel with the API development).")]),e._v(" "),a("p",[a("strong",[e._v("API design")]),e._v(" (e.g., description, schema) "),a("strong",[e._v("is the master of truth, not the API implementation.")])]),e._v(" "),a("h2",{attrs:{id:"minimal-api-surface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#minimal-api-surface"}},[e._v("#")]),e._v(" Minimal API Surface")]),e._v(" "),a("p",[e._v("Every API design "),a("strong",[e._v("MUST")]),e._v(" aim for a minimal API surface without sacrificing on product requirements. API design "),a("strong",[e._v("SHOULD NOT")]),e._v(" include unnecessary resources, relations, actions or data. API design "),a("strong",[e._v("SHOULD NOT")]),e._v(" add functionality until deemed necessary ("),a("a",{attrs:{href:"https://martinfowler.com/bliki/Yagni.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("YAGNI principle"),a("OutboundLink")],1),e._v(").")]),e._v(" "),a("p",[e._v("API "),a("strong",[e._v("SHOULD")]),e._v(" not include overlapping and/or potentially conflicting data. For example, API that accept firstName, lastName "),a("strong",[e._v("SHOULD NOT")]),e._v(" also accept fullName which is constructible from firstName and lastName (besides, it's inflexible for cases like firstName lastName ordered differently based on locale).")]),e._v(" "),a("h2",{attrs:{id:"api-classifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-classifications"}},[e._v("#")]),e._v(" API Classifications")]),e._v(" "),a("blockquote",[a("p",[e._v("Data should be segmented into one of three types: Static, Dynamic, and Personal.\nAPI CALLS SHOULD INCLUDE ONLY ONE TYPE OF DATA.")])]),e._v(" "),a("ul",[a("li",[e._v("STATIC data is data that once created rarely or never changes or changes rarely (daily, every few hours). Example: product photos and description.")]),e._v(" "),a("li",[e._v("DYNAMIC data is data that is known to change regularly - every few seconds or every minute but the value is global. Typically fetched from a database table. Example: Available inventory, shipping time updates, etc.")]),e._v(" "),a("li",[e._v("PERSONAL data is data that may or may not change regularly but is specific and unique (and likely private) to a user. Example: shopping carts, user profile, order histories.")])]),e._v(" "),a("h2",{attrs:{id:"robustness-principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#robustness-principle"}},[e._v("#")]),e._v(" Robustness Principle")]),e._v(" "),a("p",[e._v("Every API implementation and API consumer "),a("strong",[e._v("MUST")]),e._v(" follow Postel's law:")]),e._v(" "),a("blockquote",[a("p",[a("em",[e._v("Be conservative in what you send, be liberal in what you accept.")])]),e._v(" "),a("p",[a("em",[e._v("–")]),e._v(" "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Robustness_principle",target:"_blank",rel:"noopener noreferrer"}},[a("em",[e._v("John Postel")]),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("That is, send the necessary minimum and be tolerant as possible while consuming another service ("),a("a",{attrs:{href:"https://martinfowler.com/bliki/TolerantReader.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("tolerant reader"),a("OutboundLink")],1),e._v(").")]),e._v(" "),a("h3",{attrs:{id:"but-be-just-reasonably-tolerant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#but-be-just-reasonably-tolerant"}},[e._v("#")]),e._v(" But be just reasonably tolerant")]),e._v(" "),a("blockquote",[a("p",[e._v("With a sufficient number of users of an API, it does not matter what you promise in the contract: all observable behaviours of your system will be depended on by somebody")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.hyrumslaw.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hyrum's Law"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=s.exports}}]);