(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{339:function(t,a,s){"use strict";s.r(a);var n=s(33),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#权限"}},[t._v("#")]),t._v(" 权限")]),t._v(" "),s("h2",{attrs:{id:"页面权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面权限"}},[t._v("#")]),t._v(" 页面权限")]),t._v(" "),s("p",[t._v("near-admin是基于动态组件实现的标签页，因此，在权限控制上主要对异步组件的权限控制，near-admin在全局状态中添加了"),s("code",[t._v("rightPathList")]),t._v("用于维护拥有访问权限的组件路径，\n框架内部会将侧边栏菜单的组件地址进行去重后存入到"),s("code",[t._v("rightPathList")]),t._v("，如果用户需要自行控制权限地址的话可以将用户拥有权限的地址加入到"),s("code",[t._v("rightPathList")]),t._v("中。具体可以使用\nvuex中的action"),s("code",[t._v("changeRightPathList")]),t._v("进行rightPathList的修改。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("通过全局指令"),s("code",[t._v("$newpage")]),t._v("进行新增的标签页默认是拥有权限的。如果想要对这段逻辑进行控制的话，可以在@corets/plugin.ts进行需改。")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set apiNew to true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cpInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cpInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apiNew "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cpInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("params "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        apiNew"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("如果用户没有该组件的访问权限，框架自身会返回403界面。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("images/doc/noright.png")}}),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("403界面")]),t._v(" "),s("p",[t._v("如果用户访问的地址是不存在的页面，则会出现404页面。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/images/doc/nofound.png")}}),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("404界面")]),t._v(" "),s("p",[t._v("一般来说前端控制权限其实意义不大，所以near-admin基本上是基于后端返回的菜单内容进行权限的控制。")]),t._v(" "),s("h2",{attrs:{id:"指令权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令权限"}},[t._v("#")]),t._v(" 指令权限")]),t._v(" "),s("p",[t._v("near-admin提供了权限指令，方便开发者能够根据用户的角色对一些dom进行的权限操作。同时还支持逻辑非的功能，更加灵活的配置权限。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 用户组在admin（管理员）或者salesman（业务员）中的显示这个dom --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-permit")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("['admin', 'salesman']"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("管理员、业务员"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 用户组不在admin（管理员）和salesman（业务员）中的显示这个dom --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-permit")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("['!admin', '!salesman']"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("非管理员，非业务员"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 用户组不在admin（管理员）,在salesman（业务员）或tester（测试员）中的显示这个dom --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-permit")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("['!admin', 'salesman', 'tester']"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("非管理员，业务员或测试员"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("img",{attrs:{src:t.$withBase("/images/doc/right.gif")}}),t._v(" "),s("p",{attrs:{align:"center"}},[t._v("指令权限控制")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("此处我对v-permit的指令进行了修改，所以切换权限只是显示和隐藏dom，实际项目是直接移除了dom，所以没办法实现gif中的效果。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);