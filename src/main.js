import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './assets/mock-data.js'

/*import axios from 'axios'
import VueAxios from 'vue-axios'

App.use(VueAxios, axios)*/

Vue.config.productionTip = false

let data = {
  users: mock,
  messages: new Array(51).fill(null),
  visitorId: 2 /*Math.trunc((Math.random() * 50) + 1)*/,

  addMessage(message) {
    this.messages[this.getVisitorId() + 1] = message;
  },
  getVisitorId() {
    return this.visitorId - 1;
  },
  deleteMessage(i) {
    this.messages[i] = null;
  },
  getUser() {
    return this.users[this.getVisitorId()];
  }
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
