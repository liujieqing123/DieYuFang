<template>
	<div class="cart">
		{{name}}
	
	</div>
</template>
<script type="text/javascript">
//引入组件

	export default{
		name:'Cart',
		components:{
			
		},
		
		data(){
			return {
				name:'Cart'
			}
		}
	}
</script>
<style type="text/css" lang="less" scoped>
@import '../../../styles/main.less';
	.cart{
		.h(667);
		margin-top:44px;
		overflow:auto;
		background: #ebebeb;
	}
	
</style>