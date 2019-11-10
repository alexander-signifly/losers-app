<template>
	<div class="play">
		<div class="top">
			<a @click.prevent="back">Back</a>
			<div class="title" v-text="`Select blue players`" />
		</div>
		<div class="players">
			<Player
				v-for="item in players"
				:key="item.id"
				v-bind="{item}"
				:selectedPlayers.sync="selectedPlayers"
			/>
		</div>
		<transition name="action">
			<div class="action" v-if="selectedPlayers.length === 2">
				<router-link class="btn btn--primary btn--block" to="/play/away"
					>Select players</router-link
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
			players: "users/data"
		}),
		selectedPlayers: {
			get() {
				return this.$store.getters["users/home"];
			},
			set(players) {
				this.$store.commit("users/homeAdd", players);
			}
		}
	},
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
	::v-deep {
		.circle {
			border: 4px solid $purple;
		}
		.icon {
			background-color: $purple;
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
