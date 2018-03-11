<template>
    <p>{{ msg }}</p>
</template>

<script>
    import pageMixins from '@/mixins/pageMixins';

    export default {
        data() {
            return {
                package: 'about',
                msg: 'Home | About'
            }
        },
        mixins: [pageMixins]
    }
</script>

<style scoped>

</style>
