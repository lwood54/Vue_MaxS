<template>
	<div>
		<button class="btn btn-primary" @click="asyncIncrement({by: 2, duration: 500})">Increment</button>
		<button class="btn btn-primary" @click="asyncDecrement({by: 3, duration: 3000})">Decrement</button>
	</div>
</template>

<script>
	// import { mapMutations } from "vuex";
	import { mapActions } from "vuex";
	import * as types from "../store/types";

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
			// ...mapActions(["asyncIncrement", "asyncDecrement"])
			...mapActions({
				asyncIncrement: types.COUNTER_INCREMENT_ASYNC,
				asyncDecrement: types.COUNTER_DECREMENT_ASYNC
			})
		}
	};
</script>