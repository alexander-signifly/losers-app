<template>
	<div class="home">
		<div class="btn-container">
			<router-link class="btn btn--primary" to="/play" v-text="`Play game`" />
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.home {
	padding-top: 32px;
	.btn-container {
		display: flex;
		justify-content: center;
	}
}
</style>
