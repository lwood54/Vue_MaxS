<template>
	<div>
		<label for="age">Age</label>
		<input v-model="age" placeholder="age" @focus="handleClear">
		<p v-if="showAgeError" class="error-message">Please enter your age or year of birth.</p>
	</div>
</template>

<script>
	// accessed current date to get year
	const today = new Date();
	const currentYear = today.getFullYear();
	export default {
		data: function() {
			return {
				age: "",
				isAgeValid: false
			};
		},
		props: {
			showAgeError: {
				type: Boolean,
				default: false
			}
		},
		watch: {
			age: function() {
				// confirms age is a number and is not an empty field
				if (!isNaN(this.age) && this.age !== "") {
					// if age falls between 0 and 100, then valid
					if (this.age <= 100 && this.age >= 0) {
						this.isAgeValid = true;
					} else if (this.age > 1890 && this.age <= currentYear) {
						// tests if the input was equivalent to a year
						// calculates age based on current year
						this.isAgeValid = true;
					} else {
						// user had an error and is prompted to correct
						this.isAgeValid = false;
					}
				} else {
					this.isAgeValid = false;
				}
				this.$emit("getAge", {
					age:
						this.age > 1890 && this.age < currentYear
							? currentYear - parseInt(this.age)
							: parseInt(this.age),
					isAgeValid: this.isAgeValid
				});
			}
		},
		methods: {
			handleClear: function() {
				if (!this.isAgeValid) {
					this.age = "";
				}
			}
		}
	};
</script>

<style>
</style>
