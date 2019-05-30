<template>
	<div>
		<h1>The User Page</h1>
		<button @click="navgateToHome" class="btn btn-primary">Go to Home</button>
		<hr>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		methods: {
			navgateToHome() {
				this.$router.push("/");
			}
		}
	};
</script>