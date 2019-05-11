<template>
	<div>
		<label for="start">Start Date</label>
		<input
			v-model="startDate"
			type="date"
			id="start"
			name="start-date"
			value="startDate"
			min="startDate"
		>
		<p v-if="!validStartDate">Start Date must be before end date.</p>
		<label for="end">End Date</label>
		<input v-model="endDate" type="date" id="end" name="end-date" value="endDate" min="endDate">
		<p v-if="!validEndDate">End Date must fall after start date.</p>
	</div>
</template>

<script>
	// get current date to set default start date in date picker
	const currentDate = new Date();
	// get day (if it is 1 - 9, then add a 0)
	const dd =
		currentDate.getDate() > 9
			? currentDate.getDate()
			: "0" + currentDate.getDate();
	// get day to be plus 1 as default end date start time
	const ddPlus1 =
		currentDate.getDate() + 1 > 9
			? currentDate.getDate() + 1
			: "0" + currentDate.getDate();
	// get current month, add 0 if below 10, add 1 to value
	// because January starts at 0
	const mm =
		currentDate.getMonth() + 1 > 9
			? currentDate.getMonth() + 1
			: "0" + (currentDate.getMonth() + 1);
	// get year
	const yyyy = currentDate.getFullYear();
	// format date to be used as default for date picker
	const fmtDate = `${yyyy}-${mm}-${dd}`;
	// fomrat end date to be used for date picker
	const fmtDatePlus1 = `${yyyy}-${mm}-${ddPlus1}`;
	// setup export
	export default {
		data: function() {
			return {
				startDate: fmtDate, // set start to fromatted current date
				endDate: fmtDatePlus1, // set end to formatted start plus 1
				validStartDate: true, //set initial validation to true
				validEndDate: true // set initial validation to true
			};
		},
		props: {
			validateDate: {
				// we must receive a valid trigger so DatePicker knows whether to validate
				type: Boolean,
				required: true
			}
		},
		watch: {
			// observe any changes made to validateDate
			validateDate: function() {
				console.log("validateDate is: ", this.validateDate);
				// if true is passed for that prop, then it triggers the validation action
				if (this.validateDate) {
					this.validateStart(); // run validation check for both start and end
					this.validateEnd();
					// emit a response so parent knows to reset trigger activation
					this.$emit("reset", [
						false,
						"extra emitter message for testing"
					]);
					// could do this:
					// this.$emit("reset", false);
					// or just this.$emit("reset"), then use that to trigger a handler to reset
					// whatever is needed
				}
				console.log(
					"validateDate was false, so skip running functions"
				);
			},
			startDate: function() {
				// if date selector is changed, then reset validation to remove warning
				// do this for both when either one changes.
				this.validStartDate = true;
				this.validEndDate = true;
			},
			endDate: function() {
				this.validEndDate = true;
				this.validStartDate = true;
			}
		},
		methods: {
			validateStart: function() {
				// change boolean to trigger after checking validation
				if (this.startDate > this.endDate && this.startDate !== "") {
					console.log("validateStart() ran");
					this.validStartDate = false;
				} else {
					this.validStartDate = true;
				}
			},
			validateEnd: function() {
				if (this.endDate < this.startDate && this.endDate !== "") {
					console.log("validateEnd() ran");
					this.validEndDate = false;
				} else {
					this.validEndDate = true;
				}
			}
		}
	};
</script>