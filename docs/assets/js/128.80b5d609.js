(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1436:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"couchdb-notes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#couchdb-notes"}},[t._v("#")]),t._v(" CouchDB Notes")]),t._v(" "),n("p",[t._v("CouchDB is a database that completely embraces the web. Store your data with JSON documents. Access your documents with your web browser, via HTTP. Query, combine, and transform your documents with JavaScript.")]),t._v(" "),n("h2",{attrs:{id:"eventual-consistency"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#eventual-consistency"}},[t._v("#")]),t._v(" "),n("a",{attrs:{href:"https://docs.couchdb.org/en/3.2.0/intro/consistency.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Eventual Consistency"),n("OutboundLink")],1)]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Consistency")]),t._v(": All database clients see the same data, even with concurrent updates.")]),t._v(" "),n("li",[n("strong",[t._v("Availability")]),t._v(": All database clients are able to access some version of the data.")]),t._v(" "),n("li",[n("strong",[t._v("Partition tolerance")]),t._v(": The database can be split over multiple servers.")])]),t._v(" "),n("p",[n("img",{attrs:{src:s(699),alt:"CouchDb consitency"}})]),t._v(" "),n("h2",{attrs:{id:"conflict-resources"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conflict-resources"}},[t._v("#")]),t._v(" Conflict resources")]),t._v(" "),n("p",[t._v("CouchDB uses an \"optimistic concurrency\" model. In the simplest terms, this just means that you send a document version along with your update, and CouchDB rejects the change if the current document version doesn't match what you've sent.")]),t._v(" "),n("p",[n("em",[n("a",{attrs:{href:"https://stackoverflow.com/questions/299723/can-i-do-transactions-and-locks-in-couchdb#:~:text=CouchDB%20uses%20an%20%22optimistic%20concurrency,match%20what%20you've%20sent.",target:"_blank",rel:"noopener noreferrer"}},[t._v("Question"),n("OutboundLink")],1)])]),t._v(" "),n("h2",{attrs:{id:"useful-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#useful-api"}},[t._v("#")]),t._v(" Useful API")]),t._v(" "),n("h3",{attrs:{id:"database"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[t._v("#")]),t._v(" Database")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("HEAD /{db}")]),t._v(" - get info")]),t._v(" "),n("li",[n("code",[t._v("PUT /{db}")]),t._v(" - create database")]),t._v(" "),n("li",[n("code",[t._v("DELETE /{db}")]),t._v(" - delete database")]),t._v(" "),n("li",[n("code",[t._v("GET /_all_dbs")]),t._v(" - find databases")]),t._v(" "),n("li",[n("code",[t._v("POST /{db}/index")]),t._v(" - create index")]),t._v(" "),n("li",[n("code",[t._v("PUT /{db}/_revs_limit")]),t._v(" - Sets the max no of document revisions that will be tracked by CouchDB")]),t._v(" "),n("li",[n("code",[t._v("GET /{db}/_changes")]),t._v(" - polling changes")])]),t._v(" "),n("h3",{attrs:{id:"document"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#document"}},[t._v("#")]),t._v(" Document")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("HEAD /{db}/${docid}")]),t._v(" - get info")]),t._v(" "),n("li",[n("code",[t._v("GET /{db}/${docid}")]),t._v(" - get document")]),t._v(" "),n("li",[n("code",[t._v("PUT /{db}/${docid}")]),t._v(" - create / update document")]),t._v(" "),n("li",[n("code",[t._v("DELETE /{db}/${docid}")]),t._v(" - delete document")]),t._v(" "),n("li",[n("code",[t._v("POST /{db}/_bulk_docs")]),t._v(" - upsert / delete documents")]),t._v(" "),n("li",[n("code",[t._v("POST /{db}/_find")]),t._v(" - Find documents using a declarative JSON querying syntax")]),t._v(" "),n("li",[n("code",[t._v("GET /{db}/_all_docs")]),t._v(" - executes the built-in "),n("strong",[t._v("_all_docs")]),t._v(" view")])]),t._v(" "),n("h3",{attrs:{id:"basic-usage-from-axios"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-usage-from-axios"}},[t._v("#")]),t._v(" Basic usage from axios")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" authToken "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Buffer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("configs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("couchUser"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("configs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("couchPass"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"base64"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" axiosClient "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" axios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    baseURL"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("configs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("couchHost"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("configs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("couchPort"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    headers"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Authorization"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("Basic ")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("authToken"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("Create database & create index & set revision")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" databaseName "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("test_db")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" axiosClient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("databaseName"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" axiosClient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("databaseName"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("/_index")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  index"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fields"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"createdAt"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" axiosClient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("databaseName"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("/_revs_limit")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("20")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports},699:function(t,a,s){t.exports=s.p+"assets/img/couch-consistency.00e26a03.png"}}]);