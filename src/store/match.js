// import axios from '@/modules/axios'

export default {
	namespaced: true,

	state: {
		data: null,
		activeMatch: null
	},

	mutations: {
		data(state, {data}) {
			state.data = data;
		},

		activeSet(state, {data}) {
			state.activeMatch = data;
		},

		activeClear(state) {
			state.activeMatch = null;
		}
	},

	actions: {
		async data({commit, getters}) {
			const {data} = await axios.get(
				"/matches?include=teams.members,players&count=999"
			);
			commit("data", data);
			return getters.data;
		},

		async activeGet({commit, getters}, activeMatchId) {
			const {data} = await axios.get(`/matches/${activeMatchId}`);
			commit("activeSet", data);
			return getters.activeMatch;
		},

		async create({commit, getters}, payload) {
			const {data} = await axios.post("/matches", payload);
			commit("activeSet", data);
			return getters.activeMatch;
		},

		async rematch({commit, state, getters}, payload) {
			const {data} = await axios.post(
				`/matches/${state.activeMatch.id}/rematch`,
				payload
			);
			commit("activeSet", data);
			return getters.activeMatch;
		},

		async complete({commit, state, getters}, payload) {
			if (!state.activeMatch) return;

			const {data} = await axios.post(
				`/matches/${state.activeMatch.id}/complete`,
				payload
			);
			commit("activeSet", data);
			return getters.activeMatch;
		},

		async start({commit, state, getters}, payload) {
			if (!state.activeMatch) return;

			const {data} = await axios.post(
				`/matches/${state.activeMatch.id}/start`,
				payload
			);
			commit("activeSet", data);
			return getters.activeMatch;
		},

		async pause({commit, state, getters}, payload) {
			if (!state.activeMatch) return;

			const {data} = await axios.post(
				`/matches/${state.activeMatch.id}/pause`,
				payload
			);
			commit("activeSet", data);
			return getters.activeMatch;
		},

		async resume({commit, state, getters}, payload) {
			if (!state.activeMatch) return;

			const {data} = await axios.post(
				`/matches/${state.activeMatch.id}/resume`,
				payload
			);
			commit("activeSet", data);
			return getters.activeMatch;
		},

		async score({commit, state, getters}, payload) {
			if (!state.activeMatch) return;

			const {data} = await axios.post(
				`/matches/${state.activeMatch.id}/score`,
				payload
			);
			commit("activeSet", data);
			return getters.activeMatch;
		},

		async decrementScore({commit, state, getters}, payload) {
			if (!state.activeMatch) return;

			const {data} = await axios.delete(
				`/matches/${state.activeMatch.id}/score`,
				{data: payload}
			);
			commit("activeSet", data);
			return getters.activeMatch;
		},

		async swap({commit, state, getters}, payload) {
			if (!state.activeMatch) return;

			const {data} = await axios.post(
				`/matches/${state.activeMatch.id}/swap`,
				payload
			);
			commit("activeSet", data);
			return getters.activeMatch;
		}
	},

	getters: {
		data(state) {
			return state.data;
		},

		activeMatch(state) {
			return state.activeMatch;
		}
	}
};
