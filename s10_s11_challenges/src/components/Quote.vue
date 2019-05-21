<template>
	<div class="col-sm-6 col-md-4 col-log-3">
		<div class="planel panel-default">
			<div class="panel-body quote">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style lang="scss">
	.panel-body {
		font-family: "Arizonia", cursive;
		font-size: 24px;
		border: 1px solid rgb(177, 175, 175);
		border-radius: 4px;
		color: #6e6e6e;
		margin: 10px;
	}

	.quote {
		cursor: pointer;
		&:hover {
			background-color: #ffe2e2;
		}
	}
</style>
