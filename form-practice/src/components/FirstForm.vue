<template>
	<div>
		<h1>{{ formTitle }}</h1>
		<form @submit.prevent="handleSubmit">
			<form-date-picker :validateDate="triggerDateValidation" @reset="handleDate"/>
			<hr>
			<form-policy-picker/>
			<hr>
			<form-citizenship-picker
				:validateCitizenship="triggerCitizenshipValidation"
				@citizenshipValidation="handleCitizenship"
			/>
			<hr>
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
				triggerDateValidation: false,
				isDateValid: false,
				triggerCitizenshipValidation: false,
				isCitizenshipValid: false
			};
		},
		props: {
			formTitle: {
				type: String,
				required: true
			}
		},
		watch: {
			allFieldsValid: function() {
				if (this.allFieldsValid) {
					this.$router.push("/quotes-page");
				}
			}
		},
		computed: {
			allFieldsValid: function() {
				return this.isDateValid && this.isCitizenshipValid;
			}
		},
		methods: {
			handleSubmit: function() {
				this.triggerDateValidation = true;
				this.triggerCitizenshipValidation = true;
			},
			handleDate: function(val) {
				this.triggerDateValidation = !val.reset;
				this.isDateValid = val.isDateValid;
			},
			handleCitizenship: function(val) {
				this.triggerCitizenshipValidation = !val.reset;
				this.isCitizenshipValid = val.isCitizenshipValid;
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