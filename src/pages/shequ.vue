<template>
	<div>
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item
			v-for="index in 8"
			:key="index">
				<van-image
					style="width: 100%;height: 3rem;"
					:src="require('../assets/img/0 ('+index+').jpg')"
				/>
			</van-swipe-item>
		</van-swipe>
	</div>
</template>
<script>
  export default {
    name:'Footer',
    props:{},
    data(){
      return {
        
      }
    },
    components:{},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style>
</style>
