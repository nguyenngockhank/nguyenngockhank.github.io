(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{967:function(t,a,e){"use strict";e.r(a);var n=e(7),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"linux-tricks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-tricks"}},[t._v("#")]),t._v(" Linux Tricks")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#crobtab"}},[t._v("Crobtab")]),e("ul",[e("li",[e("a",{attrs:{href:"#more-explaination"}},[t._v("More Explaination")])]),e("li",[e("a",{attrs:{href:"#tools"}},[t._v("Tools")])])])]),e("li",[e("a",{attrs:{href:"#ssh"}},[t._v("SSH")])]),e("li",[e("a",{attrs:{href:"#datetime"}},[t._v("Datetime")])]),e("li",[e("a",{attrs:{href:"#su-dung-vi"}},[t._v("Sử dụng Vi")])]),e("li",[e("a",{attrs:{href:"#su-dung-nano"}},[t._v("Sử dụng Nano")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"crobtab"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crobtab"}},[t._v("#")]),t._v(" Crobtab")]),t._v(" "),e("p",[t._v("1/ Show list crontab")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("crontab -l\n")])])]),e("p",[t._v("2/ Edit crontab")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("crontab -e\n")])])]),e("p",[t._v("Explain:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("*     *     *     *     *     command to be executed\n-     -     -     -     -\n|     |     |     |     |\n|     |     |     |     +----- day of week (0 - 6) (Sunday=0)\n|     |     |     +------- month (1 - 12)\n|     |     +--------- day of month (1 - 31)\n|     +----------- hour (0 - 23)\n+------------- min (0 - 59)\n")])])]),e("p",[t._v("Ví dụ:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("0 0 * * * cd /var/www/constructdigital.net/domains/shinnyoen-uat2.constructdigital.net/public_html && ./artisan sync-wistia-video-meta-data --env=uat > /dev/null 2>&1\n")])])]),e("h3",{attrs:{id:"more-explaination"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#more-explaination"}},[t._v("#")]),t._v(" More Explaination")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1\n")])])]),e("ul",[e("li",[e("strong",[t._v(">")]),t._v(" chuyển hướng - chuyển luồng dữ liệu đi đâu đó")]),t._v(" "),e("li",[e("strong",[t._v(">>")]),t._v(" chuyển hướng - giống như trên nhưng sẽ cộng dồn vào đích nó đến")]),t._v(" "),e("li",[e("strong",[t._v("/dev/null")]),t._v(" trong linux nó giống như một cái hố đen, nơi mà mọi dữ liệu gửi đến đều sẽ bị loại bỏ mất xác.")]),t._v(" "),e("li",[e("strong",[t._v("2")]),t._v(" là ký hiệu chỉ đích đến Standard Error (stderr)")]),t._v(" "),e("li",[e("strong",[t._v("1")]),t._v(" là ký hiệu chỉ đích đến Standard Out (stdout)")]),t._v(" "),e("li",[e("strong",[t._v("&")]),t._v(" là ký hiệu kiểu A or B")])]),t._v(" "),e("p",[t._v("Mặc định cron gửi email cho người thực thi cron job, nếu bạn muốn tắt chức năng gửi email này đi thì hãy thêm đoạn sau vào cuối dòng >> /dev/null 2>&1")]),t._v(" "),e("h3",{attrs:{id:"tools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tools"}},[t._v("#")]),t._v(" Tools")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://crontab.guru/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://crontab.guru/"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"ssh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[t._v("#")]),t._v(" SSH")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://hocvps.com/ssh-keys-login/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cứ làm theo bài viết này"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Tóm tắt:")]),t._v(" "),e("ul",[e("li",[t._v("Dưới Client tạo SSH Key")]),t._v(" "),e("li",[t._v("Trên Server Linux (VPS):  dán cái public key vào file này "),e("code",[t._v("~/.ssh/authorized_keys")])]),t._v(" "),e("li",[t._v("Tạo config "),e("code",[t._v("IP")]),t._v(", "),e("code",[t._v("user")]),t._v(" để khỏi phải nhập rồi xài thôi")])]),t._v(" "),e("h2",{attrs:{id:"datetime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#datetime"}},[t._v("#")]),t._v(" Datetime")]),t._v(" "),e("p",[e("strong",[t._v("Ubuntu")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("cat /etc/timezone\n")])])]),e("p",[t._v("Output example: "),e("code",[t._v("Australia/Melbourne")])]),t._v(" "),e("p",[e("strong",[t._v("Another way")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("date +%Z\n")])])]),e("p",[e("strong",[t._v("Output example")]),t._v(": "),e("code",[t._v("AEDT")]),t._v(". "),e("a",{attrs:{href:"https://24timezones.com/time-zone/aedt",target:"_blank",rel:"noopener noreferrer"}},[t._v("Check list here"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"su-dung-vi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#su-dung-vi"}},[t._v("#")]),t._v(" Sử dụng "),e("code",[t._v("Vi")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://helpdesk.inet.vn/knowledgebase/huong-dan-co-ban-su-dung-vi-trong-linux",target:"_blank",rel:"noopener noreferrer"}},[t._v("SGK"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Tóm tắt lệnh hay xài")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("Esc")]),t._v(" để chuyển đổi qua lại từ command mode với insert mode.")]),t._v(" "),e("li",[e("code",[t._v(":w!")]),t._v(" lưu tập tin")]),t._v(" "),e("li",[e("code",[t._v(":x!")]),t._v(" lưu tập tin và thoát")]),t._v(" "),e("li",[e("code",[t._v(":wq")]),t._v(" ZZ lưu tập tin và thoát")]),t._v(" "),e("li",[e("code",[t._v(":q!")]),t._v(" không lưu và thoát")])]),t._v(" "),e("h2",{attrs:{id:"su-dung-nano"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#su-dung-nano"}},[t._v("#")]),t._v(" Sử dụng "),e("code",[t._v("Nano")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://hocvps.com/cach-su-dung-nano-editor/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SGK"),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[t._v("Ký hiệu "),e("code",[t._v("^")]),t._v(" thay cho phím "),e("code",[t._v("Ctrl")])]),t._v(" "),e("li",[e("code",[t._v("Ctrl+O")]),t._v(" lưu file")]),t._v(" "),e("li",[e("code",[t._v("Ctrl+X")]),t._v(" thoát khỏi editor (có thể cần ấn thêm Y/N)")]),t._v(" "),e("li",[e("code",[t._v("Ctrl+W")]),t._v(" search")])])])}),[],!1,null,null,null);a.default=r.exports}}]);