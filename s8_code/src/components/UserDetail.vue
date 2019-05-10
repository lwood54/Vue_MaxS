<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{name}}</p>
        <button @click="reverseString">Reverse Name</button>
        <p >Reversed name: {{reverseName}}</p>
        <hr>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>

      export default {
            props: {
                  name: {
                        type: String,
                        required: true
                  },
                  handleAlert: Function
            },
            data: function() {
                  return {
                        reverseName: this.name
                  }
            },
            methods: {
                  reverseString() {
                        this.reverseName = this.name.split("").reverse().join("");
                  },
                  resetName() {
                        this.name = "Logan";
                        this.$emit("nameReset", this.name);
                  }
            }
          }

</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
