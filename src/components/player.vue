<template>
	<a class="player red" @click="toggle">
		<div class="image-wrap">
			<div class="image" :style="{backgroundImage: `url(${image})`}" />
			<template v-if="active">
				<div class="circle" />
				<div class="icon"></div>
			</template>
		</div>
		<div class="name" v-text="name" />
	</a>
</template>

<script>
export default {
	props: {
		id: {type: Number, required: true},
		image: {type: String, required: true},
		name: {type: String, required: true}
	},
	data: () => ({
		active: false
	}),
	methods: {
		toggle() {
			this.$emit("select", this.id);
			this.active = !this.active;
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
	border: 4px solid $purple;
	.red & {
		border-color: $red;
	}
}
.icon {
	position: absolute;
	top: 0;
	right: -2px;
	width: 32px;
	height: 32px;
	background-color: $purple;
	border-radius: 50%;
	.red & {
		background-color: $red;
	}
}
.name {
	color: #60637a;
	font-size: 12px;
	font-weight: 700;
	text-align: center;
}
</style>
