<template>
  <section>
    <h3>Поиск в Яндекс - организаторов</h3>      
    Строка поиска: 
    <input 
      v-model.trim="search"
      type="text"  
      placeholder="Имя организации"
      @keydown="keyDownFunc"
    >
    (обновление через .5c для строки больше 3х символов)

    <yandexSelector 
      v-if="showSelectForm"
      :items="yandexOrg.features"
      :index="index"
      @SelectThis="SelectIt"
    />
    <addNew 
      v-if="!showSelectForm && index != null"
      :item="yandexOrg.features[index]"
    />
    <div v-if="1==4"> 
      {{ yandexOrg }} 
    </div>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex';
  import debounce from '../helper/debounce.js'  
  import yandexSelector from './YandexSelector.vue'  
  import addNew from './AddNew.vue'  
  export default {
    name: 'Viewer', 
    components:{
      yandexSelector,
      addNew,
    },  
    data(){
      return{
        search: "",
        showSelectForm: false,
        //showSelectForm: true,
        index: null,
      }
    },   
    computed:{
      ...mapGetters('yandexOrg', {yandexOrg: 'getYandexOrganizations'}),      
    },
    watch: {
      search: debounce(function (newVal) {
        var debouncedInput = newVal
        if (debouncedInput.length > 3){
          this.$store.dispatch("yandexOrg/getYandexOrganizations", {text: debouncedInput} )
          //console.log("whatch")
          this.showSelectForm = true
          this.index = 0
        }
      }, 500)
    },
    methods:{
      keyDownFunc: function(event) {
        if (!this.showSelectForm) return
        if (event.keyCode == 38){
          if ( this.index == 0) {
            this.index = this.yandexOrg.features.length-1;
            retrun
          } 
          this.index-- 
          return
        }
        if (event.keyCode == 40){
          if ( this.index >= this.yandexOrg.features.length-1) {
            this.index = 0;
            return;
          }
          this.index++
          return
        }
        if (event.keyCode == 27){
          this.index = null
          this.showSelectForm = false  
          return
        }
        if (event.keyCode == 13){
          this.showSelectForm = false  
          return
        }
      },
      SelectIt(index){
        this.showSelectForm = false
        this.index = index
      },
    }
  }
</script>

<style scoped>
  input{
    margin: auto;
  }
</style>
