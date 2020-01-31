module.exports = {
  theme: '@vuepress/blog',
  title: 'ITブログ @ GB',
  description: 'ゴールデンブリッジのITやアプリケーション、各種ソフトウェア操作のノウハウを集めています',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/yakuhanjp@3.0.0/dist/css/yakuhanrp.min.css'}],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/earlyaccess/mplus1p.css' }]
  ],
  dest: 'output/',
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-155988647-3'
      },
    ],
  ],
  themeConfig: {
    dateFormat: 'YYYY年MM月DD日',
    nav: [
      { text: '小ネタ・小技', link: '/tips/', },
      { text: 'VBA & Add-in', link: '/vbajs/', },
      { text: 'PowerShell', link: '/ps/', },
      { text: '自然言語処理', link: '/nlp/', },
      { text: '実験', link: '/exam/', },
      { text: 'コラム', link: '/column/', },
      { text: 'CATOVIS', link: '/catovis/', },
      { text: 'タグ一覧', link: '/tag/', },
    ],
    footer: {
      contact: [
        { type: "web", link: "http://www.goldenbridge2002.com" }
      ],
      copyright: [
        {
          text: 'プライバシーポリシー',
          link: '/privacy',
        },
        {
          text: 'Copyright © 2020 Goldenbridge Inc.',
          link: 'http://www.goldenbridge2002.com',
        },
      ],
    },
    lengthPerPage:'1', // Maximum number of posts per page.
    layout:'Pagination', // Layout for pagination page
    smoothScroll: true,
    directories: [
      {
        id: 'tips',
        dirname: '_Tips',
        path: '/tips/',
        itemPermalink: '/tips/:year/:month/:day/:slug',
        pagination: {
          lengthPerPage: 5,
          prevText:'次', // Text for previous links.
          nextText:'前', // Text for next links.
        },
      },
      {
        id: 'vbajs',
        dirname: '_VBA_Add-in',
        path: '/vbajs/',
        itemPermalink: '/vbajs/:year/:month/:day/:slug',
        pagination: {
          lengthPerPage: 5,
          prevText:'次', // Text for previous links.
          nextText:'前', // Text for next links.
        },
      },
      {
        id: 'ps',
        dirname: '_powershell',
        path: '/ps/',
        itemPermalink: '/ps/:year/:month/:day/:slug',
        pagination: {
          lengthPerPage: 5,
          prevText:'次', // Text for previous links.
          nextText:'前', // Text for next links.
        },
      },
      {
        id: 'nlp',
        dirname: '_nlp',
        path: '/nlp/',
        itemPermalink: '/nlp/:year/:month/:day/:slug',
        pagination: {
          lengthPerPage: 5,
          prevText:'次', // Text for previous links.
          nextText:'前', // Text for next links.
        },
      },
      {
        id: 'column',
        dirname: '_column',
        path: '/column/',
        itemPermalink: '/column/:year/:month/:day/:slug',
        pagination: {
          lengthPerPage: 5,
          prevText:'次', // Text for previous links.
          nextText:'前', // Text for next links.
        },
      },
      {
        id: 'exam',
        dirname: '_exam',
        path: '/exam/',
        itemPermalink: '/exam/:year/:month/:day/:slug',
        pagination: {
          lengthPerPage: 5,
          prevText:'次', // Text for previous links.
          nextText:'前', // Text for next links.
        },
      },
      {
        id: 'cat',
        dirname: '_CATOVIS',
        path: '/catovis/',
        itemPermalink: '/catovis/:year/:month/:day/:slug',
        pagination: {
          lengthPerPage: 5,
          prevText:'次', // Text for previous links.
          nextText:'前', // Text for next links.
        },
      },
    ]
  },
}
