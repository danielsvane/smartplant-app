<template>
  <v-dialog v-model="show" max-width="500px">
    <v-card>
      <v-card-title>
        Create account
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field v-model="email" label="Email" required></v-text-field>
          <v-text-field v-model="password" type="password" label="Password" required></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" flat @click="createAccount">Create</v-btn>
        <v-btn color="primary" flat @click="show=false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ['value'],
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      createAccount () {

      }
    },
    computed: {
      show: {
        get () { return this.value },
        set (value) { this.$emit('input', value) }
      }
    }
  }
</script>
