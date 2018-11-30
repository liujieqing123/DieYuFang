<template>
	<div class="new">
		<div class="new-content">
		   <div class="title">
		     <span>{{name}}</span>
		     <a>更多
		     	<i class="fa fa-angle-right"></i>
		     </a>
		   </div>
		   
		   <div class="main" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
		   	<ul>
		   		<li v-for="(item,index) in list" :key="index" @click="sendId(item.id)">
		   		    <img :src="item.cover.pc_cover" />
		   		    <h1>
		   		    	<span class="Ltitle">{{item.name}}</span>
		   		    	<span class="pw">
		   		    	<span class="price">{{item.specs[0].price}}</span>
		   		    	<span class="weigth">元/160克</span>
		   		    	</span>
		   		    </h1>
		   		    <p>均已晴儿阿，基地将将，数据加到的愤怒地说啊</p>
		   		    <i class="fa fa-shopping-cart"></i>
		   		</li>
		   	</ul>
		   </div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { InfiniteScroll } from 'mint-ui'; //引入无限滚动加载的插件
	Vue.use(InfiniteScroll); //在vue中使用插件 
	
	export default{
		name:'New',
		components:{},
		props:['id','name'],
		data(){
			return{
				list:[],
				page:1,
				page_size:8
			}
		},
			methods:{
				loadMore() {
				this.getList()
			},
				getList(){
//					http://anode.kissmilan.com/o/home/product?shop_id=5&category_id=1&page=1&page_size=8
//                  http://anode.kissmilan.com/o/home/product?shop_id=5&category_id=8&page=1&page_size=8
					this.$axios.get('/api/o/home/product', {
						params: {
							shop_id: 5,
							category_id: this.id,
							page: this.page,
							page_size: this.page_size
						}
					})
					.then((res)=>{
						this.list=this.list.concat(res.data.data);
						this.page++;
					})
					.catch((err)=>{
						console.log(err)
					})
					
				},
				sendId(id) {
				console.log(id);
                this.$router.push({ path: `/Detail/${id}` })
			}
			}
				
	}
</script>

<style lang="less" scoped>
@import url("../../styles/main.less");

.new{
	.w(375);
	/*.h(500);*/
	.padding(0,18,0,18);
	.new-content{
		.title{
			.w(335);
			.h(30);
			.lh(30);
			/*background:#ccc;*/
			.margin(20,0,0,0);
			font-size:0px;
			display:flex;
			justify-content:space-between;
			align-items:center;
			border-top:1px solid #ccc;
			span{
				.w(46);
				.h(20);
				.fs(12);
				.lh(20);
				text-align:center;
				background:#F4EBE2;
				.border-radius(100);
			}
			a{
				.w(46);
				.h(20);
				.fs(12);
				.lh(20);
				text-align:end;
				color:#808080;
			}
		}
		.main{
			.margin(10,0,0,0);
			ul{
				li{
					.w(335);
					.h(265);
					.margin(20,0,0,0);
					border:1px solid #F2EAE4;
					box-shadow: 0 4px 12px 0 rgba(0,0,0,0.06);
					position:relative;
					img{
						.w(333);
						.h(180);						
					}
					h1{
						.padding(10,0,0,10);
						font-size:0px;
						.Ltitle{
							.fs(15);
							.margin(0,10,0,0);
							font-weight:600;
							
						}
						.pw{
							display:inline-block;
						.price{
							.fs(15);
						}
						.weigth{
							.fs(12);
							color:#A6A6A6;
						}
						}
					}
					p{
						.padding(10,0,0,10);
						.fs(12);
					}
					i{
						.fs(20);
						position:absolute;
						right:15px;
						bottom:15px;
						color:#C69C6D;
					}
				}
			}
		}
	}
	
}

</style>