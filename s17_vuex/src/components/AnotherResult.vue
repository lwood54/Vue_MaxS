<template>
	<div>
		<!-- <p>Counter is: {{ counter }}</p>
		<p>Number of clicks: {{ clicks }}</p>-->
		<p>AnotherResult.vue - Double Counter is: {{doubleCounter}}</p>
		<p>Number of clicks: {{stringCounter}}</p>
		<p>Counter X 3: {{multiplyBy3}}</p>
		<!-- <p>Counter is: {{dubCount}}</p>
		<p>Number of clicks: {{numClicks}}</p>-->
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	import * as types from "../store/types";

	export default {
		// OPTION 1: Basic setup to define computed for the getters you will use.
		// computed: {
		// counter() {
		// 	return this.$store.getters.doubleCounter;
		// },
		// clicks() {
		// 	return this.$store.getters.stringCounter;
		// }
		// }

		// OPTION 2: this overrides the computed properties. You won't be able to add other computed properties
		// computed: mapGetters(["doubleCounter", "stringCounter"])
		// OPTION 2a: you can use an object instead of an array
		// computed: mapGetters({
		// 	dubCount: "doubleCounter",
		// 	numClicks: "stringCounter"
		// })

		// OPTION 3: use spread operator to merge multiple objects into the computed property objects
		computed: {
			...mapGetters({
				doubleCounter: types.DOUBLE_COUNTER, // using our created types for protected name spaces
				stringCounter: types.CLICK_COUNTER // created in types.js
			}),
			multiplyBy3() {
				// NOTE: When state is setup with modules, you can't just access state directly, it seems that
				// you can only access it through the getters
				// console.log(this.$store.getters.counter);
				console.log("types.COUNTER: ", types.COUNTER);
				return this.$store.getters[types.COUNTER] * 3;
			}
		}
	};
</script>