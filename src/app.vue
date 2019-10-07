<template>
	<div class="app">
		<v-header />
		<router-view />
		<tabs />
	</div>
</template>

<script>
import vHeader from "@/components/header";
import tabs from "@/components/tabs";

export default {
	components: {vHeader, tabs}
};
</script>

<style lang="scss" scoped>
.app {
}
</style>
