<template>
	<div class="gift">
		<div class="title">
			<p class="lm">木糖醇蛋糕</p>
			<p class="js">口感香醇，入口即化</p>
		</div>

		<div class="content" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
			<ul>
				<li v-for="(item,index) in List" :key="index" @click="sendId(item.id)">
					<div class="List-content">
						<img :src="item.cover.pc_cover" />
						<h1>
		     				<p>{{item.name}}</p>
		     				<!--<span>百利甜情人</span>-->
		     			</h1>
						<p class="jg">￥<span>{{item.specs[0].price}}</span>/<span>2.0</span>磅</p>
						<i class="fa fa-cart-plus"></i>
					</div>
				</li>
			</ul>
		</div>
		<!--<div class="bottom">
			到底啦
		</div>-->
	</div>
</template>

<script>
	import Vue from 'vue';
///	import { Toast } from 'mint-ui';
	import { InfiniteScroll } from 'mint-ui'; //引入无限滚动加载的插件
	Vue.use(InfiniteScroll); //在vue中使用插件 

	export default {
		name: 'Gift',
		components: {},
		data() {
			return {
				name: 'Gift',
				List: [],
				page: 1,
				page_size: 8
			}
		},
		methods: {
			loadMore() {
				this.getList()
			},
			getList() {
///				this.toast = Toast({
////					message: '操作成功',
//					iconClass: 'fa fa-spinner fa-spin'
///				});
				//				http://anode.kissmilan.com/o/home/product?shop_id=5&category_id=1&page=1&page_size=8
				this.$axios.get('/api/o/home/product', {
						params: {
							shop_id: 5,
							category_id: 1,
							page: this.page,
							page_size: this.page_size
						}
					})
					.then((res) => {
						this.List = this.List.concat(res.data.data);
						this.page++;
//						this.toast.close();
					})
					.catch((err) => {
						console.log(err);
//						this.toast.close();
						
					})
		},
		sendId(id) {
				console.log(id);
                this.$router.push({ path: `/Detail/${id}` })
			}
		},
		created() {
			//				this.getList()
		}

	}
</script>

<style lang="less" scoped>
	@import url("../../../styles/main.less");
	.gift {
		.margin(5,
		0,
		0,
		0);
		.title {
			.w(375);
			.h(47);
			border-bottom: 1px solid #ccc;
			background: rgba(213, 191, 167, 0.10);
			.lm {
				.fs(14);
				text-align: center;
			}
			.js {
				.fs(10);
				color: #D5BFA7;
				text-align: center;
			}
		}
		.content {
			.w(375);
			/*.h(500);*/
			.padding(0,
			20,
			0,
			5);
			/*background:#ccc;*/
			ul {
				li {
					.w(175);
					.h(233);
					.margin(5,
					0,
					0,
					0);
					/*border:1px solid red;*/
					float: left;
					.List-content {
						.w(175);
						.h(233);
						.padding(0,
						0,
						0,
						15);
						position: relative;
						img {
							.w(160);
							.h(176);
						}
						h1 {
							.fs(13);
							color: #442818;
							p {
								.w(140);
							}
						}
						.jg {
							.fs(12);
							.padding(5,
							0,
							0,
							0);
							color: #BB9772;
						}
						i {
							.fs(25);
							position: absolute;
							right: 5px;
							bottom: 5px;
							color: #442818;
						}
					}
				}
			}
		}
		/*.bottom{
			.w(375);
			.h(30);
			.fs(15);
			background:red;
		}*/
	}
</style>