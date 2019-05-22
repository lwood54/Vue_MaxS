<template>
	<div>
		<h1>Directives-Practice</h1>
		<p v-text="'v-text: Some Text'"></p>
		<p v-html="'v-html: <strong>strong text</strong>'"></p>
		<hr>
		<h1>Custon Directives</h1>
		<p v-highlight:background.delayed="'red'">Color this</p>
		<p
			v-local-highlight:background.delayed.blink="{
                  mainColor: 'red',
                  secondColor: 'green',
                  delay: 500
            }"
		>Color this, local highlight!</p>
		<hr>
		<h1>Build a Custon Directive Challenge</h1>
		<h2 v-if="!showReplacement" v-my-on:click="handleClick">Click me to disappear!</h2>
		<h4 v-if="showReplacement" v-my-on:click="handleClick">my smaller replacement shows up now...</h4>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showReplacement: false
			};
		},
		methods: {
			handleClick(el) {
				this.showReplacement = !this.showReplacement;
			}
		},
		directives: {
			"local-highlight": {
				bind(el, binding, vnode) {
					let delay = 0;
					if (binding.modifiers["delayed"]) {
						delay = 3000;
					}
					if (binding.modifiers["blink"]) {
						let mainColor = binding.value.mainColor;
						let secondColor = binding.value.secondColor;
						let currentColor = mainColor;
						setTimeout(() => {
							setInterval(() => {
								currentColor === secondColor
									? (currentColor = mainColor)
									: (currentColor = secondColor);
								if (binding.arg == "background") {
									el.style.backgroundColor = currentColor;
								} else {
									el.style.color = currentColor;
								}
							}, binding.value.delay);
						}, delay);
					} else {
						setTimeout(() => {
							if (binding.arg == "background") {
								el.style.backgroundColor =
									binding.value.mainColor;
							} else {
								el.style.color =
									binding.value.mainColor;
							}
						}, delay);
					}
				}
			},
			"my-on": {
				bind(el, binding, vnode) {
					if (binding.arg === "click") {
						el.addEventListener("click", () => {
							binding.value(el);
						});
					}
				}
			}
		}
	};
</script>

<style>
</style>
