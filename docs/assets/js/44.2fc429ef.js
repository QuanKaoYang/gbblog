(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{322:function(t,a,s){"use strict";s.r(a);var e=s(5),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("最近のWindowsは賢いので、1、2、3…10、11という名前のファイルが並んでいても、きちんと数字のとおり並べてくれます。ところがソフトによっては最初の文字だけを基準にソートするものもあり、1、11、12...2、3、4...のように並べられることもあります。")]),t._v(" "),s("p",[t._v("これを回避するためには、01、02、03…のようにいわゆる「ゼロ埋め」をするのが常套手段なのですが、桁数が増えるとなかなか面倒です。")]),t._v(" "),s("p",[t._v("そんなとき、PowerShellに素敵なメソッドがあるのに気づきました。")]),t._v(" "),s("h2",{attrs:{id:"padleftで左埋め"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#padleftで左埋め"}},[t._v("#")]),t._v(" PadLeftで左埋め")]),t._v(" "),s("p",[t._v("PowerShellのString型にはPadLeftというメソッドがあります。これを使えば一瞬です。")]),t._v(" "),s("p",[t._v("使い方も簡単で、$str.PadLeft( "),s("em",[t._v("桁数")]),t._v(", "),s("em",[t._v("”埋めたい文字”")]),t._v(" ) とするだけです。ではやってみましょう。")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),t._v("=0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-le")]),t._v(" 1000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),t._v("+"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \t"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ToString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PadLeft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 0000")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 0001")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1000")]),t._v("\n")])])]),s("p",[t._v("これをRename-Itemと組み合わせれば、通し番号のついたファイルが簡単に作れます。")]),t._v(" "),s("p",[t._v("引数を変えれば5桁でも6桁でもどんとこい。")]),t._v(" "),s("p",[s("s",[t._v("PowerShellは、あとは配列さえ使いやすいければなぁ……")])]),t._v(" "),s("hr"),t._v("\nこのブログで紹介しているPowerShellの小技をまとめました！\n"),s("iframe",{staticStyle:{width:"120px",height:"240px"},attrs:{marginwidth:"0",marginheight:"0",scrolling:"no",frameborder:"0",src:"[https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B082VRMNXV&linkId=d9c2c28aa385330077060ee44bad340d&bc1=ffffff&lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr](https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B082VRMNXV&linkId=d9c2c28aa385330077060ee44bad340d&bc1=ffffff&lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr)"}}),t._v(" "),s("link-to")],1)}),[],!1,null,null,null);a.default=n.exports}}]);