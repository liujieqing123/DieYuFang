<template>
	<div class="specifi">
		<transition 
		  enter-active-class='animated slideInUp'
		  leave-active-class='animated slideOutDown'
        >
		<div class="content" v-show="show">
		    <div class="price">
		        <span>￥{{fatdata.price}}</span>
		        <i class="fa fa-times"></i>
		    </div>
		    <div class="icon-box">
		    	<div class="model">
		    		<img src="../../images/2.00P-full-18.00.jpg"/>
		    	</div>
		    	<ul>
		    		<li>
		    			<i class="fa fa-square-o"></i>
						{{fatdata.name}}
		    		</li>
		    		<li>
		    			<i class="fa fa-spoon"></i>
						含10套餐具
		    		</li>
		    		<li>
		    			<i class="fa fa-user"></i>
						适合7-8人分享
		    		</li>
		    		<li>
		    			<i class="fa fa-clock-o"></i>
						最早今天17:00配送
		    		</li>
		    	</ul>
		    </div>
		    <p>商品规格</p>
		    <div class="specs">
		    	<span>1磅：13x13com</span>
		    </div>
		</div>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'Specifi',
		props:['show','fatdata'],
		data() {
			return {
				name: 'specifi',
			}
		}

	}
</script>

<style lang="less" scoped>
	@import url("../../styles/main.less");
	.specifi {
		.content {
			.w(375);
			.h(200);
			.padding(0,15,0,20);
			background: #fff;
			box-shadow: 0px -2px 4px 0px rgba(0,0,0,0.1);
			position: fixed;
			left: 0px;
			right: 0px;
			bottom: 46px;
			.price{
				.w(335);
				.h(35);
				.fs(15);
				color:#442818;
				/*background:blue;*/
				display:flex;
				justify-content:space-between;
				align-items:center;
				span{
					font-weight: 700;
				}
				i{
					.fs(18);
				}
			}
			.icon-box{
				.w(335);
				.h(86);
				display:flex;
				justify-content:space-between;
				align-items:center;
				/*background:deepskyblue;*/
				.model{
					.w(179);
				    .h(86);
				    img{
				    	.w(180);
				        .h(86);
				    }
				}
				ul{
					.w(155);
					.h(86);
					.padding(0,0,0,10);
					li{
						.h(20);
						.fs(11);
						color: #442818;
					}
				}
			}
			p{
				.margin(10,0,10,0);
				.h(16);
				.fs(12);
				color: #442818;
			}
			.specs{
				.h(40);
				.fs(13);
				.lh(40);
				color: #442818;
				span{
					display:inline-block;
					.w(114);
					.h(31);
					.fs(13);
					.lh(31);
					text-align: center;
					border:1px solid #442818;
				}
			}
		}
	}
</style>