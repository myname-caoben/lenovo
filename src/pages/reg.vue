<template>
	<div id="user">
		<van-nav-bar
		title="联想会员注册"
		left-text="返回"
		left-arrow
		@click-left="$router.go(-1)"
		/>
		<div id="loginReg">
			<div id="user-logo">
				<img src="../assets/img/logo.png">
			</div>
			<van-field v-model="tel" type="tel" label="账号" placeholder="请输入账号"/>
			<van-field v-model="pass" type="password" label="密码" placeholder="请输入密码"/>
			<Button @click="reg" bgColor="background:#e1140a;margin:auto;margin-top:.3rem;margin-bottom:.2rem;" text="注册" />
			<Button @click="gologin" bgColor="background: #fff;color:#333;border:1px solid #333;margin:auto;margin-bottom:.3rem;" text="已有账号？点击登录"/>
			<div id="loginReg-phone">
				<i>
					企业注册
				</i>
			</div>
		</div>
		
	</div>
</template>
<script>
	import Button from '../components/Button.vue'
  export default {
    name:'Footer',
    props:{},
    data(){
      return {
		tel:'',
		pass:'',
		pattern: /\d{6}/,
      }
    },
    components:{Button},
    mounted(){},
    updated(){},
    methods:{
		gologin(){
			this.$router.push('/login')
		},
		reg(){
			 axios({
			  url:'/api/reg',
			  method:'post',
			  data:{
			    username:this.tel,
			    password:this.pass
			  }
			}).then(
			  res=>{
					if(res.data.err==0){
						this.$router.replace('/login')
						 this.$toast.success('注册成功');
					}else{
						
						this.$toast(res.data.msg);//(res.data.msg);
					}
			    
			  }
			)
		}
	}
  }
</script>

<style scoped>
	#user{
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
	}
	#loginReg{
		padding: .6rem;
	}
	#user-logo img{
		width: 3rem;
		display: block;
		margin: auto;
		margin-bottom: 1rem;
	}
	#loginReg-phone{
		text-align: right;
	}
	#dSan{
		text-align: center;
	}
	#dSan img{
		width: .7rem;
		margin-right: .3rem;
	}
</style>
