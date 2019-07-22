<template>
  <div>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <FooterGuider v-show="$route.meta.isShow"/>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuider from './components/FooterGuide/FooterGuide'
  export default {
    name: 'App',
    components: {
      FooterGuider
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>

