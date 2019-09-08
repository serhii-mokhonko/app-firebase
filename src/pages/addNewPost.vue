<template>
<div class="container">
	<div class="row d-flex justify-content-center mt-1">
		<div class="card" style="width: 97%">
		  <div class="card-header">
		    Add New Post
		  </div>
			<div class="card-body">
				<form>
					<div class="form-group">
						<label for="FormTitleInput">Title</label>
						<input type="text" class="form-control" id="FormTitleInput" placeholder="" v-model="newPost.title">
					</div>
					<div class="form-group">
						<label for="FormBodyTextarea">Description</label>
						<textarea class="form-control" id="FormBodyTextarea" rows="5" v-model="newPost.description"></textarea>
					</div>
					<div class="input-group mb-3">
						<b-button variant="dark" @click='trigerUpload'>Upload</b-button>
						<input ref='fileInput' type="file" style="display: none" accept="image/*" @change="onFileChange">
					</div>
					<div class="input-group mb-3" v-if='newPost.imgSrc'>
						<img :src="newPost.imgSrc" style='width: 320px;'>
					</div>
					<div class="custom-control custom-switch">
						<input type="checkbox" class="custom-control-input" id="customSwitch" v-model="newPost.promo">
						<label class="custom-control-label" for="customSwitch">Promo (add to slider)</label>
					</div>
					<button class="btn btn-sm btn-primary mt-2" style="width: 100px" type="button" @click.prevent="sendData">
						<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true" v-if="isLoading"></span>
						Send
					</button>
				</form>
		  	</div>
		</div>
	</div>
</div>
</template>

<script>
import { read } from 'fs';
export default {
	data(){
		return {
			newPost:{
				title: null,
				description: null,
				promo: false,
				img: null,
				imgSrc: ""
			}
		}
	},
	computed:{
		isLoading(){
			return this.$store.getters.setLoading;
		}
	},
	methods: {
		sendData(){
			this.$store.dispatch("addNewPost", this.newPost).
				then(() => this.$router.push({name: "home"}))
				.catch(()=>{})
		},
		trigerUpload () {
			this.$refs.fileInput.click()
		},
		onFileChange (event) {
			const file = event.target.files[0]
			const reader = new FileReader()
			reader.onload = e => {
				this.newPost.imgSrc = reader.result
			}
			reader.readAsDataURL(file)
			this.newPost.img = file
		}
	}
}
</script>