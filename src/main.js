// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/stylus/index.styl'
import ElementUI from 'element-ui'
import http from '@/utils/http'
import $api from '@/utils/api'
Vue.config.productionTip = false
http({
  method: 'post',
  data: {"type":1,"cityID":"2"},
  url: 'api/v1/banner/list',
}).then(function(res) {
  console.log(res)
})
Vue.prototype.$api = $api
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
