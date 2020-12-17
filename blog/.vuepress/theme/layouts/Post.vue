<template>
  <div id="vuepress-theme-blog__post-layout">
    <div class="vuepress-blog-theme-content">
      <h1 class="post-title">{{ $frontmatter.title }}</h1>
      <PostMeta
        :tags="$frontmatter.tags"
        :author="$frontmatter.author"
        :date="$frontmatter.date"
        :location="$frontmatter.location"
      />
      
      <Content />
    </div>
    <Toc />
  </div>
</template>

<script>
import PostMeta from '@theme/components/PostMeta.vue'
import Toc from '@theme/components/Toc.vue'

const redirectList = {
  '/column/2020/01/13/outlook-templocation/' : 'https://catovis.com/archives/350',
  '/column/2020/01/07/select-paragraph/': 'https://catovis.com/archives/347',
  '/column/2020/01/11/input-hlafspace/': 'https://catovis.com/archives/347',
  '/column/2020/01/14/full2half/': 'https://catovis.com/archives/326',
  '/column/2020/01/08/find-edit-dialog/': 'https://catovis.com/archives/365',
  '/column/2020/03/04/excel-ctrl-r/':'https://catovis.com/archives/379',
  '/column/2020/02/21/editdistance/':'https://catovis.com/archives/434',
  '/pg/2020/01/02/gci2filelist/': 'https://catovis.com/archives/387',
  '/pg/2020/01/03/gci-cheatsheet/': 'https://catovis.com/archives/409',
  '/pg/2020/01/04/moving-file/': 'https://catovis.com/archives/417',
  '/pg/2020/01/05/rni-cheatsheet/': 'https://catovis.com/archives/419',
  '/pg/2020/01/06/printall/': 'https://catovis.com/archives/430',
  '/pg/2020/03/06/padleft/': 'https://catovis.com/archives/432',
}

function createShcemaOrg(path, fm) {
  console.log(fm)
  const script = []
  script.push({
    type: 'application/ld+json',
    innerHTML: JSON.stringify(
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.794562.xyz" + path
        },
        "headline": fm.title,
        "description": fm.description,
        "author": {
          "@type": "Person",
          "name": fm.author
        },  
        "datePublished": fm.date,
        "dateModified": fm.update !== undefined ? fm.update : fm.date,
      },
      null, 2,
    ),
  })

  if (redirectList[path] !== undefined) {
    script.push({
      type: 'text/javascript',
      innerHTML: `console.log('redirect');setTimeout(link(), 0);function link(){location.href='${redirectList[path]}';}`
    })
  }
  return { script }
}

export default {
  components: {
    PostMeta,
    Toc,
  },
  metaInfo() {
    return createShcemaOrg(this.$page.path, this.$frontmatter)
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.vuepress-blog-theme-content
  @extend $wrapper
  font-size 16px
  letter-spacing 0px
  font-family PT Serif, Serif
  color $textColor
  position relative

  @media (min-width: $MQNarrow)
    box-shadow 0 10px 20px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.07)

  .post-title
    padding-top 0

@media (max-width: $MQMobile)
  .vuepress-blog-theme-content
    padding-top 0

  .post-title
    margin-top 0
</style>
