<template>
	<div>
		<select v-model="selected">
			<option disabled value>Policy Max</option>
			<option value="50">$50,000</option>
			<option value="100">$100,000</option>
			<option value="250">$250,000</option>
			<option value="500">$500,000</option>
		</select>
		<span>Value: {{ selected }}</span>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				selected: ""
			};
		}
	};
</script>
