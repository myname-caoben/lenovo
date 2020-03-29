<template>
	<div id="find">
		<van-icon name="apps-o" id="find_icon" @click="go"/>
		<div>
			<van-icon name="search" id="find_icon1"/>
			<input type="text" v-model="value" placeholder="输入搜索.......">
		</div>
	</div>
</template>
<script>
  export default {
    name:'Find',
    props:{},
    data(){
      return {
		  value:''
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{
		go(){
			this.$router.push('/fenlei')
		}
	}
  }
</script>

<style>
	#find{
		background-color: #fff;
		width: 100%;
		position: relative;
	}
	#find>i{
		font-size: .7rem;
		display: inline-block;
		line-height: .7rem;
	}
	#find>div{
		width: 80%;
		height: .6rem;
		display: inline-block;
		vertical-align: top;
		position: relative;
		padding: .1rem;
	}
	#find input{
		width: 100%;
		border: .01rem solid #333;
		border-radius: .2rem;
		height: .4rem;
		padding-left: .4rem;
		margin-top: .08rem;
	}
	#find_icon1{
		font-size: .3rem;
		vertical-align: bottom;
		position: absolute;
		top: .25rem;
		left: .2rem;
	}
	
</style>
