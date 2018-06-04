<template>
  <v-card color="green">
    <v-card-media height="200" src="http://via.placeholder.com/200x200"></v-card-media>
    <v-card-title>
      <div class="body-2 mx-auto">
        {{plant.name}}
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
  export default {
    props: ['plant']
  }
</script>

<style scoped>
  .body-2 {
    text-transform: uppercase;
  }
</style>
