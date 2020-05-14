<template>
	<div>
		<h2>发表评论</h2>
		<hr />
		<textarea placeholder="请输入要BB的内容(最多BB的内容为120字)" maxlength="120" v-model="message"></textarea>
		<mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
		<div class="cmt_container" v-for="(item,index) in comments" :key="index">
		  <div class="cmt_user">
			  第{{index+1}}楼：&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time | dateFormat}}
		  </div>
		  <div class="cmt_content">
			  {{item.content === ""?"楼主太懒了，还没有发表评论！":item.content}}
		  </div>
		</div>
		<mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
	</div>
</template>

<script>
	import {request} from '../network/index.js'
	import axios from 'axios'
	export default{
		data(){
			return {
				pageIndex:1,
				comments:[],
				message:''
			}
		},
		created(){
			this.getComments()
		},
		props:["id"],
		methods:{
			getMore(){
				this.pageIndex++
				this.getComments()
				
			},
			getComments(){
				request({url:'/api/getcomments/'+this.id+'?pageindex='+this.pageIndex})
				.then(res=>{
					//console.log(res.data.message)
					this.comments = this.comments.concat(res.data.message)
				})
			},
			postComment(){
				if(this.message.trim().length===0){
					return 
				}
				axios.post('http://www.liulongbin.top:3005/api/postcomment/'+this.$route.params.id,{content:this.message.trim()})
				.then(res=>{
					const comment = {user_name:"匿名用户",add_time:new Date(),content:this.message.trim()}
					this.comments.unshift(comment)
					this.message=''
				})
			}
		}
	}
</script>

<style scoped>
	textarea{
		margin: 0 !important;
	}
	.cmt_user{
		font-size: 15px;
		background-color: #929292;
		margin: 10px 0;
	}
	.cmt_content{
		font-size: 15px;
		text-indent:2em;
	}
</style>
