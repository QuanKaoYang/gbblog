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

function createShcemaOrg(path, fm) {
  console.log(fm)
  return {
    script: [
      {
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
      },
    ], 
  }
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
