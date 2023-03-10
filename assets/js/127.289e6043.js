(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{808:function(s,t,a){"use strict";a.r(t);var e=a(42),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"file-对象-filelist-对象-filereader-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-对象-filelist-对象-filereader-对象"}},[s._v("#")]),s._v(" File 对象，FileList 对象，FileReader 对象")]),s._v(" "),t("h2",{attrs:{id:"file-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-对象"}},[s._v("#")]),s._v(" File 对象")]),s._v(" "),t("p",[s._v("File 对象代表一个文件，用来读写文件信息。它继承了 Blob 对象，或者说是一种特殊的 Blob 对象，所有可以使用 Blob 对象的场合都可以使用它。")]),s._v(" "),t("p",[s._v("最常见的使用场合是表单的文件上传控件（"),t("code",[s._v('<input type="file">')]),s._v("），用户选中文件以后，浏览器就会生成一个数组，里面是每一个用户选中的文件，它们都是 File 实例对象。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// HTML 代码如下")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// <input id="fileItem" type="file">')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" file "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getElementById")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fileItem'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nfile "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("File")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("上面代码中，"),t("code",[s._v("file")]),s._v("是用户选中的第一个文件，它是 File 的实例。")]),s._v(" "),t("h3",{attrs:{id:"构造函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构造函数"}},[s._v("#")]),s._v(" 构造函数")]),s._v(" "),t("p",[s._v("浏览器原生提供一个"),t("code",[s._v("File()")]),s._v("构造函数，用来生成 File 实例对象。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("File")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("array"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("File()")]),s._v("构造函数接受三个参数。")]),s._v(" "),t("ul",[t("li",[s._v("array：一个数组，成员可以是二进制对象或字符串，表示文件的内容。")]),s._v(" "),t("li",[s._v("name：字符串，表示文件名或文件路径。")]),s._v(" "),t("li",[s._v("options：配置对象，设置实例的属性。该参数可选。")])]),s._v(" "),t("p",[s._v("第三个参数配置对象，可以设置两个属性。")]),s._v(" "),t("ul",[t("li",[s._v("type：字符串，表示实例对象的 MIME 类型，默认值为空字符串。")]),s._v(" "),t("li",[s._v("lastModified：时间戳，表示上次修改的时间，默认为"),t("code",[s._v("Date.now()")]),s._v("。")])]),s._v(" "),t("p",[s._v("下面是一个例子。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" file "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("File")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo.txt'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'text/plain'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"实例属性和实例方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实例属性和实例方法"}},[s._v("#")]),s._v(" 实例属性和实例方法")]),s._v(" "),t("p",[s._v("File 对象有以下实例属性。")]),s._v(" "),t("ul",[t("li",[s._v("File.lastModified：最后修改时间")]),s._v(" "),t("li",[s._v("File.name：文件名或文件路径")]),s._v(" "),t("li",[s._v("File.size：文件大小（单位字节）")]),s._v(" "),t("li",[s._v("File.type：文件的 MIME 类型")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" myFile "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("File")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'file.bin'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("lastModified")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Date")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2018")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nmyFile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lastModified "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1517414400000")]),s._v("\nmyFile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "file.bin"')]),s._v("\nmyFile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("size "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 0")]),s._v("\nmyFile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("type "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// ""')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("上面代码中，由于"),t("code",[s._v("myFile")]),s._v("的内容为空，也没有设置 MIME 类型，所以"),t("code",[s._v("size")]),s._v("属性等于0，"),t("code",[s._v("type")]),s._v("属性等于空字符串。")]),s._v(" "),t("p",[s._v("File 对象没有自己的实例方法，由于继承了 Blob 对象，因此可以使用 Blob 的实例方法"),t("code",[s._v("slice()")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"filelist-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#filelist-对象"}},[s._v("#")]),s._v(" FileList 对象")]),s._v(" "),t("p",[t("code",[s._v("FileList")]),s._v("对象是一个类似数组的对象，代表一组选中的文件，每个成员都是一个 File 实例。它主要出现在两个场合。")]),s._v(" "),t("ul",[t("li",[s._v("文件控件节点（"),t("code",[s._v('<input type="file">')]),s._v("）的"),t("code",[s._v("files")]),s._v("属性，返回一个 FileList 实例。")]),s._v(" "),t("li",[s._v("拖拉一组文件时，目标区的"),t("code",[s._v("DataTransfer.files")]),s._v("属性，返回一个 FileList 实例。")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// HTML 代码如下")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// <input id="fileItem" type="file">')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" files "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getElementById")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fileItem'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nfiles "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("instanceof")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FileList")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("上面代码中，文件控件的"),t("code",[s._v("files")]),s._v("属性是一个 FileList 实例。")]),s._v(" "),t("p",[s._v("FileList 的实例属性主要是"),t("code",[s._v("length")]),s._v("，表示包含多少个文件。")]),s._v(" "),t("p",[s._v("FileList 的实例方法主要是"),t("code",[s._v("item()")]),s._v("，用来返回指定位置的实例。它接受一个整数作为参数，表示位置的序号（从零开始）。但是，由于 FileList 的实例是一个类似数组的对象，可以直接用方括号运算符，即"),t("code",[s._v("myFileList[0]")]),s._v("等同于"),t("code",[s._v("myFileList.item(0)")]),s._v("，所以一般用不到"),t("code",[s._v("item()")]),s._v("方法。")]),s._v(" "),t("h2",{attrs:{id:"filereader-对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#filereader-对象"}},[s._v("#")]),s._v(" FileReader 对象")]),s._v(" "),t("p",[s._v("FileReader 对象用于读取 File 对象或 Blob 对象所包含的文件内容。")]),s._v(" "),t("p",[s._v("浏览器原生提供一个"),t("code",[s._v("FileReader")]),s._v("构造函数，用来生成 FileReader 实例。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" reader "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FileReader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("FileReader 有以下的实例属性。")]),s._v(" "),t("ul",[t("li",[s._v("FileReader.error：读取文件时产生的错误对象")]),s._v(" "),t("li",[s._v("FileReader.readyState：整数，表示读取文件时的当前状态。一共有三种可能的状态，"),t("code",[s._v("0")]),s._v("表示尚未加载任何数据，"),t("code",[s._v("1")]),s._v("表示数据正在加载，"),t("code",[s._v("2")]),s._v("表示加载完成。")]),s._v(" "),t("li",[s._v("FileReader.result：读取完成后的文件内容，有可能是字符串，也可能是一个 ArrayBuffer 实例。")]),s._v(" "),t("li",[s._v("FileReader.onabort："),t("code",[s._v("abort")]),s._v("事件（用户终止读取操作）的监听函数。")]),s._v(" "),t("li",[s._v("FileReader.onerror："),t("code",[s._v("error")]),s._v("事件（读取错误）的监听函数。")]),s._v(" "),t("li",[s._v("FileReader.onload："),t("code",[s._v("load")]),s._v("事件（读取操作完成）的监听函数，通常在这个函数里面使用"),t("code",[s._v("result")]),s._v("属性，拿到文件内容。")]),s._v(" "),t("li",[s._v("FileReader.onloadstart："),t("code",[s._v("loadstart")]),s._v("事件（读取操作开始）的监听函数。")]),s._v(" "),t("li",[s._v("FileReader.onloadend："),t("code",[s._v("loadend")]),s._v("事件（读取操作结束）的监听函数。")]),s._v(" "),t("li",[s._v("FileReader.onprogress："),t("code",[s._v("progress")]),s._v("事件（读取操作进行中）的监听函数。")])]),s._v(" "),t("p",[s._v("下面是监听"),t("code",[s._v("load")]),s._v("事件的一个例子。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// HTML 代码如下")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// <input type="file" onchange="onChange(event)">')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("onChange")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("event")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" file "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("target"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" reader "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FileReader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  reader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onload")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("event")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("event"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("target"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  reader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("readAsText")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("上面代码中，每当文件控件发生变化，就尝试读取第一个文件。如果读取成功（"),t("code",[s._v("load")]),s._v("事件发生），就打印出文件内容。")]),s._v(" "),t("p",[s._v("FileReader 有以下实例方法。")]),s._v(" "),t("ul",[t("li",[s._v("FileReader.abort()：终止读取操作，"),t("code",[s._v("readyState")]),s._v("属性将变成"),t("code",[s._v("2")]),s._v("。")]),s._v(" "),t("li",[s._v("FileReader.readAsArrayBuffer()：以 ArrayBuffer 的格式读取文件，读取完成后"),t("code",[s._v("result")]),s._v("属性将返回一个 ArrayBuffer 实例。")]),s._v(" "),t("li",[s._v("FileReader.readAsBinaryString()：读取完成后，"),t("code",[s._v("result")]),s._v("属性将返回原始的二进制字符串。")]),s._v(" "),t("li",[s._v("FileReader.readAsDataURL()：读取完成后，"),t("code",[s._v("result")]),s._v("属性将返回一个 Data URL 格式（Base64 编码）的字符串，代表文件内容。对于图片文件，这个字符串可以用于"),t("code",[s._v("<img>")]),s._v("元素的"),t("code",[s._v("src")]),s._v("属性。注意，这个字符串不能直接进行 Base64 解码，必须把前缀"),t("code",[s._v("data:*/*;base64,")]),s._v("从字符串里删除以后，再进行解码。")]),s._v(" "),t("li",[s._v("FileReader.readAsText()：读取完成后，"),t("code",[s._v("result")]),s._v("属性将返回文件内容的文本字符串。该方法的第一个参数是代表文件的 Blob 实例，第二个参数是可选的，表示文本编码，默认为 UTF-8。")])]),s._v(" "),t("p",[s._v("下面是一个例子。")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/* HTML 代码如下\n  <input type="file" onchange="previewFile()">\n  <img src="" height="200">\n*/')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("previewFile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" preview "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("querySelector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'img'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" file    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("querySelector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'input[type=file]'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("files"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" reader  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("FileReader")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  reader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'load'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    preview"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("src "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" reader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    reader"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("readAsDataURL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[s._v("上面代码中，用户选中图片文件以后，脚本会自动读取文件内容，然后作为一个 Data URL 赋值给"),t("code",[s._v("<img>")]),s._v("元素的"),t("code",[s._v("src")]),s._v("属性，从而把图片展示出来。")])])}),[],!1,null,null,null);t.default=n.exports}}]);