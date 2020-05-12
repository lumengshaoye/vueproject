<template>
	<div>
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in list" :key="item.id">
		  <img :src="item.img" />
		  </mt-swipe-item>
		</mt-swipe>
		
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="../assets/新闻资讯.png"/>
					<div class="mui-media-body">新闻资讯</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="../assets/分享.png" />
					<div class="mui-media-body">图片分享</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="../assets/商品购买.png"/>
					<div class="mui-media-body">商品购买</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="../assets/反馈.png"/>
					<div class="mui-media-body">留言反馈</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="../assets/视频.png"/>
					<div class="mui-media-body">视频专区</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="../assets/联系我们.png"/>
					<div class="mui-media-body">联系我们</div></a></li>
		</ul> 
	</div>
</template>

<script>
	import {request} from '../network/index.js'
	export default{
		data(){
			return {
				list:[]
			}
		},
		created(){
			request({url:'/api/getlunbo'})
			.then(result=>{
				this.list = result.data.message
			})
		}
	}
	
	
</script>

<style scoped>
	.mint-swipe{
		height: 200px;
	}
	.mint-swipe-item:nth-child(1){
	}
	.mint-swipe-item:nth-child(2){
	}
	.mint-swipe-item:nth-child(3){
	}
	.mint-swipe-item img{
		width: 100%;
		height: 100%;
	}
	.mui-grid-view{
		display: flex;
	}
	li{
		flex:1;
	}
	.mui-media-body{
		font-size: 13px !important;
	}
	.mui-grid-view img{
		width: 100%;
	}
</style>
