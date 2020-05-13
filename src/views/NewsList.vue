<template>
	<div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
				<router-link :to="'/home/newsinfo/'+item.id">
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						<h1>{{item.title}}</h1>
						<p class='mui-ellipsis'>
							<span>发表时间：{{item.add_time | dateFormat}}</span>
							<span>点击:{{item.click}}次</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import {request} from '../network/index.js'
	
	export default{
		data(){
			return {
				newsList:[]
			}
		},
		created(){
			request({url:'/api/getnewslist'})
			.then(res=>{
				this.newsList =res.data.message
			})
		}
	}
</script>

<style scoped>
	.mui-media-body h1{
		font-size: 14px;
	}
	.mui-media-body .mui-ellipsis{
		font-size: 12px;
		color: #226aff;
		display: flex;
		justify-content: space-between;
	}
</style>
