(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{310:function(t,a,s){"use strict";s.r(a);var e=s(5),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("章立ての複雑な原稿をもらったとき。\n章ごとにフォルダを分けるのはまだいいとして、節ごとにフォルダが分けられているのは、なかなか大変ですよね。")]),t._v(" "),s("p",[t._v("一括処理をするためにも、全ファイルを一時的に1つのフォルダにまとめたくなります。\nそんなときはPowerShellで簡単に解決！")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("mkdir "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("temp\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-Childitem")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Recurse "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("File "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Copy-Item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Destination "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("temp\n")])])]),s("p",[t._v("注意するべきは、原稿と同じフォルダ（もしくは同じフォルダの中のフォルダ）にまとめ用の一時フォルダを作らないこと。\n-Recurseオプションをつけて再帰的にコピーしていくため、順番によってはコピーしたファイルもコピー対象となって、「上書きできない」、とエラーになってしまいます。\n（実はこれで少しハマった）")]),t._v(" "),s("p",[t._v("上記の例では、探索させる層よりも上のディレクトリ（../）にフォルダを作っています。\nまた、エイリアスを駆使した最短バージョンも載せておきます。")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("mkdir "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("temp\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("re "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("file "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("d "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("temp\n")])])]),s("p",[t._v("これなら一括置換マクロなども楽々実行できますね。")]),t._v(" "),s("h4",{attrs:{id:"pr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pr"}},[t._v("#")]),t._v(" PR")]),t._v(" "),s("p",[t._v("ここで紹介するPowerShellの小技をまとめました！")]),t._v(" "),s("iframe",{staticStyle:{width:"120px",height:"240px"},attrs:{marginwidth:"0",marginheight:"0",scrolling:"no",frameborder:"0",src:"[https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B082VRMNXV&linkId=d9c2c28aa385330077060ee44bad340d&bc1=ffffff&lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr](https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B082VRMNXV&linkId=d9c2c28aa385330077060ee44bad340d&bc1=ffffff&lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr)"}}),t._v(" "),s("link-to")],1)}),[],!1,null,null,null);a.default=n.exports}}]);