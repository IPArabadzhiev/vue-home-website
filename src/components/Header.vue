<template>
    <ul class="navigation-list">
        <router-link v-for="navigationItem in navigationItems" :to="{ name: navigationItem.name }" :key="navigationItem.name">
            <li class="navigation-list-item">{{ navigationItem.value }}</li>
        </router-link>
    </ul>
</template>

<script>
    export default {
        data () {
            return {
                navigationItems: [
                    {
                         value: 'Home',
                         name: 'home'
                    },
                    {
                         value: 'About us',
                         name: 'about'
                    },
                    {
                         value: 'Contact us',
                         name: 'contacts'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .navigation-list {
        display: flex;
        background-color: $color-light-blue-lighten-5;
        margin: 0;
        flex-wrap: nowrap;
        justify-content: center;
        list-style-type: none;

        a {
            margin: 10px;
            padding: 10px;
            text-decoration: none;
            border: 2px solid $color-light-blue-lighten-3;
            border-left-color: $color-light-blue-lighten-5;
            border-right-color: $color-light-blue-lighten-5;
            color: $color-light-blue-darken-2;
            transition: border-color 0.4s ease-out, color 0.2s ease-out;
            font-weight: bold;

            &:hover,
            &:active {
                border-left-color: $color-light-blue-darken-4;
                border-right-color: $color-light-blue-darken-4;
                border-top-color: $color-light-blue-lighten-5;
                border-bottom-color: $color-light-blue-lighten-5;
                color: $color-light-blue-darken-4;
            }
        }
    }
</style>
