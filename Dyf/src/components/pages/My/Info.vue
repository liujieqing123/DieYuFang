<template>
	<div class="info">
		<div class="title">
		   我的坊客
		</div>
		<div class="logo">
			<img src="../../../images/ico_member.png" />
		</div>
		<ul>
			<li>碟御坊</li>
			<li>
				<i class="fa fa-mobile"></i>
				<span>1323245</span>
			</li>
			<li class="change-info">
				<span>
					修改个人信息
					<i class="fa fa-angle-right"></i>
				</span>
			</li>
		</ul>
		<div class="coupon">
			<ul>
				<li class="num">￥0.0</li>
				<li>果实币余额</li>
			</ul>
			<ul class="last-ul">
				<li class="num">0张</li>
				<li>优惠券</li>
			</ul>
		</div>
		<div class="indent">
		    <ul>
		    	<li>
		    		<i class="fa fa-indent"></i>
		    		<div class="item">
		    			<span>待付订单</span>
		    			<i class="fa fa-angle-right"></i>
		    		</div>
		    	</li>
		    	<li>
		    		<i class="fa fa-list-alt"></i>
		    		<div class="item">
		    			<span>全部订单</span>
		    			<i class="fa fa-angle-right"></i>
		    		</div>
		    	</li>
		    	<li>
		    		<i class="fa fa-columns"></i>
		    		<div class="item">
		    			<span>地址管理</span>
		    			<i class="fa fa-angle-right"></i>
		    		</div>
		    	</li>
		    </ul>
		</div>
		<div class="exit">
			<button @click="loginOut">退出登录</button>			
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'Info',
		data(){
			return{
				name:'info'
//				getStorage:''
			}
		},
		methods:{
			loginOut(){
				this.$store.commit('changLogin',false);
				this.$router.replace('/My/login')
			}			
		}
//		created(){
//			var storage = window.localStorage.getItem('data');
//			console.log(storage);
//		}
	}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.info{
	.h(667);
	/*.margin(46,0,0,0);*/
		.title{
			.w(375);
			.h(44);
			.fs(16);
			.lh(44);
			text-align:center;
			color:#8e6a55;
			border-bottom:1px solid #ccc;
		}
		.logo{
			.w(375);
			.h(97);
			.lh(97);
			text-align:center;
			img{
				.w(70);
			    .h(70);
			}
		}
		ul{
			li{
				.w(375);
				.h(25);
				.fs(12);
				color:#442818;
				.lh(25);
				text-align:center;
			}
			.change-info{
				.w(375);
				.h(31);
				.fs(13);
				.lh(31);
				text-align:center;
				.margin(5,0,0,0);
				span{
					display:inline-block;
					.w(130);
				    .h(31);
				    color:#fff;
				    background:#684029;
				    border-radius:5px;
				}
				
			}
		}
		.coupon{
			.w(375);
			.h(53);
			border-top:1px solid #efefef;
			.margin(20,0,0,0);
			display:flex;
			justify-content:space-between;
			align-items:center;
			ul{
				.w(187.5);
			    .h(53);
			    li{
			    	.w(187.5);
			        .h(21);
			        .fs(12);
			    }
			    .num{
			    	.fs(14);
			    	color:#442818;
			    }
			}
			.last-ul{
				border-left:1px solid #efefef;
			}
		}
		.indent{
			.w(375);
			.h(200);
			background:#F6F6F6;
			ul{
				.padding(15,0,0,0);
				li{
					.w(375);
			        .h(48);			        
			        font-size:0px;
			        display: flex;
			        justify-content: space-between;
			        align-items: center;
			        background:#fff;
			        i{
			        	display:inline-block;
			        	.w(47);
			            .h(47);
			            .fs(20);
			            .lh(47);
			        }
			        .item{
			        	.w(319);
			            .h(47);
			            .fs(15);
			            display: flex;
			            justify-content: space-between;
			            align-items: center;
			            border-bottom:1px solid #F6F6F6;
			            i{
			            	.w(47);
			                .h(40);
			                .fs(20);
			            }
			        }
				} 
			}
		}
		.exit{
			.w(375);
			.h(47);
			background: #CCCCCC;
			.fs(14);
			text-align: center;
			.lh(47);
		}
}
 
</style>