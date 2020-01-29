(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{302:function(e,v,t){"use strict";t.r(v);var s=t(5),a=Object(s.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("”Office Add-in”については書籍はほとんどありません。")]),e._v(" "),t("p",[e._v("Webの情報が頼りです。")]),e._v(" "),t("p",[e._v("というわけで、ドキュメントに目を通してみます。")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.microsoft.com/ja-jp/office/dev/add-ins/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.microsoft.com/ja-jp/office/dev/add-ins/"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Office Add-inに必要なものは、")]),e._v(" "),t("ul",[t("li",[e._v("Add-inの概要が書かれたマニフェストファイル（XML）")]),e._v(" "),t("li",[e._v("Add-inの起点となるHTMLファイル")]),e._v(" "),t("li",[e._v("Add-inの動作を記述したJavascriptファイル")])]),e._v(" "),t("p",[e._v("ですね。")]),e._v(" "),t("p",[e._v("あと、2と3のファイルをホストするサーバーも必要ですが、個人で使う分や開発段階では開発サーバーでも十分でしょう。")]),e._v(" "),t("h2",{attrs:{id:"マニフェストファイルとは"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#マニフェストファイルとは"}},[e._v("#")]),e._v(" マニフェストファイルとは")]),e._v(" "),t("p",[e._v("Office Add-inは、アプリケーションの起動時にマニフェストファイルを読み込みます。")]),e._v(" "),t("p",[e._v("そしてそこに書かれているホストドメインを、Officeアプリケーションの中で開けるようになります。")]),e._v(" "),t("p",[e._v("Officeとブラウザの間でプロセス間通信をしながら処理をするような形です。")]),e._v(" "),t("p",[e._v("さて、このマニフェストファイル。")]),e._v(" "),t("p",[e._v("Microsoftの審査に通ったものはストアにあるのですが、")]),e._v(" "),t("p",[e._v("開発段階では「サイドロード」という方法でOfficeに読み込ませます。")]),e._v(" "),t("p",[e._v("ところがこの説明がなかなかわかりづらい……")]),e._v(" "),t("p",[e._v("マニフェストの作り方や、プラットフォームごとのサイドロードの仕方が別のページにあったり、")]),e._v(" "),t("p",[e._v("「サイドロードしたファイルの削除の仕方」が見つからなかったり……")]),e._v(" "),t("p",[e._v("いくつか手探りでやったことをメモします。")]),e._v(" "),t("h2",{attrs:{id:"マニフェストの作製"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#マニフェストの作製"}},[e._v("#")]),e._v(" マニフェストの作製")]),e._v(" "),t("p",[e._v("Visual Studio（+IIS）でテンプレートを使うこともできますが、何せ起動が遅い。")]),e._v(" "),t("p",[e._v("公式ドキュメントの説明を読んでも、なかなかわからないところが多いです。")]),e._v(" "),t("p",[e._v("ここでは公式が推奨しているもう一つの方法、Node.jsのツールを使う方法をお勧めします。")]),e._v(" "),t("p",[e._v("https://github.com/OfficeDev/generator-office")]),e._v(" "),t("p",[e._v("まずはnpmを使って専用のツールをインストールします。")]),e._v(" "),t("p",[e._v("※私はyarn派ですけどね。")]),e._v(" "),t("p",[e._v("プロジェクトごとに使い分ける性質のものでもないので、グローバルでいいでしょう。")]),e._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[e._v("npm "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("g install yo\nyo office\n")])])]),t("p",[e._v("インストールが終わったら、そのまま "),t("em",[e._v("yo")]),e._v(" と入力すれば、インタラクティブな表示がされます。")]),e._v(" "),t("p",[e._v("あとは作りたいコンテンツに合わせてカーソルで選んでいくだけ。")]),e._v(" "),t("p",[e._v("AngularやReactも使えますし、Typescriptも使えます。")]),e._v(" "),t("p",[e._v("※※ここには表示されていませんが、私はVue.js派です。もちもんVueも問題なく使えます。")]),e._v(" "),t("p",[e._v("一通りの設定ができたら、必要なファイルが作成されます。")]),e._v(" "),t("p",[e._v("これでプロジェクトのひな型ができました。")]),e._v(" "),t("h2",{attrs:{id:"サイドロードしてみる"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#サイドロードしてみる"}},[e._v("#")]),e._v(" サイドロードしてみる")]),e._v(" "),t("p",[e._v("yoコマンドでPowerShellに表示される指示のとおり")]),e._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[e._v("cd ”My Office Add"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-in")]),e._v("”\nnpm "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("start")]),e._v("\n")])])]),t("p",[e._v("と打ち込めばOk……")]),e._v(" "),t("p",[e._v("のはずなのですが、なにやらエラーがでる。")]),e._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[e._v("Error: Unable to sideload the Office Add"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-in")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v(" \nError: Unable to delete registry value "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"C:\\My Office Add-in\\manifest.xml"')]),e._v(" in key "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"HKCU\\SOFTWARE\\Microsoft\\Office\\16.0\\W\nef\\Developer"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\nProcessUncleanExitError: DELETE command exited with code 1:\n\n・ｽG・ｽ・ｽ・ｽ"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(": ・ｽw・ｽ閧ｳ・ｽ黷ｽ・ｽ・ｽ・ｽW・ｽX・ｽg・ｽ・ｽ ・ｽL・ｽ"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("・ｽﾜゑｿｽ・ｽﾍ値・ｽ・ｽ・ｽ・ｽ・ｽﾂゑｿｽ・ｽ・ｽﾜゑｿｽ・ｽ・ｽﾅゑｿｽ・ｽ・ｽ\n")])])]),t("p",[e._v("どうやらレジストリをいじるのに失敗しているようですね。")]),e._v(" "),t("p",[e._v("最後に文字化けしているのが怪しい……")]),e._v(" "),t("p",[e._v("というわけで、PowerShellの文字コードをUTF-8に変えてみます。")]),e._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[e._v("chcp 65001\n")])])]),t("p",[e._v("今度はうまくいきました！")]),e._v(" "),t("p",[e._v("Add-inを読み込んだWordファイルが開かれます。")]),e._v(" "),t("p",[e._v("ホームタグ上に”Show Taskpane”というボタンが増えています。")]),e._v(" "),t("p",[e._v("このボタンを押すと、Wordの右側に、枠で仕切られた画面が表示されます。")]),e._v(" "),t("p",[e._v("そして画面にある【RUN】ボタンを押すと、文書の中に”Hello, World”と青文字で入力されました。")]),e._v(" "),t("p",[e._v("後はこれをベースに処理を書き加えていけば、オリジナルのAdd-inの完成です。")]),e._v(" "),t("p",[e._v("※このエラーは環境によっては出ないようですね。")]),e._v(" "),t("p",[e._v("ただ、このエラー文に示されているレジストリキーはとても役に立つので、保存しておきます。")]),e._v(" "),t("p",[e._v("PowerShellでエラーのリダイレクトには ”2>” を使います。")]),e._v(" "),t("link-to")],1)}),[],!1,null,null,null);v.default=a.exports}}]);