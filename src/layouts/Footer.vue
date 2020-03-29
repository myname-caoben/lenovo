<template>
	<div class="foot">
		<van-tabbar
		v-model="active"
		active-color="#f95b27"
		inactive-color="#000"
		@change="onChange"
		>
			<van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
			<van-tabbar-item name="fenlei" icon="apps-o">分类</van-tabbar-item>
			<van-tabbar-item name="cart" icon="shopping-cart-o">购物车</van-tabbar-item>
			<van-tabbar-item name="user" icon="friends-o">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>
<script>
  export default {
    name:'Footer',
    props:{},
    data(){
      return {
         active: 'home',
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{
		onChange(index){
			var index = '/'+index
			this.$router.push(index)
			console.log(index)
		}
	}
  }
</script>

<style>
</style>
