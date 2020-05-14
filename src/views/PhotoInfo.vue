<template>
	 <div class="photoinfo">
		 <h2 class="title">{{photoInfo.title}}</h2>
		 <p class="subtitle">
			 <span>发表时间:{{photoInfo.add_time | dateFormat}}</span>
			 <span>点击:{{photoInfo.click}}次</span>
		 </p>
		 <hr /> 
		 
		 <!-- 缩略图区域 -->
		 <div class="thumbs">
		     <vue-preview
		       :list="list"
		       :thumbImageStyle="{width: '100px', height: '100px', margin: '10px'}"
		       :previewBoxStyle="{border: '1px solid #eee'}"
		       :tapToClose="true"
		       @close="closeHandler"
		       @destroy="destroyHandler"
		     />
		   </div>
		   
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
				photoInfo:{},
				list:[]
			}
		},
		created(){
			this.getPhotoInfo()
			this.getThumbs()
		},
		methods:{
			getPhotoInfo(){
				request('/api/getimageinfo/'+this.id)
				.then(res=>{
					this.photoInfo = res.data.message[0]
				})	
			},
			getThumbs(){
				request('/api/getthumimages/'+this.id)
				.then(res=>{
					res.data.message.forEach(item=>{
						item.w=800
						item.h=800
					})
					this.list = res.data.message
				})
			},
		    // 即将关闭的时候，调用这个处理函数
			closeHandler() {
			  console.log('closeHandler')
			},
			// 完全关闭之后，调用这个函数清理资源
			destroyHandler() {
			  console.log('destroyHandler')
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
