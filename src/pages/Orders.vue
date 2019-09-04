<template>
<div class="container">
	<div class="row">
		<div class="col-sm-12">
			<h1>Orders</h1>
		</div>
		<div class="col-sm-12">
			<ul class="list-group list-group-flush">
				<li
					class="list-group-item d-flex bd-highlight"
					v-for="order in orders"
					:key="order.id"
				>
					<div class="custom-control custom-switch flex-grow-1 bd-highlight">
				  		<input 
				  			type="checkbox" 
				  			class="custom-control-input" 
				  			:id="'customSwitch' + order.id"
				  			@change="markDone(order)"
				  			:checked="order.done"
				  		>	
				  		<label class="custom-control-label" :for="'customSwitch' + order.id">{{ order.name }}</label>
					</div>
					<router-link
						class="btn btn-primary p-2 bd-highlight"
						:to="'/post/'+order.id"
						tag='button'
					>
						Open
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</div>
</template>

<script >

export default {
	data () {
		return {
        	orders: [
          		{ name: 'Orange', id: '1', name: 'Vasya', phone: '123456', done: false}
        	]
		}
	},
	methods: {
		markDone (order) {
			order.done = true
		}
	}
}
	
</script>