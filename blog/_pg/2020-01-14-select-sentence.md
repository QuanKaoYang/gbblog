---
title: Wordで文ごとに選択
slug: vba_001
date: 2020-01-14
tags: 
    - Word
    - VBA
    - 効率化
author: 電氣羊 @ Goldenbridge
location: Osaka
---

Wordで翻訳をしていると、文単位で選択範囲を動かしたいときがあります。
そんな時はマクロの出番。
早速実装してみましょう。

```vb
Option Explicit
Sub next_sentence()
    Selection.Range.Next(wdSentence, 1).Select
End sub
```

文を選択しているときに、このマクロを実行すると、次の文が選択されます。

ただ、何も選択していないときには「今の場所から文終わり」ではなく、「次の文の初めから終わりまで」が選択されてしまいます。
というわけで、もう一工夫。

```vb
Option Explicit
Sub next_sentence()

If Selection.Range.Text = "" Then
    Selection.MoveEnd unit:=wdSentence
Else
    Selection.Range.Next(wdSentence, 1).Select
End If
End Sub
```

何も選択されていない場合（＝テキストが空の場合）は、Rangeオブジェクトの移動ではなく、Rangeオブジェクトの終了場所を拡張するように変更しています。
これで「次の文を選ぶ」という操作が実現できます。

## マクロをショートカット化するには……
まずはこのnext_sentenceが入ったファイルを保存します。
必ず **「マクロ有効文書」** で保存するようにしてください。
次に「ファイル」＞「オプション」＞「リボンのユーザー設定」と進みます。
少し分かりづらいですが、左下の「ショートカットキー：」の隣にある「ユーザー設定」ボタンを押します。
すると、ショートカットキーの設定画面に入れます。
左のボックスから「マクロ」を探し、右のボックスに表示される **next_sentence** を選択します。次に下にあるテキストボックスにカーソルを合わせたら、割り当てたいショートカットキーを押します。
これが他のショートカットキーと競合していなければ問題ありません。
「割り当て」をクリックする前に、Normal.dotではなくこのdocmファイルに保存するようにしましょう。

## Wordファイルのテンプレート化
次に、このファイルを「マクロ有効文書」から「マクロ有効テンプレート」に作り替え、毎回Wordの起動時に読み込まれるようにします。
まずは「ファイル」＞「名前を付けて保存」を選択し、「マクロ有効テンプレート」を選択します。
すると、dotmファイルが
　C:\Users\％USERNAME%\Documents\Office のカスタム テンプレート
に保存されます。

次にこれを
　C:\Users\％USERNAME%\AppData\Roaming\Microsoft\Word\STARTUP
に移動してやります。

最後に、Wordの開発タブを開いて、「文書テンプレート」を選択、先ほど保存したファイルを有効にすれば、Wordの起動時にマクロが読み込まれ、どのファイルでも使えるようになります。

ファイルの移動が面倒だ、という方は下記のPowerShellコマンドレットで処理してしまいましょう。

```powershell
Copy-Item "C:\Users\${env:USERNAME}\Documents\Office のカスタム テンプレート\*.dotm" "C:\Users\${env:USERNAME}AppData\Roaming\Microsoft\Word\STARTUP"
```

PowerShellで環境変数のユーザー名を利用する方法は、

```powershell
　$env:USERNAME
```

とします。

### Office 2019/365の場合
上記のフォルダはWord2016までのものです。
2019以降は次の場所に移動しているようです。


調べてもなかなか情報はでてきませんが、「文書テンプレート」の追加ボタンからSTARTUPの場所が開かれます。
ファイル選択ダイアログのパス部分をクリックして、ファイルパスを控えておきましょう。

## もう一工夫
さて、これでどのWordファイルでも **next_sentence** が呼び出せるようになりました。これなら効率も一気に向上……と残念ながらそうはいかず、図のようなエラーがでます。

その理由を探るために、次のような簡易マクロを組み込みます。

```vb
Option Explicit
Sub display_thisdocument()
    MsgBox (ThisDocument.Name)    
End sub
```

ダイアログを表示して、現在のドキュメントの名前を表示させるだけの単純なマクロです。

もちろん、普通に実行すればこのように表示されます。

このマクロを同じようにマクロ有効テンプレートにして、STARTUPに保存し、Wordを再起動します。

そして、新規文書でAlt + F8から実行してみると……

ファイル名がテンプレートに！？

今編集中のファイル名ではなく、テンプレート名が表示されました。
つまり、このマクロを実行しているとき、”Selection” とは今見えている文書ではなく、テンプレートファイルの選択場所を参照しにいっているんですね。

これを解決するために、Selectionのドキュメントを確認します。
エディタ画面でSelectionを選んで F1 を押すのが早いでしょう。

[https://docs.microsoft.com/ja-jp/office/vba/api/word.global.selection](https://docs.microsoft.com/ja-jp/office/vba/api/word.global.selection)

この解説によると、まずSelectionはグローバルオブジェクトのプロパティだそう。
そうすると、どうやって識別したらいいのか……

しかしこの説明、Selectionの説明にしては短すぎる気がします。
そんなわけで、Selectionオブジェクトをもう少し探してみると……

ありました！

[https://docs.microsoft.com/ja-jp/office/vba/api/word.selection](https://docs.microsoft.com/ja-jp/office/vba/api/word.selection)

ここでは
>Microsoft Word はアクティブなドキュメント ウィンドウのアクティブなウィンドウ枠から選択範囲を返します。 

となっていますね。

そしてサンプルコードも載っています。

```vb
Documents(3).ActiveWindow.Selection.Cutf
```

ということは”ActiveWindow”のSelectionであることを明示してやれば解決しそうです。

修正後のコードがこちら

```vb
Option Explicit
Sub next_sentence()
    If Selection.Range.Text = "" Then
        ActiveWindow.Selection.MoveEnd unit:=wdSentence
    Else
        ActiveWindow.Selection.Range.Next(wdSentence, 1).Select
    End If
End sub
```

これを再度マクロ有効テンプレートにして保存すると……
今度は無事成功しました！

いかがでしたか？
このマクロを応用すれば、「１つ前の文」というショートカットも作ることができます。

最後に、Wordの使い方を初歩から徹底的に勉強したい人向けの本を紹介します。
<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B081NVYJ1J&linkId=3ea5b606b96cbcd5246fc1afc41df9f9&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
</iframe>

<iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=12&l=ur1&category=audible&banner=04TW4TSNDNB96FMCBT82&f=ifr&linkID=faa8bbe97dd893a353431f67f901efd3&t=goldenbridg09-22&tracking_id=goldenbridg09-22" width="300" height="250" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>

<link-to></link-to>