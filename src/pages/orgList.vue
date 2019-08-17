<template>
  <section>
    <h3>Список отобранных организаций</h3>
    <table>
      <tbody>
        <tr v-for="org in organizations">
          <td>
            {{ org.name }}
          </td>
          <td>
            {{ org.desc }}
          </td>
          <td>
            {{ org.address }}
          </td>
          <td>
            {{ org.url }}
          </td>
          <td>
            {{ org.phone }}
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="1==3">
      organizations: {{ organizations }}
    </div>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: 'OrgList',
    data(){
      return{}
    },        
    computed:{
      ...mapGetters('org', {organizations: 'getOrganizations'}),   
    },
    methods:{
      isThisIndex(i){

      },
      SelectThis(i){
        console.log("SelectThis",i)
      }
    },
  }
</script>

<style scoped>

table {
  border: 2px solid grey;
  border-radius: 5px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
  border-radius: 3px;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}


</style>
