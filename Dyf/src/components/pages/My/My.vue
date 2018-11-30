<template>
	<div class="my">
	   <router-view></router-view>
	</div>
</template>
<script type="text/javascript">
//引入组件

	export default{
		name:'My',
		components:{
			
		},		
		data(){
			return {
				name:'My'
			}
		},
		created(){
			if(this.$store.state.login){
				this.$router.replace('/My/info')
			}else{
				this.$router.replace('/My/login')
			}
		}
	}
</script>
<style type="text/css" lang="less" scoped>
@import '../../../styles/main.less';
	.my{
		.h(667);
		/*.margin(4,0,0,0);*/
		margin-top:100px;
		overflow:auto;
		/*background: #ebebeb;*/
		
	}
	
</style>