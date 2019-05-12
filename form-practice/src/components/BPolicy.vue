<template>
	<div>
		<select v-model="selected">
			<option disabled value>Policy Max</option>
			<option :value="50">$50,000</option>
			<option :value="100">$100,000</option>
			<option :value="250">$250,000</option>
			<option :value="500">$500,000</option>
		</select>
		<p v-if="showPolicyError" class="error-message">No policy amount selected.</p>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				selected: "",
				isPolicyValid: false
			};
		},
		props: {
			showPolicyError: {
				type: Boolean,
				default: false
			}
		},
		watch: {
			selected: function() {
				this.isPolicyValid = this.selected !== "";
				this.$emit("getPolicy", {
					policyVal: this.selected,
					isPolicyValid: this.isPolicyValid
				});
			}
		}
	};
</script>

<style>
</style>
