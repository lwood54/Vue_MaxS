<template>
	<div>
		<!-- <form @input="handleChange"> -->
		<form>
			<label for="firstName">
				First Name
				<input type="text" v-model="userData.firstName">
			</label>
			<label for="lastName">
				Last Name
				<input type="text" v-model="userData.lastName">
			</label>
			<!-- <label>Full Name</label>
			<input type="text" v-model="userData.fullName">-->
			<label for="email">
				Email
				<input type="email" v-model="userData.email">
			</label>
			<label for="password">
				Password
				<input type="password" v-model="userData.password">
			</label>
			<h3>Store Data? {{userData.storeDataResponse}}</h3>
			<input type="radio" id="yes" value="yes" v-model="userData.storeDataResponse">
			<label for="yes">Yes</label>
			<br>
			<input type="radio" id="no" value="no" v-model="userData.storeDataResponse">
			<label for="no">No</label>
			<button @click.prevent="handleSubmit">Submit</button>
		</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				userData: {
					firstName: "",
					lastName: "",
					// fullName: "",
					email: "",
					password: "",
					storeDataResponse: "yes"
				}
			};
		},
		// computed: {
		// 	firstName() {
		// 		let splitName = this.userData.fullName.split(" ");
		// 		return splitName[0];
		// 	},
		// 	lastName() {
		// 		let splitName = this.userData.fullName.split(" ");
		// 		return splitName[splitName.length - 1];
		// 	}
		// },
		methods: {
			handleChange() {
				this.$emit("userData", this.userData);
			},
			handleSubmit() {
				this.$emit("userData", {
					userData: this.userData,
					// firstName: this.firstName,
					// lastName: this.lastName,
					isSubmitted: true
				});
			}
		}
	};
</script>

<style>
</style>
