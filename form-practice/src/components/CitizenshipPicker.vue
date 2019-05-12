<template>
	<div>
		<label for="citizenship">Citizenship</label>
		<input v-model="citizenship" @focus="clear" placeholder="country">
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
				this.checkValid();
			},
			isValid: function() {
				this.$emit("citizenshipValidation", {
					reset: true,
					isCitizenshipValid: this.isValid
				});
			},
			citizenship: function() {
				this.$emit("changeValid");
			}
		},
		methods: {
			clear: function() {
				if (!this.isValid) {
					this.citizenship = "";
				}
			},
			checkValid: function() {
				this.isValid = this.citizenship === "hello";
			}
		}
	};
</script>