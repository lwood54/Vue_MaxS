<template>
	<ul class="nav nav-pills">
		<router-link class="nav-link" to="/" tag="li" active-class="active" exact>Home</router-link>
		<router-link class="nav-link" to="/user/1" tag="li" active-class="active">User 1</router-link>
		<router-link class="nav-link" to="/user/2" tag="li" active-class="active">User 2</router-link>
	</ul>
</template>

<style>
	.nav-link {
		cursor: pointer;
	}
</style>