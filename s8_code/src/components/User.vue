<template>
	<div class="component">
		<h1>The User Component</h1>
		<p>I'm an awesome User!</p>
		<button @click="handleChangeName">Change my name</button>
		<hr>
		<p>Testing age change with event bus. This age should remain the same: {{age}}</p>
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<app-user-detail :name="name" @nameReset="name = $event" :userAge="age"></app-user-detail>
			</div>
			<div class="col-xs-12 col-sm-6">
				<app-user-edit :userAge="age"></app-user-edit>
			</div>
		</div>
	</div>
</template>

<script>
	import UserDetail from "./UserDetail.vue";
	import UserEdit from "./UserEdit.vue";

	export default {
		data: function() {
			return {
				name: "Logan",
				age: 27
			};
		},
		methods: {
			handleChangeName() {
				this.name = "Tiffany";
			}
		},
		components: {
			appUserDetail: UserDetail,
			appUserEdit: UserEdit
		}
	};
</script>

<style scoped>
	div {
		background-color: lightblue;
	}
</style>
