<script>
import { RouterLink, RouterView } from 'vue-router'
import customHeader from './components/headerCustom.vue'
export default {
  components: {
    customHeader,
  }
}
</script>

<template>
  <v-app>
    <customHeader/>
    <v-main class="d-flex align-center justify-center">
      <RouterView />
    </v-main>
  </v-app>

  <!--<RouterLink to="/">Home</RouterLink>-->
</template>

<style scoped>

</style>
