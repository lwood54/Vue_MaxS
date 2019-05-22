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
		<hr>
		<hr>
		<user-form v-if="!isSubmitted" @userData="handleUserData"/>
		<!-- Exercise 1 -->
		<!-- Create a Signup Form where you retrieve the following Information -->
		<!-- Full Name (First Name + Last Name) -->
		<!-- Mail -->
		<!-- Password -->
		<!-- Store Data? Yes/No -->

		<!-- Exercise 2 -->
		<!-- Only display the Form if it has NOT been submitted -->
		<!-- Display the Data Summary ONCE the Form HAS been submitted -->

		<!-- Exercise 3 -->
		<!-- Edit the Example from above and create a custom "Full Name" Control -->
		<!-- which still holds the First Name and Last Name Input Field -->
		<div class="row" v-else>
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h4>Your Data</h4>
					</div>
					<div class="panel-body">
						<p>Full Name: {{userData.firstName}} {{userData.lastName}}</p>
						<!-- <p>First Name: {{firstName}}</p>
						<p>Last Name; {{lastName}}</p>-->
						<p>Mail: {{userData.email}}</p>
						<p>Password: {{userData.password}}</p>
						<p>Store in Database?: {{userData.storeDataResponse}}</p>
						<button @click="isSubmitted = false">clear form</button>
					</div>
				</div>
			</div>
		</div>
		<hr>
		<hr>
		<directives-practice></directives-practice>
	</div>
</template>

<script>
	import QuoteGrid from "./components/QuoteGrid";
	import NewQuote from "./components/NewQuote";
	import Header from "./components/Header";
	import UserForm from "./components/UserForm";
	import DirectivesPractice from "./components/DirectivesPractice";

	export default {
		data() {
			return {
				quotes: ["A quote to get started..."],
				maxQuotes: 10,
				errorMessage: "",
				userData: {},
				// firstName: "",
				// lastName: "",
				isSubmitted: false
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
			},
			handleUserData(val) {
				this.userData = val.userData;
				this.firstName = val.firstName;
				this.lastName = val.lastName;
				this.isSubmitted = val.isSubmitted;
			}
		},
		components: {
			"quote-grid": QuoteGrid,
			"new-quote": NewQuote,
			"progress-header": Header,
			"user-form": UserForm,
			"directives-practice": DirectivesPractice
		}
	};
</script>

<style lang="scss">
</style>
