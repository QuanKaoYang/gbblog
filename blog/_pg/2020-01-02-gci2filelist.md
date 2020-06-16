---
title: Get-ChildItemとリダイレクトでファイルリストをつくる
slug: ps_001
date: 2020-01-02
tags: 
    - PowerShell
    - 使用例
    - コマンドレット
    - ファイル操作
author: 電氣羊 @ Goldenbridge
location: Osaka
---

複数に分割されたファイルで翻訳依頼を受けた場合、ファイルリストを作って管理したくなることもしばしば。
そんなときはPowerShellで一気に解決しましょう。

```powershell
Get-ChildItem -File -Name > list.txt
```

## リダイレクト記号
リダイレクト記号 **”>”** は不等号というより矢印の意味。
本来出力される結果を、向いている先に送り込むものです。

これにより、そのままだとPowerShellの画面に表示されるファイル一覧を、”list.txt”の内容として作ることができます。

なお、この方法でファイルを作成すると新規作成してくれるのですが、もし同じ名前のファイルがあったら、警告なく「上書き」してしまいます。
必要なファイル名と同じ名前をつけてしまわないように注意してください。

<hr />
ここで紹介するPowerShellの小技をまとめました！

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="[https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B082VRMNXV&linkId=d9c2c28aa385330077060ee44bad340d&bc1=ffffff&lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr](https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B082VRMNXV&linkId=d9c2c28aa385330077060ee44bad340d&bc1=ffffff&lt1=_top&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr)">
</iframe>

<link-to></link-to>