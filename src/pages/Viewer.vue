<template>
  <section>
    <h1>Организации</h1>      
    Строка поиска: 
    <input 
      v-model.trim="search"
      type="text"  
      placeholder="Строка поиска"
      @keydown="keyDownFunc"
    >
    обновление через .5c

    <selector 
      v-if="showSelectForm"
      :items="yandexOrg.features"
      :index="index"
      @SelectThis="SelectIt"
    />

    <description 
      v-if="!showSelectForm && index != null"
      :item="yandexOrg.features[index]"
    />
  </section>
</template>

<script>
  import {mapGetters} from 'vuex';
  import debounce from '../helper/debounce.js'  
  import selector from './Selector.vue'  
  import description from './Description.vue'  
  export default {
    name: 'Viewer', 
    components:{
      selector,
      description
    },  
    data(){
      return{
        search: "",
        showSelectForm: false,
        index: null,
      }
    },   
    computed:{
      ...mapGetters('yandexOrg', {yandexOrg: 'getAPI'}),      
    },
    watch: {
      search: debounce(function (newVal) {
        var debouncedInput = newVal
        if (debouncedInput.length > 4){
          this.$store.dispatch("yandexOrg/getAPI", {text: debouncedInput} )
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
