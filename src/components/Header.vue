<template>
    <ul class="navigation-list">
        <router-link v-for="navigationItem in navigationItems" :to="{ name: navigationItem.name }">
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
        background-color: lightblue;
        margin: 0;
        flex-wrap: nowrap;
        justify-content: center;
        list-style-type: none;

        a {
            margin: 10px;
            padding: 10px;
            text-decoration: none;
            background-color: gray;
            color: white;
            border-radius: 10px;
        }
    }
</style>
