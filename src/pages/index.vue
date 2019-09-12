<template>
	<div class="index">
		index

		<div class="deep">deep</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.index {
	color: $blue;

	::v-deep {
		.deep {
			color: deeppink;
		}
	}
}
</style>
