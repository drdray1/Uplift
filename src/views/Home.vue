<template>
  <div class="home">
    <div class="mx-auto" style="width: 95%;">
      <div class="jumbotron jumbotron-fluid bg-info">
        <div class="container">
          <h1 class="display-5"><strong>Uplift</strong></h1>
          <hr>
          <p class="lead">I hope that while you are here you'll be inspired by others.</p>
        </div>
      </div>
      <div class="mx-auto" style="width: 75%;">
        <div class="card bg-light mb-3">
          <div class="card-body">
            <p class="card-text">{{this.quote}}</p>
          </div>
          <div class="card-footer"><em>by: Kanye West</em></div>
        </div>
        <UserListHome :users="users" :messages="messages"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import UserListHome from "@/components/UserListHome";

export default {
  name: 'Home',
  components: {
    UserListHome,
  },
  data() {
    return {
      quote: "",
    }
  },
  computed: {
    users() {
      return this.$root.$data.users;
    },
    messages() {
      return this.$root.$data.messages;
    }
  },
  mounted() {
    let url = "https://api.kanye.rest/"; // "https://type.fit/api/quotes"; // "https://quotes.rest/quote/random?language=en&limit=1"; //"https://zenquotes.io/api/random";
    try {
      axios.get(url).then(response => {
        // console.log(response.data.quote);
        this.quote = response.data.quote;
      })
    } catch(error) {
      console.log(error);
    }
  },
}
</script>
