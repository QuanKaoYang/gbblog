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

JavaScriptで書けるのでVBAより強力な演算が可能です。

Microsoft謹製なので、もちろんTypescriptもバッチリ！

Webを触ったことのある方は挑戦してみては？

なお、このJavaScriptでつくるツールも、VBAでつくるツールも日本語にするとどちらも「アドイン」。

ややこしいこと極まりないですね。

本サイトではVBAでつくるアドインを「アドイン」、JavaScriptでつくるほうを”Add-in”と記述することにします。

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

#### PR
<ad-set :ad="'js'" :ad2="'vue'"/>

<link-to></link-to>