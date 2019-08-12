<template>
	
	
	<div id="regist">
		<el-form :model="registerData" :rules="loginRules" ref="loginForm">
			<h2>注册</h2>
			<el-form-item prop="username">
				<el-input v-model="registerData.username" name="username" placeholder="请输入用户名/手机号" auto-complete="on"></el-input>
				<el-button type="primary" @click="getCode">获取验证码</el-button>
			</el-form-item>

			<el-form-item prop="password">
				<el-input v-model="registerData.password" name="password" placeholder="请输入密码" auto-complete="on"></el-input>
			</el-form-item>
			
			<el-form-item prop="email">
				<el-input v-model="registerData.email" name="email" placeholder="请输入邮箱" auto-complete="on"></el-input>
			</el-form-item>
			
			<el-form-item prop="phone_code">
				<el-input v-model="registerData.phone_code" name="phone_code" placeholder="请输入验证码" auto-complete="on"></el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="regist">注册</el-button>
				<el-button type="primary" @click="goLogin">去登陆</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import {loginReq,getCode,codeLogin,phoneRegister} from '@/apis/req'
	export default {
		
		data() {
			return {
// 				loginForm:{
// 					username:"",
// 					password:"",
// 					email:"",
// 					phone_code:""
// 				},
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
					}],
					email: [{
						required: true,

						message: "请输入邮箱",

						trigger: "blur"
					}],
					phone_code: [{
						required: true,
						message: '请输入验证码',
						trigger: 'blur'
					}]
				},
				
				
				registerData:{
					username:"",
					password:"",
					email:"",
					phone_code:""
				}
			};
		},
		methods:{
			goLogin(){
				this.$router.push("/")
			},
			getCode(){
				if(this.registerData.username==""){
					this.$message({
						message:"请输入手机号",
						type:"success"
					});
					return false
				}
				getCode(this.registerData.username).then(res=>{
					this.$message({
						message:res.data.msg,
						type:"success"
					});
				})
			},
			
			
			regist(){
				var that=this
				this.$refs.loginForm.validate((valid) => {
					if (valid) {
						
						phoneRegister(this.registerData.username,this.registerData.password,this.registerData.email,this.registerData.phone_code)
						.then(res=>{
							console.log(res)
							console.log(res.data.msg)
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
									that.$router.push("/")
								},1000)
							}
						})
						
						
					}
				})
			}
			
			
			
		}
	}
</script>

<style scoped>
.el-input {
		width: 300px;
	}
</style>
