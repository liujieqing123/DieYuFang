<template>
	<div class="footer">
		<div id="footer">
			<ul>
				<li v-for="(item,index) in list">
					<a href="#">{{item.title}}</a>
				</li>
			</ul>
			<p>            
				工作时间：08:30---18:00
				</br>
            	地址：深圳市光明新区新羌社区新陂头村工业区6栋;
            	</br>
            	官方微博：http://weibo.com/yudiefang
            	</br>
			</p>
		</div>
	</div>
</template>
<script type="text/javascript">
import Vue from 'vue';
	export default {
		name: 'Footer',
//		props:['show'],
		data(){
			return {
				name:'Footer',
				list:[]
			}
		},
		methods:{
			 getList(){
                setTimeout(()=>{
                  this.list=[{title:'团购预约',path:'/',icon:'fa fa-home'},
                  {title:'联系我们',path:'/TypeList',icon:'fa fa-list'},
                  {title:'企业合作',path:'/Cart',icon:'fa fa-shopping-basket'},
                  {title:'荣誉咨询',path:'/My',icon:'fa fa-user-o'}]
                   // 再上一次数据修改的 相关dom 渲染加载后执行
                   Vue.nextTick(()=>{
                    })
                },10);
            },
            goPage(path){
            	this.$router.replace({path:path})
            }
		},
		 created(){
        	this.getList()
        }
	}
</script>

<style type="text/css" lang="less" scoped>
	@import '../../styles/main.less';
	#footer{
		background: #333;
		/*.margin(44,0,0,0);*/
		ul{
			display: flex;
			.padding(30,20,30,20);
			li{
				
				.fs(12);
				color:#fff;
				/*border: 1px solid #ccc;*/
				a{
					color:#dcdcdc;
					display: inline-block;
					.h(21);
					.margin(0,0,0,10);
					.padding(0,10,0,10);
					.border-radius(10);
					border: 1px solid #ccc;
				}
			}
		}
		p{
			color:#dcdcdc;
			.fs(12);
			.lh(16);
			text-align: center;
			.padding(0,0,30,0);
		}
	}
</style>