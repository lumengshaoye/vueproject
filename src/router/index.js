import vueRouter from 'vue-router'
import home from '../components/Home.vue'
import vip from '../components/Vip.vue'
import shopcar from '../components/ShopCar.vue'
import search from '../components/Search.vue'
import newslist from '../views/NewsList.vue'
import newsinfo from '../views/NewsInfo.vue'
import photolist from '../views/PhotoList.vue'
import photoinfo from '../views/PhotoInfo.vue'

var router = new vueRouter({
	routes:[
		{path:'/',redirect:'home'},
		{path:'/home',component:home},
		{path:'/vip',component:vip},
		{path:'/shopcar',component:shopcar},
		{path:'/search',component:search},
		{path:'/home/newslist',component:newslist},
		{path:'/home/newsinfo/:id',component:newsinfo},
		{path:'/home/photolist',component:photolist},
		{path:'/home/photoinfo/:id',component:photoinfo}
	],
	linkActiveClass:'mui-active'
})

export default router