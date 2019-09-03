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
					<!-- <div class="input-group mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
						</div>
						<div class="custom-file">
							<input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
							<label class="custom-file-label" for="inputGroupFile01">Choose file</label>
						</div>
					</div> -->
					<button class="btn btn-sm btn-primary" style="width: 75px" type="button" @click.prevent="sendData">
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
export default {
	data(){
		return {
			newPost:{
				title: null,
				description: null
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
			this.$store.dispatch("addNewPost", this.newPost)
		}
	}
}
</script>