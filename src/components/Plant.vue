<template>
  <v-card class="plant" color="green" @click.native="deletePlant">
    <v-card-media height="200" src="http://via.placeholder.com/200x200"></v-card-media>
    <v-card-title>
      <div class="body-2 mx-auto">
        {{plant.name}}
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
  import firebase from 'firebase'

  export default {
    props: ['plant', 'id', 'uid'],
    methods: {
      deletePlant () {
        console.log(this.id)
        firebase.database().ref('/plants/' + this.uid + '/' + this.id).remove()
      }
    }
  }
</script>

<style scoped>
  .body-2 {
    text-transform: uppercase;
  }

  .plant {
    cursor: pointer;
  }
</style>
