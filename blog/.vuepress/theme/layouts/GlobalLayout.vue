<template>
  <div id="vuepress-theme-blog__global-layout">
    <Header />
    <MobileHeader
      :is-open="isMobileHeaderOpen"
      @toggle-sidebar="isMobileHeaderOpen = !isMobileHeaderOpen"
    />
    <div class="content-wrapper" @click="isMobileHeaderOpen = false">
      <div id="content-with-catovis" v-if="!isHome">
          <DefaultGlobalLayout />
      </div>

      <div id="content-with-twitter" v-if="isHome">
        <div id="main-home">
          <DefaultGlobalLayout />
        </div>
        <div id="twitter-content">
          <twitter-box />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue'
import Header from '@theme/components/Header.vue'
import MobileHeader from '@theme/components/MobileHeader.vue'
import Footer from '@theme/components/Footer.vue'
import TwitterBox from '@theme/components/TwitterBox.vue'

export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    Header,
    MobileHeader,
    Footer,
    TwitterBox,
  },

  data() {
    return {
      isMobileHeaderOpen: false,
    }
  },

  computed: {
    isHome() {
      return this.$frontmatter.home
    },
    isDesktopHome() {

    },
  },

  mounted() {
    // console.log(this.$frontmatter)
    this.$router.afterEach(() => {
      this.isMobileHeaderOpen = false
    })
  },
}
</script>

<style lang="stylus">
#vuepress-theme-blog__global-layout
  word-wrap break-word

@media (min-width: 900px)
  div#content-with-twitter
    display grid
    grid-template-columns 0.7fr 0.3fr

  div#main-home
    grid-column 1/2

  div#twitter-content
    grid-column 2/3
    bottom 10px
    right 10px
    padding 6px 40px

.content-wrapper
  padding 160px 15px 80px 15px
  min-height calc(100vh - 80px - 60px - 160px)
  max-width $contentWidth
  margin 0 auto

  @media (max-width: $MQMobile)
    &
      padding 100px 15px 20px 15px
      min-height calc(100vh - 20px - 60px - 100px)
</style>
