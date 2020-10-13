---
title: Officeのカスタムリボンをつくる
date: 2020-10-12
tags: 
    - VBA
    - CATOVIS
author: 電氣羊 @ Goldenbridge
location: Osaka
---

これまでキーボード操作を前提に、ショートカットを作りこんできたCATOVISのWord側UIですが、やはり目に見えるものを増やしたほうがより入りやすいだろうということで、カスタムリボンの作成に入りました。

カスタムリボンを作るには「リボンのユーザー設定」を使うのが手っ取り早いのですが、この方法で作られるカスタムリボンはそのPCのOfficeのみに紐づいており、配布することができません。
テンプレートファイルを作成しても、「リボンのユーザー設定」は含まれず、ほかのPCに移動させると設定が消えてしまいます。

そのため、一歩踏み込んだ部分を改変する必要が出てきました。

## CustomUI をつくるための準備

このブログでは何度か取り上げていますが、docx/xlsx/pptxはいくつかのxmlファイルをzip形式で圧縮してできているものです。
まずは新規Wordファイルをつくり、強引にzipファイルとして展開します。
（拡張子を.zipに変える、7-zipで「ここに展開」を選ぶ etc...）

すると、下図のようなフォルダ構成として開くことができます。

<img :src="$withBase('/pict/customUI/extract.PNG')">

ここにxmlファイルを直接作成していくのです。

### CustomUI.xml をつくる

まずは展開したフォルダの直下に CustomUI という名前のフォルダをつくります。

次にこの CustomUI フォルダの中に CustomUI.xmlというファイルをつくり、メモ帳等のテキストエディタで開きます。
ここに次のように記述します。

```xml
<customUI xmlns="http://schemas.microsoft.com/office/2009/07/customui">
    <ribbon startFromScratch="false">
        <tabs>
            <tab id="catovisTab" label="CATOVIS">
                <group id="MoveGrp" label="Move">
                    <button id="customButton" label="Next Seg" imageMso="RightArrow2" size="large" onAction="next_seg"/>
                </group>
            </tab>
        </tabs>
    </ribbon>
</customUI>
```

customUIは リボン ＞ tabs ＞ tab ＞ group という順番にネストされています。
ボタンなどのコントロールはgroupの中にしかおくことができません。

ボタンタグの中身は
- ボタンを区別するためのid
- ボタンの下に表示させるテキストのlabel
- アイコンを示すimageMso
- ボタンの大きさを示すsize
- クリック時に実行するマクロを示すonAction
といった属性があります。

これで右矢印のアイコンで、Next Segというラベルがついていて、クリックすると next_seg というマクロを実行するタブができました。

しかしこれだけではファイルに設定することができません。

### relsファイルを修正する

続いて、_relsフォルダにあるファイル 「.rels」をテキストエディタで開きます。

すると、このような中身になっていると思います。

```xml
<Relationships>
    <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
    <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
    <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>
```

ここにCustomUIを読み込む設定を書き加えます（下から2行目）。
```xml
<Relationships>
    <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
    <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
    <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
    <Relationship Id="rId4" Type="http://schemas.microsoft.com/office/2007/relationships/ui/extensibility" Target="customUI/customUI.xml"/>
</Relationships>
```

### zipで圧縮しなおす

これでもう一度、_relsから \[Content_Types\].xml までを含めて選択し、zip形式で圧縮します。
このファイルの拡張子をdocmに戻してWordで開くと、無事にカスタムタブが追加されています。

<img :src="$withBase('/pict/customUI/nextseg.PNG')">

このファイルをdotmファイルとして保存し、[ここ](../pg/2020/01/14/select-sentence/#wordファイルのテンプレート化)を参考にして、スタートアップフォルダにいれましょう。
これでどのファイルを開いてもカスタムタブが表示されます。

## CustomUIEditorを利用する

はい、上記の手順は非常に煩雑ですね。
毎回こんなことやっていたらいつまで経っても終わりません。

というわけで専用のツールを使用しましょう。

インストールは[このサイト](https://www.ka-net.org/blog/?p=8945)が非常にわかりやすいです。

**.deployを削除する** ところは、PowerShellを使って一括で実行してしまいましょう。

### onActionマクロを実装する

このCustomUIEditroを使えば、Sampleを挿入しながら進められますし、relsファイルの編集も含めてやってくれるので、非常に簡単になっています。
最後に、onActionマクロの実装について。

CustomUIEditor の GenerateCallbacksを選択すると、いつくかサブプロシージャ（Sub）が作成されています。

<img :src="$withBase('/pict/customUI/generate.PNG')">

最初はここで編集できるのかと思っていたのですが、実際にはここで生成されるテキストをコピー ＞　適当なモジュールに貼り付け ＞ 必要な処理を記述 の手順を踏まなければなりませんでした。
またその際、control As IRibbonControlの部分を削除してしまうと、動かなくなるので注意しましょう。

ちなみに、このIRibbonControlオブジェクトには、
- ボタンを押したウインドウを示す **context**
- 押されたボタンのidを示す **id**
- 任意の文字列を示す **tag**
といったメンバーがあるそうです。[参考](https://docs.microsoft.com/ja-jp/office/vba/api/overview/library-reference/iribboncontrol-members-office)

これを使って強化されるCATOVISの新しいUIにもご期待ください！

#### PR
<ad-set :ad="'word'" />

<link-to></link-to>