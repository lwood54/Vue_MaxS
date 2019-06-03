<template>
	<div>
		<button class="btn btn-primary" @click="increment({by: 1})">Increment</button>
		<button class="btn btn-primary" @click="decrement({by: 2})">Decrement</button>
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
			// ...mapMutations(["increment", "decrement"])
			// ...mapActions(["increment", "decrement"])
			...mapActions({
				increment: types.COUNTER_INCREMENT,
				decrement: types.COUNTER_DECREMENT
			})
		}
	};
</script>