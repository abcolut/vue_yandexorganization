import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import yandexOrg from './yandexOrg.js';
import org from './org.js';

export const store = new Vuex.Store({
	modules: {
		yandexOrg, org,
	},
	state: {                                               
		serverDir: "https://search-maps.yandex.ru/v1/",
		APIKey: "319804a5-b8ca-4c1d-b33d-2aaa11ca49dd",
		//APIKey: "7cdf458e-94a5-4ae3-a051-d7ddf8d0df06",
	},
	getters: {
		getServerDir(state){
			return state.serverDir
		},
		getAPIKey(state){
			return state.APIKey
		},
	},
	//strict: process.env.NODE_ENV !== 'production'
});

