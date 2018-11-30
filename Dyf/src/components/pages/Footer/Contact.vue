<template>
	<div class="contact">
		{{name}}
	
	</div>
</template>
<script type="text/javascript">
//引入组件
	export default{
		name:'Contact',
		components:{
			
		},
		
		data(){
			return {
				name:'Contact'
			}
		}
	}
</script>
<style type="text/css" lang="less" scoped>
@import '../../../styles/main.less';
	.contact{
		.h(667);
		margin-top:100px;
		overflow:auto;
		background: #ebebeb;
	}
	
</style>