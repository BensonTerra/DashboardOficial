<template>
  <div>
    <v-form @submit.prevent="submitSearch">
      <div class="inputContainer">
        <input 
          type="text" 
          v-model="inputValue" 
          placeholder="Pesquisar localização"
          class="custom-input"
          @input="submitSearch"
        >
        <input type="submit" value="Pesquisar" class="ml-2">
      </div>
    </v-form>
    <ul class="results" v-if="searchResults.length > 0" :style="{ maxHeight: maxHeight + 'px' }">
      <li class="result-item" v-for="(result, index) in searchResults" :key="index" @click="handleItemClick(result)">
        {{ result.display_name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useMapStore } from "@/stores/mapConfig";
export default {
  
  data() {
    return {
      inputValue: '',
      searchResults: [],
      maxHeight: 0,
      map: null,
      markerMap: null,
      mapStore: useMapStore()
    };
  },
  methods: {
    submitSearch() {
      let timer = null
      clearTimeout(timer); // Limpa o temporizador existente, se houver
      timer = setTimeout(() => {
        var place = this.inputValue;
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${place}`)
          .then(response => response.json())
          .then(data => { 
            this.searchResults = data; 
            this.setMaxHeight() 
          })
          .catch(error => console.error('Erro na pesquisa:', error));
      }, 1500);
    },

    setMaxHeight() {
      // Defina a altura máxima para mostrar apenas 3 itens
      const listItemHeight = 50; // Altura estimada de cada item <li> em pixels
      const maxItemsToShow = 5;
      const totalItems = this.searchResults.length;
      const calculatedHeight = Math.min(listItemHeight * maxItemsToShow, listItemHeight * totalItems);

      this.maxHeight = calculatedHeight;
    },

    handleItemClick(result) {
      console.clear()
      console.log('Você clicou em:', result);

      var bounds = [
        [result.boundingbox[0], result.boundingbox[2]], 
        [result.boundingbox[1], result.boundingbox[3]]
      ]; //console.log(bounds)
      console.log(result.lat, result.lon)

      this.map = this.$parent.$parent.$refs.mapComponent.mapa; console.log(this.map)
      this.map.fitBounds(bounds);
      
      
    },
  },
};
</script>

<style scoped>
.inputContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* Para alinhamento horizontal */
}

.custom-input {
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border-left: none;
  border-right: none;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  flex: 1;
  margin-right: 10px;
}

.custom-search-input:focus {
  outline: none;
}

.results {
  overflow-y: auto;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.result-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}

.result-table {
  flex: 1;
}

.result-table p {
  margin: 0;
  font-weight: bold;
}

/* Adicione estilos adicionais para os detalhes do local, se necessário */
.result-table span {
  display: block;
  color: #666;
}

.result-item:hover {
  background-color: #f0f0f0;
}
</style>
