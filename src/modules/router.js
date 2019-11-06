import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import index from "@/pages/index";
import seasons from "@/pages/seasons";
import home from "@/pages/home";
import away from "@/pages/away";
import match from "@/pages/match";
import badges from "@/pages/badges";
import players from "@/pages/players";
import player from "@/pages/player";

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{path: "/", name: "losers", component: index},
		{path: "/seasons", name: "Seasons", component: seasons},
		{path: "/play/home", name: "home", component: home},
		{path: "/play/away", name: "away", component: away},
		{path: "/play/match", name: "match", component: match},
		{path: "/badges", name: "badges", component: badges},
		{path: "/players", name: "players", component: players},
		{path: "/player/:slug", name: "player", component: player}
	]
});
