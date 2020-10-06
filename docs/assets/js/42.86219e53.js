(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{323:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"全文検索の夢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全文検索の夢"}},[t._v("#")]),t._v(" 全文検索の夢")]),t._v(" "),a("p",[t._v("日々テキストファイルを量産する翻訳会社にとって、使いやすい全文検索システムは夢の一つです。")]),t._v(" "),a("p",[t._v("弊社でも探三郎やFESSをはじめ、色々なソフトを導入したのですが、中国語に対応していなかったり、翻訳中のものを拾ってきたりと、そのままではなかなか「使いやすい」とはいきませんでした。\nこれはソフトの問題というよりは、フォルダ構成の問題というか、普段の業務フローそのままでは使い勝手が向上しないと判断し、まずは簡単にドキュメントづくりをしようと思い立ちました。")]),t._v(" "),a("h2",{attrs:{id:"word-→-txt変換-αをしたい"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#word-→-txt変換-αをしたい"}},[t._v("#")]),t._v(" Word → TXT変換+αをしたい")]),t._v(" "),a("p",[t._v("単にWordをtxtファイルに一括置換をするのであれば、"),a("router-link",{attrs:{to:"/column/2020/01/12/unoconv-docx2txt/"}},[t._v("ここ")]),t._v("でも紹介したUnoconvを使うことで解決できます。")],1),t._v(" "),a("p",[t._v("ただ、これは非常に単純な変換であるので、さらなる処理をしようとすると、若干面倒が残ります。（例えば、段落ごとに対訳を作るだとか、表中の数字を読み飛ばしたいだとか……）")]),t._v(" "),a("p",[t._v("また、ExcelやPowerPointのようなWord以外のOfficeフォーマットに対応していないのもマイナスポイント。")]),t._v(" "),a("p",[t._v("というわけで、実装方法を考えてみました。")]),t._v(" "),a("h2",{attrs:{id:"javascriptを使っちゃう"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascriptを使っちゃう"}},[t._v("#")]),t._v(" JavaScriptを使っちゃう")]),t._v(" "),a("p",[t._v("以前、"),a("router-link",{attrs:{to:"/pg/2020/01/18/read-excel-js/"}},[t._v("ExcelをJavaScriptで読み込むスクリプト")]),t._v("を紹介しました。これを応用すれば、WordもPowerPointもテキスト部分だけを抜き出すことができそうです。")],1),t._v(" "),a("p",[t._v("ところが、なんとまだ”doc”や”xls”といった古いフォーマットで原稿を送ってくるお客様も、まだ相当数いらっしゃるのです。")]),t._v(" "),a("p",[t._v("また、社内でNode.jsを使えるスタッフがほとんどいないことから、これも微妙。")]),t._v(" "),a("p",[t._v("となれば、選択肢は一つだけですね。")]),t._v(" "),a("h2",{attrs:{id:"powershellでcomオブジェクト操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#powershellでcomオブジェクト操作"}},[t._v("#")]),t._v(" PowerShellでCOMオブジェクト操作")]),t._v(" "),a("p",[t._v("そうです。PowerShellです。WindowsもOfficeもMicrosoft製なので、PowerShellとの相性はいいはず！")]),t._v(" "),a("p",[t._v("ということで行ってみましょう")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$files")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Get-ChildItem")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\\src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Where-Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-match")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.docx?$'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$wd")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New-Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ComObject "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Word.Application"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tableEnd")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-join")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[char]")]),t._v("7\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file")]),t._v(" in "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$files")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resultFile")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./output/"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("baseName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".txt"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$doc")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$wd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Documents"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("open"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FullName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$name")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Name\n    \n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pNum")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pghs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pictNum")]),t._v(" = 0\n    \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("New-Item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resultFile")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$textInRng")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$doc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Range"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("replace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tableEnd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$shps")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$doc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Shapes\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sNum")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$shps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$textInS")]),t._v(" = @"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$shp")]),t._v(" in "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$shps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$shp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-eq")]),t._v(" 13"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pictNum")]),t._v("+"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$shp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextFrame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HasText "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-eq")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$textInS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$shp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextFrame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textRange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$shp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GroupItems"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-gt")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$gItems")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$shp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GroupItems\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$gItem")]),t._v(" in "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$gItems")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$gItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-eq")]),t._v(" 13"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pictNum")]),t._v("+"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n                   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$gItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextFrame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HasText "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-eq")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$textInS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$gItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TextFrame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textRange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$stexts")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$textInS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-join")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"`n"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"---"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add-content")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resultFile")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding UTF8 \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FILE NAME: ${name}"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add-content")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resultFile")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding UTF8 \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PARAGRAPHS: ${pNum}"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add-content")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resultFile")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding UTF8 \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SHAPES: ${sNum}"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add-content")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resultFile")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding UTF8 \n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GRAPHICS: ${pictNum}"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add-content")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resultFile")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding UTF8\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"---"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add-content")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resultFile")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding UTF8\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$textInRng")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add-content")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resultFile")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding UTF8\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Write-Output")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$stexts")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Add-content")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$resultFile")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding UTF8\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$doc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$wd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Quit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$wd")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$null")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("[System.GC]")]),t._v("::Collect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("PowerShellはなんと、"),a("em",[a("strong",[t._v("New-Object -ComObject")])]),t._v(" とするだけでCOMオブジェクトも扱うことができるようです。")]),t._v(" "),a("p",[t._v("Wordオブジェクトを作成し、Documentsオブジェクトとして開く。直下にあるRangeオブジェクトにテキストが入っていました。以下、時間のかかったところ。")]),t._v(" "),a("ol",[a("li",[t._v("COMオブジェクト上では、表組みの中のテキストもRangeオブジェクト内に入っているようでしたので、表組みと地の文で処理を分けなくても良さそうです。ただ、Wordの表組みに特有の”・”のような記号の処理に苦戦しました。一文字ずつ文字コードを取得したところ、 "),a("em",[a("strong",[t._v("[char]7")])]),t._v(" であることが判明したので、これを一括で削除しています。")]),t._v(" "),a("li",[t._v("テキストボックスはRangeオブジェクトにはないようでしたので、別途Shapesオブジェクトを取得してForeachを回しています。画像が入っているかどうかも調べたかったのですが、Shapeが画像かどうかをどうやって調べるのか逡巡しました。最終的には、Shapeオブジェクトのタイプが列挙体で”13”であれば画像のようです。")]),t._v(" "),a("li",[t._v("グループ化されたテキストボックスはShapesオブジェクトの直下にはないようで、さらにGroupItemsオブジェクトの中に入っていました。これもForeachで一つずつ取得しています。")]),t._v(" "),a("li",[t._v("最後にガベージコレクションを実行したほうが良いといろいろなサイトで書かれていたので、 "),a("em",[a("strong",[t._v("[System.GC]::Collect()")])]),t._v(" をおまじない。")])]),t._v(" "),a("h3",{attrs:{id:"comオブジェクトの長所と短所"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#comオブジェクトの長所と短所"}},[t._v("#")]),t._v(" COMオブジェクトの長所と短所")]),t._v(" "),a("p",[t._v("この方法を使えば、ExcelやPowerPointもCOMオブジェクト経由で、それほど苦労せずに全文を取得できそうです。")]),t._v(" "),a("p",[t._v("反対に短所としては、OfficeがインストールされていないPCでは使えないこと。")]),t._v(" "),a("p",[t._v("まぁ社内のPCには基本的にOfficeが入っているので、これでOKでしょう。")]),t._v(" "),a("h2",{attrs:{id:"これから"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#これから"}},[t._v("#")]),t._v(" これから")]),t._v(" "),a("ul",[a("li",[t._v("ExcelとPowerPoint用に改造")]),t._v(" "),a("li",[t._v("Tagや最終更新時間など、ドキュメントに含める項目の精査")]),t._v(" "),a("li",[t._v("JSON化")])]),t._v(" "),a("p",[t._v("などなど")]),t._v(" "),a("h4",{attrs:{id:"pr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pr"}},[t._v("#")]),t._v(" PR")]),t._v(" "),a("ad-set",{attrs:{ad:"ps"}}),t._v(" "),a("link-to")],1)}),[],!1,null,null,null);s.default=e.exports}}]);