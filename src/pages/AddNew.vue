<template>
  <section>
    <h3>Добавление нового объекта</h3>

    <div class="item"> 
      Наименование: 
      <br>
      <input 
        ref="objName" 
        type="text" 
        :value="item.properties.name" 
        size="40"
      >
    </div>
    <div class="item"> 
      Описание: 
      <br>
      <input 
        ref="objDesc" 
        type="text" 
        :value="item.properties.description" 
        size="40"
      >
    </div>
    <div class="item"> 
      Адрес: 
      <br>
      <input 
        ref="objAddress" 
        type="text" 
        :value="item.properties.CompanyMetaData.address" 
        size="40"
      >
    </div>
    <div class="item"> 
      Сайт: 
      <br>
      <input 
        ref="objUrl" 
        type="text" 
        :value="item.properties.CompanyMetaData.url" 
        size="40"
      >    
    </div>
    <div class="item"> 
      Телефон: 
      <br>
      <input 
        ref="objPhone" 
        type="text" 
        :value="item.properties.CompanyMetaData.Phones" 
        size="40"
      >
    </div>

    <button @click="addNewObj()">
      Записать
    </button>

    <pre> 
      <h3>Пример JSON</h3>
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
    </pre> 
  </section>
</template>

<script>
  export default {
    name: 'AddNew',  
    props: {
      item: { default: () => null, type: Object }
    },
    data(){
      return{
      }
    },
    computed: {
    },
    watch: {
    },
    methods:{
      addNewObj(){
        var objName = this.$refs.objName.value
        var objDesc = this.$refs.objDesc.value
        var objAddress = this.$refs.objAddress.value
        var objUrl = this.$refs.objUrl.value
        var objPhone = this.$refs.objPhone.value
        var org = {name:objName, desc:objDesc, address:objAddress, url:objUrl, phone:objPhone}
        console.log("addNewObj", org )
        this.$store.commit("org/addOrganization",org)
        this.$router.push({name: "orgList"})
      }
    }
  }


</script>
<style scoped>
input, button{
  padding:3px;
  margin:5px;
  border-radius:3px;
}
section{  
  padding:3px;
  border:1px solid grey;
  padding:20px;
  margin-top:20px;
}

.item{
  margin-top:5px;
}
</style>
