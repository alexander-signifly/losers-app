<template>
	<div class="list">
		<div class="top">
			<div class="title" v-html="title" />
			<div class="arrow">Arrow</div>
		</div>
		<div class="items">
			<item v-for="(item, index) in items" :key="index" v-bind="item" />
		</div>
	</div>
</template>

<script>
import item from "@/components/list/item";

export default {
	props: {
		title: {type: String, required: true},
		path: {type: String, required: false},
		items: {type: Array, required: true}
	},
	components: {item}
};
</script>

<style lang="scss" scoped>
.list {
	.top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.title {
		font-size: 18px;
		font-weight: 700;
	}
}
</style>
