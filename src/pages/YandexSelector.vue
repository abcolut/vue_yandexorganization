<template>
  <section>
    <div 
      v-for="item,i in items" 
      :style="isThisIndex(i)"
      class="item"
      @click="$emit('SelectThis', i)" 
    >
      {{ item.properties.name }} | {{ item.properties.description }}
    </div>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex';
  //import debounce from '../helper/debounce.js'  
  export default {
    name: 'Seletctor',
    props:{
      items: { default: () => [], type: Array },
      index: { default: () => null, type: Number }
    },
    data(){
      return{}
    },        
    computed:{},
    methods:{
      isThisIndex(i){
        if (i == this.index) {
          return {color: "brown"}
        }
      }
    },
  }
</script>

<style scoped>
section{  
  margin-top:20px;
  padding:3px;
  border:1px solid grey;
  border-radius:5px;
}

.item{
  margin:5px;
  padding:10px;
  background-color:#eeeee4;
  #border:1px solid grey;
  cursor:pointer;
  border-radius:3px;
}

</style>
