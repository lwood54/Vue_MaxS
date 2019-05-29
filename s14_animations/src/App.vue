<template>
	<div>
		<h1>S 14 - Animations</h1>
		<animations-1></animations-1>
		<game-board :gameContent="cities" :coverImage="panther" gameTitle="Cities"/>
		<game-board :gameContent="porsches" :coverImage="porscheCrest" gameTitle="Porsches"/>
	</div>
</template>

<script>
	import Animations1 from "./components/Animations1";
	import GameBoard from "./components/GameBoard";
	import { cities, porsches } from "./components/CardContent";
	import panther from "./assets/images/panther.jpg";
	import porscheCrest from "./assets/images/porsche-crest.jpg";

	export default {
		data() {
			return {
				cities,
				porsches,
				panther,
				porscheCrest
			};
		},
		components: {
			"animations-1": Animations1,
			"game-board": GameBoard
		}
	};
</script>

<style>
</style>
