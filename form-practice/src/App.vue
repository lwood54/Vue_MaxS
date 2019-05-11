<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact Me</router-link> |
      <router-link to="/insubuy">Insubuy</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  },
  data: function() {
    return {
      mainTitle: "First Vue App"
    };
  }
};
</script>