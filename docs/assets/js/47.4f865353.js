(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{327:function(t,a,s){"use strict";s.r(a);var n=s(5),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("今、弊社では日中交流プロジェクト「対話山東」に携わっているのですが、その中で応募フォームを作成する必要が出てきました。\nサーバーを借りることは難しかったので、できるだけフロントエンドで完結するように作ってみました。\n"),s("a",{attrs:{href:"https://goldenbridge2002.com/shandong/index.html?via=itblog",target:"_blank",rel:"noopener noreferrer"}},[t._v("実際につくったもの"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("オンライン参加も受け付ける予定なので、奮ってお申し込みください！")]),t._v(" "),s("p",[t._v("以下、制作の記録と自戒メモです。")]),t._v(" "),s("h2",{attrs:{id:"使ったライブラリ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使ったライブラリ"}},[t._v("#")]),t._v(" 使ったライブラリ")]),t._v(" "),s("ul",[s("li",[t._v("Vue.js")])]),t._v(" "),s("p",[t._v("電氣羊のお気に入りフレームワークです。\nこれがないと話になりません。最初はhtmlに生のJavaScriptを書いていたのですが、規模が大きくなってきたので、TypeScriptを使ったWebアプリに書き換えました。\nうん、最初からこっちにするべきだったかもしれません。")]),t._v(" "),s("ul",[s("li",[t._v("Bulma")])]),t._v(" "),s("p",[t._v("これまたお気に入りのCSSフレームワーク。\n仮想DOMと相性がいいそうなので、愛用しています。\n~~ 最初からWebアプリで作るならVuetifyの方が ~~")]),t._v(" "),s("p",[t._v("色見やグリッドデザインなど、やっぱりすごい人の作ったものは楽ができますね。")]),t._v(" "),s("ul",[s("li",[t._v("Airtable")])]),t._v(" "),s("p",[t._v("集計したデータを可視化するためのLowCodeなデータベース。\nGAS + Googleスプレッドシートも考えましたが、GASの6分/時間制限にひっかかりそうだったので、こちらを選択。\n実験中にリクエストを投げすぎて30秒止まってしまったのは内緒。")]),t._v(" "),s("p",[t._v("@typeもあったはずですが、今回は面倒だったので "),s("strong",[t._v("@ts-ignore")]),t._v(" してしまいました。")]),t._v(" "),s("ul",[s("li",[t._v("elastic email")])]),t._v(" "),s("p",[t._v("応募フォームだと、受け付けた内容をメールで返すのが一般的ですが、フロントエンドだけだとどうしたものか……\nそこで見つけたのが"),s("a",{attrs:{href:"https://qiita.com/shiromofufactory/items/4298848e3e6498368a85",target:"_blank",rel:"noopener noreferrer"}},[t._v("これ"),s("OutboundLink")],1),t._v("。\nelastice email は npm にも公式ライブラリがあったので、smtp.js自体は使いませんでしたが、勉強になりました。")]),t._v(" "),s("ul",[s("li",[t._v("Dark")])]),t._v(" "),s("p",[t._v("Airtableもelastic emailもAPI Keyで認証するのですが、ハードコーディングしていいものか、迷っていました。\nせめてOrigin認証くらいはしようか、ということで")]),t._v(" "),s("p",[s("strong",[t._v("一旦TokenをDarkに送る → TokenとOriginを見て正しければ上記２つのAPI Keyを返す")])]),t._v(" "),s("p",[t._v("という構造にしました。")]),t._v(" "),s("p",[t._v("これまでに使ったことのあるライブラリをメインに、欲張りセットで頑張ります。\n作業日数は2日強！\nめぇ～～～～ん")]),t._v(" "),s("h2",{attrs:{id:"つくってみた"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#つくってみた"}},[t._v("#")]),t._v(" つくってみた")]),t._v(" "),s("p",[t._v("Vueアプリの土台づくり～ライブラリ導入です。")]),t._v(" "),s("div",{staticClass:"language-powershell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[t._v("vue create myform\nyarn add bulma sass"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("loader node"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sass airtable elasticemail\n")])])]),s("p",[t._v("簡単ですね。あ、VuexとTypeScriptを使う設定です。\n上でも書いた通り、airtabelはType定義無しで使っちゃいました。\n"),s("s",[t._v("だってどうせ上手く使わないとRecordsってanyみたいなもんだし")])]),t._v(" "),s("p",[t._v("あとは参加者情報、午前の部、午後の部、マッチング会とコンポーネントをガリガリ書いていきます。\n情報はVuexがまとめて持ってくれるので楽です。\n最後にDarkにFetch、Originが正しければAPI Keyを入手できるので、Airtableにレコードを作成し、elasitic email経由でメールを出すだけです。")]),t._v(" "),s("h2",{attrs:{id:"ハマったところ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ハマったところ"}},[t._v("#")]),t._v(" ハマったところ")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Vueのstyleの初期設定に "),s("strong",[t._v("text-align: center")]),t._v(" と "),s("strong",[t._v("margin-top: 60px")]),t._v(" があるのをうっかり忘れて頭をかく。")])]),t._v(" "),s("li",[s("p",[t._v("Vueの開発用サーバーがポート番号8080なのを忘れていて、Origin認証に失敗する。")])]),t._v(" "),s("li",[s("p",[t._v("Vueアプリの置き場所がTOPではない場合の設定の書き方を忘れて、アップしてから焦る。\nvue.config.jsのpublicPathでしたね。")])]),t._v(" "),s("li",[s("p",[t._v("VueのPublicPathを本番環境に合わせたところ、今度は開発用サーバーが立ち上がらない。\n　process.env.NODE_ENV === 'production' ? '/shandong/' : '/' だよ！")])]),t._v(" "),s("li",[s("p",[t._v("Form内のButtonタグのClickイベントで "),s("em",[s("strong",[t._v("@click.prevent.stop")])]),t._v(" を忘れる。")])])]),t._v(" "),s("p",[t._v("と、本当にVue使いか！と突っ込まれそうなうっかりミス多発でした。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("fromとformをタイポ。そして気が付かない。")])]),t._v(" "),s("li",[s("p",[t._v("電話番号とFAX番号にバリデーションを付けてみた……ら、必須ではないはずのFAX番号が必須になっていた。\n　ちゃんと空白をはじいておきましょうね。")])]),t._v(" "),s("li",[s("p",[t._v("AirtableのSingle Selectの項目名を変更忘れ。Fetchが通らなくなった。\n　ちゃんとRecordの型定義をしましょう。")])]),t._v(" "),s("li",[s("p",[t._v("Airtableの負荷制限にひっかかる……")])]),t._v(" "),s("li",[s("p",[t._v('Darkから返ってくるStringは "\\"string\\"" とダブルクォーテーション付きの文字列だった！')])]),t._v(" "),s("li",[s("p",[t._v("res.text() にcatch()を書いてエラーがでる")])])]),t._v(" "),s("p",[t._v("実際に書いていたのはこんなスクリプト。")]),t._v(" "),s("div",{staticClass:"language-Javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("t")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// なぜかcatchブロックの後にthenブロックが実行される")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"access_invalid\"'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'createRecords'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'raiseFetchError'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'access_invalid'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// なぜかthenより先にここが実行される")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'raiseFetchError'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'res.text()_failed'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("MDNをよく見たら、Body.text()にはthen()しか定義されていない模様。\nやっぱりドキュメントをちゃんと読まなきゃ。")]),t._v(" "),s("h2",{attrs:{id:"新しく使った技術メモ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新しく使った技術メモ"}},[t._v("#")]),t._v(" 新しく使った技術メモ")]),t._v(" "),s("h3",{attrs:{id:"elastic-email"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#elastic-email"}},[t._v("#")]),t._v(" elastic email")]),t._v(" "),s("p",[t._v("elastic email は初めて使ったけれど便利。\n100通/日まではトライアルアカウントで送れるし、課金しても0.09$/1000通と破格。\nクレジットカードで10$～")]),t._v(" "),s("p",[t._v("なお、npmの公式ページにはなかったような気がするけれど、\n"),s("strong",[t._v("body_text")]),t._v(" を "),s("strong",[t._v("body_html")]),t._v(" にするとHTMLメールを送ることができた。\n次はテンプレートにも挑戦したい。")]),t._v(" "),s("div",{staticClass:"language-Javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" client "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" elasticemail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    username"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'USER_NAME'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    apiKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MY_API_KEY'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 中略")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" msg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc@xyz.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    from_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NAME'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xyz@abc.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    subject"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'お申込みありがとうございます'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// body_text: mailBody,")]),t._v("\n    body_html"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" mailBody"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ここを変えた")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nclient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mailer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'raiseFetchError'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mail_send_failed'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mailOk'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"dark"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dark"}},[t._v("#")]),t._v(" Dark")]),t._v(" "),s("p",[t._v("Darkは遊びでしか触っていなかったけれど、めちゃくちゃ楽しい。\nTrail Drivenというのが素晴らしい。\nとにかくやってみて、失敗したときの変数や記録を残してくれているのがすごい。\nそしてプログラムを書き換えたときに、同じ条件でやり直してくれる。\n可視化の程度がすごすぎる。Dark大好き。Dark Love。\nまだベータ段階で将来的な料金設定がどうなるか分からないけれど、絶対に使い続けたい。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://darklang.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dark"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("強いていえば、ググラビリティが低いのが難点。\nDarkで調べているのに、 "),s("strong",[t._v("「もしかして")]),t._v(" "),s("em",[t._v("Dart")]),t._v(" "),s("strong",[t._v("」")]),t._v(" と言われてしまう。\nプログラミング言語同士、いっしょに検索する単語が似通っているのか、Darkと思って読んでいたらDartだったこともしばしば。\nここはDarkのこれからに期待。")]),t._v(" "),s("h3",{attrs:{id:"iframe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iframe"}},[t._v("#")]),t._v(" iframe")]),t._v(" "),s("p",[t._v("実はこれまであまり使っていなかった。\nsrcにv-bindできるのか、と思ってやってみたら成功したので、今回取り入れてみました。\nデータを別の静的HTMLにおいておけるから、便利かもしれない。")]),t._v(" "),s("h2",{attrs:{id:"時間の都合で諦めたもの"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#時間の都合で諦めたもの"}},[t._v("#")]),t._v(" 時間の都合で諦めたもの")]),t._v(" "),s("h3",{attrs:{id:"transition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transition"}},[t._v("#")]),t._v(" transition")]),t._v(" "),s("p",[t._v("Vueのtransitionを上手く使えたらもっとスムーズな挙動になったのですが、時間の都合で断念。\nVuetifyにしていれば、 "),s("strong",[t._v("y-transition")]),t._v(" とかですぐにできたのだけれど……")]),t._v(" "),s("h3",{attrs:{id:"webフォントやアイコン"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webフォントやアイコン"}},[t._v("#")]),t._v(" Webフォントやアイコン")]),t._v(" "),s("p",[t._v("これも本当はこだわるべきなんだろうけど、手が回らず……\n次に機会があれば手を出したい。")]),t._v(" "),s("h3",{attrs:{id:"フォームのサイズやグループ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#フォームのサイズやグループ"}},[t._v("#")]),t._v(" フォームのサイズやグループ")]),t._v(" "),s("p",[t._v("これも全くこだわれなかった部分。\nどんな長さが想定される入力部分も、とりあえず一行分確保しているのでメリハリがない……\n本職の方々の力を思い知るところ。")]),t._v(" "),s("h2",{attrs:{id:"最後に"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最後に"}},[t._v("#")]),t._v(" 最後に")]),t._v(" "),s("p",[t._v("突貫工事のため、いくつかうっかりミスがあったり、変なところで躓いたりしましたが、今は上手く動いてくれるのを祈るばかり。\nあ、最後の最後に大量の静的サイトを作るのに、Jupyterを使ったのですが、やっぱりPythonは楽ですね。\n{}でブロックを作らないのが見やすいし、同期/非同期をあまり意識しないので頭への負荷が低い気がします。\n次はPython + Darkで何かしてみたいなぁ。")]),t._v(" "),s("h4",{attrs:{id:"pr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pr"}},[t._v("#")]),t._v(" PR")]),t._v(" "),s("p",[t._v("JavaScript 至極の入門書！すぐに動かして楽しめるVue/Nuxtもオススメ！")]),t._v(" "),s("iframe",{staticStyle:{width:"120px",height:"240px"},attrs:{marginwidth:"0",marginheight:"0",scrolling:"no",frameborder:"0",src:"https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=4048930737&linkId=ebcbc825de19292c3e128eb6053cca6f&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr"}}),t._v(" "),s("iframe",{staticStyle:{width:"120px",height:"240px"},attrs:{marginwidth:"0",marginheight:"0",scrolling:"no",frameborder:"0",src:"https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B07X6F1C2P&linkId=5463808299d955a33915eddbd95246f7&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr"}}),t._v(" "),s("iframe",{staticStyle:{border:"none"},attrs:{src:"https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=12&l=ur1&category=audible&banner=04TW4TSNDNB96FMCBT82&f=ifr&linkID=faa8bbe97dd893a353431f67f901efd3&t=goldenbridg09-22&tracking_id=goldenbridg09-22",width:"300",height:"250",scrolling:"no",border:"0",marginwidth:"0",frameborder:"0"}}),t._v(" "),s("link-to")],1)}),[],!1,null,null,null);a.default=r.exports}}]);