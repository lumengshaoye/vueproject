import vueRouter from 'vue-router'
import home from '../components/Home.vue'
import vip from '../components/Vip.vue'
import shopcar from '../components/ShopCar.vue'
import search from '../components/Search.vue'

var router = new vueRouter({
	routes:[
		{path:'/',redirect:'home'},
		{path:'/home',component:home},
		{path:'/vip',component:vip},
		{path:'/shopcar',component:shopcar},
		{path:'/search',component:search}
	],
	linkActiveClass:'mui-active'
})

export default router