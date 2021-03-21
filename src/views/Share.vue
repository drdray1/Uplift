<template>
  <div>
    <div class="mx-auto" style="width: 95%;">
      <div class="jumbotron jumbotron-fluid bg-info">
        <div class="container">
          <h1 class="display-5">Welcome, <strong>{{this.getUser().first_name}}!</strong><img :src="this.getUser().thumbnail" class="ml-3 rounded-circle border border-dark"></h1>
        </div>
      </div>
    </div>
    <div class="mx-auto" style="width: 65%;">
      <form @submit.prevent="addMessage">
        <div class="form-group">
          <label class="lead mb">Type in a message you think could inspire those around you!
            <textarea class="form-control mt-3" rows="2" v-model="message"></textarea>
          </label>
        </div>
        <button type="submit" class="btn btn-secondary btn-sm" >Share</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Share",
  data() {
    return {
      message: "",
    }
  },
  methods: {
    addMessage() {
      /*console.log(this.message);*/
      this.$root.$data.addMessage(this.message);
      this.message = "";
    },
    getUser() {
      return this.$root.$data.getUser();
    }
  }

}
</script>

<style scoped>

</style>