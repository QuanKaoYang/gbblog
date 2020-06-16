---
title: Wordファイルをtxtファイルに一括変換
slug: tips_006
date: 2020-01-12
tags: 
    - Linux
    - ファイル変換
author: 電氣羊 @ Goldenbridge
location: Osaka
---

Wordで大量のファイルがあったとき、一括検索をしたくなることも多いでしょう。
Tradosなどで処理することもできますが、もっと手軽な方法として、txtファイルに変換しておくというものがあります。
txtファイルであれば、PowerShellを使って全文検索が可能です。

## unoconv
txtファイルへの変換はLinuxのコマンド *”unoconv”*を使います。
Windowsからは利用できないため、仮想マシンを用意するか、
Windows10ユーザーであればWSLを利用するのが手軽だと思います。
（Linuxのインストールについてもいつか紹介します）
気になる方はストアから **Ubuntu** をインストールしてみてください。

以下、unoconvを使ったサンプルコードです。

```bash
# インストールがまだであればしておく
sudo apt-get install unoconv

# 変換の実行
# -fの後ろに変換後のフォーマット、その後に入力ファイルパス
unoconv -f txt *.doc*
```

unoconvはLibreOfficeを利用しているとのことで、インストールされていなければ、結構多量のパッケージがインストールされます。
急ぎの案件だとイライラしてしまうので、早めにインストールしておきましょう。

-fで指定するフォーマットには、PDFやHTML、RTFなどもあるようです。

ファイル数が多いときは時間がかかるので、根気も必要です。

#### PR
Wordの使い方を初歩から徹底的に勉強したい人向けの本を紹介します。

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B081NVYJ1J&linkId=3ea5b606b96cbcd5246fc1afc41df9f9&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
</iframe>
<iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=12&l=ur1&category=musicunlimited&banner=145C9T3K8K0AZHVBRHG2&f=ifr&linkID=0603ffea488d8f3b5a69918caa6e8e5f&t=goldenbridg09-22&tracking_id=goldenbridg09-22" width="300" height="250" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>

<link-to></link-to>