<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1 class="text-center">Quiz</h1>
			</div>
		</div>
		<hr>
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<transition name="flip" mode="out-in">
					<component
						:is="dynamicQA"
						@answered="answered($event)"
						@confirmed="dynamicQA = 'app-question'"
					></component>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
	import Question from "./Question";
	import Answer from "./Answer";

	export default {
		data() {
			return {
				dynamicQA: "app-question"
			};
		},
		methods: {
			answered(isCorrect) {
				if (isCorrect) {
					this.dynamicQA = "app-answer";
				} else {
					this.dynamicQA = "app-question";
					alert("Wrong, try again!");
				}
			}
		},
		components: {
			"app-question": Question,
			"app-answer": Answer
		}
	};
</script>

<style>
	.flip-enter-active {
		animation: flip-in 0.75s ease-out;
	}

	.flip-leave-active {
		animation: flip-out 0.75s ease-out;
	}

	@keyframes flip-out {
		from {
			transform: rotateY(0deg);
		}

		to {
			transform: rotateY(90deg);
		}
	}

	@keyframes flip-in {
		from {
			transform: rotateY(90deg);
		}
		to {
			transform: rotateY(0deg);
		}
	}
</style>
