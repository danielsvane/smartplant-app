<template>
  <v-app dark>
    <CreateAccount v-model="showCreateAccountModal"></CreateAccount>

    <v-toolbar fixed app>
      <v-toolbar-title>Smartplant</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn flat @click="showCreateAccountModal = true">Create account</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import CreateAccount from '@/components/CreateAccount'

  export default {
    components: {
      CreateAccount
    },
    data () {
      return {
        showCreateAccountModal: true
      }
    }
  }
</script>
