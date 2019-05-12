<template>
	<div>
		<second-form :formTitle="title"/>
	</div>
</template>

<script>
	import SecondForm from "../components/SecondForm.vue";

	export default {
		data: function() {
			return {
				title: "Insubuy 2"
			};
		},
		components: {
			"second-form": SecondForm
		}
	};
</script>

<style>
</style>
