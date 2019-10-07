import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import home from "@/pages/home";
import seasons from "@/pages/seasons";
import play from "@/pages/play";
import badges from "@/pages/badges";
import players from "@/pages/players";

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{path: "/", name: "index", component: home},
		{path: "/seasons", name: "seasons", component: seasons},
		{path: "/play", name: "play", component: play},
		{path: "/badges", name: "badges", component: badges},
		{path: "/players", name: "players", component: players}
	]
});
