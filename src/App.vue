<template>
  <div id="app">
	  <!-- 顶部区域 -->
	  <mt-header fixed title="vue项目"></mt-header>
	  
	  <!-- 中间的路由view区域 -->
	  <transition>
		  <router-view/>
	  </transition>
	  
	  <!-- 底部tabbar区域 -->
	  <nav class="mui-bar mui-bar-tab">
	  	<router-link class="mui-tab-item-lm" to="/home">
	  		<span class="mui-icon mui-icon-home"></span>
	  		<span class="mui-tab-label">首页</span>
	  	</router-link>
	  	<router-link class="mui-tab-item-lm" to="/vip">
	  		<span class="mui-icon mui-icon-contact"></span>
	  		<span class="mui-tab-label">会员</span>
	  	</router-link>
	  	<router-link class="mui-tab-item-lm" to="/shopcar">
	  		<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
				<span class="mui-badge">9</span>
			</span>
	  		<span class="mui-tab-label">购物车</span>
	  	</router-link>
	  	<router-link class="mui-tab-item-lm" to="/search">
	  		<span class="mui-icon mui-icon-search"></span>
	  		<span class="mui-tab-label">搜索</span>
	  	</router-link>
	  </nav>

  </div>
</template>

<style>
	#app{
		padding-top: 40px;
		padding-bottom: 50px;
		overflow-x: hidden;
	}
	.v-enter{
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to{
		opacity: 0;
		transform: translateX(-100%);
		position: absolute;
	}
	.v-enter-active,
	.v-leave-active{
		transition: all 0.4s ease;
	}
	
	.mui-bar-tab .mui-tab-item-lm.mui-active {
	    color: #007aff;
	}
	.mui-bar-tab .mui-tab-item-lm {
	    display: table-cell;
	    overflow: hidden;
	    width: 1%;
	    height: 50px;
	    text-align: center;
	    vertical-align: middle;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #929292;
	}
	.mui-bar-tab .mui-tab-item-lm .mui-icon {
	    top: 3px;
	    width: 24px;
	    height: 24px;
	    padding-top: 0;
	    padding-bottom: 0;
	}
	.mui-bar-tab .mui-tab-item-lm .mui-icon~.mui-tab-label {
	    font-size: 11px;
	    display: block;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
</style>
