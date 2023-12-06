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
    <ul class="results" v-if="searchResults.length > 0">
      <li v-for="(result, index) in searchResults" :key="index" class="result-item">
        {{ result.display_name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      searchResults: [],
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
          .then(data => { this.teste(data) })
          .catch(error => console.error('Erro na pesquisa:', error));
      }, 1500); // Tempo em milissegundos (aqui, 2000ms = 2 segundos)
    },
    teste(array) {
      array.forEach(objeto => {
      const propriedades = Object.keys(objeto);
      console.log(propriedades);
      })
    }
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
