<template>
<div class="col-12 d-flex justify-content-center">
	<div class="card mt-1" style="width: 350px">
		<div class="card-header">
			<h2>Login</h2>
		</div>
		<div class="card-body">
			<form>
				<div class="form-group">
					<label for="InputEmail">Email address</label>
					<input type="email" class="form-control" :class="{ 'is-invalid': $v.email.$error }" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" v-model="email" @blur="$v.email.$touch()">
					<div class="invalid-feedback" v-if='!$v.email.required'>
    				    This field is required!
    				</div>
    				<div class="invalid-feedback" v-if='!$v.email.email'>
    				    This field must be email!
    				</div>
				</div>
				<div class="form-group">
					<label for="InputPassword">Password</label>
					<input type="password" class="form-control" :class="{ 'is-invalid': $v.password.$error }" id="InputPassword" placeholder="Password" v-model="password" @blur="$v.password.$touch()">
					<div class="invalid-feedback" v-if='!$v.password.required'>
    				    This field is required!
    				</div>
    				<div class="invalid-feedback" v-if='!$v.password.minLength'>
    				    This field must be 6 symbols minimum!
    				</div>
				</div>
				<button class="btn btn-primary btn-block" @click.prevent='loginUser' :disabled="$v.$invalid">
					<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if='loading'></span>
					<span v-if='!loading'>Login</span>
					<span v-if='loading'>Wait...</span>
				</button>
			</form>
		</div>
	</div>
</div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
	data(){
		return {
			email: null,
			password: null
		}
	},
	computed: {
		loading(){
			return this.$store.getters.setLoading;
		}
	},
	methods: {
		loginUser(email, password){
			this.$store.dispatch('loginUser', {email: this.email, pass: this.password})
				.then(() => this.$router.push({ name: "home" }))
				.catch(() => {});
		}
	},
	validations: {
		email: {
			required,
			email
		},
		password:{
			required,
			minLength: minLength(6)
		}
	}	
}
</script>