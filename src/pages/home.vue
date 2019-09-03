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
		      caption="First slide"
		      img-src="https://picsum.photos/1024/480/?image=10"
		    ></b-carousel-slide>
		    <b-carousel-slide
		      caption="Second Slide"
		      img-src="https://picsum.photos/1024/480/?image=12"
		    ></b-carousel-slide>
		    <b-carousel-slide
		      caption="Third Slide"
		      img-src="https://picsum.photos/1024/480/?image=22"
		    ></b-carousel-slide>
		  </b-carousel>
		</div>
	</div>
	<div class="row mt-1">
		<div class="col-sm-12 col-md-4">
			<div class="card">
				<img src="../assets/1.jpg" class="card-img-top" alt="...">
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" class="btn btn-primary">Go somewhere</a>
				</div>
			</div>
		</div>
		<div class="col-sm-12 col-md-4">
			<div class="card">
				<img src="../assets/2.jpg" class="card-img-top" alt="...">
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" class="btn btn-primary">Go somewhere</a>
				</div>
			</div>
		</div>
		<div class="col-sm-12 col-md-4">
			<div class="card">
				<img src="../assets/3.jpg" class="card-img-top" alt="...">
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" class="btn btn-primary">Go somewhere</a>
				</div>
			</div>
		</div>
	</div>
	
</div>
</template>