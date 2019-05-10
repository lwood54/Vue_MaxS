<template>
  <div>
    <h1>{{formTitle}}</h1>
    <input v-model="message">
    <p>Message: {{message}}</p>
    <textarea v-model="txtMessage" placeholder="add multiple lines"/>
    <p style="white-space: pre-line;">Multi-line message: {{txtMessage}}</p>
    <form @submit.prevent="handleSubmit">
      <form-date-picker/>
      <hr>
      <form-policy-picker/>
      <hr>
      <form-citizenship-picker/>
      <hr>
      <button type="submit">Get Quotes</button>
    </form>
  </div>
</template>


<script>
import DatePicker from "../components/DatePicker.vue";
import PolicyPicker from "../components/PolicyPicker";
import CitizenshipPicker from "../components/CitizenshipPicker";
export default {
  data: function() {
    return {
      formTitle: "First Form",
      message: "",
      txtMessage: ""
    };
  },
  computed: {},
  methods: {
    handleSubmit: function() {
      console.log("validate start/end dates");
      console.log("validate citizenship");
      alert("So let it be done...");
    }
  },
  components: {
    "form-date-picker": DatePicker,
    "form-policy-picker": PolicyPicker,
    "form-citizenship-picker": CitizenshipPicker
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>