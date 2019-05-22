<template>
	<div>
		<h1>Directives-Practice</h1>
		<p v-text="'v-text: Some Text'"></p>
		<p v-html="'v-html: <strong>strong text</strong>'"></p>
		<hr>
		<h1>Custon Directives</h1>
		<p v-highlight:background.delayed="'red'">Color this</p>
	</div>
</template>

<script>
	export default {};
</script>

<style>
</style>
