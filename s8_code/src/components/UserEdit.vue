<template>
	<div class="component">
		<h3>You may edit the User here</h3>
		<p>Edit me!</p>
		<p>User Age: {{userAge}}</p>
		<button @click="editAge">Edit Age</button>
	</div>
</template>

<script>
	import { eventBus } from "../main.js";
	export default {
		props: ["userAge"],
		methods: {
			editAge: function() {
				this.userAge = 30;
				// this.$emit('ageWasEdited', this.userAge);
				// now instead of emitting the event on "this" instance, we are emitting the event
				// on the eventBus that we created elsewhere
				eventBus.$emit("ageWasEdited", this.userAge);
			}
		}
	};
</script>

<style scoped>
	div {
		background-color: lightgreen;
	}
</style>
