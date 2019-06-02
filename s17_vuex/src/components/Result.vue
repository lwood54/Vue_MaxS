<template>
	<p>Counter is: {{ counter }}</p>
</template>

<script>
	export default {
		computed: {
			counter() {
				// return this.$store.state.counter; // then you could do some action on the state data
				return this.$store.getters.doubleCounter; // allows access to getters that have already performed action
			}
		}
	};
</script>