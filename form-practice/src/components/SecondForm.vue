<template>
	<div>
		<h1>{{formTitle}}</h1>
		<form @submit.prevent="handleSubmit">
			<date-picker @getDate="handleDate"/>
			<policy-picker @getPolicy="handlePolicy"/>
			<citizenship-picker
				@getCitizenship="handleCitizenship"
				:showCitizenshipError="showCitizenshipError"
			/>
			<age-picker @getAge="handleAge"/>
			<mailing-state-picker @getMailingState="handleMailingState"/>
			<button type="sbumit">Submit</button>
		</form>
		<p>Start Date: {{startDate}} / End Date: {{endDate}}</p>
		<p>Policy Value: {{policyVal}}</p>
		<p>Citizenship: {{citizenship}}</p>
		<p>Age: {{age}}</p>
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
				isDateValid: false,
				startDate: "",
				endDate: "",
				isPolicyValid: false,
				policyVal: "",
				isCitizenshipValid: false,
				showCitizenshipError: false,
				citizenship: "",
				isAgeValid: false,
				age: "",
				isMailingStateValid: false,
				mailingState: ""
			};
		},
		methods: {
			handleDate: function(val) {
				console.log("handling Date / startDate: ", val.startDate);
				console.log("handling Date / endDate: ", val.endDate);
				console.log("handling Date: isDateValid ? ", val.isDateValid);
			},
			handlePolicy: function(val) {
				console.log("handle Policy: ", val.policy);
				console.log(
					"handle Policy - isPolicyValid ? ",
					val.isPolicyValid
				);
			},
			handleCitizenship: function(val) {
				this.citizenship = val.citizenship;
				this.isCitizenshipValid = val.isCitizenshipValid;
				this.showCitizenshipError = false;
				// console.log("handle Citizenship: ", this.citizenship);
				// console.log(
				// 	"handle Citizenship - isCitizenshipValid ? ",
				// 	this.isCitizenshipValid
				// );
			},
			handleAge: function(val) {
				console.log("handle Age: ", val.age);
				console.log("handle Age - isAgeValid ? ", val.isAgeValid);
			},
			handleMailingState: function(val) {
				console.log("handle Mailing State: ", val.mailingState);
				console.log(
					"handle Mailing State - isMailingStateValid ? ",
					val.isMailingStateValid
				);
			},
			handleSubmit: function() {
				console.log("Second Form Submitted");
				console.log("SUBMIT - start date: ", this.startDate);
				console.log("SUBMIT - end date: ", this.endDate);
				console.log("SUBMIT - policy: ", this.policyVal);
				console.log("SUBMIT - citizenship: ", this.citizenship);
				if (this.isCitizenshipValid) {
					this.showCitizenshipError = false;
				} else {
					this.showCitizenshipError = true;
				}
				console.log("SUBMIT - age: ", this.age);
				console.log("SUBMIT - mailing state: ", this.mailingState);
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

<style>
</style>
