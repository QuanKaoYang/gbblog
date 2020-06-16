---
title: JavaScriptでExcelを読み込む（ブラウザサイド）
slug: js_005
date: 2020-01-18
tags: 
    - JavaScript
    - Excel
author: 電氣羊 @ Goldenbridge
location: Osaka
---

翻訳者の用語集と言えば、TBX形式もありますが、まだまだExcelも主流だと思います。

このExcelファイルを何とかJavaScriptを使って処理できないか、考えてみました。

簡単に実行できるよう、サーバーサイドはつくりません。

すべてブラウザレベルでの実装を目指します。

そのため、npmのすごい人たちが作った”XLSX”というライブラリは使えませんでした（泣）

とりあえず動きだけ見たい人はこちら

https://codepen.io/hitsujinwork/pen/XWrOEay?editors=1111

## Excelを分解する

まずはExcelファイル（xlsx）の構成からひも解いていきます。

Office2007以降に採用されたdocx/xlsx/pptxファイルは、以前のものと異なり、xmlベースでできています。

そして、複数のxmlファイルや画像ファイルをzip形式で圧縮して１つのファイルを構成しているのです。そのため、拡張子を「zip」に変えたり右クリックから展開ソフトを選ぶことで、強引に分解することができます。

 xlsxを展開したときの構造は次のようになっています。（簡易版。画像とかはないものです）

- _rels/
  - .rels
- docProps/
  - app.xml
  - core.xml
- xl/
  - _rels/
    - workbook.xml.rels
  - printerSettings/
    - printerSettings1.bin
  - theme/
    - theme1.xml
    - ...
  - worksheets/
    - _rels/
      - sheet1.xml.rels
      - ...
    - sheet1.xml
    - ...
  - sharedStrings.xml
  - styles.xml
  - workbook.xml

JavaScriptでExcelファイルを読み込むには、まずJSZipを使って中身を読み込みつつ、XMLをパースし、さらにノードをたどったり正規表現を使ったりしながら、ほしい情報だけをピックアップすればいいわけです。

## ExcelのXML構造

次にXMLの構造について。

まずは一番直接関係のありそうな”worksheets”の中の”sheet1.xml”を見てみますが、こちらには文字情報が入っていません。

実際には *”xl/sharedString.xml”* にまとめられているのです。

そしてsheet1.xmlでは、「どのセルにsharedString.xmlの何番目の文字列が入る」という形でテキストを指定しているのです。

~~……なかなかややこしいですね。~~

しかもこのsharedString.xml、一つのセルの文字列情報について

 1. フォントが1種類の場合は&lt;t&gt;タグ（textタグ？）
 2. フォントが途中で変わる場合は&lt;r&gt;タグ（runタグ？）の中の&lt;t&gt;タグ
 3. 発音情報が残っている場合は&lt;rPh&gt;（run phoneticタグ?）の中の&lt;t&gt;タグ

というように、異なる階層のタグに分割して格納していて、しかも3の情報は不要なのです。

（最初、&lt;t&gt;タグのすべてのtextContentを取得してハマりました）

 このあたりをうま～く抽出してあげる必要があります。

## Sheetの情報

またsheet1.xmlの構造の話に戻ります。

こちらは&lt;sheetData&gt;の中に&lt;row&gt;があり、その下に&lt;c&gt;（おそらくcell）があります。

&lt;c&gt;タグは属性として

- r（range？　”A1"など。わかりやすい）
- t（type? s: string？ や f: formula？などの値がある）
- s（不明）

があります。

このt属性の値が”s ”の時、直下のノードである&lt;v&gt;タグの中の数字が、sharedString.xmlの出現場所（0から始まるインデックス）に対応しています。

## いざ、実装

さて、ここまでわかったところで、コーディングしていきましょう。
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
</head>
<body>
	<label for="upload_file">
		（・ω・＠）Please give me a Excel FILE to eat
		<input type="file" id="upload-file" onchange="xlsxReader(event)">
	</label>
