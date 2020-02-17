---
title: Wordからテキストを抽出する
slug: ps_006
date: 2020-02-17
tags: 
    - PowerShell
    - 全文検索（エンタープライズサーチ）
author: 電氣羊 @ Goldenbridge
location: Osaka
---

## 全文検索の夢

日々テキストファイルを量産する翻訳会社にとって、使いやすい全文検索システムは夢の一つです。

弊社でも探三郎やFESSをはじめ、色々なソフトを導入したのですが、中国語に対応していなかったり、翻訳中のものを拾ってきたりと、そのままではなかなか「使いやすい」とはいきませんでした。
これはソフトの問題というよりは、フォルダ構成の問題というか、普段の業務フローそのままでは使い勝手が向上しないと判断し、まずは簡単にドキュメントづくりをしようと思い立ちました。

## Word → TXT変換+αをしたい

単にWordをtxtファイルに一括置換をするのであれば、[ここ](../column/2020/01/12/unoconv-docx2txt/)でも紹介したUnoconvを使うことで解決できます。

ただ、これは非常に単純な変換であるので、さらなる処理をしようとすると、若干面倒が残ります。（例えば、段落ごとに対訳を作るだとか、表中の数字を読み飛ばしたいだとか……）

また、ExcelやPowerPointのようなWord以外のOfficeフォーマットに対応していないのもマイナスポイント。

というわけで、実装方法を考えてみました。

## JavaScriptを使っちゃう

以前、[ExcelをJavaScriptで読み込むスクリプト](../pg/2020/01/18/read-excel-js/)を紹介しました。これを応用すれば、WordもPowerPointもテキスト部分だけを抜き出すことができそうです。

ところが、なんとまだ”doc”や”ｘｌｓ”といった古いフォーマットで原稿を送ってくるお客様も、まだ相当数いらっしゃるのです。

また、社内でNode.jsを使えるスタッフがほとんどいないことから、これも微妙。

となれば、選択肢は一つだけですね。

## PowerShellでCOMオブジェクト操作

そうです。PowerShellです。WindowsもOfficeもMicrosoft製なので、PowerShellとの相性はいいはず！

ということで行ってみましょう

```powershell
$files = Get-ChildItem .\src/ | Where-Object { $_.Name -match '.docx?$' }
$wd = New-Object -ComObject "Word.Application"

$tableEnd = -join [char]7
foreach ($file in $files) {
    $resultFile = "./output/" + $file.baseName + ".txt"
    $doc = $wd.Documents.open($file.FullName)
    $name = $file.Name
    
    $pNum = $pghs.count
    $pictNum = 0
    
    New-Item $resultFile
    
    $textInRng = $doc.Range().text.replace($tableEnd, "")
    
    $shps = $doc.Shapes
    $sNum = $shps.count
    $textInS = @()
    foreach ($shp in $shps) {
        if ($shp.Type -eq 13) {
           $pictNum++
           continue
        }
        if ($shp.TextFrame.HasText -eq -1) {
            $textInS += $shp.TextFrame.textRange.text
        }
        if ($shp.GroupItems.count -gt 0) {
            $gItems = $shp.GroupItems
            foreach ($gItem in $gItems) {
                if ($gItem.Type -eq 13) {
                   $pictNum++
                   continue
                }
                if ($gItem.TextFrame.HasText -eq "-1") {
                    $textInS += $gItem.TextFrame.textRange.text
                }
            }
        }
    }
    
    $stexts = $textInS -join "`n"
    Write-Output "---" | Add-content $resultFile -Encoding UTF8 
    Write-Output "FILE NAME: ${name}" | Add-content $resultFile -Encoding UTF8 
    Write-Output "PARAGRAPHS: ${pNum}" | Add-content $resultFile -Encoding UTF8 
    Write-Output "SHAPES: ${sNum}" | Add-content $resultFile -Encoding UTF8 
    Write-Output "GRAPHICS: ${pictNum}" | Add-content $resultFile -Encoding UTF8
    Write-Output "---" | Add-content $resultFile -Encoding UTF8
    Write-Output $textInRng | Add-content $resultFile -Encoding UTF8
    Write-Output $stexts | Add-content $resultFile -Encoding UTF8
    $doc.Close()
}

$wd.Quit()
$wd = $null

[System.GC]::Collect()
```

PowerShellはなんと、***New-Item -ComObject*** とするだけでCOMオブジェクトも扱うことができるようです。

Wordオブジェクトを作成し、Documentsオブジェクトとして開く。直下にあるRangeオブジェクトにテキストが入っていました。以下、時間のかかったところ。

1. COMオブジェクト上では、表組みの中のテキストもRangeオブジェクト内に入っているようでしたので、表組みと地の文で処理を分けなくても良さそうです。ただ、Wordの表組みに特有の”・”のような記号の処理に苦戦しました。一文字ずつ文字コードを取得したところ、 ***[char]7*** であることが判明したので、これを一括で削除しています。
2. テキストボックスはRangeオブジェクトにはないようでしたので、別途Shapesオブジェクトを取得してForeachを回しています。画像が入っているかどうかも調べたかったのですが、Shapeが画像かどうかをどうやって調べるのか逡巡しました。最終的には、Shapeオブジェクトのタイプが列挙体で”13”であれば画像のようです。
3. グループ化されたテキストボックスはShapesオブジェクトの直下にはないようで、さらにGroupItemsオブジェクトの中に入っていました。これもForeachで一つずつ取得しています。
4. 最後にガベージコレクションを実行したほうが良いといろいろなサイトで書かれていたので、 ***[System.GC]::Collect()*** をおまじない。

### COMオブジェクトの長所と短所

この方法を使えば、ExcelやPowerPointもCOMオブジェクト経由で、それほど苦労せずに全文を取得できそうです。

反対に短所としては、OfficeがインストールされていないPCでは使えないこと。

まぁ社内のPCには基本的にOfficeが入っているので、これでOKでしょう。

## これから
- ExcelとPowerPoint用に改造
- Tagや最終更新時間など、ドキュメントに含める項目の精査
- JSON化

などなど

<link-to></link-to>