---
title: Rename-Itemで一括リネーム
slug: ps_004
date: 2020-01-01
tags:
    - PowerShell
    - コマンドレット
    - 使用例
author: 電氣羊 @ Goldenbridge
location: Osaka
---

翻訳が終わったファイルには言語名や作業者名、作業済のマークなどをつけて別名保存することが多いと思います。

しかしファイル数が10とか20とかあると、一つずつ手作業するのも面倒です。

さて、PowerShellに頑張ってもらいましょう。

```powershell
Get-ChildItem -File | % {Rename-Item $_  ("Done_" + $_.Name)}
```

## パイプ記号について
パイプ記号 ”|” は、前の結果を次の処理に渡して連結するものです。

シェルを使う方にはおなじみですね。

ここでは *Get-ChildItem* で得られたファイルの一覧を、次のコマンドで使えるようにしています。

 次のパーセント *”%”* は *ForEach-Object* のエイリアスです。

パイプによって渡されたファイルの一覧に対し、一つずつ処理を行うことを意味しています。

そして、その具体的な処理が {} の中に書かれているものです。

また、一つずつ取り出されたオブジェクトは、変数 $_ を使って取得することができます。

## Rename-Itemについて 
さて、次に出てくるのが *”Rename-Item”*。

読んで字のごとし、項目名を変更するものです。

Linuxでは mv でリネームすることが多いと思いますし、実際PowerShellでもMove-Itemで同じことができるのですが、せっかく専用のコマンドレットがあるのでこちらを使いましょう。
 

使い方は

```powershell
 Rename-Item <元のファイル名> <新しいファイル名>
```

です。

ここでは *”$_”*、つまり一つずつ渡されたファイルに対し、”Done_”を付けたファイル名を使ってリネームしています。ファイル名の先頭に文字を足すのはこれでいいのですが、後ろにつける場合はどうでしょうか。

 単純に、

```powershell
Get-ChildItem -File | % {Rename-Item $_  ($_.Name + "_Done")}
```

とすると、どうなるでしょうか。
……

なんと、拡張子の後ろに"_Done”が足されてしまいます。

それでは困りますよね。

なのでもう一工夫。

```powershell
Get-ChildItem -File | % {Rename-Item $_  ($_.Name.Replace($_.Extension, ("_Done" + $_.Extension)))}
```

このように、Replaceメソッドを使って拡張子の前に追記するようにします。

PowerShellで取得される結果はオブジェクトになっているため、.Nameや.Extensionのようにプロパティを参照することで、ほしい部分だけを簡単に取得できます。

コマンドプロンプトよりずっと楽ですね。

<hr />
ここで紹介するPowerShellの小技をまとめました！

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="[https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B082VRMNXV&linkId=d9c2c28aa385330077060ee44bad340d&bc1=ffffff&lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr](https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B082VRMNXV&linkId=d9c2c28aa385330077060ee44bad340d&bc1=ffffff&lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr)">
</iframe>

<link-to></link-to>