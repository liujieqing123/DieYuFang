<template>
	<div class="group">
		{{name}}
	
	</div>
</template>
<script type="text/javascript">
//引入组件
	export default{
		name:'Group',
		components:{
			
		},
		
		data(){
			return {
				name:'Group'
			}
		}
	}
</script>
<style type="text/css" lang="less" scoped>
@import '../../../styles/main.less';
	.group{
		.h(667);
		margin-top:100px;
		overflow:auto;
		background: #ebebeb;
	}
	
</style>