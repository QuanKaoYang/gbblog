---
title: CATOVIS 0.4.6 リリース
slug: catovis_002
date: 2020-02-04
tags:
    - CATOVIS
author: 電氣羊 @ Goldenbridge
location: Osaka
---

オリジナルCATツール「CATOVIS」の0.4.6版を公開いたしました。
詳細は[こちら](https://quankaoyang.github.io/catovis-docs/)

今回のアップデートは主にWord側の操作性向上に主眼を置いています。

- CATOVISとの接続　接続解除機能 （Alt+F1）
- クイックフィルターの実行ショートカット （Alt+Q）
- チェックモード
- 翻訳スニペット（Alt + ,　その後　Ctrl + ↓）

CATOVISを使っていると、通常のWordファイルでも「次の文」「前の文」という選択方法が使いたくなります。

これまでは「次の文」を選ぶ際、常にCATOVISと通信していたので、CATOVIS起動前だとWordが待機状態に入ってしまいました。

今回のアップデートでは、CATOVISと通信 **しない** ことも選べるようにしました。

純粋に文単位で見たいときにも活用できます。

また、以前から温めていたサブTM（Sub-Sentencal Translation Memory）というコンセプトがあります。

これはTMを文全体としてだけでなく、部分部分で活用できないかというものでした。

その簡易実装として、「翻訳スニペット」という機能をつくってみました。

類似として提示されるメモリの一部だけを貼り付けるもので、入力補助として使えないか実験中です。

詳細については、マニュアルを随時更新していきます！



<link-to></link-to>