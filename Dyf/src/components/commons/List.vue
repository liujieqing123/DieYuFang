<template>
	<div class="list">
		<div class="content">
			<div class="content-top">
				<div class="top-box">
					<i class="fa fa-circle-thin"></i>
					<span>新人赠送小礼品</span>
				</div>
				<div class="top-box">
					<i class="fa fa-circle-thin"></i>
					<span>满100包邮</span>
				</div>
				<div class="top-box">
					<i class="fa fa-circle-thin"></i>
					<span>全程冷链配送</span>
				</div>
			</div>
			<ul>
				<li @click="seleItem(item)" v-for='(item,index) in TypeList' :key='index'>
					<img src="https://static.21cake.com//upload/images/b24fa9c0d277b79493fead122afe8e73.png" />
					{{item}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'List',
		components: {},
		data() {
			return {
				name: 'List',
				TypeList:[]
			}
		},
		methods:{
				getList(){
					setTimeout(()=>{
						this.TypeList=[
			                '全部','奶油蛋糕','芝士蛋糕','巧克力蛋糕','木糖醇蛋糕','儿童蛋糕','伴手礼蛋糕'
						]
					})
				},
				seleItem(item){
					if(item=='全部'){
						this.$router.push('/TypeList/all')	
						console.log(111)
					}
					if(item=='奶油蛋糕'){console.log(222)
						this.$router.push({name:'butter',query:{a:20}})
					}
					if(item=='芝士蛋糕'){console.log(333)
						this.$router.replace('/TypeList/cheese')
						
					}console.log(232323)
					if(item=='巧克力蛋糕'){console.log(444)
						this.$router.replace('/TypeList/chocolate')
					}
					if(item=='木糖醇蛋糕'){
						this.$router.replace('/TypeList/newtol')
					}
					if(item=='儿童蛋糕'){
						this.$router.replace('/TypeList/child')
					}
					if(item=='伴手礼蛋糕'){
						this.$router.replace('/TypeList/gift')
					}

				}
		},
		created() {
			this.getList()
		}
	}
</script>

<style lang="less" scoped>
	@import url("../../styles/main.less");
	.list {
		.margin(5,
		0,
		0,
		0);
		.content {
			.w(375);
			.h(190);
			.padding(0,
			15,
			0,
			15);
			.content-top {
				    .w(375);
					.h(18);
				.top-box {
					.w(110);
					.h(18);
					.margin(0,
					5,
					0,
					5);
					float: left;
					.fs(12);
					color: #C69C6D;
					i {
						.fs(12);
						color: #C69C6D;
					}
				}
			}
			ul {
				.w(335);
				.h(167);
				li{
					.w(73.5);
					.h(67.5);
					.margin(8,5,0,5);
					.fs(12);
					float:left;
					text-align:center;
					img{
						.w(51.5);
						.h(51);
						.margin(0,4,0,4);
					}
				}
			}
		}
	}
</style>