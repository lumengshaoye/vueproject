<template>
	 <div class="photoinfo">
		 <h2 class="title">{{photoInfo.title}}</h2>
		 <p class="subtitle">
			 <span>发表时间:{{photoInfo.add_time | dateFormat}}</span>
			 <span>点击:{{photoInfo.click}}次</span>
		 </p>
		 <hr /> 
		 
		 <!-- 缩略图区域 -->
		 
		 <!-- 图片内容区域 -->
		 <div class="content" v-html="photoInfo.content"></div>
		 <comment :id="this.id"></comment>
	 </div>
</template>

<script>
	import {request} from '../network/index.js'
	import comment from '../components/Comment.vue'
	export default{
		data(){
			return {
				id:this.$route.params.id,
				photoInfo:{}
			}
		},
		created(){
			this.getPhotoInfo()
		},
		methods:{
			getPhotoInfo(){
				request('/api/getimageinfo/'+this.id)
				.then(res=>{
					this.photoInfo = res.data.message[0]
				})	
			}
		},
		components:{
			comment
		}
	}
</script>

<style scoped>
   .photoinfo .title{
	   font-size:16px;
	   color:#226AFF;
	   text-align: center;
	   margin: 15px 0;
   }
   .photoinfo .subtitle{
       display: flex;
	   justify-content: space-between;
   }
   .photoinfo .content{
	   line-height: 30px;
	   font-size: 13px;
   }
</style>
