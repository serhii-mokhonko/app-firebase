<template>
<div class="col-12 d-flex justify-content-center">
	<div class="card mt-1" style="width: 350px">
  		<div class="card-header">
  			<h2>Register user</h2>
  		</div>
  		<div class="card-body">
  			<form>
				<div class="form-group">
					<label for="InputEmail">Email address</label>
					<input type="email" class="form-control" :class="{ 'is-invalid': $v.email.$error }" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" v-model.trim="email" @blur="$v.email.$touch()">
					<div class="invalid-feedback" v-if='!$v.email.required'>
    				    This field is required!
    				</div>
    				<div class="invalid-feedback" v-if="!$v.email.email">
    				    Please enter correct email!
    				</div>
				</div>
				<div class="form-group">
					<label for="InputPassword">Password</label>
					<input type="password" class="form-control" :class="{ 'is-invalid': $v.password.$error }" id="InputPassword" placeholder="Password" v-model.trim="password" @blur="$v.password.$touch()">
					<div class="invalid-feedback" v-if='!$v.password.minLength'>
				    	Password should be 6 symbols || {{ password.length }}/6
				    </div>
				</div>
				<div class="form-group">
					<label for="ConfirmInputPassword">Confirm Password</label>
					<input type="password" class="form-control" :class="{ 'is-invalid': $v.confirmPassword.$error }" id="ConfirmInputPassword" placeholder="Confirm Password" v-model.trim="confirmPassword" @blur="$v.confirmPassword.$touch()">
					<div class="invalid-feedback" v-if='!$v.confirmPassword.confirm'>
				    	Pasword must match!
				    </div>
				 </div>
				<button class="btn btn-primary btn-block" @click.prevent='addUser()' :disabled='$v.$invalid'>
					<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" v-if='loading'></span>
					<span v-if='!loading'>Submit</span>
					<span v-if='loading'>Loading</span>
				</button>
			</form>
  		</div>
	</div>
	<!--
	<pre>
		{{ $v }}
	</pre>
	-->
</div>
</template>

<script >
import { required, minLength, sameAs, email } from 'vuelidate/lib/validators'
export default {
	data(){
		return {
			email: null,
			password: null,
			confirmPassword: null,
		}
	},
	computed:{
		loading(){
			return this.$store.getters.setLoading;
		}
	},
	methods: {
		addUser(){
			this.$store.dispatch('addUser', {email: this.email, pass: this.password})
				//.then(() => this.$router.push({ name: "home" }))
				.catch(() => {});
		}
	},
	validations: {
		email: {
			required,
			email
		},
		password: {
			minLength: minLength(6)
		},
		confirmPassword: {
			minLength: minLength(6),
			confirm: sameAs('password')
		}
	}
}
	
</script>