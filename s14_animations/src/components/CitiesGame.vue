<template>
	<div>
		<h1>Cities Game</h1>
		<game-board :gameContent="cities" :coverImage="panther" gameTitle="Cities"/>
	</div>
</template>

<script>
	import GameBoard from "./GameBoard";
	import { cities } from "./CardContent";
	import panther from "../assets/images/panther.jpg";
	console.log("cities: ", cities);

	export default {
		data() {
			return {
				cities,
				panther
			};
		},
		components: {
			"game-board": GameBoard
		}
	};
</script>

<style>
</style>
