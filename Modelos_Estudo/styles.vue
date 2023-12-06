<script>
export default {
  data() {
    return {
      ativarAlturaPequena: false // Exemplo de variável que controla a altura
    };
  },
  computed: {
    alturaClasse() {
      return this.ativarAlturaPequena ? 'classe-altura-pequena' : 'classe-altura-grande';
    }
  }
};
</script>

<template>
  <div :class="alturaClasse">
    Elemento com altura dinâmica
  </div>
</template>

<style>
/* Estilos CSS para as classes de altura */
.classe-altura-pequena {
  color: red; /* Defina a altura desejada para a classe altura-pequena */
}

.classe-altura-grande {
  color: blueviolet; /* Defina a altura desejada para a classe altura-grande */
}
</style>