(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{434:function(_,v,t){"use strict";t.r(v);var s=t(10),p=Object(s.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[_._v("CATツールで一致率とかマッチ率とか、普段何気なく呼んでいるこの数字。")]),_._v(" "),t("p",[_._v("どうやって計算されているのか、気になりませんか？")]),_._v(" "),t("p",[_._v("弊社の開発しているCATOVISでは「レーベンシュタイン距離」というものを使っています。")]),_._v(" "),t("p",[_._v("（おそらく他のCATツールでも、ほとんど同じではないかと思いますが……）")]),_._v(" "),t("h2",{attrs:{id:"レーベンシュタイン距離ってなに"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#レーベンシュタイン距離ってなに"}},[_._v("#")]),_._v(" レーベンシュタイン距離ってなに？")]),_._v(" "),t("p",[_._v("レーベンシュタインさんが考案した、2つの文字列の違いを示す指標のことです。")]),_._v(" "),t("p",[t("a",{attrs:{href:"https://ja.wikipedia.org/wiki/%E3%83%AC%E3%83%BC%E3%83%99%E3%83%B3%E3%82%B7%E3%83%A5%E3%82%BF%E3%82%A4%E3%83%B3%E8%B7%9D%E9%9B%A2",target:"_blank",rel:"noopener noreferrer"}},[_._v("Wikipedia レーベンシュタイン距離"),t("OutboundLink")],1)]),_._v(" "),t("p",[_._v("例えば次の2つの文を見てください。")]),_._v(" "),t("ul",[t("li",[_._v("これが原文1です。")]),_._v(" "),t("li",[_._v("それは訳文ではない")])]),_._v(" "),t("p",[_._v("上の文（S"),t("sub",[_._v("1")]),_._v("）を下の文（S"),t("sub",[_._v("2")]),_._v("）に一致させるには、挿入／削除／置換を何回すればよいでしょうか。")]),_._v(" "),t("ol",[t("li",[_._v("「こ」を「そ」に置換")]),_._v(" "),t("li",[_._v("「原」を「訳」に置換")]),_._v(" "),t("li",[_._v("「が」を「は」に置換")]),_._v(" "),t("li",[_._v("「1」を削除")]),_._v(" "),t("li",[_._v("「す」を「は」に置換")]),_._v(" "),t("li",[_._v("「。」を「な」に置換")]),_._v(" "),t("li",[_._v("「い」を挿入")])]),_._v(" "),t("p",[_._v("の合計7回の操作が必要です。この編集コスト "),t("strong",[_._v("7")]),_._v(" がレーベンシュタイン距離となります。")]),_._v(" "),t("p",[_._v("この計算をプログラムするのですが、Wikipediaのアルゴリズムを見てもチンプンカンプンだったので、Excelで見える化してみました。")]),_._v(" "),t("h2",{attrs:{id:"excelにいれてみる"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#excelにいれてみる"}},[_._v("#")]),_._v(" Excelにいれてみる")]),_._v(" "),t("p",[_._v("まずはS"),t("sub",[_._v("1")]),_._v("とS"),t("sub",[_._v("2")]),_._v("を1文字ずつセルに入れていきます。まずは列単位でB3から見てみましょう。")]),_._v(" "),t("p",[_._v("S"),t("sub",[_._v("1")]),_._v("の「こ」を「そ」にするには 1回の置換が必要です。")]),_._v(" "),t("p",[_._v("S"),t("sub",[_._v("1")]),_._v("の「こ」を「それ」にするには 1回の置換と1回の挿入が必要です。")]),_._v(" "),t("p",[_._v("S"),t("sub",[_._v("1")]),_._v("の「こ」を「それは」にするには 1回の置換と2回の挿入が必要です")]),_._v(" "),t("p",[_._v("……")]),_._v(" "),t("p",[_._v("と見ていくと、「こ」をS"),t("sub",[_._v("2")]),_._v("に一致させるための操作回数が計算できました。")]),_._v(" "),t("img",{attrs:{src:_.$withBase("/pict/ld-1.png")}}),_._v(" "),t("p",[_._v("次に行単位です。といっても、さっきと同じこと。")]),_._v(" "),t("p",[_._v("S"),t("sub",[_._v("2")]),_._v("の「そ」を「こ」にするには 1回の置換が必要です。")]),_._v(" "),t("p",[_._v("S"),t("sub",[_._v("2")]),_._v("の「そ」を「これ」にするには 1回の置換と1回の挿入が必要です。")]),_._v(" "),t("p",[_._v("S"),t("sub",[_._v("2")]),_._v("の「そ」を「これが」にするには 1回の置換と2回の挿入が必要です")]),_._v(" "),t("p",[_._v("……")]),_._v(" "),t("p",[_._v("同様に1行目も埋めることができました。")]),_._v(" "),t("img",{attrs:{src:_.$withBase("/pict/ld-2.png")}}),_._v(" "),t("h2",{attrs:{id:"計算をはじめる"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#計算をはじめる"}},[_._v("#")]),_._v(" 計算をはじめる")]),_._v(" "),t("p",[_._v("次に2列目・2行目のD4を見てみます。")]),_._v(" "),t("p",[_._v("ここは「これ」を「それ」に変えるための操作回数を表しています。")]),_._v(" "),t("img",{attrs:{src:_.$withBase("/pict/ld-3.png")}}),_._v(" "),t("p",[_._v("「これ」と「それ」の2文字目は「れ」で一致しているため、新たな操作は発生しません。")]),_._v(" "),t("p",[_._v("そのため、このセルに入れるべき操作回数は、（C3、D3、C4）のうち、最小の数となります。")]),_._v(" "),t("p",[_._v("次に見るのはセルD5。")]),_._v(" "),t("p",[_._v("「これ」を「それは」に変えるには、ここまでの操作回数+1回の挿入が必要になります。")]),_._v(" "),t("p",[_._v("ですので、D5には（C4、D4、C5）のうちの最小数に1を足した数が入ります。")]),_._v(" "),t("p",[_._v("これをExcelの関数で表すと、次のようになります。")]),_._v(" "),t("p",[t("em",[t("strong",[_._v("=IF(D$1=$A4,MIN(C4,D4,C5),MIN(C4,D4,C5)+1)")])])]),_._v(" "),t("p",[_._v("あとはこれを縦横斜めに繰り返すだけ。上記の関数をK11まで貼り付けてしまいましょう。")]),_._v(" "),t("p",[_._v("これで無事に "),t("strong",[_._v("7")]),_._v(" という操作回数にたどり着くことができました。")]),_._v(" "),t("img",{attrs:{src:_.$withBase("/pict/ld-4.png")}}),_._v(" "),t("p",[_._v("しかしこのレーベンシュタイン距離（操作回数）は、このままでは使いにくい数字です。")]),_._v(" "),t("p",[_._v("今回のように9文字の文に対して7回操作するのと、100文字の文に7回操作するのは全く意味が異なります。")]),_._v(" "),t("p",[_._v("前者は全く異なる文、後者はかなり似ている文と言えますね。")]),_._v(" "),t("p",[_._v("そのため最後に、S"),t("sub",[_._v("1")]),_._v("とS"),t("sub",[_._v("2")]),_._v("のうち文字数の多い方（今回は同じですが）から操作回数を引き、文字数で割ることで標準化をします。")]),_._v(" "),t("p",[_._v("Excelでは")]),_._v(" "),t("p",[t("em",[t("strong",[_._v("=(MAX(COUNTA(B1:K1),COUNTA(A2:A11))-K11)/MAX(COUNTA(B1:K1),COUNTA(A2:A11))")])])]),_._v(" "),t("p",[_._v("ですね。")]),_._v(" "),t("img",{attrs:{src:_.$withBase("/pict/ld-done.png"),alt:"foo"}}),_._v(" "),t("p",[_._v("これで無事、一致率の計算過程がExcelで見られるようになりました。")]),_._v(" "),t("p",[_._v("……でも何百、何千と原文やメモリがあるときに、一つずつExcelで表をつくるのは非現実的です。")]),_._v(" "),t("p",[_._v("こんな面倒な計算ですが、Pythonには標準ライブラリに組み込まれています。")]),_._v(" "),t("p",[_._v("さすがですね！")]),_._v(" "),t("h4",{attrs:{id:"pr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pr"}},[_._v("#")]),_._v(" PR")]),_._v(" "),t("ad-text",{attrs:{ad:"excel"}}),_._v(" "),t("ad-link",{attrs:{ad:"excel"}}),_._v(" "),t("ad-link-box",{attrs:{ad:"audible"}}),_._v(" "),t("link-to")],1)}),[],!1,null,null,null);v.default=p.exports}}]);