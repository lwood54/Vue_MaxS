<template>
	<div class="col-xs-12 col-sm-6">
		<ul class="list-group">
			<li class="list-group-item" v-for="server in servers" :key="server.id">
				Server #{{ server.id }} / Status: {{server.status}}
				<button
					@click="getServer(server)"
				>Get Details</button>
			</li>
		</ul>
	</div>
</template>

<script>
	import { serverEventBus } from "./serverEventBus";

	export default {
		data() {
			return {
				servers: [
					{ id: 1, status: "Normal" },
					{ id: 2, status: "Critical" },
					{ id: 3, status: "Unkown" },
					{ id: 4, status: "Normal" }
				]
			};
		},
		methods: {
			getServer(server) {
				console.log(
					"sending server details to serverEventBus",
					server
				);
				serverEventBus.$emit("getServer", server);
			}
		},
		created() {
			// This works, but it appears that Vue will allow you to mutate the properties
			// from child to child? This seems like it could cause some side effects. Another way to
			// do this challenge is to just directly mutate the server in the ServerDetails component
			// serverEventBus.$on("changedServerStatus", data => {
			// 	this.servers.forEach((server, i) => {
			// 		if (server.id === data.id) {
			// 			this.servers[i].status = data.status;
			// 		}
			// 	});
			// });
		}
	};
</script>

<style>
</style>
