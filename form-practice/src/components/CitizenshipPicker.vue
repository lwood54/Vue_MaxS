<template>
  <div>
    <label for="citizenship">Citizenship</label>
    <input v-model="citizenship" />
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        citizenship: ""
      }
    }
  }
</script>