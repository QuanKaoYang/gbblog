<template>
    <iframe
        style="width:120px;height:240px;"
        marginwidth="0"
        marginheight="0"
        scrolling="no"
        frameborder="0"
        :src="amazon">
    </iframe>
</template>

<script>
module.exports = {
    props: ['ad'],
    data() {
        return {
            links: {
                regexp: 'https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=477413404X&linkId=1e2a3a4553d9fbd9355fcd78c8318ba3&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
                ps: 'https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B082VRMNXV&linkId=ebdec427fc8abb893ab395a7477eb814&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
                py: 'https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=4758921881&linkId=a05bb1b9fe0a700bf8e7b90cd371c5eb&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
                py2: 'https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B0822PPQY4&linkId=b46ddb6389eb237d7ac74fb709261ac9&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
                js: 'https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=4048930737&linkId=ebcbc825de19292c3e128eb6053cca6f&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
                vue: 'https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B07X6F1C2P&linkId=5463808299d955a33915eddbd95246f7&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
                word: 'https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B081NVYJ1J&linkId=3ea5b606b96cbcd5246fc1afc41df9f9&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
                excel: 'https://rcm-fe.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=goldenbridg09-22&m=amazon&o=9&p=8&l=as1&IS1=1&detail=1&asins=B0832FNKL2&linkId=025ec725b1f6eca83e9e451a890bd4c2&bc1=000000&lt1=_blank&fc1=333333&lc1=0066c0&bg1=ffffff&f=ifr',
                
            }
        }
    },
    computed: {
        amazon() {
            return this.links[this.ad]
        }
    },
}
</script>