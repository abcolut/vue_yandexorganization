import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import VueResource from 'vue-resource'
Vue.use(VueResource);

export default {
	namespaced: true,
	state: {
		organizations: 
		 [ 
		 //{ "name": "Магазин Магнитов на Таганке", "desc": "Марксистская ул., 10, стр. 1, Москва, Россия", "address": "Россия, Москва, Марксистская улица, 10, стр. 1", "url": "https://magnet-magazin.ru/", "phone": "+7 (495) 923-55-32" }, { "name": "Магнит", "desc": "Торжковская ул., 7, Санкт-Петербург, Россия", "address": "Россия, Санкт-Петербург, Торжковская улица, 7", "url": "http://magnit-info.ru/", "phone": "8 (800) 200-90-02" } 
		 ],
	},
	getters: {
		getOrganizations(state){
			return state.organizations
		},
	},
	mutations:{
		setOrganizations(state, data){
			if (data){
				state.organizations = data;
			}
		},
		addOrganization(state, data){
			state.organizations.push(data);
			var s = JSON.stringify(state.organizations)
			console.log("addOrganization",s)
			localStorage.organizations = s 
		},
	},
	actions:{
		getOrganizations(state){
			console.log("getOrganizations")			
			if (localStorage.organizations){
				var dat = localStorage.organizations
				dat = JSON.parse(dat)
				state.commit("setOrganizations", dat)
			}
		},
	}
}
