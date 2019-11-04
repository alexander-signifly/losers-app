<template>
	<div class="play">
		<div class="top">
			<a @click.prevent="back">Back</a>
			<div class="title" v-text="titles[state]" />
		</div>
		<div class="players">
			<Player v-for="item in players" :key="item.id" v-bind="item" />
		</div>
	</div>
</template>

<script>
import Player from "./components/player";

export default {
	components: {Player},
	data: () => ({
		state: 0,
		players: [
			{
				id: 1,
				name: "Yeray",
				image:
					"https://marvel-live.freetls.fastly.net/canvas/2019/7/60e3e9075ea445928840a8e163885263?quality=95&fake=.png"
			},
			{
				id: 2,
				name: "Hu My",
				image:
					"https://marvel-live.freetls.fastly.net/canvas/2019/7/a56daf1f52df480588a77b17905bf497?quality=95&fake=.png"
			},
			{
				id: 3,
				name: "Drake",
				image:
					"https://marvel-live.freetls.fastly.net/canvas/2018/9/ace11f81b47c4affbc423ebb78f0822f?quality=95&fake=.png"
			},
			{
				id: 4,
				name: "Cha",
				image:
					"https://marvel-live.freetls.fastly.net/canvas/2019/7/f7f96c759e4443efb69e3d209d7b6ece?quality=95&fake=.png"
			},
			{
				id: 5,
				name: "Naraya",
				image:
					"https://marvel-live.freetls.fastly.net/canvas/2018/10/0d17fc6da0ba4d92b3fbe07e01265b98?quality=95&fake=.png"
			}
		],
		selectedPlayers: [],
		titles: [
			"Select red players",
			"Select blue players",
			"Game on",
			"Game ended"
		]
	}),
	methods: {
		back() {
			this.$router.go(-1);
		}
	}
};
</script>

<style lang="scss" scoped>
.play {
	z-index: 1;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: $black;
	padding: 0 16px;
	.top {
		display: flex;
		align-items: center;
		padding: 12px 0;
		position: relative;
		height: 56px;
	}
	.title {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		font-size: 16px;
		font-weight: 700;
	}
	.players {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 32px;
	}
}
</style>
