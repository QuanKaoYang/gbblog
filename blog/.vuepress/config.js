module.exports = {
  theme: '@vuepress/blog',
  title: 'IT Solutions @ Goldenbridge',
  dest: 'docs/',
  base: '/vue-press/',
  themeConfig: {
    dateFormat: 'YYYY年MM月DD日',
    nav: [
      { text: '自然言語処理', link: '/nlp/', },
      { text: 'PowerShell', link: '/ps/', },
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
      },
    ]
  },
}
