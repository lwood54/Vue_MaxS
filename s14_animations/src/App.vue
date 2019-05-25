<template>
	<div>
		<!-- <h1>S 14 - Animations</h1> -->
		<!-- <animations-1></animations-1> -->
		<game-board :gameContent="cardContent"></game-board>
	</div>
</template>

<script>
	import Animations1 from "./components/Animations1";
	import GameBoard from "./components/GameBoard";
	import { cardContent } from "./components/CardContent";

	export default {
		data() {
			return {
				cardContent
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
