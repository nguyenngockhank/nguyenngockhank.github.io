(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{295:function(e,a,t){"use strict";t.r(a);var r=t(2),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis","aria-hidden":"true"}},[e._v("#")]),e._v(" Redis")]),e._v(" "),t("h2",{attrs:{id:"install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[e._v("#")]),e._v(" Install")]),e._v(" "),t("Tabs",{attrs:{type:"border-card"}},[t("Tab",{attrs:{label:"Mac"}},[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("brew install redis\n")])])])]),e._v(" "),t("Tab",{attrs:{label:"Ubuntu"}},[t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$sudo apt-get update \n$sudo apt-get install redis-server\n")])])])])],1),e._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("h3",{attrs:{id:"start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start","aria-hidden":"true"}},[e._v("#")]),e._v(" Start")]),e._v(" "),t("Tabs",{attrs:{type:"border-card"}},[t("Tab",{attrs:{label:"Mac"}},[t("p",[t("strong",[e._v("Start")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("redis-server /usr/local/etc/redis.conf\n")])])]),t("p",[t("strong",[e._v("Stop")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("redis-cli shutdown\n")])])])]),e._v(" "),t("Tab",{attrs:{label:"Ubuntu"}},[t("p",[t("strong",[e._v("Start")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("redis-server\n")])])]),t("p",[t("strong",[e._v("Stop")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("redis-cli shutdown\n")])])])])],1),e._v(" "),t("h3",{attrs:{id:"command-line"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#command-line","aria-hidden":"true"}},[e._v("#")]),e._v(" Command Line")]),e._v(" "),t("p",[t("strong",[e._v("Start")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("redis-cli \n")])])]),t("p",[t("strong",[e._v("Test")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("redis-cli ping\n")])])]),t("p",[t("strong",[e._v("See all keys")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("keys\n")])])]),t("h2",{attrs:{id:"with-programming-language"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#with-programming-language","aria-hidden":"true"}},[e._v("#")]),e._v(" With Programming Language")]),e._v(" "),t("ul",[t("li",[e._v("PHP Package: "),t("a",{attrs:{href:"https://github.com/nrk/predis",target:"_blank",rel:"noopener noreferrer"}},[e._v("predis"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("NodeJS: "),t("a",{attrs:{href:"https://www.npmjs.com/package/redis",target:"_blank",rel:"noopener noreferrer"}},[e._v("redis"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"manage-with-gui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manage-with-gui","aria-hidden":"true"}},[e._v("#")]),e._v(" Manage with GUI")]),e._v(" "),t("ul",[t("li",[e._v("Package: "),t("a",{attrs:{href:"https://github.com/erikdubbelboer/phpRedisAdmin",target:"_blank",rel:"noopener noreferrer"}},[e._v("phpRedisAdmin"),t("OutboundLink")],1)])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git clone https://github.com/ErikDubbelboer/phpRedisAdmin.git\ncd phpRedisAdmin\ngit clone https://github.com/nrk/predis.git vendor\n")])])]),t("h2",{attrs:{id:"pub-sub"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pub-sub","aria-hidden":"true"}},[e._v("#")]),e._v(" Pub/Sub")]),e._v(" "),t("p",[e._v("Demo PHP with NodeJs, PHP is Publisher & NodeJS is Subscriber")]),e._v(" "),t("p",[e._v("Here are "),t("a",{attrs:{href:"https://github.com/nguyenngockhank/php-pulisher-node-subscriber-redis",target:"_blank",rel:"noopener noreferrer"}},[e._v("my repository"),t("OutboundLink")],1),e._v(" Mini Demo for this feature")]),e._v(" "),t("h2",{attrs:{id:"lock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lock","aria-hidden":"true"}},[e._v("#")]),e._v(" Lock")]),e._v(" "),t("p",[e._v("Useful feature of Redis when you want to maintain the consistency. E.g: Generate Auto increment ID")]),e._v(" "),t("p",[e._v("Package for node: "),t("a",{attrs:{href:"https://www.npmjs.com/package/redis-lock",target:"_blank",rel:"noopener noreferrer"}},[e._v("redis-lock"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://tecadmin.net/install-redis-centos/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Install Redis Cache Server on CentOS 7/6"),t("OutboundLink")],1)])],1)}),[],!1,null,null,null);a.default=s.exports}}]);