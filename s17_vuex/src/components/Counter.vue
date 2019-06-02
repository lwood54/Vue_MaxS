<template>
	<div>
		<button class="btn btn-primary" @click="increment(1)">Increment</button>
		<button class="btn btn-primary" @click="decrement(1)">Decrement</button>
	</div>
</template>

<script>
	// import { mapMutations } from "vuex";
	import { mapActions } from "vuex";

	export default {
		methods: {
			// SIMILAR to GETTERS options (see those comments...)
			// increment() {
			// 	this.$store.commit("increment");
			// },
			// decrement() {
			// 	this.$store.commit("decrement");
			// }
			// ...mapMutations(["increment", "decrement"])
			...mapActions(["increment", "decrement"])
		}
	};
</script>