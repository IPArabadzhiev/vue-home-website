<template>
    <div class="gallery-wrapper">
        <transition
            appear
            appear-class="gallery-thumb-appear"
            v-for="image in images">
            <div
                :style="{ backgroundImage: `url('${image}')` }"
                class="gallery-thumb">
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                imageNames: [
                    'logo-en-blue-dark.png',
                    'logo-en-blue-light.png',
                    'logo-en-blue-swap.png',
                    'logo-en-blue.png',
                    'logo-en-white.png',
                    'logo-bg-blue.png',
                    'logo-bg-blue-swap.png'
                ]
            }
        },
        computed: {
            images () {
                return this.imageNames.map((imageName) => { return require('@/assets/' + imageName); });
            }
        }
    }
</script>

<style scoped lang="scss">
    .gallery-wrapper {
        text-align: left;
        margin-top: 20px
    }

    .gallery-thumb {
        width: 25%;
        display: inline-block;
        height: 150px;
        background-size: contain;
        background-repeat: no-repeat;
        cursor: zoom-in;
        transition: all 0.35s ease-out;
    }

    .gallery-thumb-appear {
        transform: translateY(-20px);
        opacity: 0.4;
    }
</style>
