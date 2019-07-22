<template>
  <ul>
    <li :class="{active: $route.path === '/msite'}" @click="$router.replace('/msite')">
      <div class="footer-icon">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="">
      </div>
      <span>首页</span>
    </li>
    <li :class="{active: $route.path === '/category'}" @click="$router.replace('/category')">
      <div class="footer-icon" >
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
      </div>
      <span>分类</span>
    </li>
    <li :class="{active: $route.path === '/thing' || $route.path === '/things/find' || $route.path === '/things/choose'}" @click="$router.replace('/thing')">
      <div class="footer-icon">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
      </div>
      <span>识物</span>
    </li>
    <li :class="{active: $route.path === '/shopcar'}" @click="$router.replace('/shopcar')">
      <div class="footer-icon">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
      </div>
      <span>购物车</span>
    </li>
    <li :class="{active: $route.path === '/profile'}" @click="$router.replace('/profile')">
      <div class="footer-icon">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
      </div>
      <span>个人</span>
    </li>
  </ul>
</template>
<script>
  export default {
    
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  ul
    position fixed
    bottom 0
    left 0
    height 100px
    width 100%
    border-top: 1px solid rgba(0,0,0,.15);
    background-color: #414141;
    display flex
    justify-content space-around
    font-size 24px
    background-color #fff
    margin-top -100px
    z-index 500
    li
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      .footer-icon
        position relative
        width 40px
        height 40px
        overflow hidden
        img
          position absolute
          left 0
          top 0
          width 40px
          height 490px
      &:nth-of-type(1)
        img
          top -250px
      &:nth-of-type(2)
        img
          top -150px
      &:nth-of-type(3)
        img
          top -350px
      &:nth-of-type(4)
        img
          top -50px
      &:nth-of-type(5)
        img
          top -450px
      &.active
        color red
        img
          transform translateY(49px)
</style>
