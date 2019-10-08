<template>
	<div class="tabs">
		<router-link
			class="tab"
			v-for="item in tabs"
			:key="item.name"
			:to="item.path"
			v-html="item.icon"
		/>
	</div>
</template>

<script>
export default {
	data: () => ({
		tabs: [
			{
				icon: require("@/assets/icons/home.svg"),
				path: "/"
			},
			{
				icon: require("@/assets/icons/podium.svg"),
				path: "/seasons"
			},
			{
				icon: require("@/assets/icons/play.svg"),
				path: "/play"
			},
			{
				icon: require("@/assets/icons/badges.svg"),
				path: "/badges"
			},
			{
				icon: require("@/assets/icons/players.svg"),
				path: "/players"
			}
		]
	})
};
</script>

<style lang="scss" scoped>
.tabs {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: $tabs-height;
	display: flex;
	background-color: $black2;
	.tab {
		color: $white;
		width: percentage(1/5);
		display: flex;
		justify-content: center;
		align-items: center;
		text-decoration: none;
	}
}
</style>
