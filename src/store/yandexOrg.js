import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import VueResource from 'vue-resource'
Vue.use(VueResource);

export default {
	namespaced: true,
	state: {
		yandexOrg: {

/*
	"type": "FeatureCollection", 
	"properties": { "ResponseMetaData": { "SearchResponse": { "found": 95, "display": "multiple" }, "SearchRequest": { "request": "магнит", "skip": 0, "results": 10, "boundedBy": [ [ 37.04842675, 55.43644829 ], [ 38.17590226, 56.04690124 ] ] } } }, 
	"features": [ 
		{ 
			"type": "Feature", 
			"properties": { 
				"name": "СуперМагнит", 
				"description": "ул. Яблочкова, 19, Москва, Россия", 
				"boundedBy": [ [ 37.57642054, 55.81599434 ], [ 37.58463114, 55.82061703 ] ], 
			"CompanyMetaData": { 
				"id": "125141280288", 
				"name": "СуперМагнит", 
				"address": "Россия, Москва, улица Яблочкова, 19", 
				"url": "http://supermagnit.net/", 
				"Phones": [ { "type": "phone", "formatted": "+7 (962) 860-01-78" } ], 
			"Categories": [ { "name": "Магниты и магнитные системы" } ], 
			"Hours": { "text": "пн-пт 9:00–21:00; сб 9:00–20:00; вс 9:00–16:00", 
			"Availabilities": [ { "Intervals": [ { "from": "09:00:00", "to": "21:00:00" } ], "Monday": true, "Tuesday": true, "Wednesday": true, "Thursday": true, "Friday": true }, { "Intervals": [ { "from": "09:00:00", "to": "20:00:00" } ], "Saturday": true }, { "Intervals": [ { "from": "09:00:00", "to": "16:00:00" } ], "Sunday": true } ] } } }, 
			"geometry": { "type": "Point", "coordinates": [ 37.580526, 55.818306 ] } }, 

		{ "type": "Feature", "properties": { "name": "Магнитные Элементы", "description": "Верхняя Первомайская ул., 43, Москва, Россия", "boundedBy": [ [ 37.79065975, 55.79714386 ], [ 37.79887035, 55.80176879 ] ], "CompanyMetaData": { "id": "89797197563", "name": "Магнитные Элементы", "address": "Россия, Москва, Верхняя Первомайская улица, 43", "url": "https://www.magelem.ru/", "Phones": [ { "type": "phone", "formatted": "+7 (495) 196-85-95" }, { "type": "phone", "formatted": "+7 (499) 290-36-46" } ], "Categories": [ { "name": "Магниты и магнитные системы" }, { "name": "Оптовая компания" } ], "Hours": { "text": "пн-пт 9:00–18:00", "Availabilities": [ { "Intervals": [ { "from": "09:00:00", "to": "18:00:00" } ], "Monday": true, "Tuesday": true, "Wednesday": true, "Thursday": true, "Friday": true } ] } } }, "geometry": { "type": "Point", "coordinates": [ 37.794765, 55.799456 ] } }, 
		{ "type": "Feature", "properties": { "name": "Магазин Магнитов на Таганке", "description": "Марксистская ул., 10, стр. 1, Москва, Россия", "boundedBy": [ [ 37.65266954, 55.73754221 ], [ 37.66088014, 55.74217425 ] ], "CompanyMetaData": { "id": "162672200187", "name": "Магазин Магнитов на Таганке", "address": "Россия, Москва, Марксистская улица, 10, стр. 1", "url": "https://magnet-magazin.ru/", "Phones": [ { "type": "phone", "formatted": "+7 (495) 923-55-32" }, { "type": "phone", "formatted": "+7 (985) 923-55-43" }, { "type": "phone", "formatted": "+7 (495) 923-55-43" }, { "type": "phone", "formatted": "+7 (985) 923-55-32" } ], "Categories": [ { "name": "Магниты и магнитные системы" } ], "Hours": { "text": "пн-пт 10:00–19:00; сб 10:00–16:00", "Availabilities": [ { "Intervals": [ { "from": "10:00:00", "to": "19:00:00" } ], "Monday": true, "Tuesday": true, "Wednesday": true, "Thursday": true, "Friday": true }, { "Intervals": [ { "from": "10:00:00", "to": "16:00:00" } ], "Saturday": true } ] } } }, "geometry": { "type": "Point", "coordinates": [ 37.656779, 55.739856 ] } }, 
		{ "type": "Feature", "properties": { "name": "Магазин Магнитов", "description": "ул. Гарибальди, 23, Москва, Россия", "boundedBy": [ [ 37.54939023, 55.66910722 ], [ 37.55760083, 55.67374742 ] ], "CompanyMetaData": { "id": "125172571405", "name": "Магазин Магнитов", "address": "Россия, Москва, улица Гарибальди, 23", "url": "https://24magnet.ru/", "Phones": [ { "type": "phone", "formatted": "+7 (495) 231-94-13" }, { "type": "phone", "formatted": "+7 (985) 231-94-13" } ], "Categories": [ { "name": "Магниты и магнитные системы" }, { "class": "industrial enterprise", "name": "Производственное предприятие" }, { "name": "Металлоискатели" } ], "Hours": { "text": "ежедневно, 10:00–21:00", "Availabilities": [ { "Intervals": [ { "from": "10:00:00", "to": "21:00:00" } ], "Everyday": true } ] } } }, "geometry": { "type": "Point", "coordinates": [ 37.553492, 55.671425 ] } }, 
		{ "type": "Feature", "properties": { "name": "Центр металлоискателей Libk", "description": "Комсомольская площадь, 2, Москва, Россия", "boundedBy": [ [ 37.65155563, 55.77211208 ], [ 37.65976623, 55.77674 ] ], "CompanyMetaData": { "id": "1583255939", "name": "Центр металлоискателей Libk", "address": "Россия, Москва, Комсомольская площадь, 2", "url": "https://libk.ru/", "Phones": [ { "type": "phone", "formatted": "+7 (495) 923-50-49" } ], "Categories": [ { "name": "Металлоискатели" }, { "name": "Магниты и магнитные системы" }, { "name": "Магазин нумизматики" } ], "Hours": { "text": "ежедневно, 9:00–21:00", "Availabilities": [ { "Intervals": [ { "from": "09:00:00", "to": "21:00:00" } ], "Everyday": true } ] } } }, "geometry": { "type": "Point", "coordinates": [ 37.655659, 55.774427 ] } }, 
		{ "type": "Feature", "properties": { "name": "Магнит", "description": "Булатниковская ул., 9, Москва, Россия", "boundedBy": [ [ 37.64590522, 55.57639589 ], [ 37.65411583, 55.58104712 ] ], "CompanyMetaData": { "id": "1628644181", "name": "Магнит", "address": "Россия, Москва, Булатниковская улица, 9", "url": "http://magnit-info.ru/", "Phones": [ { "type": "phone", "formatted": "8 (800) 200-90-02" } ], "Categories": [ { "class": "supermarket", "name": "Супермаркет" } ], "Hours": { "text": "ежедневно, 7:30–23:30", "Availabilities": [ { "Intervals": [ { "from": "07:30:00", "to": "23:30:00" } ], "Everyday": true } ] } } }, "geometry": { "type": "Point", "coordinates": [ 37.650011, 55.578724 ] } }, 
		{ "type": "Feature", "properties": { "name": "Магнит", "description": "Торжковская ул., 7, Санкт-Петербург, Россия", "boundedBy": [ [ 30.3077114, 59.98696543 ], [ 30.315922, 59.99107902 ] ], "CompanyMetaData": { "id": "1185376264", "name": "Магнит", "address": "Россия, Санкт-Петербург, Торжковская улица, 7", "url": "http://magnit-info.ru/", "Phones": [ { "type": "phone", "formatted": "8 (800) 200-90-02" } ], "Categories": [ { "class": "supermarket", "name": "Супермаркет" } ], "Hours": { "text": "ежедневно, 0:10–23:30", "Availabilities": [ { "Intervals": [ { "from": "00:10:00", "to": "23:30:00" } ], "Everyday": true } ] } } }, "geometry": { "type": "Point", "coordinates": [ 30.31182, 59.989024 ] } }, 
		{ "type": "Feature", "properties": { "name": "Магнит", "description": "ул. Голубые Дали, 34А, микрорайон Адлер, Сочи, Россия", "boundedBy": [ [ 39.90199711, 43.44704791 ], [ 39.91020771, 43.45302977 ] ], "CompanyMetaData": { "id": "1268305529", "name": "Магнит", "address": "Россия, Краснодарский край, Сочи, микрорайон Адлер, улица Голубые Дали, 34А", "url": "http://magnit-info.ru/", "Phones": [ { "type": "phone", "formatted": "8 (800) 200-90-02" } ], "Categories": [ { "class": "supermarket", "name": "Супермаркет" } ], "Hours": { "text": "ежедневно, 8:00–23:00", "Availabilities": [ { "Intervals": [ { "from": "08:00:00", "to": "23:00:00" } ], "Everyday": true } ] } } }, "geometry": { "type": "Point", "coordinates": [ 39.906102, 43.450038 ] } }, 
		{ "type": "Feature", "properties": { "name": "Магнит", "description": "Приреченская ул., 2/5, Сочи, Россия", "boundedBy": [ [ 39.93119236, 43.4205085 ], [ 39.93940296, 43.426493 ] ], "CompanyMetaData": { "id": "1149247884", "name": "Магнит", "address": "Россия, Краснодарский край, Сочи, Приреченская улица, 2/5", "url": "http://www.magnit-info.ru/", "Phones": [ { "type": "phone", "formatted": "8 (800) 200-90-02" }, { "type": "phone", "formatted": "+7 (861) 277-45-62" }, { "type": "phone", "formatted": "+7 (861) 210-98-10" } ], "Categories": [ { "class": "hypermarket", "name": "Продуктовый гипермаркет" } ], "Hours": { "text": "ежедневно, круглосуточно", "Availabilities": [ { "TwentyFourHours": true, "Everyday": true } ] } } }, "geometry": { "type": "Point", "coordinates": [ 39.9353, 43.4235 ] } }, 
		{ "type": "Feature", "properties": { "name": "Магнит", "description": "ул. Ленина, 130А, микрорайон Адлер, Сочи, Россия", "boundedBy": [ [ 39.90824939, 43.43445395 ], [ 39.91645999, 43.44043707 ] ], "CompanyMetaData": { "id": "1593826877", "name": "Магнит", "address": "Россия, Краснодарский край, Сочи, микрорайон Адлер, улица Ленина, 130А", "url": "http://magnit-info.ru/", "Phones": [ { "type": "phone", "formatted": "8 (800) 200-90-02" } ], "Categories": [ { "class": "supermarket", "name": "Супермаркет" } ], "Hours": { "text": "ежедневно, 7:00–23:30", "Availabilities": [ { "Intervals": [ { "from": "07:00:00", "to": "23:30:00" } ], "Everyday": true } ] } } }, "geometry": { "type": "Point", "coordinates": [ 39.912359, 43.437447 ] } } 
	] 
*/

		}
	},
	getters: {
		getYandexOrganizations(state){
			return state.yandexOrg
		},
	},
	mutations:{
		getYandexOrganizations(state, data){
			state.yandexOrg = data;
		},
	},
	actions:{
		getYandexOrganizations(state,data){
			var serverDir = this.getters["getServerDir"];
			var APIKey = this.getters["getAPIKey"];
			var searchString = serverDir + "?apikey="+APIKey
			searchString = searchString +"&results=10&lang=ru_RU&type=biz"
			searchString = searchString +"&text="+encodeURIComponent(data.text)
			//return
			Vue.http.get( searchString )
				.then(response => {

					return response.json()						
				}
				)
				.then(data => {
					//console.log("getYandexOrganizations ", data);
					state.commit('getYandexOrganizations', data)
				}, response => {
					console.error("!!! ERROR getYandexOrganizations()", response);
			});
		},
	}
}
