import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {}
const mutations = {
    handleUserName: (state, user_name) => {
        state.user_name = user_name
        localStorage.setItem('user_name', user_name)
    },
	handleEmail: (state, email) => {
		state.email = email
		localStorage.setItem('email', email)
	},
	handleGroupname: (state, groupname) => {
		state.groupname = groupname
		localStorage.setItem('groupname', groupname)
	},
	handleIcon: (state, icon) => {
		state.icon = icon
		localStorage.setItem('icon', icon)
	},
	handleUid: (state, uid) => {
		state.uid = uid
		localStorage.setItem('uid', uid)
	}
}
const state = {
    user_name: '' || localStorage.getItem('user_name'),
	email:""|| localStorage.getItem('email'),
	groupname:""|| localStorage.getItem('groupname'),
	icon:""|| localStorage.getItem('icon'),
	uid:""|| localStorage.getItem('uid'),
}
const getters = {
    userName: (state) => state.user_name
}

const store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
export default store 