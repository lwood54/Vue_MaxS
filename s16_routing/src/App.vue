<template>
	<div class="container">
		<div class="content-container">
			<h1>Routing</h1>
			<hr>
			<router-view name="header-top"></router-view>
			<router-view></router-view>
			<!-- <app-header></app-header> -->
			<!-- Main router view below-->
			<router-view name="header-bottom"></router-view>
			<br>
			<br>
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
