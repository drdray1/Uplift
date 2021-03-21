<template>
  <div id="app">
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <router-link to="/" class="nav-link active">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/BeInspired" class="nav-link active">Find Inspiration</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/Share" class="nav-link active">Share</router-link>
      </li>
    </ul>
    <div class="mx-auto" style="width: 95%;">
      <router-view/> <!--This is where it replaces code from the router -->
    </div>
    <div>
      <footer class="mt-auto p-2">
        <a href="https://github.com/drdray1/Uplift" target="1">Github</a>
      </footer>
    </div>
  </div>
</template>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: gainsboro;
  /*color: #2c3e50;*/
}

</style>
