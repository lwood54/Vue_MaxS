<template>
	<div>
		<h3>Some User Details</h3>
		<p>User loaded has ID: {{ $route.params.id}}</p>
		<!-- Alt way of accessing route -->
		<!-- Both of these are basically saying: "use the id received from going to this user page and
		pass it to the route"-->
		<!-- <router-link tag="button" :to="`/user/${$route.params.id}/edit`" class="btn btn-primary">Edit User</router-link> -->
		<router-link tag="button" :to="link" class="btn btn-primary">Edit User</router-link>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				link: {
					name: "userEdit",
					params: { id: this.$route.params.id }, // change to this.$route because relocation to vue instance
					query: { locale: "en", q: 100 },
					hash: "#data"
				}
			};
		},
		beforeRouteEnter(to, from, next) {
			if (true) {
				next();
			} else {
				next(false);
			}
			// won't have access to the instance for 'this' file because it hasn't been created until next() is called
			// you can access it with a call back as seen below if needed
			// next(vm => {
			// 	console.log("vm.link: ", vm.link);
			// });
		}
	};
</script>
