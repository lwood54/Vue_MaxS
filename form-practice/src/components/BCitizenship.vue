<template>
	<div class="insubuy-form-component">
		<label for="citizenship" class="insubuy-form-label">Citizenship</label>
		<input v-model="citizenship" placeholder="country" @focus="handleClear">
		<p v-if="showCitizenshipError" class="error-message">Please enter a valid country.</p>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				citizenship: "",
				isCitizenshipValid: false
			};
		},
		props: {
			showCitizenshipError: {
				type: Boolean,
				default: false
			}
		},
		watch: {
			citizenship: function() {
				this.validateCitizenship(this.citizenship);
				this.$emit("getCitizenship", {
					citizenship: this.citizenship,
					isCitizenshipValid: this.isCitizenshipValid
				});
			}
		},
		methods: {
			handleClear: function() {
				if (!this.isCitizenshipValid) {
					this.citizenship = "";
				}
			},
			validateCitizenship: function() {
				const characterValidation = str => {
					let strArr = str.split(" ");
					let notValidCount = 0;
					strArr.forEach(str => {
						if (!/^[a-zA-Z]*$/.test(str)) {
							notValidCount++;
						}
					});
					// if count is 0, then only letters were used
					return notValidCount === 0;
				};
				if (
					this.citizenship !== "" &&
					characterValidation(this.citizenship)
				) {
					this.isCitizenshipValid = true;
				} else {
					this.isCitizenshipValid = false;
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	.citizenship-label {
		padding: 1px 5px;
	}
</style>
