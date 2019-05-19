<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<br>
				<button class="btn btn-primary" @click="handleColorSelect('blue')">Load Blue Template</button>
				<button class="btn btn-success" @click="handleColorSelect('green')">Load Green Template</button>
				<button class="btn btn-danger" @click="handleColorSelect('red')">Load Red Template</button>
				<hr>
				<component :is="selectedColor">Here are some words.</component>
				<!-- <app-blue></app-blue>
                <app-green></app-green>
				<app-red></app-red>-->
			</div>
		</div>
	</div>
</template>

<script>
	import Blue from "./components/Blue.vue";
	import Green from "./components/Green.vue";
	import Red from "./components/Red.vue";

	export default {
		data() {
			return {
				selectedColor: "app-blue"
			};
		},
		methods: {
			handleColorSelect(color) {
				switch (color) {
					case "blue":
						this.selectedColor = "app-blue";
						break;
					case "green":
						this.selectedColor = "app-green";
						break;
					case "red":
						this.selectedColor = "app-red";
						break;
				}
			}
		},
		components: {
			appBlue: Blue,
			appGreen: Green,
			appRed: Red
		}
	};
</script>

<style>
</style>
