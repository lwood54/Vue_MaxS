<template>
	<div class="row">
		<quote v-for="(quote, i) in quotes" :key="i" :index="i" @click.native="handleDelete(i)">{{quote}}</quote>
	</div>
</template>

<script>
	import Quote from "./Quote";

	export default {
		props: {
			quotes: {
				type: Array
			}
		},
		methods: {
			handleDelete(val) {
				// would this be emit drilling? probably best to use event bus..or even better vuex in this instance
				// WOW...instead of having to pass several emit events upwards, you can use the click.native feature
				// which basically says if the main html div from this custom component is clicked, then treat it as
				// clicked in this component
				this.$emit("delete", val);
			}
		},
		components: {
			quote: Quote
		}
	};
</script>

<style>
</style>
