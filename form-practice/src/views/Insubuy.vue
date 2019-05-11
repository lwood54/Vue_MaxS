<template>
      <div>
            <first-form :formTitle="title" />
      </div>
</template>

<script>
import FirstForm from '../components/FirstForm.vue';

export default {
      data: function() {
            return {
                  title: "Insubuy"
            }
      },
      components: {
            'first-form': FirstForm
      }
}
</script>

<style>

</style>
