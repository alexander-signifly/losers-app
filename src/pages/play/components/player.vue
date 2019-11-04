<template>
	<a class="player" @click="toggle">
		<div class="image" :style="{backgroundImage: `url(${image})`}" />
		<div class="name" v-text="name" />
	</a>
</template>

<script>
export default {
	props: {
		image: {type: String, required: true},
		name: {type: String, required: true}
	},
	methods: {
		toggle() {
			console.log("togglePlayer");
		}
	}
};
</script>

<style lang="scss" scoped>
.player {
	margin-bottom: 16px;
}
.image {
	background-size: 100%;
	border-radius: 100%;
	width: 75px;
	height: 75px;
	margin-bottom: 12px;
}
.name {
	color: #60637a;
	font-size: 12px;
	font-weight: 700;
	text-align: center;
}
</style>
