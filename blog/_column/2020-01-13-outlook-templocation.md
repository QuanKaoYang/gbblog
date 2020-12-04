---
title: Outlookの一時ファイルの場所
slug: tips_007
date: 2020-01-13
tags:
    - Outlook
author: 電氣羊 @ Goldenbridge
location: Osaka
---

<!-- リダイレクト設定済み -->

メールにファイルが添付されていると、ついついダブルクリックして開いてしますよね。

そのまま保存したけれど、閉じたらどこにいったか分からない……
そんな一時ファイルの保管場所。

*C:\Users\%USERNAME%\AppData\Local\Microsoft\Windows\INetCache\Content.Outlook\R1MOS5TE*

INetCacheは（隠しファイルを表示する、にしても）通常のエクスプローラーには表示されないので、上記のパスを直接入力する必要があります。
*%USERNAME%* の部分は、自分のユーザー名に読み替えてくださいね。

マイクロソフト製（MS Officeのような）ではない、マイナーなファイルの場合、こんな場所にあったりします。

#### PR
<ad-set :ad="'regexp'" />

<link-to></link-to>
