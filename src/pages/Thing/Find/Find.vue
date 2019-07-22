<template>
  <div>
    <nav class="containerWrap">
      <nav class="navList">
        <ul>
          <li ref="tabList" v-for="(tab,index) in tabsData" :key="index" :class="isShowTab==index?'active':''" @click="tabClick(tab,index)">{{tab.tabName}}</li>
        </ul>
      </nav>
      <!--中间的内容部分-->
      <div class="navContentWrap">
        <section class="center" >
          <header v-for="(bigTop,index) in topicManual" :key="index">
            <!-- //右边是图片 -->
            <div class="style2" v-for="(tops,index) in bigTop.topics" :key="index">
              <section class="wrap">
                <div class="left">
                  <!-- 图片名称 -->
                  <h3>
                    <div>
                      <img :src="tops.avatar">
                    </div>
                    <span>{{tops.nickname}}</span>
                  </h3>
                  <!-- 标题 -->
                  <p class="big">{{tops.title}}</p>
                  <!-- 描述 -->
                  <p class="small">{{tops.subTitle}}</p>
                  <section>
                    <!-- 多少人看过 -->
                    <i class="iconfont icon-kanguo"></i>
                    <span>{{tops.topicId}}人看过</span>
                  </section>
                </div>
                <div class="right">
                  <img src="https://yanxuan.nosdn.127.net/c0359f2f05aaee841da5dc09bfa23362.jpg?imageView&quality=65&thumbnail=272y272">
                </div>
              </section>
            </div>

            <!-- //中间是图片 -->
            <div class="style1" v-for="(top,index) in bigTop.topics" :key="index">
              <section class="wrap">
                <!-- 图片昵称 -->
                <h3>
                  <div>
                    <img :src="top.avatar">
                  </div>
                  <span>{{top.nickname}}</span>
                </h3>
                <p>{{top.title}}</p>
                <!-- 大图片 -->
                <div class="bigImage">
                  <img :src="top.picUrl">
                </div>
                <footer>
                  <i class="iconfont icon-kanguo"></i>
                  <span>855254人看过</span>
                </footer>
              </section>
            </div>
          </header>
        </section>
      </div>
    </nav>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
 import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        isShowTab:0
      }
    },
    mounted(){
      this.$store.dispatch('getTabsDatas')
      this.$store.dispatch('getTopicManual')
      let wrapper = document.querySelector('.navList')
      this.$nextTick(()=>{

        this.Scroll = new BScroll(wrapper, {
        pullUpLoad: true,
        scrollX: true,
        click:true
      })
      })  
    },
    methods:{
      tabClick(tab,index){
        this.isShowTab = index
        console.log(index)
        // this.Scroll.scrollToElement(this.$refs.tabList[this.isShowTab],500)
      }
    },
    computed:{
      ...mapState(['tabsData','topicManual'])
    }
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .containerWrap
    padding-top 90px
    .navList
      width 100%
      overflow hidden
      border-bottom 1px solid #d9d9d9
      border-top 1px solid #d9d9d9
      background-color #fafafa
      position fixed
      top 88px
      left 0
      z-index 10
      ul
        display flex
        flex-wrap wrap
        font-size 28px
        height 74.5px
        line-height 74.5px
        width 1020px
        li
          // width 10px
          height 72px
          margin 0 28px
          color #7f7f7f
          box-sizing: border-box
          &.active
            color #b4282d
            border-bottom 4px solid #b4282d
    .navContentWrap
      padding-top 74.5px
      margin-top 10px
      .center
        position relative
        .style2
          .wrap
            display flex
            justify-content space-between
            padding 32px 30px
            margin-top 10px
            .left
              width 400px
              h3
                display flex
                height 54px
                line-height 54px
                div
                  width 54px
                  height 54px
                  border-radius 50%
                  overflow hidden
                  margin-right 12px
                  img
                    width 54px
                    height 54px
                span
                  font-size 28px
                  color #333
              .big
                color #333
                font-size 36px
                padding-top 32px
              .small
                color #7f7f7f
                font-size 28px
                padding-top 8px
              section
                margin-top 18px
                color #999
                i
                  font-size 30px
            .right
              height 272px
              width 272px
              border-radius 8px
              overflow hidden
              img
                height 272px
                width 272px
        .style1
          .wrap
            padding 32px 30px
            h3
              display flex
              height 54px
              line-height 54px
              margin-bottom 24px
              div
                width 54px
                height 54px
                border-radius 50%
                overflow hidden
                margin-right 12px
                img
                  width 54px
                  height 54px
              span
                font-size 28px
                color #333
            p
              font-size 32px
              color #333
              margin-bottom 16px
            .bigImage
              border-radius 8px
              overflow hidden
              img
                height 376px
                width 690px
            footer
              margin-top 10px
              color #999
              span
                font-size 28px
              i
                font-size 30px
 
</style>
