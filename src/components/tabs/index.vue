<template>
	<div class="tabs">
		<div class="filter">
			<div
				class="title"
				:class="{active: activeIndex === index}"
				v-for="(item, index) in items"
				:key="index"
				v-html="item.data.title"
				@click="setIndex(index)"
			/>
		</div>
		<div class="content">
			<component :is="activeTab.component" v-bind="activeTab.data" />
		</div>
	</div>
</template>

<script>
import vList from "@/components/list";

export default {
	props: {
		items: {type: Array, required: true}
	},
	components: {vList},
	data: () => ({
		activeIndex: 0
	}),
	computed: {
		activeTab() {
			return this.items[this.activeIndex];
		}
	},
	methods: {
		setIndex(i) {
			this.activeIndex = i;
		}
	}
};
</script>

<style lang="scss" scoped>
.tabs {
	.filter {
		display: flex;
		margin-bottom: 40px;
		white-space: nowrap;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
	}
	.title {
		font-size: 14px;
		font-weight: 700;
		margin-right: 32px;
		color: $grey;
		&.active {
			color: $white;
		}
	}
}
</style>
