<template>
  <div>
    <div class="users">
      <div class="user mb-3" v-for="user in updateUsers" :key="user.id">
        <div v-if="updateMessages[user.id] != null">
          <div class="media">
            <div class="media-body bg-light">
              <h4 class="mt-0 mb-1">{{user.first_name}} {{user.last_name}}</h4>
              <p class="lead">From - {{user.city}}</p>
              <hr class="mx-auto" style="width: 75%;">
              <p><em>{{messages[user.id]}}</em></p>
              <router-link to="/Edit" class="btn btn-sm btn-outline-info m-2">Edit</router-link>
              <button class="btn btn-sm btn-outline-danger m-2" v-on:click="deleteMessage(user.id)">Delete</button>
            </div>
            <img class="ml-3 rounded-circle border border-dark" :src="user.thumbnail">
          </div>
        </div>
        <div v-else></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "UserList",
  props: {
    users: Array,
    messages: Array
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
  }
}
</script>
