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
	state: {
		ads: []
	},
	mutations: {
		postsArr (state, payload){
			state.ads = payload
		}
	},
	actions: {
		async addNewPost({commit, getters}, payload){
			commit("setLoading", true)
			commit("setError", null)
			const img = payload.img
			try{
				const storageRef = fb.storage().ref()
				const dbRef = fb.database().ref("post")
				const postId = dbRef.push()
				const imgExt = img.name.slice(img.name.lastIndexOf('.')) // get file extention	
				await storageRef.child('post/'+ postId + imgExt).put(img) //load file to storage
				let imgSrc = null
				await storageRef.child('post/'+ postId + imgExt).getDownloadURL()
					.then(url => {imgSrc = url})
					.catch((err) => console.log(err.message))
				//add data to db
				postId.set({
					title: payload.title,
					description: payload.description,
					ownerId: getters.user.id,
					imgSrc,
					promo: payload.promo
				})
				commit('setLoading', false)
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