(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{458:function(s,n,e){"use strict";e.r(n);var t=e(15),a=Object(t.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"http协议"}},[s._v("http协议")]),s._v(" "),e("h2",{attrs:{id:"同源策略"}},[s._v("同源策略")]),s._v(" "),e("p",[s._v("同源策略可防止 JavaScript 发起跨域请求。同源被定义为 URI、主机名和端口号的组合。此策略可防止页面上的恶意脚本通过该页面的文档对象模型，访问另一个网页上的敏感数据。")]),s._v(" "),e("h2",{attrs:{id:"跨域"}},[s._v("跨域")]),s._v(" "),e("ul",[e("li",[s._v("原因\n浏览器的同源策略导致了跨域")]),s._v(" "),e("li",[s._v("作用\n用于隔离潜在恶意文件的重要安全机制")]),s._v(" "),e("li",[s._v("解决\njsonp ，允许 script 加载第三方资源\n反向代理（nginx 服务内部配置 Access-Control-Allow-Origin *）\ncors 前后端协作设置请求头部，Access-Control-Allow-Origin 等头部信息\niframe 嵌套通讯，postmessage")])]),s._v(" "),e("h2",{attrs:{id:"一次完整的http请求所经历的7个步骤"}},[s._v("一次完整的HTTP请求所经历的7个步骤")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("HTTP通信机制是在一次完整的HTTP通信过程中，Web浏览器与Web服务器之间将完成下列7个步骤：\n\n建立TCP连接\n在HTTP工作开始之前，Web浏览器首先要通过网络与Web服务器建立连接，该连接是通过TCP来完成的，该协议与IP协议共同构建 Internet，即著名的TCP/IP协议族，因此Internet又被称作是TCP/IP网络。HTTP是比TCP更高层次的应用层协议，根据规则， 只有低层协议建立之后才能，才能进行更层协议的连接，因此，首先要建立TCP连接，一般TCP连接的端口号是80。\n\nWeb浏览器向Web服务器发送请求行\n一旦建立了TCP连接，Web浏览器就会向Web服务器发送请求命令。例如：GET /sample/hello.jsp HTTP/1.1。\n\nWeb浏览器发送请求头\n浏览器发送其请求命令之后，还要以头信息的形式向Web服务器发送一些别的信息，之后浏览器发送了一空白行来通知服务器，它已经结束了该头信息的发送。\n\nWeb服务器应答\n客户机向服务器发出请求后，服务器会客户机回送应答， HTTP/1.1 200 OK ，应答的第一部分是协议的版本号和应答状态码。\n\nWeb服务器发送应答头\n正如客户端会随同请求发送关于自身的信息一样，服务器也会随同应答向用户发送关于它自己的数据及被请求的文档。\n\nWeb服务器向浏览器发送数据\nWeb服务器向浏览器发送头信息后，它会发送一个空白行来表示头信息的发送到此为结束，接着，它就以Content-Type应答头信息所描述的格式发送用户所请求的实际数据。\n\nWeb服务器关闭TCP连接\n一般情况下，一旦Web服务器向浏览器发送了请求数据，它就要关闭TCP连接，然后如果浏览器或者服务器在其头信息加入了这行代码：\n\nConnection:keep-alive\nTCP连接在发送后将仍然保持打开状态，于是，浏览器可以继续通过相同的连接发送请求。保持连接节省了为每个请求建立新连接所需的时间，还节约了网络带宽。\n\n建立TCP连接->发送请求行->发送请求头->（到达服务器）发送状态行->发送响应头->发送响应数据->断TCP连接\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br")])]),e("h2",{attrs:{id:"web安全-加上原理"}},[s._v("Web安全(加上原理)")]),s._v(" "),e("p",[s._v("你所了解到的Web攻击技术\n（1）XSS（Cross-Site Scripting，跨站脚本攻击）：指通过存在安全漏洞的Web网站注册用户的浏览器内运行非法的HTML标签或者JavaScript进行的一种攻击。\n（2）SQL注入攻击\n（3）CSRF（Cross-Site Request Forgeries，跨站点请求伪造）：指攻击者通过设置好的陷阱，强制对已完成的认证用户进行非预期的个人信息或设定信息等某些状态更新。")]),s._v(" "),e("h2",{attrs:{id:"跨域-2"}},[s._v("跨域")]),s._v(" "),e("ul",[e("li",[s._v("原因\n浏览器的同源策略导致了跨域")]),s._v(" "),e("li",[s._v("作用\n用于隔离潜在恶意文件的重要安全机制")]),s._v(" "),e("li",[s._v("解决")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("解决方案")]),s._v(" "),e("p",[s._v("jsonp ，允许 script 加载第三方资源")]),s._v(" "),e("p",[s._v("反向代理（nginx 服务内部配置 Access-Control-Allow-Origin *）")]),s._v(" "),e("p",[s._v("cors 前后端协作设置请求头部，Access-Control-Allow-Origin 等头部信息")]),s._v(" "),e("p",[s._v("iframe 嵌套通讯，postmessage")])]),s._v(" "),e("h2",{attrs:{id:"dns解析过程"}},[s._v("DNS解析过程")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://cloud.tencent.com/developer/news/324975",target:"_blank",rel:"noopener noreferrer"}},[s._v("DNS解析过程"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"内存泄漏"}},[s._v("内存泄漏")]),s._v(" "),e("p",[e("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2017/04/memory-leak.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("内存泄漏"),e("OutboundLink")],1)]),s._v(" "),e("h3",{attrs:{id:"axios下载文件流处理"}},[s._v("Axios下载文件流处理")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("axios({\n  url: ``,\n  method: \"post\",\n  responseType: 'blob',\n  data\n}).then(res => {\n  if(res.status !== 200) {\n    return this.$message.error(res.statusText)\n  } else {\n    const elink = document.createElement('a'); // 创建一个a标签用于下载\n    elink.download = name; // 规定被下载的超链接目标名（文件名）\n    elink.style.display = 'none';\n    document.body.appendChild(elink);\n    elink.click();\n    document.body.removeChild(elink);\n  }\n}).catch(err => {\n  console.log(err)\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])])])}),[],!1,null,null,null);n.default=a.exports}}]);