<template>
	<div class="header">
		<div id="header">
			<div class="header-left">
				<a href="#" class="header-nav" @click="animat">
					<i class="fa fa-bars"></i>
				</a>
				<a href="#" class="header-title" >蝶御坊</a>
			</div>
			<div class="header-right">
				<router-link to="" href="#" class="header-addres">
					<input type="text" name="" id="select" value="" />
				</router-link>
				<a href="#" class="header-user">
					<i class="fa fa-search"></i>
				</a>
			</div>
			<transition enter-active-class="animated fadeIn"
						leave-active-class="animated fadeOut">
						<Nav></Nav>
			</transition>
		</div>
	</div>
</template>
<script type="text/javascript">
import Nav from './Nav'

	export default {
		name: 'Header',
		data(){
			return {
				name:'header',
				isShow:false
			}
		},
		components: {
			Nav
		},
		methods:{
			closeSlider(){
				this.isShow=false
			},
			animat(){
				
				let show=!this.$store.state.sliderShow
				this.$store.commit('changeSliderShow',show)
//				console.log(Nav)
			}
		},
		created(){
			console.log(this)
		}
	}
</script>

<style type="text/css" lang="less" scoped>
	@import '../../styles/main.less';
	.header {
		overflow: hidden;
		position: fixed;
		top: 0;
		left: 0;
		right:0;
		z-index:500;
		background: #fff;
		border-bottom: 1px solid #ccc;
		.h(44);
		#header {
			.fs(14);
			.lh(44);
			overflow: hidden;
			
			.header-left {
				float: left;
				a {
					display:inline-block;
					.h(44);
				}
				.header-nav{
					width: 44px;
					text-align: center;
					
					
				}
				.header-title{
					.padding(0,10,0,10);
				}
			}
			.header-right {
				float: right;
				a {
					display:inline-block;
					.h(44);
				}
				.header-user{
					width: 44px;
					text-align: center;
				}
				
			}
		}
	}
	#select{
		border: 1px solid #ccc;
		.border-radius(17);
		text-indent: 2em;
	}
</style>