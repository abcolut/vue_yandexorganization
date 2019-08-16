<template>
  <section>
    <h3>Карточка объекта </h3>
    <div> description: {{ item.properties.description }} </div>
    <div> boundedBy: {{ item.properties.text }} </div>
  </section>
</template>

<script>
  export default {
    name: 'Description',
    props: {
      item: { default: () => null, type: Object }
    },
  }


/*
{ "type": "Feature", 
"properties": { 
"name": "река Горячий", 
"description": "Северо-Байкальский район, Республика Бурятия, Россия", 
"boundedBy": [ [ 112.235278, 55.516354 ], [ 112.263979, 55.539003 ] ], 
"GeocoderMetaData": { "text": "Россия, Республика Бурятия, Северо-Байкальский район, река Горячий", "kind": "hydro", "precision": "other" } }, 
"geometry": { "type": "Point", "coordinates": [ 112.256856, 55.531117 ] } }
*/

</script>

<style scoped>
section{  
  padding:3px;
  border:1px solid grey;
  padding:20px;
  margin-top:20px;
}

</style>
