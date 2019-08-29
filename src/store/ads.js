import * as fb from 'firebase'

class Ad {
	constructor(title, description, ownerId){
		this.title = title;
		this.description = description;
		this.ownerId = ownerId
	}
}

export default {
	state: {},
	mutations: {},
	actions: {
		async addNewPost({commit, getters}, payload){
			commit("setLoading", true)
			commit("setError", null)
			try{
				const newPost = new Ad(
					payload.title,
					payload.description,
					getters.user.id
				)
				const ad = await fb.database().ref("post").push(newPost)
				commit('setLoading', false)
				// commit('createPost', {
				// 	...newPost,
				// 	id: ad.key
				// })
				// console.log(postValue)
			}catch(error){
				commit('setError', error.message)
				commit('setLoading', false)
				throw error
			}
		}
	},
	getters: {}
}