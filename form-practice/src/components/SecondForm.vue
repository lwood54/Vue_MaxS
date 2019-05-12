<template>
	<div class="insubuy-form">
		<h1>{{formTitle}}</h1>
		<form @submit.prevent="handleSubmit">
			<date-picker @getDate="handleDate" :showDateError="showDateError"/>
			<policy-picker @getPolicy="handlePolicy" :showPolicyError="showPolicyError"/>
			<citizenship-picker
				@getCitizenship="handleCitizenship"
				:showCitizenshipError="showCitizenshipError"
			/>
			<age-picker @getAge="handleAge" :showAgeError="showAgeError"/>
			<mailing-state-picker @getMailingState="handleMailingState"/>
			<button type="sbumit">Submit</button>
			<p v-if="submissionError" class="error-message">There were one or more invalid fields above.</p>
		</form>
		<p>Start Date: {{startDate}} / End Date: {{endDate}}</p>
		<p>Policy Value: {{policyVal}}</p>
		<p>Citizenship: {{citizenship}}</p>
		<p>Age: {{typeof age}}</p>
		<p>Mailing State: {{mailingState}}</p>
	</div>
</template>

<script>
	import DatePicker from "./BDate";
	import PolicyPicker from "./BPolicy";
	import CitizenshipPicker from "./BCitizenship";
	import AgePicker from "./BAge";
	import MailingStatePicker from "./BMailingState";

	export default {
		data: function() {
			return {
				formTitle: "Insubuy Form 2",
				startDate: "",
				endDate: "",
				isDateRangeValid: false,
				showDateError: false,
				policyVal: "",
				isPolicyValid: false,
				showPolicyError: false,
				citizenship: "",
				isCitizenshipValid: false,
				showCitizenshipError: false,
				age: "",
				isAgeValid: false,
				showAgeError: false,
				mailingState: "",
				isMailingStateValid: false,
				showMailingStateError: false,
				submissionError: false
			};
		},
		methods: {
			checkAllFieldsValidation: function() {
				return (
					this.isDateRangeValid &&
					this.isPolicyValid &&
					this.isCitizenshipValid &&
					this.isAgeValid &&
					this.isMailingStateValid
				);
			},
			handleDate: function(val) {
				this.startDate = val.startDate;
				this.endDate = val.endDate;
				this.isDateRangeValid = val.isDateRangeValid;
				this.showDateError = false;
				this.submissionError = false;
				// console.log("handling Date / startDate: ", this.startDate);
				// console.log("handling Date / endDate: ", this.endDate);
				// console.log(
				// 	"handling Date: isDateRangeValid ? ",
				// 	this.isDateRangeValid
				// );
			},
			handlePolicy: function(val) {
				this.policyVal = val.policyVal;
				this.isPolicyValid = val.isPolicyValid;
				this.showPolicyError = false;
				this.submissionError = false;
				console.log("handle Policy: ", val.policyVal);
				console.log(
					"handle Policy - isPolicyValid ? ",
					val.isPolicyValid
				);
			},
			handleCitizenship: function(val) {
				this.citizenship = val.citizenship;
				this.isCitizenshipValid = val.isCitizenshipValid;
				this.showCitizenshipError = false;
				this.submissionError = false;
				// console.log("handle Citizenship: ", this.citizenship);
				// console.log(
				// 	"handle Citizenship - isCitizenshipValid ? ",
				// 	this.isCitizenshipValid
				// );
			},
			handleAge: function(val) {
				this.age = val.age;
				this.isAgeValid = val.isAgeValid;
				this.showAgeError = false;
				this.submissionError = false;
				console.log("handle Age: ", val.age);
				console.log("handle Age - isAgeValid ? ", val.isAgeValid);
			},
			handleMailingState: function(val) {
				this.showMailingStateError = false;
				this.submissionError = false;
				console.log("handle Mailing State: ", val.mailingState);
				console.log(
					"handle Mailing State - isMailingStateValid ? ",
					val.isMailingStateValid
				);
			},
			handleSubmit: function() {
				this.showDateError = !this.isDateRangeValid;
				this.showPolicyError = !this.isPolicyValid;
				this.showCitizenshipError = !this.isCitizenshipValid;
				this.showAgeError = !this.isAgeValid;
				this.showMailingStateError = !this.isMailingStateValid;
				if (this.checkAllFieldsValidation()) {
					this.submissionError = false;
					this.$router.push("/quotes-page");
				} else {
					this.submissionError = true;
				}
			}
		},
		components: {
			"date-picker": DatePicker,
			"policy-picker": PolicyPicker,
			"citizenship-picker": CitizenshipPicker,
			"age-picker": AgePicker,
			"mailing-state-picker": MailingStatePicker
		}
	};
</script>
      
<style lang="scss">
	$error-font-color: rgb(214, 10, 10);
	$minor-padding: 1px 5px;

	.insubuy-form {
		.error-message {
			color: $error-font-color;
		}
		.insubuy-form-label {
			padding: $minor-padding;
		}
	}
</style>
