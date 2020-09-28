(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{441:function(t,a,s){"use strict";s.r(a);var e=s(10),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("翻訳が終わったファイルには言語名や作業者名、作業済のマークなどをつけて別名保存することが多いと思います。")]),t._v(" "),s("p",[t._v("しかしファイル数が10とか20とかあると、一つずつ手作業するのも面倒です。")]),t._v(" "),s("p",[t._v("さて、PowerShellに頑張ってもらいましょう。")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-ChildItem")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("File "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Rename-Item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Done_"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"パイプ記号について"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#パイプ記号について"}},[t._v("#")]),t._v(" パイプ記号について")]),t._v(" "),s("p",[t._v("パイプ記号 ”|” は、前の結果を次の処理に渡して連結するものです。")]),t._v(" "),s("p",[t._v("シェルを使う方にはおなじみですね。")]),t._v(" "),s("p",[t._v("ここでは "),s("em",[t._v("Get-ChildItem")]),t._v(" で得られたファイルの一覧を、次のコマンドで使えるようにしています。")]),t._v(" "),s("p",[t._v("次のパーセント "),s("em",[t._v("”%”")]),t._v(" は "),s("em",[t._v("ForEach-Object")]),t._v(" のエイリアスです。")]),t._v(" "),s("p",[t._v("パイプによって渡されたファイルの一覧に対し、一つずつ処理を行うことを意味しています。")]),t._v(" "),s("p",[t._v("そして、その具体的な処理が {} の中に書かれているものです。")]),t._v(" "),s("p",[t._v("また、一つずつ取り出されたオブジェクトは、変数 $_ を使って取得することができます。")]),t._v(" "),s("h2",{attrs:{id:"rename-itemについて"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rename-itemについて"}},[t._v("#")]),t._v(" Rename-Itemについて")]),t._v(" "),s("p",[t._v("さて、次に出てくるのが "),s("em",[t._v("”Rename-Item”")]),t._v("。")]),t._v(" "),s("p",[t._v("読んで字のごとし、項目名を変更するものです。")]),t._v(" "),s("p",[t._v("Linuxでは mv でリネームすることが多いと思いますし、実際PowerShellでもMove-Itemで同じことができるのですが、せっかく専用のコマンドレットがあるのでこちらを使いましょう。")]),t._v(" "),s("p",[t._v("使い方は")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Rename-Item")]),t._v(" <元のファイル名> <新しいファイル名>\n")])])]),s("p",[t._v("です。")]),t._v(" "),s("p",[t._v("ここでは "),s("em",[t._v("”$_”")]),t._v("、つまり一つずつ渡されたファイルに対し、”Done_”を付けたファイル名を使ってリネームしています。ファイル名の先頭に文字を足すのはこれでいいのですが、後ろにつける場合はどうでしょうか。")]),t._v(" "),s("p",[t._v("単純に、")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-ChildItem")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("File "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Rename-Item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_Done"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("とすると、どうなるでしょうか。\n……")]),t._v(" "),s("p",[t._v('なんと、拡張子の後ろに"_Done”が足されてしまいます。')]),t._v(" "),s("p",[t._v("それでは困りますよね。")]),t._v(" "),s("p",[t._v("なのでもう一工夫。")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-ChildItem")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("File "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Rename-Item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Replace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Extension"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_Done"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Extension"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("このように、Replaceメソッドを使って拡張子の前に追記するようにします。")]),t._v(" "),s("p",[t._v("PowerShellで取得される結果はオブジェクトになっているため、.Nameや.Extensionのようにプロパティを参照することで、ほしい部分だけを簡単に取得できます。")]),t._v(" "),s("p",[t._v("コマンドプロンプトよりずっと楽ですね。")]),t._v(" "),s("h4",{attrs:{id:"pr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pr"}},[t._v("#")]),t._v(" PR")]),t._v(" "),s("ad-text",{attrs:{ad:"ps"}}),t._v(" "),s("ad-link",{attrs:{ad:"ps"}}),t._v(" "),s("ad-link-box",{attrs:{ad:"audible"}}),t._v(" "),s("link-to")],1)}),[],!1,null,null,null);a.default=n.exports}}]);