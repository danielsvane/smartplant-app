<template>
  <div class="container">
    <div class="display-1 pa-3">
      Plants
    </div>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs4 v-for="plant in plants">
          <Plant :plant="plant"></Plant>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import Plant from '@/components/Plant'

  export default {
    components: {
      Plant
    },
    data () {
      return {
        plants: {},
        uid: ''
      }
    },
    async mounted () {
      this.uid = firebase.auth().currentUser.uid
      console.log(this.uid)
      firebase.database().ref('/plants/' + this.uid).on('value', (snapshot) => {
        this.plants = snapshot.val()
      })
    }
  }
</script>
