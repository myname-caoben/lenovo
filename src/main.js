import Vue from 'vue'
import App from './layouts/App.vue'

Vue.config.productionTip = false

//引入Vant ui库
import Vant from 'vant';
import 'vant/lib/index.css';
//注册Vant
Vue.use(Vant);
//引入通用样式
import './assets/css/base.css'  // src 

//引入js样式
import './assets/js/font.js'
//引入路由的配置
import router from './plugins/router.js'

//引入服务端配置模块
import server from './config/server.js';
Vue.prototype.$baseUrl = server.baseUrl;//把服务器基础地址，作为实例属性，捆绑到了vue上


//引入axios插件配置
import './plugins/axios'

let vm = new Vue({
  data:{
    bNav:false,
    bFoot:false,
    bLoading:false,
    bSearch:false,
	show:false,
  },
  render: h => h(App),
  router
}).$mount('#app')


export default vm;