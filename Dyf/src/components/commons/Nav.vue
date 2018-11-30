<template>
	<div class="nav">
		<ul v-show="show" :class="show===true?'bgcolo':''">
			<li v-for="(item,index) in list"  :key="index">
				<i :class="item.icon"></i>
				<span @click="goPage(item.path)">{{item.title}}</span>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
import Vue from 'vue';
	export default {
		name: 'Nav',
//		props:['show'],
		computed:{
			show(){
				return this.$store.state.sliderShow
			}
		},
		data(){
			return {
				name:'Nav',
				list:[]
			}
		},
		methods:{
			 getList(){
                setTimeout(()=>{
                  this.list=[{title:'首页',path:'/',icon:'fa fa-home'},
                  {title:'分类列表',path:'/TypeList/all',icon:'fa fa-list'},
                  {title:'购物车',path:'/Cart',icon:'fa fa-shopping-basket'},
                  {title:'我的中心',path:'/My',icon:'fa fa-user-o'}]
                   // 再上一次数据修改的 相关dom 渲染加载后执行
                   Vue.nextTick(()=>{
                    })
                },10);
            },
            goPage(path){
            	this.$store.commit('changeSliderShow',false)
            	this.$router.push({ path: `${path}`, params: { userId: 123 }})
            }
		},
		 created(){
        	this.getList()
        }
	}
</script>

<style type="text/css" lang="less" scoped>
	@import '../../styles/main.less';
	.nav {
		.h(50);
		position: fixed;
		.top(44);
		left: 0;
		right: 0;
		z-index: 900;
		ul{
			.h(50);
			display: flex;
			border-bottom: 1px solid #ccc;
			li{
				flex: 1;
				display: flex;
				text-align: center;
				flex-direction: column;
				justify-content: center;
				i{
					.fs(21);
					color: #be8242;
				}
				span{
					.fs(12);
					.lh(20);
					color:#7c7c7c;
				}
			}
		}
	}
	.bgcolo{
		background: #fff;
	}
</style>