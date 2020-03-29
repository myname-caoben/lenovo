<template>
	<div id="user">
		<div id="loginReg">
			<div id="user-logo">
				<img src="../assets/img/logo.png">
			</div>
			<van-field v-model="tel" type="tel" label="账号" placeholder="请输入手机号\账号"/>
			<van-field v-if="phoe" v-model="pass" type="tel" label="密码" placeholder="请输入密码"/>
			<!-- 短信验证框 -->
			<van-field
				v-if="phoes"
				v-model="sms"
				center
				clearable
				label="短信验证码"
				placeholder="请输入短信验证码"
				>
				<template #button>
				<van-button size="small" type="primary">发送验证码</van-button>
				</template>
			</van-field>
			<Button @click="gouser" bgColor="background:#e1140a;margin:auto;margin-top:.3rem;margin-bottom:.2rem;" text="登录" />
			<Button @click="goreg" bgColor="background: #fff;color:#333;border:1px solid #333;margin:auto;margin-bottom:.3rem;" text="没有账号？点击注册"/>
			<div id="loginReg-phone">
				<span @click="phone">
					{{msg}}
				</span>
				<i>
					忘记密码？
				</i>
			</div>
			<van-divider :style="{ color: '#333', borderColor: '#333', padding: '0 16px' ,fontSize: '10px'}">
				你还可以使用以下方式登录
			</van-divider>
			<div id="dSan">
				<img src="../assets/img/qq1.png" alt="">
				<img src="../assets/img/wb.png" alt="">
				<img src="../assets/img/zfb.png" alt="">
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
		sms:'',
		pattern: /\d{6}/,
		phoe:true,
		phoes:false,
		msg:'使用手机号登录>'
      }
    },
    components:{Button},
    mounted(){},
    updated(){},
    methods:{
		goreg(){
			this.$router.push('/reg')
		},
		gouser(){
			  axios({
			    url:'/api/login',
			    method:'post',
			    data:{
			      username:this.tel,
			      password:this.pass
			    }
			  }).then(
			    res=>{
					if(res.data.err==0){
						//种user信息
						window.localStorage.setItem('user',JSON.stringify(res.data))
						  //跳转之前的页面
						  if(this.$route.query.p){
							this.$router.replace(this.$route.query.p)
						  }else{
							this.$router.replace('/home')
						  }
						  this.$toast.success('登陆成功');
					}else{
						this.$toast(res.data.msg);//(res.data.msg);
					}
			      
			    }
			  )
		},
		phone(){
			this.phoe=!this.phoe
			this.phoes=!this.phoes
			if(this.phoe){
				this.msg='使用手机号登录>'
			}else{
				this.msg='使用账号密码登录>'
			}
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
	#loginReg-phone i{
		margin-left: 1.8rem;
	}
	#dSan{
		text-align: center;
	}
	#dSan img{
		width: .7rem;
		margin-right: .3rem;
	}
</style>
