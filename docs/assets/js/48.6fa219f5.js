(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{617:function(e,t,a){e.exports=a.p+"assets/img/image--016.47b46824.jpg"},618:function(e,t,a){e.exports=a.p+"assets/img/image--017.415231f0.png"},975:function(e,t,a){"use strict";a.r(t);var s=a(7),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"_7-dierent-layer-dierent-abstraction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-dierent-layer-dierent-abstraction"}},[e._v("#")]),e._v(" 7.  Dierent Layer, Dierent Abstraction")]),e._v(" "),s("p",[e._v("Software systems are composed in layers, where higher layers use the\nfacilities provided by lower layers. In a well-designed system, each layer\nprovides a different abstraction from the layers above and below it; if you\nfollow a single operation as it moves up and down through layers by\ninvoking methods, the abstractions change with each method call. For\nexample:\nIn a file system, the uppermost layer implements a file abstraction. A\nfile consists of a variable-length array of bytes, which can be updated\nby reading and writing variable-length byte ranges. The next lower\nlayer in the file system implements a cache in memory of fixed-size\ndisk blocks; callers can assume that frequently used blocks will stay\nin memory where they can be accessed quickly. The lowest layer\nconsists of device drivers, which move blocks between secondary\nstorage devices and memory.\nIn a network transport protocol such as TCP, the abstraction provided\nby the topmost layer is a stream of bytes delivered reliably from one\nmachine to another. This level is built on a lower level that transmits\npackets of bounded size between machines on a best-effort basis:\nmost packets will be delivered successfully, but some packets may be\nlost or delivered out of order.\nIf a system contains adjacent layers with similar abstractions, this is a\nred flag that suggests a problem with the class decomposition. This\nchapter discusses situations where this happens, the problems that result,\nand how to refactor to eliminate the problems.")]),e._v(" "),s("h2",{attrs:{id:"_7-1-pass-through-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-pass-through-methods"}},[e._v("#")]),e._v(" 7.1    Pass-through methods")]),e._v(" "),s("p",[e._v("When adjacent layers have similar abstractions, the problem often\nmanifests itself in the form of pass-through methods. A pass-through\nmethod is one that does little except invoke another method, whose\nsignature is similar or identical to that of the calling method. For example,\na student project implementing a GUI text editor contained a class\nconsisting almost entirely of pass-through methods. Here is an extract\nfrom that class:")]),e._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TextDocument")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("private")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TextArea")]),e._v(" textArea"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("private")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TextDocumentListener")]),e._v(" listener"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Character")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("getLastTypedCharacter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" textArea"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("getLastTypedCharacter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("getCursorOffset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" textArea"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("getCursorOffset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("insertString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" textToInsert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" offset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        textArea"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("insertString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("textToInsert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" offset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("willInsertString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" stringToInsert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" offset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("listener "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n            listener"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("willInsertString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" stringToInsert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" offset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("13 of the 15 public methods in that class were pass-through methods.")]),e._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[e._v("Pass-Through Method")]),e._v(" "),s("p",[e._v("A pass-through method is one that does nothing except pass its arguments to another method, usually with the same API as the pass-through method. This typically indicates that there is not a clean division of responsibility between the classes.")])]),e._v(" "),s("p",[e._v("Pass-through methods make classes shallower: they increase the\ninterface complexity of the class, which adds complexity, but they don’t\nincrease the total functionality of the system. Of the four methods above,\nonly the last one has any functionality, and even there it is trivial: the\nmethod checks the validity of one variable. Pass-through methods also\ncreate dependencies between classes: if the signature changes for the\ninsertString method in TextArea, then the insertString method in\nTextDocument will have to change to match.")]),e._v(" "),s("p",[e._v("Pass-through methods indicate that there is confusion over the division\nof responsibility between classes. In the example above, the TextDocument\nclass offers an insertString method, but the functionality for inserting")]),e._v(" "),s("p",[e._v("text is implemented entirely in TextArea. This is usually a bad idea: the\ninterface to a piece of functionality should be in the same class that\nimplements the functionality. When you see pass-through methods from\none class to another, consider the two classes and ask yourself “Exactly\nwhich features and abstractions is each of these classes responsible for?”\nYou will probably notice that there is an overlap in responsibility between\nthe classes.")]),e._v(" "),s("p",[e._v("The solution is to refactor the classes so that each class has a distinct\nand coherent set of responsibilities. Figure 7.1 illustrates several ways to\ndo this. One approach, shown in Figure 7.1(b), is to expose the lower level\nclass directly to the callers of the higher level class, removing all\nresponsibility for the feature from the higher level class. Another approach\nis to redistribute the functionality between the classes, as in Figure 7.1(c).\nFinally, if the classes can’t be disentangled, the best solution may be to\nmerge them as in Figure 7.1(d).")]),e._v(" "),s("p",[e._v("In the example above, there were three classes with intertwined\nresponsibilities: TextDocument, TextArea, and TextDocumentListener. The")]),e._v(" "),s("p",[e._v("student eliminated the pass-through methods by moving methods between\nclasses and collapsing the three classes into just two, whose\nresponsibilities were more clearly differentiated.")]),e._v(" "),s("h2",{attrs:{id:"_7-2-when-is-interface-duplication-ok"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-when-is-interface-duplication-ok"}},[e._v("#")]),e._v(" 7.2    When is interface duplication OK?")]),e._v(" "),s("p",[e._v("Having methods with the same signature is not always bad. The important\nthing is that each new method should contribute significant functionality.\nPass-through methods are bad because they contribute no new\nfunctionality.")]),e._v(" "),s("p",[e._v("One example where it’s useful for a method to call another method\nwith the same signature is a dispatcher. A dispatcher is a method that uses\nits arguments to select one of several other methods to invoke; then it\npasses most or all of its arguments to the chosen method. The signature for\nthe dispatcher is often the same as the signature for the methods that it\ncalls. Even so, the dispatcher provides useful functionality: it chooses\nwhich of several other methods should carry out each task.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(617),alt:"Image"}})]),e._v(" "),s("p",[s("strong",[e._v("Figure 7.1")]),e._v(": "),s("em",[e._v("Pass-through methods. In (a), class C1 contains three pass-through methods, which do nothing but invoke methods with the same signature in C2 (each symbol represents a particular method signature). The pass-through methods can be eliminated by having C1’s callers invoke C2 directly as in (b), by redistributing functionality between C1 and C2 to avoid calls between the classes as in (c), or by combining the classes as in (d).")])]),e._v(" "),s("p",[e._v("For example, when a Web server receives an incoming HTTP request\nfrom a Web browser, it invokes a dispatcher that examines the URL in the\nincoming request and selects a specific method to handle the request.\nSome URLs might be handled by returning the contents of a file on disk;\nothers might be handled by invoking a procedure in a language such as\nPHP or JavaScript. The dispatch process can be quite intricate, and is\nusually driven by a set of rules that are matched against the incoming\nURL.")]),e._v(" "),s("p",[e._v("It is fine for several methods to have the same signature as long as\neach of them provides useful and distinct functionality. The methods\ninvoked by a dispatcher have this property. Another example is interfaces\nwith multiple implementations, such as disk drivers in an operating\nsystem. Each driver provides support for a different kind of disk, but they\nall have the same interface. When several methods provide different\nimplementations of the same interface, it reduces cognitive load. Once you\nhave worked with one of these methods, it’s easier to work with the others,\nsince you don’t need to learn a new interface. Methods like this are usually\nin the same layer and they don’t invoke each other.")]),e._v(" "),s("h2",{attrs:{id:"_7-3-decorators"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-decorators"}},[e._v("#")]),e._v(" 7.3    Decorators")]),e._v(" "),s("p",[e._v("The decorator design pattern (also known as a “wrapper”) is one that\nencourages API duplication across layers. A decorator object takes an\nexisting object and extends its functionality; it provides an API similar or\nidentical to the underlying object, and its methods invoke the methods of\nthe underlying object. In the Java I/O example from Chapter 4, the\nBufferedInputStream class is a decorator: given an InputStream object, it\nprovides the same API but introduces buffering. For example, when its\nread method is invoked to read a single character, it invokes read on the")]),e._v(" "),s("p",[e._v("underlying InputStream to read a much larger block, and saves the extra\ncharacters to satisfy future read calls. Another example occurs in")]),e._v(" "),s("p",[e._v("windowing systems: a Window class implements a simple form of window\nthat is not scrollable, and a ScrollableWindow class decorates the Window")]),e._v(" "),s("p",[e._v("class by adding horizontal and vertical scrollbars.")]),e._v(" "),s("p",[e._v("The motivation for decorators is to separate special-purpose extensions\nof a class from a more generic core. However, decorator classes tend to be\nshallow: they introduce a large amount of boilerplate for a small amount\nof new functionality. Decorator classes often contain many pass-through\nmethods. It’s easy to overuse the decorator pattern, creating a new class\nfor every small new feature. This results in an explosion of shallow\nclasses, such as the Java I/O example.")]),e._v(" "),s("p",[e._v("Before creating a decorator class, consider alternatives such as the\nfollowing:\nCould you add the new functionality directly to the underlying class,\nrather than creating a decorator class? This makes sense if the new\nfunctionality is relatively general-purpose, or if it is logically related\nto the underlying class, or if most uses of the underlying class will\nalso use the new functionality. For example, virtually everyone who\ncreates a Java InputStream will also create a BufferedInputStream,\nand buffering is a natural part of I/O, so these classes should have\nbeen combined.\nIf the new functionality is specialized for a particular use case, would\nit make sense to merge it with the use case, rather than creating a\nseparate class?\nCould you merge the new functionality with an existing decorator,\nrather than creating a new decorator? This would result in a single\ndeeper decorator class rather than multiple shallow ones.\nFinally, ask yourself whether the new functionality really needs to\nwrap the existing functionality: could you implement it as a stand-\nalone class that is independent of the base class? In the windowing\nexample, the scrollbars could probably be implemented separately\nfrom the main window, without wrapping all of its existing\nfunctionality.")]),e._v(" "),s("p",[e._v("Sometimes decorators make sense, but there is usually a better alternative.")]),e._v(" "),s("h2",{attrs:{id:"_7-4-interface-versus-implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-interface-versus-implementation"}},[e._v("#")]),e._v(" 7.4    Interface versus implementation")]),e._v(" "),s("p",[e._v("Another application of the “different layer, different abstraction” rule is\nthat the interface of a class should normally be different from its\nimplementation: the representations used internally should be different")]),e._v(" "),s("p",[e._v("from the abstractions that appear in the interface. If the two have similar\nabstractions, then the class probably isn’t very deep. For example, in the\ntext editor project discussed in Chapter 6, most of the teams implemented\nthe text module in terms of lines of text, with each line stored separately.\nSome of the teams also designed the APIs for the text class around lines,\nwith methods such as getLine and putLine. However, this made the text")]),e._v(" "),s("p",[e._v("class shallow and awkward to use. In the higher-level user interface code,\nit’s common to insert text in the middle of a line (e.g., when the user is\ntyping) or to delete a range of text that spans lines. With a line-oriented\nAPI for the text class, callers were forced to split and join lines to\nimplement the user-interface operations. This code was nontrivial and it\nwas duplicated and scattered across the implementation of the user\ninterface.")]),e._v(" "),s("p",[e._v("The text classes were much easier to use when they provided a\ncharacter-oriented interface, such as an insert method that inserts an\narbitrary string of text (which may include newlines) at an arbitrary\nposition in the text and a delete method that deletes the text between two")]),e._v(" "),s("p",[e._v("arbitrary positions in the text. Internally, the text was still represented in\nterms of lines. A character-oriented interface encapsulates the complexity\nof line splitting and joining inside the text class, which makes the text\nclass deeper and simplifies higher level code that uses the class. With this\napproach, the text API is quite different from the line-oriented storage\nmechanism; the difference represents valuable functionality provided by\nthe class.")]),e._v(" "),s("h2",{attrs:{id:"_7-5-pass-through-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-pass-through-variables"}},[e._v("#")]),e._v(" 7.5    Pass-through variables")]),e._v(" "),s("p",[e._v("Another form of API duplication across layers is a pass-through variable,\nwhich is a variable that is passed down through a long chain of methods.")]),e._v(" "),s("p",[e._v("Figure 7.2 (a) shows an example from a datacenter service. A command-line argument describes certificates to use for secure communication. This information is only needed by a low-level method m3, which calls a library method to open a socket, but it is passed down through all the methods on the path between main and m3. The cert variable appears in the signature of each of the intermediate methods.")]),e._v(" "),s("p",[e._v("Pass-through variables add complexity because they force all of the intermediate methods to be aware of their existence, even though the methods have no use for the variables. Furthermore, if a new variable comes into existence (for example, a system is initially built without support for certificates, but you later decide to add that support), you may have to modify a large number of interfaces and methods to pass the variable through all of the relevant paths.")]),e._v(" "),s("p",[e._v("Eliminating pass-through variables can be challenging. One approach\nis to see if there is already an object shared between the topmost and\nbottommost methods. In the datacenter service example of Figure 7.2,\nperhaps there is an object containing other information about network\ncommunication, which is available to both main and m3. If so, main can")]),e._v(" "),s("p",[e._v("store the certificate information in that object, so it needn’t be passed\nthrough all of the intervening methods on the path to m3 (see Figure\n7.2(b)). However, if there is such an object, then it may itself be a pass-\nthrough variable (how else does m3 get access to it?).")]),e._v(" "),s("p",[e._v("Another approach is to store the information in a global variable, as in\nFigure 7.2(c). This avoids the need to pass the information from method to\nmethod, but global variables almost always create other problems. For\nexample, global variables make it impossible to create two independent\ninstances of the same system in the same process, since accesses to the\nglobal variables will conflict. It may seem unlikely that you would need\nmultiple instances in production, but they are often useful in testing.")]),e._v(" "),s("p",[e._v("The solution I use most often is to introduce a context object as in\nFigure 7.2(d). A context stores all of the application’s global state\n(anything that would otherwise be a pass-through variable or global\nvariable). Most applications have multiple variables in their global state,\nrepresenting things such as configuration options, shared subsystems, and\nperformance counters. There is one context object per instance of the\nsystem. The context allows multiple instances of the system to coexist in a\nsingle process, each with its own context.")]),e._v(" "),s("p",[e._v("Unfortunately, the context will probably be needed in many places, so\nit can potentially become a pass-through variable. To reduce the number of\nmethods that must be aware of it, a reference to the context can be saved in\nmost of the system’s major objects. In the example of Figure 7.2(d), the class containing m3 stores a reference to the context as an instance variable in its objects. When a new object is created, the creating method retrieves\nthe context reference from its object and passes it to the constructor for the new object. With this approach, the context is available everywhere, but it only appears as an explicit argument in constructors.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(618),alt:"Image"}})]),e._v(" "),s("p",[s("strong",[e._v("Figure 7.2")]),e._v(": "),s("em",[e._v("Possible techniques for dealing with a pass-through variable. In (a), cert is passed through methods m1 and m2 even though they don’t use it. In (b), main and m3 have shared access to an object, so the variable can be stored there instead of passing it through m1 and m2. In (c), cert is stored as a global variable. In (d), cert is stored in a context object along with other system-wide information, such as a timeout value and performance counters; a reference to the context is stored in all objects whose methods need access to it.")])]),e._v(" "),s("p",[e._v("The context object unifies the handling of all system-global\ninformation and eliminates the need for pass-through variables. If a new\nvariable needs to be added, it can be added to the context object; no\nexisting code is affected except for the constructor and destructor for the\ncontext. The context makes it easy to identify and manage the global state\nof the system, since it is all stored in one place. The context is also")]),e._v(" "),s("p",[e._v("convenient for testing: test code can change the global configuration of the\napplication by modifying fields in the context. It would be much more\ndifficult to implement such changes if the system used pass-through\nvariables.")]),e._v(" "),s("p",[e._v("Contexts are far from an ideal solution. The variables stored in a\ncontext have most of the disadvantages of global variables; for example, it\nmay not be obvious why a particular variable is present, or where it is\nused. Without discipline, a context can turn into a huge grab-bag of data\nthat creates nonobvious dependencies throughout the system. Contexts\nmay also create thread-safety issues; the best way to avoid problems is for\nvariables in a context to be immutable. Unfortunately, I haven’t found a\nbetter solution than contexts.")]),e._v(" "),s("h2",{attrs:{id:"_7-6-conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-6-conclusion"}},[e._v("#")]),e._v(" 7.6    Conclusion")]),e._v(" "),s("p",[e._v("Each piece of design infrastructure added to a system, such as an interface,\nargument, function, class, or definition, adds complexity, since developers\nmust learn about this element. In order for an element to provide a net gain\nagainst complexity, it must eliminate some complexity that would be\npresent in the absence of the design element. Otherwise, you are better off\nimplementing the system without that particular element. For example, a\nclass can reduce complexity by encapsulating functionality so that users of\nthe class needn’t be aware of it.")]),e._v(" "),s("p",[e._v("The “different layer, different abstraction” rule is just an application of\nthis idea: if different layers have the same abstraction, such as pass-\nthrough methods or decorators, then there’s a good chance that they\nhaven’t provided enough benefit to compensate for the additional\ninfrastructure they represent. Similarly, pass-through arguments require\neach of several methods to be aware of their existence (which adds to\ncomplexity) without contributing additional functionality.")])])}),[],!1,null,null,null);t.default=n.exports}}]);