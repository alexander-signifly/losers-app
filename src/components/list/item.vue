<template>
	<div class="item">
		<div class="image" :style="{backgroundImage: `url(${image})`}" />
		<div class="rank" v-text="rank" />
		<div class="name" v-html="name" />
		<div class="value" v-html="value" />
	</div>
</template>

<script>
export default {
	props: {
		image: {type: String, required: true},
		rank: {type: Number, required: true},
		name: {type: String, required: true},
		value: {type: String, required: true}
	}
};
</script>

<style lang="scss" scoped>
.item {
	display: flex;
	align-items: center;
	.image {
		background-size: 100%;
		border-radius: 100%;
		width: 32px;
		height: 32px;
	}
}
</style>
