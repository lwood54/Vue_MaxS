<template>
	<p>Result.vue - Counter is: {{ counter }}</p>
</template>

<script>
	import { mapGetters } from "vuex";
	import * as types from "../store/types";

	export default {
		computed: {
			// counter() {
			// 	// return this.$store.state.counter; // then you could do some action on the state data
			// 	return this.$store.getters.counter; // allows access to getters that have already performed action
			// }

			...mapGetters({
				counter: types.COUNTER,
				doubleCounter: types.DOUBLE_COUNTER, // using our created types for protected name spaces
				stringCounter: types.CLICK_COUNTER // created in types.js
			})
		}
	};
</script>