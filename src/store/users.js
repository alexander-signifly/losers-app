// import axios from "@/modules/axios";

export default {
	namespaced: true,

	state: {
		data: [
			{
				id: 1,
				name: "Yeray",
				image:
					"https://marvel-live.freetls.fastly.net/canvas/2019/7/60e3e9075ea445928840a8e163885263?quality=95&fake=.png"
			},
			{
				id: 2,
				name: "Hu My",
				image:
					"https://marvel-live.freetls.fastly.net/canvas/2019/7/a56daf1f52df480588a77b17905bf497?quality=95&fake=.png"
			},
			{
				id: 3,
				name: "Drake",
				image:
					"https://marvel-live.freetls.fastly.net/canvas/2018/9/ace11f81b47c4affbc423ebb78f0822f?quality=95&fake=.png"
			},
			{
				id: 4,
				name: "Cha",
				image:
					"https://marvel-live.freetls.fastly.net/canvas/2019/7/f7f96c759e4443efb69e3d209d7b6ece?quality=95&fake=.png"
			},
			{
				id: 5,
				name: "Naraya",
				image:
					"https://marvel-live.freetls.fastly.net/canvas/2018/10/0d17fc6da0ba4d92b3fbe07e01265b98?quality=95&fake=.png"
			},
			{
				id: 10,
				name: "Alexander",
				image:
					"https://marvel-live.freetls.fastly.net/canvas/2018/9/ace11f81b47c4affbc423ebb78f0822f?quality=95&fake=.png"
			}
		],
		home: [],
		away: []
	},

	mutations: {
		data(state, {data}) {
			state.data = data;
		},

		homeAdd(state, users) {
			state.home = users;
		},

		homeClear(state) {
			state.home = [];
		},

		awayAdd(state, users) {
			state.away = users;
		},

		awayClear(state) {
			state.away = [];
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
