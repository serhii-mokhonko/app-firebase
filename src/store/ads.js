import * as fb from 'firebase'
import { stat } from 'fs';

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
	state: {
		ads: []
	},
	mutations: {
		postsArr (state, payload){
			state.ads = payload
		},
		createPost (state, payload) {
			state.ads.push(payload)
		}
	},
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
		},
		async fetchPost ({commit}) {
			commit("setLoading", true)
			commit("setError", null)
			const postResult = []
			try{
				const fbPost = await fb.database().ref('post').once('value')
				const posts = fbPost.val()
				Object.keys(posts).forEach(key => {
					const pst = posts[key]
					postResult.push(new Ad(pst.title, pst.description, pst.ownerId, pst.imgSrc, pst.promo, key))
				})
				commit('postsArr', postResult)
				console.log(postResult)
				commit('setLoading', false)
			}catch(error){
				commit('setLoading', false)
				commit('setError', error.message)
				throw error
			}
		}
	},
	getters: {
		getAds (state) {
			return state.ads
		},
		promoPosts (state) {
			return state.ads.filter(arr => arr.promo === true)
		}
	}
}