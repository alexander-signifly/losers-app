<template>
	<div class="home pad">
		<router-link
			class="btn btn--primary btn--block"
			to="/play"
			v-text="`Play game`"
		/>
		<tabs v-bind="{items}" />
	</div>
</template>

<script>
import tabs from "@/components/tabs";

export default {
	components: {tabs},
	data: () => ({
		items: [
			{
				component: "v-list",
				data: {
					title: "Win ratio",
					path: "/?",
					items: [
						{
							image:
								"https://marvel-live.freetls.fastly.net/canvas/2018/10/09fac96884594c6fa0992c8ab48503f2?quality=95&fake=.png",
							rank: 1,
							name: "Chiemeka Yobachukwu",
							value: "00"
						},
						{
							image:
								"https://marvel-live.freetls.fastly.net/canvas/2018/10/28b22e413b254f4c8c613e3b9e81e064?quality=95&fake=.png",
							rank: 2,
							name: "Marco Alves",
							value: "00"
						}
					]
				}
			},
			{
				component: "v-list",
				data: {
					title: "Goals (A)",
					path: "/?",
					items: [
						{
							image:
								"https://marvel-live.freetls.fastly.net/canvas/2018/10/28b22e413b254f4c8c613e3b9e81e064?quality=95&fake=.png",
							rank: 1,
							name: "Marco Alves",
							value: "00"
						},
						{
							image:
								"https://marvel-live.freetls.fastly.net/canvas/2018/10/09fac96884594c6fa0992c8ab48503f2?quality=95&fake=.png",
							rank: 2,
							name: "Chiemeka Yobachukwu",
							value: "00"
						}
					]
				}
			},
			{
				component: "v-list",
				data: {
					title: "Goals (D)",
					path: "/?",
					items: [
						{
							image:
								"https://marvel-live.freetls.fastly.net/canvas/2018/10/09fac96884594c6fa0992c8ab48503f2?quality=95&fake=.png",
							rank: 1,
							name: "Chiemeka Yobachukwu",
							value: "00"
						},
						{
							image:
								"https://marvel-live.freetls.fastly.net/canvas/2018/10/28b22e413b254f4c8c613e3b9e81e064?quality=95&fake=.png",
							rank: 2,
							name: "Marco Alves",
							value: "00"
						}
					]
				}
			},
			{
				component: "v-list",
				data: {
					title: "Losses",
					path: "/?",
					items: [
						{
							image:
								"https://marvel-live.freetls.fastly.net/canvas/2018/10/09fac96884594c6fa0992c8ab48503f2?quality=95&fake=.png",
							rank: 1,
							name: "Chiemeka Yobachukwu",
							value: "00"
						},
						{
							image:
								"https://marvel-live.freetls.fastly.net/canvas/2018/10/28b22e413b254f4c8c613e3b9e81e064?quality=95&fake=.png",
							rank: 2,
							name: "Marco Alves",
							value: "00"
						}
					]
				}
			}
		]
	})
};
</script>

<style lang="scss" scoped>
.home {
	padding-top: 32px;
	.btn {
		margin-bottom: 48px;
	}
}
</style>
