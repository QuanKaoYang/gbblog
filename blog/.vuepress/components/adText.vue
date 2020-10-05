<template>
    <div>
        <p>翻訳支援ツール CATOVIS SUITE 無料公開中</p>
        <a href="https://catovis.com" target="_blank">
            <img src="/catovis-logo-with-title.png" width="480px" />
        </a>
        <p>{{ links[ad] }}</p>
    </div>
</template>

<script>
module.exports = {
    props: ['ad'],
    data() {
        return {
            links: {
                egexp: '翻訳者なら正規表現は覚えておいて損はない！まずはここから',
                ps: 'ここで紹介するPowerShellの小技をまとめました！',
                py: 'pythonで自然言語処理を始めるのに最適な本を紹介します。',
                js: 'JavaScript 至極の入門書！すぐに動かして楽しめるVue/Nuxtもオススメ！',
                word: 'Wordの使い方を初歩から徹底的に勉強したい人向けの本を紹介します。',
                excel: 'Excel VBAを使って一括置換ツールを作りたい！そんなニーズに特化した翻訳者向けのVBA入門書です。',
                
            }
        }
    },
}
</script>