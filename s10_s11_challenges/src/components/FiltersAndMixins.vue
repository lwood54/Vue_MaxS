<template>
	<div>
		<h1>Filters and Mixins Practice</h1>
		<!-- Exercise 1
		Build a local filter which reverses the Text it is applied on-->
		<h3>Reverse string with Filter</h3>
		<input v-model="textInput">
		<p>{{textInput | reverse}}</p>

		<hr>
		<hr>
		<!-- Exercise 2
            Build a global filter which counts the length of a word and it appends it
		Like: "Test" ==> "Test (4)"-->
		<h3>Add length with global filter.</h3>
		<p>{{textInput | findLength}}</p>

		<!-- Exercise 3
		Do the same as in 1 & 2, but now with computed properties-->
		<h3>Reversed text with computed properties.</h3>
		<input v-model="text2">
		<p>{{reversedText2}}</p>

		<!-- Exercise 4
		Share the Computed Property rebuilding Exercise 2 via Mixin-->
		<h3>Share Computed Property rebuilding Exercise 2 via Mixin</h3>
		<input v-model="text3">
		<p>{{text3 | findLengthMixin}}</p>
	</div>
</template>

<script>
	import { findLengthMixin } from "../mixins/findLength";
	export default {
		data() {
			return {
				textInput: "",
				text2: ""
			};
		},
		computed: {
			reversedText2() {
				return this.text2
					.split("")
					.reverse()
					.join("");
			}
		},
		filters: {
			reverse(val) {
				return val
					.split("")
					.reverse()
					.join("");
			}
		},
		mixins: [findLengthMixin]
	};
</script>

<style>
</style>
