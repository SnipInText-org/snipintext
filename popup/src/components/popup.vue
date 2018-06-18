<template>
  <div>
    <v-btn color="success" v-on:click="msg.action.select.then((ok)=>console.log('from PROMISE',ok))">Success</v-btn>
  </div>
</template>

<script>
  import msg from "../api/Messaging.js";

  export default {
    name: 'popup',
    data() {
      return {
      };
    },
    methods: {
    }
  };
</script>
