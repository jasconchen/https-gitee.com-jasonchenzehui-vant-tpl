<template>
  <div class="lang-selector">
    <van-button type="primary" size="mini" :disabled="language === 'zh'" @click="handleSetLanguage('zh')">中文
    </van-button>
    <divider type="vertical"></divider>
    <van-button type="info" size="mini" :disabled="language === 'en'" @click="handleSetLanguage('en')">English
    </van-button>
  </div>
</template>

<script>
  // vuex
  import {mapGetters, mapActions} from 'vuex'
  // components
  import Divider from '@/components/Divider'

  export default {
    name: 'lang-selector',
    computed: {
      ...mapGetters([
        'language'
      ])
    },
    methods: {
      handleSetLanguage(lang) {
        this.$i18n.locale = lang
        this['app/SetLanguage'](lang)
        this.$toast('Switch Language Success')
      },
      ...mapActions([
        'app/SetLanguage'
      ])
    },
    components: {
      Divider
    }
  }
</script>

<style lang="less">

</style>
