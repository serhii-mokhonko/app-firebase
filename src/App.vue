<template>
<div id="app">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <router-link tag='li' :to='{ name: "home"}' class="nav-item" v-if="isUserLoggedIn">
                <a class="nav-link">Home</a>
              </router-link>
              <router-link tag='li' :to='{ name: "addNewPost"}' class="nav-item" v-if="isUserLoggedIn">
                <a class="nav-link">New Post</a>
              </router-link>
              <router-link tag='li' :to='{ name: "orders"}' class="nav-item" v-if="isUserLoggedIn">
                <a class="nav-link">Orders</a>
              </router-link>
              <router-link tag='li' :to='{ name: "register"}' class="nav-item" v-if="!isUserLoggedIn">
                <a class="nav-link">Register</a>
              </router-link>
              <router-link tag='li' :to='{ name: "login"}' class="nav-item" v-if="!isUserLoggedIn">
                <a class="nav-link">Login</a>
              </router-link>
              <li class="nav-item" v-if="isUserLoggedIn">
                <a class="nav-link" @click='logoutUser'>Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <b-alert
      v-if="newUser"
      class="mt-1"
      :show="dismissCountDown"
      dismissible
      fade
      variant="success"
    >
      You are register successfully.
    </b-alert>

    <b-alert 
      show 
      variant="danger"
      class="mt-1"
      v-if="error"
    >
      {{error}}
      <button type="button" class="close" aria-label="Close" @click='clearError'>
        <span aria-hidden="true">&times;</span>
      </button>
    </b-alert>
  </div>
  <router-view></router-view>
</div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return{
      dismissCountDown: 5,
    }
  },
  computed:{
    error(){
      return this.$store.getters.getError;
    },
    newUser(){
      return this.$store.getters.newUser;
    },
    isUserLoggedIn(){
      return this.$store.getters.isUserLoggedIn;
    }
  },
  methods: {
    clearError() {
      this.$store.commit('setError', null)
    },
    logoutUser(){
      this.$store.dispatch('logoutUser');
      this.$router.push({ name: 'login' });
    }
  }
}
</script>
