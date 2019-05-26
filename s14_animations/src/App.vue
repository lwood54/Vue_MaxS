<template>
	<div>
		<!-- <h1>S 14 - Animations</h1> -->
		<!-- <animations-1></animations-1> -->
		<game-board
			:gameContent="cities"
			:coverImage="require('./assets/images/panther-face.jpg')"
			gameTitle="Cities"
		/>
		<game-board
			:gameContent="porsches"
			:coverImage="require('./assets/images/porscheCrest.jpg')"
			gameTitle="Porsches"
		/>
	</div>
</template>

<script>
	import Animations1 from "./components/Animations1";
	import GameBoard from "./components/GameBoard";
	import { cities, porsches } from "./components/CardContent";

	export default {
		data() {
			return {
				cities,
				porsches
			};
		},
		components: {
			// "animations-1": Animations1,
			"game-board": GameBoard
		}
	};
</script>

<style lang="scss">
</style>
