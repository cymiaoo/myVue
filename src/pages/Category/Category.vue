<template>
 <section class="category">
    <!-- 头部 -->
    <section class="categoryHeader" @click="$router.replace('/search')">
      <span class="icon-search"></span>
      <span class="input">搜索商品,共xxx款好物</span>
    </section>
    <!-- 列表 -->
    <div class="containerWrap">
      <!--左侧-->
      <section class="nav" v-if="catagoryData.categoryL1List">
        <ul>
          <li  ref="leftNav" v-for="(item,index) in catagoryData.categoryL1List" :key="index" :class="activeClass===index?'active':''" @click="leftClick(index)">{{item.name}}</li>
          <li>推荐专区</li>
        </ul>
      </section>
      <!--右侧-->
      <section class="container" v-if="catagoryData.categoryL1List">
        <div>
          <img :src="catagoryData.categoryL1List[activeClass].wapBannerUrl" alt="">
          <ul>
            <li v-for="(listItem) in catagoryData.categoryL1List[activeClass].subCateList" :key="listItem.name">
              <img :src="listItem.wapBannerUrl">
              <span>{{listItem.name}}</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import Bscroll from 'better-scroll'
 export default {
  name:'Category',
  data(){
    return {
      activeClass: 0
    }
  },
  async mounted(){
    await this.$store.dispatch('getCatagoryData')
    let wrapper = document.querySelector('.nav')
    let wrapperCon = document.querySelector('.container')
    this.$nextTick(()=>{
      this.Scroll = new Bscroll(wrapper, {
          pullUpLoad: true,
          click:true
      }),
      this.RScroll = new Bscroll(wrapperCon, {
        pullUpLoad: true,
        // startY
      })
    }) 
  },
  methods:{
    leftClick(index){
      this.activeClass = index
      // this.Scroll.scrollToElement(this.$refs.leftNav[index],500)
    }
  },
  computed:{
    ...mapState(['catagoryData'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .category
    // 头部
    .categoryHeader
      position fixed
      top 0
      left 0
      width 100%
      height 88px
      line-height 88px
      padding 16px 30px
      vertical-align middle
      display flex
      align-items center
      z-index 30
      background-color #fff
      border-bottom 1px solid #eee
      box-sizing border-box
      .input
        height 56px
        line-height 56px
        width 675px
        font-size 28px
        background-color #ededed
        margin 0 8px 0 10px
        text-align center
        border-radius 2px
        color #666
        text-indent 28px
      .icon-search
        position absolute
        left 200px
        top 30px
        width 28px
        height 28px
        background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png") no-repeat
    //列表
    .containerWrap
      padding-top 88px
      display flex
      //左侧
      .nav
        height 1140px
        margin-top 20px
        ul
          width 162px
          li
            height 50px
            line-height 50px
            text-align center
            color #7e8c8d
            margin-top 40px
            font-size 28px
            border-left 6px solid white
            &:first-child
              margin-top 0
          .active
            border-left 6px solid #b4282d
            color #b4282d
      //右侧
      .container
        width 588px
        height 850px
        padding 20px 30px 100px 30px
        img
          width 528px
          height 192px
        ul
          display flex
          flex-wrap wrap
          li
            width 144px
            height 216px
            margin-right 32px
            display flex
            flex-direction column
            img
              height 144px
              width 144px
            span
              font-size 28px
              text-align center
</style>