<template>
	<div>
		<label for="citizenship">Citizenship</label>
		<input v-model="citizenship" @focus="clear" placeholder>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				citizenship: "",
				isValid: false
			};
		},
		props: {
			validateCitizenship: {
				type: Boolean,
				required: true
			}
		},
		watch: {
			validateCitizenship: function() {
				if (this.validateCitizenship) {
					this.checkValid();
				}
			}
		},
		methods: {
			clear: function() {
				if (!this.isValid) {
					this.citizenship = "";
				}
			},
			checkValid: function() {
				if (this.citizenship === "hello") {
					this.isValid = true;
				} else {
					this.isValid = false;
					this.citizenship = "must be valid country";
				}
				this.$emit("citizenshipValidation", {
					reset: true,
					isCitizenshipValid: this.isValid
				});
			}
		}
	};
</script>