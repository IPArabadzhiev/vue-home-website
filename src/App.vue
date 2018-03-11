<template>
    <div id="app">
        <app-header></app-header>
        <div class="container">
            <transition name="slide-up-fade" mode="out-in">
                <keep-alive>
                    <router-view/>
                </keep-alive>
            </transition>
        </div>
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
        color: $color-light-blue-darken-4;
    }

    #app {
        padding: 0;
    }

    .container {
        width: 60%;
        margin: auto;

        @media (max-width: 1366px) {
            width: 80%;
        }
    }

    // transitions

    // slide-up-fade
    .slide-up-fade-enter {
        opacity: 0;
        transform: translateY(20px);
    }

    .slide-up-fade-enter-active {
        transition: all 0.35s ease-out;
    }

    .slide-up-fade-leave {

    }

    .slide-up-fade-leave-active {
        transition: all 0.35s ease-out;
        opacity: 0;
        transform: translateY(20px);
    }

    // slide-right-fade
    .slide-up-fade-enter {
        opacity: 0;
        transform: translateX(-20px);
    }

    .slide-up-fade-enter-active {
        transition: all 0.35s ease-out;
    }

    .slide-up-fade-leave {

    }

    .slide-up-fade-leave-active {
        transition: all 0.35s ease-out;
        opacity: 0;
        transform: translateX(20px);
    }

    // fade
    .fade-fast-enter {
        opacity: 0;
    }

    .fade-fast-enter-active {
        transition: all 0.35s ease-out;
    }

    .fade-fast-leave {

    }

    .fade-fast-leave-active {
        transition: all 0.35s ease-out;
        opacity: 0;
    }
</style>
