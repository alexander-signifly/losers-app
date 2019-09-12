<template>
	<div class="app">
		<router-view />
		<tabs />
	</div>
</template>

<script>
import tabs from "@/components/tabs";

export default {
	components: {tabs}
};
</script>

<style lang="scss" scoped>
.app {
}
</style>
