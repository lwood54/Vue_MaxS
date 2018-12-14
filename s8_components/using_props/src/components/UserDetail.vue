<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
  </div>
</template>

<script>
export default {
  props: {
    // basic version --> props: "myName"
    // myName: String
    // can be multiple types --> [String, Array]
    // can be an object:
    myName: {
      type: String,
      required: true, // optional validation
      default: "Logan" // optional validation
    }
  },
  methods: {
    switchName() {
      return this.myName
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
