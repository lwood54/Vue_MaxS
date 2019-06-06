<template>
	<div>
		<!-- <quiz-app></quiz-app> -->
		<h1>Home Screen</h1>
		<div>
			<router-link to="/">Home</router-link>
			<router-link to="/cities">Match (cities)</router-link>
		</div>
		<router-view></router-view>
		<!-- <hr>
		<hr>
		<br>
		<br>
		<h1>S 14 - Animations</h1>
		<animations-1></animations-1>
		<game-board :gameContent="porsches" :coverImage="porscheCrest" gameTitle="Porsches"/>-->
	</div>
</template>

<script>
	// import Animations1 from "./components/Animations1";
	// import GameBoard from "./components/GameBoard";
	// import { cities, porsches } from "./components/CardContent";
	// import panther from "./assets/images/panther.jpg";
	// import porscheCrest from "./assets/images/porsche-crest.jpg";
	import QuizApp from "./components/QuizProject/QuizApp";

	export default {
		// data() {
		// 	return {
		// 		cities,
		// 		porsches,
		// 		panther,
		// 		porscheCrest
		// 	};
		// },
		components: {
			// "animations-1": Animations1,
			// "game-board": GameBoard,
			"quiz-app": QuizApp
		}
	};
</script>

<style>
</style>
