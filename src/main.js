import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)


import MintUI from 'mint-ui'
Vue.use(MintUI)


import router from './router/index.js'
import App from './App.vue'

import 'mint-ui/lib/style.css'
import '../lib/dist/css/mui.min.css'
import '../lib/dist/css/icons-extra.css'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
