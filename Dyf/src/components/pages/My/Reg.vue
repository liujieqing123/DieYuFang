<template>
	<div class="reg">
		<div class="title">
		    <span>用户注册</span>
		</div>
		<div class="form">
			<ul>
				<li>
					<input type="text" placeholder="用户名/邮箱地址" />
				</li>
				<li>
					<input type="password" placeholder="密码" />
				</li>
				<li>
					<input type="text" placeholder="生日" />
				</li>
				<li class="last-li"></li>
				<li class="last-li">
					<input type="submit" value="注册" class="bottom-submit" @click="goInfo()"/>
				</li>
			</ul>
		</div>
		<div class="remember">
			<span>
				<input type="checkbox" />已阅读并同意
			</span>
			<div class="xy">
			   <span><a>碟御坊的会员协议</a></span>
			       和
			   <span><a>隐私保护政策</a></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Reg',
		data(){
			return{
				name:'reg'
			}
		},
		methods:{
			goInfo(){
				this.$router.replace('/My/info')
			}
		}
	}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.reg{
	/*.h(667);*/
		.padding(0,28,0,28);
		.title{
			.w(319);
			.h(38);
			.lh(38);
			.fs(14);
			text-align:center;
			color:#442818;
			span{
				.w(160);
			    .h(38);
				display: inline-block;
				border-bottom:2px solid #442818;
			}
		}
		.form{
			.margin(20,0,0,0);
			ul{
				li{
					.w(319);
					.h(47);
					.lh(47);
					.margin(0,0,5,0);
					font-size:0px;
					border-bottom:1px solid #ccc;
					input{
						.w(317);
					    .h(43);
					}
				}
				.last-li{
					border-bottom:none;
					input{
						background:#442818;
						color: #FFFFFF;
						.fs(14);
					}
				}
			}
		}
		.remember{
			.w(319);
			.h(20);
			.fs(12);
			.margin(25,0,0,0);
			display:flex;
			justify-content:start;
			align-items:center;
			span{
				display:inline-block;
				.margin(0,5,0,0);
			}
			.xy{
				a{
					color:blue;
				}
			}
		}
}
 
</style>