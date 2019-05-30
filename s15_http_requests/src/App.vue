<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Http Requests</h1>
				<div class="form-group">
					<label>Username</label>
					<input class="form-control" type="text" v-model="user.username">
				</div>
				<div class="form-group">
					<label>Email</label>
					<input class="form-control" type="email" v-model="user.email">
				</div>
				<button class="btn btn-primary" @click="submit">Submit</button>
				<hr>
				<button class="btn btn-primary" @click="fetchData">Get Data</button>
				<br>
				<br>
				<ul class="list-group">
					<li
						class="list-group-item"
						v-for="user in users"
						:key="user.email"
					>{{user.username}} - {{user.email}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					username: "",
					email: ""
				},
				users: []
			};
		},
		methods: {
			submit() {
				// data is needed by Firebase to instruct to create a node in the db (name 'data' is flexible)
				// .json is also required by Firebase and is not optional
				this.$http
					.post(
						"https://vuejs-http-375a2.firebaseio.com/data.json",
						this.user
					)
					.then(
						response => {
							console.log(response);
						},
						error => {
							console.log("POST error: ", error);
						}
					);
			},
			fetchData() {
				this.$http
					.get(
						"https://vuejs-http-375a2.firebaseio.com/data.json"
					)
					.then(
						response => {
							return response.json();
						},
						error => {
							console.log("GET error: ", error);
						}
					)
					.then(data => {
						const userData = data;
						console.log("GET data: ", userData);
						const resultArray = [];
						for (let key in data) {
							resultArray.push(data[key]);
						}
						this.users = resultArray;
					});
			}
		}
	};
</script>

<style lang="scss">
</style>
