import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Register from '@/components/register'
import Info from '@/components/userinfo'
import One from '@/components/one'
import Two from '@/components/two'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
		{
			path: '/Info',
			name: 'Info',
			component: Info,
			children:[
				{
					path:"/Info/One",
					name:"one",
					component:One
				},
				{
					path:"/Info/Two",
					name:"two",
					component:Two
				}
			]
		},
		
		{
			path: '/register',
			name: 'Register',
			component: Register
		},
  ]
})
