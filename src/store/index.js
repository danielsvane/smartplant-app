import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null,
    ready: false
  },
  mutations: {
    login (state, user) {
      state.user = user
    },
    logout (state) {
      firebase.auth().signOut()
      state.user = null
    },
    setReady (state) {
      state.ready = true
    }
  }
})

export default store
