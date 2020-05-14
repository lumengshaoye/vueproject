<template>
	<div class="photolist">
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in cates" :key="item.id" @click="getImages(item.id)">
						{{item.title}}
					</a>
				</div>
			</div>
		</div>
		
		<ul class="images">
		  <router-link v-for="item in list" :key="item.id" tag="li" :to="'/home/photoinfo/'+item.id">
		    <img :src="item.img_url">
			<div class="info">
				<h1 class="info_title">{{item.title}}</h1>
				<div class="info_zhaiyao">{{item.zhaiyao}}</div>
			</div>
		  </router-link>		
		</ul>
	</div>
</template>

<script>
	import mui from '../../lib/dist/js/mui.min.js'
	import {request} from '../network/index.js'
	export default{
		data(){
			return {
				cates:[],
				list:[]
			}
		},
		created() {
			this.getCategory()
			this.getImages(0)
		},
		mounted() {
			mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			});
		},
		methods:{
			getCategory(){
				request({url:'/api/getimgcategory'})
				.then(res=>{
					this.cates = res.data.message
					this.cates.unshift({title:"全部",id:0})
				})
			},
			getImages(cateId){
				request({url:'/api/getimages/'+cateId})
				.then(res=>{
					this.list = res.data.message	
				})
			}
		}
	}
</script>

<style scoped>
	*{
		touch-action: pan-x;
	}	
	.images{
		margin: 0;
		padding: 10px;
		padding-bottom: 0;
	}
	.images li{	
		position: relative;
		box-shadow: 0 0 6px #999;
		margin-bottom: 10px;
		list-style: none;
		text-align: center;
	}	
	.images li img{
		vertical-align: middle;
		width: 100%;
	}
	.info{
		color:white;
		position: absolute;
		text-align: left;
		bottom: 0;
		background-color: rgba(0,0,0,0.4);
		max-height: 84px;
	}
	.info .info_title{
		font-size:14px;
	}
	.info .info_zhaiyao{
		font-size:13px;
	}
</style>
