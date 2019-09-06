import * as fb from 'firebase'

class User {
	constructor (id){
		this.id = id
	}
}

export default {
	state: {
		user: null,
		loading: false,
		error: null
	},
	mutations: {
		setUser(state, payload){
			state.user = payload
		},
		setLoading(state, payload){
			state.loading = payload
		},
		setError(state, payload){
			state.error = payload
		}
	},
	actions: {
		async addUser({commit}, {email, pass}){
			commit('setError', null)
			commit('setLoading', true)
			try{
				await fb.auth().createUserWithEmailAndPassword(email, pass)
			}catch(error){
				commit('setLoading', false)
				commit('setError', error.message)
				throw error
			}
			commit('setLoading', false)
		},
		async loginUser({commit}, {email, pass}){
			commit('setError', null)
			commit('setLoading', true)
			try{
				const user = await fb.auth().signInWithEmailAndPassword(email, pass)
				commit('setUser', new User (user.user['uid']))
			}catch(error){
				commit('setLoading', false)
				commit('setError', error.message)
				throw error
			}
			commit('setLoading', false)
		},
		autoLoginUser({commit}, payload){
			commit('setUser', new User(payload.uid));
		},
		logoutUser({commit}){
			fb.auth().signOut();
			commit('setUser', null);
		}
	},
	getters: {
		user(state){
			return state.user
		},
		setLoading(state){
			return state.loading;
		},
		getError(state){
			return state.error;
		},
		isUserLoggedIn(state){
			return state.user !== null
		}
	}
}