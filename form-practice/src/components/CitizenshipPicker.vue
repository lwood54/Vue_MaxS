<template>
	<div>
		<label for="citizenship">Citizenship</label>
		<input v-model="citizenship" @focus="clear" placeholder>
		<button @click="checkValid" type="button">Check</button>
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
				if (this.citizenship === "hello") {
					this.valid = true;
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
					this.valid = true;
				} else {
					this.valid = false;
				}
			}
		}
	};
</script>