<template>
  <v-app dark>
    <SignIn v-if="!$store.state.user && $store.state.ready"></SignIn>
    <template v-else-if="$store.state.ready">
      <v-toolbar fixed app dense class="elevation-0">
        <v-toolbar-title>Smartplant</v-toolbar-title>
        <v-spacer />
        <div>
          Signed in as <b>{{$store.state.user.email}}</b>
        </div>
        <v-spacer />
        <v-toolbar-items>
          <v-btn flat @click="$store.commit('logout')">Sign out</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <v-container>
          <router-view/>
        </v-container>
      </v-content>
    </template>
  </v-app>
</template>

<script>
  import SignIn from '@/components/SignIn'

  export default {
    components: {
      SignIn
    },
    data () {
      return {
      }
    }
  }
</script>
