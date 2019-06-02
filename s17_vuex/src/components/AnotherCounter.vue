<template>
	<div>
		<button class="btn btn-primary" @click="asyncIncrement({by: 2, duration: 500})">Increment</button>
		<button class="btn btn-primary" @click="asyncDecrement({by: 3, duration: 3000})">Decrement</button>
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
			// ...mapMutations(["increment", "decrement"]) // BEST PRACTICE is to mapActions here instead of mutating directly from components
			...mapActions(["asyncIncrement", "asyncDecrement"])
		}
	};
</script>