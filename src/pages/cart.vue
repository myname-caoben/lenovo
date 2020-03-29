<template>
	<div id="cart">
		<van-nav-bar
		title="购物车"
		left-text="返回"
		left-arrow
		@click-left="$router.go(-1)"
		style="height: 10%;"
		/>
		<div class="cart1">
			<div class="cart_logo">
			<img src="../assets/img/nopro.jpg">
			<p>购物车空空如也，快去购物吧</p>
			<p><span>去逛逛</span></p>
			</div>
			<Tuijian />
		</div>
	</div>
</template>
<script>
	import Tuijian from '../components/tuijian.vue'
  export default {
    name:'Footer',
    props:{},
    data(){
      return {
      }
    },
    components:{Tuijian},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style>
	#cart{
		width: 100%;
		height: 100%;
	}
	.cart1{
		overflow: auto;
		width: 100%;
		height: 90%;
	}
	.cart_logo{
		background-color: #FFFFFF;
		text-align: center;
		padding-top: 1rem;
	}
	.cart_logo span{
		display: inline-block;
		width: 1.6rem;
		height: .5rem;
		margin-top: 1rem;
		background-color: crimson;
		border-radius: .1rem;
		color: #FFFFFF;
		line-height: .5rem;
	}
</style>
