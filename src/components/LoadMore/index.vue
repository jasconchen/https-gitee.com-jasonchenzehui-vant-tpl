<template>
  <div class="load-more">
    <div class="van-list__loading" v-if="loading && !finished">
      <van-loading size="16">{{ loadingText }}</van-loading>
    </div>
    <div class="van-list__finished-text" v-if="finished">{{ finishedText }}</div>
  </div>
</template>

<script>
  export default {
    name: 'LoadMore',
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      finished: {
        type: Boolean,
        default: false
      },
      loadingText: {
        type: String,
        default: '加载中...'
      },
      finishedText: {
        type: String,
        default: '没有更多了'
      }
    }
  }
</script>

<style lang="less">
  .van-list__error-text, .van-list__finished-text, .van-list__loading {
    color: #969799;
    font-size: 14px;
    line-height: 50px;
    text-align: center
  }

  .van-list__placeholder {
    height: 0;
    pointer-events: none
  }
</style>
