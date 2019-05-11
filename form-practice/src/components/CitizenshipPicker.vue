<template>
	<div>
		<label for="citizenship">Citizenship</label>
		<input v-model="citizenship" @focus="clear" placeholder>
		<!-- <button @click="checkValid" type="button">Check</button> -->
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				citizenship: "",
				valid: false
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
					console.log(
						"validateCitizenship was true, so this should run"
					);
					this.checkValid();
				} else {
					console.log(
						"validateCitizenship was false: ",
						this.validateCitizenship
					);
				}
			}
		},
		methods: {
			clear: function() {
				if (!this.valid) {
					this.citizenship = "";
				}
			},
			checkValid: function() {
				if (this.citizenship === "hello") {
					console.log(
						"checkValid is running, this.valid set to true"
					);
					this.valid = true;
				} else {
					this.valid = false;
					this.citizenship = "must be valid country";
				}
				this.$emit("reset", [
					false,
					"emitter message from CitizenshipPicker"
				]);
			}
		}
	};
</script>