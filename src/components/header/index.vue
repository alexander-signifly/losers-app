<template>
	<div class="header">
		<div class="avatar"></div>
		<v-title>{{ name }}</v-title>
		<router-link
			to="/settings"
			v-html="require('@/assets/icons/settings.svg')"
		/>
	</div>
</template>

<script>
import vTitle from "@/components/title";

export default {
	components: {vTitle},
	computed: {
		name() {
			return this.$route.name;
		}
	}
};
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 12px 16px;
	position: relative;
	.avatar {
		background-image: url(https://marvel-live.freetls.fastly.net/canvas/2018/10/09fac96884594c6fa0992c8ab48503f2?quality=95&fake=.png);
		background-size: 100%;
		border-radius: 100%;
		width: 32px;
		height: 32px;
	}
	.title {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
}
</style>
