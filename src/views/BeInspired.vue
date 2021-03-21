<template>
  <div>
    <div class="mx-auto" style="width: 95%;">
      <div class="jumbotron jumbotron-fluid bg-info">
        <div class="container">
          <h1 class="display-5">Your Inspiration</h1>
          <p>(yes you may only contribute one so make it count!)</p>
          <h6>You can upload you own inspirational story under the Share tab</h6>
        </div>
      </div>
    </div>
    <div class="mx-auto" style="width: 65%;">
      <UserList :users="users" :messages="messages"/>
    </div>
  </div>
</template>

<script>
import UserList from "@/components/UserList";

export default {
  name: 'BeInspired',
  components: {
    UserList,
  },
  computed: {
    users() {
      return this.$root.$data.users;
    },
    messages() {
      return this.$root.$data.messages;
    }
  },
}
</script>
