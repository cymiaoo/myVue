import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import 'lib-flexible/flexible.js'
// 将store保存Vue函数对象
Vue.store = store


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router, // 配置路由器
  store, // 配置vuex的store
})
