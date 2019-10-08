<template>
	<div class="app">
		<v-header />
		<router-view />
		<v-nav />
	</div>
</template>

<script>
import vHeader from "@/components/header";
import vNav from "@/components/nav";

export default {
	components: {vHeader, vNav}
};
</script>

<style lang="scss" scoped>
.app {
}
</style>
