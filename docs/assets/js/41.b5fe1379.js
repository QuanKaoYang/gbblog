(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{320:function(t,a,s){"use strict";s.r(a);var n=s(5),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"全文検索の夢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全文検索の夢"}},[t._v("#")]),t._v(" 全文検索の夢")]),t._v(" "),s("p",[t._v("日々テキストファイルを量産する翻訳会社にとって、使いやすい全文検索システムは夢の一つです。")]),t._v(" "),s("p",[t._v("弊社でも探三郎やFESSをはじめ、色々なソフトを導入したのですが、中国語に対応していなかったり、翻訳中のものを拾ってきたりと、そのままではなかなか「使いやすい」とはいきませんでした。\nこれはソフトの問題というよりは、フォルダ構成の問題というか、普段の業務フローそのままでは使い勝手が向上しないと判断し、まずは簡単にドキュメントづくりをしようと思い立ちました。")]),t._v(" "),s("h2",{attrs:{id:"word-→-txt変換-αをしたい"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#word-→-txt変換-αをしたい"}},[t._v("#")]),t._v(" Word → TXT変換+αをしたい")]),t._v(" "),s("p",[t._v("単にWordをtxtファイルに一括置換をするのであれば、"),s("router-link",{attrs:{to:"/column/2020/01/12/unoconv-docx2txt/"}},[t._v("ここ")]),t._v("でも紹介したUnoconvを使うことで解決できます。")],1),t._v(" "),s("p",[t._v("ただ、これは非常に単純な変換であるので、さらなる処理をしようとすると、若干面倒が残ります。（例えば、段落ごとに対訳を作るだとか、表中の数字を読み飛ばしたいだとか……）")]),t._v(" "),s("p",[t._v("また、ExcelやPowerPointのようなWord以外のOfficeフォーマットに対応していないのもマイナスポイント。")]),t._v(" "),s("p",[t._v("というわけで、実装方法を考えてみました。")]),t._v(" "),s("h2",{attrs:{id:"javascriptを使っちゃう"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascriptを使っちゃう"}},[t._v("#")]),t._v(" JavaScriptを使っちゃう")]),t._v(" "),s("p",[t._v("以前、"),s("router-link",{attrs:{to:"/pg/2020/01/18/read-excel-js/"}},[t._v("ExcelをJavaScriptで読み込むスクリプト")]),t._v("を紹介しました。これを応用すれば、WordもPowerPointもテキスト部分だけを抜き出すことができそうです。")],1),t._v(" "),s("p",[t._v("ところが、なんとまだ”doc”や”xls”といった古いフォーマットで原稿を送ってくるお客様も、まだ相当数いらっしゃるのです。")]),t._v(" "),s("p",[t._v("また、社内でNode.jsを使えるスタッフがほとんどいないことから、これも微妙。")]),t._v(" "),s("p",[t._v("となれば、選択肢は一つだけですね。")]),t._v(" "),s("h2",{attrs:{id:"powershellでcomオブジェクト操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#powershellでcomオブジェクト操作"}},[t._v("#")]),t._v(" PowerShellでCOMオブジェクト操作")]),t._v(" "),s("p",[t._v("そうです。PowerShellです。WindowsもOfficeもMicrosoft製なので、PowerShellとの相性はいいはず！")]),t._v(" "),s("p",[t._v("ということで行ってみましょう")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$files")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-ChildItem")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\\src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Where-Object")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-match")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.docx?$'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$wd")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("New-Object")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ComObject "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Word.Application"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tableEnd")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-join")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[char]")]),t._v("7\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file")]),t._v(" in "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$files")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resultFile")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./output/"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("baseName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".txt"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$doc")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$wd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Documents"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("open"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FullName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name\n    \n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pNum")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pghs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pictNum")]),t._v(" = 0\n    \n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("New-Item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resultFile")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$textInRng")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$doc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Range"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("replace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tableEnd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$shps")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$doc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Shapes\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sNum")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$shps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$textInS")]),t._v(" = @"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$shp")]),t._v(" in "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$shps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$shp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-eq")]),t._v(" 13"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pictNum")]),t._v("+"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n           "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$shp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextFrame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HasText "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-eq")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$textInS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$shp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextFrame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textRange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$shp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GroupItems"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-gt")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$gItems")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$shp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GroupItems\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$gItem")]),t._v(" in "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$gItems")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$gItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-eq")]),t._v(" 13"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                   "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pictNum")]),t._v("+"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n                   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$gItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextFrame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HasText "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-eq")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$textInS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$gItem")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextFrame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textRange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$stexts")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$textInS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-join")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"`n"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"---"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add-content")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resultFile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding UTF8 \n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FILE NAME: ${name}"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add-content")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resultFile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding UTF8 \n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PARAGRAPHS: ${pNum}"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add-content")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resultFile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding UTF8 \n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SHAPES: ${sNum}"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add-content")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resultFile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding UTF8 \n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GRAPHICS: ${pictNum}"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add-content")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resultFile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding UTF8\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"---"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add-content")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resultFile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding UTF8\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$textInRng")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add-content")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resultFile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding UTF8\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$stexts")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add-content")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resultFile")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding UTF8\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$doc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Close"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$wd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Quit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$wd")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$null")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[System.GC]")]),t._v("::Collect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("PowerShellはなんと、"),s("em",[s("strong",[t._v("New-Item -ComObject")])]),t._v(" とするだけでCOMオブジェクトも扱うことができるようです。")]),t._v(" "),s("p",[t._v("Wordオブジェクトを作成し、Documentsオブジェクトとして開く。直下にあるRangeオブジェクトにテキストが入っていました。以下、時間のかかったところ。")]),t._v(" "),s("ol",[s("li",[t._v("COMオブジェクト上では、表組みの中のテキストもRangeオブジェクト内に入っているようでしたので、表組みと地の文で処理を分けなくても良さそうです。ただ、Wordの表組みに特有の”・”のような記号の処理に苦戦しました。一文字ずつ文字コードを取得したところ、 "),s("em",[s("strong",[t._v("[char]7")])]),t._v(" であることが判明したので、これを一括で削除しています。")]),t._v(" "),s("li",[t._v("テキストボックスはRangeオブジェクトにはないようでしたので、別途Shapesオブジェクトを取得してForeachを回しています。画像が入っているかどうかも調べたかったのですが、Shapeが画像かどうかをどうやって調べるのか逡巡しました。最終的には、Shapeオブジェクトのタイプが列挙体で”13”であれば画像のようです。")]),t._v(" "),s("li",[t._v("グループ化されたテキストボックスはShapesオブジェクトの直下にはないようで、さらにGroupItemsオブジェクトの中に入っていました。これもForeachで一つずつ取得しています。")]),t._v(" "),s("li",[t._v("最後にガベージコレクションを実行したほうが良いといろいろなサイトで書かれていたので、 "),s("em",[s("strong",[t._v("[System.GC]::Collect()")])]),t._v(" をおまじない。")])]),t._v(" "),s("h3",{attrs:{id:"comオブジェクトの長所と短所"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comオブジェクトの長所と短所"}},[t._v("#")]),t._v(" COMオブジェクトの長所と短所")]),t._v(" "),s("p",[t._v("この方法を使えば、ExcelやPowerPointもCOMオブジェクト経由で、それほど苦労せずに全文を取得できそうです。")]),t._v(" "),s("p",[t._v("反対に短所としては、OfficeがインストールされていないPCでは使えないこと。")]),t._v(" "),s("p",[t._v("まぁ社内のPCには基本的にOfficeが入っているので、これでOKでしょう。")]),t._v(" "),s("h2",{attrs:{id:"これから"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#これから"}},[t._v("#")]),t._v(" これから")]),t._v(" "),s("ul",[s("li",[t._v("ExcelとPowerPoint用に改造")]),t._v(" "),s("li",[t._v("Tagや最終更新時間など、ドキュメントに含める項目の精査")]),t._v(" "),s("li",[t._v("JSON化")])]),t._v(" "),s("p",[t._v("などなど")]),t._v(" "),s("hr"),t._v("\nこのブログで紹介しているPowerShellの小技をまとめました！\n"),s("iframe",{staticStyle:{width:"120px",height:"240px"},attrs:{marginwidth:"0",marginheight:"0",scrolling:"no",frameborder:"0",src:"[https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B082VRMNXV&linkId=d9c2c28aa385330077060ee44bad340d&bc1=ffffff&lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr](https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B082VRMNXV&linkId=d9c2c28aa385330077060ee44bad340d&bc1=ffffff&lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr)"}}),t._v(" "),s("link-to")],1)}),[],!1,null,null,null);a.default=e.exports}}]);