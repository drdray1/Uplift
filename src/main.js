import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './assets/mock-data.js'

Vue.config.productionTip = false

let data = {
  users: mock,
  messages: new Array(51).fill(null),
  visitorId: Math.trunc((Math.random() * 50)),

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
