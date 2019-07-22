import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import 'lib-flexible/flexible.js' 
import './common/mockData/mockServer' 

// 关闭Vue脚手架的提示功能
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router, // 配置路由器
  store, // 配置vuex的store
})
