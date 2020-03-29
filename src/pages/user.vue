<template>
  <div class="user">
	  <van-icon class="cols1" name="setting-o" size="20px"/>
    <!-- flex布局 van-tag标记-->
    <van-row class="header" type="flex" align="center">
      <van-col span="24">
        <van-row type="flex">
          <van-col span="20" class="cols">
			<img :src="user.icon" style="width: 1.125rem;border-radius: 50%;">
            <p>{{user.nikename}}</p>
          </van-col>
        </van-row>
      </van-col>
    </van-row>

    <!-- Panel 面板order flex布局 -->
    <van-panel class="order" title="所有订单" status="查看全部订单>">
      <van-row type="flex" justify="space-around">
        <van-col span="6" class="cols">
		  <van-icon name="envelop-o"size="25px" color="#939" info="0"/>
          <span class="category-txt">代付款</span>
        </van-col>
        <van-col span="6" class="cols">
          <van-icon name="envelop-o" size="25px" color="#399" info="0"/>
          <span class="category-txt">代发货</span>
        </van-col>
        <van-col span="6" class="cols">
          <van-icon name="envelop-o" size="25px" color="#399" info="0"/>
          <span class="category-txt">待收货</span>
        </van-col>
        <van-col span="6" class="cols">
          <van-icon name="envelop-o" size="25px" color="#399" info="0"/>
          <span class="category-txt">评价</span>
        </van-col>
		<van-col span="6" class="cols">
		  <van-icon name="envelop-o" size="25px" color="#399"/>
		  <span class="category-txt">评价</span>
		</van-col>
      </van-row>
    </van-panel>

    <!-- Panel 面板order 栅格布局 -->
    <van-panel class="order" title="我的资产" status="查看全部资产">
      <van-row>
        <van-col span="6" class="cols">
          <van-icon name="envelop-o" size="25px" color="#399"/>
          <span class="category-txt">乐豆 666</span>
        </van-col>
        <van-col span="6" class="cols">
          <van-icon name="envelop-o" size="25px" color="#399"/>
          <span class="category-txt">积分</span>
        </van-col>
        <van-col span="6" class="cols">
          <van-icon name="envelop-o" size="25px" color="#399"/>
          <span class="category-txt">可用优惠卷</span>
        </van-col>
        <van-col span="6" class="cols">
          <van-icon name="envelop-o" size="25px" color="#399"/>
          <span class="category-txt">代金券</span>
        </van-col>
      </van-row>
    </van-panel>
	<!-- Panel 面板order 栅格布局 -->
	<van-panel class="order" title="我的助手" status="一件查看更多">
	  <van-row>
	    <van-col span="6" class="cols">
	      <van-icon name="envelop-o" size="25px" color="#399"/>
	      <span class="category-txt">我的预约</span>
	    </van-col>
	    <van-col span="6" class="cols">
	      <van-icon name="envelop-o" size="25px" color="#399"/>
	      <span class="category-txt">我的收藏</span>
	    </van-col>
	    <van-col span="6" class="cols">
	      <van-icon name="envelop-o" size="25px" color="#399"/>
	      <span class="category-txt">修改密码</span>
	    </van-col>
	    <van-col span="6" class="cols">
	      <van-icon name="envelop-o" size="25px" color="#399"/>
	      <span class="category-txt">我要吐槽</span>
	    </van-col>
		<van-col span="6" class="cols">
		  <van-icon name="envelop-o" size="25px" color="#399"/>
		  <span class="category-txt">客服电话</span>
		</van-col>
		<van-col span="6" class="cols">
		  <van-icon name="envelop-o" size="25px" color="#399"/>
		  <span class="category-txt">收货地址</span>
		</van-col>
		<van-col span="6" class="cols">
		  <van-icon name="envelop-o" size="25px" color="#399"/>
		  <span class="category-txt">我的众筹</span>
		</van-col>
	  </van-row>
	</van-panel>
	<van-button @click="logout" type="primary" block style="background-color: #FFFFFF;color: red;border: 1px solid red;">退出登录</van-button>
  </div>
</template>
<script>
  export default {
    
    beforeRouteEnter(to,from,next){
      
      let local = window.localStorage.getItem('user')
      
      if(!local){
        next('/login')
        return;
      }
      
      axios({
        url:'/api/user',
      }).then(
        res=>{
          if(res.data.err==0){
			console.log(res.data)
            next(_this=>_this.user=res.data.data)
          }else{
            next('/login')
          }
        }
      )
    },
    
    name: 'User',
    props: {},
    data() {
      return {
        user:{}
      }
    },
    components: {},
    mounted() {},
    updated() {},
    methods: {
      logout(){
        //删除 本地 token
        window.localStorage.removeItem('user')
        //发送注销请求
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
.user{padding-bottom:50px;}
.user .header {
  height: 150px;
  background: orangered;
  color: #fff;
}
.van-panel__header-value{
  color:#888;
  font-size:.8em;
}
.van-cell__value {
  font-size:.8em;
}
.user .header .cols {
  padding: 10px;
}
.user .order{margin: 10px 0;}
.user .order .cols {
  
  padding: 10px;
  text-align: center;
}
.category-num {
  display: block;
  margin-bottom: 5px;
  text-align: center;
}
.category-txt {
  display: block;
  margin-bottom: 5px;
  text-align: center;
}
.cols{
	margin: auto;
	text-align: center;
}
.cols1{
	position: absolute;
	top: 10px;
	color:#fff;
	right: 10px;
}
</style>

