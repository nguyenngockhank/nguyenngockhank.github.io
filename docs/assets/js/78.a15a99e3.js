(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{617:function(e,t,a){e.exports=a.p+"assets/img/image--004.ed9eb89a.jpg"},999:function(e,t,a){"use strict";a.r(t);var n=a(7),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"_4-modules-should-be-deep"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-modules-should-be-deep"}},[e._v("#")]),e._v(" 4. Modules Should Be Deep")]),e._v(" "),n("p",[e._v("One of the most important techniques for managing software complexity\nis to design systems so that developers only need to face a small fraction\nof the overall complexity at any given time. This approach is called\nmodular design, and this chapter presents its basic principles.")]),e._v(" "),n("h2",{attrs:{id:"_4-1-modular-design"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-modular-design"}},[e._v("#")]),e._v(" 4.1    Modular design")]),e._v(" "),n("p",[e._v("In modular design, a software system is decomposed into a collection of\nmodules that are relatively independent. Modules can take many forms,\nsuch as classes, subsystems, or services. In an ideal world, each module\nwould be completely independent of the others: a developer could work in\nany of the modules without knowing anything about any of the other\nmodules. In this world, the complexity of a system would be the\ncomplexity of its worst module.")]),e._v(" "),n("p",[e._v("Unfortunately, this ideal is not achievable. Modules must work\ntogether by calling each others’s functions or methods. As a result,\nmodules must know something about each other. There will be\ndependencies between the modules: if one module changes, other modules\nmay need to change to match. For example, the arguments for a method\ncreate a dependency between the method and any code that invokes the\nmethod. If the required arguments change, all invocations of the method\nmust be modified to conform to the new signature. Dependencies can take\nmany other forms, and they can be quite subtle. The goal of modular\ndesign is to minimize the dependencies between modules.")]),e._v(" "),n("p",[e._v("In order to manage dependencies, we think of each module in two\nparts: an interface and an implementation. The interface consists of\neverything that a developer working in a different module must know in")]),e._v(" "),n("p",[e._v("order to use the given module. Typically, the interface describes what the\nmodule does but not how it does it. The implementation consists of the\ncode that carries out the promises made by the interface. A developer\nworking in a particular module must understand the interface and\nimplementation of that module, plus the interfaces of any other modules\ninvoked by the given module. A developer should not need to understand\nthe implementations of modules other than the one he or she is working in.")]),e._v(" "),n("p",[e._v("Consider a module that implements balanced trees. The module\nprobably contains sophisticated code for ensuring that the tree remains\nbalanced. However, this complexity is not visible to users of the module.\nUsers see a relatively simple interface for invoking operations to insert,\nremove, and fetch nodes in the tree. To invoke an insert operation, the\ncaller need only provide the key and value for the new node; the\nmechanisms for traversing the tree and splitting nodes are not visible in\nthe interface.")]),e._v(" "),n("p",[e._v("For the purposes of this book, a module is any unit of code that has an\ninterface and an implementation. Each class in an object-oriented\nprogramming language is a module. Methods within a class, or functions\nin a language that isn’t object-oriented, can also be thought of as modules:\neach of these has an interface and an implementation, and modular design\ntechniques can be applied to them. Higher-level subsystems and services\nare also modules; their interfaces may take different forms, such as kernel\ncalls or HTTP requests. Much of the discussion about modular design in\nthis book focuses on designing classes, but the techniques and concepts\napply to other kinds of modules as well.")]),e._v(" "),n("p",[e._v("The best modules are those whose interfaces are much simpler than\ntheir implementations. Such modules have two advantages. First, a simple\ninterface minimizes the complexity that a module imposes on the rest of\nthe system. Second, if a module is modified in a way that does not change\nits interface, then no other module will be affected by the modification. If\na module’s interface is much simpler than its implementation, there will\nbe many aspects of the module that can be changed without affecting other\nmodules.")]),e._v(" "),n("h2",{attrs:{id:"_4-2-what-s-in-an-interface"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-what-s-in-an-interface"}},[e._v("#")]),e._v(" 4.2    What’s in an interface?")]),e._v(" "),n("p",[e._v("The interface to a module contains two kinds of information: formal and\ninformal. The formal parts of an interface are specified explicitly in the\ncode, and some of these can be checked for correctness by the\nprogramming language. For example, the formal interface for a method is\nits signature, which includes the names and types of its parameters, the\ntype of its return value, and information about exceptions thrown by the\nmethod. Most programming languages ensure that each invocation of a\nmethod provides the right number and types of arguments to match its\nsignature. The formal interface for a class consists of the signatures for all\nof its public methods, plus the names and types of any public variables.")]),e._v(" "),n("p",[e._v("Each interface also includes informal elements. These are not specified\nin a way that can be understood or enforced by the programming language.\nThe informal parts of an interface include its high-level behavior, such as\nthe fact that a function deletes the file named by one of its arguments. If\nthere are constraints on the usage of a class (perhaps one method must be\ncalled before another), these are also part of the class’s interface. In\ngeneral, if a developer needs to know a particular piece of information in\norder to use a module, then that information is part of the module’s\ninterface. The informal aspects of an interface can only be described using\ncomments, and the programming language cannot ensure that the")]),e._v(" "),n("p",[e._v("description is complete or accurate^1. For most interfaces the informal\naspects are larger and more complex than the formal aspects.")]),e._v(" "),n("p",[e._v("One of the benefits of a clearly specified interface is that it indicates\nexactly what developers need to know in order to use the associated\nmodule. This helps to eliminate the “unknown unknowns” problem\ndescribed in Section 2.2.")]),e._v(" "),n("h2",{attrs:{id:"_4-3-abstractions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-abstractions"}},[e._v("#")]),e._v(" 4.3    Abstractions")]),e._v(" "),n("p",[e._v("The term abstraction is closely related to the idea of modular design. An\nabstraction is a simplified view of an entity, which omits unimportant\ndetails. Abstractions are useful because they make it easier for us to think\nabout and manipulate complex things.")]),e._v(" "),n("p",[e._v("In modular programming, each module provides an abstraction in form\nof its interface. The interface presents a simplified view of the module’s")]),e._v(" "),n("p",[e._v("functionality; the details of the implementation are unimportant from the\nstandpoint of the module’s abstraction, so they are omitted from the\ninterface.")]),e._v(" "),n("p",[e._v("In the definition of abstraction, the word “unimportant” is crucial. The\nmore unimportant details that are omitted from an abstraction, the better.\nHowever, a detail can only be omitted from an abstraction if it is\nunimportant. An abstraction can go wrong in two ways. First, it can\ninclude details that are not really important; when this happens, it makes\nthe abstraction more complicated than necessary, which increases the\ncognitive load on developers using the abstraction. The second error is\nwhen an abstraction omits details that really are important. This results in\nobscurity: developers looking only at the abstraction will not have all the\ninformation they need to use the abstraction correctly. An abstraction that\nomits important details is a false abstraction: it might appear simple, but\nin reality it isn’t. The key to designing abstractions is to understand what\nis important, and to look for designs that minimize the amount of\ninformation that is important.")]),e._v(" "),n("p",[e._v("As an example, consider a file system. The abstraction provided by a\nfile system omits many details, such as the mechanism for choosing which\nblocks on a storage device to use for the data in a given file. These details\nare unimportant to users of the file system (as long as the system provides\nadequate performance). However, some of the details of a file system’s\nimplementation are important to users. Most file systems cache data in\nmain memory, and they may delay writing new data to the storage device\nin order to improve performance. Some applications, such as databases,\nneed to know exactly when data is written through to storage, so they can\nensure that data will be preserved after system crashes. Thus, the rules for\nflushing data to secondary storage must be visible in the file system’s\ninterface.")]),e._v(" "),n("p",[e._v("We depend on abstractions to manage complexity not just in\nprogramming, but pervasively in our everyday lives. A microwave oven\ncontains complex electronics to convert alternating current into microwave\nradiation and distribute that radiation throughout the cooking cavity.\nFortunately, users see a much simpler abstraction, consisting of a few\nbuttons to control the timing and intensity of the microwaves. Cars provide")]),e._v(" "),n("p",[e._v("a simple abstraction that allows us to drive them without understanding\nthe mechanisms for electrical motors, battery power management, anti-\nlock brakes, cruise control, and so on.")]),e._v(" "),n("h2",{attrs:{id:"_4-4-deep-modules"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-deep-modules"}},[e._v("#")]),e._v(" 4.4    Deep modules")]),e._v(" "),n("p",[e._v("The best modules are those that provide powerful functionality yet have\nsimple interfaces. I use the term deep to describe such modules. To\nvisualize the notion of depth, imagine that each module is represented by a\nrectangle, as shown in Figure 4.1. The area of each rectangle is\nproportional to the functionality implemented by the module. The top edge\nof a rectangle represents the module’s interface; the length of that edge\nindicates the complexity of the interface. The best modules are deep: they\nhave a lot of functionality hidden behind a simple interface. A deep\nmodule is a good abstraction because only a small fraction of its internal\ncomplexity is visible to its users.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(617),alt:"Image"}})]),e._v(" "),n("p",[n("strong",[e._v("Figure 4.1")]),e._v(": "),n("em",[e._v("Deep and shallow modules. The best modules are deep: they allow a lot of functionality to be accessed through a simple interface. A shallow module is one with a relatively complex interface, but not much functionality: it doesn’t hide much complexity.")])]),e._v(" "),n("p",[e._v("Module depth is a way of thinking about cost versus benefit. The\nbenefit provided by a module is its functionality. The cost of a module (in\nterms of system complexity) is its interface. A module’s interface\nrepresents the complexity that the module imposes on the rest of the\nsystem: the smaller and simpler the interface, the less complexity that it\nintroduces. The best modules are those with the greatest benefit and the\nleast cost. Interfaces are good, but more, or larger, interfaces are not\nnecessarily better!")]),e._v(" "),n("p",[e._v("The mechanism for file I/O provided by the Unix operating system and\nits descendants, such as Linux, is a beautiful example of a deep interface.\nThere are only five basic system calls for I/O, with simple signatures:")]),e._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("char")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" flags"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" mode_t permissions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nssize_t "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("read")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" fd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" buffer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" size_t count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nssize_t "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("write")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" fd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" buffer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" size_t count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\noff_t "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("lseek")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" fd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" off_t offset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" referencePosition"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" fd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),n("p",[e._v("The open system call takes a hierarchical file name such as /a/b/c and")]),e._v(" "),n("p",[e._v("returns an integer file descriptor, which is used to reference the open file.\nThe other arguments for open provide optional information such as\nwhether the file is being opened for reading or writing, whether a new file\nshould be created if there is no existing file, and access permissions for\nthe file, if a new file is created. The read and write system calls transfer")]),e._v(" "),n("p",[e._v("information between buffer areas in the application’s memory and the file;\nclose ends the access to the file. Most files are accessed sequentially, so\nthat is the default; however, random access can be achieved by invoking\nthe lseek system call to change the current access position.")]),e._v(" "),n("p",[e._v("A modern implementation of the Unix I/O interface requires hundreds\nof thousands of lines of code, which address complex issues such as:\nHow are files represented on disk in order to allow efficient access?\nHow are directories stored, and how are hierarchical path names\nprocessed to find the files they refer to?\nHow are permissions enforced, so that one user cannot modify or\ndelete another user’s files?\nHow are file accesses implemented? For example, how is\nfunctionality divided between interrupt handlers and background\ncode, and how do these two elements communicate safely?\nWhat scheduling policies are used when there are concurrent accesses\nto multiple files?\nHow can recently accessed file data be cached in memory in order to\nreduce the number of disk accesses?\nHow can a variety of different secondary storage devices, such as\ndisks and flash drives, be incorporated into a single file system?")]),e._v(" "),n("p",[e._v("All of these issues, and many more, are handled by the Unix file system\nimplementation; they are invisible to programmers who invoke the system\ncalls. Implementations of the Unix I/O interface have evolved radically\nover the years, but the five basic kernel calls have not changed.")]),e._v(" "),n("p",[e._v("Another example of a deep module is the garbage collector in a\nlanguage such as Go or Java. This module has no interface at all; it works\ninvisibly behind the scenes to reclaim unused memory. Adding garbage\ncollection to a system actually shrinks its overall interface, since it\neliminates the interface for freeing objects. The implementation of a\ngarbage collector is quite complex, but that complexity is hidden from\nprogrammers using the language.")]),e._v(" "),n("p",[e._v("Deep modules such as Unix I/O and garbage collectors provide\npowerful abstractions because they are easy to use, yet they hide\nsignificant implementation complexity.")]),e._v(" "),n("h2",{attrs:{id:"_4-5-shallow-modules"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-shallow-modules"}},[e._v("#")]),e._v(" 4.5    Shallow modules")]),e._v(" "),n("p",[e._v("On the other hand, a shallow module is one whose interface is relatively\ncomplex in comparison to the functionality that it provides. For example, a\nclass that implements linked lists is shallow. It doesn’t take much code to\nmanipulate a linked list (inserting or deleting an element takes only a few\nlines), so the linked list abstraction doesn’t hide very many details. The\ncomplexity of a linked list interface is nearly as great as the complexity of\nits implementation. Shallow classes are sometimes unavoidable, but they\ndon’t provide help much in managing complexity.")]),e._v(" "),n("p",[e._v("Here is an extreme example of a shallow method, taken from a project\nin a software design class:")]),e._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("private")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("addNullValueForAttribute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" attribute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("put")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("attribute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),n("p",[e._v("From the standpoint of managing complexity, this method makes things\nworse, not better. The method offers no abstraction, since all of its\nfunctionality is visible through its interface. For example, callers probably\nneed to know that the attribute will be stored in the data variable. It is no\nsimpler to think about the interface than to think about the full")]),e._v(" "),n("p",[e._v("implementation. If the method is documented properly, the documentation\nwill be longer than the method’s code. It even takes more keystrokes to\ninvoke the method than it would take for a caller to manipulate the data")]),e._v(" "),n("p",[e._v("variable directly. The method adds complexity (in the form of a new\ninterface for developers to learn) but provides no compensating benefit.")]),e._v(" "),n("div",{staticClass:"custom-block danger"},[n("p",{staticClass:"custom-block-title"},[e._v("Red Flag: Shallow Module")]),e._v(" "),n("p",[e._v("A shallow module is one whose interface is complicated relative to the\nfunctionality it provides. Shallow modules don’t help much in the battle\nagainst complexity, because the benefit they provide (not having to learn\nabout how they work internally) is negated by the cost of learning and\nusing their interfaces. Small modules tend to be shallow.")])]),e._v(" "),n("h2",{attrs:{id:"_4-6-classitis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-classitis"}},[e._v("#")]),e._v(" 4.6    Classitis")]),e._v(" "),n("p",[e._v("Unfortunately, the value of deep classes is not widely appreciated today.\nThe conventional wisdom in programming is that classes should be small,\nnot deep. Students are often taught that the most important thing in class\ndesign is to break up larger classes into smaller ones. The same advice is\noften given about methods: “Any method longer than N lines should be\ndivided into multiple methods” (N can be as low as 10). This approach\nresults in large numbers of shallow classes and methods, which add to\noverall system complexity.")]),e._v(" "),n("p",[e._v("The extreme of the “classes should be small” approach is a syndrome I\ncall classitis, which stems from the mistaken view that “classes are good,\nso more classes are better.” In systems suffering from classitis, developers\nare encouraged to minimize the amount of functionality in each new class:\nif you want more functionality, introduce more classes. Classitis may\nresult in classes that are individually simple, but it increases the\ncomplexity of the overall system. Small classes don’t contribute much\nfunctionality, so there have to be a lot of them, each with its own interface.\nThese interfaces accumulate to create tremendous complexity at the")]),e._v(" "),n("p",[e._v("system level. Small classes also result in a verbose programming style,\ndue to the boilerplate required for each class.")]),e._v(" "),n("h2",{attrs:{id:"_4-7-examples-java-and-unix-i-o"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-examples-java-and-unix-i-o"}},[e._v("#")]),e._v(" 4.7    Examples: Java and Unix I/O")]),e._v(" "),n("p",[e._v("One of the most visible examples of classitis today is the Java class library. The Java language doesn’t require lots of small classes, but a culture of classitis seems to have taken root in the Java programming community. For example, to open a file in order to read serialized objects\nfrom it, you must create three different objects:")]),e._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("FileInputStream")]),e._v(" fileStream "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("FileInputStream")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("fileName"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("BufferedInputStream")]),e._v(" bufferedStream "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("BufferedInputStream")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("fileStream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ObjectInputStream")]),e._v(" objectStream "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ObjectInputStream")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("bufferedStream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),n("p",[e._v("A "),n("code",[e._v("FileInputStream")]),e._v(" object provides only rudimentary I/O: it is not capable of performing buffered I/O, nor can it read or write serialized objects. The "),n("code",[e._v("BufferedInputStream")]),e._v(" object adds buffering to a "),n("code",[e._v("FileInputStream")]),e._v(", and the")]),e._v(" "),n("p",[n("code",[e._v("ObjectInputStream")]),e._v(" adds the ability to read and write serialized objects. The first two objects in the code above, fileStream and bufferedStream, are never used once the file has been opened; all future operations use "),n("code",[e._v("objectStream")]),e._v(".")]),e._v(" "),n("p",[e._v("It is particularly annoying (and error-prone) that buffering must be requested explicitly by creating a separate "),n("code",[e._v("BufferedInputStream")]),e._v(" object; if a developer forgets to create this object, there will be no buffering and I/O will be slow. Perhaps the Java developers would argue that not everyone wants to use buffering for file I/O, so it shouldn’t be built into the base mechanism. They might argue that it’s better to keep buffering separate, so people can choose whether or not to use it. Providing choice is good, but interfaces should be designed to make the common case as simple as possible (see the formula on page 6). Almost every user of file I/O will want buffering, so it should be provided by default. For those few situations where buffering is not desirable, the library can provide a mechanism to disable it. Any mechanism for disabling buffering should be cleanly separated in the interface (for example, by providing a different constructor for FileInputStream, or through a method that disables or replaces the buffering mechanism), so that most developers do not even need to be aware of its existence.")]),e._v(" "),n("p",[e._v("In contrast, the designers of the Unix system calls made the common case simple. For example, they recognized that sequential I/O is most common, so they made that the default behavior. Random access is still relatively easy to do, using the lseek system call, but a developer doing only sequential access need not be aware of that mechanism. If an interface has many features, but most developers only need to be aware of a few of them, the effective complexity of that interface is just the\ncomplexity of the commonly used features.")]),e._v(" "),n("h2",{attrs:{id:"_4-8-conclusion"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-conclusion"}},[e._v("#")]),e._v(" 4.8    Conclusion")]),e._v(" "),n("p",[e._v("By separating the interface of a module from its implementation, we can hide the complexity of the implementation from the rest of the system.")]),e._v(" "),n("p",[e._v("Users of a module need only understand the abstraction provided by its interface. The most important issue in designing classes and other modules is to make them deep, so that they have simple interfaces for the common use cases, yet still provide significant functionality. This maximizes the amount of complexity that is concealed.")]),e._v(" "),n("p",[e._v("(^1) There exist languages, mostly in the research community, where the overall behavior of a method or function can be described formally using a specification language. The specification can be checked automatically to ensure that it matches the implementation. An interesting question is whether such a formal specification could replace the informal parts of an interface.")]),e._v(" "),n("p",[e._v("My current opinion is that an interface described in English is likely to be more intuitive and understandable for developers than one written in a formal specification language.")])])}),[],!1,null,null,null);t.default=s.exports}}]);