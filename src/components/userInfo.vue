<template>
	<div>
		<h2>你好：{{user_name}}</h2>
		<div>您的邮箱是：{{email}}</div>
		<div>会员级别：{{groupname}}</div>
		<div>
			<img :src="icon" alt="" class="icon">
		</div>
		
		<button @click="out">退出登录</button>
		
		<div>
			<router-link :to='{name:"one"}'>go first</router-link>
			<router-link :to='{name:"two"}'>go second</router-link>
		</div>
		<router-view></router-view>
		
			
	</div>
</template>

<script>
	import {mapState} from "vuex"
	import {loginOut} from '@/apis/req'
	export default {
		
		data() {
			return {
				
			}
		},
		methods:{
			out(){
				var that=this
				loginOut(this.uid).then((res)=>{
					console.log(this.uid)
					console.log(res)
					if(res.status==200){
						if(res.data.code==0){
							this.$message({
								message:res.data.msg,
								type:"success"
							});
							setTimeout(function(){
								that.$router.push("/")
							},1000)
							
						}
					}
				})
			}
		},
		computed:{
			...mapState(["uid","user_name","email","groupname","icon"])
		}
	}
</script>

<style scoped>
	.icon{
		width: 50px;
		height: 50px;
	}
</style>
