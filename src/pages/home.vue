<template>
<div class="container">
	<div class="row mt-1">
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
				v-for="post in posts"
				:key="post.id"
				:caption="post.title"
				:img-src="post.img"
				:interval="3000"
		  	>
		  	</b-carousel-slide>
		  </b-carousel>
		</div>
	</div>
	<div class="row">
		<div class="col-sm-12 col-md-6 col-lg-4 mt-1" v-for="post of posts" :key="post.id">
			<div class="card">
				<img :src="post.img" class="card-img-top">
				<div class="card-body">
					<h5 class="card-title">{{ post.title }}</h5>
					<p class="card-text">{{ post.description }}</p>
					<router-link :to="'/post/'+post.id" class="btn btn-primary">Read more...</router-link>
					<!-- <a href="" class="btn btn-primary">Read more...</a> -->
				</div>
			</div>
		</div>
	</div>
	
</div>
</template>

<script>
export default {
	data () {
		return {
			posts: [
				{
					title: "First title",
					description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
					img: "https://picsum.photos/id/1000/1024/480",
					promo: true,
					id: 0
				},
				{
					title: "Second title",
					description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
					img: "https://picsum.photos/id/1002/1024/480",
					promo: true,
					id: 1
				},
				{
					title: "Third title",
					description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
					img: "https://picsum.photos/id/103/1024/480",
					promo: true,
					id: 2
				},
				{
					title: "4",
					description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
					img: "https://picsum.photos/id/1041/1024/480",
					promo: true,
					id: 444
				},
				{
					title: "5555",
					description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
					img: "https://picsum.photos/id/1051/1024/480",
					promo: true,
					id: 666
				},
				{
					title: "6666",
					description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
					img: "https://picsum.photos/id/1032/1024/480",
					promo: true,
					id: 555
				}
			]
		}
	}
}
</script>