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
        name: ''
      }
    },
    async mounted () {
      firebase.database().ref('/plants/').on('value', (snapshot) => {
        this.plants = snapshot.val()
      })
    },
    methods: {
      addPlant () {
        firebase.database().ref('plants').push({
          name: this.name,
          uid: firebase.auth().currentUser.uid
        })
      }
    }
  }
</script>
