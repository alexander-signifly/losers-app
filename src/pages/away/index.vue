<template>
	<div class="play">
		<div class="top">
			<router-link
				to="/play/home"
				v-html="require('@/assets/icons/arrow-left.svg')"
			/>
			<div class="title" v-text="`Select red players`" />
		</div>
		<div class="players">
			<div class="item" v-for="item in players" :key="item.id">
				<Player v-bind="{item}" :selectedPlayers.sync="selectedPlayers" />
			</div>
		</div>
		<transition name="action">
			<div class="action" v-if="selectedPlayers.length === 2">
				<a class="btn btn--secondary btn--block" @click.prevent="next"
					>Select players</a
				>
			</div>
		</transition>
	</div>
</template>

<script>
import {mapGetters} from "vuex";
import Player from "@/components/player";

export default {
	components: {Player},
	computed: {
		...mapGetters({
			home: "users/home"
		}),
		players() {
			const players = this.$store.getters["users/data"];
			return players.filter((x) => {
				return !this.home.includes(x);
			});
		},
		selectedPlayers: {
			get() {
				return this.$store.getters["users/away"];
			},
			set(players) {
				this.$store.commit("users/awayAdd", players);
			}
		}
	},
	methods: {
		back() {
			this.$router.go(-1);
		},
		async next() {
			await this.$store.commit("users/awayAdd", this.selectedPlayers);
			this.$router.push("/play/match");
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
	::v-deep {
		.circle {
			border: 4px solid $red;
		}
		.icon {
			background-color: $red;
		}
	}
	.action {
		position: fixed;
		left: 0;
		width: 100%;
		padding: 0 16px;
		bottom: 32px;
		&-enter-active,
		&-leave-active {
			transition: transform 0.3s ease-in-out;
		}
		&-enter,
		&-leave-to {
			transform: translateY(200%);
		}
	}
}
</style>
