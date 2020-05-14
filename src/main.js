import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)


import MintUI from 'mint-ui'
Vue.use(MintUI)

import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

import router from './router/index.js'
import App from './App.vue'

import 'mint-ui/lib/style.css'
import '../lib/dist/css/mui.min.css'
import '../lib/dist/css/icons-extra.css'


Vue.filter('dateFormat',(cTime,arg1='')=>{
		  	var dt = new Date(cTime)
		  	var y = dt.getFullYear()
		  	var m = (dt.getMonth()+1).toString().padStart(2,'0')
		  	var d = dt.getDate().toString().padStart(2,'0')
		  	var hh = dt.getHours()
		  	var mm = dt.getMinutes()
		  	var ss = dt.getSeconds()
		  	if(arg1.toLowerCase() =='yyyy-mm-dd'){
		  		return `${y}-${m}-${d}`
		  	}else{
		  		return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
		  	}
		  	
		  })


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
