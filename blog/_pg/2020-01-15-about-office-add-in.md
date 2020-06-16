---
title: Office Add-inについて
slug: js_002
date: 2020-01-15
tags:
    - Add-in
    - JavaScript
    - 連載
author: 電氣羊 @ Goldenbridge
location: Osaka
---

MS Officeを便利に動かすツールと言えばマクロ（VBA）。

ところが、マクロとは一味違う”Office Add-in”というものがあることをご存知でしょうか。

Javascriptで書けるのでVBAより強力な演算が可能です。

Microsoft謹製なので、もちろんTypescriptもバッチリ！

Webを触ったことのある方は挑戦してみては？

なお、このJavascriptでつくるツールも、VBAでつくるツールも日本語にするとどちらも「アドイン」。

ややこしいこと極まりないですね。

本サイトではVBAでつくるアドインを「アドイン」、Javascriptでつくるほうを”Add-in”と記述することにします。

## Office Add-inって？？？ 

天下のMicrosoftが推している割には、知名度も低く、情報も古かったり、英語しかないものが多いです。

この便利な機能がもっと普及するよう、少しでも情報提供ができればうれしいです。

まずは公式の情報を整理します。

Office Add-inが使えるのはWord, Excel, PowerPoint, Outlook, OneNote, Projectの6つのアプリケーションです（2013～）。

Add-inはさらに「作業ウインドウAdd-in」、「コンテンツAdd-in」、「メールAdd-in」の3つに分かれます。

本サイトでは主に「作業ウインドウAdd-in」の作り方を紹介していきます。

作業ウインドウAdd-inの例（ScriptLab）
作業ウインドウAdd-inの例


作業ウインドウAdd-inは、Outlook以外のすべてのアプリケーションで使えるものです。イメージとしては、Officeの右側にウインドウ（ブラウザ）を表示させ、 Officeと連動しながら処理をするものとなります。

Officeのストアから導入することができます。

右の画像はAdd-inが何となく体験できる”Script Lab”というアドインです。

まさにWordの中で、別ウインドウが開いているものです。

 メールAdd-inはその名のとおり、Outlookで使うものです。

メーラーソフトという性質上、やや特殊なようなので、まだ私も使ったことがありません。

 コンテンツAdd-inは、ファイルの中に直接埋め込むことができるもので、ExcelとPowerPointでのみ使用できます。

これについても、まだ有用な用途が思いついていないため、一旦保留。


私が個人用つくっている、文字変換や簡易CATツールなどを紹介していこうと思います。

あと、ハマりどころも解決メモを残したい（本当に情報が少ない）。

<hr />
JavaScript 至極の入門書！すぐに動かして楽しめるVue/Nuxtもオススメ！

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=4048930737&linkId=ebcbc825de19292c3e128eb6053cca6f&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
</iframe>
<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B07X6F1C2P&linkId=5463808299d955a33915eddbd95246f7&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
</iframe>

<link-to></link-to>