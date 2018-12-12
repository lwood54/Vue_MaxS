<template>
  <div class="container">
    <pageHeading></pageHeading>
    <hr>
    <div class="row">
      <servers></servers>
      <serverDetails></serverDetails>
    </div>
    <hr>
    <pageFooter></pageFooter>
  </div>
</template>

<script>
// Max imported these components locally, like this:
import PageHeading from "./components/Shared/PageHeading.vue";
import PageFooter from "./components/Shared/PageFooter.vue";
import Servers from "./components/Server/Servers.vue";
import ServerDetails from "./components/Server/ServerDetails.vue";

// once imported, then you must add to default export for components object
export default {
  components: {
    pageHeading: PageHeading,
    pageFooter: PageFooter,
    servers: Servers,
    serverDetails: ServerDetails
  }
};
</script>

<style>
</style>
