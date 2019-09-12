import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import index from "@/pages/index";

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [{path: "/", name: "index", component: index}]
});
