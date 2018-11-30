<template>
	<div class="typeList">
		<div class="list-nav">
		  <ul>
			  <li @click="seleItem(item)" :class="sel==item?'hl':''" v-for="(item,index) in navlist" :key="index"><a>{{item}}</a></li>
		   </ul>
	  </div>	 
	    <router-view></router-view>
	</div>
</template>
<script type="text/javascript">

	export default{
		name:'TypeList',
		components:{},	
		data(){
			return {
				name:'TypeList',
				navlist:[],
				sel: '全部'
			}
		},
		methods:{
				navList(){
					setTimeout(()=>{
						this.navlist=["全部","奶油蛋糕","芝士蛋糕","巧克力蛋糕","木糖醇蛋糕","儿童蛋糕","精美伴手礼"]						
					})
				},
				seleItem(item){
					this.sel=item;
					if(item=='全部'){
						this.$router.push('/TypeList/all')
					}
					if(item=='奶油蛋糕'){
						this.$router.push('/TypeList/butter')
					}
					if(item=='芝士蛋糕'){
						this.$router.push('/TypeList/cheese')
					}
					if(item=='巧克力蛋糕'){
						this.$router.push('/TypeList/chocolate')
					}
					if(item=='木糖醇蛋糕'){
						this.$router.push('/TypeList/newtol')
					}
					if(item=='儿童蛋糕'){
						this.$router.push('/TypeList/child')
					}
					if(item=='精美伴手礼'){
						this.$router.push('/TypeList/gift')
					}
				}
		},
		created() {
			this.navList();
			//this.$router.replace('/TypeList/all');
		}
	}
</script>
<style type="text/css" lang="less" scoped>
@import '../../../styles/main.less';
	.typeList{
		.w(375);
		.margin(100,0,0,0);
		.list-nav{
			.w(375);
			.h(40);
			/*background:blue;*/
			position:relative;
			overflow:auto;
			-webkit-scrollbar-color:#fff;
			ul{
				.w(635);
				position:absolute;
				top:0px;
				.h(40);
				overflow:auto;
				-webkit-scrollbar-color:#fff;
				li{
					.w(82);
					.h(38);
					.fs(14);
					.lh(40);
					color:#707070;
					.margin(0,5,0,0);
					text-align:center;
					float:left;
					a{
						display: inline-block;
						.h(40);
					}
				}
				.hl{
					color:black;
					a{
						border-bottom:2px solid black;
				}
			}
		}
	}
	}
	
</style>