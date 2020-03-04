---
title: Excelでフィルタをかけたままコピー
slug: xls_003
date: 2020-03-04
tags: 
    - Excel
    - 小ワザ
author: 電氣羊 @ Goldenbridge
location: Osaka
---

Excelのフィルタはとても便利です。翻訳業務においても、「黄色のセルだけ翻訳してください」「赤文字は対象外です」のような指示があったらフィルタをかけることが多いです。

しかし、一つ不満な点が。それは **フィルタをかけた状態でコピペがうまくいかない** こと。

まずは実例を見てください。

<img :src="$withBase('/pict/excel-ctrl-r/fig1.png')">

この元ファイルに対して

<img :src="$withBase('/pict/excel-ctrl-r/fig2.png')">

黄色セルでフィルタをかけて

<img :src="$withBase('/pict/excel-ctrl-r/fig3.png')">

右の列にコピーをしようとすると

<img :src="$withBase('/pict/excel-ctrl-r/fig4.png')">

このように失敗します。

## 右にコピー（Ctrl + R）
こういうときは「右にコピー」を使いましょう。

まずはフィルタがかかったセルと、その横のセルを選択します。

<img :src="$withBase('/pict/excel-ctrl-r/fig5.png')">

この状態で **Ctrl+R** を押しましょう。すると選択していた部分がそれぞれ右にコピーされます。

<img :src="$withBase('/pict/excel-ctrl-r/fig6.png')">

フィルタで非表示になっていた部分は空白のまま。

ぜひ活用してみてください。



<link-to></link-to>