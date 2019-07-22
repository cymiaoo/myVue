<template>
  <div>
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
    <section class="wrap">
      <div class="left">
        <!-- 标题 -->
        <p class="big">你希望严选推出哪些方便菜肴呢？</p>
        <!-- 描述 -->
        <p class="small">鲜粹每日坚果</p>
        <section>
          <!-- 多少人看过 -->
          <i class="iconfont icon-kanguo"></i>
          <span>8855人看过</span>
          <i class="iconfont icon-kanguo"></i>
          <span>8855人看过</span>
        </section>
      </div>
      <div class="right">
        <img src="https://yanxuan.nosdn.127.net/c0359f2f05aaee841da5dc09bfa23362.jpg?imageView&quality=65&thumbnail=272y272" alt="">
      </div>
    </section>

  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default{
    mounted(){
      let mySwiper = new Swiper ('.swiper-container', {
        loop: true, 
        autoplay: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  //轮播
  .firstSwiper
    position absolute
    top 100px
    left 0
    width 750px
    height 370px
    z-index 0
    .swiper-wrapper
      .swiper-slide
      img
        width 750px
        height 370px
  .wrap
    justify-content space-between
    padding 500px 30px
    display flex
    .left
      width 400px
      .big
        color #333
        font-size 36px
        padding-top 32px
      .small
        color #7f7f7f
        font-size 28px
        padding-top 8px
        margin-top 5px
      section
        margin-top 18px
        color #999
        i
          font-size 30px
          margin-right 10px
    .right
      height 272px
      width 272px
      border-radius 8px
      overflow hidden
      img
        height 272px
        width 272px
 
</style>