import Vue from 'vue';
import VueRouter from 'vue-router';

//解决push报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

import Home from '../pages/home.vue';
import Fuwu from '../pages/fuwu.vue';
import Feilei from '../pages/fenlei.vue';
import User from '../pages/user.vue';
import Login from '../pages/login.vue';
import Reg from '../pages/reg.vue';
import Detail from '../pages/detail.vue';
import Shequ from '../pages/shequ.vue';
import Cart from '../pages/cart.vue';


let routes = [
  {path:'/cart',component:Cart},
  {path:'/fuwu',component:Fuwu},
  {path:'/fenlei',component:Feilei},
  {path:'/shequ',component:Shequ},
  {path:'/home',component:Home},
  {path:'/detail/:_id',component:Detail,name:'detail'},
  {path:'/user',component:User},
  {path:'/login',component:Login},
  {path:'/reg',component:Reg},
  {path:'/',redirect:'/home'},
];

let router = new VueRouter({
  routes,
  mode:'hash'
})

export default router;