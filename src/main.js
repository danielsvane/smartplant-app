// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from 'firebase'
import store from '@/store'

let config = {
  apiKey: 'AIzaSyBgPx58rW5EhR9HFa5ywx4yOJv9uA3X2Kw',
  authDomain: 'smartplant-df86c.firebaseapp.com',
  databaseURL: 'https://smartplant-df86c.firebaseio.com',
  projectId: 'smartplant-df86c',
  storageBucket: '',
  messagingSenderId: '656574657379'
}

firebase.initializeApp(config)

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.commit('login', {
      email: user.email
    })
  }
  store.commit('setReady')
})
