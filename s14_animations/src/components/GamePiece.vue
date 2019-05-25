<template>
	<div class="gamepiece-container">
		<transition name="flip" mode="in-out">
			<div
				class="cover"
				v-if="!clicked && cardData.source !== '' && cardData.description !== ''"
				@click="handleClick(cardData)"
			>
				<img src="../assets/images/panther-face.jpg" alt="panther face" class="cover-image">
			</div>
		</transition>

		<transition name="flip" mode="in-out">
			<div
				v-if="clicked && cardData.source !== '' && cardData.description !== ''"
				@click="handleClick(cardData)"
				class="game-piece"
			>
				<img :src="cardData.source" :alt="cardData.name" class="images" v-if="cardData.source">
				<p v-if="cardData.description">{{cardData.description}}</p>
				<!-- <p v-if="cardData.description">{{cardData.name}}</p> -->
				<slot></slot>
			</div>
		</transition>
		<div v-if="cardData.source === '' && cardData.description === '' " class="match">
			<p>MATCH!!!</p>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				id: "",
				clicked: false
			};
		},
		props: {
			cardData: {
				type: Object,
				required: true
			},
			firstSelected: {
				type: Object
			},
			resetClicked: {
				type: Boolean
			},
			clickCount: {
				type: Number
			}
		},
		watch: {
			resetClicked: function() {
				if (this.resetClicked) {
					setTimeout(() => {
						this.clicked = false;
					}, 1200);
				}
			}
		},
		methods: {
			handleClick: function(val) {
				console.log("clickCount: ", this.clickCount);
				if (this.clickCount < 2) {
					this.clicked = !this.clicked;
					this.$emit("card-match-id", this.cardData);
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	$piece-height: 175px;
	$piece-width: 175px;

	.gamepiece-container {
		height: $piece-height;
		width: $piece-width;
		margin: 5px;
	}
	.game-piece {
		height: $piece-height;
		width: $piece-width;
		border-radius: 3px;
		background-color: #94aacc;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		margin: 5px;
		padding: 3px;
		box-sizing: border-box;
		cursor: pointer;
	}

	.match {
		margin: 5px;
		padding: 3px;
		height: $piece-height;
		width: $piece-width;
		box-sizing: border-box;
		border-radius: 3px;
		/* z-index: 10; */
		background-color: #515fd8;
		color: rgb(226, 226, 247);
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		cursor: pointer;
	}

	.cover {
		margin: 5px;
		padding: 3px;
		height: $piece-height;
		width: $piece-width;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-radius: 3px;
		/* z-index: 10; */
		background-color: #cf0d0d;
		cursor: pointer;
	}

	.cover-image {
		max-height: 80%;
		max-width: 80%;
		margin: auto;
	}

	.images {
		max-height: 80%;
		max-width: 80%;
		margin: auto;
	}

	.flip-enter-active {
		transition: all 0.35s cubic-bezier(0.55, 0.085, 0.68, 0.53); //ease-in-quad
		transform-style: preserve-3d;
	}

	.flip-leave-active {
		/* transition: all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94); //ease-out-quad */
		display: none;
	}

	.flip-enter,
	.flip-leave-to {
		/* transform: scaleY(0) translateZ(0); */
		transform: rotateY(180deg);
		opacity: 0;
	}
</style>
