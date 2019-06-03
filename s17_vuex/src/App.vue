<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Vuex</h1>
				<app-result></app-result>
				<app-another-result></app-another-result>
				<hr>
				<app-counter></app-counter>
				<app-another-counter></app-another-counter>
				<hr>
				<!-- OPTION 1
				<input type="text" :value="value" @input="updateValue">-->
				<!-- OPTION 2 -->
				<input type="text" v-model="value">
				<p>{{value}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Counter from "./components/Counter.vue";
	import AnotherCounter from "./components/AnotherCounter.vue";
	import Result from "./components/Result.vue";
	import AnotherResult from "./components/AnotherResult.vue";
	import * as types from "./store/types";

	export default {
		// OPTION 2 for 2 way data binding with Vuex:
		// using getters and setters for computed properties
		computed: {
			value: {
				get() {
					return this.$store.getters[types.VALUE];
				},
				set(value) {
					this.$store.dispatch(types.UPDATE_VALUE, value);
				}
			}
		},
		// OPTION 1 for 2 way data binding with Vuex:
		////// 1. create state and getters
		////// 2. create mutations that adjust the state
		////// 3. create actions that pass payload and perform async functionality
		////// 4. create a method that takes the event, then use dispatch to call the action and pass
		////// the value from the event.
		////// 5. make sure the component sets :value="getter" @input="method(to call action and pass paylod"
		methods: {
			updateValue(ev) {
				this.$store.dispatch(types.UPDATE_VALUE, ev.target.value);
			}
		},
		components: {
			appCounter: Counter,
			appAnotherCounter: AnotherCounter,
			appResult: Result,
			appAnotherResult: AnotherResult
		}
	};
</script>

