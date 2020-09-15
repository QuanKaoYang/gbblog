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

#### PR
<ad-text ad="ps"></ad-text>

<ad-link ad="ps"></ad-link>
<ad-link-box ad="audible"></ad-link-box>

<link-to></link-to>