</body>
<html>
```

```JavaScript
async function xlsxReader(event) {
    console.log("read start");
    const xlsxFile = event.target.files[0];
    const zip = new JSZip();
    const termPair = [];
    const rangeColA = new RegExp ("^A[0-9]+$");
    const rangeColB = new RegExp("^B[0-9]+$");
    console.log(xlsxFile.name);
    zip.loadAsync(xlsxFile).then((inzip) =>; {
        inzip.folder("xl/").file("sharedStrings.xml").async("string").then((xml) => {
            const sharedStrings = (new DOMParser()).parseFromString(xml, "application/xml");
            const allstrings = [];
            const siNodes = sharedStrings.getElementsByTagName("si");
            for (let siNode of siNodes){
                let textInSiNode = "";
                const tNodes = siNode.getElementsByTagName("t");
                for (let tNode of tNodes) {
                    if (tNode.parentNode.localName !== "rPh") {
                        textInSiNode += tNode.textContent;    
                    }
                }
                allstrings.push(textInSiNode);
            }
			inzip.folder("xl/worksheets/").file("sheet1.xml").async("string").then((xml) => {
                const wsx = (new DOMParser()).parseFromString(xml, "application/xml");
                const rowNodes = wsx.getElementsByTagName("row");
                for (let rowNode of rowNodes) {
                    const cellNodes = rowNode.getElementsByTagName("c");
                    let gotA = false;
                    let gotB = false;
                    let avalue = "";
                    let bvalue = "";
                    for (let cellNode of cellNodes) {
                        if (gotA && gotB) {
                            break;
                        }
                        cellRange = cellNode.getAttribute("r");
                        if (!gotA) {
                            if (rangeColA.test(cellRange) && cellNode.getAttribute("t") === "s") {
                                avalue = allstrings[Number(cellNode.firstChild.textContent)];
                                gotA = true;
                            }
                        } else if (!gotB) {
                            if (rangeColB.test(cellRange) && cellNode.getAttribute("t") === "s") {
                                bvalue = allstrings[Number(cellNode.firstChild.textContent)];
                                gotB = true;
                                termPair.push([avalue, bvalue]);
                            }
                        }
                    }
                }
                console.log(termPair[0]);
                console.log("read end");
            })
        })
    })
}
```
戻り値は[[原文用語, 訳文用語],…]の二次元配列です。

 

Promise地獄になるのがいやだったので、とりあえず用語集読み込み用にSheet1のA列とB列だけを対象にしてみました。（実際に全てのシートのすべてのセルの情報をとろうと思ったら、Promise.all()を使う方が現実てきでしょう）

正規表現でA/B 一文字と数字の組み合わせに絞っています。startsWithを使うと、AAやBCといった列も拾ってしまうので、こうしました。

 出力も面倒だったので、とりあえずコンソールに最初のペアだけを表示させています。

これでひとまず、ExcelからJavaScriptで扱えるデータにするという目的は達成しました。

### テキストボックス（シェイプ）

ちなみに……テキストボックスが入っている場合は、”drawings/”というフォルダが増えます。

そのフォルダの中にはdrawing1.xml、drawing2.xml...と、いうようにxmlが入っており、この中にシートごとのテキストボックス（やオブジェクト）のデータが入っています。

ワークシートと異なり、テキストボックスの文字列情報も、同じxmlファイルにあります。

「これならそこまで難しくない」と喜んだのも束の間、実はsheet1のオブジェクト ＝ drawing1.xmlとは限らないことが判明し……

例えばsheet1にはオブジェクトがなく、sheet2にある場合は、sheet2のオブジェクトの情報がdrawing1.xmlに書き込まれます。要は、drawingの後につく番号は、「前からみて何番目のオブジェクトが存在するシートか」という意味だったようです。

これを読み込むには”xl/_rels/”フォルダの中身を見ることになります。

一体何個のPromiseオブジェクトになるかな～……

#### PR
JavaScript 至極の入門書！すぐに動かして楽しめるVue/Nuxtもオススメ！

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=4048930737&linkId=ebcbc825de19292c3e128eb6053cca6f&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
</iframe>
<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B07X6F1C2P&linkId=5463808299d955a33915eddbd95246f7&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr">
</iframe>
<iframe src="https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=12&l=ur1&category=audible&banner=04TW4TSNDNB96FMCBT82&f=ifr&linkID=faa8bbe97dd893a353431f67f901efd3&t=goldenbridg09-22&tracking_id=goldenbridg09-22" width="300" height="250" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>

<link-to></link-to>