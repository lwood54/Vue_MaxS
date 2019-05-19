<template>
	<div class="container">
		<progress-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"/>
		<div class="alert alert-danger text-center" role="alert" v-if="errorMessage !== '' ">
			<h3>{{errorMessage}}</h3>
		</div>
		<new-quote @submitted="handleSubmit"></new-quote>
		<quote-grid :quotes="quotes" @delete="handleDelete"></quote-grid>
		<div class="row">
			<div class="col-sm-12 text-center">
				<div class="alert alert-info">Info: Click on a Quote to delete it!</div>
			</div>
		</div>
	</div>
</template>

<script>
	import QuoteGrid from "./components/QuoteGrid";
	import NewQuote from "./components/NewQuote";
	import Header from "./components/Header";

	export default {
		data() {
			return {
				quotes: ["A quote to get started..."],
				maxQuotes: 10,
				errorMessage: ""
			};
		},
		methods: {
			handleSubmit(val) {
				console.log("form was submitted...", val);
				if (this.quotes.length < this.maxQuotes) {
					this.quotes.push(val);
				} else {
					this.errorMessage =
						"Please remove a quote in order to add another.";
				}
			},
			handleDelete(val) {
				// console.log("APP.vue -- handleDelete()");
				// this.quotes = this.quotes.filter((quote, i) => {
				// 	return i !== val;
				// });
				// splice is better because it will just remove that element, which will be better
				// when handling larger arrays?
				this.errorMessage = "";
				this.quotes.splice(val, 1);
			}
		},
		components: {
			"quote-grid": QuoteGrid,
			"new-quote": NewQuote,
			"progress-header": Header
		}
	};
</script>

<style lang="scss">
</style>
