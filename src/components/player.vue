<template>
	<a class="player" @click="toggle">
		<div class="image-wrap">
			<div class="image" :style="{backgroundImage: `url(${item.image})`}" />
			<template v-if="active">
				<div class="circle" />
				<div class="icon" v-html="playerIcon" />
			</template>
		</div>
		<div class="name" v-text="item.name" />
	</a>
</template>

<script>
export default {
	props: {
		item: {type: Object, required: true},
		selectedPlayers: {type: Array, required: true}
	},
	computed: {
		active() {
			return this.selectedPlayers.includes(this.item);
		},
		playerIcon() {
			return this.selectedPlayers.findIndex(({id}) => id === this.item.id)
				? require("@/assets/icons/play.svg")
				: require("@/assets/icons/shield.svg");
		}
	},
	methods: {
		toggle() {
			if (this.selectedPlayers.includes(this.item)) {
				const players = this.selectedPlayers.filter((x) => x !== this.item);
				this.$emit("update:selectedPlayers", players);
			} else {
				if (this.selectedPlayers.length < 2) {
					this.$emit("update:selectedPlayers", [
						...this.selectedPlayers,
						this.item
					]);
				}
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.player {
	margin-bottom: 16px;
}
.image-wrap {
	position: relative;
}
.image {
	background-size: 100%;
	border-radius: 100%;
	width: 75px;
	height: 75px;
	border-radius: 50%;
	margin-bottom: 12px;
}
.circle {
	top: 0;
	left: 0;
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
.icon {
	position: absolute;
	top: 0;
	right: -2px;
	width: 32px;
	height: 32px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.name {
	color: #60637a;
	font-size: 12px;
	font-weight: 700;
	text-align: center;
}
</style>
