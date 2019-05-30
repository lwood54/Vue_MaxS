<template>
	<div class="container">
		<div class="content-container">
			<h1>Routing</h1>
			<hr>
			<router-view name="header-top"></router-view>
			<transition name="slide" mode="out-in">
				<router-view></router-view>
			</transition>
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
	.slide-leave-active {
		transition: opacity 1s ease;
		opacity: 0;
		animation: slide-out 1s ease-out forwards;
	}

	.slide-leave {
		opacity: 1;
		transform: translateX(0);
	}

	.slide-enter-active {
		animation: slide-in 1s ease-out forwards;
	}

	@keyframes slide-out {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-30px);
		}
	}
	@keyframes slide-in {
		100% {
			transform: translateX(0);
		}
		0% {
			transform: translateX(-30px);
		}
	}
</style>
