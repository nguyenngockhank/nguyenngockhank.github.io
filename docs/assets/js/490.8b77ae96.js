(window.webpackJsonp=window.webpackJsonp||[]).push([[490],{1721:function(t,a,s){"use strict";s.r(a);var e=s(7),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"php-autoloading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php-autoloading"}},[t._v("#")]),t._v(" PHP Autoloading")]),t._v(" "),s("h2",{attrs:{id:"psr-4-autoloader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#psr-4-autoloader"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://www.php-fig.org/psr/psr-4/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PSR-4 Autoloader"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("PSR-4 describes a specification for autoloading "),s("strong",[t._v("classes")]),t._v(" from file paths.")]),t._v(" "),s("h3",{attrs:{id:"take-a-tour"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#take-a-tour"}},[t._v("#")]),t._v(" Take a tour")]),t._v(" "),s("p",[t._v("Let see how I use PRS-4 in webportal:")]),t._v(" "),s("p",[s("strong",[t._v("Definition:")]),t._v("\nAdd pieces of code into "),s("code",[t._v("composer.json")]),t._v(" at root project.")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"autoload"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"psr-4"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// more code ...")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Wp3Module\\\\"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/modules/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Wp3\\\\"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// more code ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Explanation:")])]),t._v(" "),s("ul",[s("li",[t._v("the classes of namespace "),s("code",[t._v("Wp3Module")]),t._v(" will be looked up and loaded at "),s("code",[t._v("application/modules/")])]),t._v(" "),s("li",[t._v("the classes of namespace "),s("code",[t._v("Wp3")]),t._v(" will be looked up and loaded at "),s("code",[t._v("application/modules/")])])]),t._v(" "),s("p",[s("strong",[t._v("Run command in terminal:")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("composer dump-autoload\n")])])]),s("p",[s("em",[t._v("make sure you have installed the composer in your machine before you run")])]),t._v(" "),s("p",[t._v("Then you can see few files in "),s("code",[t._v("vendor")]),t._v(" update. It means Composer generates list of all classes that need to be included ("),s("em",[t._v("autoload_classmap.php")]),t._v(").")]),t._v(" "),s("h3",{attrs:{id:"class-definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class-definition"}},[t._v("#")]),t._v(" Class definition")]),t._v(" "),s("p",[t._v("Create a file at "),s("code",[t._v("/application/modules/contact/myfolder/Greeting.php")]),t._v(" with contents:")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Wp3Module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("contact"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("myfolder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Greeting")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$instance")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$instance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$instance")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("static")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$instance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__construct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("helloWorld")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Hello world'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),s("h3",{attrs:{id:"class-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#class-usage"}},[t._v("#")]),t._v(" Class Usage")]),t._v(" "),s("p",[t._v("Now you can use the class "),s("code",[t._v("Greeting")]),t._v(" everywhere in our project. Create a controller  "),s("code",[t._v("/application/modules/contact/controllers/Hello_controller.php")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Wp3Module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("contact"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("myfolder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Greeting")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Hello_controller")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MX_Controller")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" Greeting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("helloWorld")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),s("p",[t._v("Open link to manual check: "),s("code",[t._v("{webportal_url}/contact/hello_controller")])]),t._v(" "),s("h2",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),s("p",[t._v("I just introduce to you:")]),t._v(" "),s("ul",[s("li",[t._v("Defining namespace & usage.")]),t._v(" "),s("li",[t._v("PSR-4 Autoloader with Composer.")])]),t._v(" "),s("p",[t._v("We're more independent of Codeigniter")]),t._v(" "),s("ul",[s("li",[t._v("have our own directory structure.")]),t._v(" "),s("li",[t._v("easy to resolve dependencies I'll talk later in another post")])]),t._v(" "),s("h3",{attrs:{id:"other-loaders-with-composer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-loaders-with-composer"}},[t._v("#")]),t._v(" Other loaders with Composer")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("PRS-0")]),t._v(": a older standards was replaced by PRS-4 - "),s("code",[t._v("Not recommended")])]),t._v(" "),s("li",[s("code",[t._v("classmap")]),t._v(": composer will scan all classes in given folder to build - "),s("code",[t._v("Not recommended")])]),t._v(" "),s("li",[s("code",[t._v("files")]),t._v(": point the specific files to load - useful for helpers")])]),t._v(" "),s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.php.net/manual/en/language.namespaces.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("PHP namespace"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.php-fig.org/psr/psr-4/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PSR-4 Autoloader"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://getcomposer.org/doc/03-cli.md#dump-autoload-dumpautoload-",target:"_blank",rel:"noopener noreferrer"}},[t._v("dump-autoload"),s("OutboundLink")],1),t._v(" - you can put more options like "),s("code",[t._v("-o")]),t._v(" for optimization")])])])}),[],!1,null,null,null);a.default=n.exports}}]);