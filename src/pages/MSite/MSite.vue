<template>
  <header class="header-container" @click.prevent>
    <!-- 头部 -->
    <div class="header">
      <!-- 头部上 -->
      <div class="header-search-login" @click.prevent>
        <span class="logo"></span>
        <div class="searchInput">
          <i class="iconfont icon-sousuo"></i>
          <span class="placeholder" @click="$router.replace('/search')">搜索商品，共225544款好物</span>
        </div>
        <button @click="$router.replace('/profile')">登录</button>
      </div>
      <!-- 头部下 -->
      <div class="header-nav">
        <div class="header-nav-left" ref="left">
          <ul class="header-nav-ul">
            <li ref='listNav' class="header-nav-li" v-for="(item,index) in navList" :key="index" :class="activeClass == index ? 'active' : ''" @click="handles(item,index)">{{item}}</li>
          </ul>
        </div>
        <div class="header-nav-slider">
          <div class="header-nav-rightkong"></div>
          <div class="header-nav-right iconfont icon-xiala" @click="setMaskShow"></div>
        </div>
      </div>
      
    </div>
    <!-- 头部隐藏 -->
    <div class="tabWrap" v-show="isShow">
      <div class="tabAlter">全部频道</div>
      <div class="tabRight">
        <div class="header-nav-rightkong"></div>
        <div class="header-nav-right iconfont icon-shangjiantou1"  v-show="isShow" @click="setMaskShow"></div>
      </div>
      <ul class="moreList">
        <li class="header-nav-list" v-for="(item,index) in navList" :key="index" :class="activeClass== index ? 'active' : ''"  @click="handleHiddle(index)">{{item}}</li>
      </ul>
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

    <!-- 网易自营 -->
    <div class="proprietary">
      <ul class="threePro">
        <li class="item" v-for="(iconDesc,index) in msiteData.policyDescList" :key="index">
          <a href="">
            <img :src="iconDesc.icon" alt="">
            <span>{{iconDesc.desc}}</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- 大的列表 -->
    <div class="big-lists">
      <!-- 第一屏 10个图加文字 -->
      <div class="first-big-list">
        <div class="swiper-container">
          <div class="first-small-list swiper-wrapper">
            <ul class="swiper-slide" v-if="msiteData.kingKongModule">
              <!-- 图片加文字 -->
              <li class="first-small-list-item" v-for="(picture,index) in msiteData.kingKongModule.kingKongList" :key="index">
                <div class="icon">
                  <img :src="picture.picUrl" alt="">
                </div>
                <div class="txt">{{picture.text}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 网易员工精选 -->
      <div class="sift">
        <a href="javascript:;" class="siftPicture">
          <img src="https://yanxuan.nosdn.127.net/9e2248500f961bfe0e872027776b1e79.gif">
        </a>
      </div>
      <!-- 9.9元超值专区 -->
      <div class="nineArea">
        <a href="" v-for="(material,id) in msiteData.tagList" :key="id">
          <div class="title">{{material.name}}</div>
          <div class="descri">{{material.floorPrice}}</div>
          <div class="images">
            <img src="https://yanxuan.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
            <img src="https://yanxuan.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">    
          </div>
        </a>
        
      </div>
      <!--私人定制轮播-->
      <section class="personalTailor">
        <h3>私人定制</h3>
        <div class="swiper-container personalSwiper">
          <!-- <ul class="swiper-wrapper">
            <li class="swiper-slide">
              <div class="smallLi" v-for="(shops,index) in msiteData.personalShop" :key="index">
                <img :src="shops.primaryPicUrl" alt="">
                <span>{{shops.name}}<i>¥{{shops.counterPrice}}</i></span>
              </div>
            </li>
          </ul> -->
          <!-- 如果需要分页器 -->
          <!-- <div class="swiper-pagination"></div> -->
        </div>
      </section>
    </div>

  </header>
</template>

<script type="text/ecmascript-6">
  import {mapState} from "vuex"
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: 'MSite',
    data(){ 
      return {
        isShow:false,
        activeClass: 0,
        navList:["推荐","居家生活","服饰鞋包","美食酒水","个护清洁","母婴亲子","运动旅行","数码家电","全球特色"],
        smallArr:[],
        bigArr:[]
      }
    },
    
    mounted(){
      this.$store.dispatch('getMsiteData')
      // let wrapper = document.querySelector('.header-nav-left')
      this.$nextTick(()=>{
        this.Scroll = new BScroll(this.$refs.left, {
          pullUpLoad: true,
          scrollX: true,
          click:true
        })
      })
      
      let mySwiper = new Swiper ('.swiper-container', {
        loop: true, 
        autoplay: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      })

    },
    methods:{
      handles(item,index){
        this.activeClass = index
        console.log(index)   //3
        // this.Scroll.scrollToElement(this.$refs.listNav[index],500)
        console.log(this.Scroll)
        // console.log(this.$refs.listNav[index])   //点击的这个li标签整体(包括文本)
        // console.log(this.$refs.listNav)   //所有的li标签
      },
      handleHiddle(index){
        this.activeClass = index
      },
      setMaskShow(){
        this.isShow = !this.isShow
      }
    },
    computed:{
      ...mapState(['msiteData'])
    } ,
    updated(){
      this.$nextTick(()=>{
        this.Scroll.scrollToElement(this.$refs.listNav[this.activeClass],500)
      })
    } 
  }
  
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'

  .header-container
    position relative
    width 100%
    z-index 100
    //头部
    .header
      position fixed
      top 0
      left 0
      width 750px
      height 148px
      z-index 800
      background white

      //头部上
      .header-search-login
        position absolute
        top 0
        left 0
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
     
      //头部下
      .header-nav
        position absolute
        top 88px
        left 0
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
          float right
          width 148px
          height 60px
          text-align center
          line-height 60px
          background #fff
          font-size 30px
          display flex
          justify-content: center
          align-items: center
          margin-top -60px
          .header-nav-rightkong
            float left
            width 48px
            height 60px
            background #fff
            z-index 10000
          .header-nav-right
            float right
            width 100px
            height 60px
            background #fff
            font-size 30px
            justify-content: center
            align-items: center
    //头部隐藏
    .tabWrap
      position absolute
      top 88px
      left 0
      width 750px
      height 1334px
      background: rgba(0,0,0,0.3)
      z-index 999
      .tabAlter
        width 100%
        height 60px
        line-height 60px
        background white
        font-size 28px
        padding-left .4rem
      .tabRight
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
          float left
          width 48px
          height 60px
          background #fff
          z-index 10000
        .header-nav-right
          float right
          width 100px
          height 60px
          background #fff
          font-size 30px
          justify-content: center
          align-items: center
      .moreList
        width 100%
        height 312px
        background white
        padding-top: .32rem
        .header-nav-list
          width 150px
          height 56px
          line-height 56px
          text-align center
          float left 
          margin-bottom .53333rem
          margin-left .4rem
          background #FAFAFA
          border-radius .05333rem
          border 1px solid #FAFAFA
          &.active
            color #b4282d
            border 1px solid red
      
    
    //轮播
    .firstSwiper
      position absolute
      top 148px
      left 0
      width 750px
      height 370px
      z-index 0
      .swiper-wrapper
        .swiper-slide
        img
          width 750px
          height 370px

    //网易自营
    .proprietary
      position absolute
      top 518px
      left 0
      width 750px
      height 72px
      background #fff
      .threePro
        width 750px
        height 72px
        padding 0px 30px
        display flex
        justify-content center
        align-items center
        box-sizing border-box
        .item
          width 227px
          height 36px
          float left
          a
            width 220px
            height 32px
            display flex
            background-repeat: no-repeat;
            display: inline-block;
            img 
              width 32px
              height 32px
              line-height 32px
              vertical-align: middle
              display: inline-block;
            span 
              font-size 24px
              color #333333
              margin 0 0 0 8px
              display: inline-block;
              vertical-align: middle
    //大的列表
    .big-lists
      position absolute
      top 590px
      left 0
      width 750px
      height 1072px 
      background white
      //第一屏
      .first-big-list
        width 750px
        height 1073px
        margin-bottom: .26667rem;
        .swiper-container
          height 372px
          margin 0 0 32px
          display flex
          .first-small-list
            width 2250px
            height 340px
            .swiper-slide
              position relative
              width 750px
              height 340px
              background #fff
              display flex
              flex-wrap wrap
              .first-small-list-item
                width 110px
                height 156px
                margin 10px 20px 9px
                .icon
                  width 110px
                  height 110px
                  img 
                    width 110px
                    height 110px
                .txt
                  line-height 36px
                  color #333333
                  font-size 24px
                  margin 10px 0 0
                  white-space: nowrap
                  text-align: center
      //网易员工精选
      .sift
        position absolute
        top 372px
        left 0
        width 100%
        .siftPicture
          width 100%
          display block
          img
            width 100%
                
    
      //9.9元超值专区
      .nineArea
        position absolute
        top 499px
        left 0
        width 100%
        height 576px
        // background #ffffff
        margin 0 0 20px
        padding 10px 30px 30px 26px
        box-sizing border-box
        a
          width 343px
          height 264px
          background #f5f5f5
          margin 4px 0 0 4px
          padding 20px 0 0 20px
          display block 
          border-radius 4px
          float left
          box-sizing border-box
          .title
            width 323px
            height 48px
            color black
            font 32px
            padding 0 0 0 10px
            .descri
              width 300px
              height 36px
              color #7f7f7f
              font 24px
              padding 0 0 0 20px
            .images
              width 323px
              height 150px
              img
                width 100px
                height 100px
                float left 
                margin 0 4px 0 0
                display block  
      //私人定制
      .personalTailor
        overflow hidden
        margin-bottom 30px
        h3
          height 100px
          line-height 100px
          font-size 32px
          padding-left 30px
        .swiper-container
          height 380px
          width 750px
          ul
            width 600px
            height 310px
            display flex
          li
            width 750px
            display flex
            .smallLi
              display flex
              flex-direction column
              margin-left 14.5px
              padding 0 7px
              span
                width 210px
                i
                  color $main
              img
                background-color #f5f5f5
                height 216px
                width 220px
                margin-bottom 12px


</style>
