import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import * as fb from 'firebase'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vuelidate from 'vuelidate'

Vue.use(BootstrapVue)
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created(){
  	fb.initializeApp({
  		apiKey: "AIzaSyBcMBkv3oAgUCg78ythldygj81LZxcQSdg",
    	authDomain: "my-app-fb-daeb7.firebaseapp.com",
    	databaseURL: "https://my-app-fb-daeb7.firebaseio.com",
    	projectId: "my-app-fb-daeb7",
    	storageBucket: "",
    	messagingSenderId: "469723588498",
    	appId: "1:469723588498:web:2d408ca898938821"
  	});

    fb.auth().onAuthStateChanged(user => {
      if(user){
        this.$store.dispatch('autoLoginUser', user)
      }
    });
  },
  render: h => h(App),
}).$mount('#app')
