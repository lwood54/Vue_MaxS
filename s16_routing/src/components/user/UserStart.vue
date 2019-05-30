<template>
	<div>
		<p>Please select a User</p>
		<hr>
		<ul class="list-group">
			<router-link
				v-for="number in 3"
				tag="li"
				:to="`/user/${number}`"
				class="list-group-item"
				style="cursor: pointer"
				:key="number"
			>User {{number}}</router-link>
		</ul>
	</div>
</template>