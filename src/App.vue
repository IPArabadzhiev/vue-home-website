<template>
  <div id="app">
      <app-header></app-header>
      <transition name="slide-fade" mode="out-in">
          <router-view/>
      </transition>
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
        font-family: 'Philosopher', sans-serif;
    }
    #app {
        padding: 0;
    }

    .slide-fade-enter {
        opacity: 0;
        transform: translateY(20px);
    }

    .slide-fade-enter-active {
        transition: all 0.35s ease-out;
    }

    .slide-fade-leave {

    }

    .slide-fade-leave-active {
        transition: all 0.35s ease-out;
        opacity: 0;
        transform: translateY(20px);
    }
</style>
