<template>
	<div class="container">
		<div class="content-container">
			<h1>Routing</h1>
			<hr>
			<app-header></app-header>
			<!-- Main router view below-->
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Header from "./components/Header";

	export default {
		components: {
			"app-header": Header
		}
	};
</script>

<style lang="scss">
	.content-container {
		width: 50%;
		margin: 10px auto;
	}
</style>
