import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import yandexOrg from './yandexOrg.js';

export const store = new Vuex.Store({
	modules: {
		yandexOrg
	},
	state: {                                               
		serverDir: "https://search-maps.yandex.ru/v1/",
		APIKey: "319804a5-b8ca-4c1d-b33d-2aaa11ca49dd",
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

