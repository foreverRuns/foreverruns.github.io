(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{733:function(s,a,t){"use strict";t.r(a);var n=t(42),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("新修改的内容，仅仅是改动一些较少与上次相关的内容，本次修改可以合并到上次commit，减少提交的日志")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--amend")]),s._v(" --no-edit "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --no-edit 不会进入编辑器，直接合并到上次commit")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如果需要合并并修改上次的commit")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--amend")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 会打开指定的编辑器进行编辑")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("打开编辑器如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("issue6\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Please enter the commit message for your changes. Lines starting")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# with '#' will be ignored, and an empty message aborts the commit.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Author:    Runs <89xxxx240@qq.com>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Date:      Sat May 8 10:20:41 2021 +0800")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# On branch master")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Changes to be committed:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#       modified:   file1.txt")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("如果编辑器是 "),a("code",[s._v("vi")]),s._v(" 或者 "),a("code",[s._v("vim")]),s._v("，按 "),a("code",[s._v("i")]),s._v(" 进入编辑状态，"),a("br"),s._v("\n直接修改commit信息，如上面的 "),a("code",[s._v("issue6")]),s._v(" 改为 "),a("code",[s._v("issue666")]),s._v("，"),a("br"),s._v("\n按 "),a("code",[s._v("ESC")]),s._v(" 推出编辑状态，按 "),a("code",[s._v(":")]),s._v(" 进入命令行状态，输入 "),a("code",[s._v("wq")]),s._v(" 保存并退出。")]),s._v(" "),a("p",[s._v("合并或者修改最后一次commit之后，如果之前已经提交到远程仓库，"),a("br"),s._v("\n重新提交到远程仓库需要加 -f (--force的缩写) 强制覆盖远程仓库.")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" main\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("注意：-f 有风险，master/main 主分支上请谨慎使用")])])])}),[],!1,null,null,null);a.default=e.exports}}]);