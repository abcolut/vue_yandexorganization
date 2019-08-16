import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import VueResource from 'vue-resource'
Vue.use(VueResource);

export default {
	namespaced: true,
	state: {
		api: {
			/*
			"type":"FeatureCollection",
			"properties":{"ResponseMetaData":{"SearchResponse":{"found":55,"display":"single","boundedBy":[[98.35266872,71.35989617],[98.49623747,71.44000651]]},"SearchRequest":{"request":"Горячий","skip":0,"results":10,"boundedBy":[[37.04842675,55.43644829],[38.17590226,56.04690124]]}}},
			"features":[
			{"type":"Feature","properties":{"name":"река Горячий","description":"Таймырский Долгано-Ненецкий район, Красноярский край, Россия","boundedBy":[[98.35266,71.359896],[98.496237,71.440007]],"GeocoderMetaData":{"text":"Россия, Красноярский край, Таймырский Долгано-Ненецкий район, река Горячий","kind":"hydro","precision":"other"}},"geometry":{"type":"Point","coordinates":[98.425881,71.400561]}},
			{"type":"Feature","properties":{"name":"река Горячий","description":"Каратузский район, Красноярский край, Россия","boundedBy":[[94.184845,53.20775],[94.21705,53.253438]],"GeocoderMetaData":{"text":"Россия, Красноярский край, Каратузский район, река Горячий","kind":"hydro","precision":"other"}},"geometry":{"type":"Point","coordinates":[94.205075,53.226681]}},
			{"type":"Feature","properties":{"name":"река Горячий","description":"Иркутский район, Иркутская область, Россия","boundedBy":[[104.90702,52.266363],[104.94103,52.313362]],"GeocoderMetaData":{"text":"Россия, Иркутская область, Иркутский район, река Горячий","kind":"hydro","precision":"other"}},"geometry":{"type":"Point","coordinates":[104.923198,52.290948]}},
			{"type":"Feature","properties":{"name":"река Горячий","description":"Северо-Байкальский район, Республика Бурятия, Россия","boundedBy":[[109.819331,55.348002],[109.886866,55.359435]],"GeocoderMetaData":{"text":"Россия, Республика Бурятия, Северо-Байкальский район, река Горячий","kind":"hydro","precision":"other"}},"geometry":{"type":"Point","coordinates":[109.85309,55.353826]}},
			{"type":"Feature","properties":{"name":"Горячий Ключ","description":"Краснодарский край, Россия","boundedBy":[[39.085923,44.617207],[39.206027,44.672751]],"GeocoderMetaData":{"text":"Россия, Краснодарский край, Горячий Ключ","kind":"locality","precision":"other"}},"geometry":{"type":"Point","coordinates":[39.136426,44.634246]}},
			{"type":"Feature","properties":{"name":"река Горячий","description":"Северо-Байкальский район, Республика Бурятия, Россия","boundedBy":[[112.235278,55.516354],[112.263979,55.539003]],"GeocoderMetaData":{"text":"Россия, Республика Бурятия, Северо-Байкальский район, река Горячий","kind":"hydro","precision":"other"}},"geometry":{"type":"Point","coordinates":[112.256856,55.531117]}},
			{"type":"Feature","properties":{"name":"река Горячий","description":"Красночикойский район, Забайкальский край, Россия","boundedBy":[[110.009953,50.21346],[110.052821,50.219881]],"GeocoderMetaData":{"text":"Россия, Забайкальский край, Красночикойский район, река Горячий","kind":"hydro","precision":"other"}},"geometry":{"type":"Point","coordinates":[110.031055,50.21946]}},
			{"type":"Feature","properties":{"name":"река Горячий","description":"Иволгинский район, Республика Бурятия, Россия","boundedBy":[[107.176847,51.845204],[107.188884,51.85994]],"GeocoderMetaData":{"text":"Россия, Республика Бурятия, Иволгинский район, река Горячий","kind":"hydro","precision":"other"}},"geometry":{"type":"Point","coordinates":[107.182282,51.852976]}},
			{"type":"Feature","properties":{"name":"река Горячий","description":"Бейский район, Республика Хакасия, Россия","boundedBy":[[90.961007,52.917897],[90.981929,52.918369]],"GeocoderMetaData":{"text":"Россия, Республика Хакасия, Бейский район, река Горячий","kind":"hydro","precision":"other"}},"geometry":{"type":"Point","coordinates":[90.971464,52.917989]}},
			{"type":"Feature","properties":{"name":"садовое товарищество Горячий","description":"Омский район, Омская область, Россия","boundedBy":[[73.137004,55.04595],[73.141262,55.051535]],"GeocoderMetaData":{"text":"Россия, Омская область, Омский район, садовое товарищество Горячий","kind":"locality","precision":"other"}},"geometry":{"type":"Point","coordinates":[73.139213,55.04857]}}]
			*/
		}
	},
	getters: {
		getAPI(state){
			return state.api
		},
	},
	mutations:{
		getAPI(state, data){
			state.api = data;
		}
	},
	actions:{
		getAPI(state,data){
			var serverDir = this.getters["getServerDir"];
			var APIKey = this.getters["getAPIKey"];
			var searchString = serverDir + "?apikey="+APIKey
			searchString = searchString +"&results=10&lang=ru_RU"
			searchString = searchString +"&text="+encodeURIComponent(data.text)
			console.log(searchString)
			//return
			Vue.http.get( searchString )
				.then(response => {
					//console.log("getAPI ", response);
					return response.json()						
				}
				)
				.then(data => {
					//console.log("getAPI ", data);
					state.commit('getAPI', data)
				}, response => {
					console.error("!!! ERROR getAPI()", response);
			});
		},
	}
}
