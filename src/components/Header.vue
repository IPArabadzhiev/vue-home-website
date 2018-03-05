<template>
    <div class="navigation-list-wrapper">
        <router-link :to="{name: 'home'}">
            <transition name="fade-fast">
                <img :src="logo" :key="logo" @mouseover="isLogoHovered = true" @mouseout="isLogoHovered = false">
            </transition>
        </router-link>
        <ul class="navigation-list container">
            <router-link v-for="navigationItem in navigationItems" :to="{ name: navigationItem.name }" :key="navigationItem.name">
                <li class="navigation-list-item">{{ navigationItem.value }}</li>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                isLogoHovered: false,
                navigationItems: [
                    {
                         value: 'Начало',
                         name: 'home'
                    },
                    {
                         value: 'За нас',
                         name: 'about'
                    },
                    {
                         value: 'Галерия',
                         name: 'gallery'
                    },
                    {
                         value: 'Цени',
                         name: 'prices'
                    },
                    {
                         value: 'Контакти',
                         name: 'contacts'
                    }
                ]
            }
        },
        computed: {
            logo() {
                return require(this.isLogoHovered ? '@/assets/logo-bg-blue-swap.png' : '@/assets/logo-bg-blue.png');
            }
        }
    }
</script>

<style scoped lang="scss">
    .navigation-list-wrapper {
        position: relative;
        background-color: rgba($color-light-blue-lighten-5, 0.4);
        height: 100px;
        margin: 0;
        padding: 20px;
        box-sizing: border-box;

        > a {
            position: absolute;
            top: 50%;
            left: 20%;
            height: 80%;

            @media (max-width: 1366px) {
                left: 20px;
            }

            img {
                position: absolute;
                max-height: 100%;
                transform: translate3d(0, -50%, 0);
            }
        }
    }
    .navigation-list {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        list-style-type: none;
        margin: auto;

        a {
            margin: 10px;
            padding: 10px;
            text-decoration: none;
            border: 2px solid $color-light-blue-lighten-3;
            border-left-color: $color-light-blue-lighten-5;
            border-right-color: $color-light-blue-lighten-5;
            color: $color-light-blue-darken-2;
            transition: all 0.4s ease-out, color 0.2s ease-out;
            font-weight: bold;

            &:not(.router-link-exact-active):hover {
                transform: translateX(-10px);
                border-top-color: $color-light-blue-darken-4;
                border-bottom-color: $color-light-blue-darken-4;
            }
        }
    }

    .navigation-list .router-link-exact-active {
        border-left-color: $color-light-blue-darken-4;
        border-right-color: $color-light-blue-darken-4;
        border-top-color: $color-light-blue-lighten-5;
        border-bottom-color: $color-light-blue-lighten-5;
        color: $color-light-blue-darken-4;
    }
</style>
