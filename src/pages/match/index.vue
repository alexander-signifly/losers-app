<template>
	<div class="play">
		GAME
		<div class="highlight" v-if="showHighlight">
			<div class="headline">Match highlight</div>
			<div class="box">
				<div
					class="oval"
					:style="{backgroundImage: `url(${highlight.image})`}"
				/>
				<div class="stat" v-text="highlight.stat" />
				<a class="btn btn--white btn--block" @click="play">Play game</a>
				<div class="info">
					Tap the clock to pause the game at any given time.
				</div>
			</div>
			<a class="cancel" @click="cancel">Cancel game</a>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		showHighlight: true,
		highlight: {
			image:
				"https://marvel-live.freetls.fastly.net/canvas/2018/9/ace11f81b47c4affbc423ebb78f0822f?quality=95&fake=.png",
			stat: "Alexnder is one game away from winning the MVP badge"
		}
	}),
	methods: {
		cancel() {
			console.log("cancel");
		},
		play() {
			this.showHighlight = false;
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
}
.highlight {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: $black;
	padding: 36px 24px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}
.headline {
	font-size: 18px;
	font-weight: 700;
}
.box {
	background-image: linear-gradient(225deg, #7a8aff 0%, #504de3 100%);
	border-radius: 4px;
	width: 100%;
	flex-grow: 1;
	margin: 32px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 32px;
	text-align: center;
}
.oval {
	background-size: 100%;
	border-radius: 100%;
	width: 152px;
	height: 152px;
	margin-top: 32px;
}
.stat {
	font-size: 18px;
	font-weight: 400;
	margin-top: 24px;
	margin-bottom: 40px;
}
.info {
	font-size: 12px;
	margin-top: 48px;
	max-width: 150px;
}
.cancel {
	font-size: 14px;
	cursor: pointer;
}
</style>
