<template>
	<div class="login">
		<div class="title">
		    <span>账号登录</span>
		</div>
		<div class="form">
			<ul>
				<li>
					<input type="text" placeholder="用户名/邮箱地址" />
				</li>
				<li>
					<input type="password" placeholder="填写密码" />
				</li>
				<li class="last-li"></li>
				<li class="last-li">
					<input type="submit" value="登录" class="bottom-submit" @click="loginEn"/>
				</li>
			</ul>
		</div>
		<div class="remember">
			<span>
				<input type="checkbox" />记住账号
			</span>
			<div class="zc">
			  <span><a>忘记密码</a></span>
			  <span @click="goReg()"><a>去注册</a></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Login',
		data(){
			return{
				name:'login'
			}
		},
		methods:{
			loginEn(){
				window.localStorage.setItem('login',true);
				this.$router.replace('/My/info')
			},
			goReg(){
				this.$router.replace('/My/reg')
			}
		}
	}
</script>

<style lang="less" scoped>
@import '../../../styles/main.less';
.login{
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
			/*border:1px solid black;*/
			display:flex;
			justify-content:space-between;
			align-items:center;
			.zc{
				.w(100);
			    .h(20);
			    display:flex;
			    justify-content:space-between;
			    align-items:center;
			}
			
		}
}
 
</style>