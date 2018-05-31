<template>
  <v-dialog :value="true" persistent max-width="500">
    <v-card>
      <v-card-title>
        <div class="headline">
          Sign in
        </div>
      </v-card-title>
      <v-card-text>
        <v-form @keyup.native.enter="signIn">
          <v-text-field v-model="email" label="Email" required></v-text-field>
          <v-text-field v-model="password" type="password" label="Password" required></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" flat @click="signIn">Sign in</v-btn>
        OR
        <v-btn color="primary" flat @click="createAccount">Create account</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script>
  import firebase from 'firebase'

  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async signIn () {
        try {
          await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        } catch (err) {
          console.log(err)
        }
      },
      async createAccount () {
        try {
          await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
</script>
