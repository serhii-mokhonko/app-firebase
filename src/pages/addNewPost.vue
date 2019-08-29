<template>
<div class="card mt-1">
  <div class="card-header">
    Add New Post
  </div>
  <div class="card-body">
	<form>
	  <div class="form-group">
	    <label for="FormTitleInput">Tittle</label>
	    <input type="text" class="form-control" id="FormTitleInput" placeholder="">
	  </div>
	  <div class="form-group">
	    <label for="FormBodyTextarea">Body</label>
	    <textarea class="form-control" id="FormBodyTextarea" rows="5"></textarea>
	  </div>
	  <div class="input-group mb-3">
	  <div class="input-group-prepend">
	    <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
	  </div>
	  <div class="custom-file">
	    <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
	    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
	  </div>
	</div>
	  <button class="btn btn-sm btn-primary" @click.prevent="sendData">Send</button>
	</form>
  </div>
</div>
</template>

<script>
export default {
	methods: {
		data(){
			return {

			}
		},
		sendData(){

		}
	}
}
</script>