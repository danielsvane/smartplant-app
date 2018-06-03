<template>
  <div>
    <v-text-field label="Name" v-model="name"></v-text-field>
    <v-btn @click="addPlant">Add plant</v-btn>

    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs4 v-for="plant in plants">
          {{plant.name}}
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    data () {
      return {
        plants: {},
        name: '',
        uid: ''
      }
    },
    async mounted () {
      this.uid = firebase.auth().currentUser.uid
      console.log(this.uid)
      firebase.database().ref('/plants/' + this.uid).on('value', (snapshot) => {
        this.plants = snapshot.val()
      })
    },
    methods: {
      addPlant () {
        // o3y40gbJ2lSJte6MnZCQM5nHICB3
        firebase.database().ref('plants/' + this.uid).push({
          name: this.name
        })
      }
    }
  }
</script>
