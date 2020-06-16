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

#### PR
Excel VBAを使って一括置換ツールを作りたい！
そんなニーズに特化した翻訳者向けのVBA入門書です。

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B0832FNKL2&linkId=025ec725b1f6eca83e9e451a890bd4c2&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
</iframe>


<link-to></link-to>