<template>
  <div id="app">
    <v-app>
      <box>
        <popup/>
      </box>
    </v-app>
  </div>
</template>


<script>
  import Popup from "./components/Popup";
  import Box from "./components/mock.vue";

  export default {
    name: 'app',
    components: {
      Popup,
      Box
    },
  };
</script>

