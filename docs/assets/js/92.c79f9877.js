(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1431:function(e,t,a){"use strict";a.r(t);var r=a(7),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"database-design"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#database-design"}},[e._v("#")]),e._v(" Database design")]),e._v(" "),r("TagLinks"),e._v(" "),r("h2",{attrs:{id:"database-normalization"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#database-normalization"}},[e._v("#")]),e._v(" Database Normalization")]),e._v(" "),r("p",[e._v("Database Normalization is a design step which eliminates redundant data stored in form of large monolithic tables making the overall query execution simpler.")]),e._v(" "),r("p",[e._v("The main purpose of this normalized data is logical storage of data using relationships between the tables. As originally proposed by "),r("strong",[e._v("Edgar Codd")]),e._v(", there are six steps involved in the overall process from 1NF to 6NF as described below. Most modern databases follow a standard upto the 4NF step.")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://static.javatpoint.com/dbms/images/dbms-normalization.png",alt:"db normalize"}})]),e._v(" "),r("h2",{attrs:{id:"polymorphic-db-table-design"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#polymorphic-db-table-design"}},[e._v("#")]),e._v(" Polymorphic DB Table Design")]),e._v(" "),r("p",[e._v("Look at "),r("a",{attrs:{href:"https://dba.stackexchange.com/questions/179654/developing-a-database-for-a-funds-transfers-business-where-a-people-and-organi",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example Person and Organization Example"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("source:\n"),r("img",{attrs:{src:a(668),alt:"Polymorphic DB Table Design"}})]),e._v(" "),r("p",[e._v("Key takeaways:")]),e._v(" "),r("ul",[r("li",[e._v('"As demonstrated, Person and Organization are depicted as mutually exclusive subtypes of Party."')]),e._v(" "),r("li",[e._v('"The Party '),r("strong",[e._v("supertype")]),e._v(" holds a discriminator (i.e., PartyTypeCode) and all the properties (or attributes) that are common to its "),r("strong",[e._v("subtypes")]),e._v(', which, in turn, have the properties that apply to each of them."')])]),e._v(" "),r("p",[e._v("Result DB diagram. Pay attention to how the polymorphic relationships resolved using this design:")]),e._v(" "),r("ul",[r("li",[e._v("Person is-a Party")]),e._v(" "),r("li",[e._v("Organization is-a Party")]),e._v(" "),r("li",[e._v("PartyTypeCode is the "),r("strong",[e._v("discriminator")])])]),e._v(" "),r("p",[e._v("See more:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://stackoverflow.com/questions/9174200/how-to-create-multiple-one-to-ones/9178524#9178524",target:"_blank",rel:"noopener noreferrer"}},[e._v("3 ways to implement class hierarchies in relational databases"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.martinfowler.com/eaaCatalog/singleTableInheritance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Single Table Inheritance"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.martinfowler.com/eaaCatalog/classTableInheritance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Class Table Inheritance"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.martinfowler.com/eaaCatalog/concreteTableInheritance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Concrete Table Inheritance"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"metadata-db-table-design"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#metadata-db-table-design"}},[e._v("#")]),e._v(" Metadata DB Table Design")]),e._v(" "),r("p",[e._v("Wordpress database is a great example\n"),r("img",{attrs:{src:a(669),alt:"Polymorphic DB Table Design"}})]),e._v(" "),r("p",[r("a",{attrs:{href:"https://stackoverflow.com/questions/3241033/designing-database-to-hold-different-metadata-information",target:"_blank",rel:"noopener noreferrer"}},[e._v("Another one"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"thoughts-on-foreign-keys"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#thoughts-on-foreign-keys"}},[e._v("#")]),e._v(" Thoughts on Foreign Keys")]),e._v(" "),r("p",[e._v("At GitHub we do not use foreign keys, ever, anywhere.")]),e._v(" "),r("ul",[r("li",[e._v("FKs are in your way to shard your database. Your app is accustomed to rely on FK to maintain integrity, instead of doing it on its own. It may even rely on FK to cascade deletes (shudder). When eventually you want to shard or extract data out, you need to change & test the app to an unknown extent.")]),e._v(" "),r("li",[e._v("FKs are a performance impact. The fact they require indexes is likely fine, since those indexes are needed anyhow. But the lookup made for each "),r("code",[e._v("insert")]),e._v("/"),r("code",[e._v("delete")]),e._v(" is an overhead.")]),e._v(" "),r("li",[e._v("FKs don't work well with online schema migrations.")])]),e._v(" "),r("p",[e._v("Read more:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://softwareengineering.stackexchange.com/questions/334624/should-i-define-the-relations-between-tables-in-the-database-or-just-in-code",target:"_blank",rel:"noopener noreferrer"}},[e._v("Should I define the relations between tables in the database or just in code?"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/github/gh-ost/issues/331#issuecomment-266027731",target:"_blank",rel:"noopener noreferrer"}},[e._v("Thoughts on Foreign Keys?"),r("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=n.exports},668:function(e,t,a){e.exports=a.p+"assets/img/Polymorphic-table.eb59cbb9.png"},669:function(e,t,a){e.exports=a.p+"assets/img/wp-metadatatable.c1b9b204.png"}}]);