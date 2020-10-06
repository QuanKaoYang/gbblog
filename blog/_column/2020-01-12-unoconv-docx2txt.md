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
<ad-set :ad="'word'" />

<link-to></link-to>