<template>
  <div>
    <ad-text :ad="ad" />
    <ad-link :ad="ad" />
    <ad-link v-if="ad2!==undefined" :ad="ad2" />
    <ad-link-box :ad="'audible'"/>
    <div id="admax-banner-926ba3c6-36d1-4bb0-a0d2-676873bc313b" style="display:inline-block;width:300px;height:250px;"></div>
  </div>
</template>

<script>
import adText from '../components/adText.vue'
import adLink from '../components/adLink.vue'
import adLinkBox from '../components/adLinkBox.vue'

export default {
  props: ['ad', 'ad2'],
  mounted() {
    window.admaxbanner = {
      admax_id:'admax-banner-926ba3c6-36d1-4bb0-a0d2-676873bc313b',
      tag_id:'0ae69dda1920fbfaf823372faa18df9c',
      type:'b',
      width:300,
      height:250
    }
    const ninjaScr = document.createElement('script')
    ninjaScr.setAttribute('src', "https://adm.shinobi.jp/st/s.js")
    document.getElementById("admax-banner-926ba3c6-36d1-4bb0-a0d2-676873bc313b").appendChild(ninjaScr)
  },
}
</script>