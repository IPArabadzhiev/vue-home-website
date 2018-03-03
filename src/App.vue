<template>
  <div id="app">
      <app-header></app-header>
      <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
    name: 'App',
    components: {
        appHeader: Header
    }
}
</script>

<style lang="scss">
    body {
        padding: 0;
        margin: 0;
    }
    #app {
        padding: 0;
    }
</style>
