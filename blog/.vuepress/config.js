module.exports = {
  theme: '@vuepress/blog',
  title: 'IT Solutions @ Goldenbridge',
  dest: 'output/',
  themeConfig: {
    dateFormat: 'YYYY年MM月DD日',
    nav: [
      { text: '小ネタ・小技', link: '/tips/', },
      { text: 'VBA & Add-in', link: '/vbajs/', },
      { text: 'PowerShell', link: '/ps/', },
      { text: '自然言語処理', link: '/nlp/', },
      { text: '実験', link: '/exam/', },
      { text: 'レビュー', link: '/review/', },
      { text: 'CATOVIS', link: '/catovis/', },
      { text: 'タグ一覧', link: '/tag/', },
    ],
    footer: {
      contact: [
        { type: "web", link: "http://www.goldenbridge2002.com" }
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
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
        id: 'rev',
        dirname: '_Review',
        path: '/review/',
        itemPermalink: '/review/:year/:month/:day/:slug',
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
