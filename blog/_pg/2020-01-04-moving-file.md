---
title: 下層ファイルをフォルダにまとめる
slug: ps_003
date: 2020-01-01
tags:
    - PowerShell
    - コマンドレット
    - 使用例 
    - ファイル操作
author: 電氣羊 @ Goldenbridge
location: Osaka
---

章立ての複雑な原稿をもらったとき。
章ごとにフォルダを分けるのはまだいいとして、節ごとにフォルダが分けられているのは、なかなか大変ですよね。

一括処理をするためにも、全ファイルを一時的に1つのフォルダにまとめたくなります。
そんなときはPowerShellで簡単に解決！

```powershell
mkdir ../temp
Get-Childitem -Recurse -File | Copy-Item -Destination ../temp
```

注意するべきは、原稿と同じフォルダ（もしくは同じフォルダの中のフォルダ）にまとめ用の一時フォルダを作らないこと。
-Recurseオプションをつけて再帰的にコピーしていくため、順番によってはコピーしたファイルもコピー対象となって、「上書きできない」、とエラーになってしまいます。
（実はこれで少しハマった）

上記の例では、探索させる層よりも上のディレクトリ（../）にフォルダを作っています。
また、エイリアスを駆使した最短バージョンも載せておきます。 

```powershell
mkdir ../temp
ls -re -file | cp -d ../temp
```

これなら一括置換マクロなども楽々実行できますね。

<hr />
ここで紹介するPowerShellの小技をまとめました！

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="[https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B082VRMNXV&linkId=d9c2c28aa385330077060ee44bad340d&bc1=ffffff&lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr](https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B082VRMNXV&linkId=d9c2c28aa385330077060ee44bad340d&bc1=ffffff&lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr)">
</iframe>

<link-to></link-to>