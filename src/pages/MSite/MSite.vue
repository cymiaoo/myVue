<template>
  <header class="header-container" @click.prevent>
    <!-- 头部上 -->
    <div class="header-search-login" @click.prevent>
      <span class="logo"></span>
      <div class="searchInput">
        <i class="iconfont icon-sousuo"></i>
        <span class="placeholder" @click="$router.replace('/search')">搜索商品，共225544款好物</span>
      </div>
      <button>登录</button>
    </div>
    <!-- 头部下 -->
    <div class="header-nav">
      <!-- 头部下一 -->
      <div class="header-nav-left">
        <ul class="header-nav-ul">
          <li class="header-nav-li" v-for="(item,index) in navList" :key="index" :class="activeClass == index ? 'active' : ''" @click="handles(item,index)">{{item}}</li>
        </ul>
      </div>
      <div class="header-nav-slider">
        <div class="header-nav-rightkong"></div>
        <div class="header-nav-right iconfont icon-xiala"></div>
      </div>
    </div>
    <!--轮播-->
    <div class="firstSwiper swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/ea5fde8d19b12c0e252365e713520cd6.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/8ceaa8053baf2056334e166493e9eaab.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/9a98a10f260bcde62951a36ac43b2f92.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: 'MSite',
    data(){
      return {
        activeClass: 0,
        navList:["推荐","居家生活","服饰鞋包","美食酒水","个护清洁","母婴亲子","运动旅行","数码家电","全球特色"]
      }
    },
    
    mounted(){
      let wrapper = document.querySelector('.header-nav-left')
      let bs = new BScroll(wrapper, {
        pullUpLoad: true,
        scrollX: true,
      })

      let mySwiper = new Swiper ('.swiper-container', {
        loop: true, 
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    },
    methods:{
      handles(item,index){
        console.log(index)
        this.activeClass = index
        scrollToElement(item[index])
      }
    }
  }  
    
  
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .header-container
    position relative
    height 150px
    width 100%
    z-index 100
    .header-search-login
      display flex
      justify-content space-around
      align-items center
      width 100%
      height 88px
      font-size 30px
      padding 28px
      box-sizing border-box
      .logo
        width 140px
        height 40px
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
        background-repeat no-repeat
        background-size 138px 40px
        margin-right 10px
      .searchInput
        flex 7
        height 56px
        background #ededed
        border-radius 10px
        border none
        text-align center
        line-height 56px
        i
          font-size 30px
          margin-right 5px
        .placeholder
          font-size 26px
          color #666
      button
        flex 1
        float left
        width 74px
        height 40px
        margin-left 10px
        font-size 24px
        border-radius 10px
        outline 0
        color #b4282d
        border 1px solid #b4282d
        background-color #fff
        padding 0
    .header-nav
      position relative
      width 750px
      height 60px
      box-sizing: border-box
      .header-nav-left
        width 650px
        height 60px
        overflow hidden
        ul
          width 1450px
          height 60px
          font-size 28px
          clearFix()
          white-space:nowrap
          color #333
          li
            float left
            height 60px
            line-height 60px
            margin-left 20px
            padding 0px 16px
            text-align center
            box-sizing: border-box
            &.active
              border-bottom 4px solid #b4282d
              color #b4282d   
      .header-nav-slider
        position absolute
        top 0
        right 0
        width 160px
        height 60px
        text-align center
        line-height 60px
        background #fff
        font-size 30px
        display flex
        justify-content: center
        align-items: center
        .header-nav-rightkong
          width 60px
          height 60px
          background #fff
        .header-nav-right
          width 100px
          height 60px
          background #fff
          font-size 30px
          justify-content: center
          align-items: center
          margin-top 10px
    .firstSwiper
        width 750px
        height 370px
      .swiper-wrapper
        .swiper-slide
          img
            width 750px
            height 370px
</style>
