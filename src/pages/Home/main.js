import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import firebase from "firebase"


Vue.config.productionTip = false

let config = {
  apiKey:​ ​”AIzaSyCAShPra8k4DxiBdJBl7StsVUBqldWG5ec”​,
  authDomain:​ ​”dbl-project-411b4.firebaseapp.com”​,
  databaseURL:​ ​”https://dbl-project-411b4.firebaseio.com"​,
  projectId:​ ​”dbl-project-411b4”​,
  storageBucket:​ ​”dbl-project-411b4.appspot.com”​,
  messagingSenderId:​ ​”435554159758”
  };
  firebase.initializeApp(config);

new Vue({
  render: h => h(App),
}).$mount('#app')
