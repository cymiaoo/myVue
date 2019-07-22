<template>
  <div id="searchWrap">
    <section class="searchHeader">
      <input class="input" type="text" placeholder="请输入">
      <span class="icon-search"></span>
      <div class="delete">x</div>
      <span class="cancel" @click="$router.replace('/profile')">取消</span>
    </section>
    <div class="hot">热门搜索</div>
    <section class="list">
      <ul>
        <li>ghjuyhgbf</li>
      </ul>
    </section>
    <section class="searchList">
      <ul>
        <li></li>
      </ul>
    </section>
  </div>
</template>
<script>
  export default {
    
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #searchWrap
    .searchHeader
      display flex
      margin 20px 0 0 30px
      .input
        width 600px
        height 56px
        padding-left 60px
        line-height 56px
        background-color #f4f4f4
        font-size 28px
        color #666
        position relative
        margin-right 20px
        outline none
      .icon-search
        width 60px
        height 56px
        background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png") no-repeat
        background-position 20px 15px
        position absolute
        left 34px
        top 18px
      .cancel
        line-height 56px
        font-size 28px
        white-space nowrap
        margin-right 25px
      .delete
        width 30px
        height 30px
        line-height 30px
        background-color #ccc
        position absolute
        right 134px
        top 30px
        border-radius 50%
        text-align center
        color #fff
    .hot
      font-size 28px
      padding 30px 0 0 30px
      color #999
    .list
      ul
        color #333
        font-size 28px
        display flex
        flex-wrap wrap
        margin 30px 0 0 30px
        li
          padding 8px 15px 8px 15px
          margin 0 60px 32px 0
          border 1px solid #999
    .searchList
      ul
        padding-left 30px
        li
          font-size 28px
          color #333
          border-bottom 1px solid #d9d9d9
          height 90px
          line-height 90px
          width 720px
</style>
