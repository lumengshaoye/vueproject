<template>
	<div class="container">
		<h2 class="title">{{newsInfo.title}}</h2>
		<p class="sub_title">
			<span>发表时间:{{newsInfo.add_time | dateFormat}}</span>
			<span>点击次数:{{newsInfo.click}}次</span>
		</p>
		<hr />
		<div class="content" v-html="newsInfo.content"></div>
		<comment :id="id"></comment>
	</div>
</template>

<script>
	import comment from '../components/Comment.vue'
	import {request} from '../network/index.js'
	export default{
		data(){
			return {
				id:this.$route.params.id,
				newsInfo:{}
			}
		},
		created(){
			request({url:'/api/getnew/'+this.id})
			.then(res=>{
				// console.log(res.data.message)
				this.newsInfo = res.data.message[0]
			})
		},
		components:{
			comment
		}
	}
</script>

<style>
	.container{
		padding-left: 4px;
	}
	.title{
		font-size:16px;
		color:red;
		text-align: center;
		margin:16px 0;
	}
	.sub_title{
		font-size: 13px;
		color: #226AFF;
		display: flex;
		justify-content: space-between;
	}
</style>
