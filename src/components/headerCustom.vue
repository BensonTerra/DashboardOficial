<template>
  <v-app-bar elevation="0" class="custom-app-bar">
    <v-form @submit.prevent="">
      <v-text-field
      v-model="inputValue"
      label="Digite algo"
      class="custom-text-field"
      variant="solo"
      rounded
      
    ></v-text-field>
    <v-btn @click="handleSubmit" color="primary">Enviar</v-btn>
  </v-form>

  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ''
    };
  },
  methods: {
    handleSubmit() {
      // Lógica para lidar com o envio do formulário
      console.log('Valor do input:', this.inputValue);
      // Aqui você pode adicionar a lógica para enviar os dados, fazer uma chamada à API, etc.
    }
  }
};
</script>


<style scoped>
  .custom-app-bar {
    background-color: rgba(255, 255, 255, 0);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .custom-text-field {
    margin-top: 25px;
    margin-left: 10px;
    background-color: rgba(255, 255, 255, 0);
    max-width: 20%; /* Defina o tamanho máximo desejado para o campo de entrada */
  }
</style>