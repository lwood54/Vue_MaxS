<template>
	<div class="insubuy-form-component">
		<label for="start">Start Date</label>
		<input
			v-model="startDate"
			type="date"
			id="start"
			name="start-date"
			value="startDate"
			min="startDate"
		>
		<label for="end">End Date</label>
		<input v-model="endDate" type="date" id="end" name="end-date" value="endDate" min="endDate">
		<p v-if="showDateError" class="error-message">The start date must begin before the end date.</p>
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
				startDate: fmtDate,
				isDateRangeValid: false,
				endDate: fmtDate
			};
		},
		props: {
			showDateError: {
				type: Boolean,
				default: false
			}
		},
		watch: {
			startDate: function() {
				console.log("BDate - watch - startDate: ", this.startDate);
				if (this.startDate >= this.endDate) {
					this.isDateRangeValid = false;
					console.log(
						"BDate - watch - (if error) isDateRangeValid: ",
						this.isDateRangeValid
					);
				} else {
					this.isDateRangeValid = true;
					console.log(
						"BDate - watch - (if success) isDateRangeValid: ",
						this.isDateRangeValid
					);
				}
				this.$emit("getDate", {
					startDate: this.startDate,
					endDate: this.endDate,
					isDateRangeValid: this.isDateRangeValid
				});
			},
			endDate: function() {
				console.log("BDate - watch - endDate: ", this.endDate);
				if (this.startDate >= this.endDate) {
					this.isDateRangeValid = false;
					console.log(
						"BDate - watch - (if error) isDateRangeValid: ",
						this.isDateRangeValid
					);
				} else {
					this.isDateRangeValid = true;
					console.log(
						"BDate - watch - (if success) isDateRangeValid: ",
						this.isDateRangeValid
					);
				}
				this.$emit("getDate", {
					startDate: this.startDate,
					endDate: this.endDate,
					isDateRangeValid: this.isDateRangeValid
				});
			}
		}
	};
</script>

<style>
</style>
