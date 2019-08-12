<template>
	<div id="login">
		<el-form :model="loginForm" :rules="loginRules" ref="loginForm">
			<h2>登录</h2>
			<el-form-item prop="username">
				<el-input v-model="loginForm.username" name="username" placeholder="请输入用户名/手机号" auto-complete="on"></el-input>
			</el-form-item>

			<el-form-item prop="username">
				<el-input v-model="loginForm.password" name="password" placeholder="请输入密码" auto-complete="on"></el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="handleLogin">登录</el-button>
			</el-form-item>
		</el-form>
		
		
		
		<el-form :model="loginForm" :rules="loginRules" ref="loginForm2">
			<h2>手机号登录</h2>
			<el-form-item>
				<el-input v-model="phoneCode.num" name="phone" placeholder="手机号" auto-complete="on"></el-input>
				<el-button type="primary" @click="getCode">获取验证码</el-button>
			</el-form-item>

			<el-form-item>
				<el-input v-model="phoneCode.code" name="phonecode" placeholder="请输入验证码" auto-complete="on"></el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="codeLogin1">登录</el-button>
				<el-button type="primary" @click="register">注册</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>


<script>
	import {loginReq,getCode,codeLogin} from '@/apis/req'
	export default {
		name: "login",
		data() {
			return {
				loginForm: {
					username: '',
					password: '',
				},
				
				phoneCode:{
					num:"",
					code:""
				},

				loginRules: {
					username: [{
						required: true,

						message: "请输入用户名",

						trigger: "blur"
					}],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}]
				}
			}
		},
		methods: {
			handleLogin() {
				var that=this
				console.log(this.$refs.loginForm)
				this.$refs.loginForm.validate((valid) => {
					if (valid) {
						loginReq(this.loginForm.username, this.loginForm.password).then((res) => {
							console.log(res);
							if(res.data.code==0){
								
								console.log(res.data)
								this.$message({
									message:res.data.msg,
									type:"success"
								});
								setTimeout(function(){
									that.$router.push("/Info")
								},1000)
								this.$store.commit('handleUserName',res.data.data.username);
								this.$store.commit('handleEmail',res.data.data.email);
								this.$store.commit('handleGroupname',res.data.data.groupname);
								this.$store.commit('handleIcon',res.data.data.icon);
								this.$store.commit('handleUid',res.data.data.uid);
								
							}else{
								this.$message.error(res.data.msg);
							}
							
						})
					} else {
						console.log('用户名或密码错误')
						this.$message.error("用户名或密码错误");
					}
				})
			},
			
			codeLogin(){
				
			},
			
			
			getCode(){
				getCode(this.phoneCode.num).then(res=>{
					console.log(res)
				})
			},
			
			codeLogin1(){
				codeLogin(this.phoneCode.code).then(res=>{
					if(res.data.code==1){
						this.$message({
							message:res.data.msg,
							type:"success"
						});
					}else if(res.data.code==0){
						this.$message({
							message:res.data.msg,
							type:"success"
						});
						
						setTimeout(function(){
							that.$router.push("/Info")
						},1000)
						this.$store.commit('handleUserName',res.data.data.username);
						this.$store.commit('handleEmail',res.data.data.email);
						this.$store.commit('handleGroupname',res.data.data.groupname);
						this.$store.commit('handleIcon',res.data.data.icon);
						this.$store.commit('handleUid',res.data.data.uid);
					}
				})
			},
			register(){
				this.$router.push("/register")
			}
			
		}
	};
</script>
<style scoped>
	.el-input {
		width: 300px;
	}
</style>
