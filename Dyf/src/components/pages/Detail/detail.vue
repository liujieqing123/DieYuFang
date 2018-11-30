<template>
	<div class="detail">
		<div class="title">
			<img :src="list.cover.pc_cover" />
		</div>
		<div class="detail-box">
			<ul>
				<li class="title-name">
					<span>{{list.name}}</span>
				</li>
				<li class="price">
					<span>￥{{list.specs[0].price}}</span>
				</li>
				<li class="item">
					<span>{{str}}</span>
				</li>
			</ul>
		</div>
		<div class="detail-label">
			<span>情侣></span>
			<span>人气></span>
			<span>新品></span>
			<span>生日></span>
		</div>
		<div class="select-card">
			<div class="specification" @click="togo">
				<div class="weight">
					<span>规格：</span>
					<span>{{list.specs[0].name}}</span>
				</div>
				<i class="fa fa-angle-right"></i>
			</div>
			<ul>
				<li>
					<span>
						<i class="fa fa-square-o"></i>
						{{list.specs[0].name}}
					</span>
					<span>
						<i class="fa fa-spoon"></i>
						含10套餐具
					</span>
					<span>
						<i class="fa fa-user"></i>
						适合7-8人分享
					</span>
					<span>
						<i class="fa fa-clock-o"></i>
						最早今天17:00配送
					</span>
				</li>
				<li class="detail-content">
					原材料来源：意大利、澳大利亚、美国洛杉矶、泰国、越南、中国新疆
				</li>
			</ul>
		</div>
		<div class="picture">
			<ul>
				<li v-for="(item,index) in list.pc_pictures" :key='index'>
					<img :src="item.pc_picture"/>					
				</li>
				
			</ul>
		</div>
		<div class="empty"></div>
		<div class="buy-cart">
			<ul>
				<li class="buy">
					<span>立即购买</span>
				</li>
				<li class="addcart">
					<span>加入购物车</span>
				</li>
			</ul>
		</div>
		<Specifi :show='isShow' :fatdata='datalist'></Specifi>
	</div>
</template>

<script>
	import Specifi from '../../commons/Specifi';
	export default {
		name: 'Detail',
		components:{Specifi},
		data() {
			return {
				isShow:false,
				list:{},
				datalist:'',
				str:''
			}
		},
		methods:{
			togo(){
				this.isShow=!this.isShow
			},
			getList(getId){
				console.log('111')
//				http://anode.kissmilan.com/o/home/product/72/5 http://anode.kissmilan.com/o/home/product/72/5
                   this.$axios.get('/api/o/home/product/'+getId+'/5')
                   .then((res)=>{
//                 	console.log(res)
                   	this.list=res.data
                   	
                   	this.datalist=this.list.specs[0]
                   	var arr=this.list.describe.split('>')                  	
                   	var arr2=[];
                   	arr2.push(arr[3]);
                   	arr2.push(arr[6])
                   	for(var i=0;i<arr2.length;i++){
                   		var arr3=arr2[i].split('<')
                   		this.str+=arr3[0];
                   	}
                   	
                   	if(this.str.length<20){
                   		this.str='纯鲜乳脂奶油调入百利甜酒，在打发奶油的同时调入玫瑰甘露，加入花瓣蜜饯，时令新鲜水果夹心。全新的「百利甜情人」'
                   	}
                   	
//				console.log(this.str)

                   })
                   .catch((err)=>{
						console.log(err)
					})
			}
		},
		created(){
			var getId=this.$route.params.id
			console.log(getId)
			this.getList(getId)
//			this.info();
		}

	}
</script>

<style lang="less" scoped>
	@import url("../../../styles/main.less");
	.detail {
		.h(800);
		.margin(45,
		0,
		0,
		0);
		.title {
			.w(375);
			.h(320);
			img {
				.w(375);
				.h(320);
			}
		}
		.detail-box {
			.w(375);
			.padding(0,20,0,20);
			ul {
				li {
					.w(345);
				}
				.title-name{
					.h(50);
					.fs(18);
					.lh(50);
					color:#442818;
				}
				.price{
					.fs(18);
					.h(30);
					color:#D5BFA7;
				}
				.item{
					.fs(12);
					/*.h(60);*/
					color:#ccc;
				}
			}
		}
		.detail-label{
			.w(375);
			.h(50);
			.padding(5,17,0,17);
			/*background:#eee;*/
			display:flex;
			justify-content:start;
			span{
				display:inline-block;
				.w(58);
				.h(20);
				.fs(12);
				.lh(20);
				.margin(0,10,0,0);
				text-align:center;
				border-radius:10px;
				color:#D5BFA7;
				border:1px solid #D5BFA7;
			}
		}
		.select-card{
			.w(335);
			.h(183);
			.margin(0,20,0,20);
			/*background:skyblue;*/
			border-radius:5px;
			box-shadow: 0 3px 10px 0 rgba(0,0,0,0.10);
			.specification{
				.w(335);
			    .h(45);
			    .padding(0,15,0,15);
			    border-top-left-radius:5px;
			    border-top-right-radius:5px;
			    background:rgba(199,178,153,0.20);
			    display:flex;
			    justify-content:space-between;
			    align-items:center;
			    .weight{
			    	.fs(15);
			    	color:#442818;
			    }
			    i{
			    	display:inline-block;
			    	.fs(25);
			    	color:#442818;
			    }
			}
			ul{
				.w(305);
				.h(138);
				.margin(0,15,0,15);
				.padding(15,0,0,0);
				/*background:#ccc;*/
				li{
					.w(305);
				    .h(56);	
				    display:flex;
			        justify-content:space-between;
			        align-items:center;
			        flex-wrap:wrap;
				    span{
				    	display:inline-block;
				    	.w(150);
				    	.h(24);
				    	.fs(12);
				    	color:#442818;
				    	i{
				    		.fs(18);
				    	}
				    }			    
				}
				.detail-content{
					.h(65);
					.fs(12);
					color:#442818;
					border-top:1px solid #ccc;
				}
			}
		}
		.picture{
			.margin(20,0,0,0);
			.padding(0,15,0,15);
			ul{
				li{
					.w(345);
					.h(191.6);
					.margin(5,0,0,0);
					img{
						.w(345);
					    .h(191.6);
					}
				}
			}
		}
		.empty{
			.w(375);
			.h(60);
		}
		.buy-cart{
			.w(375);
			.h(46);
			background:#ccc;
			position:fixed;
			left:0px;
			right:0px;
			bottom:0px;
			z-index:900;
			ul{
				li{
					.w(187.5);
			        .h(46);
			        .fs(15); 
			        .lh(46);
			        float:left;
			        text-align:center;
				}
				.buy{
					color:#442818;
					background: #fff;					
				}
				.addcart{
					color: #fff;
					background:#442818;
				}
			}
		}
	}
</style>