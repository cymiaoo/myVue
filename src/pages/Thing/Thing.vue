<template>
 <section class="thing">
    <header>
      <i class="iconfont icon-shouye" @click="$router.replace('/msite')"></i>
      <div class="title">
        <span :class="{active:$route.path==='/things/find'}"  @click="$router.push('/things/find')">发现</span>
        <span :class="{active:$route.path==='/things/choose'}" @click="$router.push('/things/choose')">甄选家</span>
      </div>
      <div class="rightIcon">
        <i class="iconfont icon-sousuo" @click="$router.replace('/search')"></i>
        <i class="iconfont icon-xiazai3" @click="$router.replace('/shopcar')"></i>
      </div>
    </header>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </section>
</template>

<script type="text/ecmascript-6">
import Find from './Find/Find.vue'
import Choose from './Choose/Choose.vue'
export default {
 
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .thing
    width 750px
    header
      position fixed
      left 0
      top 0
      width 750px
      height 88px
      line-height 88px
      padding 0 24px
      box-sizing border-box
      display flex
      display flex
      background-color #fafafa
      z-index 10
      .icon-shouye
        font-size 50px
        justify-content center
        align-items center
      .rightIcon
        flex 1
        position absolute
        top 0
        right 20px
        i
          font-size 46px
        .icon-sousuo
          margin-left 50px
          margin-right 30px
      .title
        justify-content center
        display flex
        margin-left 180px
        span
          display block
          height 85px
          font-size 28px
          margin-right 60px
        .active
          color #b4282d
          font-weight bold
          font-size 40px
</style>
