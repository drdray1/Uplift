<template>
  <div>
    <div class="mx-auto" style="width: 95%;">
      <div class="jumbotron jumbotron-fluid bg-info">
        <div class="container">
          <h1 class="display-5">Edit Your Message</h1>
        </div>
      </div>
    </div>
    <div class="mx-auto" style="width: 65%;">
      <form @submit.prevent="editMessage">
        <div class="form-group">
          <label class="lead">To edit your message, type in a new one here!
            <textarea class="form-control" rows="2" v-model="message"></textarea>
          </label>
        </div>
        <button  type="submit" class="btn btn-sm btn-outline-info m-2">Edit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Edit",
  data() {
    return {
      message: "",
    }
  },
  methods: {
    editMessage() {
      this.$root.$data.addMessage(this.message);
      this.message = "";
    },
  }

}
</script>

<style scoped>

</style>