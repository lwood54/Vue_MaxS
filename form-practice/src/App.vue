<template>
	<div id="app">
		<div id="nav">
			<router-link to="/" class="navItem">Home</router-link>
			<router-link to="/about" class="navItem">About</router-link>
			<router-link to="/contact" class="navItem">Contact Me</router-link>
			<router-link to="/insubuy" class="navItem">Insubuy</router-link>
			<router-link to="/insubuy2" class="navItem" exact>Insubuy 2</router-link>
		</div>
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: "App",
		components: {},
		data: function() {
			return {
				mainTitle: "First Vue App"
			};
		}
	};
</script>

<style lang="scss">
	.navItem {
		padding: 1px 5px;
	}
</style>