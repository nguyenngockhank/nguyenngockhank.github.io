(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{887:function(e,t,a){"use strict";a.r(t);var o=a(7),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_6-general-purpose-modules-are-deeper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-general-purpose-modules-are-deeper"}},[e._v("#")]),e._v(" 6.  General-Purpose Modules are Deeper")]),e._v(" "),a("p",[e._v("One of the most common decisions that you will face when designing a\nnew module is whether to implement it in a general-purpose or special-\npurpose fashion. Some might argue that you should take a general-purpose\napproach, in which you implement a mechanism that can be used to\naddress a broad range of problems, not just the ones that are important\ntoday. In this case, the new mechanism may find unanticipated uses in the\nfuture, thereby saving time. The general-purpose approach seems\nconsistent with the investment mindset discussed in Chapter 3, where you\nspend a bit more time up front to save time later on.")]),e._v(" "),a("p",[e._v("On the other hand, we know that it’s hard to predict the future needs of\na software system, so a general-purpose solution might include facilities\nthat are never actually needed. Furthermore, if you implement something\nthat is too general-purpose, it might not do a good job of solving the\nparticular problem you have today. As a result, some might argue that it’s\nbetter to focus on today’s needs, building just what you know you need,\nand specializing it for the way you plan to use it today. If you take the\nspecial-purpose approach and discover additional uses later, you can\nalways refactor it to make it general-purpose. The special-purpose\napproach seems consistent with an incremental approach to software\ndevelopment.")]),e._v(" "),a("h2",{attrs:{id:"_6-1-make-classes-somewhat-general-purpose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-make-classes-somewhat-general-purpose"}},[e._v("#")]),e._v(" 6.1    Make classes somewhat general-purpose")]),e._v(" "),a("p",[e._v("In my experience, the sweet spot is to implement new modules in a\nsomewhat general-purpose fashion. The phrase “somewhat general-\npurpose” means that the module’s functionality should reflect your current\nneeds, but its interface should not. Instead, the interface should be general")]),e._v(" "),a("p",[e._v("enough to support multiple uses. The interface should be easy to use for\ntoday’s needs without being tied specifically to them. The word\n“somewhat” is important: don’t get carried away and build something so\ngeneral-purpose that it is difficult to use for your current needs.")]),e._v(" "),a("p",[e._v("The most important (and perhaps surprising) benefit of the general-\npurpose approach is that it results in simpler and deeper interfaces than a\nspecial-purpose approach. The general-purpose approach can also save you\ntime in the future, if you reuse the class for other purposes. However, even\nif the module is only used for its original purpose, the general-purpose\napproach is still better because of its simplicity.")]),e._v(" "),a("h2",{attrs:{id:"_6-2-example-storing-text-for-an-editor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-example-storing-text-for-an-editor"}},[e._v("#")]),e._v(" 6.2    Example: storing text for an editor")]),e._v(" "),a("p",[e._v("Let’s consider an example from a software design class in which students\nwere asked to build simple GUI text editors. The editors had to display a\nfile and allow users to point, click, and type to edit the file. The editors\nhad to support multiple simultaneous views of the same file in different\nwindows; they also had to support multi-level undo and redo for\nmodifications to the file.")]),e._v(" "),a("p",[e._v("Each of the student projects included a class that managed the\nunderlying text of the file. The text classes typically provided methods for\nloading a file into memory, reading and modifying the text of the file, and\nwriting the modified text back to a file.")]),e._v(" "),a("p",[e._v("Many of the student teams implemented special-purpose APIs for the\ntext class. They knew that the class was going to be used in an interactive\neditor, so they thought about the features that the editor had to provide and\ntailored the API of the text class to those specific features. For example, if\na user of the editor typed the backspace key, the editor deleted the\ncharacter immediately to the left of the cursor; if the user typed the delete\nkey, the editor deleted the character immediately to the right of the cursor.\nKnowing this, some of the teams created one method in the text class to\nsupport each of these specific features:\nvoid backspace(Cursor cursor);\nvoid delete(Cursor cursor);")]),e._v(" "),a("p",[e._v("Each of these methods takes the cursor position as its argument; a special\ntype Cursor represents this position. The editor also had to support a\nselection that could be copied or deleted. The students handled this by\ndefining a Selection class and passing an object of this class to the text")]),e._v(" "),a("p",[e._v("class during deletions:\nvoid deleteSelection(Selection selection);")]),e._v(" "),a("p",[e._v("The students probably thought that it would be easier to implement the\nuser interface if the methods of the text class corresponded to the features\nvisible to users. In reality, however, this specialization provided little\nbenefit for the user interface code, and it created a high cognitive load for\ndevelopers working on either the user interface or the text class. The text\nclass ended up with a large number of shallow methods, each of which was\nonly suitable for one user interface operation. Many of the methods, such\nas delete, were only invoked in a single place. As a result, a developer\nworking on the user interface had to learn about a large number of\nmethods for the text class.")]),e._v(" "),a("p",[e._v("This approach created information leakage between the user interface\nand the text class. Abstractions related to the user interface, such as the\nselection or the backspace key, were reflected in the text class; this\nincreased the cognitive load for developers working on the text class. Each\nnew user interface operation required a new method to be defined in the\ntext class, so a developer working on the user interface was likely to end\nup working on the text class as well. One of the goals in class design is to\nallow each class to be developed independently, but the specialized\napproach tied the user interface and text classes together.")]),e._v(" "),a("h2",{attrs:{id:"_6-3-a-more-general-purpose-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-a-more-general-purpose-api"}},[e._v("#")]),e._v(" 6.3    A more general-purpose API")]),e._v(" "),a("p",[e._v("A better approach is to make the text class more generic. Its API should be\ndefined only in terms of basic text features, without reflecting the higher-\nlevel operations that will be implemented with it. For example, only two\nmethods are needed for modifying text:\nvoid insert(Position position, String newText);\nvoid delete(Position start, Position end);")]),e._v(" "),a("p",[e._v("The first method inserts an arbitrary string at an arbitrary position within\nthe text, and the second method deletes all of the characters at positions\ngreater than or equal to start but less than end. This API also uses a more")]),e._v(" "),a("p",[e._v("generic type Position instead of Cursor, which reflects a specific user\ninterface. The text class should also provide general-purpose facilities for\nmanipulating positions within the text, such as the following:\nPosition changePosition(Position position, int numChars);")]),e._v(" "),a("p",[e._v("This method returns a new position that is a given number of characters\naway from a given position. If the numChars argument is positive, the new")]),e._v(" "),a("p",[e._v("position is later in the file than position; if numChars is negative, the new\nposition is before position. The method automatically skips to the next or")]),e._v(" "),a("p",[e._v("previous line when necessary. With these methods, the delete key can be\nimplemented with the following code (assuming the cursor variable holds\nthe current cursor position):\ntext.delete(cursor, text.changePosition(cursor, 1));")]),e._v(" "),a("p",[e._v("Similarly, the backspace key can be implemented as follows:\ntext.delete(text.changePosition(cursor, -1), cursor);")]),e._v(" "),a("p",[e._v("With the general-purpose text API, the code to implement user\ninterface functions such as delete and backspace is a bit longer than with\nthe original approach using a specialized text API. However, the new code\nis more obvious than the old code. A developer working in the user\ninterface module probably cares about which characters are deleted by the\nbackspace key. With the new code, this is obvious. With the old code, the\ndeveloper had to go to the text class and read the documentation and/or\ncode of the backspace method to verify the behavior. Furthermore, the")]),e._v(" "),a("p",[e._v("general-purpose approach has less code overall than the specialized\napproach, since it replaces a large number of special-purpose methods in\nthe text class with a smaller number of general-purpose ones.")]),e._v(" "),a("p",[e._v("A text class implemented with the general-purpose interface could\npotentially be used for other purposes besides an interactive editor. As one\nexample, suppose you were building an application that modified a\nspecified file by replacing all occurrences of a particular string with\nanother string. Methods from the specialized text class, such as backspace\nand delete, would have little value for this application. However, the")]),e._v(" "),a("p",[e._v("general-purpose text class would already have most of the functionality\nneeded for the new application. All that is missing is a method to search\nfor the next occurrence of a given string, such as this:\nPosition findNext(Position start, String string);")]),e._v(" "),a("p",[e._v("Of course, an interactive text editor is likely to have a mechanism for\nsearching and replacing, in which case the text class would already include\nthis method.")]),e._v(" "),a("h2",{attrs:{id:"_6-4-generality-leads-to-better-information-hiding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-generality-leads-to-better-information-hiding"}},[e._v("#")]),e._v(" 6.4    Generality leads to better information hiding")]),e._v(" "),a("p",[e._v("The general-purpose approach provides a cleaner separation between the\ntext and user interface classes, which results in better information hiding.\nThe text class need not be aware of specifics of the user interface, such as\nhow the backspace key is handled; these details are now encapsulated in\nthe user interface class. New user interface features can be added without\ncreating new supporting functions in the text class. The general-purpose\ninterface also reduces cognitive load: a developer working on the user\ninterface only needs to learn a few simple methods, which can be reused\nfor a variety of purposes.")]),e._v(" "),a("p",[e._v("The backspace method in the original version of the text class was a\nfalse abstraction. It purported to hide information about which characters\nare deleted, but the user interface module really needs to know this; user\ninterface developers are likely to read the code of the backspace method in")]),e._v(" "),a("p",[e._v("order to confirm its precise behavior. Putting the method in the text class\njust makes it harder for user interface developers to get the information\nthey need. One of the most important elements of software design is\ndetermining who needs to know what, and when. When the details are\nimportant, it is better to make them explicit and as obvious as possible,\nsuch as the revised implementation of the backspace operation. Hiding this\ninformation behind an interface just creates obscurity.")]),e._v(" "),a("h2",{attrs:{id:"_6-5-questions-to-ask-yourself"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-questions-to-ask-yourself"}},[e._v("#")]),e._v(" 6.5    Questions to ask yourself")]),e._v(" "),a("p",[e._v("It is easier to recognize a clean general-purpose class design than it is to\ncreate one. Here are some questions you can ask yourself, which will help")]),e._v(" "),a("p",[e._v("you to find the right balance between general-purpose and special-purpose\nfor an interface.")]),e._v(" "),a("p",[e._v("What is the simplest interface that will cover all my current needs? If\nyou reduce the number of methods in an API without reducing its overall\ncapabilities, then you are probably creating more general-purpose\nmethods. The special-purpose text API had at least three methods for\ndeleting text: backspace, delete, and deleteSelection. The more general-\npurpose API had only one method for deleting text, which served all three\npurposes. Reducing the number of methods makes sense only as long as\nthe API for each individual method stays simple; if you have to introduce\nlots of additional arguments in order to reduce the number of methods,\nthen you may not really be simplifying things.")]),e._v(" "),a("p",[e._v("In how many situations will this method be used? If a method is\ndesigned for one particular use, such as the backspace method, that is a red\nflag that it may be too special-purpose. See if you can replace several\nspecial-purpose methods with a single general-purpose method.")]),e._v(" "),a("p",[e._v("Is this API easy to use for my current needs? This question can help you\nto determine when you have gone too far in making an API simple and\ngeneral-purpose. If you have to write a lot of additional code to use a class\nfor your current purpose, that’s a red flag that the interface doesn’t provide\nthe right functionality. For example, one approach for the text class would\nbe to design it around single-character operations: insert inserts a single\ncharacter and delete deletes a single character. This API is both simple")]),e._v(" "),a("p",[e._v("and general-purpose. However, it would not be particularly easy to use for\na text editor: higher-level code would contain lots of loops to insert or\ndelete ranges of characters. The single-character approach would also be\ninefficient for large operations. Thus it’s better for the text class to have\nbuilt-in support for operations on ranges of characters.")]),e._v(" "),a("h2",{attrs:{id:"_6-6-conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-conclusion"}},[e._v("#")]),e._v(" 6.6    Conclusion")]),e._v(" "),a("p",[e._v("General-purpose interfaces have many advantages over special-purpose ones. They tend to be simpler, with fewer methods that are deeper. They also provide a cleaner separation between classes, whereas special-purpose interfaces tend to leak information between classes. Making your modules somewhat general-purpose is one of the best ways to reduce overall system complexity.")])])}),[],!1,null,null,null);t.default=s.exports}}]);