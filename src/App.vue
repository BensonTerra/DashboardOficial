<script>
import customHeader from './components/headerCustom.vue'
import Map from './components/map.vue'

export default {
  name: 'App',
  data() {
    return {
      searchTerm: '', // O termo de pesquisa inserido pelo usuário
      mapHeight: ""
    };
  },
  components: {
    customHeader,
    Map,
  },
  methods: {
    searchLocation() {
      console.log(this.searchTerm)
    },
    calculateMapHeight() {
      return `${window.innerHeight}`;
    },
  },
  mounted () {
    this.mapHeight = this.calculateMapHeight();
  },
}

export const getDynamicMapHeight = (componentInstance) => {
  return componentInstance.mapHeight;
}
</script>

<template>
  <v-app>

    
    <div class="map-container">
      <div class="search-input">
        <customHeader/>
      </div>

      <div class="map">
        <Map ref="mapComponent"/>
      </div>

    </div>
  </v-app>
</template>

<style scoped>

.map-container {
  position: relative;
  width: 100%;
  height: 100%; /* Defina a altura desejada para o mapa */
}

.map {
  width: 100%;
  height: 100%;
  /* Estilos específicos do seu mapa, como tamanho, estilo, etc. */
}

.search-input {
  position: absolute;
  top: 20px; /* Posicione conforme necessário */
  left: 5.5%; /* Posicione conforme necessário */
  z-index: 999; /* Certifique-se de que o input fique sobre o mapa */
  width: 40%;
  
  background-color: #ffffffc1;
  border: 2px solid black;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 20px;
}

.transparente {
  background-color: #ffffff00;
}

</style>