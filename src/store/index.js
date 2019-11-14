import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import user from "./user";
import users from "./users";
import match from "./match";

export default new Vuex.Store({
	strict: true,
	modules: {
		user,
		users,
		match
	}
});
