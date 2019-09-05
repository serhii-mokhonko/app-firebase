import * as fb from 'firebase'

class Ad {
	constructor(title, description, ownerId, imgSrc = '', promo = false, id = null){
		this.title = title;
		this.description = description;
		this.ownerId = ownerId;
		this.imgSrc = imgSrc;
		this.promo = promo;
		this.id = id;
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
					getters.user.id,
					payload.imgSrc,
					payload.promo
				)
				const ad = await fb.database().ref("post").push(newPost)
				// console.log(ad);
				commit('setLoading', false)
				commit('createPost', {
					...newPost,
					id: ad.key
				})
			}catch(error){
				commit('setError', error.message)
				commit('setLoading', false)
				throw error
			}
		}
	},
	getters: {}
}