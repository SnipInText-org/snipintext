// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import Box from "@/components/mock";
import VueDraggableResizable from 'vue-draggable-resizable'

Vue.config.productionTip = false
// Vue.component("box",Box);

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
module.exports = {
  mode: 'production'
}
