(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1195:function(t,e,a){"use strict";a.r(e);var i=a(7),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"logging-audit-notes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#logging-audit-notes"}},[t._v("#")]),t._v(" Logging / Audit notes")]),t._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("You never know what data you can collect today that will be useful to you tomorrow.")])]),t._v(" "),i("TagLinks"),t._v(" "),i("h2",{attrs:{id:"logging-vs-auditing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#logging-vs-auditing"}},[t._v("#")]),t._v(" Logging vs Auditing")]),t._v(" "),i("p",[t._v("Logging typically means the recording of implementation level events that happen as the program is running (methods get called, objects are created, etc.). As such it focuses on things that interest programmers")]),t._v(" "),i("p",[t._v("Auditing is about recording domain-level events: a transaction is created, a user is performing an action, etc. In certain types of application (Banking) there is a legal obligation to record such events.")]),t._v(" "),i("h2",{attrs:{id:"notes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),i("ul",[i("li",[t._v("put context into the log")]),t._v(" "),i("li",[t._v("Don’t use "),i("code",[t._v("debug")]),t._v(" level for system monitoring data")]),t._v(" "),i("li",[t._v("Do NOT log sensitive information!")])]),t._v(" "),i("h2",{attrs:{id:"types"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#types"}},[t._v("#")]),t._v(" Types")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("Auditing")]),t._v(": this is sometimes a business requirement. The idea is to capture significant events that matter to the management or legal people. These are statements that describe usually what users of the system are doing (like who signed-in, who edited that, etc…).")]),t._v(" "),i("li",[i("strong",[t._v("Profiling")]),t._v(": as logs are timestamped (sometimes to the millisecond level), it can become a good tool to profile sections of a program, for instance by logging the start and end of an operation, you can either automatically (by parsing the log) or during troubleshooting infer some performance metrics without adding those metrics to the program itself.")]),t._v(" "),i("li",[i("strong",[t._v("Statistics")]),t._v(": if you log each time a certain event happens (like a certain kind of error or event) you can compute interesting statistics about the running program (or the user behaviors). It’s also possible to hook this to an alert system that can detect too many errors in a row.")])]),t._v(" "),i("h2",{attrs:{id:"log-what"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#log-what"}},[t._v("#")]),t._v(" Log what")]),t._v(" "),i("h3",{attrs:{id:"requests"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#requests"}},[t._v("#")]),t._v(" Requests")]),t._v(" "),i("ul",[i("li",[t._v("time / start / stop")]),t._v(" "),i("li",[t._v("correlation id")]),t._v(" "),i("li",[t._v("user agent")]),t._v(" "),i("li",[t._v("IP / GPS / ...")]),t._v(" "),i("li",[t._v("user id / request id / idempotent key")])]),t._v(" "),i("h3",{attrs:{id:"availability"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#availability"}},[t._v("#")]),t._v(" Availability")]),t._v(" "),i("ul",[i("li",[t._v("Slow queries")]),t._v(" "),i("li",[t._v("Network error")]),t._v(" "),i("li",[t._v("At infra layer / firewall / gateway / ...")])]),t._v(" "),i("h3",{attrs:{id:"threats"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#threats"}},[t._v("#")]),t._v(" Threats")]),t._v(" "),i("ul",[i("li",[t._v("suspicious activities")]),t._v(" "),i("li",[t._v("unauthorized access to restricted processes or data")]),t._v(" "),i("li",[t._v("invalid parameters or input")]),t._v(" "),i("li",[t._v("warnings by the application’s security mechanisms.")])]),t._v(" "),i("h3",{attrs:{id:"events-application"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#events-application"}},[t._v("#")]),t._v(" Events / Application")]),t._v(" "),i("ul",[i("li",[t._v("Background threads / async job")]),t._v(" "),i("li",[t._v("Exception Logging")])]),t._v(" "),i("h3",{attrs:{id:"trace-logging-audit-trail"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#trace-logging-audit-trail"}},[t._v("#")]),t._v(" Trace Logging / Audit Trail")]),t._v(" "),i("ul",[i("li",[t._v("correlation id")])]),t._v(" "),i("h2",{attrs:{id:"what-not-to-log"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#what-not-to-log"}},[t._v("#")]),t._v(" What Not to Log")]),t._v(" "),i("ul",[i("li",[t._v("Sensitive Information\n"),i("ul",[i("li",[t._v("Passwords")]),t._v(" "),i("li",[t._v("Credit card numbers")]),t._v(" "),i("li",[t._v("Social security numbers")]),t._v(" "),i("li",[t._v("email , ....")]),t._v(" "),i("li",[t._v("Be careful about GDPR")])])]),t._v(" "),i("li",[t._v("large messages")]),t._v(" "),i("li",[t._v("known errors, all errors")])]),t._v(" "),i("h2",{attrs:{id:"architecture"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[t._v("#")]),t._v(" Architecture")]),t._v(" "),i("p",[i("img",{attrs:{src:a(403),alt:"arch"}})]),t._v(" "),i("ul",[i("li",[t._v("metrics source - your app")]),t._v(" "),i("li",[t._v("collector - promtail")]),t._v(" "),i("li",[t._v("DB - prometheus/S3")]),t._v(" "),i("li",[t._v("query service - loki")]),t._v(" "),i("li",[t._v("visual - grafana,")]),t._v(" "),i("li",[t._v("alert is alertmanager")])]),t._v(" "),i("p",[i("img",{attrs:{src:a(485),alt:"k8s monitoring"}})]),t._v(" "),i("h2",{attrs:{id:"refs"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#refs"}},[t._v("#")]),t._v(" Refs")]),t._v(" "),i("p",[t._v("https://stackoverflow.com/questions/967970/what-information-should-i-be-logging-in-my-web-app")]),t._v(" "),i("p",[t._v("https://www.dataset.com/blog/the-10-commandments-of-logging/")]),t._v(" "),i("p",[t._v("https://www.freecodecamp.org/news/how-to-use-logs-effectively-in-your-code/")]),t._v(" "),i("p",[t._v("https://www.bloghoctap.com/security/authentication-authorization-va-accounting.html")]),t._v(" "),i("p",[i("a",{attrs:{href:"https://jessicagreben.medium.com/four-minute-paper-facebooks-time-series-database-gorilla-800697717d72",target:"_blank",rel:"noopener noreferrer"}},[t._v("Four Minute Paper: Facebook’s time series database, Gorilla"),i("OutboundLink")],1)]),t._v(" "),i("p",[i("a",{attrs:{href:"https://k21academy.com/docker-kubernetes/prometheus-grafana-monitoring/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kubernetes Monitoring: Install Prometheus and Grafana using Helm"),i("OutboundLink")],1)])],1)}),[],!1,null,null,null);e.default=s.exports},403:function(t,e,a){t.exports=a.p+"assets/img/f6.54b4a63c.png"},485:function(t,e,a){t.exports=a.p+"assets/img/Prometheus-Server_Chart.a793fd6e.png"}}]);