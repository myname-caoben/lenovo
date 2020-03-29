<template>
  <div class="Button">
	<van-divider :style="{ color: '#333', borderColor: '#333', padding: '0 16px' }">
		  为您推荐
	</van-divider>
	<ul class="list">
		<li 
		v-for="index in 20"
		@click="on"
		>
		<shangPin />
		</li>
	</ul>
  </div>
</template>

<script>
	import shangPin from './shangpin.vue'
  export default {
    name:'Tuijian',
    props:{},
    data(){
      return {}
      },
    components:{shangPin},
    mounted(){},
    updated(){},
   methods:{
	   on(){
		this.$root.show = true
	   }
   }
  }
</script>

<style scoped>
	.list{
		border: .01rem solid #fff;
	}
	.list span{
		color: red;
	}
	.list li{
		background-color: #FFFFFF;
		width: 49%;
		margin-left: 0.5%;
		margin-bottom: 0.5%;
		padding: .3rem;
		box-sizing: border-box;
		display: inline-block;
	}
</style>
