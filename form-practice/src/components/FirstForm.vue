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
				@changeValid="resetCitizenshipValidation"
			/>
			<hr>
			<button type="submit">Get Quotes</button>
		</form>
	</div>
</template>


<script>
	// BUG: If you put in correct country and wrong date, then submit, then change to valid dates, but also
	// change country to invalid, it will still send the form
	import DatePicker from "./DatePicker.vue";
	import PolicyPicker from "./PolicyPicker";
	import CitizenshipPicker from "./CitizenshipPicker";
	export default {
		data: function() {
			return {
				triggerDateValidation: false, // will initiate action for dateValidation
				isDateValid: false, // stores current dateValidation status
				triggerCitizenshipValidation: false, // will initiate action for citizenshipValidation
				isCitizenshipValid: false // stores current citizenshipValidation
			};
		},
		props: {
			// required prop for this form
			formTitle: {
				type: String,
				required: true
			}
		},
		watch: {
			// watch allFieldsValid computed property and change to quotes-page if true
			allFieldsValid: function() {
				if (this.allFieldsValid) {
					this.$router.push("/quotes-page");
				}
			}
		},
		computed: {
			// compute allFieldsValid property
			allFieldsValid: function() {
				if (this.isDateValid && this.isCitizenshipValid) {
					return true;
				} else {
					return false;
				}
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
			},
			resetCitizenshipValidation: function() {
				// added this to handle previous valid citizenship, but changed to invalid
				// when date changed back.
				this.isCitizenshipValid = false;
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