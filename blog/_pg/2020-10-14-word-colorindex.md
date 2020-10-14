---
title: Word ColorIndex チートシート
date: 2020-10-14
tags: 
    - Word
    - VBA
    - チートシート
author: 電氣羊 @ Goldenbridge
location: Osaka
---

翻訳用のWordマクロをつくっていると、変更した箇所を際立たせるため、ColorIndexをよく使います。

ところが、[マイクロソフト公式のドキュメント](https://docs.microsoft.com/en-us/office/vba/api/word.wdcolorindex)はなんと白黒！

どの名前がどんな色なのか、思い出すのも面倒なので、思い切って可視化しました。

## ColorIndex 色付き早見表

上記のドキュメントをWordファイルにコピーし、マクロを使って色をつけてみました。

<img :src="$withBase('/pict/word/colorIndex.PNG')" alt="Word ColorIndex Color List">

これでマクロづくりが便利になりますね。

というか、これぐらいつくっておいてよ、MSさん！

（この処理をしたコードは[Qiita](https://qiita.com/DianziYang/items/f292c334a51293735eae)にて紹介しています）

#### PR
<ad-set :ad="'word'" />

<link-to></link-to>