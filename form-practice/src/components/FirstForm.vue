<template>
	<div>
		<h1>{{ formTitle }}</h1>
		<form @submit.prevent="handleSubmit">
			<form-date-picker
				:validateDate="triggerValidation"
				@reset="handleReset"
			/>
			<hr />
			<form-policy-picker />
			<hr />
			<form-citizenship-picker />
			<hr />
			<button type="submit">Get Quotes</button>
		</form>
	</div>
</template>


<script>
      import DatePicker from "./DatePicker.vue";
	import PolicyPicker from "./PolicyPicker";
	import CitizenshipPicker from "./CitizenshipPicker";
	export default {
		data: function() {
			return {
				triggerValidation: false
			};
		},
		props: {
			formTitle: {
				type: String,
				required: true
			}
		},
		computed: {},
		methods: {
			handleSubmit: function() {
				this.triggerValidation = true;
				console.log("So let it be done...");
			},
			handleReset: function(val) {
				this.triggerValidation = val[0];
				console.log("Form triggerValidation reset to: ", val[0]);
				console.log("Extra message: ", val[1]);
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