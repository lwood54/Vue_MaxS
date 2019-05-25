<template>
	<div class="game-board-container">
		<h1 class="board-title">{{title}}</h1>
		<div class="button-container">
			<button @click="handleGameReset" class="reset-button">Reset Cards</button>
		</div>
		<transition-group name="game-piece" tag="div" class="game-board">
			<game-piece
				v-for="card in cardDeck"
				:key="card.id"
				:cardData="card"
				@card-match-id="handleCardSelection"
				:firstSelected="firstSelected"
				:resetClicked="resetClicked"
				:clickCount="clickCount"
				class="piece"
			></game-piece>
		</transition-group>
	</div>
</template>

<script>
	import GamePiece from "./GamePiece";

	export default {
		data: function() {
			return {
				title: "Matching: Cities",
				cardDeck: [],
				clickCount: 0,
				firstSelected: null,
				secondSelected: null,
				resetClicked: false
			};
		},
		props: {
			gameContent: {
				type: Array,
				required: true
			}
		},
		methods: {
			handleCardSelection(card) {
				if (this.clickCount < 2) {
					this.clickCount++;
					if (!this.firstSelected) {
						this.firstSelected = card;
						this.resetClicked = false;
					} else if (
						this.firstSelected.id !== card.id &&
						this.firstSelected.cardMatchID ===
							card.cardMatchID &&
						!this.secondSelected
					) {
						this.clickCount++;
						this.secondSelected = card;
						let newDeck = [];
						this.cardDeck.forEach(originalCard => {
							if (
								originalCard.id !==
									this.firstSelected.id &&
								originalCard.id !== card.id
							) {
								newDeck.push(originalCard);
							} else {
								let mergeNewProps = {
									source: "",
									description: ""
								};
								newDeck.push({
									...originalCard,
									...mergeNewProps
								});
							}
						});
						setTimeout(() => {
							this.cardDeck = [...newDeck];
						}, 1000);
						this.firstSelected = null;
						this.secondSelected = null;
						this.resetClicked = true;
					} else {
						this.clickCount++;
						this.firstSelected = null;
						this.secondSelected = null;
						this.resetClicked = true;
					}
					if (this.clickCount >= 2) {
						this.clickCount = 0;
					}
				} else {
					this.clickCount = 0;
					this.resetClicked = true;
				}
			},
			handleGameReset() {
				this.cardDeck = [...this.shuffleArray(this.gameContent)];
			},
			shuffleArray(array) {
				let copiedArray = [...array];
				let shuffledArray = [];
				for (let i = 0; i < 16; i++) {
					const randomNum = Math.floor(
						Math.random() * copiedArray.length
					);
					shuffledArray.push(copiedArray.splice(randomNum, 1)[0]);
				}
				return shuffledArray;
			}
		},
		created() {
			this.cardDeck = [...this.shuffleArray(this.gameContent)];
		},
		components: {
			"game-piece": GamePiece
		}
	};
</script>

<style lang="scss" scoped>
	.board-title {
		margin: 10px;
		text-align: center;
	}

	.button-container {
		width: 100%;
		margin: 10px 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.reset-button {
		width: 150px;
		height: 50px;
		background-color: rgb(165, 65, 65);
		color: rgb(36, 4, 4);
		&:active {
			background-color: rgb(36, 4, 4);
			color: rgb(165, 65, 65);
		}
		cursor: pointer;
	}

	.game-board {
		display: flex;
		flex-direction: row;
		width: 900px;
		justify-content: space-evenly;
		margin: auto;
		flex-wrap: wrap;
		/* border: 3px solid red; */
	}

	.piece {
		transition: all 1s;
		/* display: inline-block; */
		margin-right: 10px;
	}
	.game-piece-enter, .game-piece-leave-to
															            /* .list-complete-leave-active below version 2.1.8 */ {
		opacity: 0;
		transform: translateY(5px);
	}
	.game-piece-leave-active {
		position: absolute;
	}
</style>
