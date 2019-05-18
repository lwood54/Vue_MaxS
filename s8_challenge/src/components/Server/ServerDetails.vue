<template>
	<div class="col-xs-12 col-sm-6">
		<p v-if="!server">Server Details are currently not updated</p>
		<p v-if="server">Server #: {{server.id}} / Status: {{server.status}}</p>
		<button @click="handleClick">set to normal</button>
	</div>
</template>

<script>
	import { serverEventBus } from "./serverEventBus";

	export default {
		data() {
			return {
				server: {}
			};
		},
		methods: {
			handleClick() {
				this.server.status = "Normal";
				// console.log("server ", this.server.id, " was clicked");
				// serverEventBus.$emit("changedServerStatus", {
				// 	id: this.server.id,
				// 	status: "Normal"
				// });
			}
		},
		created() {
			serverEventBus.$on("getServer", data => {
				console.log("received data: ", data);
				this.server = data;
			});
		}
	};
</script>

<style>
</style>
