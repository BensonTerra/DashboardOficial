<template>
  <div>
    <v-form @submit.prevent="submitSearch">
      <input 
      type="text" 
      v-model="inputValue" 
      placeholder="Pesquisar localização"
      class="custom-input">
      <input type="submit" value="pesquisar" class="ml-2">
    </v-form>
    <ul class="results">
      <li v-for="(result, index) in searchResults" :key="index">
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
    teste() {
      console.log('Valor do input:', this.inputValue);
    },
    submitSearch() {
      var place = this.inputValue;

      fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${place}`)
      .then(response => response.json())
      .then(data => { this.searchResults = data; console.log})
      .catch(error => console.error('Erro na pesquisa:', error));
    },
  }
};
</script>


<style scoped>
  .custom-input:focus {
    outline: none;
  }

</style>