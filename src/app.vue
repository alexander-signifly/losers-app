<template>
	<div class="app">
		<Header />
		<router-view />
		<Nav />
	</div>
</template>

<script>
import Header from "@/components/header";
import Nav from "@/components/nav";

export default {
	components: {Header, Nav}
};
</script>

<style lang="scss" scoped>
.app {
}
</style>
