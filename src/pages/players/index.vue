<template>
	<div class="players">
		<div class="search">SEARCH</div>
		<div class="items">
			<router-link
				class="item"
				:to="`/player/${item.slug}`"
				v-for="item in players"
				:key="item.id"
			>
				<div class="image" :style="{backgroundImage: `url(${item.image})`}" />
				<div class="name" v-text="item.name" />
			</router-link>
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			players: "users/data"
		})
	}
};
</script>

<style lang="scss" scoped>
.item {
	display: flex;
	align-items: center;
	margin-bottom: 12px;
}
.image {
	background-size: 100%;
	border-radius: 100%;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin-right: 8px;
}
</style>
