<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Animations 1</h1>
				<hr>
				<select v-model="transEffect" class="form-control">
					<option value="fade">Fade</option>
					<option value="slide">Slide</option>
				</select>
				<button class="btn btn-primary" @click="show = !show">Show Alert</button>
				<br>
				<br>
				<transition :name="transEffect">
					<div class="alert alert-info" v-if="show">Fading in...</div>
				</transition>
				<transition :name="transEffect">
					<div class="alert alert-info" v-if="show">Sliding and fading in...</div>
				</transition>
				<!--
          You can override the defaults and set the specific action classes by using the attributes
          seen below. This allows you to created even more customized components and use external
          libraries like Animate.css, which required you to use a class of "animated __(instruction)__"
				-->
				<transition enter-active-class="animated bounce" leave-active-class="animated shake" appear>
					<div class="alert alert-info" v-if="show">Animate Appear</div>
				</transition>
				<transition :name="transEffect" mode="out-in">
					<!-- Using transition-group here messes it up because Vue would think of each
            element as its own isntance and would not 'wait' for the other one to finish.
					-->
					<div class="alert alert-info" v-if="show" key="alert">Info Alert</div>
					<div class="alert alert-warning" v-else key="warn">Warning Alert</div>
				</transition>
				<button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
				<br>
				<br>
				<transition
					@before-enter="beforeEnter"
					@enter="enter"
					@after-enter="afterEnter"
					@enter-cancelled="enterCancelled"
					@before-leave="beforeLeave"
					@leave="leave"
					@after-leave="afterLeave"
					@leave-cancelled="leaveCancelled"
					:css="false"
				>
					<!-- :css="false" tells Vue not to bother looking for CSS classes, instead skip right to JS-->
					<div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
				</transition>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				load: true,
				transEffect: "fade",
				elementWidth: 100
			};
		},
		methods: {
			beforeEnter(el) {
				console.log("beforeEnter");
				this.elementWidth = 100;
				el.style.width = this.elementWidth + "px";
			},
			enter(el, done) {
				// similar to the .enter-active part of CSS (play animation actions here)
				console.log("enter");
				let round = 1;
				const interval = setInterval(() => {
					el.style.width = this.elementWidth + round * 10 + "px";
					round++;
					if (round > 20) {
						clearInterval(interval);
						done();
					}
				}, 20);
				// needed to tell Vue js once this animation finishes
				// if you combine JS with CSS, you DON'T have to tell Vue that the animation is done
				// because the CSS animations will take care of that
			},
			afterEnter(el) {
				console.log("after enter");
			},
			enterCancelled(el) {
				console.log("enterCancelled");
			},
			beforeLeave(el) {
				console.log("beforeLeave");
				this.elementWidth = 300;
				el.style.width = this.elementWidth + "px";
			},
			leave(el, done) {
				console.log("leave");
				let round = 1;
				const interval = setInterval(() => {
					el.style.width = this.elementWidth - round * 10 + "px";
					round++;
					if (round > 20) {
						clearInterval(interval);
						done();
					}
				}, 20);
			},
			afterLeave(el) {
				console.log("afterLeave");
			},
			leaveCancelled(el) {
				console.log("leaveCancelled");
			}
		}
	};
</script>

<style>
	.fade-enter {
		opacity: 0;
	}
	.fade-leave-to {
		opacity: 0;
	}
	.fade-enter-active {
		transition: opacity 3s;
	}
	.fade-leave-active {
		transition: opacity 1s;
		/* opacity: 0; */
	}
	.slide-enter,
	.slide-leave-to {
		opacity: 0;
	}
	.slide-enter-active {
		/* Keep 'forwards' in mind, helps with snap back, but doesn't seem to do much in this instance.*/
		animation: slide-in 1s ease-out;
		transition: opacity 0.75s;
	}
	.slide-leave-active {
		animation: slide-out 1s ease-out;
		transition: opacity 1s;
	}
	@keyframes slide-in {
		from {
			transform: translateY(20px);
		}
		to {
			transform: translateY(0);
		}
	}
	@keyframes slide-out {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(20px);
		}
	}
</style>