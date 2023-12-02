<template>
  <div>
    <v-form @submit.prevent="teste">
      <input 
      type="text" 
      v-model="inputValue" 
      placeholder="Pesquisar localização"
      class="custom-input">
      <input type="submit" value="pesquisar" class="ml-2">
    </v-form>

  </div>

</template>

<script>
export default {
  data() {
    return {
      inputValue: ''
    };
  },
  methods: {
    teste() {
      // Lógica para lidar com o envio do formulário
      console.log('Valor do input:', this.inputValue);
      // Aqui você pode adicionar a lógica para enviar os dados, fazer uma chamada à API, etc.
    }
  }
};
</script>


<style scoped>
  .custom-input:focus {
    outline: none;
  }
</style>