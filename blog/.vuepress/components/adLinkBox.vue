<template>
    <iframe
        style="width:300px;height:250px;"
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
                audible: 'https://rcm-fe.amazon-adsystem.com/e/cm?o=9&p=12&l=ur1&category=audible&banner=04TW4TSNDNB96FMCBT82&f=ifr&linkID=faa8bbe97dd893a353431f67f901efd3&t=goldenbridg09-22&tracking_id=goldenbridg09-22',
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