<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Animations 1</h1>
				<hr>
				<button class="btn btn-primary" @click="show = !show">Show Alert</button>
				<br>
				<br>
				<transition name="fade">
					<div class="alert alert-info" v-if="show">This is some info</div>
				</transition>
				<transition name="slide">
					<div class="alert alert-info" v-if="show">This is some info</div>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			};
		}
	};
</script>

<style>
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 1s;
	}

	.slide-enter {
	}

	.slide-enter-active {
		/* Keep 'forwards' in mind, helps with snap back, but doesn't seem to do much in this instance.*/
		animation: slide-in 1s ease-out;
	}

	.slide-leave-to {
	}

	.slide-leave-active {
		animation: slide-out 1s ease-out;
	}

	@keyframes slide-in {
		from {
			transform: translateY(20px);
		}
		to {
			transform: translateY(0);
		}
	}
	@keyframes slide-out {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(20px);
		}
	}
</style>
