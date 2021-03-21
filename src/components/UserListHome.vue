<template>
  <div>
    <div class="users">
      <div class="user mb-3" v-for="user in updateUsers" :key="user.id">
        <div v-if="updateMessages[user.id] != null"></div>
        <div v-else>
          <div class="card bg-light mb-3">
            <div class="card-body">
              <img class="ml-3 rounded-circle border border-dark" :src="user.thumbnail">
              <p class="card-text mt-3">{{user.message}}</p>
            </div>
            <div class="card-footer"><em>by: {{user.first_name}} {{user.last_name}}</em></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "UserListHome",
  props: {
    users: Array,
    messages: Array
  },
  data() {
    return {
      norris: [],
    }
  },
  methods: {
    deleteMessage(i) {
      this.$root.$data.deleteMessage(i);
    }
  },
  computed: {
    updateUsers() {
      return this.$root.$data.users;
    },
    updateMessages() {
      return this.$root.$data.messages;
    }
  },
  mounted() {
    let url = "https://api.chucknorris.io/jokes/random";
    let url2 = "https://api.taylor.rest/";

    let flag = true;

    for (let user of this.users) {
      try {
        if (flag) {
          axios.get(url).then(response => {
            //console.log(response.data.value);
            user.message = response.data.value;
          })
          flag = !flag;
        } else {
          axios.get(url2).then(response => {
            // console.log(response.data.quote);
            user.message = response.data.quote;
          })
          flag = !flag;
        }
      } catch(error) {
        console.log(error);
      }
    }
  },
}
</script>
