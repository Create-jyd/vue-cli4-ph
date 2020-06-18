import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/reset.css'
import './assets/css/common.css'

import 'lib-flexible/flexible'
import './utils/FastClick'
import { get, post } from './utils/request'
import utils from './utils/utils'

Vue.prototype.$http = { get, post }

Vue.use(utils)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // 页面标题
  document.title = to.meta.title
  const userInfo = sessionStorage.getItem('userInfo') || null
  if (!userInfo && to.meta.auth) {
    next('/login')
  } else {
    next()
  }
})

var vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default vm
