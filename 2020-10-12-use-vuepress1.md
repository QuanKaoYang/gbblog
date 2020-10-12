---
title: 会社WebサイトのVuepress化に挑戦（その１）
date: 2020-10-12
tags: 
    - Vuepress
author: 電氣羊 @ Goldenbridge
location: Osaka
---

## はじめに

弊社のWebサイトは現在[こんな感じ](https://goldenbridge2002.com)なのですが、数年前につくったところもあり、モバイル対応しきれていない部分や、日本語・中国語で同期していない部分もあります。

中国からのお客様は特にそうなのですが、今はPCよりもスマホで検索をすることが増えていますので、**Vuepress** で作り直してみようかと社内プロジェクトを立ち上げました。

## なぜVuepressなのか

1. IT担当者の電氣羊がVue.jsの狂信者だから
2. i18nで多言語対応したいから
3. 細かな変更に、マークダウン+Gitでバージョン管理をできるようにしたいから

３点挙げていますが、80％くらいは **1.**によるものです。

ただ、電氣羊はフロントエンドの ~~センス~~ 経験があまりないので、本当に完成できるのか、本稿執筆時点ではまだ未知数です。

## 構築の準備

まずはVuepressのプロジェクトと、Gitのリポジトリを作成するところから。

GithubでNode.js用の空のリポジトリを作ってクローンし、そこから始めます。

質問が表示されるので、適当に記入していきます。

```bash
yarn add vuepress
yarn create vuepress-sit
? What's the name of your project? gbsite
? What's the description of your project? Website of Goldenbridge
? What's your email? xxxxx@goldenbridge2002.com
? What's your name? DianziYang
? What's the repo of your project?
```

これで
```bash
src
  ├─.vuepress
  │  ├─components
  │  │  └─Foo
  │  │  └─demo-component.vue
  │  │  └─OtherComponent.vue
  │  ├─styles
  │  │  └─index.styl
  │  │  └─palette.styl
  │  ├─config.js
  │  └─enhanceApp.js
  ├─config
  │  └─README.md
  ├─guide
  │  ├─README.md
  │  └─using-vue.md
  └─index.md
```

というフォルダ構造が作成されます。

この時点で一度、***git push*** しておきます。

## 起動テスト

package.json をみると

```json
"scripts": {
	"dev": "vuepress dev src",
    "build": "vuepress build src"
},
```

となっているので、***yarn dev*** を動かしてみます。

一分ほど待つと、Vuepressのデモサイトが立ち上がります（localhost:8080）。

![img](/pict/vuepress/vuepress1.png)

src直下のindex.mdがトップページに、

src内のconfigフォルダとguideフォルダが、それぞれlocalhost:8080/config/とlocalhost:8080/guide/に対応しています。

このsrcフォルダの内容を書き換えて、コーポレートサイトをつくっていきます。

## サイトマップをつくる

本格的に書き換える前に、サイトマップを作ってくれるプラグインを入れておきます。

```bash
yarn add vuepress-plugin-sitemap
```

続いて、src/.vuepress にある config.jsを書き換えます。

```src/.vuepress/config.js
// module.exports内に追記
plugins: [
	'@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
+   [
+     'sitemap',
+     { 'hostname': 'https://goldenbridge2002.com'}
+   ],
]
```

ついでにナビゲーションバーも書き換えておきました。

```src/.vuepress/config.js
// module.exports内のthemeConfig.navを書き換える
nav: [
      {
        text: '会社概要',
        link: '/company/',
      },
      {
        text: '翻訳サービス',
        link: '/translation/'
      },
      {
        text: '通訳サービス',
        link: '/interpretation/'
      },
      {
        text: 'インバウンド',
        link: '/inbound/'
      },
      {
        text: '人材紹介',
        link: '/recruit/'
      },
      {
        text: 'その他',
        link: '/other/'
      }
    ],
```
navは **{text: string, link: string}** の配列になっているので、ここを現状のサイトに合わせて修正します。

これでヘッダーメニューの書き換えに成功しました。

![img](/pict/vuepress/vuepress2.png)

今回は一旦ここまでで。

#### PR

<ad-set :ad="'js'" :ad2="'vue'"/>

<link-to></link-to>