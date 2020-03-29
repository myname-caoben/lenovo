<template>
	<div id="home">
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
		<div id="home-list">
			<ul>
				<li
				v-for="(item,index) in list"
				>
				<div>
					<van-image
						:src="require('../assets/img/'+item.img)"
					/>
					<p>
						{{item.data}}
					</p>
				</div>
				</li>
			</ul>
			
		</div>
		<div id="miao">
			<div class="miao">
				<div>
					<span>
						联想秒杀
					</span>
					<i>
						00:00场
					</i>
				</div>
				<div>
					<van-count-down :time="time">
					  <template v-slot="timeData">
						<span class="item">{{ timeData.hours }}</span><span style="color: red;">:</span>
						<span class="item">{{ timeData.minutes }}</span><span style="color: red;">:</span>
						<span class="item">{{ timeData.seconds }}</span>
					  </template>
				</van-count-down>
				</div>
				<div class="miao_move">
					更多>
				</div>
			</div>
			<div id="miao_list">
				<ul>
				<li  
				class="goodslist_a" 
				v-for="(item,index) in list"
				
				>
					<img src="../assets/img/hmoe (36).jpg" >
					<div class="list_deta">
						<p>{{item.data}}</p>
						<span>￥19999</span>
						<i>￥9999</i>
					</div>
				</li>
				</ul>
			</div>
		</div>
		<Tuijian />
	</div>
</template>
<script>
	import Tuijian from '../components/tuijian.vue'
  export default {
    name:'Home',
    props:{},
    data(){
      return {
		  time: 30 * 60 * 60 * 1000*10,
        list:[
			{
			img:'hmoe (7).png',
			data:"新品",
		},
			{
			img:'hmoe (8).png',
			data:"新品",
		},
		{
			img:'hmoe (14).png',
			data:"新品",
		},
		{
			img:'hmoe (15).png',
			data:"新品",
		},
		{
			img:'hmoe (16).png',
			data:"新品",
		},
		{
			img:'hmoe (18).png',
			data:"新品",
		},
		{
			img:'hmoe (19).png',
			data:"新品",
		},
		{
			img:'hmoe (20).png',
			data:"新品",
		},
		{
			img:'hmoe (21).png',
			data:"新品",
		},
		{
			img:'hmoe (22).png',
			data:"新品",
		},
		
		]
      }
    },
    components:{Tuijian},
    mounted(){},
    updated(){},
    methods:{}
  }
</script>

<style scoped>
	#home{
		height: 8.5rem;
		overflow: auto;
	}
	#home-list ul{
		display: flex;
		justify-content:space-around;
		flex-wrap:wrap;
	}
	#home-list li{
		width: 20%;
		text-align: center;
		margin-top: .3rem;
	}
	#home-list li>div{
		width: 70%;
		text-align: center;
		margin: auto;
	}
	.item {
	  display: inline-block;
	  width: 22px;
	  margin-right: 5px;
	  color: #fff;
	  font-size: 12px;
	  text-align: center;
	  background-color: red;
	}
	#miao{
		width: 98%;
		margin: auto;
		background-color: #fff;
		border-radius: .1rem;
	}
	.miao{
		border-bottom: .01rem solid #333333;
		padding: .2rem;
		vertical-align: bottom;
	}
	.miao>div{
		display: inline-block;
	}
	.miao>div>span{
		font-size: .4rem;
		color: red;
	}
	.miao>div>i{
		font-size: .3rem;
		margin-right: .3rem;
	}
	.miao_move{
		margin-left: .3rem;
	}
	#miao_list ul{
		overflow: auto;
		display: flex;
	}
	#miao_list img{
		width: 90%;
	}
	#miao_list span{
		color: red;
	}
	#miao_list li{
		padding: .2rem;
		width: 30%;
		height: 20%;
		display: inline-block;
		text-align: center;
		font-size: .15rem;
	}
</style>
