<template>
  <div id="app" style="width: 100%;height: 100%;">
	<Header v-if="$root.bNav"/>
	<Find v-if="$root.bSearch"/>
	<router-view></router-view>
	<Footer v-if="$root.bFoot"/>
	<div>
		<van-sku
		ref="checkbox"
		getSkuData
		v-model="$root.show"
		stepper-title="我要买"
		:sku="sku"
		:goods="goods"
		:goods-id="1"
		:quota="5"
		:quota-used="0"
		:hide-stock="sku.hide_stock"
		:properties ="properties"
		show-add-cart-btn
		reset-stepper-on-hide
		:initial-sku="initialSku"
		@buy-clicked="onBuyClicked"
		@add-cart="onAddCartClicked"
	>
	  <template #sku-header-price="props">
	    <div class="van-sku__goods-price">
	      <span class="van-sku__price-symbol">￥</span><span class="van-sku__price-num">{{ props.price }}</span>
	    </div>
	  </template>
	</van-sku>
	</div>
	
  </div> 
</template>

<script>
import Header from './Header.vue'
import Find from './find.vue'
import Footer from './Footer.vue'
export default {
  name: 'App',
  data(){
	return{
		 checked:'精致',
		initialSku:{
			// 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
			// 值：skuValueId（规格值 id）
			s1: '30349',
			s2: '1193',
			// 初始选中数量
			selectedNum: 3,
			// 初始选中的商品属性
			// 键：属性id
			// 值：属性值id列表
			selectedProp: {
			 123: [1222]
			}
		},
		properties :
			[ // 商品属性
			 {
			   k_id: 123, // 属性id
			   k: '规格', // 属性名
			   is_multiple: false, // 是否可多选
			   v: [
				 {
				   id: 1222, // 属性值id
				   name: '白色', // 属性值名
				   price: 1, // 属性值加价
				 },
				 {
				   id: 1223,
				   name: '黑色',
				   price: 1,
				 }
			   ],
			 },
			{
			  k_id: 124, // 属性id
			  k: '配置', // 属性名
			  is_multiple: false, // 是否可多选
			  v: [
				{
				  id: 1224, // 属性值id
				  name: "高配", // 属性值名
				  price: 1, // 属性值加价
				},
				{
				  id: 1225,
				  name: '低配',
				  price: 1,
				}
			  ],
			}
		],
		sku: {
			// 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
			// 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
			tree: [
			{
			k: '颜色', // skuKeyName：规格类目名称
			v: [
			{
			id: '30349', // skuValueId：规格值 id
			name: '红色', // skuValueName：规格值名称
			imgUrl: 'https://img.yzcdn.cn/2.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
			previewImgUrl: 'https://img.yzcdn.cn/2.jpg', // 用于预览显示的规格类目图片
			},
			{
			id: '1215',
			name: '蓝色',
			imgUrl: 'https://img.yzcdn.cn/2.jpg',
			previewImgUrl: 'https://img.yzcdn.cn/2.jpg',
			}
			],
			k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
			}
			],
			// 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
			list: [
			{
			id: 2259, // skuId，下单时后端需要
			price: 100, // 价格（单位分）
			s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
			s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
			s3: '0', // 最多包含3个规格值，为0表示不存在该规格
			stock_num: 110 // 当前 sku 组合对应的库存
			}
			],
			price: '111.00', // 默认价格（单位元）
			stock_num: 227, // 商品总库存
			collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
			none_sku: false, // 是否无规格商品
			messages: [
			{
			// 商品留言
			datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
			multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
			name: '留言', // 留言名称
			type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
			required: '1', // 是否必填 '1' 表示必填
			placeholder: '' // 可选值，占位文本
			}
			],
			hide_stock: false // 是否隐藏剩余库存
		},
		goods: {
			// 默认商品 sku 缩略图
			picture: 'https://img.yzcdn.cn/2.jpg'
		},
		messageConfig: {
				// 数据结构见下方文档
				// 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
				uploadImg: () => {
				return new Promise((resolve) => {
				setTimeout(() => resolve('https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg'), 1000);
				});
				},
				// 最大上传体积 (MB)
				uploadMaxSize: 3,
				// placeholder 配置
				placeholderMap: {
				text: 'xxx',
				tel: 'xxx',
				},
				// 初始留言信息
				// 键：留言 name
				// 值：留言内容
				initialMessages: {
				留言: '留言信息'
				}
			}
	}
  },
  components: {
	  Header,Footer,Find
  },
  watch:{
  	$route:{//路由监听，属性检测
      handler(nextValue,PrevValue){
        console.log('路由变化了',nextValue);
        
        let path = nextValue.path;
        
        if(/home|fuwu|qiye|shequ/.test(path)){//home follow column
          this.$root.bSearch=this.$root.bNav=this.$root.bFoot=true;
        }
        
        if(/detail|fenlei|cart|login|reg/.test(path)){//detial login reg
          this.$root.bSearch=this.$root.bNav=this.$root.bFoot=false;
        }
        if(path.includes('/user')){//user
          this.$root.bSearch=this.$root.bNav=false;
          this.$root.bFoot=true;
        }
      },
      immediate:true
    },
},
  methods:{
	  onBuyClicked(){},
	  onAddCartClicked(){
	  		   console.log(this.$refs.checkbox.getSkuData())
	  }
  },
}
</script>
<style>

</style>
