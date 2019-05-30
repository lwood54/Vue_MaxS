<template>
	<div>
		<h1>The User Page</h1>
		<button @click="navgateToHome" class="btn btn-primary">Go to Home</button>
		<hr>
		<!-- Nested router views (identified children of this route in the routes.js file-->
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		methods: {
			navgateToHome() {
				// originally we had push('/') but by adding name: 'home' in routes, we can use this method
				this.$router.push({ name: "home" });
			}
		}
	};
</script>