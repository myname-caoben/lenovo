<template>
	<div style="height: 100%">
		<van-nav-bar
		title="产品分类"
		left-text="返回"
		left-arrow
		@click-left="$router.go(-1)"
		style="height: 8%"
		/>
		<div id="list">
			<div class="list_name">
				<van-sidebar v-model="activeKey" >
				  <van-sidebar-item title="lenovo 电脑" />
				  <van-sidebar-item title="thinkpink" />
				  <van-sidebar-item title="手机/通信" />
				   <van-sidebar-item title="智能产品" />
				  <van-sidebar-item title="办公" />
				  <van-sidebar-item title="增值服务" />
				</van-sidebar>
			</div>
			<div class="list">
				<van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
				<div class="list_1">
					<!-- <p>手机</p>
					<van-grid :border="false" :column-num="3">
					  <van-grid-item
					  v-for="index in 9"
					  >
						<van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
						<p>E系列</p>
					  </van-grid-item>
					  </van-grid> -->
				</div>
		</div>
		</div>
		
	</div>
</template>
<script>
  export default {
    name:'fenlei',
    props:{},
    data(){
      return {
        activeKey:''
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{},
	
  }
</script>

<style scoped>
	#list{
		height: 92%;
		overflow: hidden;
		display: flex;
	}
	.list_name{
		height: 100%;
		background-color: #fff;
		float: left;
	}
	.list_name>div{
		width: 2.2rem;
		height: .2rem;
		font-size: .2rem;
	}
	.list_name>div>a{
		padding: .2rem;
		border-bottom: .01rem solid #ddd;
	}
	.list{
		overflow: auto;
	}
	.list>div{
		background-color: transparent;
	}
	.van-grid-item>div{
		background-color: #f7f7f7;
	}
</style>
