<template>
	<ul class="nav nav-pills">
		<router-link class="nav-link" to="/" tag="li" active-class="active" exact>Home</router-link>
		<router-link class="nav-link" to="/user" tag="li" active-class="active">User</router-link>
	</ul>
</template>

<style>
	.nav-link {
		cursor: pointer;
		margin: 5px;
	}
</style>