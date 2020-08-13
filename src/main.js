import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/vuex'

import { request } from './network/request'

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err)
})
