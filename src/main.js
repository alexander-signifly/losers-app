import Vue from "vue";
import app from "./app.vue";
import "normalize.css/normalize.css";
import "./style/index.scss";
import router from "./modules/router";

Vue.config.productionTip = false;

new Vue({
	router,
	el: "#app",
	render: (h) => h(app)
});
