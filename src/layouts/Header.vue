<template>
	<div class="header">
		<img src="../assets/img/ddawkethlodzpwbmhkxdiaa0tzzciu969642.png" id="logo" @click="home">
		<van-tabs v-model="active" swipeable id="nav" @change="go">
			<van-tab v-for="(item,index) in list" :title="item" :key="item"></van-tab>
		</van-tabs>
	</div>
</template>
<script>
  export default {
    name:'Header',
    props:{},
    data(){
      return {
		active:"",
        list:['商城','社区','服务','在线办公'],
        path:['/home','/shequ','/fuwu','/qiye']
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{
		home(){
			this.$router.push('/home')
		},
		go(index){
			this.$router.push(this.path[index])
		}
	}
  }
</script>
<style>
	#logo{
		width: 14%;
		height: .88rem;
		vertical-align: top;
	}
	#nav{
		width: 86%;
		display: inline-block;
	}
</style>
