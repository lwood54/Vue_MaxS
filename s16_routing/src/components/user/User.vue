<template>
	<div>
		<h1>The User Page</h1>
		<hr>
		<p>Loaded ID: {{id}}</p>
		<button @click="navgateToHome" class="btn btn-primary">Go to Home</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				id: this.$route.params.id
			};
		},
		watch: {
			$route(to, from) {
				// to is the same as this.$route
				this.id = to.params.id;
			}
		},
		methods: {
			navgateToHome() {
				this.$router.push("/");
			}
		}
	};
</script>