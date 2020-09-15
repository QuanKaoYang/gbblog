---
title: Office Add-inのマニフェストファイルをつくる
slug: js_003
date: 2020-01-16
tags: 
    - JavaScript
    - Office Add-in
    - マニフェスト
    - 連載
author: 電氣羊 @ Goldenbridge
location: Osaka
---

”Office Add-in”については書籍はほとんどありません。

Webの情報が頼りです。

というわけで、ドキュメントに目を通してみます。

[https://docs.microsoft.com/ja-jp/office/dev/add-ins/](https://docs.microsoft.com/ja-jp/office/dev/add-ins/)

Office Add-inに必要なものは、

- Add-inの概要が書かれたマニフェストファイル（XML）
- Add-inの起点となるHTMLファイル
- Add-inの動作を記述したJavaScriptファイル

ですね。

あと、2と3のファイルをホストするサーバーも必要ですが、個人で使う分や開発段階では開発サーバーでも十分でしょう。

 ## マニフェストファイルとは

Office Add-inは、アプリケーションの起動時にマニフェストファイルを読み込みます。

そしてそこに書かれているホストドメインを、Officeアプリケーションの中で開けるようになります。

Officeとブラウザの間でプロセス間通信をしながら処理をするような形です。

さて、このマニフェストファイル。

Microsoftの審査に通ったものはストアにあるのですが、

開発段階では「サイドロード」という方法でOfficeに読み込ませます。

ところがこの説明がなかなかわかりづらい……

 
マニフェストの作り方や、プラットフォームごとのサイドロードの仕方が別のページにあったり、

「サイドロードしたファイルの削除の仕方」が見つからなかったり……

 いくつか手探りでやったことをメモします。

 ## マニフェストの作製

Visual Studio（+IIS）でテンプレートを使うこともできますが、何せ起動が遅い。

公式ドキュメントの説明を読んでも、なかなかわからないところが多いです。

 ここでは公式が推奨しているもう一つの方法、Node.jsのツールを使う方法をお勧めします。

https://github.com/OfficeDev/generator-office

 まずはnpmを使って専用のツールをインストールします。

※私はyarn派ですけどね。

 プロジェクトごとに使い分ける性質のものでもないので、グローバルでいいでしょう。

```powershell
npm -g install yo
yo office
```

インストールが終わったら、そのまま *yo* と入力すれば、インタラクティブな表示がされます。

 あとは作りたいコンテンツに合わせてカーソルで選んでいくだけ。

AngularやReactも使えますし、Typescriptも使えます。

※※ここには表示されていませんが、私はVue.js派です。もちもんVueも問題なく使えます。

 一通りの設定ができたら、必要なファイルが作成されます。

 これでプロジェクトのひな型ができました。

## サイドロードしてみる

yoコマンドでPowerShellに表示される指示のとおり

```powershell
cd ”My Office Add-in”
npm start
```

と打ち込めばOk……

のはずなのですが、なにやらエラーがでる。

```powershell 
Error: Unable to sideload the Office Add-in. 
Error: Unable to delete registry value "C:\My Office Add-in\manifest.xml" in key "HKCU\SOFTWARE\Microsoft\Office\16.0\W
ef\Developer".
ProcessUncleanExitError: DELETE command exited with code 1:

・ｽG・ｽ・ｽ・ｽ[: ・ｽw・ｽ閧ｳ・ｽ黷ｽ・ｽ・ｽ・ｽW・ｽX・ｽg・ｽ・ｽ ・ｽL・ｽ[・ｽﾜゑｿｽ・ｽﾍ値・ｽ・ｽ・ｽ・ｽ・ｽﾂゑｿｽ・ｽ・ｽﾜゑｿｽ・ｽ・ｽﾅゑｿｽ・ｽ・ｽ
```

どうやらレジストリをいじるのに失敗しているようですね。

最後に文字化けしているのが怪しい……

 というわけで、PowerShellの文字コードをUTF-8に変えてみます。

 ```powershell
chcp 65001
 ```

今度はうまくいきました！

Add-inを読み込んだWordファイルが開かれます。
 
ホームタグ上に”Show Taskpane”というボタンが増えています。

このボタンを押すと、Wordの右側に、枠で仕切られた画面が表示されます。

そして画面にある【RUN】ボタンを押すと、文書の中に”Hello, World”と青文字で入力されました。

 後はこれをベースに処理を書き加えていけば、オリジナルのAdd-inの完成です。


※このエラーは環境によっては出ないようですね。

ただ、このエラー文に示されているレジストリキーはとても役に立つので、保存しておきます。

PowerShellでエラーのリダイレクトには ”2>” を使います。　

#### PR
<ad-text ad="js"></ad-text>

<ad-link ad="js"></ad-link>
<ad-link ad="vue"></ad-link>
<ad-link-box ad="audible"></ad-link-box>

<link-to></link-to>