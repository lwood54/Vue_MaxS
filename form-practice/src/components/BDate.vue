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
		<p v-if="showDateError">The start date must begin before the end date.</p>
		<label for="end">End Date</label>
		<input v-model="endDate" type="date" id="end" name="end-date" value="endDate" min="endDate">
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				startDate: "",
				isDateRangeValid: false,
				endDate: ""
			};
		},
		props: {
			showDateError: {
				type: Boolean,
				default: false
			}
		}
	};
</script>

<style>
</style>
