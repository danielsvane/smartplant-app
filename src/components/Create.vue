<template>
  <div class="container">

    <div class="display-1 pa-3">
      Setting up new plant
    </div>

    <v-stepper v-model="page" class="mt-3 elevation-0" alt-labels>
      <v-stepper-header class="elevation-0">
        <v-stepper-step :complete="page > 1" step="1">Pair</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="page > 2" step="2">Connect</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="page > 3" step="3">Setup</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <div>
            <div class="subheading mb-4">
              To connect to your plant, switch it on and wait for the light to turn blue. When the blue light shows, click the button below and select your plant from the list.
            </div>
            <div class="text-xs-center">
              <v-btn color="primary" @click="getDevices" large :disabled="pairing">
                Connect to plant
                <v-icon right>bluetooth_connected</v-icon>
              </v-btn>
            </div>

          </div>
        </v-stepper-content>
        <v-stepper-content step="2">
          <div class="subheading mb-4">
            Let your plant know the name and password of your network, so it can send you messages.
          </div>
          <v-text-field v-model="ssid" label="SSID" :disabled="!device"/>
          <v-text-field v-model="password" type="password" label="Password" :disabled="!device"/>

          <div class="text-xs-center mt-4">
            <v-btn color="primary" @click="page = 3" large :disabled="saving">
              Save network settings
              <v-icon right>wifi</v-icon>
            </v-btn>
          </div>
        </v-stepper-content>
        <v-stepper-content step="3">
          <div class="subheading mb-4">
            You're almost done! Give your plant a name to finish.
          </div>
          <v-text-field label="Plant name" v-model="name"></v-text-field>
          <div class="text-xs-center mt-4">
            <v-btn color="primary" @click="saveSettings" large :disabled="saving">
              Save and finish
              <v-icon right>done</v-icon>
            </v-btn>
          </div>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>

  </div>
</template>

<script>
  import {str2ab} from '@/imports/buffers'
  import firebase from 'firebase'
  // import sleep from 'sleep-promise'

  export default {
    data () {
      return {
        sensorValue: '',
        ssid: 'koben65patos47smuds',
        password: 'b20e19b9cbac5ca90a2a0b6df3',
        device: null,
        sendCharacteristic: null,
        pairing: false,
        page: 1,
        saving: false,
        name: 'Peace lily'
      }
    },
    methods: {
      async getDevices () {
        let device = await navigator.bluetooth.requestDevice({
          // acceptAllDevices: true,
          filters: [ {name: 'Smartplant'} ],
          optionalServices: ['6e400001-b5a3-f393-e0a9-e50e24dcca9e', '6e400002-b5a3-f393-e0a9-e50e24dcca9e', '6e400003-b5a3-f393-e0a9-e50e24dcca9e']
        })
        this.pairing = true
        let server = await device.gatt.connect()
        let service = await server.getPrimaryService('6e400001-b5a3-f393-e0a9-e50e24dcca9e')
        this.sendCharacteristic = await service.getCharacteristic('6e400002-b5a3-f393-e0a9-e50e24dcca9e')
        this.device = device
        this.pairing = false
        this.page = 2
      },
      async saveSettings () {
        this.saving = true

        let ref = await firebase.database().ref('plants/' + firebase.auth().currentUser.uid).push({
          name: this.name
        })

        await this.sendCharacteristic.writeValue(str2ab('ssid' + this.ssid))
        await this.sendCharacteristic.writeValue(str2ab('pass' + this.password))
        await this.sendCharacteristic.writeValue(str2ab('usid' + firebase.auth().currentUser.uid))
        await this.sendCharacteristic.writeValue(str2ab('plid' + ref.key))
        await this.sendCharacteristic.writeValue(str2ab('ssav'))
        this.saving = false
        this.$router.push({name: 'Index'})
      }
    }
  }
</script>

<style scoped>
  .container {
    max-width: 600px;
  }

  .stepper__step__step {
    /* margin-right: 8px !important; */
  }

  .stepper__label {
    display: flex !important;
  }
</style>
