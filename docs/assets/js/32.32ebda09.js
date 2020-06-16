(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{311:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("章立ての複雑な原稿をもらったとき。\n章ごとにフォルダを分けるのはまだいいとして、節ごとにフォルダが分けられているのは、なかなか大変ですよね。")]),t._v(" "),a("p",[t._v("一括処理をするためにも、全ファイルを一時的に1つのフォルダにまとめたくなります。\nそんなときはPowerShellで簡単に解決！")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("mkdir "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("temp\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-Childitem")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Recurse "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("File "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Copy-Item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Destination "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("temp\n")])])]),a("p",[t._v("注意するべきは、原稿と同じフォルダ（もしくは同じフォルダの中のフォルダ）にまとめ用の一時フォルダを作らないこと。\n-Recurseオプションをつけて再帰的にコピーしていくため、順番によってはコピーしたファイルもコピー対象となって、「上書きできない」、とエラーになってしまいます。\n（実はこれで少しハマった）")]),t._v(" "),a("p",[t._v("上記の例では、探索させる層よりも上のディレクトリ（../）にフォルダを作っています。\nまた、エイリアスを駆使した最短バージョンも載せておきます。")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[t._v("mkdir "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("temp\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("re "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("file "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("temp\n")])])]),a("p",[t._v("これなら一括置換マクロなども楽々実行できますね。")]),t._v(" "),a("h4",{attrs:{id:"pr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pr"}},[t._v("#")]),t._v(" PR")]),t._v(" "),a("p",[t._v("ここで紹介するPowerShellの小技をまとめました！")]),t._v(" "),a("iframe",{staticStyle:{width:"120px",height:"240px"},attrs:{marginwidth:"0",marginheight:"0",scrolling:"no",frameborder:"0",src:"https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B082VRMNXV&linkId=ebdec427fc8abb893ab395a7477eb814&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr"}}),t._v(" "),a("link-to")],1)}),[],!1,null,null,null);s.default=n.exports}}]);