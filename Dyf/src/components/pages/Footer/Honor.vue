<template>
	<div class="honor">
		{{name}}
	
	</div>
</template>
<script type="text/javascript">
//引入组件
	export default{
		name:'Honor',
		components:{
			
		},
		
		data(){
			return {
				name:'Honor'
			}
		}
	}
</script>
<style type="text/css" lang="less" scoped>
@import '../../../styles/main.less';
	.honor{
		.h(667);
		margin-top:100px;
		overflow:auto;
		background: #ebebeb;
	}
	
</style>