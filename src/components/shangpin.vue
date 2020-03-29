<template>
  <div 
  class="list"
  >
			<van-image
				:src="require('../assets/img/hmoe (21).jpg')"
			/>
			<p>
				thinkplus自然光谱台灯智雅版
			</p>
			<span>
				￥99
			</span>
  </div>
</template>

<script>
  export default {
    name:'goods',
    props:{
    },
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
   methods:{
	   onBuyClicked(){},
	   onAddCartClicked(){},
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
	.list{
		background-color: #FFFFFF;
		width: 100%;
		padding: .3rem;
		box-sizing: border-box;
		display: inline-block;
	}
</style>
