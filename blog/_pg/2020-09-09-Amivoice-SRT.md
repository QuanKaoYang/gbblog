---
title: AmiVoiceで音声認識からSRTファイル作成まで
date: 2020-09-29
tags: 
    - 音声認識
    - SRT
    - Python
author: 電氣羊 @ Goldenbridge
location: Osaka
---

このところ、オンライン通訳需要で弊社でも **ビデオ + 字幕** を扱うことが増えてきました。

これまでは少量であったので、地道に手作業でやっていましたが、せっかくなのでSRTファイルを作って省力化してしまおうと思い立ちました。

## 文字起こしをする

弊社では日本語の文字起こしの下書きに、[AmiVoice Cloud Platform](https://acp.amivoice.com/main/)を使用しています。

日本で作られたものなので、日本語に限ればやはりGoogleなどよりも精度が高いですね。

ゼロから書くのは大変なので[サンプルプログラム](https://acp.amivoice.com/main/manual/%e3%82%b5%e3%83%b3%e3%83%97%e3%83%ab%e3%83%97%e3%83%ad%e3%82%b0%e3%83%a9%e3%83%a0/)を微調整するだけです。

このサンプルプログラムを実行すると、音声認識されたJSONデータが取得できます。

[返却されるJSON](https://acp.amivoice.com/main/manual/i-f%E4%BB%95%E6%A7%98-http%E9%9F%B3%E5%A3%B0%E8%AA%8D%E8%AD%98api%E8%A9%B3%E7%B4%B0/#response)
| キー        | キー       | キー       | 説明                                                         |
| ----------- | ---------- | ---------- | ------------------------------------------------------------ |
| results     |            |            | 「発話区間の認識結果」の配列                                 |
|             | confidence |            | 信頼度(0～1の値。 0:信頼度低, 1:信頼度高)                    |
|             | starttime  |            | 発話開始時間 （音声データの先頭が0）                         |
|             | endtime    |            | 発話終了時間 （音声データの先頭が0）                         |
|             | tags       |            | 未使用（空配列）                                             |
|             | rulename   |            | 未使用（空文字）                                             |
|             | text       |            | 認識結果テキスト                                             |
|             | tokens     |            | 認識結果テキストの形態素の配列                               |
|             |            | written    | 形態素（単語）の表記                                         |
|             |            | confidence | 形態素の信頼度（認識結果の尤度）                             |
|             |            | starttime  | 形態素の開始時間 （音声データの先頭が0）                     |
|             |            | endtime    | 形態素の終了時間（音声データの先頭が0）                      |
|             |            | spoken     | 形態素の読み                                                 |
| utteranceid |            |            | 認識結果情報ID  *1                                           |
| text        |            |            | 「発話区間の認識結果」の全てを結合した全体の認識結果テキスト |
| code        |            |            | 結果を表す1文字のコード *2 [JSONに含まれるcodeとmessage一覧](https://acp.amivoice.com/main/manual/i-f仕様-http音声認識api詳細/#rescode)を参照のこと。 |
| message     |            |            | エラー内容を表す文字列 *2 [JSONに含まれるcodeとmessage一覧](https://acp.amivoice.com/main/manual/i-f仕様-http音声認識api詳細/#rescode)を参照のこと。 |

このJSONデータからtokensにあるstarttime、endtime、writtenを使ってSRT形式に整えていきます。

## Pythonファイルの編集
サンプルプログラムに少しだけ手を加えます。

まずは関数の自作部分。
日曜プログラマーなので、JSONから直接変換するだけの力がなく、中間データを作ることにしました。
字幕の分割規則については、まだ微調整が必要かと思います。

```python
# 頭の整理用に中間コンテンツを作成
def createMidContent(tokens):
	sub = ""
	stime = 0
	etime = 0
	subTitles = []
	delimiters = ["、", "。"]

	for token in tokens:
		if sub == "":
			stime = token["starttime"]

        # 句読点にあたったら字幕を分ける        
		if token["written"] not in delimiters:
			sub += token["written"]

		else:
			subTitles.append({
				"start": stime,
				"end": token["endtime"],
				"text": sub
			})
			sub = ""

        # 文字数が24文字を超えたら字幕を分ける
		if len(sub) > 25:
			subTitles.append({
				"start": stime,
				"end": token["endtime"],
				"text": sub
			})
			sub = ""

	subTitles.append({
		"start": stime,
		"end": tokens[-1]["endtime"],
		"text": sub
	})

	return subTitles


def timeForSRT(time, adding):
	time_ = time + adding
	ms_ = int(time_ % 1000)
	time_ = int((time_ - ms_) / 1000)
	sec_ = int(time_ % 60)
	time_ = int((time_ - sec_) / 60)
	mn_ = int(time_ % 60)
	time_ = int((time_ - mn_) /60)
	hr_ = int(time_ % 60)
	if ms_ < 10:
		ms = f"00{ms_}"
	elif ms_ < 100:
		ms = f"0{ms_}"
	else:
		ms = str(ms_)
			
	if sec_ < 10:
		sec = f"0{sec_}"
	else:
		sec = str(sec_)
			
	if mn_ < 10:
		mn = f"0{mn_}"
	else:
		mn = str(mn_)
			
	if hr_ < 10:
		hr = f"0{hr_}"
	else:
		hr = str(hr_)
	
	return f"{hr}:{mn}:{sec},{ms}"

def writeSRT(subTitles, nowStr):
	f = open(f"{nowStr}.srt", "w", encoding="utf-8")
	for i in range(len(subTitles)):
		if subTitles[i]["text"] == "":
			continue

		f.write(f"{i}\n")

		start = subTitles[i]["start"]
		startStr = timeForSRT(start, 0)
		end = subTitles[i]["end"]
		endStr = timeForSRT(end, 0)
		
		f.write(f"{startStr} --> {endStr}\n")
		
		text = subTitles[i]["text"]
		
		f.write(f"{text}\n\n")
		
	f.close()
```

次に、 *HrpSimpleTesterクラス* が最後に呼び出す *resultFinalizedメソッド* を書き換えます。

```python
class HrpSimpleTester(com.amivoice.hrp.HrpListener):
    # ~~~ 中略 ~~~
    # このメソッドを書き換える
    def resultFinalized(self, result):
		# 生のJSON文字列を保存
		nowStr = datetime.datetime.now().strftime("%m%d%H%M")
		f = open(f"./{nowStr}.json", "w", encoding="utf-8")
		f.write(result)
		f.close()

		# テキストのみも保存
		jData = json.loads(result)
		text = jData["results"][0]["text"]
		f = open(f"./{nowStr}.txt", "w", encoding="utf-8")
		f.write(text)
		f.close()

		# SRT形式に整形
		tokens = jData["results"][0]["tokens"]
		subTitles = createMidContent(tokens)
		writeSRT(subTitles, nowStr)
```

レスポンスは生のJSONデータ、テキストのみのデータ、SRTファイルでそれぞれ別に保存しておきます。

## インポート
最後に、生成されたSRTファイルを調整したり、翻訳したりして、動画編集ソフトにインポートするだけです。
Davinci Resolveであれば、メディアプールからビデオトラックにドロップするだけでした。

これまでの手作業から、かなりの効率化を実現しました。

## TODO
- 改めてコードをみると、write()を使っている場所に一貫性がないので、読みづらい……
- 字幕の区切りが文字数と句読点のみ。時間も考慮したい
- ミリ秒 → フレームレートの変換もしたい
- AmiVoiceは5分までしか一度に認識できないので、長尺動画用に複数ファイルの結合が必須
- 機械翻訳と接続もしたい！

ニューノーマル時代の字幕作成に幸あれ！

#### PR
<ad-text ad="py"></ad-text>

<ad-link ad="py"></ad-link>
<ad-link ad="py2"></ad-link>
<ad-link-box ad="audible"></ad-link-box>

<link-to></link-to>