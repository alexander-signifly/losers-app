// import axios from "@/modules/axios";

export default {
	namespaced: true,

	state: {
		data: {
			id: 10,
			name: "Alexander",
			image:
				"https://marvel-live.freetls.fastly.net/canvas/2018/9/ace11f81b47c4affbc423ebb78f0822f?quality=95&fake=.png"
		},
		auth: JSON.parse(localStorage.getItem("auth"))
	},

	mutations: {
		data(state, {data}) {
			state.data = data;
		},

		authSet(state, {data}) {
			state.auth = data;
			localStorage.setItem("auth", JSON.stringify(data));
		},

		authDelete(state) {
			state.auth = null;
			localStorage.removeItem("auth");
		}
	},

	actions: {
		async login({commit, dispatch}, payload) {
			const {data} = await axios.post("login", payload, {customErr: true});
			commit("authSet", {data});
			await dispatch("data");
		},

		async logout({commit, getters}) {
			try {
				if (getters.auth) await axios.post("logout", null, {customErr: true});
			} catch (err) {
				// ignore error
			} finally {
				commit("authDelete");
				commit("data", {data: null});
			}
		},

		async data({commit, state, getters}) {
			if (!state.auth) return;

			const {data} = await axios.get("/account");
			commit("data", data);
			return getters.data;
		},

		async update({commit, state, getters}, payload) {
			if (!state.auth) return;

			const {data} = await axios.put("/account", payload);
			commit("data", data);
			return getters.data;
		}
	},

	getters: {
		auth(state) {
			return state.auth;
		},

		data(state) {
			return state.data;
		}
	}
};
