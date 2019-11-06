import axios from "@/modules/axios";

export default {
	namespaced: true,

	state: {
		data: null,
		home: [],
		away: []
	},

	mutations: {
		data(state, {data}) {
			state.data = data;
		},

		homeAdd(state, user) {
			state.home.push(user);
		},

		homeClear(state) {
			state.home = [];
		},

		homeRemove(state, user) {
			let index = state.home.findIndex((u) => u.id === user.id);

			if (index === -1) return;

			state.home.splice(index, 1);
		},

		awayAdd(state, user) {
			state.away.push(user);
		},

		awayClear(state) {
			state.away = [];
		},

		awayRemove(state, user) {
			let index = state.away.findIndex((u) => u.id === user.id);

			if (index === -1) return;

			state.away.splice(index, 1);
		}
	},

	actions: {
		async data({commit, getters}) {
			const {data} = await axios.get(
				"/users?count=999&sort=first_name,last_name"
			);
			commit("data", data);
			return getters.data;
		}
	},

	getters: {
		data(state) {
			return state.data;
		},
		home(state) {
			return state.home;
		},
		away(state) {
			return state.away;
		}
	}
};
