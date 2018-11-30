<template>
	<div class="cooperation">
		{{name}}
	
	</div>
</template>
<script type="text/javascript">
//引入组件
	export default{
		name:'Cooperation',
		components:{
			
		},
		
		data(){
			return {
				name:'Cooperation'
			}
		}
	}
</script>
<style type="text/css" lang="less" scoped>
@import '../../../styles/main.less';
	.cooperation{
		.h(667);
		margin-top:100px;
		overflow:auto;
		background: #ebebeb;
	}
	
</style>