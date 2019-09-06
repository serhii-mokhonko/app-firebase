<template>
<div class="container">
	<div class="row mt-1">
		<div class="col-sm-12 text-center" v-if="loading">
  			<b-spinner label="Spinning"></b-spinner>
		</div>
		<div class="col-sm-12">
		  <b-carousel
		    id="carousel-fade"
		    style="text-shadow: 0px 0px 2px #000"
		    controls
		    fade
		    indicators
		    img-width="1024"
		    img-height="480"
		  >
		  	<b-carousel-slide
				v-for="promoPost in promoPosts"
				:key="promoPost.id"
				:caption="promoPost.title"
				:img-src="promoPost.imgSrc"
		  	>
		  	</b-carousel-slide>
		  </b-carousel>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-12 col-md-6 col-lg-4 mt-1" v-for="post of posts" :key="post.id">
			<div class="card">
				<img :src="post.imgSrc" class="card-img-top">
				<div class="card-body">
					<h5 class="card-title">{{ post.title }}</h5>
					<p class="card-text">{{ post.description }}</p>
					<router-link :to="'/post/'+post.id" class="btn btn-primary">Read more...</router-link>
				</div>
			</div>
		</div>
	</div>
	
</div>
</template>

<script>
export default {
	computed: {
		posts () {
			return this.$store.getters.getAds
		},
		promoPosts () {
			return this.$store.getters.promoPosts
		},
		loading () {
			return this.$store.getters.setLoading
		}
	},
	created () {
		this.$store.dispatch("fetchPost")
	}
}
</script>